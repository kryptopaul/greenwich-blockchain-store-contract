import { ethers } from "hardhat";

async function main() {

  const GBAStore = await ethers.getContractFactory("GBAStore");
  const gbaStore = await GBAStore.deploy();

  await gbaStore.deployed();

  console.log("MyContract deployed to:", gbaStore.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
