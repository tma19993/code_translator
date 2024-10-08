import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { TypeOfCoding, dropdownCodeList } from "src/app/constants";
import { CodingService, DownloadFilesService } from "src/app/services";
import { Combination, DropdownCodeListType } from "src/app/types";
import { encodeMessageValidator } from "src/app/validators/encode-message-validator";

@Component({
  selector: "app-encoding-messages",
  templateUrl: "./encoding-messages.component.html",
  styleUrls: ["./encoding-messages.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EncodingMessagesComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  public canCopyEncodedMessage: boolean = false;
  public sevenSegmentNumber: string;
  protected readonly dropdownCodeList: any[] | undefined = dropdownCodeList;
  public dropdownEncodeList: any[] | undefined = [];
  public submit: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private codingService: CodingService,
    private downloadFilesService: DownloadFilesService,
    private translate: TranslateService
  ) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        selectedEncode: [null, Validators.required],
        encodeMessage: ["", Validators.required],
        selectedCoded: [{ value: null, disabled: true }, Validators.required],
        codedMessage: [{ value: "", disabled: true }],
      }
    );
    this.valueChanges();
  }

  public onSubmit(): void {
    this.beforeSubmit();
    const conbination: Combination = {
      fromEncoding: this.form.controls["selectedEncode"].value.code,
      toEncoding: this.form.controls["selectedCoded"].value.code,
    };
    this.form.controls["codedMessage"].setValue(
      this.codingService.convert(
        this.form.controls["encodeMessage"].value,
        conbination
      )
    );
    if(conbination.toEncoding == TypeOfCoding.sevenSegment) this.sevenSegmentNumber = this.form.controls["codedMessage"].value;
    this.codingService.combinationCoding = conbination;
    this.downloadFilesService.resultElement = `${this.translate.instant("result.inputData")}: ${this.form.get("encodeMessage")?.value}\n${this.translate.instant("result.result")}: ${this.form.get("codedMessage")?.value}`;
    this.downloadFilesService.combination = conbination;
  }

  public switchMessages(): void {
    this.disableMenuButtons();
    this.searchCodeList();
    this.form.controls["encodeMessage"].setValue(
      this.form.controls["codedMessage"].value
    );
    this.form.controls["codedMessage"].setValue("");
  }

  public selectedCodedChange(): void { 
    this.form.controls["codedMessage"].setValue("");
  }

  public changeCodedList(list: DropdownCodeListType): void {
    if (this.form.value.selectedEncode !== "") {
      this.disableMenuButtons();
      this.form.get("codedMessage")?.disable();
      this.form.get("selectedCoded")?.enable();
      this.dropdownEncodeList = list?.encodeList;
    }
  }

  public checkIsFormEmpty(): boolean {
    const selectedEncode = this.form.get("selectedEncode")?.value;
    const encodeMessage = this.form.get("encodeMessage")?.value;
    const selectedCoded = this.form.get("selectedCoded")?.value;
    if (!selectedEncode || !encodeMessage || !selectedCoded || !this.form.valid) {
      return true;
    }
    return false;
  }

  private beforeSubmit(): void {
    this.submit = true;
    if (this.form.valid) {
      this.codingService.disablePDF = false;
      if (this.form.value.selectedEncode !== "") {
        this.codingService.disableLearning = false;
      }
      if (this.form.value.encodeMessage !== "") {
        this.form.get("codedMessage")?.enable();
        this.codingService.disableStepByStep = false;
      }
    } else return;
  }

  private searchCodeList(): void {
    const selectedEncode = this.form.controls["selectedEncode"].value;
    this.form.controls["selectedEncode"].setValue(
      this.dropdownCodeList?.find(
        (item) => item.code == this.form.controls["selectedCoded"].value.code
      )
    );
    this.changeCodedList(this.form.controls["selectedEncode"].value);
    this.form.controls["selectedCoded"].setValue(
      this.dropdownEncodeList?.find((item) => item.code == selectedEncode.code)
    );
  }

  private disableMenuButtons(): void {
    this.codingService.disablePDF = true;
    this.codingService.disableStepByStep = true;
    this.codingService.disableLearning = true;
  }

  private valueChanges(): void {
    this.form.get("selectedEncode")?.valueChanges.subscribe(value => {
      const selectedEncodeControl = this.form.get("encodeMessage");
      if (value.code === TypeOfCoding.binary || value.code === TypeOfCoding.gray) {
        selectedEncodeControl?.setValidators(encodeMessageValidator(TypeOfCoding.binary));
      } else if (value.code === TypeOfCoding.number) {
        this.form.get("selectedCoded")?.valueChanges.subscribe(selectedCoded => {
          if (selectedCoded?.code ==  TypeOfCoding.sevenSegment) selectedEncodeControl?.setValidators(encodeMessageValidator(TypeOfCoding.number, TypeOfCoding.sevenSegment));
          else selectedEncodeControl?.setValidators(encodeMessageValidator(TypeOfCoding.number)); 
        })
      } else if ( value.code === TypeOfCoding.ascii || value.code === TypeOfCoding.iso8859 || value.code === TypeOfCoding.utf8) {
        selectedEncodeControl?.setValidators(encodeMessageValidator(TypeOfCoding.number));
      } else if (value.code === TypeOfCoding.text) {
        selectedEncodeControl?.setValidators(encodeMessageValidator(TypeOfCoding.text));
      } else if (value.code === TypeOfCoding.bcd) {
        selectedEncodeControl?.setValidators(encodeMessageValidator(TypeOfCoding.bcd));
      } else if (value.code === TypeOfCoding.sevenSegment) {
        selectedEncodeControl?.setValidators(encodeMessageValidator(TypeOfCoding.sevenSegment));
      } 
      selectedEncodeControl?.updateValueAndValidity();
    });
  }

}
