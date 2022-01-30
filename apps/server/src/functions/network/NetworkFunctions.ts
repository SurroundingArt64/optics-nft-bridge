import { Service } from "typedi";
// import NetworkRepository, { NetworkModel } from "models";
import { NetworkModel, NetworkRepository, ReplicaModel } from "models";
import { getNetworks } from "config/data/InitialNetworkData";
import { ValuesType } from "utility-types";
import { Log } from "../../utilities/Logger";

export const networkData = getNetworks();
@Service()
export class NetworkFunctions {
	/**
	 *
	 */
	async init() {
		const networks = getNetworks();
		for (const network of networks) {
			await this.createIfNotExists(network);
		}

		// Add replicas if not exists
		for (const local of networks) {
			const remotes = await this.getRemoteNetworksByLocalDomain(
				local.localDomain
			);

			for (const remote of remotes) {
				const network = await this.getNetworkByLocalDomain(
					local.localDomain
				);
				const replica = await ReplicaModel.findOneAndUpdate(
					{
						local: network._id,
						remote: remote._id,
					},
					{
						address:
							local.contracts.replicas[
								remote.name as keyof typeof local.contracts.replicas
							],
						name: (local.name + "_" + remote.name).toUpperCase(),
					},
					{ upsert: true, new: true }
				);
				Log.info(
					"Replica " +
						replica.address +
						" for " +
						remote.name +
						" created on " +
						network.name
				);
			}
		}
	}

	// =============== getters ===============
	async getInfo() {
		const returnObj = [];
		const networks = await NetworkModel.find(
			{},
			"-rpcURL -rpcFallbacks -updatedAt -createdAt -__v -replicas"
		);

		for (const network of networks) {
			const replicas = await ReplicaModel.find(
				{
					local: network._id,
				},
				"-_id address name"
			);
			returnObj.push({
				...network.toObject(),
				replicas,
			});
		}

		return returnObj;
	}

	async getNetworkByChainId(chainId: number) {
		const network = await NetworkModel.findOne({ chainId });
		if (network) {
			return network;
		} else {
			throw new Error("Chain not found");
		}
	}

	async getNetworkByLocalDomain(localDomain: number) {
		const network = await NetworkModel.findOne({
			localDomain: localDomain,
		});
		if (network) {
			return network;
		} else {
			throw new Error("Chain not found");
		}
	}

	async getRemoteNetworksByLocalDomain(localDomain: number) {
		const localNetwork = await this.getNetworkByLocalDomain(localDomain);

		return await Promise.all(
			localNetwork!.remoteDomains.map(async (remoteDomain) => {
				return this.getNetworkByLocalDomain(remoteDomain);
			})
		);
	}

	async getReplicaForNetwork(
		network: NetworkRepository & { _id: string },
		remoteNetwork: NetworkRepository & { _id: string }
	) {
		const replica = await ReplicaModel.findOne({
			local: network._id,
			remote: remoteNetwork._id,
		});
		if (replica) {
			return replica;
		} else {
			throw new Error("Replica not found");
		}
	}

	async createIfNotExists(body: ValuesType<ReturnType<typeof getNetworks>>) {
		const network = await NetworkModel.findOne({
			chainId: body.chainId,
		});
		if (network) {
			Log.info(`Network ${body.name} already exists`);
			return network;
		} else {
			Log.info(`Creating network ${body.name}`);
			const networkData: NetworkRepository = {
				...body,
				...body.contracts,
			};
			return await new NetworkModel(networkData).save();
		}
	}
}
