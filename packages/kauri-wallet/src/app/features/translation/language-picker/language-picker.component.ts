import { Component, OnInit,  } from '@angular/core';

import { language } from './../../../../languages/language';

function getLanguageFromPath() {
  switch (document.location.pathname.split('/')[1]) {
    case 'ja':
      return 'ja';
    case 'de':
      return 'de';
    default:
      return 'en';
  }
}

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.css']
})
export class LanguagePickerComponent implements OnInit {

  language = language.id;

  constructor() { }

  ngOnInit() {

  }

  changeLanguage(e) {
    if (e === 'en') {
      return window.location.href = `/`;
    }
    window.location.href = `/${e}/`;
  }

}
