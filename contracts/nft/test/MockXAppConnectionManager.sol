// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;

contract MockXAppConnectionManager {
	address public home;

	constructor(address _home) {
		home = _home;
	}
}
