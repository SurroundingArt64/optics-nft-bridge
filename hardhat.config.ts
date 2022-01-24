import * as dotenv from "dotenv";

import "hardhat-deploy";
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import { readFileSync } from "fs";
import { ethers } from "ethers";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

const accounts = () => {
	const priv = readFileSync(process.env.PRIVATE_KEY as string, "utf8")
		.toString()
		.trim();

	const updater = readFileSync(process.env.UPDATER_KEY as string, "utf8")
		.toString()
		.trim();
	return [priv, updater];
};
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
	solidity: "0.7.6",
	networks: {
		hardhat: {
			companionNetworks: {
				1000: "hardhat",
				2000: "hardhat",
				3000: "hardhat",
			},
			tags: ["OpticsCore"],
		},
		mumbai: {
			url: process.env.POLYGON_MUMBAI_URL || "",
			accounts: process.env.PRIVATE_KEY !== undefined ? accounts() : [],
			companionNetworks: {
				1000: "mumbai",
				2000: "alfajores",
				3000: "rinkeby",
			},
			chainId: 80001,
			tags: ["OpticsCore"],
			gasPrice: 2_500_000_000,
			etherscan: {
				apiKey: process.env.POLYGONSCAN_API_KEY,
			},
		},
		alfajores: {
			url: process.env.ALFAJORES_URL || "",
			accounts: process.env.PRIVATE_KEY !== undefined ? accounts() : [],
			chainId: 44787,
			gasPrice: 1_000_000_000,
		},
		ropsten: {
			url: process.env.ROPSTEN_URL || "",
			accounts: process.env.PRIVATE_KEY !== undefined ? accounts() : [],
			companionNetworks: {
				l1: "hardhat",
				l2: "hardhat",
			},
			tags: ["Native", "NonNative`"],
		},
		rinkeby: {
			url: process.env.RINKEBY_URL || "",
			tags: ["Native"],
			chainId: 4,
			companionNetworks: {
				NonNative: "kovan",
			},
			gasPrice: 2_000_000_000,
			accounts: process.env.PRIVATE_KEY !== undefined ? accounts() : [],
		},
		kovan: {
			url: process.env.KOVAN_URL || "",
			tags: ["NonNative"],
			chainId: 42,
			companionNetworks: {
				Native: "rinkeby",
			},
			accounts: process.env.PRIVATE_KEY !== undefined ? accounts() : [],
		},
	},
	gasReporter: {
		enabled: process.env.REPORT_GAS !== undefined,
		currency: "USD",
	},
	etherscan: {
		apiKey: process.env.ETHERSCAN_API_KEY,
	},
	namedAccounts: {
		deployer: {
			default: 0,
		},
		upgradeAdmin: {
			default: 1,
			4: 0,
			42: 0,
			80001: 0,
			44787: 0,
		},
		tokenMapper: {
			default: 2,
			4: 0,
			42: 0,
			80001: 0,
			44787: 0,
		},
		updater: {
			default: 3,
			4: "0x53fba61e301d5339dea6847cb0e00628ae0b345b",
			42: "0x53fba61e301d5339dea6847cb0e00628ae0b345b",
			80001: "0x53fba61e301d5339dea6847cb0e00628ae0b345b",
			44787: "0x53fba61e301d5339dea6847cb0e00628ae0b345b",
		},
	},
	mocha: {
		require: ["ts-node/register", "hardhat/register"],
	},
};

export default config;
