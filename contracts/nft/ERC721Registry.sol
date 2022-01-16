// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;

import "./ERC721Message.sol";
import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol";

abstract contract ERC721Registry is Initializable {
	using ERC721Message for bytes;
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
}
