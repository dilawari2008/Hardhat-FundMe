/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FundMe, FundMeInterface } from "../FundMe";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "priceFeedAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NotOwner",
    type: "error",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "MINIMUM_USD",
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
        name: "",
        type: "address",
      },
    ],
    name: "addressToAmountFunded",
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
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "funders",
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
    name: "i_owner",
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
    name: "priceFeed",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610f9b380380610f9b83398181016040528101906100329190610113565b3373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610140565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100e0826100b5565b9050919050565b6100f0816100d5565b81146100fb57600080fd5b50565b60008151905061010d816100e7565b92915050565b600060208284031215610129576101286100b0565b5b6000610137848285016100fe565b91505092915050565b60805160601c610e36610165600039600081816102e501526105700152610e366000f3fe6080604052600436106100745760003560e01c8063741bef1a1161004e578063741bef1a1461010c578063b60d428814610137578063dba6335f14610141578063dc0d3dff1461016c57610083565b80633ccfd60b1461008d5780633e47d6f3146100a45780636b69a592146100e157610083565b36610083576100816101a9565b005b61008b6101a9565b005b34801561009957600080fd5b506100a26102e3565b005b3480156100b057600080fd5b506100cb60048036038101906100c691906107b7565b610524565b6040516100d891906107fd565b60405180910390f35b3480156100ed57600080fd5b506100f661053c565b60405161010391906107fd565b60405180910390f35b34801561011857600080fd5b50610121610548565b60405161012e9190610877565b60405180910390f35b61013f6101a9565b005b34801561014d57600080fd5b5061015661056e565b60405161016391906108a1565b60405180910390f35b34801561017857600080fd5b50610193600480360381019061018e91906108e8565b610592565b6040516101a091906108a1565b60405180910390f35b671bc16d674ec800006101e7600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16346105d190919063ffffffff16565b1015610228576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021f90610972565b60405180910390fd5b6000339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102da91906109c1565b92505081905550565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610368576040517f30cd747100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b60008054905081101561041457600080828154811061038d5761038c610a17565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505060018161040d91906109c1565b905061036b565b50600067ffffffffffffffff8111156104305761042f610a46565b5b60405190808252806020026020018201604052801561045e5781602001602082028036833780820191505090505b50600090805190602001906104749291906106ad565b5060003373ffffffffffffffffffffffffffffffffffffffff164760405161049b90610aa6565b60006040518083038185875af1925050503d80600081146104d8576040519150601f19603f3d011682016040523d82523d6000602084013e6104dd565b606091505b5050905080610521576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051890610b07565b60405180910390fd5b50565b60016020528060005260406000206000915090505481565b671bc16d674ec8000081565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b600081815481106105a257600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806105dd8361060d565b90506000670de0b6b3a764000085836105f69190610b27565b6106009190610bb0565b9050809250505092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b15801561065657600080fd5b505afa15801561066a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068e9190610c6e565b5050509150506402540be400816106a59190610ce9565b915050919050565b828054828255906000526020600020908101928215610726579160200282015b828111156107255782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906106cd565b5b5090506107339190610737565b5090565b5b80821115610750576000816000905550600101610738565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061078482610759565b9050919050565b61079481610779565b811461079f57600080fd5b50565b6000813590506107b18161078b565b92915050565b6000602082840312156107cd576107cc610754565b5b60006107db848285016107a2565b91505092915050565b6000819050919050565b6107f7816107e4565b82525050565b600060208201905061081260008301846107ee565b92915050565b6000819050919050565b600061083d61083861083384610759565b610818565b610759565b9050919050565b600061084f82610822565b9050919050565b600061086182610844565b9050919050565b61087181610856565b82525050565b600060208201905061088c6000830184610868565b92915050565b61089b81610779565b82525050565b60006020820190506108b66000830184610892565b92915050565b6108c5816107e4565b81146108d057600080fd5b50565b6000813590506108e2816108bc565b92915050565b6000602082840312156108fe576108fd610754565b5b600061090c848285016108d3565b91505092915050565b600082825260208201905092915050565b7f4469646e27742073656e6420656e6f7567680000000000000000000000000000600082015250565b600061095c601283610915565b915061096782610926565b602082019050919050565b6000602082019050818103600083015261098b8161094f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006109cc826107e4565b91506109d7836107e4565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0c57610a0b610992565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600081905092915050565b50565b6000610a90600083610a75565b9150610a9b82610a80565b600082019050919050565b6000610ab182610a83565b9150819050919050565b7f43616c6c206661696c6564000000000000000000000000000000000000000000600082015250565b6000610af1600b83610915565b9150610afc82610abb565b602082019050919050565b60006020820190508181036000830152610b2081610ae4565b9050919050565b6000610b32826107e4565b9150610b3d836107e4565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610b7657610b75610992565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610bbb826107e4565b9150610bc6836107e4565b925082610bd657610bd5610b81565b5b828204905092915050565b600069ffffffffffffffffffff82169050919050565b610c0081610be1565b8114610c0b57600080fd5b50565b600081519050610c1d81610bf7565b92915050565b6000819050919050565b610c3681610c23565b8114610c4157600080fd5b50565b600081519050610c5381610c2d565b92915050565b600081519050610c68816108bc565b92915050565b600080600080600060a08688031215610c8a57610c89610754565b5b6000610c9888828901610c0e565b9550506020610ca988828901610c44565b9450506040610cba88828901610c59565b9350506060610ccb88828901610c59565b9250506080610cdc88828901610c0e565b9150509295509295909350565b6000610cf482610c23565b9150610cff83610c23565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482116000841360008413161615610d3e57610d3d610992565b5b817f80000000000000000000000000000000000000000000000000000000000000000583126000841260008413161615610d7b57610d7a610992565b5b827f80000000000000000000000000000000000000000000000000000000000000000582126000841360008412161615610db857610db7610992565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0582126000841260008412161615610df557610df4610992565b5b82820290509291505056fea2646970667358221220f9eb5dde8065abee3b7283b71dd70735dc9c707f03726df2adcff324021fb8c964736f6c63430008080033";

type FundMeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FundMeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FundMe__factory extends ContractFactory {
  constructor(...args: FundMeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FundMe";
  }

  deploy(
    priceFeedAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FundMe> {
    return super.deploy(priceFeedAddress, overrides || {}) as Promise<FundMe>;
  }
  getDeployTransaction(
    priceFeedAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(priceFeedAddress, overrides || {});
  }
  attach(address: string): FundMe {
    return super.attach(address) as FundMe;
  }
  connect(signer: Signer): FundMe__factory {
    return super.connect(signer) as FundMe__factory;
  }
  static readonly contractName: "FundMe";
  public readonly contractName: "FundMe";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FundMeInterface {
    return new utils.Interface(_abi) as FundMeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): FundMe {
    return new Contract(address, _abi, signerOrProvider) as FundMe;
  }
}
