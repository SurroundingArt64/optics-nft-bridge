/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UntraceableToken,
  UntraceableTokenInterface,
} from "../UntraceableToken";

const _abi = [
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "stableCoin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "proof",
        type: "bytes",
      },
    ],
    name: "addSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        internalType: "address",
        name: "account",
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
    name: "decimals",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    name: "initialize",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
  "0x608060405234801561001057600080fd5b50612652806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d71461029d578063a9059cbb146102cd578063dd62ed3e146102fd578063f2fde38b1461032d57610100565b8063715018a61461023b578063842b710e146102455780638da5cb5b1461026157806395d89b411461027f57610100565b8063313ce567116100d3578063313ce567146101a157806339509351146101bf5780634cd88b76146101ef57806370a082311461020b57610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d610349565b60405161011a9190611cf1565b60405180910390f35b61013d60048036038101906101389190611822565b6103db565b60405161014a9190611cb2565b60405180910390f35b61015b6103f9565b6040516101689190611ef3565b60405180910390f35b61018b600480360381019061018691906117d3565b610403565b6040516101989190611cb2565b60405180910390f35b6101a96104fb565b6040516101b69190611f0e565b60405180910390f35b6101d960048036038101906101d49190611822565b610504565b6040516101e69190611cb2565b60405180910390f35b610209600480360381019061020491906118f3565b6105b0565b005b61022560048036038101906102209190611745565b6106a0565b6040516102329190611ef3565b60405180910390f35b610243610701565b005b61025f600480360381019061025a919061185e565b610789565b005b610269610b4c565b6040516102769190611c37565b60405180910390f35b610287610b76565b6040516102949190611cf1565b60405180910390f35b6102b760048036038101906102b29190611822565b610c08565b6040516102c49190611cb2565b60405180910390f35b6102e760048036038101906102e29190611822565b610cf3565b6040516102f49190611cb2565b60405180910390f35b61031760048036038101906103129190611797565b610d11565b6040516103249190611ef3565b60405180910390f35b61034760048036038101906103429190611745565b610dc0565b005b606060688054610358906120f3565b80601f0160208091040260200160405190810160405280929190818152602001828054610384906120f3565b80156103d15780601f106103a6576101008083540402835291602001916103d1565b820191906000526020600020905b8154815290600101906020018083116103b457829003601f168201915b5050505050905090565b60006103ef6103e8610eb8565b8484610ec0565b6001905092915050565b6000606754905090565b6000610410848484611026565b6000606660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061045b610eb8565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156104db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d290611db3565b60405180910390fd5b6104ef856104e7610eb8565b858403610ec0565b60019150509392505050565b60006012905090565b60006105a6610511610eb8565b84846066600061051f610eb8565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105a19190611fac565b610ec0565b6001905092915050565b600060019054906101000a900460ff166105d85760008054906101000a900460ff16156105e1565b6105e0611245565b5b610620576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061790611d93565b60405180910390fd5b60008060019054906101000a900460ff161590508015610670576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61067a8383611256565b801561069b5760008060016101000a81548160ff0219169083151502179055505b505050565b60006106ab826112b3565b156106f757606560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506106fc565b600090505b919050565b610709610eb8565b73ffffffffffffffffffffffffffffffffffffffff16610727610b4c565b73ffffffffffffffffffffffffffffffffffffffff161461077d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077490611dd3565b60405180910390fd5b6107876000611328565b565b6000609860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638e760afe84846040518363ffffffff1660e01b81526004016107e8929190611ccd565b602060405180830381600087803b15801561080257600080fd5b505af1158015610816573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083a919061176e565b905060011515609960008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146108cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c690611e93565b60405180910390fd5b6000859050848173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e6108f9610eb8565b306040518363ffffffff1660e01b8152600401610917929190611c52565b60206040518083038186803b15801561092f57600080fd5b505afa158015610943573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610967919061195f565b10156109a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099f90611df3565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166323b872dd6109cc610eb8565b30886040518463ffffffff1660e01b81526004016109ec93929190611c7b565b602060405180830381600087803b158015610a0657600080fd5b505af1158015610a1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3e91906118ca565b610a7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7490611e33565b60405180910390fd5b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e6a4390530896040518363ffffffff1660e01b8152600401610adc929190611c52565b60206040518083038186803b158015610af457600080fd5b505afa158015610b08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2c919061195f565b9050610b43838288610b3e9190612002565b6113ee565b50505050505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060698054610b85906120f3565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb1906120f3565b8015610bfe5780601f10610bd357610100808354040283529160200191610bfe565b820191906000526020600020905b815481529060010190602001808311610be157829003601f168201915b5050505050905090565b60008060666000610c17610eb8565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610cd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ccb90611eb3565b60405180910390fd5b610ce8610cdf610eb8565b85858403610ec0565b600191505092915050565b6000610d07610d00610eb8565b8484611026565b6001905092915050565b6000610d1c836112b3565b80610d2c5750610d2b826112b3565b5b15610db557606660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050610dba565b600090505b92915050565b610dc8610eb8565b73ffffffffffffffffffffffffffffffffffffffff16610de6610b4c565b73ffffffffffffffffffffffffffffffffffffffff1614610e3c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3390611dd3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610eac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ea390611d33565b60405180910390fd5b610eb581611328565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2790611e53565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fa0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9790611d53565b60405180910390fd5b80606660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611096576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108d90611e13565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611106576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110fd90611d13565b60405180910390fd5b6111118383836114e9565b6000606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611198576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118f90611d73565b60405180910390fd5b818103606560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461122d9190611fac565b9250508190555061123f8484846114ee565b50505050565b6000611250306114f3565b15905090565b600060019054906101000a900460ff166112a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129c90611e73565b60405180910390fd5b6112af8282611506565b5050565b60003373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16148061132157503373ffffffffffffffffffffffffffffffffffffffff16611309610b4c565b73ffffffffffffffffffffffffffffffffffffffff16145b9050919050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561145e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145590611ed3565b60405180910390fd5b61146a600083836114e9565b806067600082825461147c9190611fac565b9250508190555080606560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114d29190611fac565b925050819055506114e5600083836114ee565b5050565b505050565b505050565b600080823b905060008111915050919050565b600060019054906101000a900460ff16611555576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154c90611e73565b60405180910390fd5b816068908051906020019061156b929190611587565b508060699080519060200190611582929190611587565b505050565b828054611593906120f3565b90600052602060002090601f0160209004810192826115b557600085556115fc565b82601f106115ce57805160ff19168380011785556115fc565b828001600101855582156115fc579182015b828111156115fb5782518255916020019190600101906115e0565b5b509050611609919061160d565b5090565b5b8082111561162657600081600090555060010161160e565b5090565b600061163d61163884611f4e565b611f29565b90508281526020810184848401111561165557600080fd5b6116608482856120b1565b509392505050565b600081359050611677816125d7565b92915050565b60008151905061168c816125d7565b92915050565b6000815190506116a1816125ee565b92915050565b60008083601f8401126116b957600080fd5b8235905067ffffffffffffffff8111156116d257600080fd5b6020830191508360018202830111156116ea57600080fd5b9250929050565b600082601f83011261170257600080fd5b813561171284826020860161162a565b91505092915050565b60008135905061172a81612605565b92915050565b60008151905061173f81612605565b92915050565b60006020828403121561175757600080fd5b600061176584828501611668565b91505092915050565b60006020828403121561178057600080fd5b600061178e8482850161167d565b91505092915050565b600080604083850312156117aa57600080fd5b60006117b885828601611668565b92505060206117c985828601611668565b9150509250929050565b6000806000606084860312156117e857600080fd5b60006117f686828701611668565b935050602061180786828701611668565b92505060406118188682870161171b565b9150509250925092565b6000806040838503121561183557600080fd5b600061184385828601611668565b92505060206118548582860161171b565b9150509250929050565b6000806000806060858703121561187457600080fd5b600061188287828801611668565b94505060206118938782880161171b565b935050604085013567ffffffffffffffff8111156118b057600080fd5b6118bc878288016116a7565b925092505092959194509250565b6000602082840312156118dc57600080fd5b60006118ea84828501611692565b91505092915050565b6000806040838503121561190657600080fd5b600083013567ffffffffffffffff81111561192057600080fd5b61192c858286016116f1565b925050602083013567ffffffffffffffff81111561194957600080fd5b611955858286016116f1565b9150509250929050565b60006020828403121561197157600080fd5b600061197f84828501611730565b91505092915050565b6119918161205c565b82525050565b6119a08161206e565b82525050565b60006119b28385611f8a565b93506119bf8385846120b1565b6119c8836121e3565b840190509392505050565b60006119de82611f7f565b6119e88185611f9b565b93506119f88185602086016120c0565b611a01816121e3565b840191505092915050565b6000611a19602383611f9b565b9150611a24826121f4565b604082019050919050565b6000611a3c602683611f9b565b9150611a4782612243565b604082019050919050565b6000611a5f602283611f9b565b9150611a6a82612292565b604082019050919050565b6000611a82602683611f9b565b9150611a8d826122e1565b604082019050919050565b6000611aa5602e83611f9b565b9150611ab082612330565b604082019050919050565b6000611ac8602883611f9b565b9150611ad38261237f565b604082019050919050565b6000611aeb602083611f9b565b9150611af6826123ce565b602082019050919050565b6000611b0e601783611f9b565b9150611b19826123f7565b602082019050919050565b6000611b31602583611f9b565b9150611b3c82612420565b604082019050919050565b6000611b54601083611f9b565b9150611b5f8261246f565b602082019050919050565b6000611b77602483611f9b565b9150611b8282612498565b604082019050919050565b6000611b9a602b83611f9b565b9150611ba5826124e7565b604082019050919050565b6000611bbd601d83611f9b565b9150611bc882612536565b602082019050919050565b6000611be0602583611f9b565b9150611beb8261255f565b604082019050919050565b6000611c03601f83611f9b565b9150611c0e826125ae565b602082019050919050565b611c228161209a565b82525050565b611c31816120a4565b82525050565b6000602082019050611c4c6000830184611988565b92915050565b6000604082019050611c676000830185611988565b611c746020830184611988565b9392505050565b6000606082019050611c906000830186611988565b611c9d6020830185611988565b611caa6040830184611c19565b949350505050565b6000602082019050611cc76000830184611997565b92915050565b60006020820190508181036000830152611ce88184866119a6565b90509392505050565b60006020820190508181036000830152611d0b81846119d3565b905092915050565b60006020820190508181036000830152611d2c81611a0c565b9050919050565b60006020820190508181036000830152611d4c81611a2f565b9050919050565b60006020820190508181036000830152611d6c81611a52565b9050919050565b60006020820190508181036000830152611d8c81611a75565b9050919050565b60006020820190508181036000830152611dac81611a98565b9050919050565b60006020820190508181036000830152611dcc81611abb565b9050919050565b60006020820190508181036000830152611dec81611ade565b9050919050565b60006020820190508181036000830152611e0c81611b01565b9050919050565b60006020820190508181036000830152611e2c81611b24565b9050919050565b60006020820190508181036000830152611e4c81611b47565b9050919050565b60006020820190508181036000830152611e6c81611b6a565b9050919050565b60006020820190508181036000830152611e8c81611b8d565b9050919050565b60006020820190508181036000830152611eac81611bb0565b9050919050565b60006020820190508181036000830152611ecc81611bd3565b9050919050565b60006020820190508181036000830152611eec81611bf6565b9050919050565b6000602082019050611f086000830184611c19565b92915050565b6000602082019050611f236000830184611c28565b92915050565b6000611f33611f44565b9050611f3f8282612125565b919050565b6000604051905090565b600067ffffffffffffffff821115611f6957611f686121b4565b5b611f72826121e3565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611fb78261209a565b9150611fc28361209a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611ff757611ff6612156565b5b828201905092915050565b600061200d8261209a565b91506120188361209a565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561205157612050612156565b5b828202905092915050565b60006120678261207a565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b838110156120de5780820151818401526020810190506120c3565b838111156120ed576000848401525b50505050565b6000600282049050600182168061210b57607f821691505b6020821081141561211f5761211e612185565b5b50919050565b61212e826121e3565b810181811067ffffffffffffffff8211171561214d5761214c6121b4565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f496e73756666696369656e7420616c6c6f77616e63652e000000000000000000600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f5472616e73666572206661696c65642e00000000000000000000000000000000600082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b7f43616e6e6f74206265207573656420746f2061646420737570706c792e000000600082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6125e08161205c565b81146125eb57600080fd5b50565b6125f78161206e565b811461260257600080fd5b50565b61260e8161209a565b811461261957600080fd5b5056fea264697066735822122080f9e4f5348a874849e97314a508027f11499567bfebc9623caa5ec2e7eca06a64736f6c63430008040033";

export class UntraceableToken__factory extends ContractFactory {
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
  ): Promise<UntraceableToken> {
    return super.deploy(overrides || {}) as Promise<UntraceableToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UntraceableToken {
    return super.attach(address) as UntraceableToken;
  }
  connect(signer: Signer): UntraceableToken__factory {
    return super.connect(signer) as UntraceableToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UntraceableTokenInterface {
    return new utils.Interface(_abi) as UntraceableTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UntraceableToken {
    return new Contract(address, _abi, signerOrProvider) as UntraceableToken;
  }
}