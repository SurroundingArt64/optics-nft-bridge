import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { skipUnlessNative, skipUnlessNonNative } from "../utils/network";
import contracts from "../utils/contracts.json";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts, network, companionNetworks } = hre;
	const { deploy, execute } = deployments;

	const { deployer, tokenMapper } = await getNamedAccounts();
	const localData =
		contracts[
			network.config!.chainId!.toString() as keyof typeof contracts
		];
	// const remoteData =
	// 	contracts[
	// 		(await companionNetworks[
	// 			"Native"
	// 		].getChainId()) as keyof typeof contracts
	// 	];
	console.log({ localData });
	// const NonNative721 = await deployments.getOrNull("NonNative721");
	let Native721 = await companionNetworks["Native"].deployments.getOrNull(
		"Native721"
	);
	if (!Native721) {
		Native721 = await companionNetworks["Native"].deployments.deploy(
			"Native721",
			{
				from: deployer,
				log: true,
				contract: "Native721",
				args: ["Native721", "N721"],
				skipIfAlreadyDeployed: true,
			}
		);
	}
	await deploy("ERC721RemoteRouter", {
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

	// await execute(
	// 	"ERC721LocalRouter",
	// 	{ from: tokenMapper },
	// 	"mapTokens",
	// 	Native721!.address,
	// 	remoteData.localDomain,
	// 	NonNative721!.address,
	// 	true
	// );
};

export default func;
func.tags = ["RemoteERC721Router"];
func.dependencies = ["Native721", "NonNative721", "LocalERC721Router"];
func.skip = skipUnlessNonNative;
