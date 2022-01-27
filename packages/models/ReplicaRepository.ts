import {
	getModelForClass,
	modelOptions,
	prop,
	Ref,
	Severity,
} from "@typegoose/typegoose";
import { NetworkRepository } from ".";

@modelOptions({
	schemaOptions: {
		collection: "ReplicaRepository",
		timestamps: true,
	},
	options: {
		allowMixed: Severity.ALLOW,
	},
})
export class ReplicaRepository {
	@prop({
		ref: () => NetworkRepository,
	})
	local: Ref<NetworkRepository>;

	@prop()
	address: string;

	@prop({
		ref: () => NetworkRepository,
	})
	remote: Ref<NetworkRepository>;

	@prop()
	name: string;
}

export const ReplicaModel = getModelForClass(ReplicaRepository);
