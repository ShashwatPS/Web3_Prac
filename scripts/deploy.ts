import ethers from "hardhat";

async function main() {
    try {
        const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        console.log("Deploying Contract ...");
        const simpleStorage = await SimpleStorageFactory.deploy();
        await simpleStorage.waitForDeployment();
        const address = await simpleStorage.getAddress();
        console.log(`Deployed Contract to: ${address}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

main().then(() => process.exit(0));
