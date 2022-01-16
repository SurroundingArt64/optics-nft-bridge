import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;

	const { deployer } = await getNamedAccounts();

	const Home = await deploy("MockHome", {
		from: deployer,
		log: true,
		contract: "MockHome",
		args: [],
		skipIfAlreadyDeployed: true,
	});

	await deploy("MockXAppConnectionManager", {
		from: deployer,
		log: true,
		contract: "MockXAppConnectionManager",
		args: [Home.address],
		skipIfAlreadyDeployed: true,
	});
};
export default func;
func.tags = ["MockXAppConnectionManager", "MockHome"];
