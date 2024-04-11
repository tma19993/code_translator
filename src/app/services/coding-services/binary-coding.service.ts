import { Injectable } from "@angular/core";
import { Combination } from "src/app/types";


@Injectable({
  providedIn: "root",
})
export class BinaryCodingService {
  constructor() {}

  public convertBinaryMessage( input: string, combination: Combination): string {
    
    const { fromEncoding, toEncoding } = combination;
    if (fromEncoding === "binary" && toEncoding === "gray") {
       return this.binaryToGray(input);
    } else if (fromEncoding === "binary" && toEncoding === "bcd") {
        return this.binaryToBCD(input);
    } else if (fromEncoding === "binary" && toEncoding === "7segment") {
        return this.binaryToSevenSegment(input);
    } else if (fromEncoding === "gray" && toEncoding === "binary") {
        return this.grayToBinary(input);
    } 
    else if (fromEncoding === "bcd" && toEncoding === "binary") {
        return this.BCDToBinary(input);
    } else if (fromEncoding === "7segment" && toEncoding === "binary") {
       return this.sevenSegmentToBinary(input);
    } else {
        throw new Error("Unsupported conversion combination");
    }
  }

  private binaryToGray(message: string): string {
    let result = "";
        let prevBit = "0";
        for (let i = 0; i < message.length; i++) {
            const currentBit = message[i];
            result += prevBit === currentBit ? "0" : "1";
            prevBit = currentBit;
        }
        return result;
  }

  private grayToBinary(message: string): string { 
    let result = "";
    let prevBit = "0";
    for (let i = 0; i < message.length; i++) {
        const currentBit = message[i];
        result += prevBit === "0" ? currentBit : currentBit === "1" ? "0" : "1";
        prevBit = result[i];
    }
    return result;
  }
  
  private binaryToBCD(message: string): string {
    const groups = message.match(/.{1,4}/g);
    if (!groups) {
      throw new Error("Invalid binary input");
    }
    const bcdArray = groups.map(group => parseInt(group, 2).toString(10));
    return bcdArray.join("");
  }

  private BCDToBinary(message: string): string {
    const digits = message.split("");
    const binaryArray = digits.map(digit => parseInt(digit, 10).toString(2).padStart(4, "0"));
    return binaryArray.join("");
  }

 private binaryToSevenSegment(message: string): string {
    const segments = [
        'abcdef', // 0
        'bc',     // 1
        'abdeg',  // 2
        'abcdg',  // 3
        'bcfg',   // 4
        'acdfg',  // 5
        'acdefg', // 6
        'abc',    // 7
        'abcdefg', // 8
        'abcdfg'   // 9
      ];

          let sevenSegmentCode = '';
          for (let i = 0; i < message.length; i++) {
            const binaryDigit = message[i];
            const segmentCode = segments[parseInt(binaryDigit, 2)];
            sevenSegmentCode += segmentCode;
          }
      
          return sevenSegmentCode;
  }

  
  private sevenSegmentToBinary(message: string): string {
    const segmentsToBinaryMap: Record<string, string> = {
        'abcdef': '0',
        'bc': '1',
        'abdeg': '2',
        'abcdg': '3',
        'bcfg': '4',
        'acdfg': '5',
        'acdefg': '6',
        'abc': '7',
        'abcdefg': '8',
        'abcdfg': '9'
      };

      let binaryCode = '';
      for (let i = 0; i < message.length; i += 7) {
        const segment = message.substr(i, 7);
        const binaryDigit = Object.keys(segmentsToBinaryMap).find(key => segmentsToBinaryMap[key] === segment);
        if (binaryDigit !== undefined) {
          binaryCode += binaryDigit;
        }
      }
  
      return binaryCode;
    }
  }

