import "reflect-metadata";
import { config } from "dotenv";
import { join } from "path";

import { Container } from "typedi";
import { MongoContainer } from "./utilities/MongoContainer";
import { NetworkFunctions } from "./functions/NetworkFunctions";

import { Log, LogLevelEnum } from "./utilities/Logger";
import { App } from "./App";

export class Initialize {
	async init() {
		config({
			path: join(__dirname, "..", ".env"),
		});
		console.log("NODE_ENV:", process.env.NODE_ENV);
		if (process.env.NODE_ENV === "production") {
			Log.logLevel = LogLevelEnum.debug;
		}
		if (process.env.NODE_ENV === "testing") {
			Log.logLevel = LogLevelEnum.warn;
		} else {
			Log.logLevel = LogLevelEnum.info;
		}

		const port =
			parseInt(process.env.PORT as string) ?? (process.env.PORT || 8080);

		new App(port);

		await Container.get(MongoContainer).init(
			process.env.MONGO_HOST ?? "localhost:27017",
			process.env.MONGO_DB ?? "LocalDB"
		);

		await this.seed();
	}

	async seed() {
		await Container.get(NetworkFunctions).init();
	}
}

new Initialize().init().catch((err) => {
	console.error(err);
});
