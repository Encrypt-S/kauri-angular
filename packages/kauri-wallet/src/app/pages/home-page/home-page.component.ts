import { Component, OnInit } from '@angular/core';
import lernaImportTest from 'temp-test-module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'Kauri Wallet';
  lernaTest = lernaImportTest;

  constructor() { }

  ngOnInit() {
  }

}
