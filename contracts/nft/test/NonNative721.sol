// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "./Native721.sol";
import "../IERC721NonNative.sol";

contract NonNative721 is Native721, IERC721NonNative {
	constructor(string memory _name, string memory _symbol)
		Native721(_name, _symbol)
	{}
}
