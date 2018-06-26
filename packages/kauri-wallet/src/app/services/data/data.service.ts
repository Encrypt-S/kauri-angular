import { Injectable } from '@angular/core';
import {TxModel} from '../api/models/txModel';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  rawTransactions: TxModel[];

}
