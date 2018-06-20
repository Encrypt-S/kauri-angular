import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Basic " + btoa("user:hi"));

const httpOptions = {
  headers: headers_object
};

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {}

    getRawTransactions(addresses: any[]) {

      // TODO: build up reponse injecting currency and addresses...
      console.log(addresses)

      // for now let's just use hard-coded payload for testing...
      let transactions = JSON.stringify( {"transactions": [
          {"currency":  "NAV", "addresses": ["NW7uXr4ZAeJKigMGnKbSLfCBQY59cH1T8G", "NUDke42E3fwLqaBbBFRyVSTETuhWAi7ugk"]},
          {"currency":  "BTC",  "addresses": ["Bak7ahbZAA", "B91janABsa"]}
        ]})

        return this.http.post('http://127.0.0.1:9002/api/transactions/v1/getrawtransactions', transactions, httpOptions)
    }

}
