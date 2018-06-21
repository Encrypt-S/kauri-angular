import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiModel } from "./api.model";
import { environment } from "../../../environments/environment";

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {}

    tempResult: any;

    getRawTransactions(addresses: ApiModel) {

      // TODO: build up response injecting currency and addresses...
      console.log(addresses);

      let headers_object = new HttpHeaders();
      headers_object.append('Content-Type', 'application/json');

      const httpOptions = {
        headers: headers_object
      };

      // for now let's just use hard-coded payload for testing...
      let transactions = JSON.stringify( {"transactions": [
          {"currency":  "NAV", "addresses": ["NW7uXr4ZAeJKigMGnKbSLfCBQY59cH1T8G", "NUDke42E3fwLqaBbBFRyVSTETuhWAi7ugk"]},
          {"currency":  "BTC",  "addresses": ["Bak7ahbZAA", "B91janABsa"]}
        ]});

      let endpoint = environment.apiBase + 'getrawtransactions';

        return this.http.post(endpoint, transactions, httpOptions)
          .subscribe(
          (response) => {
            console.log(response);
            this.tempResult = response;
          },
          (error) => console.log(error)
        );
    }

}
