import { Component } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent {
  public selectedValues: string[] = [];

  constructor() {}

  public submit(): void {
    this.selectedValues.forEach(value=>{
      switch (value){
        case 'result':
        this.downloadResult();
          break;
        case 'stepByStep':
       this.downloadStepByStep();
          break;
        case 'learning':
          this.downloadLearning();
          break;
          default: 
      }
    });   
   }

  private downloadResult(): void{
    console.log("result");
  }
  
  private downloadStepByStep(): void{
    console.log("stepByStep");
  }

  private downloadLearning(): void{
    console.log("learning");
  }

}

