const CryptoCoders = artifacts.require("./SimpleStorage.sol");

contract("CryptoCoders", accounts => {
  it("...get deployed", async () => {
    const contract = await CryptoCoders.deployed();

    console.log("______________contract______________");
    console.log(contract);
    console.log("______________contract______________");
  });
});
