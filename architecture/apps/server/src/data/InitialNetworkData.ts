import { ethers } from "ethers";
import { readFileSync } from "fs";

const getPrivateKey = (pathToPrivateKey: string) => {
	if (pathToPrivateKey === undefined) {
		return "";
	}
	const priv = readFileSync(pathToPrivateKey, "utf8").toString().trim();

	return priv;
};

export const networks = [
	{
		rpcURL: process.env.POLYGON_MUMBAI_URL || "",
		rpcFallbacks: [],
		name: "mumbai",
		chainId: 80001,
		gasPrice: 2_500_000_000,
		accounts: {
			deployer: getPrivateKey(
				process.env.POLYGON_MUMBAI_DEPLOYER_KEY as string
			),
		},
		localDomain: 1000,
		remoteDomains: [2000, 3000],
		contracts: {
			Home: "0x2108E58d3129403B9a4cD20baBCDDB080c471eAb",
			ERC721: {
				address: "0x379A056cB617EDE30C56AfB54e2f318505806760",
				isNative: true,
			},
			ERC721Router: "0x9365a6d7c89dA1B6F22913aAd65f000bB0F55dC9",
			UpdaterManager: "0xF07Dd30a724886C9E2d1E5740Bb92022586E6413",
			XAppConnectionManager: "0x1D3038cD70D1E025374a599869C826080473A5aB",
			replicas: {
				mumbai: ethers.constants.AddressZero,
				alfajores: "0xDd49c4cBa4B1624703Ab957dB5Fe637CDd72c030",
				rinkeby: "0x7c6115c8DD1A81852aeb6E5927B5f745ceE9e645",
			},
		},
	},
	{
		rpcURL: process.env.ALFAJORES_URL || "",
		rpcFallbacks: [],
		name: "alfajores",
		chainId: 44787,
		gasPrice: 1_000_000_000,
		accounts: {
			deployer: getPrivateKey(
				process.env.ALFAJORES_DEPLOYER_KEY as string
			),
		},
		localDomain: 2000,
		remoteDomains: [1000, 3000],
		contracts: {
			Home: "0x2108E58d3129403B9a4cD20baBCDDB080c471eAb",
			ERC721: {
				address: "0x379A056cB617EDE30C56AfB54e2f318505806760",
				isNative: false,
			},
			ERC721Router: "0x9365a6d7c89dA1B6F22913aAd65f000bB0F55dC9",
			UpdaterManager: "0xF07Dd30a724886C9E2d1E5740Bb92022586E6413",
			XAppConnectionManager: "0x1D3038cD70D1E025374a599869C826080473A5aB",
			replicas: {
				mumbai: "0xDd49c4cBa4B1624703Ab957dB5Fe637CDd72c030",
				alfajores: ethers.constants.AddressZero,
				rinkeby: "0x7c6115c8DD1A81852aeb6E5927B5f745ceE9e645",
			},
		},
	},
	{
		rpcURL: process.env.RINKEBY_URL || "",
		rpcFallbacks: [],
		name: "rinkeby",
		chainId: 4,
		gasPrice: 2_000_000_000,
		accounts: {
			deployer: getPrivateKey(process.env.RINKEBY_DEPLOYER_KEY as string),
		},
		localDomain: 3000,
		remoteDomains: [1000, 2000],
		contracts: {
			Home: "0x517181285Cd6f45D6dC6b01b21F302af8560c964",
			ERC721: {
				address: "0x97000cBb19F6CCA6A03915a6474D4fC479b55274",
				isNative: false,
			},
			ERC721Router: "0x35F2a18938BBe1a14d2917555F66E1194fce38C4",
			UpdaterManager: "0xb3e013Ae19d64f2A1358D374027b4a31a0A96884",
			XAppConnectionManager: "0x172fEC26bbcEbd2C08e4b6d52540eD99372C5E88",
			replicas: {
				mumbai: "0x58CcACd5e7fbF0Fc04A28c889ce1bB2250BAbe66",
				alfajores: "0x893de128879589350Bf4ce40e1Df82Dde6BC0025",
				rinkeby: ethers.constants.AddressZero,
			},
		},
	},
];
