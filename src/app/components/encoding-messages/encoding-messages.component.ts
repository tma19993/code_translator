import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { dropdownCodeList } from "src/app/constants";
import { CodingService, DownloadFilesService } from "src/app/services";
import { Combination, DropdownCodeListType } from "src/app/types";

@Component({
  selector: "app-encoding-messages",
  templateUrl: "./encoding-messages.component.html",
  styleUrls: ["./encoding-messages.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EncodingMessagesComponent implements OnInit {

  @ViewChild("result", { read: ElementRef , static:false  })public resultElement: ElementRef;
  public form: FormGroup = new FormGroup({});
  public canCopyEncodedMessage: boolean = false;
  protected readonly dropdownCodeList: any[] | undefined = dropdownCodeList;
  public dropdownEncodeList: any[] | undefined = [];
  public submit: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private codingService: CodingService,
    private downloadFilesService: DownloadFilesService
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
    this.codingService.combinationCoding = conbination;
    this.downloadFilesService.resultElement = this.resultElement;
  }

  public switchMessages(): void {
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
      this.form.get("selectedCoded")?.enable();
      this.dropdownEncodeList = list?.encodeList;
    }
  }

  public validationBeforeSubmit(): boolean {
    const selectedEncode = this.form.get("selectedEncode")?.value;
    const encodeMessage = this.form.get("encodeMessage")?.value;
    const selectedCoded = this.form.get("selectedCoded")?.value;

    if (!selectedEncode || !encodeMessage || !selectedCoded) {
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
}
