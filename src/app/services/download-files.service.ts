import { ElementRef, Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { GenerateAction } from '../constants';

type generateAction = 'result' | 'stepByStep' | 'learning';
@Injectable({
  providedIn: 'root',
})
export class DownloadFilesService {
  public resultElement: string;
  public learningElement: string;
  public stepByStepElement: string;
  constructor() {}

  public generatePDF(content: generateAction, fileName: string): void {
    let doc = new jsPDF('l', 'px', 'a4');
    if (content == GenerateAction.result) {
      doc.text(this.resultElement,30, 30);
      doc.save(fileName);
    } 
    else if (content == GenerateAction.learning) {
      doc.text(this.learningElement,30, 30);
      doc.save(fileName); 
    } 
    else {
      doc.text(this.stepByStepElement,30, 30);
      doc.save(fileName); 
    }
  }
}
