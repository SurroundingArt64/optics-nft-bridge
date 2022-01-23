import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { skipUnlessTestOrOpticsCore } from "../utils/network";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { companionNetworks } = hre;

	const mumbai = companionNetworks["1000"];
	const alfajores = companionNetworks["2000"];
	const rinkeby = companionNetworks["3000"];

	const networks = [
		{
			hreObject: mumbai,
			name: "mumbai",
			localDomain: "1000",
		},
		{
			hreObject: alfajores,
			name: "alfajores",
			localDomain: "2000",
		},
		{
			hreObject: rinkeby,
			name: "rinkeby",
			localDomain: "3000",
		},
	];
};

func.tags = ["OpticsCore"];
func.skip = skipUnlessTestOrOpticsCore;
export default func;
