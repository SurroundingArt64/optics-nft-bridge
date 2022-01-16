// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;

contract MockXAppConnectionManager {
	address public home;
	uint32 _localDomain;
	address public replica;

	constructor(
		address _home,
		uint32 __localDomain,
		address _replica
	) {
		home = _home;
		_localDomain = __localDomain;
		replica = _replica;
	}

	function localDomain() external view returns (uint32) {
		return _localDomain;
	}

	/**
	 * @notice Only accept messages from an Optics Replica contract
	 */
	modifier onlyReplica() {
		require(_isReplica(msg.sender), "!replica");
		_;
	}

	/**
	 * @notice Determine whether _potentialReplcia is an enrolled Replica from the xAppConnectionManager
	 * @return True if _potentialReplica is an enrolled Replica
	 */
	function _isReplica(address _potentialReplica)
		internal
		view
		returns (bool)
	{
		return replica == (_potentialReplica);
	}

	function isReplica(address _replica) public view returns (bool) {
		return _isReplica(_replica);
	}
}
