import { DictionaryType } from "./dictionary.type";

export type DropdownCodeListType = DictionaryType & {
    encodeList?: DropdownCodeListType[]
}