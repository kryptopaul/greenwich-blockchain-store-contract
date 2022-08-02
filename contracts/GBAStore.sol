// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//List of charities:

import "hardhat/console.sol";

contract MyContract {

    int public x;

    constructor() {
        x = 1;
    }

    function setX(int _x) public {
        x = _x;
    }

}
