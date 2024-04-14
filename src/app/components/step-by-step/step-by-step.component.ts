import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TypeOfCoding } from 'src/app/constants';
import { CodingService, DownloadFilesService } from 'src/app/services';
import { Combination } from 'src/app/types';

@Component({
  selector: 'app-step-by-step',
  templateUrl: './step-by-step.component.html',
  styleUrl: './step-by-step.component.scss',
})
export class StepByStepComponent implements OnInit {
  public combiantion: Combination;

  protected readonly TypeOfCoding: any = TypeOfCoding;
  constructor (
    public codingService: CodingService
  ) {}

  public ngOnInit(): void {
    if (this.codingService.combinationCoding) {
      this.combiantion = this.codingService.combinationCoding;
    }
  }
}
