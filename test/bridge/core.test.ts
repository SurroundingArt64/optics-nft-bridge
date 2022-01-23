import { expect, use } from "chai";
import { solidity } from "ethereum-waffle";
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

use(solidity);
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

enum Networks {
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

type NetworkData = {
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

describe("OpticsCore", () => {
	let networks: NetworkData[];

	const getNetworkByName = (name: keyof typeof Networks) => {
		return networks.filter((elem) => elem.name === name)![0];
	};

	const getRemotes = (name: keyof typeof Networks) => {
		return networks.filter((elem) => elem.name !== name);
	};

	const getNativeNetwork = () => {
		return networks.filter((elem) => elem.native)![0];
	};

	before(async () => {
		({ networks } = await setupTest());
	});

	describe("check deployment", () => {
		it("check Home", async () => {
			for (let index = 0; index < networks.length; index++) {
				const network = networks[index];
				const contracts = network.contracts;
				expect(
					(await contracts.Home.localDomain()).toString()
				).to.be.equal(network.localDomain);
				expect(await contracts.Home.updaterManager()).to.be.equal(
					network.contracts.UpdaterManager.address
				);
			}
		});

		it("check Home is set", async () => {
			for (let index = 0; index < networks.length; index++) {
				const network = networks[index];
				const contracts = network.contracts;
				expect(await contracts.XAppConnectionManager.home()).to.eq(
					contracts.Home.address
				);
			}
		});

		it("check Replicas are correct", async () => {
			for (let index = 0; index < networks.length; index++) {
				const local = networks[index];

				const replicas = local.replicas;

				for (let index = 0; index < replicas.length; index++) {
					const replica = replicas[index];
					expect(
						(await replica.contract.localDomain()).toString()
					).to.eq(local.localDomain);
					expect(
						(await replica.contract.remoteDomain()).toString()
					).to.eq(getNetworkByName(replica.name).localDomain);
				}
			}
		});

		it("check token mappings", async () => {
			for (const local of networks) {
				const remotes = getRemotes(local.name);
				for (const remote of remotes) {
					if (!(local.native || remote.native)) {
						continue;
					}
					if (local.native) {
						expect(
							await local.contracts.ERC721Router.remoteTokenIds(
								local.nativeContract.address,
								remote.localDomain
							)
						).to.eq(remote.nonNativeContract.address);
					} else {
						expect(
							await local.contracts.ERC721Router.remoteTokenIds(
								local.nonNativeContract.address,
								remote.localDomain
							)
						).to.eq(getNativeNetwork().nativeContract.address);
					}
				}
			}
		});
	});
});
