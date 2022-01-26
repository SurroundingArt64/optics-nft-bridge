import { HardhatEthersHelpers } from "@nomiclabs/hardhat-ethers/types";
import { deployments } from "hardhat";
import {
	ERC721Router,
	MockXAppConnectionManager,
	Native721,
	NonNative721,
} from "../typechain";

export const setupTest = deployments.createFixture(
	async ({ deployments, getNamedAccounts, ethers }) => {
		await deployments.fixture(
			["ERC721Router", "NonNative721", "Native721"],
			{
				fallbackToGlobal: false,
				keepExistingDeployments: false,
			}
		);

		const { deployer, tokenMapper } = await getNamedAccounts();
		const NonNative721 = await ethers.getContract("NonNative721");
		const Native721 = await ethers.getContract("Native721");
		const ERC721RemoteRouter = await ethers.getContract(
			"ERC721RemoteRouter"
		);
		const ERC721LocalRouter = await ethers.getContract("ERC721LocalRouter");
		const MockHome = await ethers.getContract("MockHome");

		const MockXAppConnectionManagerRemote = await ethers.getContract(
			"MockXAppConnectionManagerRemote"
		);

		return {
			deployer: {
				address: deployer,
				ERC721RemoteRouter: ERC721RemoteRouter as ERC721Router,
				ERC721LocalRouter: ERC721LocalRouter as ERC721Router,
				NonNative721: NonNative721 as NonNative721,
				Native721: Native721 as Native721,
				MockHome,
				MockXAppConnectionManagerRemote:
					MockXAppConnectionManagerRemote as MockXAppConnectionManager,
			},
			tokenMapper: {
				address: tokenMapper,
				contracts: await getContracts(tokenMapper, ethers),
			},
		};
	}
);

const getContracts = async (
	address: string,
	ethers: typeof import("ethers/lib/ethers") & HardhatEthersHelpers
) => {
	const signer = await ethers.getSigner(address);
	const NonNative721 = await ethers.getContract("NonNative721", signer);
	const Native721 = await ethers.getContract("Native721", signer);
	const ERC721RemoteRouter = await ethers.getContract(
		"ERC721RemoteRouter",
		signer
	);
	const ERC721LocalRouter = await ethers.getContract(
		"ERC721LocalRouter",
		signer
	);

	return {
		ERC721RemoteRouter: ERC721RemoteRouter as ERC721Router,
		ERC721LocalRouter: ERC721LocalRouter as ERC721Router,
		NonNative721: NonNative721 as NonNative721,
		Native721: Native721 as Native721,
	};
};
