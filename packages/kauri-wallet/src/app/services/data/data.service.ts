import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  // Stores the transaction data
  rawTransactions: any;

}
