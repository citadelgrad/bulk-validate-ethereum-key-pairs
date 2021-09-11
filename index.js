const Wallet = require("ethereumjs-wallet").default;
var EthUtil = require("ethereumjs-util");
var assert = require("assert");

var keyPairs = require("./private-keys-to-test.json");

keyPairs.forEach(function (item) {
  let wallet;
  const privateKeyString = item.private;
  const privateKeyBuffer = EthUtil.toBuffer(privateKeyString);

  try {
    wallet = Wallet.fromPrivateKey(privateKeyBuffer);
  } catch (error) {
    console.error(`Private key validation has failed: ${item.address}`);
  }

  try {
    assert(item.address === wallet.getAddressString());
    console.info(
      "Valid private key for public address: ",
      wallet.getAddressString()
    );
  } catch (error) {
    console.error(`Unable to validate: ${item.address}`);
  }
});
