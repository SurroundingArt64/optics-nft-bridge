import { HardhatRuntimeEnvironment } from "hardhat/types";

export const setupTest = (hre: HardhatRuntimeEnvironment) =>
	hre.deployments.createFixture(
		async ({ deployments, getNamedAccounts, ethers }) => {
			await deployments.fixture([
				"ERC721RemoteRouter",
				"ERC721LocalRouter",
			]);
			const { deployer } = await getNamedAccounts();
			const ERC721RemoteRouter = ethers.getContract("ERC721RemoteRouter");
			const ERC721LocalRouter = ethers.getContract("ERC721RemoteRouter");
			return {
				tokenOwner: {
					address: deployer,
					ERC721RemoteRouter,
					ERC721LocalRouter,
				},
			};
		}
	);
