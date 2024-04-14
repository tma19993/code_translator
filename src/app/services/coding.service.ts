import { Injectable } from "@angular/core";
import { Combination } from "../types";
import { TextCodingService, BinaryCodingService } from "./coding-services";
import { DownloadFilesService } from "./download-files.service";
import { TypeOfCoding } from "../constants";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class CodingService {
  public disableStepByStep: boolean = true;
  public disableLearning: boolean = true;
  public disablePDF: boolean = true;
  public combinationCoding: Combination;
  public message:string = "";
  constructor(private textCodingService: TextCodingService, private binaryCodingService: BinaryCodingService) {}

  public convert(message: string, combination: Combination): string {
    this.message = message;
    const { fromEncoding } = combination;
    if(fromEncoding == "text" || fromEncoding == "ascii" || fromEncoding == "utf8" || fromEncoding == "iso8859"){
    return this.textCodingService.convertTextMessage(message, combination);
    }
    else {
      return this.binaryCodingService.convertBinaryMessage(message, combination);
    }
  }
}
