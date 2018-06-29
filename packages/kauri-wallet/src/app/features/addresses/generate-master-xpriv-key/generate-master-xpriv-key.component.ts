import { Component, OnInit } from '@angular/core';
import * as bip39 from 'bip39';
import * as Bitcore from 'kauri-bitcore-lib';

@Component({
  selector: 'app-generate-master-xpriv-key',
  templateUrl: './generate-master-xpriv-key.component.html',
  styleUrls: ['./generate-master-xpriv-key.component.scss']
})
export class GenerateMasterXPrivKeyComponent implements OnInit {

  seed = '';
  masterkeys = {
    btc: undefined,
    nav: undefined,
  };
  addresses = {
    btc: [],
    nav: [],
  };

  constructor() { }

  ngOnInit() {
  }

  generateSeed() {
    this.seed = bip39.generateMnemonic(256);
    this.createMasterKeys();
  }

  updateSeed(userSeed) {
    this.seed = userSeed;
    this.createMasterKeys();
  }

  createMasterKeys() {
    this.masterkeys.btc = Bitcore.HDPrivateKey.fromSeed(bip39.mnemonicToSeedHex(this.seed), 'BTCmainnet');
    this.masterkeys.nav = Bitcore.HDPrivateKey.fromSeed(bip39.mnemonicToSeedHex(this.seed), 'NAVmainnet');
    this.removeOldAddresss();
    this.generateAddresses();
  }

  removeOldAddresss() {
    this.addresses.btc = [];
    this.addresses.nav = [];
  }

  generateAddresses() {
    // BIP 44 - https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
    // SLIP 44 (coin codes) - https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    for (let i = 0; i < 5; i++) {
      // m / purpose' / coin_type' / account' / change / address_index
      this.addresses.btc.push(this.masterkeys.btc.deriveChild(`m/44'/0'/0'/0/${i}`).privateKey.toAddress('BTCmainnet'));
      this.addresses.nav.push(this.masterkeys.nav.deriveChild(`m/44'/130'/0'/0/${i}`).privateKey.toAddress('NAVmainnet'));
    }
  }
}
