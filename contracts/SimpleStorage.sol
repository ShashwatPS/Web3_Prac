// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.8;

contract SimpleStorage {
    uint256 public num = 56;

    function changeValue(uint256 _val) public {
        num = _val;
    }

    function checknum() public view returns(uint256){
        return num;
    }
}