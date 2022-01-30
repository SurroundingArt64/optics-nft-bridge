import { Wallet } from "@ethersproject/wallet";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "ethers";

function domainHash(domain: Number): string {
	return ethers.utils.solidityKeccak256(
		["uint32", "string"],
		[domain, "OPTICS"]
	);
}

function getMessage(oldRoot: string, newRoot: string, localDomain: number) {
	return ethers.utils.concat([domainHash(localDomain), oldRoot, newRoot]);
}

export async function signUpdate(
	oldRoot: string,
	newRoot: string,
	localDomain: string,
	updaterSigner: SignerWithAddress | Wallet
) {
	let message = getMessage(oldRoot, newRoot, parseInt(localDomain));
	let msgHash = ethers.utils.arrayify(ethers.utils.keccak256(message));
	let signature = await updaterSigner.signMessage(msgHash);
	return {
		oldRoot,
		newRoot,
		signature,
	};
}
