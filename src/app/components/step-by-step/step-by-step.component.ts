import { Component, ElementRef, ViewChild } from '@angular/core';
import { CodingService, DownloadFilesService } from 'src/app/services';

@Component({
  selector: 'app-step-by-step',
  templateUrl: './step-by-step.component.html',
  styleUrl: './step-by-step.component.scss'
})
export class StepByStepComponent {
  @ViewChild("stepByStepElement", { read: ElementRef , static:false  })public stepByStepElement: ElementRef;
  constructor(private codingService: CodingService, private downloadFilesService: DownloadFilesService){}
  public ngAfterViewInit(): void {
    this.downloadFilesService.stepByStepElement = this.stepByStepElement;
    console.log(this.downloadFilesService.learningElement );
  }
}
