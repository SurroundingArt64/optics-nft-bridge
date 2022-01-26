import { Response } from "express";
import { Get, JsonController, Res } from "routing-controllers";
import Container, { Service } from "typedi";
import { NetworkFunctions } from "./NetworkFunctions";

const nf = Container.get(NetworkFunctions);

@Service()
@JsonController("/network/", {
	transformResponse: false,
})
export class NetworkController {
	@Get("info")
	async info(@Res() res: Response) {
		res.setHeader("Content-Type", "application/json");
		return res.send(JSON.stringify(await nf.getInfo(), undefined, 4));
	}
}
