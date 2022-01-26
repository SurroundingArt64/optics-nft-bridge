/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  XAppConnectionManager,
  XAppConnectionManagerInterface,
} from "../XAppConnectionManager";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "replica",
        type: "address",
      },
    ],
    name: "ReplicaEnrolled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "replica",
        type: "address",
      },
    ],
    name: "ReplicaUnenrolled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "watcher",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "access",
        type: "bool",
      },
    ],
    name: "WatcherPermissionSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "domainToReplica",
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
  {
    inputs: [],
    name: "home",
    outputs: [
      {
        internalType: "contract Home",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_replica",
        type: "address",
      },
    ],
    name: "isReplica",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_replica",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "ownerEnrollReplica",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_replica",
        type: "address",
      },
    ],
    name: "ownerUnenrollReplica",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "replicaToDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_home",
        type: "address",
      },
    ],
    name: "setHome",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "_access",
        type: "bool",
      },
    ],
    name: "setWatcherPermission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_updater",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "unenrollReplica",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "watcherPermission",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060006100216100c460201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506100cc565b600033905090565b61192b806100db6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638f5d90e01161008c578063b9cff16211610066578063b9cff1621461038f578063e0e7a913146103ed578063f2fde38b146104c2578063f31faefb14610506576100ea565b80638f5d90e0146102b7578063916c3470146102fb5780639fa92f9d1461035b576100ea565b80636ef0f37f116100c85780636ef0f37f14610211578063715018a6146102555780638d3638f41461025f5780638da5cb5b14610283576100ea565b8063427ebef5146100ef5780635190bc53146101595780635f8b1dba146101b3575b600080fd5b6101416004803603604081101561010557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803563ffffffff16906020019092919050505061055a565b60405180821515815260200191505060405180910390f35b61019b6004803603602081101561016f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105ce565b60405180821515815260200191505060405180910390f35b6101f5600480360360208110156101c957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610630565b604051808263ffffffff16815260200191505060405180910390f35b6102536004803603602081101561022757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610653565b005b61025d610746565b005b6102676108b3565b604051808263ffffffff16815260200191505060405180910390f35b61028b61095d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102f9600480360360208110156102cd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610986565b005b6103596004803603606081101561031157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803563ffffffff169060200190929190803515159060200190929190505050610a41565b005b610363610bc7565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103c1600480360360208110156103a557600080fd5b81019080803563ffffffff169060200190929190505050610bed565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104c06004803603606081101561040357600080fd5b81019080803563ffffffff169060200190929190803590602001909291908035906020019064010000000081111561043a57600080fd5b82018360208201111561044c57600080fd5b8035906020019184600183028401116401000000008311171561046e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610c20565b005b610504600480360360208110156104d857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f34565b005b6105586004803603604081101561051c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803563ffffffff169060200190929190505050611126565b005b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008363ffffffff1663ffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900463ffffffff1663ffffffff1614159050919050565b60026020528060005260406000206000915054906101000a900463ffffffff1681565b61065b6112f2565b73ffffffffffffffffffffffffffffffffffffffff1661067961095d565b73ffffffffffffffffffffffffffffffffffffffff1614610702576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61074e6112f2565b73ffffffffffffffffffffffffffffffffffffffff1661076c61095d565b73ffffffffffffffffffffffffffffffffffffffff16146107f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638d3638f46040518163ffffffff1660e01b815260040160206040518083038186803b15801561091d57600080fd5b505afa158015610931573d6000803e3d6000fd5b505050506040513d602081101561094757600080fd5b8101908080519060200190929190505050905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61098e6112f2565b73ffffffffffffffffffffffffffffffffffffffff166109ac61095d565b73ffffffffffffffffffffffffffffffffffffffff1614610a35576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610a3e816112fa565b50565b610a496112f2565b73ffffffffffffffffffffffffffffffffffffffff16610a6761095d565b73ffffffffffffffffffffffffffffffffffffffff1614610af0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008463ffffffff1663ffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508163ffffffff167f517de16b526853f481451c5151e87484e1b251ec7d0302efa1019c2ece179c2c8483604051808373ffffffffffffffffffffffffffffffffffffffff16815260200182151581526020019250505060405180910390a2505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600360008563ffffffff1663ffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f217265706c69636120657869737473000000000000000000000000000000000081525060200191505060405180910390fd5b610d1083611464565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663df034cd06040518163ffffffff1660e01b815260040160206040518083038186803b158015610d6c57600080fd5b505afa158015610d80573d6000803e3d6000fd5b505050506040513d6020811015610d9657600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614610e30576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f2163757272656e7420757064617465720000000000000000000000000000000081525060200191505060405180910390fd5b6000610e4685610e3f84611471565b8686611494565b9050600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008663ffffffff1663ffffffff16815260200190815260200160002060009054906101000a900460ff16610f24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f2176616c6964207761746368657200000000000000000000000000000000000081525060200191505060405180910390fd5b610f2d826112fa565b5050505050565b610f3c6112f2565b73ffffffffffffffffffffffffffffffffffffffff16610f5a61095d565b73ffffffffffffffffffffffffffffffffffffffff1614610fe3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611069576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061188c6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61112e6112f2565b73ffffffffffffffffffffffffffffffffffffffff1661114c61095d565b73ffffffffffffffffffffffffffffffffffffffff16146111d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6111de826112fa565b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548163ffffffff021916908363ffffffff16021790555081600360008363ffffffff1663ffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508063ffffffff167f8440df9bf8a8542634a9eb196da1735b786ed9aa2fc12b080ac34c5fa81a923483604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a25050565b600033905090565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900463ffffffff1690506000600360008363ffffffff1663ffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548163ffffffff021916908363ffffffff1602179055508063ffffffff167fce1533133fb359ace801d3176bbad25ace030d714aed35e38a6293c8a60b115b83604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a25050565b60008160001c9050919050565b60008173ffffffffffffffffffffffffffffffffffffffff1660001b9050919050565b6000806114a085611464565b73ffffffffffffffffffffffffffffffffffffffff166345630b1a6040518163ffffffff1660e01b815260040160206040518083038186803b1580156114e557600080fd5b505afa1580156114f9573d6000803e3d6000fd5b505050506040513d602081101561150f57600080fd5b810190808051906020019092919050505090506000818786604051602001808481526020018363ffffffff1660e01b8152600401828152602001935050505060405160208183030381529060405280519060200120905061156f81611587565b905061157b81856115df565b92505050949350505050565b60008160405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c01828152602001915050604051602081830303815290604052805190602001209050919050565b60006041825114611658576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45434453413a20696e76616c6964207369676e6174757265206c656e6774680081525060200191505060405180910390fd5b60008060006020850151925060408501519150606085015160001a90506116818682858561168c565b935050505092915050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260001c111561170a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806118b26022913960400191505060405180910390fd5b601b8460ff16148061171f5750601c8460ff16145b611774576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806118d46022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156117d0573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561187f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f45434453413a20696e76616c6964207369676e6174757265000000000000000081525060200191505060405180910390fd5b8091505094935050505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345434453413a20696e76616c6964207369676e6174757265202773272076616c756545434453413a20696e76616c6964207369676e6174757265202776272076616c7565a2646970667358221220984c9aca5f68cfd5af60341be37fccc0b885039d56f8248089b439d505f5ce8064736f6c63430007060033";

export class XAppConnectionManager__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<XAppConnectionManager> {
    return super.deploy(overrides || {}) as Promise<XAppConnectionManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): XAppConnectionManager {
    return super.attach(address) as XAppConnectionManager;
  }
  connect(signer: Signer): XAppConnectionManager__factory {
    return super.connect(signer) as XAppConnectionManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XAppConnectionManagerInterface {
    return new utils.Interface(_abi) as XAppConnectionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): XAppConnectionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as XAppConnectionManager;
  }
}