const Bitcore = require('kauri-bitcore-lib')
const bip39 = require('bip39');

const seed = "buffalo attract habit cement moral high soul dentist prevent juice because vivid"
console.log('seed -->', seed)

// Bitcore
const BTCxprivkey = Bitcore.HDPrivateKey.fromSeed(bip39.mnemonicToSeedHex(seed), 'BTCmainnet')
const NAVxprivkey = Bitcore.HDPrivateKey.fromSeed(bip39.mnemonicToSeedHex(seed), 'NAVmainnet')
const BTCaddress = BTCxprivkey.deriveChild("m/0'/0'/0'").privateKey.toAddress('BTCmainnet');
const NAVAddress = BTCxprivkey.deriveChild("m/0'/0'/0'").privateKey.toAddress('NAVmainnet');
const NAVAddress2 = NAVxprivkey.deriveChild("m/0'/0'/0'").privateKey.toAddress('NAVmainnet');

console.log('*** From bitcore ***')
console.log('BTCmasterPK -->', BTCxprivkey.toString())
console.log('NAVxprivkey -->', NAVxprivkey.toString())
console.log('btc address -->', BTCaddress.toString())
console.log('nav address -->', NAVAddress.toString())
console.log('na2 address -->', NAVAddress2.toString())
