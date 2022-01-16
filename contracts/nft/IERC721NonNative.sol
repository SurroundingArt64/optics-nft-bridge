// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;
pragma experimental ABIEncoderV2;
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

abstract contract IERC721NonNative is ERC721, Ownable {
	// VARIABLES
	address _localRouter;

	// EXTERNAL
	function handleExit(address to, uint256 tokenId) external onlyLocalRouter {
		_mint(to, tokenId);
	}

	function handleDeposit(uint256 tokenId) external onlyLocalRouter {
		require(ownerOf(tokenId) == _localRouter, "Cannot burn un-owner token");
		_burn(tokenId);
	}

	modifier onlyLocalRouter() {
		require(msg.sender == _localRouter);
		_;
	}
}
