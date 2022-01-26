/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Native721, Native721Interface } from "../Native721";

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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002df738038062002df7833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011557600080fd5b838201915060208201858111156200012c57600080fd5b82518660018202830111640100000000821117156200014a57600080fd5b8083526020830192505050908051906020019080838360005b838110156200018057808201518184015260208101905062000163565b50505050905090810190601f168015620001ae5780820380516001836020036101000a031916815260200191505b506040525050508181620001cf6301ffc9a760e01b6200025360201b60201c565b8160069080519060200190620001e79291906200035c565b508060079080519060200190620002009291906200035c565b50620002196380ac58cd60e01b6200025360201b60201c565b62000231635b5e139f60e01b6200025360201b60201c565b6200024963780e9d6360e01b6200025360201b60201c565b5050505062000412565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620002f0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620003945760008555620003e0565b82601f10620003af57805160ff1916838001178555620003e0565b82800160010185558215620003e0579182015b82811115620003df578251825591602001919060010190620003c2565b5b509050620003ef9190620003f3565b5090565b5b808211156200040e576000816000905550600101620003f4565b5090565b6129d580620004226000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806342842e0e116100ad57806395d89b411161007157806395d89b41146105bb578063a22cb4651461063e578063b88d4fde1461068e578063c87b56dd14610793578063e985e9c51461083a57610121565b806342842e0e146103d85780634f6ccce7146104465780636352211e146104885780636c0360eb146104e057806370a082311461056357610121565b80631249c58b116100f45780631249c58b146102b257806318160ddd146102bc57806320e409b4146102da57806323b872dd146103085780632f745c591461037657610121565b806301ffc9a71461012657806306fdde0314610189578063081812fc1461020c578063095ea7b314610264575b600080fd5b6101716004803603602081101561013c57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506108b4565b60405180821515815260200191505060405180910390f35b61019161091b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d15780820151818401526020810190506101b6565b50505050905090810190601f1680156101fe5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102386004803603602081101561022257600080fd5b81019080803590602001909291905050506109bd565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102b06004803603604081101561027a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a58565b005b6102ba610b9c565b005b6102c4610be7565b6040518082815260200191505060405180910390f35b610306600480360360208110156102f057600080fd5b8101908080359060200190929190505050610bf8565b005b6103746004803603606081101561031e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c1c565b005b6103c26004803603604081101561038c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c92565b6040518082815260200191505060405180910390f35b610444600480360360608110156103ee57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ced565b005b6104726004803603602081101561045c57600080fd5b8101908080359060200190929190505050610d0d565b6040518082815260200191505060405180910390f35b6104b46004803603602081101561049e57600080fd5b8101908080359060200190929190505050610d30565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104e8610d67565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561052857808201518184015260208101905061050d565b50505050905090810190601f1680156105555780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105a56004803603602081101561057957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e09565b6040518082815260200191505060405180910390f35b6105c3610ede565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106035780820151818401526020810190506105e8565b50505050905090810190601f1680156106305780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61068c6004803603604081101561065457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610f80565b005b610791600480360360808110156106a457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561070b57600080fd5b82018360208201111561071d57600080fd5b8035906020019184600183028401116401000000008311171561073f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611136565b005b6107bf600480360360208110156107a957600080fd5b81019080803590602001909291905050506111ae565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107ff5780820151818401526020810190506107e4565b50505050905090810190601f16801561082c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61089c6004803603604081101561085057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061147f565b60405180821515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109b35780601f10610988576101008083540402835291602001916109b3565b820191906000526020600020905b81548152906001019060200180831161099657829003601f168201915b5050505050905090565b60006109c882611513565b610a1d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806128ca602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610a6382610d30565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610aea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061294e6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610b09611530565b73ffffffffffffffffffffffffffffffffffffffff161480610b385750610b3781610b32611530565b61147f565b5b610b8d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603881526020018061281d6038913960400191505060405180910390fd5b610b978383611538565b505050565b610be533600a600081819054906101000a900463ffffffff168092919060010191906101000a81548163ffffffff021916908363ffffffff16021790555063ffffffff166115f1565b565b6000610bf360026117e5565b905090565b60005b81811015610c1857610c0b610b9c565b8080600101915050610bfb565b5050565b610c2d610c27611530565b826117fa565b610c82576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603181526020018061296f6031913960400191505060405180910390fd5b610c8d8383836118ee565b505050565b6000610ce582600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611b3190919063ffffffff16565b905092915050565b610d0883838360405180602001604052806000815250611136565b505050565b600080610d24836002611b4b90919063ffffffff16565b50905080915050919050565b6000610d608260405180606001604052806029815260200161287f602991396002611b779092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610dff5780601f10610dd457610100808354040283529160200191610dff565b820191906000526020600020905b815481529060010190602001808311610de257829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e90576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612855602a913960400191505060405180910390fd5b610ed7600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611b96565b9050919050565b606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f765780601f10610f4b57610100808354040283529160200191610f76565b820191906000526020600020905b815481529060010190602001808311610f5957829003601f168201915b5050505050905090565b610f88611530565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611029576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060056000611036611530565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166110e3611530565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b611147611141611530565b836117fa565b61119c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603181526020018061296f6031913960400191505060405180910390fd5b6111a884848484611bab565b50505050565b60606111b982611513565b61120e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f81526020018061291f602f913960400191505060405180910390fd5b6000600860008481526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112b75780601f1061128c576101008083540402835291602001916112b7565b820191906000526020600020905b81548152906001019060200180831161129a57829003601f168201915b5050505050905060006112c8610d67565b90506000815114156112de57819250505061147a565b6000825111156113af5780826040516020018083805190602001908083835b6020831061132057805182526020820191506020810190506020830392506112fd565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b60208310611371578051825260208201915060208101905060208303925061134e565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529250505061147a565b806113b985611c1d565b6040516020018083805190602001908083835b602083106113ef57805182526020820191506020810190506020830392506113cc565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b60208310611440578051825260208201915060208101905060208303925061141d565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000611529826002611d6490919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166115ab83610d30565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611694576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b61169d81611513565b15611710576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b61171c60008383611d7e565b61176d81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d8390919063ffffffff16565b5061178481836002611d9d9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60006117f382600001611dd2565b9050919050565b600061180582611513565b61185a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806127f1602c913960400191505060405180910390fd5b600061186583610d30565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806118d457508373ffffffffffffffffffffffffffffffffffffffff166118bc846109bd565b73ffffffffffffffffffffffffffffffffffffffff16145b806118e557506118e4818561147f565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661190e82610d30565b73ffffffffffffffffffffffffffffffffffffffff161461197a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806128f66029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a00576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806127a76024913960400191505060405180910390fd5b611a0b838383611d7e565b611a16600082611538565b611a6781600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611de390919063ffffffff16565b50611ab981600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d8390919063ffffffff16565b50611ad081836002611d9d9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611b408360000183611dfd565b60001c905092915050565b600080600080611b5e8660000186611e80565b915091508160001c8160001c9350935050509250929050565b6000611b8a846000018460001b84611f19565b60001c90509392505050565b6000611ba48260000161200f565b9050919050565b611bb68484846118ee565b611bc284848484612020565b611c17576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806127756032913960400191505060405180910390fd5b50505050565b60606000821415611c65576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611d5f565b600082905060005b60008214611c8f578080600101915050600a8281611c8757fe5b049150611c6d565b60008167ffffffffffffffff81118015611ca857600080fd5b506040519080825280601f01601f191660200182016040528015611cdb5781602001600182028036833780820191505090505b50905060006001830390508593505b60008414611d5757600a8481611cfc57fe5b0660300160f81b82828060019003935081518110611d1657fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611d4f57fe5b049350611cea565b819450505050505b919050565b6000611d76836000018360001b612239565b905092915050565b505050565b6000611d95836000018360001b61225c565b905092915050565b6000611dc9846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b6122cc565b90509392505050565b600081600001805490509050919050565b6000611df5836000018360001b6123a8565b905092915050565b600081836000018054905011611e5e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806127536022913960400191505060405180910390fd5b826000018281548110611e6d57fe5b9060005260206000200154905092915050565b60008082846000018054905011611ee2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806128a86022913960400191505060405180910390fd5b6000846000018481548110611ef357fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390611fe0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611fa5578082015181840152602081019050611f8a565b50505050905090810190601f168015611fd25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110611ff357fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b60006120418473ffffffffffffffffffffffffffffffffffffffff16612490565b61204e5760019050612231565b60006121b863150b7a0260e01b612063611530565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156120e75780820151818401526020810190506120cc565b50505050905090810190601f1680156121145780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001612775603291398773ffffffffffffffffffffffffffffffffffffffff166124a39092919063ffffffff16565b905060008180602001905160208110156121d157600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b600061226883836124bb565b6122c15782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506122c6565b600090505b92915050565b6000808460010160008581526020019081526020016000205490506000811415612373578460000160405180604001604052808681526020018581525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505084600001805490508560010160008681526020019081526020016000208190555060019150506123a1565b8285600001600183038154811061238657fe5b90600052602060002090600202016001018190555060009150505b9392505050565b6000808360010160008481526020019081526020016000205490506000811461248457600060018203905060006001866000018054905003905060008660000182815481106123f357fe5b906000526020600020015490508087600001848154811061241057fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061244857fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061248a565b60009150505b92915050565b600080823b905060008111915050919050565b60606124b284846000856124de565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606082471015612539576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806127cb6026913960400191505060405180910390fd5b61254285612490565b6125b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b6020831061260357805182526020820191506020810190506020830392506125e0565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612665576040519150601f19603f3d011682016040523d82523d6000602084013e61266a565b606091505b509150915061267a828286612686565b92505050949350505050565b606083156126965782905061274b565b6000835111156126a95782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156127105780820151818401526020810190506126f5565b50505050905090810190601f16801561273d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a26469706673582212208e9c74e296030a4085eb3dab4118e19d756a2c9c2f9b75815e5bca995ebc9e2464736f6c63430007060033";

export class Native721__factory extends ContractFactory {
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
  ): Promise<Native721> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<Native721>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  attach(address: string): Native721 {
    return super.attach(address) as Native721;
  }
  connect(signer: Signer): Native721__factory {
    return super.connect(signer) as Native721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Native721Interface {
    return new utils.Interface(_abi) as Native721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Native721 {
    return new Contract(address, _abi, signerOrProvider) as Native721;
  }
}