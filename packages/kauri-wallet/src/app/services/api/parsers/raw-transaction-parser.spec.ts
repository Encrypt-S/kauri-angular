import { TxAddresses, TxModel } from '../txModel';
import { parseRawTransaction } from './raw-transaction-parser';

describe('parseRawTransaction', () => {

  const resp = { "data": [ { "currency": "NAV", "addresses": [ { "address": "NW7uXr4ZAeJKigMGnKbSLfCBQY59cH1T8G", "transactions": [ { "txid": "11a7071a43a8da2b9ac116865a6cd92c985c3f7cbde63933d253f88dffaa311a", "rawtx": "", "verbose": null }, { "txid": "c8dad515d5e5c7a45bc5b3814fcf5e1f63474c9b67f84ee2ab9803f809e94929", "rawtx": "01000000f0f33457011a31aaff8df853d23339e6bd7c3f5c982cd96c5a8616c19a2bdaa8431a07a711010000006a47304402202fbb2c5955013fc4806420a66e5c9116902c0263fe7920ae104ff1818ef62efd022040857e3108ae8f30e8a0800f8f892c8a97aa88b67b8e40032e2ba33d3445230e012103f6c3b8154a19327783dd46e0dda13f812f57b00f9246387f62d5ece8bed767b4ffffffff0300000000000000000000debdfcc1c60100232103f6c3b8154a19327783dd46e0dda13f812f57b00f9246387f62d5ece8bed767b4ac3688d6fcc1c60100232103f6c3b8154a19327783dd46e0dda13f812f57b00f9246387f62d5ece8bed767b4ac00000000", "verbose": { "anon-destination": "", "blockhash": "52260690630225abb5b9bd1f9b72774ced5f9b74e18ac2ab7dd5b76d229fbfdd", "blocktime": 1463088112, "confirmations": 2206113, "hash": "c8dad515d5e5c7a45bc5b3814fcf5e1f63474c9b67f84ee2ab9803f809e94929", "height": 523, "hex": "01000000f0f33457011a31aaff8df853d23339e6bd7c3f5c982cd96c5a8616c19a2bdaa8431a07a711010000006a47304402202fbb2c5955013fc4806420a66e5c9116902c0263fe7920ae104ff1818ef62efd022040857e3108ae8f30e8a0800f8f892c8a97aa88b67b8e40032e2ba33d3445230e012103f6c3b8154a19327783dd46e0dda13f812f57b00f9246387f62d5ece8bed767b4ffffffff0300000000000000000000debdfcc1c60100232103f6c3b8154a19327783dd46e0dda13f812f57b00f9246387f62d5ece8bed767b4ac3688d6fcc1c60100232103f6c3b8154a19327783dd46e0dda13f812f57b00f9246387f62d5ece8bed767b4ac00000000", "locktime": 0, "size": 258, "time": 1463088112, "txid": "c8dad515d5e5c7a45bc5b3814fcf5e1f63474c9b67f84ee2ab9803f809e94929", "version": 1, "vin": [ { "scriptSig": { "asm": "304402202fbb2c5955013fc4806420a66e5c9116902c0263fe7920ae104ff1818ef62efd022040857e3108ae8f30e8a0800f8f892c8a97aa88b67b8e40032e2ba33d3445230e[ALL] 03f6c3b8154a19327783dd46e0dda13f812f57b00f9246387f62d5ece8bed767b4", "hex": "47304402202fbb2c5955013fc4806420a66e5c9116902c0263fe7920ae104ff1818ef62efd022040857e3108ae8f30e8a0800f8f892c8a97aa88b67b8e40032e2ba33d3445230e012103f6c3b8154a19327783dd46e0dda13f812f57b00f9246387f62d5ece8bed767b4" }, "sequence": 4294967295, "txid": "11a7071a43a8da2b9ac116865a6cd92c985c3f7cbde63933d253f88dffaa311a", "vout": 1 } ], "vout": [ { "n": 0, "scriptPubKey": { "asm": "", "hex": "", "type": "nonstandard" }, "value": 0, "valueSat": 0 }, { "n": 1, "scriptPubKey": { "addresses": [ "NW7uXr4ZAeJKigMGnKbSLfCBQY59cH1T8G" ], "asm": "03f6c3b8154a19327783dd46e0dda13f812f57b00f9246387f62d5ece8bed767b4 OP_CHECKSIG", "hex": "2103f6c3b8154a19327783dd46e0dda13f812f57b00f9246387f62d5ece8bed767b4ac", "reqSigs": 1, "type": "pubkey" }, "value": 5000114.48, "valueSat": 500011448000000 }, { "n": 2, "scriptPubKey": { "addresses": [ "NW7uXr4ZAeJKigMGnKbSLfCBQY59cH1T8G" ], "asm": "03f6c3b8154a19327783dd46e0dda13f812f57b00f9246387f62d5ece8bed767b4 OP_CHECKSIG", "hex": "2103f6c3b8154a19327783dd46e0dda13f812f57b00f9246387f62d5ece8bed767b4ac", "reqSigs": 1, "type": "pubkey" }, "value": 5000114.49616438, "valueSat": 500011449616438 } ], "vsize": 258 } } ] }, { "address": "NUDke42E3fwLqaBbBFRyVSTETuhWAi7ugk", "transactions": [ { "txid": "c6b6063a0512ed40958bff62a48168b4b30f89cb6bce22b722f8a6d00fcb9d98", "rawtx": "", "verbose": null }, { "txid": "08f87e9de0fd9be71bc91f42d45c48bb9494df5d5df47df7354eec0adbf35731", "rawtx": "01000000f0f3345701989dcb0fd0a6f822b722ce6bcb890fb3b46881a462ff8b9540ed12053a06b6c6010000006a47304402201e6ba4989dd78ee28d826d6d498ccf0cd3f3c855cfac147cdf3d327785bc023902204c0a20f0c7e16aa123f29b26d96067a59bff18404eb03b92b5ad73f8c8131fe20121026a444bf7ca73ae77d1ec959e5e29ffd56cc7b3dd84bb0d250abc37c83ae7b800ffffffff03000000000000000000c0224200c2c601002321026a444bf7ca73ae77d1ec959e5e29ffd56cc7b3dd84bb0d250abc37c83ae7b800ac78c45000c2c601002321026a444bf7ca73ae77d1ec959e5e29ffd56cc7b3dd84bb0d250abc37c83ae7b800ac00000000", "verbose": { "anon-destination": "", "blockhash": "9510cb8d8335f81991f62b104d828a745a4d34984137a6254f99c95b22309bb7", "blocktime": 1463088112, "confirmations": 2206115, "hash": "08f87e9de0fd9be71bc91f42d45c48bb9494df5d5df47df7354eec0adbf35731", "height": 521, "hex": "01000000f0f3345701989dcb0fd0a6f822b722ce6bcb890fb3b46881a462ff8b9540ed12053a06b6c6010000006a47304402201e6ba4989dd78ee28d826d6d498ccf0cd3f3c855cfac147cdf3d327785bc023902204c0a20f0c7e16aa123f29b26d96067a59bff18404eb03b92b5ad73f8c8131fe20121026a444bf7ca73ae77d1ec959e5e29ffd56cc7b3dd84bb0d250abc37c83ae7b800ffffffff03000000000000000000c0224200c2c601002321026a444bf7ca73ae77d1ec959e5e29ffd56cc7b3dd84bb0d250abc37c83ae7b800ac78c45000c2c601002321026a444bf7ca73ae77d1ec959e5e29ffd56cc7b3dd84bb0d250abc37c83ae7b800ac00000000", "locktime": 0, "size": 258, "time": 1463088112, "txid": "08f87e9de0fd9be71bc91f42d45c48bb9494df5d5df47df7354eec0adbf35731", "version": 1, "vin": [ { "scriptSig": { "asm": "304402201e6ba4989dd78ee28d826d6d498ccf0cd3f3c855cfac147cdf3d327785bc023902204c0a20f0c7e16aa123f29b26d96067a59bff18404eb03b92b5ad73f8c8131fe2[ALL] 026a444bf7ca73ae77d1ec959e5e29ffd56cc7b3dd84bb0d250abc37c83ae7b800", "hex": "47304402201e6ba4989dd78ee28d826d6d498ccf0cd3f3c855cfac147cdf3d327785bc023902204c0a20f0c7e16aa123f29b26d96067a59bff18404eb03b92b5ad73f8c8131fe20121026a444bf7ca73ae77d1ec959e5e29ffd56cc7b3dd84bb0d250abc37c83ae7b800" }, "sequence": 4294967295, "txid": "c6b6063a0512ed40958bff62a48168b4b30f89cb6bce22b722f8a6d00fcb9d98", "vout": 1 } ], "vout": [ { "n": 0, "scriptPubKey": { "asm": "", "hex": "", "type": "nonstandard" }, "value": 0, "valueSat": 0 }, { "n": 1, "scriptPubKey": { "addresses": [ "NUDke42E3fwLqaBbBFRyVSTETuhWAi7ugk" ], "asm": "026a444bf7ca73ae77d1ec959e5e29ffd56cc7b3dd84bb0d250abc37c83ae7b800 OP_CHECKSIG", "hex": "21026a444bf7ca73ae77d1ec959e5e29ffd56cc7b3dd84bb0d250abc37c83ae7b800ac", "reqSigs": 1, "type": "pubkey" }, "value": 5000115.07, "valueSat": 500011507000000 }, { "n": 2, "scriptPubKey": { "addresses": [ "NUDke42E3fwLqaBbBFRyVSTETuhWAi7ugk" ], "asm": "026a444bf7ca73ae77d1ec959e5e29ffd56cc7b3dd84bb0d250abc37c83ae7b800 OP_CHECKSIG", "hex": "21026a444bf7ca73ae77d1ec959e5e29ffd56cc7b3dd84bb0d250abc37c83ae7b800ac", "reqSigs": 1, "type": "pubkey" }, "value": 5000115.07958904, "valueSat": 500011507958904 } ], "vsize": 258 } }, { "txid": "52489abff43212445d432f6042e5b9faf99b3c843a79210629b5383f52694ec5", "rawtx": "", "verbose": null }, { "txid": "01f7b0831f174beb8a9b0990ca8bae197f6f1e4fe3d306c755d9f52da5687a9d", "rawtx": "", "verbose": null } ] } ] } ] }

  let dataModel: TxModel[];

  beforeEach(() => {

    dataModel = parseRawTransaction(resp);

  });


  describe('addresses', () => {

    it('should have data', () => {
      expect(dataModel[0].addresses).toBeDefined();
    });

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

      let addresses: TxAddresses[] = dataModel[0].addresses;
      expect(currency).toEqual("NAV");
    });

  });

});




