import { Component, Input, OnInit } from '@angular/core';
import { TypeOfCoding } from 'src/app/constants';
import { Combination } from 'src/app/types';

@Component({
  selector: 'app-text-learning',
  templateUrl: './text-learning.component.html',
  styleUrl: './text-learning.component.scss'
})
export class TextLearningComponent implements OnInit {
  @Input() public combiantion: Combination;
  public asciiTable: { decimal: number; ascii: string }[] = [];
  public utf8Table: { codePoint: number; character: string }[] = [];
  public isoCodes: number[] = [];
  protected readonly TypeOfCoding: any =  TypeOfCoding;

  constructor(){}

  public ngOnInit(): void {
      this.tableInit();
  }

  public  fromCharCode(code: number): string {
    return String.fromCharCode(code);
  }

  private tableInit(): void {
    if (
      this.combiantion.fromEncoding == TypeOfCoding.ascii ||
      this.combiantion.toEncoding == TypeOfCoding.ascii
    )
      this.generateAsciiTable();
    else if (
      this.combiantion.fromEncoding == TypeOfCoding.utf8 ||
      this.combiantion.toEncoding == TypeOfCoding.utf8
    )
      this.generateUtf8Table();
    else if (
      this.combiantion.fromEncoding == TypeOfCoding.iso8859 ||
      this.combiantion.toEncoding == TypeOfCoding.iso8859
    )
      this.generateIsoTable();
  }

  private generateAsciiTable() {
    for (let i = 0; i < 128; i++) {
      this.asciiTable.push({ decimal: i, ascii: String.fromCharCode(i) });
    }
  }

  private generateUtf8Table() {
    for (let i = 0; i < 256; i++) {
      const character = String.fromCodePoint(i);
      this.utf8Table.push({ codePoint: i, character: character });
    }
  }
  private generateIsoTable() {
    for (let i = 0; i < 256; i++) {
      this.isoCodes.push(i);
    }
  }

}
