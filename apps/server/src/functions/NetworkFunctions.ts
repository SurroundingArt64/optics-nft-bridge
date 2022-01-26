import { Service } from "typedi";
// import NetworkRepository, { NetworkModel } from "models";
import { NetworkModel, NetworkRepository } from "models";
import { networks } from "config/data/InitialNetworkData";
import { ValuesType } from "utility-types";
import { Log } from "../utilities/Logger";
@Service()
export class NetworkFunctions {
	/**
	 *
	 */
	async init() {
		for (const network of networks) {
			await this.createIfNotExists(network);
		}

		// Add replicas if not exists
	}

	// =============== getters ===============
	async getNetworkByChainId(chainId: number): Promise<NetworkRepository> {
		const network = await NetworkModel.findOne({ chainId });
		if (network) {
			return network;
		} else {
			throw new Error("Chain not found");
		}
	}

	async getNetworkByLocalDomain(
		localDomain: number
	): Promise<NetworkRepository> {
		const network = await NetworkModel.findOne({
			localDomain: localDomain,
		});
		if (network) {
			return network;
		} else {
			throw new Error("Chain not found");
		}
	}

	async getRemoteNetworksByLocalDomain(
		localDomain: number
	): Promise<NetworkRepository[]> {
		const localNetwork = await this.getNetworkByLocalDomain(localDomain);

		return await Promise.all(
			localNetwork!.remoteDomains.map(async (remoteDomain) => {
				return this.getNetworkByLocalDomain(remoteDomain);
			})
		);
	}

	async createIfNotExists(body: ValuesType<typeof networks>) {
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
