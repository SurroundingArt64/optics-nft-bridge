import { PromiseType } from "utility-types";
import { setupTest } from "./fixture";

describe("Router", () => {
	let deployer: PromiseType<ReturnType<typeof setupTest>>["deployer"];
	before(async () => {
		({ deployer } = await setupTest());
	});

	it("check deployments", async () => {
		console.log(await deployer.ERC721LocalRouter.remotes(1));
	});
});
