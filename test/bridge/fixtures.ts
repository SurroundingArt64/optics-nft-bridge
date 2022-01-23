import { companionNetworks, deployments } from "hardhat";
import { Overwrite } from "utility-types";
import {
	ERC721Router,
	Home,
	Native721,
	NonNative721,
	Replica,
	UpdaterManager,
	XAppConnectionManager,
} from "../../typechain";

type baseContractInterfaces = {
	XAppConnectionManager: XAppConnectionManager;
	UpdaterManager: UpdaterManager;
	Home: Home;
	ERC721Router: ERC721Router;
};
const baseContracts: (keyof baseContractInterfaces)[] = [
	"XAppConnectionManager",
	"UpdaterManager",
	"Home",
	"ERC721Router",
];
export enum Networks {
	mumbai = "mumbai",
	alfajores = "alfajores",
	rinkeby = "rinkeby",
}
type replicaContractsInterface = [
	{
		name: keyof typeof Networks;
		contract: Replica;
	}
];
export type NetworkData = {
	hreObject: typeof companionNetworks["1000"];
	name: keyof typeof Networks;
	localDomain: string | number;
	contracts: baseContractInterfaces;
	replicas: replicaContractsInterface;
	nativeContract: Native721;
	nonNativeContract: NonNative721;
	native: boolean;
};

export const setupTest = deployments.createFixture(
	async ({
		companionNetworks,
		ethers,
		deployments,
		getNamedAccounts,
		getUnnamedAccounts,
	}) => {
		const mumbai = companionNetworks["1000"];
		const alfajores = companionNetworks["2000"];
		const rinkeby = companionNetworks["3000"];

		const { deployer, tokenMapper, updater } = await getNamedAccounts();
		const [alice, bob] = await getUnnamedAccounts();

		await deployments.fixture(["OpticsCore", "OpticsBridge"]);

		// get core deployments
		const networks: Overwrite<
			Partial<NetworkData>,
			{ name: keyof typeof Networks }
		>[] = [
			{
				hreObject: mumbai,
				name: "mumbai",
				localDomain: "1000",
				native: true,
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

		for (const network of networks) {
			const networkName = network.name.toUpperCase() + "_";
			for (const contract of baseContracts) {
				// @todo fix provider. test will go as all networks are same for hardhat
				// But, if we use real companionNetworks using ganache, it will be different for each network
				if (!network.contracts) {
					(network as any).contracts = {};
				}
				network.contracts![contract] = (await ethers.getContract(
					networkName + contract
				)) as any;
			}
			if (network.native) {
				network.nativeContract = (await ethers.getContract(
					networkName + "ERC721"
				)) as Native721;
			} else {
				network.nonNativeContract = (await ethers.getContract(
					networkName + "ERC721"
				)) as NonNative721;
			}
		}

		for (const local of networks) {
			const remotes = networks.filter(
				(network) => network.name !== local.name
			);
			for (const remote of remotes) {
				const replicaIdentifier =
					local.name.toUpperCase() +
					"_" +
					remote.name.toUpperCase() +
					"_";
				if (!local.replicas) {
					(local as any).replicas = [];
				}
				const replica = (await ethers.getContract(
					replicaIdentifier + "Replica"
				)) as Replica;
				local.replicas!.push({
					name: remote.name,
					contract: replica,
				});
			}
		}

		return {
			networks: networks as NetworkData[],
			deployer,
			tokenMapper,
			updater,
			alice,
			bob,
		};
	}
);
