import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { skipUnlessNonNative } from "../utils/network";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;

	const { deployer } = await getNamedAccounts();

	await deploy("NonNative721", {
		from: deployer,
		log: true,
		contract: "NonNative721",
		args: ["NonNative721", "NN721"],
		skipIfAlreadyDeployed: true,
	});
};

func.tags = ["NonNative721"];
func.skip = skipUnlessNonNative;
export default func;
