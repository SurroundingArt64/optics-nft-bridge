import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { skipUnlessTestOrOpticsCore } from "../utils/network";

export async function deployUnenrolledReplica() {}

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { companionNetworks } = hre;

	const mumbai = companionNetworks["1000"];
	const alfajores = companionNetworks["2000"];
	const rinkeby = companionNetworks["3000"];

	const networks = [
		{
			hreObject: mumbai,
			name: "mumbai",
			localDomain: "1000",
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

	for (let index = 0; index < networks.length; index++) {
		const network = networks[index];

		const networkName = network.name.toUpperCase() + "_";

		const { deployments, getNamedAccounts } = network.hreObject;
		const { deploy, execute } = deployments;

		const { deployer, updater } = await getNamedAccounts();

		const UpdaterManager = await deploy(networkName + "UpdaterManager", {
			from: deployer,
			contract: "UpdaterManager",
			log: true,
			skipIfAlreadyDeployed: true,
			args: [updater],
		});

		await deploy(networkName + "XAppConnectionManager", {
			from: deployer,
			log: true,
			contract: "XAppConnectionManager",
			skipIfAlreadyDeployed: true,
			args: [],
		});

		const Home = await deploy(networkName + "Home", {
			from: deployer,
			log: true,
			contract: "Home",
			proxy: {
				execute: {
					init: {
						methodName: "initialize",
						args: [UpdaterManager.address],
					},
				},
				proxyContract: "OptimizedTransparentProxy",
			},
			args: [network.localDomain],
			skipIfAlreadyDeployed: true,
		});

		await execute(
			networkName + "XAppConnectionManager",
			{ from: deployer, log: true },
			"setHome",
			Home.address
		);

		await execute(
			networkName + "UpdaterManager",
			{ from: deployer, log: true },
			"setHome",
			Home.address
		);
	}
};

func.tags = ["OpticsCore"];
func.skip = skipUnlessTestOrOpticsCore;
export default func;
