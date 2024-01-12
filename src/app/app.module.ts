import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageComponent } from './layout/language/language.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { INTERCEPTORS_PROVIDERS } from './core/interceptors';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './shared/error/error.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    LoaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    TranslateService,
    ...INTERCEPTORS_PROVIDERS,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
