import { Component, Input, OnInit } from '@angular/core';
import { TypeOfCoding } from 'src/app/constants';
import { Combination } from 'src/app/types';
import { TableCodes } from 'src/app/types/tableCodes.type';

@Component({
  selector: 'app-text-learning',
  templateUrl: './text-learning.component.html',
  styleUrl: './text-learning.component.scss',
})
export class TextLearningComponent implements OnInit {
  @Input() public combiantion: Combination;
  public asciiTable: TableCodes[] = [];
  public utf8Table: TableCodes[] = [];
  public isoCodes: TableCodes[] = [];
  protected readonly TypeOfCoding: any = TypeOfCoding;

  constructor() {}

  public ngOnInit(): void {
    this.tableInit();
  }

  public fromCharCode(code: number): string {
    return String.fromCharCode(code);
  }

  private tableInit(): void {
    if (
      this.combiantion.fromEncoding == TypeOfCoding.ascii ||
      this.combiantion.toEncoding == TypeOfCoding.ascii
    )
      this.generateAsciiTable();
    if (
      this.combiantion.fromEncoding == TypeOfCoding.utf8 ||
      this.combiantion.toEncoding == TypeOfCoding.utf8
    )
      this.generateUtf8Table();
    if (
      this.combiantion.fromEncoding == TypeOfCoding.iso8859 ||
      this.combiantion.toEncoding == TypeOfCoding.iso8859
    )
      this.generateIsoTable();
  }

  private generateAsciiTable() {
    for (let i = 0; i < 128; i++) {
      this.asciiTable.push({
        codePoint: i,
        character: String.fromCodePoint(i),
      });
    }
  }

  private generateUtf8Table() {
    for (let i = 0; i < 256; i++) {
      this.utf8Table.push({ codePoint: i, character: String.fromCodePoint(i) });
    }
  }
  private generateIsoTable() {
    for (let i = 0; i < 256; i++) {
      this.isoCodes.push({ codePoint: i, character: String.fromCodePoint(i) });
    }
  }
}
