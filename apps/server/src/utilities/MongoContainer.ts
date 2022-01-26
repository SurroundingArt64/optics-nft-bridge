import { Service } from "typedi";
import mongoose from "mongoose";
import assert from "assert";
import { Log } from "./Logger";

@Service()
export class MongoContainer {
	public connection = typeof mongoose;
	async init(
		connection_url: string,
		db_name: string
	): Promise<typeof mongoose> {
		try {
			const url = `${connection_url}/${db_name}`;

			const connection = await mongoose.connect(url, {
				dbName: db_name,
			});
			Log.debug("connection started");
			assert(connection === mongoose && `Failed to connect`);
			Log.info("Connected to database: ", db_name);

			return connection;
		} catch (err) {
			console.error(__filename, err);
			throw err;
		}
	}
}
