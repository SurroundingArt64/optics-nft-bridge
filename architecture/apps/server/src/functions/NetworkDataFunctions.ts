import { Service } from "typedi";
import NetworkRepository, { NetworkModel } from "models/NetworkData";
@Service()
export class NetworkFunctions {
	/**
	 *
	 */
	async init() {}

	// =============== getters ===============
	async getChainByNetworkId(networkId: number): Promise<NetworkRepository> {
		const chain = await NetworkModel.findOne({ networkId: networkId });
		if (chain) {
			return chain;
		} else {
			throw new Error("Chain not found");
		}
	}

	async getChainByLocalDomain(
		localDomain: number
	): Promise<NetworkRepository> {
		const chain = await NetworkModel.findOne({
			localDomain: localDomain,
		});
		if (chain) {
			return chain;
		} else {
			throw new Error("Chain not found");
		}
	}
}
