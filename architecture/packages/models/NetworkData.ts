import {
	getModelForClass,
	modelOptions,
	prop,
	Severity,
} from "@typegoose/typegoose";

@modelOptions({
	schemaOptions: {
		collection: "ChainData",
		timestamps: true,
	},
	options: {
		allowMixed: Severity.ALLOW,
	},
})
export class NetworkRepository {
	@prop()
	chainId: number;

	@prop()
	name: string;

	@prop()
	Home: string;

	@prop()
	ERC721Router: string;

	@prop()
	UpdaterManager: string;

	@prop()
	XAppConnectionManager: string;

	@prop()
	localDomain: number;

	@prop()
	remoteDomains: number[];

	@prop()
	rpcURL: string;

	@prop()
	rpcFallbacks: string[];
}

export const NetworkModel = getModelForClass(NetworkRepository);
