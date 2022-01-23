import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { skipUnlessTestOrOpticsCore } from "../utils/network";
import { ethers } from "hardhat";

type NetworkData = {
	hreObject: HardhatRuntimeEnvironment;
	name: string;
	localDomain: string | number;
};

export async function deployUnenrolledReplica(
	local: NetworkData,
	remote: NetworkData
) {
	// Deploy the unenrolled replica
	const replicaIdentifier =
		local.name.toUpperCase() + "_" + remote.name.toUpperCase() + "_";
	const { deploy } = local.hreObject.deployments;

	const { deployer } = await local.hreObject.getNamedAccounts();

	const { updater: remoteUpdater } =
		await remote.hreObject.getNamedAccounts();

	await deploy(replicaIdentifier + "Replica", {
		from: deployer,
		log: true,
		skipIfAlreadyDeployed: true,
		proxy: {
			execute: {
				init: {
					methodName: "initialize",
					args: [
						remote.localDomain,
						remoteUpdater,
						ethers.constants.HashZero,
						10,
					],
				},
			},
			proxyContract: "OptimizedTransparentProxy",
		},
		args: [local.localDomain, 1_000_000, 80_000],
		contract: "Replica",
	});
}

export async function enrollReplica(local: NetworkData, remote: NetworkData) {
	const networkName = local.name.toUpperCase() + "_";
	const { execute } = local.hreObject.deployments;

	const { deployer } = await local.hreObject.getNamedAccounts();
	const replicaIdentifier =
		local.name.toUpperCase() + "_" + remote.name.toUpperCase() + "_";

	await execute(
		networkName + "XAppConnectionManager",
		{ from: deployer, log: true },
		"ownerEnrollReplica",
		(
			await local.hreObject.deployments.get(
				replicaIdentifier + "Replica"
			)!
		).address,
		remote.localDomain
	);
}

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

	for (let local of networks) {
		const remotes = networks.filter(
			(network) => network.name !== local.name
		);

		for (let remote of remotes) {
			await deployUnenrolledReplica(local as any, remote as any);
		}
	}

	for (let local of networks) {
		const remotes = networks.filter(
			(network) => network.name !== local.name
		);

		for (let remote of remotes) {
			await enrollReplica(local as any, remote as any);
		}
	}
};

func.tags = ["OpticsCore"];
func.skip = skipUnlessTestOrOpticsCore;
export default func;
