import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { dropdownCodeList } from 'src/app/constants';

@Component({
  selector: 'app-encoding-messages',
  templateUrl: './encoding-messages.component.html',
  styleUrls: ['./encoding-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EncodingMessagesComponent implements OnInit {
  public encodeMessage: string;
  public codedMessage: string;
  public selectedEncode: string;
  public selectedCoded: string;
  public dropdownCodeList: any[]|undefined = dropdownCodeList;

  constructor(){}
  public ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  public codeMessage(): void {
    this.codedMessage = "dwwwww";
    }

  public switchMessages(): void {
    this.encodeMessage = this.codedMessage;
    this.codedMessage = "";
    }

}
