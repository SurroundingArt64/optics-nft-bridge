/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ERC721RegistryInterface extends ethers.utils.Interface {
  functions: {
    "localTokenData(address)": FunctionFragment;
    "mapTokens(address,uint32,address,bool)": FunctionFragment;
    "remoteTokenIds(address,uint32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "localTokenData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "mapTokens",
    values: [string, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "remoteTokenIds",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "localTokenData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mapTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "remoteTokenIds",
    data: BytesLike
  ): Result;

  events: {};
}

export class ERC721Registry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ERC721RegistryInterface;

  functions: {
    localTokenData(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isNative: boolean }>;

    mapTokens(
      localToken: string,
      domain: BigNumberish,
      remoteToken: string,
      isNative: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    remoteTokenIds(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  localTokenData(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  mapTokens(
    localToken: string,
    domain: BigNumberish,
    remoteToken: string,
    isNative: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  remoteTokenIds(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    localTokenData(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    mapTokens(
      localToken: string,
      domain: BigNumberish,
      remoteToken: string,
      isNative: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    remoteTokenIds(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    localTokenData(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    mapTokens(
      localToken: string,
      domain: BigNumberish,
      remoteToken: string,
      isNative: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    remoteTokenIds(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    localTokenData(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mapTokens(
      localToken: string,
      domain: BigNumberish,
      remoteToken: string,
      isNative: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    remoteTokenIds(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
