import { ethers } from "hardhat";
import { MerkleTreeLib } from "../test/bridge/merkle";
import { signUpdate } from "../test/bridge/signature";
import { initialRoots } from "../test/bridge/utils";

async function main() {
	const formattedMessage =
		"0x05e97104a73dcbd76e8178483e6f5d209675ff9a7e254b7e334822fc245841ea";

	const updatedTreeNodesOnOppositeHome = initialRoots.map((elem, index) => {
		if (index === 0) {
			return formattedMessage;
		}
		return elem;
	});
	const addedNodes: any[] = [];
	const merkle = new MerkleTreeLib();

	updatedTreeNodesOnOppositeHome.forEach((elem) => {
		addedNodes.push(merkle.insert(elem));
	});

	console.log(addedNodes.length);

	const data = await ethers.getSigners();

	console.log(data[1].address);

	const { signature } = await signUpdate(
		"0x0000000000000000000000000000000000000000000000000000000000000000",
		"0x9c06616680b466865f38b86d62ec9a35b315944f4ced603f930c227681ab6940",
		"1000",
		data[1]
	);
	console.log({ signature });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
