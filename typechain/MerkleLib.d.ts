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

interface MerkleLibInterface extends ethers.utils.Interface {
  functions: {
    "branchRoot(bytes32,bytes32[32],uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "branchRoot",
    values: [
      BytesLike,
      [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "branchRoot", data: BytesLike): Result;

  events: {};
}

export class MerkleLib extends BaseContract {
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

  interface: MerkleLibInterface;

  functions: {
    branchRoot(
      _item: BytesLike,
      _branch: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { _current: string }>;
  };

  branchRoot(
    _item: BytesLike,
    _branch: [
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike
    ],
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    branchRoot(
      _item: BytesLike,
      _branch: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    branchRoot(
      _item: BytesLike,
      _branch: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    branchRoot(
      _item: BytesLike,
      _branch: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
