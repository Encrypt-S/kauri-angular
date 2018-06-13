import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.css']
})
export class LanguagePickerComponent implements OnInit {

  language = 'en';

  constructor() { }

  ngOnInit() {
  }

  changeLanguage(e) {
    console.log(e);
    window.location.href = `/${e}/index.html`;
  }

}
