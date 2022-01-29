import { MetaMaskInpageProvider } from "@metamask/providers";
import { ethers } from "ethers";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { ValuesType } from "utility-types";

import { getNetworks } from "./networks";

const getEthereum = () => {
	const { ethereum } = window as unknown as {
		ethereum: MetaMaskInpageProvider;
	};
	return ethereum;
};

const getProvider = () => {
	return new ethers.providers.Web3Provider(getEthereum() as any);
};

const supportedNetworks = [
	{
		name: "mumbai",
		displayName: "Polygon Mumbai",
		chainId: 80001,
	},
	{
		name: "alfajores",
		displayName: "Celo Alfajores",
		chainId: 44787,
	},
	{
		name: "rinkeby",
		displayName: "Rinkeby",
		chainId: 4,
	},
];

export default function Home() {
	const [connected, setConnected] = useState<boolean>(false);
	const [switchNetworkModal, setSwitchNetworkModal] =
		useState<boolean>(false);
	const [localNetworkDetails, setLocalNetworkDetails] =
		useState<ValuesType<typeof supportedNetworks>>();

	const [state, setState] = useState<{
		tokenId: string;
		tokenAddress: string;
	}>();

	const [currentChainId, setCurrentChainId] = useState<number>();

	const [remoteNetworks, setRemoteNetworks] =
		useState<typeof supportedNetworks>();

	const [bridgeTo, setBridgeTo] = useState<typeof localNetworkDetails>();

	const isMetamaskConnected = useCallback(async () => {
		const provider = getProvider();

		if (provider) {
			const accounts = await provider.listAccounts();
			if (accounts) {
				return accounts.length > 0;
			}
		}
		return false;
	}, []);

	const connectWallet = useCallback(async () => {
		if (await isMetamaskConnected()) {
			setConnected(true);
		}
		const ethereum = getEthereum();
		await ethereum.request({
			method: "eth_requestAccounts",
		});

		setConnected(true);
	}, [isMetamaskConnected]);

	useEffect(() => {
		connectWallet();
		console.log("rendered");
	}, [connectWallet]);

	useEffect(() => {
		if (connected) {
			const run = async () => {
				const { chainId } = await getProvider().getNetwork();
				setCurrentChainId(chainId);
			};
			run();
			const ethereum = getEthereum();
			ethereum.on("chainChanged", (_chainId: string) => {
				setCurrentChainId(parseInt(_chainId, 16));
			});
		}
		return () => {
			const ethereum = getEthereum();
			if (ethereum) {
				ethereum.removeAllListeners();
			}
		};
	}, [connected]);

	const handleNetworkSwitch = async (network: typeof localNetworkDetails) => {
		const ethereum = getEthereum();
		// convert chainId to hex with 0x prefix
		const chainId = "0x" + network.chainId.toString(16);
		try {
			await ethereum.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: chainId }],
			});
		} catch (switchError) {
			// This error code indicates that the chain has not been added to MetaMask.
			if (switchError.code === 4902) {
				await ethereum.request({
					method: "wallet_addEthereumChain",
					params: [
						{
							chainId: chainId.trim(),
							chainName: localNetworkDetails.displayName,
							rpcUrls: [],
						},
					],
				});
			} else console.error(switchError);
		}
	};

	useEffect(() => {
		const run = async () => {
			const network = supportedNetworks.find(
				(n) => n.chainId === currentChainId
			);
			if (network) {
				setLocalNetworkDetails(network);
				setSwitchNetworkModal(false);

				setRemoteNetworks(
					supportedNetworks.filter(
						(elem) => elem.chainId !== currentChainId
					)
				);
			} else {
				setLocalNetworkDetails(undefined);
				setRemoteNetworks(undefined);
				setSwitchNetworkModal(true);
				setBridgeTo(undefined);
			}
		};
		if (currentChainId) {
			run();
		}
	}, [currentChainId]);

	const handleState = ({ target: { value, name } }) => {
		setState((state) => {
			return {
				...state,
				[name]: value,
			};
		});
	};

	const checkIfMapped = async () => {
		if (state.tokenAddress) {
			// get erc721 router for localNetwork
			const localNetworkAddresses = getNetworks().find(
				(elem) =>
					elem.chainId.toString() ===
					localNetworkDetails.chainId.toString()
			);
			const ERC721Router = new ethers.Contract(
				localNetworkAddresses.contracts.ERC721Router,
				[
					{
						inputs: [
							{
								internalType: "address",
								name: "",
								type: "address",
							},
						],
						name: "localTokenData",
						outputs: [
							{
								internalType: "bool",
								name: "isNative",
								type: "bool",
							},
						],
						stateMutability: "view",
						type: "function",
					},
					{
						inputs: [
							{
								internalType: "address",
								name: "_token",
								type: "address",
							},
							{
								internalType: "uint256",
								name: "_tokenId",
								type: "uint256",
							},
							{
								internalType: "uint32",
								name: "_domain",
								type: "uint32",
							},
							{
								internalType: "address",
								name: "_recipient",
								type: "address",
							},
						],
						name: "send",
						outputs: [],
						stateMutability: "nonpayable",
						type: "function",
					},
				],
				getProvider().getSigner(
					"0xFC77079c043B39A64eE9fa70863f25C9A0381D08"
				)
			);

			if (
				(await ERC721Router.localTokenData(state.tokenAddress)) === true
			) {
				const tx = await ERC721Router.send(
					state.tokenAddress,
					state.tokenId,
					2000,
					"0xFC77079c043B39A64eE9fa70863f25C9A0381D08",
					{ from: "0xFC77079c043B39A64eE9fa70863f25C9A0381D08" }
				);
				console.log(tx.hash);

				await tx.wait();
			}
		}
	};

	return (
		<div>
			{connected && (
				<>
					<h1>Connected to Metamask</h1>

					{localNetworkDetails && (
						<>
							Connected to {localNetworkDetails.displayName}
							{remoteNetworks?.map((network) => {
								const isBridgeTo =
									network.chainId === bridgeTo?.chainId;
								return (
									<div
										style={
											isBridgeTo
												? {
														border: "1px solid red",
												  }
												: {}
										}
										key={network.name}
										className=""
									>
										<div
											style={{ cursor: "pointer" }}
											onClick={() => {
												setBridgeTo(network);
											}}
										>
											{network.displayName}
										</div>
									</div>
								);
							})}
						</>
					)}

					{bridgeTo && (
						<>
							Bridge to {bridgeTo.displayName}
							<br />
							Enter Token Address on{" "}
							{localNetworkDetails.displayName}:
							<input
								type="text"
								onChange={(e) => {
									handleState(e);
								}}
								name="tokenAddress"
								id=""
								value={state?.tokenAddress ?? ""}
							/>
							<br />
							Enter Token Id
							{localNetworkDetails.displayName}:
							<input
								type="text"
								onChange={(e) => {
									handleState(e);
								}}
								name="tokenId"
								id=""
								value={state?.tokenId}
								onBlur={checkIfMapped}
							/>
						</>
					)}

					{switchNetworkModal && (
						<>
							Please switch to supported Network
							{supportedNetworks.map((network) => (
								<>
									<div key={network.name} className="">
										<button
											onClick={async () => {
												await handleNetworkSwitch(
													network
												);
											}}
										>
											{network.displayName}
										</button>
									</div>
								</>
							))}
						</>
					)}
				</>
			)}
		</div>
	);
}
