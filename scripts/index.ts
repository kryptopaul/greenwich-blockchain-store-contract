import { ethers } from "hardhat";



async function main () {
    const contractAddress = '0xec9deb5812b583c54c473f7097a81bb755759e4c'
    const GBAStore = await ethers.getContractFactory("GBAStore");
    const gbaStore = await GBAStore.attach(contractAddress);

    console.log("The contract is running at: " + gbaStore.address);
    console.log("Submitting a Purchase request...")
    await gbaStore.purchase({value: ethers.utils.parseEther('0.69')});

    const itemsSold = await gbaStore.itemsSold();
    const totalDonated = await ethers.utils.formatUnits(await gbaStore.totalDonated(), "ether");

    console.log(`Success! We've sold ${itemsSold} items and donated ${totalDonated} MATIC!`);
  }
  
main()
    .then(() => process.exit(0))
    .catch(error => {
    console.error(error);
    process.exit(1);
});