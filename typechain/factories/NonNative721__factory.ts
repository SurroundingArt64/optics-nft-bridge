/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NonNative721, NonNative721Interface } from "../NonNative721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "handleDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "handleExit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenIds",
        type: "uint256",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200384738038062003847833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011557600080fd5b838201915060208201858111156200012c57600080fd5b82518660018202830111640100000000821117156200014a57600080fd5b8083526020830192505050908051906020019080838360005b838110156200018057808201518184015260208101905062000163565b50505050905090810190601f168015620001ae5780820380516001836020036101000a031916815260200191505b5060405250505081818181620001d16301ffc9a760e01b6200030860201b60201c565b8160069080519060200190620001e992919062000419565b5080600790805190602001906200020292919062000419565b506200021b6380ac58cd60e01b6200030860201b60201c565b62000233635b5e139f60e01b6200030860201b60201c565b6200024b63780e9d6360e01b6200030860201b60201c565b505050506000620002616200041160201b60201c565b905080600a60046101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050620004cf565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620003a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600033905090565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200045157600085556200049d565b82601f106200046c57805160ff19168380011785556200049d565b828001600101855582156200049d579182015b828111156200049c5782518255916020019190600101906200047f565b5b509050620004ac9190620004b0565b5090565b5b80821115620004cb576000816000905550600101620004b1565b5090565b61336880620004df6000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80636352211e116100c3578063a22cb4651161007c578063a22cb46514610701578063b88d4fde14610751578063bc4627ad14610856578063c87b56dd14610884578063e985e9c51461092b578063f2fde38b146109a557610158565b80636352211e1461050d5780636c0360eb1461056557806370a08231146105e8578063715018a6146106405780638da5cb5b1461064a57806395d89b411461067e57610158565b806320e409b41161011557806320e409b41461031157806323b872dd1461033f5780632f745c59146103ad57806342842e0e1461040f5780634f6ccce71461047d57806359e238d6146104bf57610158565b806301ffc9a71461015d57806306fdde03146101c0578063081812fc14610243578063095ea7b31461029b5780631249c58b146102e957806318160ddd146102f3575b600080fd5b6101a86004803603602081101561017357600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506109e9565b60405180821515815260200191505060405180910390f35b6101c8610a50565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102085780820151818401526020810190506101ed565b50505050905090810190601f1680156102355780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61026f6004803603602081101561025957600080fd5b8101908080359060200190929190505050610af2565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102e7600480360360408110156102b157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b8d565b005b6102f1610cd1565b005b6102fb610d1c565b6040518082815260200191505060405180910390f35b61033d6004803603602081101561032757600080fd5b8101908080359060200190929190505050610d2d565b005b6103ab6004803603606081101561035557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d51565b005b6103f9600480360360408110156103c357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610dc7565b6040518082815260200191505060405180910390f35b61047b6004803603606081101561042557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e22565b005b6104a96004803603602081101561049357600080fd5b8101908080359060200190929190505050610e42565b6040518082815260200191505060405180910390f35b61050b600480360360408110156104d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e65565b005b6105396004803603602081101561052357600080fd5b8101908080359060200190929190505050610ecd565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61056d610f04565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105ad578082015181840152602081019050610592565b50505050905090810190601f1680156105da5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61062a600480360360208110156105fe57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fa6565b6040518082815260200191505060405180910390f35b61064861107b565b005b6106526111eb565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610686611215565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106c65780820151818401526020810190506106ab565b50505050905090810190601f1680156106f35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61074f6004803603604081101561071757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506112b7565b005b6108546004803603608081101561076757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156107ce57600080fd5b8201836020820111156107e057600080fd5b8035906020019184600183028401116401000000008311171561080257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061146d565b005b6108826004803603602081101561086c57600080fd5b81019080803590602001909291905050506114e5565b005b6108b06004803603602081101561089a57600080fd5b81019080803590602001909291905050506115e3565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108f05780820151818401526020810190506108d5565b50505050905090810190601f16801561091d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61098d6004803603604081101561094157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118b4565b60405180821515815260200191505060405180910390f35b6109e7600480360360208110156109bb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611948565b005b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ae85780601f10610abd57610100808354040283529160200191610ae8565b820191906000526020600020905b815481529060010190602001808311610acb57829003601f168201915b5050505050905090565b6000610afd82611b3d565b610b52576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061325d602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610b9882610ecd565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c1f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806132e16021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610c3e611b5a565b73ffffffffffffffffffffffffffffffffffffffff161480610c6d5750610c6c81610c67611b5a565b6118b4565b5b610cc2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806131b06038913960400191505060405180910390fd5b610ccc8383611b62565b505050565b610d1a33600a600081819054906101000a900463ffffffff168092919060010191906101000a81548163ffffffff021916908363ffffffff16021790555063ffffffff16611c1b565b565b6000610d286002611e0f565b905090565b60005b81811015610d4d57610d40610cd1565b8080600101915050610d30565b5050565b610d62610d5c611b5a565b82611e24565b610db7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806133026031913960400191505060405180910390fd5b610dc2838383611f18565b505050565b6000610e1a82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061215b90919063ffffffff16565b905092915050565b610e3d8383836040518060200160405280600081525061146d565b505050565b600080610e5983600261217590919063ffffffff16565b50905080915050919050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ebf57600080fd5b610ec98282611c1b565b5050565b6000610efd826040518060600160405280602981526020016132126029913960026121a19092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f9c5780601f10610f7157610100808354040283529160200191610f9c565b820191906000526020600020905b815481529060010190602001808311610f7f57829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561102d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806131e8602a913960400191505060405180910390fd5b611074600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206121c0565b9050919050565b611083611b5a565b73ffffffffffffffffffffffffffffffffffffffff166110a16111eb565b73ffffffffffffffffffffffffffffffffffffffff161461112a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600a60049054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600a60046101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600a60049054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112ad5780601f10611282576101008083540402835291602001916112ad565b820191906000526020600020905b81548152906001019060200180831161129057829003601f168201915b5050505050905090565b6112bf611b5a565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611360576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b806005600061136d611b5a565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1661141a611b5a565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b61147e611478611b5a565b83611e24565b6114d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806133026031913960400191505060405180910390fd5b6114df848484846121d5565b50505050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461153f57600080fd5b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661158182610ecd565b73ffffffffffffffffffffffffffffffffffffffff16146115d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115ce9061308e565b60405180910390fd5b6115e081612247565b50565b60606115ee82611b3d565b611643576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f8152602001806132b2602f913960400191505060405180910390fd5b6000600860008481526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116ec5780601f106116c1576101008083540402835291602001916116ec565b820191906000526020600020905b8154815290600101906020018083116116cf57829003601f168201915b5050505050905060006116fd610f04565b90506000815114156117135781925050506118af565b6000825111156117e45780826040516020018083805190602001908083835b602083106117555780518252602082019150602081019050602083039250611732565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106117a65780518252602082019150602081019050602083039250611783565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050506118af565b806117ee85612381565b6040516020018083805190602001908083835b602083106118245780518252602082019150602081019050602083039250611801565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106118755780518252602082019150602081019050602083039250611852565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611950611b5a565b73ffffffffffffffffffffffffffffffffffffffff1661196e6111eb565b73ffffffffffffffffffffffffffffffffffffffff16146119f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611a7d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806131146026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600a60049054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600a60046101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000611b538260026124c890919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611bd583610ecd565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611cbe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611cc781611b3d565b15611d3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611d46600083836124e2565b611d9781600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206124e790919063ffffffff16565b50611dae818360026125019092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6000611e1d82600001612536565b9050919050565b6000611e2f82611b3d565b611e84576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180613184602c913960400191505060405180910390fd5b6000611e8f83610ecd565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611efe57508373ffffffffffffffffffffffffffffffffffffffff16611ee684610af2565b73ffffffffffffffffffffffffffffffffffffffff16145b80611f0f5750611f0e81856118b4565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611f3882610ecd565b73ffffffffffffffffffffffffffffffffffffffff1614611fa4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806132896029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561202a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061313a6024913960400191505060405180910390fd5b6120358383836124e2565b612040600082611b62565b61209181600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061254790919063ffffffff16565b506120e381600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206124e790919063ffffffff16565b506120fa818360026125019092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061216a8360000183612561565b60001c905092915050565b60008060008061218886600001866125e4565b915091508160001c8160001c9350935050509250929050565b60006121b4846000018460001b8461267d565b60001c90509392505050565b60006121ce82600001612773565b9050919050565b6121e0848484611f18565b6121ec84848484612784565b612241576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806130e26032913960400191505060405180910390fd5b50505050565b600061225282610ecd565b9050612260816000846124e2565b61226b600083611b62565b600060086000848152602001908152602001600020805460018160011615610100020316600290049050146122ba576008600083815260200190815260200160002060006122b99190612fe9565b5b61230b82600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061254790919063ffffffff16565b5061232082600261299d90919063ffffffff16565b5081600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b606060008214156123c9576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506124c3565b600082905060005b600082146123f3578080600101915050600a82816123eb57fe5b0491506123d1565b60008167ffffffffffffffff8111801561240c57600080fd5b506040519080825280601f01601f19166020018201604052801561243f5781602001600182028036833780820191505090505b50905060006001830390508593505b600084146124bb57600a848161246057fe5b0660300160f81b8282806001900393508151811061247a57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84816124b357fe5b04935061244e565b819450505050505b919050565b60006124da836000018360001b6129b7565b905092915050565b505050565b60006124f9836000018360001b6129da565b905092915050565b600061252d846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b612a4a565b90509392505050565b600081600001805490509050919050565b6000612559836000018360001b612b26565b905092915050565b6000818360000180549050116125c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806130c06022913960400191505060405180910390fd5b8260000182815481106125d157fe5b9060005260206000200154905092915050565b60008082846000018054905011612646576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061323b6022913960400191505060405180910390fd5b600084600001848154811061265757fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390612744576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156127095780820151818401526020810190506126ee565b50505050905090810190601f1680156127365780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061275757fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b60006127a58473ffffffffffffffffffffffffffffffffffffffff16612c0e565b6127b25760019050612995565b600061291c63150b7a0260e01b6127c7611b5a565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561284b578082015181840152602081019050612830565b50505050905090810190601f1680156128785780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518060600160405280603281526020016130e2603291398773ffffffffffffffffffffffffffffffffffffffff16612c219092919063ffffffff16565b9050600081806020019051602081101561293557600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b60006129af836000018360001b612c39565b905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b60006129e68383612d52565b612a3f578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050612a44565b600090505b92915050565b6000808460010160008581526020019081526020016000205490506000811415612af157846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050612b1f565b82856000016001830381548110612b0457fe5b90600052602060002090600202016001018190555060009150505b9392505050565b60008083600101600084815260200190815260200160002054905060008114612c025760006001820390506000600186600001805490500390506000866000018281548110612b7157fe5b9060005260206000200154905080876000018481548110612b8e57fe5b9060005260206000200181905550600183018760010160008381526020019081526020016000208190555086600001805480612bc657fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050612c08565b60009150505b92915050565b600080823b905060008111915050919050565b6060612c308484600085612d75565b90509392505050565b60008083600101600084815260200190815260200160002054905060008114612d465760006001820390506000600186600001805490500390506000866000018281548110612c8457fe5b9060005260206000209060020201905080876000018481548110612ca457fe5b9060005260206000209060020201600082015481600001556001820154816001015590505060018301876001016000836000015481526020019081526020016000208190555086600001805480612cf757fe5b6001900381819060005260206000209060020201600080820160009055600182016000905550509055866001016000878152602001908152602001600020600090556001945050505050612d4c565b60009150505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b606082471015612dd0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061315e6026913960400191505060405180910390fd5b612dd985612c0e565b612e4b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310612e9a5780518252602082019150602081019050602083039250612e77565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612efc576040519150601f19603f3d011682016040523d82523d6000602084013e612f01565b606091505b5091509150612f11828286612f1d565b92505050949350505050565b60608315612f2d57829050612fe2565b600083511115612f405782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612fa7578082015181840152602081019050612f8c565b50505050905090810190601f168015612fd45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b9392505050565b50805460018160011615610100020316600290046000825580601f1061300f575061302e565b601f01602090049060005260206000209081019061302d9190613031565b5b50565b5b8082111561304a576000816000905550600101613032565b5090565b600061305b601a836130ae565b91507f43616e6e6f74206275726e20756e2d6f776e657220746f6b656e0000000000006000830152602082019050919050565b600060208201905081810360008301526130a78161304e565b9050919050565b60008282526020820190509291505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a264697066735822122005a826cceec50167defa08d4124414ae09e0e857432f6f47bd803d62a924d2c264736f6c63430007060033";

export class NonNative721__factory extends ContractFactory {
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
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NonNative721> {
    return super.deploy(
      _name,
      _symbol,
      overrides || {}
    ) as Promise<NonNative721>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  attach(address: string): NonNative721 {
    return super.attach(address) as NonNative721;
  }
  connect(signer: Signer): NonNative721__factory {
    return super.connect(signer) as NonNative721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NonNative721Interface {
    return new utils.Interface(_abi) as NonNative721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NonNative721 {
    return new Contract(address, _abi, signerOrProvider) as NonNative721;
  }
}
