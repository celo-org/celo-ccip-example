import { ethers } from "hardhat";

const router = "0xb00E95b773528E2Ea724DB06B75113F239D15Dca";

async function main() {
  console.log("Deploying contracts to Sender Contract to Alfajores...");

  const SenderContract = await ethers.getContractFactory("Sender");
  const senderContract = await SenderContract.deploy(router);
  await senderContract.deployed();
  console.log("Sender Contract deployed to:", senderContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
