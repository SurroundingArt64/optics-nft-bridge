import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
	schemaOptions: {
		collection: "ChainData",
		timestamps: true,
	},
})
export default class ChainDataRepository {
	@prop()
	networkId: number;

	@prop()
	network_name: string;

	@prop()
	home_address: string;

	@prop()
	localDomain: number;

	@prop()
	rpcURL: string;

	@prop()
	rpcFallbacks: string[];
}

export const ChainDataModel = getModelForClass(ChainDataRepository);
