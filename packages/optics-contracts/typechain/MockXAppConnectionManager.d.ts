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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MockXAppConnectionManagerInterface extends ethers.utils.Interface {
  functions: {
    "home()": FunctionFragment;
    "isReplica(address)": FunctionFragment;
    "localDomain()": FunctionFragment;
    "replica()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "home", values?: undefined): string;
  encodeFunctionData(functionFragment: "isReplica", values: [string]): string;
  encodeFunctionData(
    functionFragment: "localDomain",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "replica", values?: undefined): string;

  decodeFunctionResult(functionFragment: "home", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isReplica", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "localDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "replica", data: BytesLike): Result;

  events: {};
}

export class MockXAppConnectionManager extends BaseContract {
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

  interface: MockXAppConnectionManagerInterface;

  functions: {
    home(overrides?: CallOverrides): Promise<[string]>;

    isReplica(_replica: string, overrides?: CallOverrides): Promise<[boolean]>;

    localDomain(overrides?: CallOverrides): Promise<[number]>;

    replica(overrides?: CallOverrides): Promise<[string]>;
  };

  home(overrides?: CallOverrides): Promise<string>;

  isReplica(_replica: string, overrides?: CallOverrides): Promise<boolean>;

  localDomain(overrides?: CallOverrides): Promise<number>;

  replica(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    home(overrides?: CallOverrides): Promise<string>;

    isReplica(_replica: string, overrides?: CallOverrides): Promise<boolean>;

    localDomain(overrides?: CallOverrides): Promise<number>;

    replica(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    home(overrides?: CallOverrides): Promise<BigNumber>;

    isReplica(_replica: string, overrides?: CallOverrides): Promise<BigNumber>;

    localDomain(overrides?: CallOverrides): Promise<BigNumber>;

    replica(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    home(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isReplica(
      _replica: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    localDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    replica(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}