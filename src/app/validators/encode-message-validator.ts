import { AbstractControl, ValidatorFn } from '@angular/forms';
import { TypeOfCoding } from '../constants';

export function encodeMessageValidator(type: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let pattern;
    if (type === TypeOfCoding.binary || type == TypeOfCoding.gray) {
      pattern = /^[01]+$/;
    } else if (type === TypeOfCoding.number ||  type === TypeOfCoding.ascii || type === TypeOfCoding.iso8859 || type === TypeOfCoding.utf8) {
      pattern = /^\d+$/;
    } else if (type === TypeOfCoding.text) {
      pattern = /^[\s\S]*$/;
    }  else if (type === TypeOfCoding.sevenSegment) {
      pattern = /^(?:[01]{7})+$/;
    } 
    else if (type === TypeOfCoding.bcd) {
      pattern = /^(?:[01]{4})+$/;
    } 
    else {
      throw new Error('Unsupported validation type');
    }

    const isValid = pattern.test(control.value);
    return isValid ? null : { 'encodeMessageError': true };
  };
}