import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {

  public availableLanguages: string[]= ["en","pl"];
  public curretLanguage: string;
  
  constructor(private translate: TranslateService){
    this.curretLanguage = localStorage.getItem("language") as string;

  }

  public ngOnInit(): void {
    this.translate.use(this.curretLanguage);
  }

  public changeLanguage(): void {
    this.curretLanguage = this.availableLanguages.filter(el => el != this.curretLanguage ?  el: null)[0];
    this.translate.use(this.curretLanguage);
  }
}
