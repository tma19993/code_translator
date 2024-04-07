import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CodingService {
  public disableStepByStep: boolean = true; 
  public disableLearning: boolean = true;
  public disablePDF: boolean = true;
  constructor() {}

  public result(): void {}

  public learning(): void {}

  public stepByStep(): void {}
}
