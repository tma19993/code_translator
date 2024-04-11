import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CodingService, DownloadFilesService } from 'src/app/services';

@Component({
  selector: 'app-learing',
  templateUrl: './learing.component.html',
  styleUrl: './learing.component.scss'
})
export class LearingComponent implements OnInit, AfterViewInit {

  @ViewChild("learningElement", { read: ElementRef , static:false  })public learningElement: ElementRef;
  public asciiTable: { decimal: number, ascii: string }[] = [];

  constructor(public codingService: CodingService, private downloadFilesService: DownloadFilesService){}

  public ngOnInit(): void {
    this.generateAsciiTable();    
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
