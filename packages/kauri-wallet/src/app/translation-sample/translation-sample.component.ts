import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translation-sample',
  templateUrl: './translation-sample.component.html',
  styleUrls: ['./translation-sample.component.scss']
})
export class TranslationSampleComponent {

  constructor() { }

  currencyVal = 120000.13;
  currentCurr = 'USD';
  testDate = Date.now();

}
