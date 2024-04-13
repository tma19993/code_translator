import { Component, OnInit } from '@angular/core';
import { TypeOfCoding } from 'src/app/constants';
import { CodingService } from 'src/app/services';
import { BinaryCodingService } from 'src/app/services/coding-services';
import { Combination } from 'src/app/types';

@Component({
  selector: 'app-binary-step-by-step',
  templateUrl: './binary-step-by-step.component.html',
  styleUrl: './binary-step-by-step.component.scss',
})
export class BinaryStepByStepComponent implements OnInit {
  public combiantion: Combination;
  protected readonly TypeOfCoding: any = TypeOfCoding;

  constructor(
    public codingService: CodingService,
    public binaryCodingService: BinaryCodingService
  ) {}
  public ngOnInit(): void {
    if (this.codingService.combinationCoding) {
      this.combiantion = this.codingService.combinationCoding;
    }
  }
  public splitDescription(theString: string, bcd?: boolean): string[] {
    if (bcd) {
      return theString.match(/.{1,4}/g) as string[];
    }
    else return theString.split('');
  }
 public convertFrom7segmentToNumber(message: string): string[]{
    let splittedStrings: string[] = [];
      for (let i = 0; i < message.length; i += 7) {
        splittedStrings.push(message.substr(i, 7));
      }
      return splittedStrings;
  }
  public convertToBinary(theString: string): string {
    return Number(theString).toString(2);
  }
  public convertToDecimal(theString: string,sevenSegment?: boolean,index? :number): string {
    return parseInt(theString, 2).toString();
  }
  public convertToNumber(theString: string): number {
    return Number(theString);
  }
}
