// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//List of charities:

import "hardhat/console.sol";

contract GBAStore {

    uint public totalDonated;
    uint public itemsSold;

    //temporary!
    address public charityAddress;

    constructor() {
        totalDonated = 0;
        itemsSold = 0;
        charityAddress = 0x071c3C0D9c9f19214c5b48F36f488a23BAb3d000;
    }

    function purchase() public payable {
        payable(charityAddress).transfer(msg.value);
        totalDonated += msg.value;
        itemsSold += 1;
    }

}
