import { Component, OnInit } from '@angular/core';
import { TypeOfCoding } from 'src/app/constants';
import { CodingService } from 'src/app/services';
import { Combination } from 'src/app/types';

@Component({
  selector: 'app-binary-step-by-step',
  templateUrl: './binary-step-by-step.component.html',
  styleUrl: './binary-step-by-step.component.scss'
})
export class BinaryStepByStepComponent implements OnInit {
  public combiantion: Combination;
  protected readonly TypeOfCoding: any = TypeOfCoding;

  constructor(
    public codingService: CodingService
  ) {}
  public ngOnInit(): void {
    if (this.codingService.combinationCoding) {
      this.combiantion = this.codingService.combinationCoding;
    }

  }
}
