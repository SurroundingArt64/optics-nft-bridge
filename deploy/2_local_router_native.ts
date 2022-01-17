import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { skipUnlessNative } from "../utils/network";
import contracts from "../utils/contracts.json";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts, network, companionNetworks } = hre;
	const { deploy, execute } = deployments;

	const { deployer, tokenMapper } = await getNamedAccounts();
	const localData =
		contracts[
			network.config!.chainId!.toString() as keyof typeof contracts
		];
	const remoteData =
		contracts[
			(await companionNetworks[
				"NonNative"
			].getChainId()) as keyof typeof contracts
		];

	const Native721 = await deployments.getOrNull("Native721");
	let NonNative721 = await companionNetworks[
		"NonNative"
	].deployments.getOrNull("NonNative721");
	if (!NonNative721) {
		NonNative721 = await companionNetworks["NonNative"].deployments.deploy(
			"NonNative721",
			{
				from: deployer,
				log: true,
				contract: "NonNative721",
				args: ["NonNative721", "NN721"],
				skipIfAlreadyDeployed: true,
			}
		);
	}
	await deploy("ERC721LocalRouter", {
		from: deployer,
		log: true,
		contract: "ERC721Router",
		proxy: {
			upgradeIndex: 0,
			execute: {
				init: {
					methodName: "initialize",
					args: [localData.xAppConnectionManager, tokenMapper],
				},
			},
			proxyContract: "OptimizedTransparentProxy",
		},
		args: [],
		skipIfAlreadyDeployed: true,
	});

	await execute(
		"ERC721LocalRouter",
		{ from: tokenMapper },
		"mapTokens",
		Native721!.address,
		remoteData.localDomain,
		NonNative721!.address,
		true
	);
};

export default func;
func.tags = ["LocalERC721Router"];
func.dependencies = ["Native721", "NonNative721"];
func.skip = skipUnlessNative;
