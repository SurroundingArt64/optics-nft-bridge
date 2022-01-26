import { ethers } from "ethers";

export class MerkleTreeLib {
	TREE_DEPTH = 32;
	MAX_LEAVES = 2 ** this.TREE_DEPTH - 1;

	branch: Buffer[] = [];
	count = 0;

	constructor() {}

	insert(_node: any) {
		this.count += 1;
		let size = ethers.BigNumber.from(this.count);

		for (let i = 0; i < this.TREE_DEPTH; i++) {
			// console.log("_node", { _node, size: size.toString(), i });
			if (size.eq(0) || this.branch[i] === undefined) {
				this.branch[i] = _node;
				return _node;
			}
			_node = ethers.utils.solidityKeccak256(
				["bytes32", "bytes32"],
				[this.branch[i], _node]
			);
			size.div(2);
		}
	}

	hash(data: string) {
		return Buffer.from(
			ethers.utils.solidityKeccak256(["bytes32"], [data]).slice(2),
			"hex"
		);
	}
}
