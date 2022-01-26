import { Service } from "typedi";
import ChainDataRepository, { ChainDataModel } from "models/ChainData";
@Service()
export class ChainDataFunctions {
	async getChainByNetworkId(networkId: number): Promise<ChainDataRepository> {
		const chain = await ChainDataModel.findOne({ networkId: networkId });
		if (chain) {
			return chain;
		} else {
			throw new Error("Chain not found");
		}
	}
}
