const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("SimpleStorage", () => {
    let simpleStorage, simpleStorageFactory;

    before(async () => {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy();
        await simpleStorage.waitForDeployment();
    });

    it("Checking the value of num variable", async () => {
        const currentValue = await simpleStorage.checknum();
        expect(currentValue).to.equal(56);
    });

    it("Changing the value of num variable and then checking", async()=>{
        const val = 90;
        const transaction = await simpleStorage.changeValue(val);
        await transaction.wait();
        const currentValue = await simpleStorage.checknum();
        expect(currentValue).to.equal(90)
    })
});
