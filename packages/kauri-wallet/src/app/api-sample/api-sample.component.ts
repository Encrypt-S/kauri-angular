import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-api-sample',
  templateUrl: './api-sample.component.html',
  styleUrls: ['./api-sample.component.css']
})
export class ApiSampleComponent {
  addresses = []
  constructor(private _APIService: ApiService) { }

  onAddAddress(address: string) {
    this.addresses.push({
      address: address
    });
  }

  onGetTransactions() {
    this._APIService.getRawTransactions(this.addresses)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
  }

}
