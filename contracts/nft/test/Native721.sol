// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Native721 is ERC721 {
	uint32 counter;

	constructor(string memory _name, string memory _symbol)
		ERC721(_name, _symbol)
	{}

	function mint() public {
		_mint(msg.sender, counter++);
	}

	function mintBatch(uint256 tokenIds) public {
		for (uint256 index = 0; index < tokenIds; index++) {
			mint();
		}
	}
}
