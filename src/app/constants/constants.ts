import { DropdownCodeListType } from '../types';

export const dropdownCodeList: DropdownCodeListType[] = [
  {
    name: 'UTF-8',
    code: 'utf8',
    encodeList: [
      {
        name: 'ASCII',
        code: 'ascii',
      },
      {
        name: 'ISO-8859',
        code: 'iso8859',
      },
      {
        name: 'Text',
        code: 'text',
      },
    ],
  },
  {
    name: 'ASCII',
    code: 'ascii',
    encodeList: [
      {
        name: 'UTF-8',
        code: 'utf8',
      },
      {
        name: 'ISO-8859',
        code: 'iso8859',
      },
      {
        name: 'Text',
        code: 'text',
      },
    ],
  },
  {
    name: 'ISO-8859',
    code: 'iso8859',
    encodeList: [
      {
        name: 'ASCII',
        code: 'ascii',
      },
      {
        name: 'UTF-8',
        code: 'utf8',
      },
      {
        name: 'Text',
        code: 'text',
      },
    ],
  },
  {
    name: 'Text',
    code: 'text',
    encodeList: [
      {
        name: 'ASCII',
        code: 'ascii',
      },
      {
        name: 'UTF-8',
        code: 'utf8',
      },
      {
        name: 'ISO-8859',
        code: 'iso8859',
      },
    ],
  },
  {
    name: 'Gray',
    code: 'gray',
    encodeList: [
      {
        name: 'Binary',
        code: 'binary',
      },
    ],
  },
  {
    name: 'BCD',
    code: 'bcd',
    encodeList: [
      {
        name: 'Number',
        code: 'number',
      },
    ],
  },
  {
    name: '7 Segment',
    code: '7segment',
    encodeList: [
      {
        name: 'Number',
        code: 'number',
      },
    ],
  },
  {
    name: 'Binary',
    code: 'binary',
    encodeList: [
      {
        name: 'Gray',
        code: 'gray',
      }
    ],
  },
  {
    name: 'Number',
    code: 'number',
    encodeList: [
      {
        name: 'BCD',
        code: 'bcd',
      },
      {
        name: '7 Segment',
        code: '7segment',
      },
    ],
  },
];
