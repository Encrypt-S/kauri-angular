import { Injectable } from '@angular/core';
import {TxModel} from '../api/txModel';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  rawTransactions: TxModel[];

}
