import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CodingService, DownloadFilesService } from 'src/app/services';
import { Combination } from 'src/app/types';

@Component({
  selector: 'app-learing',
  templateUrl: './learing.component.html',
  styleUrl: './learing.component.scss'
})
export class LearingComponent implements OnInit, AfterViewInit {
  public combiantion: Combination;

  @ViewChild("learningElement", { read: ElementRef , static:false  })public learningElement: ElementRef;
  public asciiTable: { decimal: number, ascii: string }[] = [];

  constructor(private codingService: CodingService, private downloadFilesService: DownloadFilesService){}

  public ngOnInit(): void {
    this.generateAsciiTable();
    if(this.codingService.combinationCoding)
    this.combiantion = this.codingService.combinationCoding;
  }

  public ngAfterViewInit(): void {
    this.downloadFilesService.learningElement = this.learningElement;

  }

private generateAsciiTable() {
  for (let i = 0; i < 128; i++) {
    this.asciiTable.push({ decimal: i, ascii: String.fromCharCode(i) });
  }
}

}
