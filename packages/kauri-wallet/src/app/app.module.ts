import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TranslationSampleComponent } from './translation-sample/translation-sample.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SwUpdatePromptComponent } from './features/service-workers/sw-update-prompt/sw-update-prompt.component';
import { ApiService } from './services/api/api.service';
import { WalletComponent } from './wallet/wallet.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data/data.service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedMaterialModule } from "./shared/components/material/shared-material.module";

@NgModule({
  declarations: [
    AppComponent,
    TranslationSampleComponent,
    SwUpdatePromptComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    SharedMaterialModule,
  ],
  providers: [
    DataService,
    ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
