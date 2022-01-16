// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;
pragma experimental ABIEncoderV2;
// ============ Internal Imports ============
import {ERC721Message} from "./ERC721Message.sol";
import {Router} from "../Router.sol";
import {Home} from "@celo-org/optics-sol/contracts/Home.sol";
import {XAppConnectionClient} from "../XAppConnectionClient.sol";
import {ERC721Registry} from "./ERC721Registry.sol";
import {IERC721NonNative} from "./IERC721NonNative.sol";

import {IERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ERC721Router is ERC721Registry, Router {
	uint256[49] private __GAP;

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
		enrollRemoteRouter(_domain, bytes32(uint256(uint160(_router)) << 96));
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
			ERC721Message.ActionType actionType
		) = ERC721Message.decodeMessage(_message);
		require(
			actionType != ERC721Message.ActionType.Invalid,
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

		Home(xAppConnectionManager.home()).dispatch(
			_domain,
			_remote,
			ERC721Message.encodeMessage(
				_token,
				_localDomain(),
				_domain,
				_remoteToken,
				_recipient,
				_tokenId,
				ERC721Message.ActionType.Transfer
			)
		);
	}
}
