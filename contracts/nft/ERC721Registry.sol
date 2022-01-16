// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;

import "./ERC721Message.sol";
import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol";

abstract contract ERC721Registry is Initializable {
	using TypedMemView for bytes;
	using TypedMemView for bytes29;
	using ERC721Message for bytes29;

	// local representation local token address => mapping address => token ID
	// These are mapped tokens by my understanding.
	// Owner or the governance contract can add tokens to this mapping.
	// address is local address and TokenId contains data like:
	// mapped to and on chain address
	mapping(address => mapping(uint32 => bytes32))
		public representationToCanonical;

	mapping(bytes32 => address) public canonicalToRepresentation;
}
