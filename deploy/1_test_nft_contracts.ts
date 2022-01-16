import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;

	const { deployer } = await getNamedAccounts();

	await deploy("Native721", {
		from: deployer,
		log: true,
		contract: "Native721",
		args: ["Native721", ""],
		skipIfAlreadyDeployed: true,
	});

	await deploy("NonNative721", {
		from: deployer,
		log: true,
		contract: "NonNative721",
		args: ["NonNative721", ""],
		skipIfAlreadyDeployed: true,
	});
};

export default func;
func.tags = ["NonNative721", "Native721"];
func.dependencies = [];
