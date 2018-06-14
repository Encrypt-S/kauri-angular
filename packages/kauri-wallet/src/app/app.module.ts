import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TranslationSampleComponent } from './translation-sample/translation-sample.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SwUpdatePromptComponent } from './features/service-workers/sw-update-prompt/sw-update-prompt.component';
import { LanguagePickerComponent } from './features/translation/language-picker/language-picker.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'testpage', component: TestPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TranslationSampleComponent,
    SwUpdatePromptComponent,
    LanguagePickerComponent,
    TestPageComponent,
    HomePageComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
