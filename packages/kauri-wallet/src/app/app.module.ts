import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TranslationSampleComponent } from './translation-sample/translation-sample.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SwUpdatePromptComponent } from './features/service-workers/sw-update-prompt/sw-update-prompt.component';
import { ApiService } from './services/api/api.service';
import { ApiSampleComponent } from './api-sample/api-sample.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data/data.service';

@NgModule({
  declarations: [
    AppComponent,
    TranslationSampleComponent,
    SwUpdatePromptComponent,
    ApiSampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    DataService,
    ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
