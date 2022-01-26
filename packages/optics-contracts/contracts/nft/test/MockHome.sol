// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;

contract MockHome {
	event Dispatch(uint32, bytes32, bytes);

	function dispatch(
		uint32 _destinationDomain,
		bytes32 _recipientAddress,
		bytes memory _messageBody
	) public {
		emit Dispatch(_destinationDomain, _recipientAddress, _messageBody);
	}
}
