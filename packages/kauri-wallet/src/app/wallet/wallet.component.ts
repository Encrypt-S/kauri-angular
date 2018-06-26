import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { ApiModel } from '../services/api/models/api.model';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-api-sample',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {

  constructor(
    private _apiService: ApiService,
    private _dataService: DataService
  ) { }

  onGetTransactions(currency: string, addresses: string[]) {

    const apiModel: ApiModel = {} as ApiModel;

    apiModel.currency = currency;
    apiModel.addresses = addresses;

    this._apiService.getRawTransactions(apiModel);

  }

  get tempResult() {
    return  this._dataService.rawTransactions;
  }

}
