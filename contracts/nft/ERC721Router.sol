// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;

// ============ External Imports ============
import {TypedMemView} from "@summa-tx/memview-sol/contracts/TypedMemView.sol";

// ============ Internal Imports ============
import {ERC721Message} from "./ERC721Message.sol";
import {Router} from "../Router.sol";
import {XAppConnectionClient} from "../XAppConnectionClient.sol";
import {ERC721Registry} from "./ERC721Registry.sol";

contract ERC721Router is ERC721Registry, Router {
	function initialize(address _xAppConnectionManager) public initializer {
		__XAppConnectionClient_initialize(_xAppConnectionManager);
	}

	/**
	 * @return domain of chain on which the contract is deployed
	 */
	function _localDomain()
		internal
		view
		override(XAppConnectionClient)
		returns (uint32)
	{
		return XAppConnectionClient._localDomain();
	}

	function handle(
		uint32 _origin,
		bytes32 _sender,
		bytes memory _message
	) external override onlyReplica onlyRemoteRouter(_origin, _sender) {}
}
