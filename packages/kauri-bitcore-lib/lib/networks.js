const networks = require('./networks-bitcore');

networks.add({
  name: 'NAVlivenet',
  alias: 'NAVmainnet',
  pubkeyhash: 0x35,
  privatekey: 0x96,
  scripthash: 0x55,
  xpubkey: 0x0488B21E,
  xprivkey: 0x0488ADE4,
  networkMagic: 0xdb4775248b80fb57,
  port: 44444,
  dnsSeeds: [
    'supernode.navcoin.org'
  ]
});

networks.add({
  name: 'BTClivenet',
  alias: 'BTCmainnet',
  pubkeyhash: 0x00,
  privatekey: 0x80,
  scripthash: 0x05,
  xpubkey: 0x0488b21e,
  xprivkey: 0x0488ade4,
  networkMagic: 0xf9beb4d9,
  port: 8333,
  dnsSeeds: [
    'seed.bitcoin.sipa.be',
    'dnsseed.bluematt.me',
    'dnsseed.bitcoin.dashjr.org',
    'seed.bitcoinstats.com',
    'seed.bitnodes.io',
    'bitseed.xf2.org'
  ]
});

/**
 * @instance
 * @member Networks#livenet
 */
var BTClivenet = networks.get('BTClivenet');

/**
 * @instance
 * @member Networks#livenet
 */
var NAVlivenet = networks.get('NAVlivenet');

module.exports = {
  ...networks,
  NAVlivenet: NAVlivenet,
  BTClivenet: BTClivenet,
}
