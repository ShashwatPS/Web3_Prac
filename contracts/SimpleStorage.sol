// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.8;

contract SimpleStorage {
    uint256 public num = 56;
    function checknum() public view returns(uint256){
        return num;
    }
}