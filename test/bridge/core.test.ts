import { expect, use } from "chai";
import { solidity } from "ethereum-waffle";
import { NetworkData, Networks, setupTest } from "./fixtures";

use(solidity);
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

		it("check routers", async () => {
			for (const local of networks) {
				const remotes = getRemotes(local.name);
				for (const remote of remotes) {
					const remoteRouterByes32 =
						await local.contracts.ERC721Router.remotes(
							remote.localDomain
						);
					expect(
						remoteRouterByes32.toString().toLowerCase().slice(26)
					).to.eq(
						remote.contracts.ERC721Router.address
							.toLowerCase()
							.slice(2)
					);
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
