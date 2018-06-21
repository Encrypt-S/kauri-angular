import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiModel } from './api.model';
import { environment } from '../../../environments/environment';
import { DataService } from '../data/data.service';

@Injectable()
export class ApiService {
    constructor(
      private http: HttpClient,
      private _dataService: DataService
    ) {}

    tempResult: any;

    getRawTransactions(
      apiModel: ApiModel) {

      console.log('apiModel', apiModel);

      const headers_object = new HttpHeaders();
      headers_object.append('Content-Type', 'application/json');

      const httpOptions = {
        headers: headers_object
      };

      const transactions = JSON.stringify( {'transactions': [
          {'currency':  apiModel.currency, 'addresses': apiModel.addresses}
        ]});

      console.log('transactions', transactions);

      const endpoint = environment.apiBase + 'getrawtransactions';

        return this.http.post(endpoint, transactions, httpOptions)
          .subscribe(
          (response) => {
            console.log(response);
            this._dataService.rawTransactions = response;
            },
          (error) => console.log(error)
        );
    }

}
