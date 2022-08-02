import { ethers } from "hardhat";



async function main () {
    const contractAddress = '0x8Ff01fD0b374d161513B6e4C51af81720d2D4634'
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.attach(contractAddress);

    const xValue = await myContract.x();
    console.log(xValue.toString());

    await myContract.setX(10);
    const xValue2 = await myContract.x();
    console.log(xValue2.toString());
  }
  
main()
    .then(() => process.exit(0))
    .catch(error => {
    console.error(error);
    process.exit(1);
});