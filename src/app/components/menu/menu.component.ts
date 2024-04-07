import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public learningVisible: boolean = false;
  public stepByStepVisible: boolean = false;
  public pdfVisible: boolean = false;

  constructor() {}

  public openDialog(dialogName: string): void {
    this.learningVisible = false;
    this.stepByStepVisible = false;
    this.pdfVisible = false;
    switch (dialogName) {
      case 'learning':
        this.learningVisible = true;
        break;
      case 'stepByStep':
        this.stepByStepVisible = true;
        break;
      case 'pdf':
        this.pdfVisible = true;
        break;
    }
  }
}
