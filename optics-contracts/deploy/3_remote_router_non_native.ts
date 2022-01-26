import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { skipUnlessNonNative } from "../utils/network";
import contracts from "../utils/contracts.json";
import { read } from "fs";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts, network, companionNetworks } = hre;
	const { deploy, execute, read } = deployments;

	const { deployer, tokenMapper } = await getNamedAccounts();
	const kovanData =
		contracts[
			network.config!.chainId!.toString() as keyof typeof contracts
		];
	const rinkebyData =
		contracts[
			(await companionNetworks[
				"Native"
			].getChainId()) as keyof typeof contracts
		];
	console.log({ kovanData: kovanData, rinkebyData: rinkebyData });
	const ERC721LocalRouter = await companionNetworks[
		"Native"
	].deployments.getOrNull("ERC721LocalRouter");
	if (!ERC721LocalRouter?.address) {
		throw new Error("Run native first");
	}
	const NonNative721 = await deployments.getOrNull("NonNative721");
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
	const ERC721RemoteRouter = await deploy("ERC721RemoteRouter", {
		from: deployer,
		log: true,
		contract: "ERC721Router",
		proxy: {
			upgradeIndex: 0,
			execute: {
				init: {
					methodName: "initialize",
					args: [kovanData.xAppConnectionManager, tokenMapper],
				},
			},
			proxyContract: "OptimizedTransparentProxy",
		},
		args: [],
		skipIfAlreadyDeployed: true,
	});

	const isRemoteSetOnKovan = await read(
		"ERC721RemoteRouter",
		{ from: deployer },
		"remotes",
		rinkebyData.localDomain
	);

	if (parseInt(isRemoteSetOnKovan) === 0) {
		await execute(
			"ERC721RemoteRouter",
			{ from: deployer, log: true },
			"enrollRemoteRouterByAddress",
			rinkebyData.localDomain,
			ERC721LocalRouter!.address
		);
	}

	const isRemoteSetOnRinkeby = await companionNetworks[
		"Native"
	].deployments.read(
		"ERC721LocalRouter",
		{ from: deployer },
		"remotes",
		kovanData.localDomain
	);

	if (parseInt(isRemoteSetOnRinkeby) === 0) {
		await companionNetworks["Native"].deployments.execute(
			"ERC721LocalRouter",
			{ from: deployer, log: true },
			"enrollRemoteRouterByAddress",
			kovanData.localDomain,
			ERC721RemoteRouter!.address
		);
	}

	const isTokenMappedOnRinkeby = await companionNetworks[
		"Native"
	].deployments.read(
		"ERC721LocalRouter",
		{ from: deployer },
		"remoteTokenIds",
		Native721?.address,
		kovanData.localDomain
	);

	console.log({
		nonNativeData: rinkebyData,
		nativeData: kovanData,
		native: Native721.address,
		nonNative: NonNative721?.address,
	});

	if (parseInt(isTokenMappedOnRinkeby) === 0) {
		await companionNetworks["Native"].deployments.execute(
			"ERC721LocalRouter",
			{ from: tokenMapper, log: true },
			"mapTokens",
			Native721.address,
			kovanData.localDomain,
			NonNative721?.address,
			true
		);
	}

	const isTokenMappedOnKovan = await read(
		"ERC721RemoteRouter",
		{ from: deployer },
		"remoteTokenIds",
		NonNative721?.address,
		rinkebyData.localDomain
	);

	if (parseInt(isTokenMappedOnKovan) === 0) {
		await execute(
			"ERC721RemoteRouter",
			{ from: tokenMapper, log: true },
			"mapTokens",
			NonNative721?.address,
			rinkebyData.localDomain,
			Native721?.address,
			false
		);
	}
};

export default func;
func.tags = ["RemoteERC721Router"];
func.dependencies = ["Native721", "NonNative721", "LocalERC721Router"];
func.skip = skipUnlessNonNative;
