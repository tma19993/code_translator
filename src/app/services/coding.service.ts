import { Injectable } from "@angular/core";
import { Combination } from "../types";
import { TextCodingService, BinaryCodingService } from "./coding-services";

@Injectable({
  providedIn: "root",
})
export class CodingService {
  public disableStepByStep: boolean = true;
  public disableLearning: boolean = true;
  public disablePDF: boolean = true;
  public combinationCoding: Combination;
  constructor(private textCodingService: TextCodingService, private binaryCodingService: BinaryCodingService) {}

  public convert(message: string, combination: Combination): string {
    const { fromEncoding } = combination;
    if(fromEncoding == "text" || fromEncoding == "ascii" || fromEncoding == "utf8" || fromEncoding == "iso8859"){
    return this.textCodingService.convertTextMessage(message, combination);
    }
    else {
      return this.binaryCodingService.convertBinaryMessage(message, combination);
    }
  }

}
