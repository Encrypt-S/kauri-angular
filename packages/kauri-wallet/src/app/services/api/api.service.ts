import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiModel } from './api.model';
import { environment } from '../../../environments/environment';
import { DataService } from '../data/data.service';
import { SendTransactionsModel } from './send-transactions.model';
import { parseRawTransaction } from './parsers/raw-transaction-parser';

@Injectable()
export class ApiService {
    constructor(
      private http: HttpClient,
      private _dataService: DataService
    ) {}

    tempResult: any;

    getRawTransactions(apiModel: ApiModel) {

      console.log('apiModel', apiModel);

      const headers_object = new HttpHeaders();
      headers_object.append('Content-Type', 'application/json');

      const httpOptions = {
        headers: headers_object
      };


      const transSendModel:SendTransactionsModel = {} as SendTransactionsModel;
      transSendModel.transactions = [];
      transSendModel.transactions.push(apiModel);


      const endpoint = environment.apiBase + 'getrawtransactions';

        return this.http.post(endpoint, transSendModel, httpOptions)
          .subscribe(
          (response) => {
            console.log(response);

            let txModel = parseRawTransaction(response);

            this._dataService.rawTransactions = txModel;
            },
          (error) => console.log(error)
        );
    }

}
