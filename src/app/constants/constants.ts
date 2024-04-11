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
        name: 'Binary',
        code: 'binary',
      },
    ],
  },
  {
    name: '7 Segment',
    code: '7segment',
    encodeList: [
      {
        name: 'Binary',
        code: 'binary',
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
      },
      {
        name: '7 Segment',
        code: '7segment',
      },
      {
        name: 'BCD',
        code: 'bcd',
      },
    ],
  },
];
