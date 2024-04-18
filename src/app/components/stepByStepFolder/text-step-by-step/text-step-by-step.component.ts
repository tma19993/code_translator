import { Component, OnInit } from '@angular/core';
import { TypeOfCoding } from 'src/app/constants';
import { CodingService, DownloadFilesService } from 'src/app/services';
import { Combination } from 'src/app/types';
import { TableCodes } from 'src/app/types/tableCodes.type';

@Component({
  selector: 'app-text-step-by-step',
  templateUrl: './text-step-by-step.component.html',
  styleUrl: './text-step-by-step.component.scss'
})
export class TextStepByStepComponent implements OnInit {
  public asciiTable: TableCodes[] = [];
  public utf8Table: TableCodes[] = [];
  public isoCodes: TableCodes[] = [];
  public combiantion: Combination;

  protected readonly TypeOfCoding: any = TypeOfCoding;
  constructor(
    public codingService: CodingService
  ) {}

  public ngOnInit(): void {
    if (this.codingService.combinationCoding) {
      this.combiantion = this.codingService.combinationCoding;
    }
    this.tableInit();
  }
  public findEncodeCharacter(index: number): boolean {
    const blueIndexes = this.getIndexesFromMessage(this.codingService.message);
    return blueIndexes.includes(index);
  }

  public findCodedCharacter(index: number): boolean {
    const greenIndexes = this.getIndexesFromMessage(
      this.codingService.convert(
        this.codingService.message,
        this.codingService.combinationCoding
      )
    );
    return greenIndexes.includes(index);
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

  private generateAsciiTable(): void {
    for (let i = 0; i < 128; i++) {
      this.asciiTable.push({ codePoint: i, character: String.fromCharCode(i) });
    }
  }
  private generateUtf8Table(): void {
    for (let i = 0; i < 256; i++) {
      this.utf8Table.push({ codePoint: i, character: String.fromCharCode(i) });
    }
  }
  private generateIsoTable(): void {
    for (let i = 0; i < 256; i++) {
      this.isoCodes.push({ codePoint: i, character: String.fromCharCode(i) });
    }
  }

  private getIndexesFromMessage(message: string): number[] {
    const indexes: number[] = [];

    if ( this.combiantion.toEncoding == TypeOfCoding.ascii) {
      this.asciiTable.forEach((el, index) => {
        if (el.character.includes(message)) indexes.push(index);
      });
    }
    else if (this.combiantion.fromEncoding == TypeOfCoding.ascii){
      this.asciiTable.forEach((el, index) => {
        if (el.codePoint.toString().includes(message)) indexes.push(index);
      });
    }
    if ( this.combiantion.toEncoding == TypeOfCoding.utf8) {
      this.utf8Table.forEach((el, index) => {
        if (el.character.includes(message)) indexes.push(index);
      });
    }
    else if (this.combiantion.fromEncoding == TypeOfCoding.utf8){
      this.utf8Table.forEach((el, index) => {
        if (el.codePoint.toString().includes(message)) indexes.push(index);
      });
    }
    if ( this.combiantion.toEncoding == TypeOfCoding.iso8859) {
      this.isoCodes.forEach((el, index) => {
        if (el.character.includes(message)) indexes.push(index);
      });
    }
    else if (this.combiantion.fromEncoding == TypeOfCoding.iso8859){
      this.isoCodes.forEach((el, index) => {
        if (el.codePoint.toString().includes(message)) indexes.push(index);
      });
    }
     
    return indexes;
  }
}
