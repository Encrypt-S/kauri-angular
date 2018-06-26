import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiModel } from './api.model';
import { environment } from '../../../environments/environment';
import { DataService } from '../data/data.service';
import { TxSendModel } from './tx-send.model';
import { parseRawTransaction } from './parsers/raw-transaction-parser';

@Injectable()
export class ApiService {
    constructor(
      private http: HttpClient,
      private _dataService: DataService
    ) {}

    getRawTransactions(apiModel: ApiModel) {

      const headers_object = new HttpHeaders();
      headers_object.append('Content-Type', 'application/json');

      const httpOptions = {
        headers: headers_object
      };

      const txSendModel: TxSendModel = {} as TxSendModel;
      txSendModel.transactions = [];
      txSendModel.transactions.push(apiModel);

      const endpoint = environment.apiBase + 'getrawtransactions';

        return this.http.post(endpoint, txSendModel, httpOptions)
          .subscribe(
          (response) => {

            const txModel = parseRawTransaction(response);

            this._dataService.rawTransactions = txModel;
            },
          (error) => console.log(error)
        );
    }

}
