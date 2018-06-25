export interface TxModel {

  currency: string;
  addresses: TxAddresses[];

}

export interface TxAddresses {

  address: string;
  transactions: TxsData[];

}

export interface TxsData {

  txid: string;
  rawtx: string;
  verbose: TxVerbose;

}

export interface TxVerbose {

  anonDestination: string;
  blockhash: string;
  blockTime: number;
  confirmations: number;
  hash: string;
  height: number;
  hex: string;
  locktime: number;
  size: number;
  time: number;
  txid: string;
  version: number;
  vin: VinData[];
  vout: VOutData[];
  vsize: number;

}

export interface VinData {

  scriptSig: ScriptSigData[];
  sequence: number;
  txid: string;
  vout: number;

}

export interface VOutData {

  n: number;
  scriptPubKey: ScriptPubKeyData;
  value: number;
  valueSat: number;

}

export interface ScriptPubKeyData {

  addresses: string[];
  asm: string;
  hex: string;
  reqSigs: number;
  type: string;
}

export interface ScriptSigData {

  asm: string;
  hex: string;

}

