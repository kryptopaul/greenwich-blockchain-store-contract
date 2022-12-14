import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const privKey:string = process.env.C33_PRIVATE_KEY ?? "";
const apiKey:string = process.env.API_KEY ?? "";

const config: HardhatUserConfig = {
  solidity: "0.8.15",
  defaultNetwork: 'ganache',
  networks: {
    ganache: {
      url: "http://localhost:8545",
      chainId: 1337,
      from: '0xA960463cED7F98F8593b5e289E2C48D2154710DF',
      accounts: 'remote'
    },
    maticMumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/Us5Q5NYXkHhKPrpit0cJ2yaf4lKjwV4i",
      chainId: 80001,
      from: '0x10A8Fc644A4135EF9f11A56b05Ab7c5eA7888c33',
      accounts: [privKey]
    },
    goerli : {
      url: 'https://eth-goerli.g.alchemy.com/v2/qOMxCXzbW142c1SwUvqfzgxiBZBYrzCD',
      chainId: 5,
      from: '0x10A8Fc644A4135EF9f11A56b05Ab7c5eA7888c33',
      accounts: [privKey]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: apiKey
  }
};


export default config;
