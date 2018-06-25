import { TxAddresses, TxModel } from '../txModel';
import { parseRawTransaction } from './raw-transaction-parser';

describe('parseRawTransaction', () => {

const resp = { 'data': [ { 'currency': 'NAV', 'addresses': [ { 'address': 'NW7uXr4ZAeJKigMGnKbSLfCBQY59cH1T8G', 'transactions': [ { 'txid': 'asdf', 'rawtx': ', 'verbose': null }, { 'txid': '000', 'rawtx': '000', 'verbose': { 'anon-destination': ', 'blockhash': 'asdf', 'blocktime': 1463088112, 'confirmations': 2206113, 'hash': '000', 'height': 523, 'hex': '000', 'locktime': 0, 'size': 258, 'time': 1463088112, 'txid': '000', 'version': 1, 'vin': [ { 'scriptSig': { 'asm': '00[ALL] 00', 'hex': '4700012100' }, 'sequence': 4294967295, 'txid': 'asdf', 'vout': 1 } ], 'vout': [ { 'n': 0, 'scriptPubKey': { 'asm': ', 'hex': ', 'type': 'nonstandard' }, 'value': 0, 'valueSat': 0 }, { 'n': 1, 'scriptPubKey': { 'addresses': [ 'NW7uXr4ZAeJKigMGnKbSLfCBQY59cH1T8G' ], 'asm': '00 OP_CHECKSIG', 'hex': '2100ac', 'reqSigs': 1, 'type': 'pubkey' }, 'value': 5000114.48, 'valueSat': 500011448000000 }, { 'n': 2, 'scriptPubKey': { 'addresses': [ 'NW7uXr4ZAeJKigMGnKbSLfCBQY59cH1T8G' ], 'asm': '00 OP_CHECKSIG', 'hex': '2100ac', 'reqSigs': 1, 'type': 'pubkey' }, 'value': 5000114.49616438, 'valueSat': 500011449616438 } ], 'vsize': 258 } } ] }, { 'address': 'NUDke42E3fwLqaBbBFRyVSTETuhWAi7ugk', 'transactions': [ { 'txid': 'adsf', 'rawtx': ', 'verbose': null }, { 'txid': '000', 'rawtx': 'asdf', 'verbose': { 'anon-destination': ', 'blockhash': 'asdf', 'blocktime': 1463088112, 'confirmations': 2206115, 'hash': '000', 'height': 521, 'hex': 'asdf', 'locktime': 0, 'size': 258, 'time': 1463088112, 'txid': '000', 'version': 1, 'vin': [ { 'scriptSig': { 'asm': 'asdf[ALL] 0000', 'hex': '47asdf01210000' }, 'sequence': 4294967295, 'txid': 'adsf', 'vout': 1 } ], 'vout': [ { 'n': 0, 'scriptPubKey': { 'asm': ', 'hex': ', 'type': 'nonstandard' }, 'value': 0, 'valueSat': 0 }, { 'n': 1, 'scriptPubKey': { 'addresses': [ 'NUDke42E3fwLqaBbBFRyVSTETuhWAi7ugk' ], 'asm': '0000 OP_CHECKSIG', 'hex': '210000ac', 'reqSigs': 1, 'type': 'pubkey' }, 'value': 5000115.07, 'valueSat': 500011507000000 }, { 'n': 2, 'scriptPubKey': { 'addresses': [ 'NUDke42E3fwLqaBbBFRyVSTETuhWAi7ugk' ], 'asm': '0000 OP_CHECKSIG', 'hex': '210000ac', 'reqSigs': 1, 'type': 'pubkey' }, 'value': 5000115.07958904, 'valueSat': 500011507958904 } ], 'vsize': 258 } }, { 'txid': 'adf', 'rawtx': ', 'verbose': null }, { 'txid': 'asdf', 'rawtx': ', 'verbose': null } ] } ]; } ] };

  let dataModel: TxModel[];

  beforeEach(() => {

    dataModel = parseRawTransaction(resp);

  });

  describe('currency', () => {

    let currency;

    beforeEach(() => {

      currency = dataModel[0].currency;

    });

    it('data should have currency ', () => {
      expect(dataModel[0].currency).toBeDefined();
    });

    it('currency should be NAV ', () => {
      expect(currency).toEqual('NAV');
    });

  });

  describe('addresses', () => {

    it('should have data', () => {
      expect(dataModel[0].addresses).toBeDefined();
    });

  });

})




