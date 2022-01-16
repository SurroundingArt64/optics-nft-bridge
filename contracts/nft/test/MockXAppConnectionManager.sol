// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;

contract MockXAppConnectionManager {
	address public home;
	uint32 _localDomain;

	constructor(address _home, uint32 __localDomain) {
		home = _home;
		__localDomain = __localDomain;
	}

	function localDomain() external view returns (uint32) {
		return _localDomain;
	}
}
