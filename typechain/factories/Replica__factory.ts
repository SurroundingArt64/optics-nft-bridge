/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Replica, ReplicaInterface } from "../Replica";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_processGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reserveGas",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "newRoot",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature2",
        type: "bytes",
      },
    ],
    name: "DoubleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        indexed: true,
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    name: "Process",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "homeDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "Update",
    type: "event",
  },
  {
    inputs: [],
    name: "PROCESS_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RESERVE_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "acceptableRoot",
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
    name: "committedRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "confirmAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[2]",
        name: "_newRoot",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature2",
        type: "bytes",
      },
    ],
    name: "doubleUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "homeDomainHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_remoteDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_committedRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_optimisticSeconds",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "messages",
    outputs: [
      {
        internalType: "enum Replica.MessageStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "optimisticSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "process",
    outputs: [
      {
        internalType: "bool",
        name: "_success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_leaf",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "prove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "proveAndProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "remoteDomain",
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
    name: "state",
    outputs: [
      {
        internalType: "enum Common.States",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
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

const _bytecode =
  "0x60e060405234801561001057600080fd5b5060405162002ef038038062002ef08339818101604052606081101561003557600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050828063ffffffff1660808163ffffffff1660e01b8152505050620cf8508210156100ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f2170726f6365737320676173000000000000000000000000000000000000000081525060200191505060405180910390fd5b613a98811015610164576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f217265736572766520676173000000000000000000000000000000000000000081525060200191505060405180910390fd5b8160a081815250508060c0818152505050505060805160e01c60a05160c051612d35620001bb600039806109d55280610f5e525080610f7f528061103352806115a6525080610c3e5280610cc25250612d356000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80638d3638f4116100ad578063c19d93fb11610071578063c19d93fb14610666578063d88beda21461068f578063df034cd0146106ad578063e7e7a7b7146106e1578063ffa1ad741461074957610121565b80638d3638f41461043a578063928bc4b21461045e578063961681dc1461052f578063a3f81d6814610553578063b31c01fb1461059757610121565b806339992668116100f457806339992668146102cd57806345630b1a146102eb5780636188af0e1461030957806367a6771d146103da57806371bfb7b8146103f857610121565b806319d9d21a1461012657806325e3beda146102085780632bbd59ca14610226578063371d307114610273575b600080fd5b610206600480360360a081101561013c57600080fd5b8101908080359060200190929190806040019091929192908035906020019064010000000081111561016d57600080fd5b82018360208201111561017f57600080fd5b803590602001918460018302840111640100000000831117156101a157600080fd5b9091929391929390803590602001906401000000008111156101c257600080fd5b8201836020820111156101d457600080fd5b803590602001918460018302840111640100000000831117156101f657600080fd5b909192939192939050505061076a565b005b6102106109d3565b6040518082815260200191505060405180910390f35b6102526004803603602081101561023c57600080fd5b81019080803590602001909291905050506109f7565b6040518082600281111561026257fe5b815260200191505060405180910390f35b6102b5600480360361044081101561028a57600080fd5b8101908080359060200190929190806104000190919291929080359060200190929190505050610a17565b60405180821515815260200191505060405180910390f35b6102d5610b63565b6040518082815260200191505060405180910390f35b6102f3610b69565b6040518082815260200191505060405180910390f35b6103d8600480360361044081101561032057600080fd5b810190808035906020019064010000000081111561033d57600080fd5b82018360208201111561034f57600080fd5b8035906020019184600183028401116401000000008311171561037157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290806104000190919291929080359060200190929190505050610b8b565b005b6103e2610c1e565b6040518082815260200191505060405180910390f35b6104246004803603602081101561040e57600080fd5b8101908080359060200190929190505050610c24565b6040518082815260200191505060405180910390f35b610442610c3c565b604051808263ffffffff16815260200191505060405180910390f35b6105176004803603602081101561047457600080fd5b810190808035906020019064010000000081111561049157600080fd5b8201836020820111156104a357600080fd5b803590602001918460018302840111640100000000831117156104c557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610c60565b60405180821515815260200191505060405180910390f35b6105376112cc565b604051808263ffffffff16815260200191505060405180910390f35b61057f6004803603602081101561056957600080fd5b81019080803590602001909291905050506112e2565b60405180821515815260200191505060405180910390f35b610664600480360360608110156105ad57600080fd5b810190808035906020019092919080359060200190929190803590602001906401000000008111156105de57600080fd5b8201836020820111156105f057600080fd5b8035906020019184600183028401116401000000008311171561061257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061131b565b005b61066e611591565b6040518082600281111561067e57fe5b815260200191505060405180910390f35b6106976115a4565b6040518082815260200191505060405180910390f35b6106b56115c8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610747600480360360808110156106f757600080fd5b81019080803563ffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291905050506115ee565b005b61075161175d565b604051808260ff16815260200191505060405180910390f35b60028081111561077657fe5b600060169054906101000a900460ff16600281111561079157fe5b1415610805576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6661696c6564207374617465000000000000000000000000000000000000000081525060200191505060405180910390fd5b610865868660006002811061081657fe5b602002013586868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611762565b80156108cd57506108cc868660016002811061087d57fe5b602002013584848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611762565b5b80156108fb5750846001600281106108e157fe5b6020020135856000600281106108f357fe5b602002013514155b156109cb57610908611814565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f8686868686866040518087815260200186600260200280828437600081840152601f19601f82011690508083019250505080602001806020018381038352878782818152602001925080828437600081840152601f19601f8201169050808301925050508381038252858582818152602001925080828437600081840152601f19601f8201169050808301925050509850505050505050505060405180910390a15b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60356020528060005260406000206000915054906101000a900460ff1681565b6000806002811115610a2557fe5b6035600086815260200190815260200160002060009054906101000a900460ff166002811115610a5157fe5b14610ac4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f214d6573736167655374617475732e4e6f6e650000000000000000000000000081525060200191505060405180910390fd5b6000610b07858560208060200260405190810160405280929190826020800280828437600081840152601f19601f8201169050808301925050505050508561181e565b9050610b12816112e2565b15610b565760016035600087815260200190815260200160002060006101000a81548160ff02191690836002811115610b4757fe5b02179055506001915050610b5c565b60009150505b9392505050565b60325481565b6000610b86603160009054906101000a900463ffffffff166118d7565b905090565b610b9d83805190602001208383610a17565b610c0f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260068152602001807f2170726f7665000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b610c1883610c60565b50505050565b60015481565b60346020528060005260406000206000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080610c7760008461193890919063ffffffff16565b9050610cb76040518060400160405280600281526020017f5f6d000000000000000000000000000000000000000000000000000000000000815250611963565b610cc081611a61565b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff16610cf68262ffffff1916611b00565b63ffffffff1614610d6f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f2164657374696e6174696f6e000000000000000000000000000000000000000081525060200191505060405180910390fd5b610dad6040518060400160405280600781526020017f5f6b656363616b00000000000000000000000000000000000000000000000000815250611963565b610dc4610dbf8262ffffff1916611b26565b611b69565b6000610dd58262ffffff1916611b26565b905060016002811115610de457fe5b6035600083815260200190815260200160002060009054906101000a900460ff166002811115610e1057fe5b14610e83576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260078152602001807f2170726f76656e0000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b6001603360009054906101000a900460ff1660ff1614610f0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600a8152602001807f217265656e7472616e740000000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000603360006101000a81548160ff021916908360ff16021790555060026035600083815260200190815260200160002060006101000a81548160ff02191690836002811115610f5757fe5b02179055507f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000015a1015611014576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260048152602001807f216761730000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b60006110258362ffffff1916611c02565b9050600080610100905060007f0000000000000000000000000000000000000000000000000000000000000000905060008267ffffffffffffffff8111801561106d57600080fd5b506040519080825280601f01601f1916602001820160405280156110a05781602001600182028036833780820191505090505b50905060006110b48862ffffff1916611c1c565b6110c38962ffffff1916611c42565b6110e06110d58b62ffffff1916611c68565b62ffffff1916611cae565b604051602401808463ffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561113557808201518184015260208101905061111a565b50505050905090810190601f1680156111625780820380516001836020036101000a031916815260200191505b509450505050506040516020818303038152906040527f56d5d475000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008082516020840160008a88f198503d945083851115611207578394505b848252846000602084013e816040518082805190602001908083835b602083106112465780518252602082019150602081019050602083039250611223565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020891515887fd42de95a9b26f1be134c8ecce389dc4fcfa18753d01661b7b361233569e8fe4860405160405180910390a46001603360006101000a81548160ff021916908360ff1602179055505050505050505050919050565b603160009054906101000a900463ffffffff1681565b60008060346000848152602001908152602001600020549050600081141561130e576000915050611316565b804210159150505b919050565b60028081111561132757fe5b600060169054906101000a900460ff16600281111561134257fe5b14156113b6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6661696c6564207374617465000000000000000000000000000000000000000081525060200191505060405180910390fd5b600154831461142d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6e6f742063757272656e7420757064617465000000000000000000000000000081525060200191505060405180910390fd5b611438838383611762565b6114aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f217570646174657220736967000000000000000000000000000000000000000081525060200191505060405180910390fd5b6114b2611cf5565b60325442016034600084815260200190815260200160002081905550816001819055508183603160009054906101000a900463ffffffff1663ffffffff167f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b2846040518080602001828103825283818151815260200191508051906020019080838360005b83811015611552578082015181840152602081019050611537565b50505050905090810190601f16801561157f5780820380516001836020036101000a031916815260200191505b509250505060405180910390a4505050565b600060169054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019054906101000a900460ff168061160d575061160c611cf7565b5b80611623575060008054906101000a900460ff16155b611678576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612bee602e913960400191505060405180910390fd5b60008060019054906101000a900460ff1615905080156116c8576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6116d184611d08565b6001603360006101000a81548160ff021916908360ff16021790555084603160006101000a81548163ffffffff021916908363ffffffff16021790555082600181905550600160346000858152602001908152602001600020819055508160328190555080156117565760008060016101000a81548160ff0219169083151502179055505b5050505050565b600081565b60008061176d610b69565b85856040516020018084815260200183815260200182815260200193505050506040516020818303038152906040528051906020012090506117ae81611e6c565b9050600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166117f38285611ec4565b73ffffffffffffffffffffffffffffffffffffffff16149150509392505050565b61181c611f71565b565b600083905060005b60208110156118cf57600060018285901c169050600085836020811061184857fe5b60200201519050600182141561188e57808460405160200180838152602001828152602001925050506040516020818303038152906040528051906020012093506118c0565b838160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012093505b50508080600101915050611826565b509392505050565b600081604051602001808263ffffffff1660e01b8152600401807f4f50544943530000000000000000000000000000000000000000000000000000815250600601915050604051602081830303815290604052805190602001209050919050565b6000808351905060006020850190506119598464ffffffffff168284611f97565b9250505092915050565b611a5e816040516024018080602001828103825283818151815260200191508051906020019080838360005b838110156119aa57808201518184015260208101905061198f565b50505050905090810190601f1680156119d75780820380516001836020036101000a031916815260200191505b50925050506040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612006565b50565b611afd81604051602401808262ffffff191681526020019150506040516020818303038152906040527f4b69c3d5000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612006565b50565b6000611b1f602860048462ffffff191661202f9092919063ffffffff16565b9050919050565b600080611b3283612054565b6bffffffffffffffffffffffff1690506000611b4d84612074565b6bffffffffffffffffffffffff16905080822092505050919050565b611bff81604051602401808281526020019150506040516020818303038152906040527f27b7cf85000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612006565b50565b6000611c15611c1083612094565b6120ba565b9050919050565b6000611c3b600060048462ffffff191661202f9092919063ffffffff16565b9050919050565b6000611c61600460208462ffffff19166120c79092919063ffffffff16565b9050919050565b6000611ca7604c80611c7f8562ffffff1916612074565b6bffffffffffffffffffffffff160360008562ffffff191661228e909392919063ffffffff16565b9050919050565b6060600080611cbc84612074565b6bffffffffffffffffffffffff1690506040519150819250611ce1846020840161233a565b506020818301016040528082525050919050565b565b6000611d0230612471565b15905090565b600060019054906101000a900460ff1680611d275750611d26611cf7565b5b80611d3d575060008054906101000a900460ff16155b611d92576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612bee602e913960400191505060405180910390fd5b60008060019054906101000a900460ff161590508015611de2576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b81600060026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600060166101000a81548160ff02191690836002811115611e4257fe5b02179055508015611e685760008060016101000a81548160ff0219169083151502179055505b5050565b60008160405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c01828152602001915050604051602081830303815290604052805190602001209050919050565b60006041825114611f3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45434453413a20696e76616c6964207369676e6174757265206c656e6774680081525060200191505060405180910390fd5b60008060006020850151925060408501519150606085015160001a9050611f6686828585612484565b935050505092915050565b6002600060166101000a81548160ff02191690836002811115611f9057fe5b0217905550565b600080611fad838561268390919063ffffffff16565b9050604051811115611fbe57600090505b6000811415611ff0577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050611fff565b611ffb858585612706565b9150505b9392505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006008826020030260ff166120468585856120c7565b60001c901c90509392505050565b6000806bffffffffffffffffffffffff9050808360781c16915050919050565b6000806bffffffffffffffffffffffff9050808360181c16915050919050565b60006120b3602c60208462ffffff19166120c79092919063ffffffff16565b9050919050565b60008160001c9050919050565b6000808260ff1614156120df576000801b9050612287565b6120e884612074565b6bffffffffffffffffffffffff1661210c8360ff168561268390919063ffffffff16565b11156121ee5761214d61211e85612054565b6bffffffffffffffffffffffff1661213586612074565b6bffffffffffffffffffffffff16858560ff16612727565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156121b3578082015181840152602081019050612198565b50505050905090810190601f1680156121e05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60208260ff16111561224b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180612c3e603a913960400191505060405180910390fd5b6000600883029050600061225e86612054565b6bffffffffffffffffffffffff169050600061227983612861565b905080868301511693505050505b9392505050565b60008061229a86612054565b6bffffffffffffffffffffffff1690506122b386612890565b6122d8856122ca888561268390919063ffffffff16565b61268390919063ffffffff16565b1115612307577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050612332565b61231a858261268390919063ffffffff16565b905061232e8364ffffffffff168286611f97565b9150505b949350505050565b6000612345836128ba565b61239a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180612c786028913960400191505060405180910390fd5b6123a3836128cd565b6123f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180612ca0602b913960400191505060405180910390fd5b600061240384612074565b6bffffffffffffffffffffffff169050600061241e85612054565b6bffffffffffffffffffffffff16905060006040519050848111156124435760206060fd5b8285848460045afa5061246661245887612910565b64ffffffffff168685612706565b935050505092915050565b600080823b905060008111915050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260001c1115612502576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612bab6022913960400191505060405180910390fd5b601b8460ff1614806125175750601c8460ff16145b61256c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612c1c6022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156125c8573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612677576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f45434453413a20696e76616c6964207369676e6174757265000000000000000081525060200191505060405180910390fd5b80915050949350505050565b6000818301905082811015612700576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4f766572666c6f7720647572696e67206164646974696f6e2e0000000000000081525060200191505060405180910390fd5b92915050565b600083811760601b905082811760601b905081811760181b90509392505050565b606060006127348661291d565b91505060006127428661291d565b91505060006127508661291d565b915050600061275e8661291d565b915050838383836040516020018080612ccb603591396035018565ffffffffffff1660d01b8152600601807f2077697468206c656e6774682030780000000000000000000000000000000000815250600f018465ffffffffffff1660d01b815260060180612bcd602191396021018365ffffffffffff1660d01b8152600601807f2077697468206c656e6774682030780000000000000000000000000000000000815250600f018265ffffffffffff1660d01b8152600601807f2e00000000000000000000000000000000000000000000000000000000000000815250600101945050505050604051602081830303815290604052945050505050949350505050565b60007f8000000000000000000000000000000000000000000000000000000000000000600183031d9050919050565b600061289b82612074565b6128a483612054565b016bffffffffffffffffffffffff169050919050565b60006128c5826129c9565b159050919050565b600064ffffffffff6128de83612910565b64ffffffffff1614156128f4576000905061290b565b60006128ff83612890565b90506040518111199150505b919050565b60008160d81c9050919050565b6000806000601f90505b600f8160ff1611156129715760006008820260ff1685901c905061294a81612a01565b61ffff168417935060108260ff161461296557601084901b93505b50600181039050612927565b506000600f90505b60ff8160ff1610156129c35760006008820260ff1685901c905061299c81612a01565b61ffff168317925060008260ff16146129b757601083901b92505b50600181039050612979565b50915091565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000062ffffff19168262ffffff1916149050919050565b6000612a1360048360ff16901c612a3a565b60ff168117905060088161ffff16901b9050612a2e82612a3a565b60ff1681179050919050565b60008060f08317905060f08160ff161415612a59576030915050612ba5565b60f18160ff161415612a6f576031915050612ba5565b60f28160ff161415612a85576032915050612ba5565b60f38160ff161415612a9b576033915050612ba5565b60f48160ff161415612ab1576034915050612ba5565b60f58160ff161415612ac7576035915050612ba5565b60f68160ff161415612add576036915050612ba5565b60f78160ff161415612af3576037915050612ba5565b60f88160ff161415612b09576038915050612ba5565b60f98160ff161415612b1f576039915050612ba5565b60fa8160ff161415612b35576061915050612ba5565b60fb8160ff161415612b4b576062915050612ba5565b60fc8160ff161415612b61576063915050612ba5565b60fd8160ff161415612b77576064915050612ba5565b60fe8160ff161415612b8d576065915050612ba5565b60ff8160ff161415612ba3576066915050612ba5565b505b91905056fe45434453413a20696e76616c6964207369676e6174757265202773272076616c75652e20417474656d7074656420746f20696e646578206174206f6666736574203078496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c756554797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e20333220627974657354797065644d656d566965772f636f7079546f202d204e756c6c20706f696e74657220646572656654797065644d656d566965772f636f7079546f202d20496e76616c696420706f696e74657220646572656654797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a2646970667358221220a7322ecbc8ddf62401b7e90a868abd8f10645a17a3a8be7d8b024ecaac617a5364736f6c63430007060033";

export class Replica__factory extends ContractFactory {
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
    _localDomain: BigNumberish,
    _processGas: BigNumberish,
    _reserveGas: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Replica> {
    return super.deploy(
      _localDomain,
      _processGas,
      _reserveGas,
      overrides || {}
    ) as Promise<Replica>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    _processGas: BigNumberish,
    _reserveGas: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _localDomain,
      _processGas,
      _reserveGas,
      overrides || {}
    );
  }
  attach(address: string): Replica {
    return super.attach(address) as Replica;
  }
  connect(signer: Signer): Replica__factory {
    return super.connect(signer) as Replica__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReplicaInterface {
    return new utils.Interface(_abi) as ReplicaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Replica {
    return new Contract(address, _abi, signerOrProvider) as Replica;
  }
}
