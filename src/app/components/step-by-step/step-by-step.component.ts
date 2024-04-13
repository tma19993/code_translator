import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TypeOfCoding } from 'src/app/constants';
import { CodingService, DownloadFilesService } from 'src/app/services';
import { Combination } from 'src/app/types';

@Component({
  selector: 'app-step-by-step',
  templateUrl: './step-by-step.component.html',
  styleUrl: './step-by-step.component.scss',
})
export class StepByStepComponent implements OnInit, AfterViewInit {
  public combiantion: Combination;
  @ViewChild('stepByStepElement', { read: ElementRef, static: false })
  public stepByStepElement: ElementRef;
  protected readonly TypeOfCoding: any = TypeOfCoding;
  constructor (
    public codingService: CodingService,
    private downloadFilesService: DownloadFilesService
  ) {}

  public ngOnInit(): void {
    if (this.codingService.combinationCoding) {
      this.combiantion = this.codingService.combinationCoding;
    }
  }
  public ngAfterViewInit(): void {
    this.downloadFilesService.stepByStepElement = this.stepByStepElement;
  }
}
