import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts } = hre;
	const { deploy, execute } = deployments;

	const { deployer, tokenMapper } = await getNamedAccounts();

	const XAppConnectionManagerAddress = (await deployments.getOrNull(
		"MockXAppConnectionManager"
	))!.address;

	const LocalRouter = await deploy("ERC721LocalRouter", {
		from: deployer,

		log: true,
		contract: "ERC721Router",
		proxy: {
			upgradeIndex: 0,
			execute: {
				init: {
					methodName: "initialize",
					args: [XAppConnectionManagerAddress, tokenMapper],
				},
			},
			proxyContract: "OptimizedTransparentProxy",
		},
		args: [],
		skipIfAlreadyDeployed: true,
	});

	const RemoteRouter = await deploy("ERC721RemoteRouter", {
		from: deployer,
		log: true,
		contract: "ERC721Router",
		proxy: {
			upgradeIndex: 0,
			execute: {
				init: {
					methodName: "initialize",
					args: [XAppConnectionManagerAddress, tokenMapper],
				},
			},
			proxyContract: "OptimizedTransparentProxy",
		},
		args: [],
		skipIfAlreadyDeployed: true,
	});

	const localDomain = 0;
	const remoteDomain = 1;

	await execute(
		"ERC721LocalRouter",
		{ from: deployer },
		"enrollRemoteRouterByAddress",
		remoteDomain,
		RemoteRouter.address
	);

	await execute(
		"ERC721RemoteRouter",
		{ from: deployer },
		"enrollRemoteRouterByAddress",
		localDomain,
		LocalRouter.address
	);
};
export default func;
func.tags = ["ERC721Router"];
func.dependencies = ["MockXAppConnectionManager"];
