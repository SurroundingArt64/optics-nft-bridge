import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { skipUnlessNonNative } from "../utils/network";
import contracts from "../utils/contracts.json";
import { read } from "fs";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts, network, companionNetworks } = hre;
	const { deploy, execute, read } = deployments;

	const { deployer, tokenMapper } = await getNamedAccounts();
	const nativeData =
		contracts[
			network.config!.chainId!.toString() as keyof typeof contracts
		];
	const nonNativeData =
		contracts[
			(await companionNetworks[
				"Native"
			].getChainId()) as keyof typeof contracts
		];
	console.log({ localData: nativeData, remoteData: nonNativeData });
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
					args: [nativeData.xAppConnectionManager, tokenMapper],
				},
			},
			proxyContract: "OptimizedTransparentProxy",
		},
		args: [],
		skipIfAlreadyDeployed: true,
	});

	const isRemoteSetOnRemote = await read(
		"ERC721RemoteRouter",
		{ from: deployer },
		"remotes",
		nativeData.localDomain
	);

	const isRemoteSetOnLocal = await companionNetworks[
		"Native"
	].deployments.read(
		"ERC721LocalRouter",
		{ from: deployer },
		"remotes",
		nonNativeData.localDomain
	);

	if (parseInt(isRemoteSetOnRemote) === 0) {
		await execute(
			"ERC721RemoteRouter",
			{ from: deployer, log: true },
			"enrollRemoteRouterByAddress",
			nonNativeData.localDomain,
			ERC721LocalRouter!.address
		);
	}

	if (parseInt(isRemoteSetOnLocal) === 0) {
		await companionNetworks["Native"].deployments.execute(
			"ERC721LocalRouter",
			{ from: deployer, log: true },
			"enrollRemoteRouterByAddress",
			nativeData.localDomain,
			ERC721RemoteRouter!.address
		);
	}

	const isTokenMappedOnNative = await companionNetworks[
		"Native"
	].deployments.read(
		"ERC721LocalRouter",
		{ from: deployer },
		"remoteTokenIds",
		Native721?.address,
		nativeData.localDomain
	);

	console.log({
		nonNativeData: nonNativeData,
		nativeData: nativeData,
		native: Native721.address,
		nonNative: NonNative721?.address,
	});

	if (parseInt(isTokenMappedOnNative) === 0) {
		await companionNetworks["Native"].deployments.execute(
			"ERC721LocalRouter",
			{ from: tokenMapper, log: true },
			"mapTokens",
			Native721.address,
			nativeData.localDomain,
			NonNative721?.address,
			true
		);
	}

	const isTokenMappedOnNonNative = await read(
		"ERC721RemoteRouter",
		{ from: deployer },
		"remoteTokenIds",
		NonNative721?.address,
		nonNativeData.localDomain
	);

	if (parseInt(isTokenMappedOnNonNative) === 0) {
		await execute(
			"ERC721RemoteRouter",
			{ from: tokenMapper, log: true },
			"mapTokens",
			NonNative721?.address,
			nonNativeData.localDomain,
			Native721?.address,
			true
		);
	}
};

export default func;
func.tags = ["RemoteERC721Router"];
func.dependencies = ["Native721", "NonNative721", "LocalERC721Router"];
func.skip = skipUnlessNonNative;
