// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;
pragma experimental ABIEncoderV2;

library ERC721Message {
	enum ActionType {
		Invalid,
		Transfer // 1
	}

	function encodeMessage(
		address localToken,
		uint32 senderDomain,
		uint32 receiverDomain,
		address remoteToken,
		address recipient,
		uint256 tokenId,
		ActionType actionType
	) internal pure returns (bytes memory) {
		return
			abi.encode(
				localToken,
				senderDomain,
				receiverDomain,
				remoteToken,
				recipient,
				tokenId,
				actionType
			);
	}

	// Flips the remote and local tokens
	// Also, domain is remote domain.
	function decodeMessage(bytes memory data)
		internal
		pure
		returns (
			address remoteToken,
			uint32 remoteDomain,
			uint32 localDomain,
			address localToken,
			address recipient,
			uint256 tokenId,
			ActionType actionType
		)
	{
		(
			remoteToken,
			remoteDomain,
			localDomain,
			localToken,
			recipient,
			tokenId,
			actionType
		) = abi.decode(
			data,
			(address, uint32, uint32, address, address, uint256, ActionType)
		);
	}
}
