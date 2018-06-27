import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-sw-update-prompt',
  templateUrl: './sw-update-prompt.component.html',
  styleUrls: ['./sw-update-prompt.component.scss']
})
export class SwUpdatePromptComponent implements OnInit {
  updateDetected = false;
  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      this.updateDetected = true;
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
   }

  ngOnInit() {
  }

  reloadPage() {
    window.location.reload(true);
  }

}
