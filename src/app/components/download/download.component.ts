import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as pdfMake from "pdfMake/build/pdfMake";
import * as pdfFonts from "pdfMake/build/vfs_fonts";

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent {
  public selectedValues: string[] = [];
  constructor(private translate: TranslateService) {}

  public submit(): void {
    this.selectedValues.forEach((value) => {
      switch (value) {
        case 'result':
          this.downloadResult();
          break;
        case 'stepByStep':
          this.downloadStepByStep();
          break;
        case 'learning':
          this.downloadLearning();
          break;
        default:
      }
    });
  }

  private downloadResult(): void{
    this.generatePDF("result", this.translate.instant("downloadSection.result"));
  }

  private downloadStepByStep(): void{
    this.generatePDF("stepByStep", this.translate.instant("downloadSection.stepByStep"));
  }

  private downloadLearning(): void{
   this.generatePDF("learning", this.translate.instant("downloadSection.learning"));
  }

  private generatePDF(content: any, fileName: string): void {
    const docDefinition = {
      content: [content],
    };
    pdfMake.createPdf(docDefinition).download(fileName);
  }
}

