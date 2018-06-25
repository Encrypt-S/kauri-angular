import { TxModel } from '../txModel';


export function parseRawTransaction(rawData: any): TxModel[]  {


  let data = rawData.data;

  // testing...
  // data.forEach((item) => {
  //
  //   console.log(item);
  //
  // });

  return data;

}
