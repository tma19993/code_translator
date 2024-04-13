import { Component, Input } from '@angular/core';
import { TypeOfCoding } from 'src/app/constants';
import { Combination } from 'src/app/types';

@Component({
  selector: 'app-binary-learning',
  templateUrl: './binary-learning.component.html',
  styleUrl: './binary-learning.component.scss'
})
export class BinaryLearningComponent {
  @Input() public combiantion: Combination;

  protected readonly TypeOfCoding: any =  TypeOfCoding;
}
