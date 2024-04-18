import {
  Component,
  OnInit,
} from '@angular/core';
import { TypeOfCoding } from 'src/app/constants';
import { CodingService } from 'src/app/services';
import { Combination } from 'src/app/types';

@Component({
  selector: 'app-learing',
  templateUrl: './learing.component.html',
  styleUrl: './learing.component.scss',
})
export class LearingComponent implements OnInit{
  public combiantion: Combination;

  protected readonly TypeOfCoding: any =  TypeOfCoding;
  constructor(
    private codingService: CodingService
  ) {}

  public ngOnInit(): void {
    if (this.codingService.combinationCoding) {
      this.combiantion = this.codingService.combinationCoding;
    }
  }
}
