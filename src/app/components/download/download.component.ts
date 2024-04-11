import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GenerateAction } from 'src/app/constants';
import { DownloadFilesService } from 'src/app/services';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent {
  public selectedValues: string[] = [];
  constructor(private translate: TranslateService, private downloadFilesService: DownloadFilesService) {}

  public submit(): void {
    this.selectedValues.forEach((value) => {
      switch (value) {
        case 'result':
          this.downloadFilesService.generatePDF(GenerateAction.result, this.translate.instant("downloadSection.result"));
          break;
        case 'stepByStep':
          this.downloadFilesService.generatePDF(GenerateAction.stepByStep, this.translate.instant("downloadSection.stepByStep"));
          break;
        case 'learning':
          this.downloadFilesService.generatePDF(GenerateAction.learning, this.translate.instant("downloadSection.learning"));
          break;
        default:
      }
    });
  }



}

