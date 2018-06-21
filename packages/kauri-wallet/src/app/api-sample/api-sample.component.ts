import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api/api.service";
import { ApiModel } from "../services/api/api.model";

@Component({
  selector: 'app-api-sample',
  templateUrl: './api-sample.component.html',
  styleUrls: ['./api-sample.component.css']
})
export class ApiSampleComponent {

  constructor(private _APIService: ApiService) { }

  onGetTransactions(addresses: string[]) {
    let apiModel: ApiModel = {} as ApiModel;
    apiModel.addresses = addresses;
    this._APIService.getRawTransactions(apiModel)

  }

  get tempResult() {
    return this._APIService.tempResult
  }

}
