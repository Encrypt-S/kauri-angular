import {TxAddress, TxModel, TxsData, TxVerbose} from '../txModel';



export function parseRawTransaction(rawData: any): TxModel[]  {

  const modelArr: TxModel[] = [];
  const data: any[] = rawData.data;

  data.forEach((item) => {

    let m: TxModel = {} as TxModel;
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

  return txVerbose;

}











