import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TypeOfCoding } from 'src/app/constants';
import { CodingService, DownloadFilesService } from 'src/app/services';
import { Combination } from 'src/app/types';

@Component({
  selector: 'app-learing',
  templateUrl: './learing.component.html',
  styleUrl: './learing.component.scss',
})
export class LearingComponent implements OnInit, AfterViewInit {
  public combiantion: Combination;

  @ViewChild('learningElement', { read: ElementRef, static: false })
  public learningElement: ElementRef;

  protected readonly TypeOfCoding: any =  TypeOfCoding;
  constructor(
    private codingService: CodingService,
    private downloadFilesService: DownloadFilesService
  ) {}

  public ngOnInit(): void {
    if (this.codingService.combinationCoding) {
      this.combiantion = this.codingService.combinationCoding;
    }
  }

  public ngAfterViewInit(): void {
    this.downloadFilesService.learningElement = this.learningElement;
  }

}
