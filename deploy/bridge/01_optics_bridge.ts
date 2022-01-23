import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { skipUnlessTestOrOpticsCore } from "../../utils/network";

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

	for (const network of networks) {
		const networkName = network.name.toUpperCase() + "_";

		const { deployments, getNamedAccounts } = network.hreObject;
		const { deploy } = deployments;

		const { deployer } = await getNamedAccounts();

		if (network.native) {
			await deploy(networkName + "ERC721", {
				from: deployer,
				log: true,
				contract: "Native721",
				args: ["N721", "N721"],
				skipIfAlreadyDeployed: true,
			});
		} else {
			await deploy(networkName + "ERC721", {
				from: deployer,
				log: true,
				contract: "NonNative721",
				args: ["NonNative721", "NN721"],
				skipIfAlreadyDeployed: true,
			});
		}
	}

	for (const network of networks) {
		const networkName = network.name.toUpperCase() + "_";

		const { deployments, getNamedAccounts } = network.hreObject;
		const { deploy } = deployments;

		const { deployer, tokenMapper } = await getNamedAccounts();

		await deploy(networkName + "ERC721Router", {
			from: deployer,
			log: true,
			contract: "ERC721Router",
			proxy: {
				upgradeIndex: 0,
				execute: {
					init: {
						methodName: "initialize",
						args: [
							(await deployments.get(
								networkName + "XAppConnectionManager"
							))!.address,
							tokenMapper,
						],
					},
				},
				proxyContract: "OptimizedTransparentProxy",
			},
			args: [],
			skipIfAlreadyDeployed: true,
		});
	}

	for (let local of networks) {
		const remotes = networks.filter(
			(network) => network.name !== local.name
		);

		for (let remote of remotes) {
			// set remote
			const networkName = local.name.toUpperCase() + "_";
			const remoteNetworkName = remote.name.toUpperCase() + "_";

			const { deployments: remoteDeployments } = remote.hreObject;
			const { execute } = local.hreObject.deployments;
			const { deployer } = await local.hreObject.getNamedAccounts();
			await execute(
				networkName + "ERC721Router",
				{
					from: deployer,
					log: true,
				},
				"enrollRemoteRouterByAddress",
				remote.localDomain,
				(await remoteDeployments.get(
					remoteNetworkName + "ERC721Router"
				))!.address
			);
		}
	}

	for (let local of networks) {
		const remotes = networks.filter(
			(network) => network.name !== local.name
		);

		for (let remote of remotes) {
			// set remote
			const networkName = local.name.toUpperCase() + "_";
			const remoteNetworkName = remote.name.toUpperCase() + "_";

			const { deployments: remoteDeployments } = remote.hreObject;

			const { deployments } = local.hreObject;
			const { execute } = deployments;
			const { tokenMapper } = await local.hreObject.getNamedAccounts();

			const localToken = await deployments.get(networkName + "ERC721");
			const remoteToken = await remoteDeployments.get(
				remoteNetworkName + "ERC721"
			);
			await execute(
				networkName + "ERC721Router",
				{
					from: tokenMapper,
					log: true,
				},
				"mapTokens",
				localToken!.address,
				remote.localDomain,
				remoteToken!.address,
				local.native ?? false
			);
		}
	}
};

func.tags = ["OpticsBridge"];
func.dependencies = ["OpticsCore"];
func.skip = skipUnlessTestOrOpticsCore;
export default func;
