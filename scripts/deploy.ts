import { ethers } from "hardhat";

const percentage = 15;

async function main() {

  const GBAStore = await ethers.getContractFactory("GBAStore");
  const gbaStore = await GBAStore.deploy(percentage);

  await gbaStore.deployed();

  console.log("MyContract deployed to:", gbaStore.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
