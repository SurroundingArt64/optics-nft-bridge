import "reflect-metadata";

import express from "express";
import { useContainer, useExpressServer } from "routing-controllers";
import Container from "typedi";

import cors from "cors";
import { Log as Log } from "./utilities/Logger";
import { Server } from "http";
import { LoggingMiddleware } from "./middleware/LoggingMiddleware";

class ExpressConfiguration {
	public app: express.Application;

	constructor() {
		this.app = express();

		this.middleware();
		this.setUpControllers();
	}

	middleware() {
		this.app.use(cors());
	}

	setUpControllers() {
		useContainer(Container);

		useExpressServer(this.app, {
			controllers: [],
			middlewares: [LoggingMiddleware],
			development: true,
			defaults: {
				paramOptions: {
					required: true, // this means that all parameters (@BodyParam, @Param etc in Actions) are required by default
				},
			},
		});
	}
}

export class App {
	public express: ExpressConfiguration;
	public server: Server;
	constructor(port: number) {
		this.express = new ExpressConfiguration();

		this.server = this.express.app.listen(port, () =>
			Log.info(`Listening on port ${port}`)
		);
	}
}
