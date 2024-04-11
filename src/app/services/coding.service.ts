import { Injectable } from "@angular/core";
import { Combination } from "../types";

@Injectable({
  providedIn: "root",
})
export class CodingService {
  public disableStepByStep: boolean = true;
  public disableLearning: boolean = true;
  public disablePDF: boolean = true;
  constructor() {}

  public convert(message: string, combination: Combination): string {
    const { fromEncoding, toEncoding } = combination;
    if(fromEncoding == "text" || fromEncoding == "ascii" || fromEncoding == "utf8" || fromEncoding == "iso8859"){
    return this.convertTextMessage(message, combination);
    }
    else{
      return this.convertBinaryMessage(message, combination);
    }
  }

  private convertTextMessage( input: string, combination: Combination): string {
    const { fromEncoding, toEncoding } = combination;

    if (fromEncoding === "text" && toEncoding === "ascii") {
      return this.textToASCII(input);
    } else if (fromEncoding === "text" && toEncoding === "utf8") {
      return  this.textToUtf8(input);
    } else if (fromEncoding === "text" && toEncoding === "iso8859") {
      return this.textToIso8859(input);
    } else if (fromEncoding === "iso8859" && toEncoding === "text") {
      return this.iso8859ToText(input);
    } else if (fromEncoding === "iso8859" && toEncoding === "ascii") {
      let message;
      message = this.iso8859ToText(input);
      return this.textToASCII(message);
    } else if (fromEncoding === "iso8859" && toEncoding === "utf8") {
      let message;
      message = this.iso8859ToText(input);
      return this.textToUtf8(message);
    } else if (fromEncoding === "ascii" && toEncoding === "text") {
      return this.AsciiToText(input);
    } else if (fromEncoding === "ascii" && toEncoding === "utf8") {
      let message;
      message = this.AsciiToText(input);
      return this.textToUtf8(message);
    } else if (fromEncoding === "ascii" && toEncoding === "iso8859") {
      let message;
      message = this.AsciiToText(input);
      return this.textToIso8859(message);
    } else if (fromEncoding === "utf8" && toEncoding === "text") {
      return this.utf8ToText(input);
    } else if (fromEncoding === "utf8" && toEncoding === "ascii") {
      let message;
      message = this.utf8ToText(input);
      return this.textToASCII(message);
    } else if (fromEncoding === "utf8" && toEncoding === "iso8859") {
      let message;
      message = this.utf8ToText(input);
      return this.textToIso8859(message);
    } else {
      throw new Error("Unsupported encoding combination");
    }
  }

  private textToASCII(message: string): string {
    return message
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(",");
  }

  private AsciiToText(message: string): string {
    const asciiArray = message.split(",").map(Number);
    return String.fromCharCode(...asciiArray);
  }

  private utf8ToText(message: string): string {
    const decoder = new TextDecoder("utf-8");
    const numbersArray: number[] = message.split(",").map(Number);
    const decodeMessage: Uint8Array = new Uint8Array([...numbersArray]);
    return decoder.decode(decodeMessage);
    
  }

  private textToUtf8(message: string): string {
    return new TextEncoder().encode(message).toString();
  }

  private textToIso8859(message: string): string {
    const encoder = new TextEncoder();
    const uint8Array = encoder.encode(message);
    return String.fromCharCode.apply(null, Array.from(uint8Array));
  }

  private iso8859ToText(message: string): string {
    const decoder = new TextDecoder("latin1");
    const numbersArray: number[] = message.split(",").map(Number);
    const decodeMessage: Uint8Array = new Uint8Array(numbersArray);
    return decoder.decode(decodeMessage);
  }


  private convertBinaryMessage( input: string, combination: Combination): string {
    return "";
  }
}
