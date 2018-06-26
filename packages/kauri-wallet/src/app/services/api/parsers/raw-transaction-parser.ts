import {ScriptPubKeyData, ScriptSigData, TxAddress, TxModel, TxsData, TxVerbose, VinData, VOutData} from '../models/txModel';

export function parseRawTransaction(rawData: any): TxModel[]  {

  const modelArr: TxModel[] = [];
  const data: any[] = rawData.data;
  let m: TxModel = {} as TxModel;

  data.forEach((item) => {

    m.currency = item['currency'];
    m.addresses = parseAddresses(item['addresses']);

    modelArr.push(m);

  });

  return modelArr;

}

export function parseAddresses(addresses: any[]): TxAddress[]  {

  let txAddresses: TxAddress[] = [];

  addresses.forEach((item) => {

    txAddresses.push(parseAddressItem(item));

  });

  return txAddresses;

}

export function parseAddressItem(item: any): TxAddress {

  let txAddress: TxAddress = {} as TxAddress;

  txAddress.address = item['address'];
  txAddress.transactions = [];

  item['transactions'].forEach((tx) => {

    txAddress.transactions.push(parseTransactions(tx));

  });

  return txAddress;

}

export function parseTransactions(item: any): TxsData {

  let txsData: TxsData = {} as TxsData;

  txsData.txid = item['txid'];
  txsData.rawtx = item['rawtx'];
  txsData.verbose = item['verbose'];

  return txsData;

}

export function parseVerbose(item: any): TxVerbose {

  let txVerbose: TxVerbose = {} as TxVerbose;

  txVerbose.anonDestination = item['anon-destination'];
  txVerbose.blockhash = item['blockhash'];
  txVerbose.blocktime = item['blocktime'];
  txVerbose.confirmations = item['confirmations'];
  txVerbose.hash = item['hash'];
  txVerbose.height = item['height'];
  txVerbose.hex = item['hex'];
  txVerbose.locktime = item['locktime'];
  txVerbose.size = item['size'];
  txVerbose.time = item['time'];
  txVerbose.version = item['version'];
  txVerbose.txid = item['txid'];

  return txVerbose;

}

export function parseVinData(item: any): VinData {

  let vinData: VinData = {} as VinData;

  vinData.scriptSig = item['scriptSig'];
  vinData.sequence = item['sequence'];
  vinData.txid = item['txid'];
  vinData.vout = item['vout'];

  return vinData;

}

export function parseScriptSigData(item: any): ScriptSigData {

  let scriptSigData: ScriptSigData = {} as ScriptSigData;

  scriptSigData.asm = item['asm'];
  scriptSigData.hex = item['hex'];

  return scriptSigData;

}

export function parseVoutData(item: any): VOutData {

  let vOutData: VOutData = {} as VOutData;

  vOutData.n = item['n'];
  vOutData.scriptPubKey = item['scriptPubKey'];
  vOutData.value = item['value'];
  vOutData.valueSat = item['valueSat'];

  return vOutData;

}

export function parseScriptPubKeyData(item: any): ScriptPubKeyData {

  let scriptPubKeyData: ScriptPubKeyData = {} as ScriptPubKeyData;

  scriptPubKeyData.addresses = item['addresses'];
  scriptPubKeyData.asm = item['asm'];
  scriptPubKeyData.hex = item['hex'];
  scriptPubKeyData.reqSigs = item['reqSigs'];
  scriptPubKeyData.type = item['type'];

  return scriptPubKeyData;

}












