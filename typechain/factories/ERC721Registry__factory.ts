/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ERC721Registry,
  ERC721RegistryInterface,
} from "../ERC721Registry";

const _abi = [
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "remoteTokenIds",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ERC721Registry__factory {
  static readonly abi = _abi;
  static createInterface(): ERC721RegistryInterface {
    return new utils.Interface(_abi) as ERC721RegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Registry {
    return new Contract(address, _abi, signerOrProvider) as ERC721Registry;
  }
}
