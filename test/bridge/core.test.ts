import { companionNetworks, deployments } from "hardhat";
import { Home, UpdaterManager, XAppConnectionManager } from "../../typechain";

type NetworkData = {
	hreObject: typeof companionNetworks["1000"];
	name: string;
	localDomain: string | number;
};

interface baseContractInterfaces {
	XAppConnectionManager: XAppConnectionManager;
	UpdaterManager: UpdaterManager;
	Home: Home;
}

const baseContracts = ["XAppConnectionManager", "UpdaterManager", "Home"];

export const setupTest = deployments.createFixture(
	async ({ companionNetworks, ethers, getNamedAccounts }) => {
		const mumbai = companionNetworks["1000"];
		const alfajores = companionNetworks["2000"];
		const rinkeby = companionNetworks["3000"];

		await mumbai.deployments.fixture(["OpticsCore"]);

		const { deployer } = await getNamedAccounts();
		// get core deployments
		const networks = [
			{
				hreObject: mumbai,
				name: "mumbai",
				localDomain: "1000",
				native: true,
			},
			{
				hreObject: alfajores,
				name: "alfajores",
				localDomain: "2000",
			},
			{
				hreObject: rinkeby,
				name: "rinkeby",
				localDomain: "3000",
			},
		];
	}
);

describe("OpticsCore", () => {
	before(async () => {
		await setupTest();
	});

	it("init", async () => {});
});
