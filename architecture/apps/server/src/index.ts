import express from "express";

export class App {
	static init() {
		const app = express();
		app.listen(8080, () => {
			console.log("Listening on port 8080");
		});
	}
}

App.init();
