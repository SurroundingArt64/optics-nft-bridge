import { expect, use } from "chai";
import { solidity } from "ethereum-waffle";
import { ethers } from "ethers";
import { PromiseType } from "utility-types";
import { setupTest } from "./fixture";

use(solidity);

describe("Router", () => {
	type SetupTest = PromiseType<ReturnType<typeof setupTest>>;

	let deployer: SetupTest["deployer"];
	let tokenMapper: SetupTest["tokenMapper"];
	const localDomain = 0;
	const remoteDomain = 1;
	beforeEach(async () => {
		({ deployer, tokenMapper } = await setupTest());
	});

	it("map tokens on both routers", async () => {
		const { ERC721LocalRouter, Native721, NonNative721 } =
			tokenMapper.contracts;

		await expect(
			ERC721LocalRouter.mapTokens(
				Native721.address,
				remoteDomain,
				NonNative721.address,
				true
			)
		).to.emit(ERC721LocalRouter, "MapTokens");

		const revertedTx = ERC721LocalRouter.mapTokens(
			Native721.address,
			localDomain,
			NonNative721.address,
			true
		);

		await expect(revertedTx).to.be.reverted;
		await expect(revertedTx).to.be.revertedWith("!remote");
	});

	describe("token transfers", () => {
		beforeEach(async () => {
			const { Native721, NonNative721 } = deployer;
			const { ERC721LocalRouter, ERC721RemoteRouter } =
				tokenMapper.contracts;

			await ERC721LocalRouter.mapTokens(
				Native721.address,
				remoteDomain,
				NonNative721.address,
				true
			);

			await ERC721RemoteRouter.mapTokens(
				NonNative721.address,
				localDomain,
				Native721.address,
				false
			);

			await Native721.mintBatch(100);
			await NonNative721.mintBatch(100);

			await NonNative721.setLocalRouter(ERC721RemoteRouter.address);
			await Native721.setLocalRouter(ERC721LocalRouter.address);
		});

		it("transfer from local to remote", async () => {
			const { Native721 } = deployer;
			const { ERC721LocalRouter, MockHome } = deployer;

			await Native721.setApprovalForAll(ERC721LocalRouter.address, true);

			await expect(
				ERC721LocalRouter.send(
					Native721.address,
					1,
					remoteDomain,
					deployer.address
				)
			)
				.to.emit(MockHome, "Dispatch")
				.to.emit(Native721, "Transfer")
				.withArgs(deployer.address, ERC721LocalRouter.address, 1);
		});

		it("mint on remote on receiving transfer", async () => {
			const { Native721, NonNative721 } = deployer;
			const {
				ERC721LocalRouter,
				MockXAppConnectionManagerRemote,
				ERC721RemoteRouter,
			} = deployer;

			await Native721.setApprovalForAll(ERC721LocalRouter.address, true);

			await ERC721LocalRouter.send(
				Native721.address,
				1,
				remoteDomain,
				deployer.address
			);

			const abiCoder = new ethers.utils.AbiCoder();
			const encoding = abiCoder.encode(
				[
					"address",
					"uint32",
					"uint32",
					"address",
					"address",
					"uint256",
					"uint8",
				],
				[
					Native721.address,
					localDomain,
					remoteDomain,
					NonNative721.address,
					deployer.address,
					1,
					1,
				]
			);

			// console.log({ encoding });
			const sender = await ERC721RemoteRouter.remotes(localDomain);
			// console.log(
			// 	sender,
			// 	ethers.utils.formatBytes32String(ERC721LocalRouter.address)
			// );
			// deployer contract is replica

			await ERC721RemoteRouter.handle(localDomain, sender, encoding);
		});
	});
});
