import { TxModel } from '../txModel';

export function parseRawTransaction(rawData: any): TxModel[]  {

  return rawData.data;

}
