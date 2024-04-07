import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { TranslationComponent } from './components/translation/translation.component';
import { MenuComponent } from './components/menu/menu.component';
import { CheckboxModule } from 'primeng/checkbox';
import { DownloadComponent } from './components/download/download.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncodingMessagesComponent } from './components/encoding-messages/encoding-messages.component';
import { CodingService } from './services';
@NgModule({
  declarations: [
    AppComponent,
    LanguageSwitcherComponent,
    TranslationComponent,
    MenuComponent,
    DownloadComponent,
    EncodingMessagesComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    DialogModule,
    CheckboxModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [CodingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}