import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
  selector: "app-seven-segment-display",
  templateUrl: "./seven-segment-display.component.html",
  styleUrl: "./seven-segment-display.component.scss"
})
export class SevenSegmentDisplayComponent implements OnChanges {
  @ViewChild("viewChild") public number: ElementRef;
  @Input() inputNumber: string; 
 public  segments: number[] 
  private patterns:string[] = [
    "1111110", // 0
    "0110000", // 1
    "1101101", // 2
    "1111001", // 3
    "0110011", // 4
    "1011011", // 5
    "1011111", // 6
    "1110000", // 7
    "1111111", // 8
    "1111011", // 9
  ];

  constructor() { }
 public ngOnChanges(): void {
  if(this.patterns.findIndex((el=>el == this.inputNumber)) != -1){ 
    document.querySelector(".hour svg")?.setAttribute("class","num-"+ this.patterns.findIndex((el=>el == this.inputNumber)))
 }
  }
}
