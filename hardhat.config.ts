import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork: 'ganache',
  networks: {
    ganache: {
      url: "http://localhost:8545",
      chainId: 1337,
      from: '0xA960463cED7F98F8593b5e289E2C48D2154710DF',
      accounts: 'remote'
    }
  }
};

export default config;
