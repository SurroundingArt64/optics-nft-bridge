// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;
pragma experimental ABIEncoderV2;
// ============ Internal Imports ============
import {ERC721Message} from "./ERC721Message.sol";
import {Router} from "../Router.sol";
import {Home, MerkleLib} from "@celo-org/optics-sol/contracts/Home.sol";
import {XAppConnectionClient} from "../XAppConnectionClient.sol";
import {IERC721NonNative} from "./IERC721NonNative.sol";
import "hardhat/console.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "./ERC721Message.sol";

import "hardhat/console.sol";

contract ERC721Router is Router {
	address _tokenMapper;
	struct LocalTokenData {
		// check if token is native. If native, it is not mint-able
		// only transferred to registry.
		bool isNative;
		// check if token is transferred to registry
		mapping(uint256 => bool) isTransferred;
	}
	// TokenData
	mapping(address => LocalTokenData) public localTokenData;

	// local representation local token address => mapping address => token ID
	// These are mapped tokens by my understanding.
	// Owner or the governance contract can add tokens to this mapping.
	// address is local address and TokenId contains data like:
	// mapped to and on chain address
	mapping(address => mapping(uint32 => address)) public remoteTokenIds;

	uint256[49] private __GAP;

	event MapTokens(
		address localToken,
		uint32 domain,
		address remoteToken,
		bool isNative
	);

	function isTransferred(address addr, uint256 tokenId)
		public
		view
		returns (bool)
	{
		return localTokenData[addr].isTransferred[tokenId];
	}

	function initialize(address _xAppConnectionManager, address __tokenMapper)
		public
		initializer
	{
		__XAppConnectionClient_initialize(_xAppConnectionManager);
		_tokenMapper = __tokenMapper;
	}

	function enrollRemoteRouterByAddress(uint32 _domain, address _router)
		external
		onlyOwner
	{
		enrollRemoteRouter(_domain, bytes32(uint256(uint160(_router))));
	}

	function handle(
		uint32 _origin,
		bytes32 _sender,
		bytes memory _message
	) external override onlyReplica onlyRemoteRouter(_origin, _sender) {
		// decode message with erc721message
		(
			address remoteToken,
			uint32 remoteDomain,
			uint32 localDomain,
			address localToken,
			address recipient,
			uint256 tokenId,
			uint8 actionType
		) = ERC721Message.decodeMessage(_message);

		require(
			ERC721Message.ActionType(actionType) !=
				ERC721Message.ActionType.Invalid,
			"Invalid action type"
		);
		// check if details are correct
		require(localDomain == _localDomain(), "Invalid domain");
		require(
			remoteTokenIds[localToken][remoteDomain] == remoteToken,
			"Invalid mapping."
		);

		if (
			localTokenData[localToken].isNative &&
			localTokenData[localToken].isTransferred[tokenId]
		) {
			// transfer from registry
			IERC721 _tokenContract = IERC721(localToken);

			_tokenContract.transferFrom(address(this), recipient, tokenId);
			localTokenData[localToken].isTransferred[tokenId] = false;
			return;
		}

		// If it not native, then cannot transfer.
		// by default, the token is never kept in the registry
		// It is burnt immediately after.
		if (!localTokenData[localToken].isNative) {
			IERC721NonNative _tokenContract = IERC721NonNative(localToken);
			_tokenContract.handleExit(recipient, tokenId);
			return;
		}

		// Code should never reach here.
		require(false, "Reached invalid-scenario.");
	}

	event DispatchFrom721(bytes32 messageHash, bytes messageBody);

	/**
	 * @notice Send tokens to a recipient on a remote chain
	 * @param _token The token address
	 * @param _tokenId The token amount
	 * @param _domain The destination domain
	 * @param _recipient The recipient address
	 */
	function send(
		address _token,
		uint256 _tokenId,
		uint32 _domain,
		address _recipient
	) external {
		require(_recipient != address(0), "!recip");
		// get remote BridgeRouter address; revert if not found
		bytes32 _remote = _mustHaveRemote(_domain);

		address _remoteToken = remoteTokenIds[_token][_domain];

		require(_remoteToken != address(0), "Token not mapped");
		// get token contract
		IERC721 _tokenContract = IERC721(_token);

		_tokenContract.transferFrom(msg.sender, address(this), _tokenId);

		// if token is not native then burn
		if (!localTokenData[_token].isNative) {
			IERC721NonNative(_token).handleDeposit(_tokenId);
		} else {
			localTokenData[_token].isTransferred[_tokenId] = true;
		}

		bytes memory messageBody = ERC721Message.encodeMessage(
			_token,
			_localDomain(),
			_domain,
			_remoteToken,
			_recipient,
			_tokenId,
			uint8(ERC721Message.ActionType.Transfer)
		);

		emit DispatchFrom721(keccak256(messageBody), messageBody);

		Home(xAppConnectionManager.home()).dispatch(
			_domain,
			_remote,
			messageBody
		);
	}

	function mapTokens(
		address localToken,
		uint32 domain,
		address remoteToken,
		bool isNative
	) external {
		require(msg.sender == _tokenMapper, "Only token mapper can map tokens");

		// check if router exists for domain
		_mustHaveRemote(domain);

		remoteTokenIds[localToken][domain] = remoteToken;
		localTokenData[localToken].isNative = isNative;
		emit MapTokens(localToken, domain, remoteToken, isNative);
	}

	function setTokenMapper(address __tokenMapper) external onlyOwner {
		_tokenMapper = __tokenMapper;
	}

	function branchRoot(
		bytes32 _leaf,
		bytes32[32] calldata _proof,
		uint256 _index
	) public pure returns (bytes32 _current) {
		return MerkleLib.branchRoot(_leaf, _proof, _index);
	}
}
