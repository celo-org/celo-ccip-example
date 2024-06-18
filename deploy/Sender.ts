import { DeployFunction } from "hardhat-deploy/dist/types";

const router = "";
const link = "";

const func: DeployFunction = async ({
  getNamedAccounts,
  deployments,
  ethers,
  network,
  run,
}) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const senderDeploymentResults = await deploy("Sender", {
    from: deployer,
    log: true,
    args: [router, link],
  });

  try {
    await run("verify:verify", {
      address: senderDeploymentResults.address,
      constructorArguments: [router, link],
    });
  } catch (error: any) {
    if (
      !error.message.includes("Contract source code already verified") &&
      !error.message.includes("Reason: Already Verified")
    ) {
      throw error;
    }
  }
};
