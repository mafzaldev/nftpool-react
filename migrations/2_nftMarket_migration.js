const NftMarketplace = artifacts.require("NftMarketplace");

module.exports = function (deployer) {
  deployer.deploy(NftMarketplace);
};
