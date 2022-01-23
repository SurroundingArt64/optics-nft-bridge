import { ethers } from "ethers";

export function getEncodePackedForReceipt(receipt: ethers.ContractReceipt) {
	const ABI = [
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "bytes32",
					name: "messageHash",
					type: "bytes32",
				},
				{
					indexed: true,
					internalType: "uint256",
					name: "leafIndex",
					type: "uint256",
				},
				{
					indexed: true,
					internalType: "uint64",
					name: "destinationAndNonce",
					type: "uint64",
				},
				{
					indexed: false,
					internalType: "bytes32",
					name: "committedRoot",
					type: "bytes32",
				},
				{
					indexed: false,
					internalType: "bytes",
					name: "message",
					type: "bytes",
				},
			],
			name: "Dispatch",
			type: "event",
		},
	];
	const dispatchInterface = new ethers.utils.Interface(ABI);
	const encodePackedMessage = dispatchInterface.parseLog(
		receipt.logs.filter(
			(elem) =>
				elem.topics[0] ===
				"0x9d4c83d2e57d7d381feb264b44a5015e7f9ef26340f4fc46b558a6dc16dd811a"
		)[0]
	).args.message;
	return encodePackedMessage;
}
