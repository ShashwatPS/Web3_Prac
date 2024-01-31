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
});
