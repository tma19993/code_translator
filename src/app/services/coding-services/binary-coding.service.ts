import { Injectable } from "@angular/core";
import { TypeOfCoding } from "src/app/constants";
import { Combination } from "src/app/types";

@Injectable({
  providedIn: "root",
})
export class BinaryCodingService {
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
  constructor() {}

  public convertBinaryMessage(input: string, combination: Combination): string {
    const { fromEncoding, toEncoding } = combination;
    if (
      fromEncoding === TypeOfCoding.binary &&
      toEncoding === TypeOfCoding.gray
    ) {
      return this.binaryToGray(input);
    } else if (
      fromEncoding === TypeOfCoding.number &&
      toEncoding === TypeOfCoding.bcd
    ) {
      return this.numberToBCD(input);
    } else if (
      fromEncoding === TypeOfCoding.number &&
      toEncoding === TypeOfCoding.sevenSegment
    ) {
      return this.numberToSevenSegment(input);
    } else if (
      fromEncoding === TypeOfCoding.gray &&
      toEncoding === TypeOfCoding.binary
    ) {
      return this.grayToBinary(input);
    } else if (
      fromEncoding === TypeOfCoding.bcd &&
      toEncoding === TypeOfCoding.number
    ) {
      return this.BCDToNumber(input);
    } else if (
      fromEncoding === TypeOfCoding.sevenSegment &&
      toEncoding === TypeOfCoding.number
    ) {
      return this.sevenSegmentToNumber(input);
    } else {
      throw new Error("Unsupported conversion combination");
    }
  }
  public binaryToGraySingleChar(prevBit: string, currentBit: string):string{
    return prevBit === currentBit ? "0" : "1";
  }

  public grayToBinarySingleChar(prevBit: string, currentBit: string):string{
    return prevBit === "0" ? currentBit : currentBit === "1" ? "0" : "1";
  }

  public numberToSevenSegmentSingleChar(i: number):string{
    return this.patterns[i]
  }
  
  public sevenSegmentToNumberSingleChar(message: string): number {
    return this.patterns.indexOf(message);
  }

  private binaryToGray(message: string): string {
    let result = "";
    let prevBit = "0";
    for (let i = 0; i < message.length; i++) {
      const currentBit = message[i];
      result += this.binaryToGraySingleChar(prevBit,currentBit);
      prevBit = currentBit;
    }
    return result;
  }

  private grayToBinary(message: string): string {
    let result = "";
    let prevBit = "0";
    for (let i = 0; i < message.length; i++) {
      const currentBit = message[i];
      result +=  this.grayToBinarySingleChar(prevBit,currentBit);
      prevBit = result[i];
    }
    return result;
  }

  private BCDToNumber(message: string): string {
    const groups = message.match(/.{1,4}/g);
    if (!groups) {
      throw new Error("Invalid binary input");
    }
    const bcdArray = groups.map((group) => parseInt(group, 2).toString(10));
    return bcdArray.join("");
  }

  private numberToBCD(message: string): string {
    const digits = message.split("");
    const binaryArray = digits.map((digit) =>
      parseInt(digit, 10).toString(2).padStart(4, "0")
    );
    return binaryArray.join(" ");
  }

  private numberToSevenSegment(message: string): string {
    const number = Number(message);
    if (number >= 0 && number <= 9) {
      return this.numberToSevenSegmentSingleChar(number);
    } else if (number >= 10) {
      let numbersArray: string[] = [];
      for (let i = 0; i < message.length; i++) {
        numbersArray.push(this.numberToSevenSegmentSingleChar(i));
      }
      return numbersArray.join(" ");
    } else {
      return "Invalid decimal input";
    }
  }

  private sevenSegmentToNumber(message: string): string {
    if (message.length < 7) {
      return "Invalid seven-segment input";
    }

    if (message.length == 7) {
      return this.patterns.indexOf(message).toString();
    } else if ( message.length % 7 == 0) {
      let splittedStrings: string[] = [];
      for (let i = 0; i < message.length; i += 7) {
        splittedStrings.push(this.patterns.indexOf(message.substr(i, 7)).toString());
      }
      return splittedStrings.join("");
    } else {
      return "Invalid seven-segment input";
    }
  }
}
