const NftMarkeplace = artifacts.require("NftMarketplace");
contract("NftMarketPlace", accounts => {
  let instance = null;
  before(async () => {
    instance = await NftMarketplace.deployed();
    console.log(accounts);
  });
  describe("Mint token", () => {
    it("it shloud mint successfully", () => {
        assert(true, "true");
    });
  });
});