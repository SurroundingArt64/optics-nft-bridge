import { keccak256 } from "@ethersproject/keccak256";
import { expect, use } from "chai";
import { solidity } from "ethereum-waffle";
import { ethers } from "ethers";
import {
	getNativeNetwork,
	getRemotes,
	NetworkData,
	setupTest,
} from "./fixtures";
import { getEncodePackedForReceipt } from "./utils";

const abiCoder = new ethers.utils.AbiCoder();

use(solidity);
describe("OpticsBridge", () => {
	let networks: NetworkData[];
	let deployer: string;
	before(async () => {
		({ networks, deployer } = await setupTest());
	});

	describe("transfer from native to remote 1", () => {
		it("Lock on native", async () => {
			const local = getNativeNetwork(networks);
			const remote = getRemotes(networks, local.name)![0];

			await local.nativeContract.mintBatch(100);

			await local.nativeContract.setApprovalForAll(
				local.contracts.ERC721Router.address,
				true
			);

			const messageBody = abiCoder.encode(
				[
					"address",
					"uint32",
					"uint32",
					"address",
					"address",
					"uint256",
					"uint8",
				],
				[
					local.nativeContract.address,
					parseInt(local.localDomain.toString()),
					parseInt(remote.localDomain.toString()),
					remote.nonNativeContract.address,
					deployer,
					1,
					1,
				]
			);

			// console.log(

			const formattedMessage = ethers.utils.solidityKeccak256(
				["uint32", "bytes32", "uint32", "uint32", "bytes32", "bytes"],
				[
					parseInt(local.localDomain.toString()),
					"0x" +
						local.contracts.ERC721Router.address
							.slice(2)
							.padStart(64, "0")
							.toLowerCase(),
					await local.contracts.Home.nonces(remote.localDomain),
					parseInt(remote.localDomain.toString()),
					"0x" +
						remote.contracts.ERC721Router.address
							.slice(2)
							.padStart(64, "0")
							.toLowerCase(),
					messageBody,
				]
			);

			const tx = await local.contracts.ERC721Router.send(
				local.nativeContract.address,
				1,
				remote.localDomain,
				deployer
			);

			const receipt = await tx.wait();

			const encodePackedMessage = getEncodePackedForReceipt(receipt);

			await expect(tx)
				.to.emit(local.contracts.ERC721Router, "DispatchFrom721")
				.withArgs(keccak256(messageBody), messageBody)
				.to.emit(local.contracts.Home, "Dispatch")
				.withArgs(
					formattedMessage,
					0,
					8589934592000,
					ethers.constants.HashZero,
					// as the below value is encodePacked
					// it can be ambiguous hence hardcoded
					encodePackedMessage
				);
			console.log(
				await local.replicas
					.filter((elem) => elem.name === remote.name)[0]
					.contract.committedRoot()
			);
		});
	});
});
