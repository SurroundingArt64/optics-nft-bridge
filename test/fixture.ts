import { deployments } from "hardhat";
import { ERC721Router, Native721, NonNative721 } from "../typechain";

export const setupTest = deployments.createFixture(
	async ({ deployments, getNamedAccounts, ethers }) => {
		await deployments.fixture(
			["ERC721Router", "NonNative721", "Native721"],
			{
				fallbackToGlobal: false,
				keepExistingDeployments: false,
			}
		);

		const data = await deployments.all();

		const { deployer } = await getNamedAccounts();
		const NonNative721 = await ethers.getContract("NonNative721");
		const Native721 = await ethers.getContract("Native721");
		const ERC721RemoteRouter = await ethers.getContract(
			"ERC721RemoteRouter"
		);
		const ERC721LocalRouter = await ethers.getContract("ERC721LocalRouter");
		return {
			deployer: {
				address: deployer,
				ERC721RemoteRouter: ERC721RemoteRouter as ERC721Router,
				ERC721LocalRouter: ERC721LocalRouter as ERC721Router,
				NonNative721: NonNative721 as NonNative721,
				Native721: Native721 as Native721,
			},
		};
	}
);
