import { Injectable } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { GenerateAction, TypeOfCoding } from '../constants';
import { Combination } from '../types';
import { TranslateService } from '@ngx-translate/core';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

type generateAction = 'result' | 'learning';
@Injectable({
  providedIn: 'root',
})
export class DownloadFilesService {
  public resultElement: string;
  public combination: Combination;
  private learningElement: string;
  constructor(private translate: TranslateService) {}

  public generatePDF(content: generateAction, fileName: string): void {
    this.setLearningTranslation(this.combination);
    if (content == GenerateAction.result) {
      const docDefinition = {
        content: [this.resultElement],
      };
      pdfMake.createPdf(docDefinition).download(fileName+".pdf");
    } else if (content == GenerateAction.learning) {
      const docDefinition = {
        content: [this.learningElement],
      };
      pdfMake.createPdf(docDefinition).download(fileName+".pdf");
    }
  }
  private setLearningTranslation(combination: Combination):void {
    if((combination.fromEncoding == TypeOfCoding.ascii && combination.toEncoding == TypeOfCoding.text) || (combination.fromEncoding == TypeOfCoding.text && combination.toEncoding == TypeOfCoding.ascii)){
      this.learningElement = this.translate.instant("learningSection.ascii");
    }
    if((combination.fromEncoding == TypeOfCoding.text && combination.toEncoding == TypeOfCoding.utf8) || (combination.fromEncoding == TypeOfCoding.utf8 && combination.toEncoding == TypeOfCoding.text)){
      this.learningElement = this.translate.instant("learningSection.utf8");
    }
    if((combination.fromEncoding == TypeOfCoding.text && combination.toEncoding == TypeOfCoding.iso8859) || (combination.fromEncoding == TypeOfCoding.iso8859 && combination.toEncoding == TypeOfCoding.text)){
      this.learningElement = this.translate.instant("learningSection.iso");
    }
    if((combination.fromEncoding == TypeOfCoding.ascii && combination.toEncoding == TypeOfCoding.utf8) || (combination.fromEncoding == TypeOfCoding.utf8 && combination.toEncoding == TypeOfCoding.ascii)){
      this.learningElement = this.translate.instant("learningSection.asciiUtf8");
    }
    if((combination.fromEncoding == TypeOfCoding.ascii && combination.toEncoding == TypeOfCoding.iso8859) || (combination.fromEncoding == TypeOfCoding.iso8859 && combination.toEncoding == TypeOfCoding.ascii)){
      this.learningElement = this.translate.instant("learningSection.asciiIso");
    }
    if((combination.fromEncoding == TypeOfCoding.utf8 && combination.toEncoding == TypeOfCoding.iso8859) || (combination.fromEncoding == TypeOfCoding.iso8859 && combination.toEncoding == TypeOfCoding.utf8)){
      this.learningElement = this.translate.instant("learningSection.isoUtf8");
    }
    if(combination.fromEncoding == TypeOfCoding.binary && combination.toEncoding == TypeOfCoding.gray){
      this.learningElement = this.translate.instant("learningSection.binaryGray");
    }
    if(combination.fromEncoding == TypeOfCoding.gray && combination.toEncoding == TypeOfCoding.binary){
      this.learningElement = this.translate.instant("learningSection.grayBinary");
    }
    if(combination.fromEncoding == TypeOfCoding.number && combination.toEncoding == TypeOfCoding.bcd){
      this.learningElement = this.translate.instant("learningSection.numberBCD");
    }
    if(combination.fromEncoding == TypeOfCoding.bcd && combination.toEncoding == TypeOfCoding.number){
      this.learningElement = this.translate.instant("learningSection.BCDNumber");
    }
    if(combination.fromEncoding == TypeOfCoding.number && combination.toEncoding == TypeOfCoding.sevenSegment){
      this.learningElement = this.translate.instant("learningSection.7segmentNumber");
    }
    if(combination.fromEncoding == TypeOfCoding.sevenSegment && combination.toEncoding == TypeOfCoding.number){
      this.learningElement = this.translate.instant("learningSection.number7segment");
    }
  }
}
