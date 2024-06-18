import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-solhint";
import "@typechain/ethers-v5";
import "@typechain/hardhat";
import dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      chainId: 44787,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      chainId: 11155111,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
  sourcify: {
    enabled: true,
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API ?? "",
      alfajores: process.env.CELOSCAN_API ?? "",
    },
    customChains: [
      {
        network: "celo",
        chainId: 42220,
        urls: {
          apiURL: "https://api.celoscan.io/api",
          browserURL: "https://celoscan.io/",
        },
      },
      {
        network: "alfajores",
        chainId: 44787,
        urls: {
          apiURL: "https://api-alfajores.celoscan.io/api",
          browserURL: "https://alfajores.celoscan.io/",
        },
      },
    ],
  },
};

export default config;
