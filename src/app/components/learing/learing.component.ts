import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CodingService, DownloadFilesService } from 'src/app/services';

@Component({
  selector: 'app-learing',
  templateUrl: './learing.component.html',
  styleUrl: './learing.component.scss'
})
export class LearingComponent implements AfterViewInit {
  @ViewChild("learningElement", { read: ElementRef , static:false  })public learningElement: ElementRef;
  constructor(private codingService: CodingService, private downloadFilesService: DownloadFilesService){}
  public ngAfterViewInit(): void {
    this.downloadFilesService.learningElement = this.learningElement;

  }

  

}
