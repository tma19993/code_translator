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
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodingService } from './services';
import { BinaryCodingService, TextCodingService } from './services/coding-services';
import { BinaryLearningComponent, BinaryStepByStepComponent, DownloadComponent, EncodingMessagesComponent, LearingComponent, MenuComponent, SevenSegmentDisplayComponent, StepByStepComponent, TextLearningComponent, TextStepByStepComponent, TranslationComponent } from './components';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
@NgModule({
  declarations: [
    AppComponent,
    TranslationComponent,
    MenuComponent,
    DownloadComponent,
    EncodingMessagesComponent,
    StepByStepComponent,
    LearingComponent,
    TextLearningComponent,
    BinaryLearningComponent,
    TextStepByStepComponent,
    BinaryStepByStepComponent,
    SevenSegmentDisplayComponent
  ],
  imports: [
    DynamicDialogModule,
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
  providers: [
    DialogService,
    CodingService,
    TextCodingService,
    BinaryCodingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}