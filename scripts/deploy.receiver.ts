import { ethers } from "hardhat";

const router = "0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59";

async function main() {
  console.log("Deploying contracts to Receiver Contract to Sepolia...");

  const ReceiverContract = await ethers.getContractFactory("Receiver");
  const receiverContract = await ReceiverContract.deploy(router);
  await receiverContract.deployed();
  console.log("Receiver Contract deployed to:", receiverContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
