import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { skipUnlessNative } from "../utils/network";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;

	const { deployer } = await getNamedAccounts();

	await deploy("Native721", {
		from: deployer,
		log: true,
		contract: "Native721",
		args: ["Native721", "N721"],
		skipIfAlreadyDeployed: true,
	});
};
func.tags = ["Native721"];
func.skip = skipUnlessNative;

export default func;
