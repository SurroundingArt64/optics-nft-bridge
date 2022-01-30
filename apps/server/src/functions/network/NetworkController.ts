import { ethers } from "ethers";
import { Response } from "express";
import {
	Get,
	JsonController,
	Param,
	QueryParam,
	Res,
} from "routing-controllers";
import Container, { Service } from "typedi";
import { NetworkFunctions } from "./NetworkFunctions";
import {
	getLogsForSend,
	initialRoots,
} from "optics-contracts/test/bridge/utils";

import { MerkleTreeLib } from "optics-contracts/test/bridge/merkle";

import { abi as ReplicaABI } from "optics-contracts/artifacts/@celo-org/optics-sol/contracts/Replica.sol/Replica.json";
import { abi as ERC721RouterABI } from "optics-contracts/artifacts/contracts/nft/ERC721Router.sol/ERC721Router.json";
import { signUpdate } from "optics-contracts/test/bridge/signature";
import { ERC721Router, Replica } from "optics-contracts/typechain";
import { readFileSync } from "fs";

import { CeloProvider, CeloWallet } from "@celo-tools/celo-ethers-wrapper";

const nf = Container.get(NetworkFunctions);

@Service()
@JsonController("/network/", {
	transformResponse: false,
})
export class NetworkController {
	@Get("info")
	async info(@Res() res: Response) {
		res.setHeader("Content-Type", "application/json");
		return res.send(JSON.stringify(await nf.getInfo(), undefined, 4));
	}

	@Get(":chainId/contracts/router")
	async getRouter(@Param("chainId") chainId: number) {
		return (await nf.getNetworkByChainId(chainId)).ERC721Router;
	}

	@Get(":chainId/contracts/home")
	async getHome(@Param("chainId") chainId: number) {
		return (await nf.getNetworkByChainId(chainId)).ERC721Router;
	}

	@Get(":chainId/contracts/queue")
	async queueTransaction(
		@Param("chainId") chainId: number,
		@QueryParam("transactionHash") transactionHash: string
	) {
		const network = await nf.getNetworkByChainId(chainId);
		const provider = new ethers.providers.JsonRpcProvider(network.rpcURL);

		const receipt = await provider.getTransactionReceipt(transactionHash);
		const {
			destinationAndNonce,
			formattedMessage,
			message: encodePackedMessage,
		} = getLogsForSend(receipt);

		const remoteDomain = parseInt(
			destinationAndNonce.toHexString().slice(0, 6),
			16
		);

		const remote = await nf.getNetworkByLocalDomain(remoteDomain);

		const replicaOnRemote = await nf.getReplicaForNetwork(remote, network);

		const remoteProvider =
			remote.localDomain === 2000
				? new CeloProvider(remote.rpcURL)
				: new ethers.providers.JsonRpcProvider(remote.rpcURL);

		const remoteWallet =
			remote.localDomain === 2000
				? new CeloWallet(
						readFileSync(process.env.PRIVATE_KEY as string)
							.toString()
							.trim(),
						remoteProvider
				  )
				: new ethers.Wallet(
						readFileSync(process.env.PRIVATE_KEY as string)
							.toString()
							.trim(),
						remoteProvider
				  );

		const remoteReplica = new ethers.Contract(
			replicaOnRemote.address,
			ReplicaABI,
			remoteWallet
		) as Replica;
		const oldRoot = await remoteReplica.committedRoot();
		// const newRoot = await local.contracts.Home.root();

		// // replace nth object of the array
		const updatedTreeNodesOnOppositeHome = initialRoots.map(
			(elem, index) => {
				if (index === 0) {
					return formattedMessage;
				}
				return elem;
			}
		);
		const addedNodes: any[] = [];
		const merkle = new MerkleTreeLib();

		updatedTreeNodesOnOppositeHome.forEach((elem) => {
			addedNodes.push(merkle.insert(elem));
		});
		const remoteERC721Contract = new ethers.Contract(
			remote.ERC721Router,
			ERC721RouterABI,
			remoteWallet
		) as ERC721Router;

		const updateTree = await remoteERC721Contract.branchRoot(
			formattedMessage,
			addedNodes as any,
			0
		);

		const priv = readFileSync(process.env.UPDATER_KEY as string, "utf8")
			.toString()
			.trim();
		const updaterRemoteWallet = new ethers.Wallet(priv, remoteProvider);

		const count = await remoteWallet.getBalance();

		const { signature } = await signUpdate(
			oldRoot,
			updateTree,
			network.localDomain.toString(),
			updaterRemoteWallet
		);

		console.log(
			{ signature, oldRoot, updateTree, count },
			updaterRemoteWallet.address
		);

		const update_tx = await remoteReplica.update(
			oldRoot,
			updateTree,
			signature,
			{
				gasLimit: 1_000_000,
			}
		);

		console.log(update_tx.hash);
		await update_tx.wait();
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve({});
			}, 10 * 1000)
		);

		const proveTxn = await remoteReplica.prove(
			formattedMessage,
			addedNodes as any,
			0
		);

		console.log(proveTxn.hash);

		await proveTxn.wait();

		const tx_transfer = await remoteReplica.process(encodePackedMessage);
		console.log(tx_transfer.hash);
		return await tx_transfer.wait();
	}
}
