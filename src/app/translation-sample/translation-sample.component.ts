import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translation-sample',
  templateUrl: './translation-sample.component.html',
  styleUrls: ['./translation-sample.component.css']
})
export class TranslationSampleComponent {

  constructor() { }

  currencyVal = 120000.13;
  currentCurr = 'EUR';
  testDate = Date.now();

}
