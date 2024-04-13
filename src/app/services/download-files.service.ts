import { ElementRef, Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { LearingComponent } from '../components';
import { GenerateAction } from '../constants';

type generateAction = 'result' | 'stepByStep' | 'learning';
@Injectable({
  providedIn: 'root',
})
export class DownloadFilesService {
  public resultElement: ElementRef;
  public learningElement: ElementRef;
  public stepByStepElement: ElementRef;
  constructor() {}

  public generatePDF(content: generateAction, fileName: string): void {
    let doc = new jsPDF('l', 'px', 'a4');
    if (content == GenerateAction.result) {
      doc.html(this.resultElement.nativeElement, {
        callback: () => {
          doc.save(fileName);
        },
      });
    } else if (content == GenerateAction.learning) {
      doc.html(this.learningElement.nativeElement, {
        callback: () => {
          doc.save(fileName);
        },
      });
      
    } else {
      doc.html(this.stepByStepElement.nativeElement, {
        callback: () => {
          doc.save(fileName);
        },
      });
    }
  }
}
