// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;
pragma experimental ABIEncoderV2;
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

abstract contract IERC721NonNative is ERC721, Ownable {
	// VARIABLES
	address _localRouter;

	// EXTERNAL

	function setLocalRouter(address _router) public onlyOwner {
		_localRouter = _router;
	}

	function handleExit(address to, uint256 tokenId)
		external
		onlyLocalRouterOrReplica
	{
		_mint(to, tokenId);
	}

	function handleDeposit(uint256 tokenId) external onlyLocalRouterOrReplica {
		require(ownerOf(tokenId) == _localRouter, "Cannot burn un-owner token");
		_burn(tokenId);
	}

	modifier onlyLocalRouterOrReplica() {
		require(
			msg.sender == _localRouter,
			"Only local router can call this function"
		);
		_;
	}
}
