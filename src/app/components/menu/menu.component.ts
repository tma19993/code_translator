import { Component, Type } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CodingService } from 'src/app/services';
import { Combination } from 'src/app/types';
import { LearingComponent } from '../learing/learing.component';
import { TranslateService } from '@ngx-translate/core';
import { StepByStepComponent } from '../step-by-step/step-by-step.component';
import { DownloadComponent } from '../download/download.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(
    public codingService: CodingService,
    public dialogService: DialogService,
    private translate: TranslateService
  ) {}

  public open(dialogName: string): void {
    switch (dialogName) {
      case 'learning':
        this.openDialog(LearingComponent, this.translate.instant('menuButtons.learning'));

        break;
      case 'stepByStep':
        this.openDialog(StepByStepComponent, this.translate.instant('menuButtons.stepByStep'));
        break;
      case 'pdf':
        this.openDialog(DownloadComponent, this.translate.instant('menuButtons.pdf'));
        break;
    }
  }
  private openDialog(component: Type<any>, header: string, data?: {}): void {
    this.dialogService.open(component, {
      header: header,
      width: '40vw',
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
    });
  }
}
