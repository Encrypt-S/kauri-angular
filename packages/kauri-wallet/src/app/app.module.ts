import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TranslationSampleComponent } from './translation-sample/translation-sample.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SwUpdatePromptComponent } from './features/service-workers/sw-update-prompt/sw-update-prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslationSampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SwUpdatePromptComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
