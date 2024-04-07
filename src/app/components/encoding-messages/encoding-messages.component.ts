import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dropdownCodeList } from 'src/app/constants';
import { CodingService } from 'src/app/services';
import { DropdownCodeListType } from 'src/app/types';

@Component({
  selector: 'app-encoding-messages',
  templateUrl: './encoding-messages.component.html',
  styleUrls: ['./encoding-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EncodingMessagesComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public canCopyEncodedMessage: boolean = false;
  public dropdownCodeList: any[] | undefined = dropdownCodeList;
  public dropdownEncodeList: any[] | undefined = [];
  public submit: boolean = false;

  constructor(private formBuilder: FormBuilder,private codingService: CodingService) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      selectedEncode: [null, Validators.required],
      encodeMessage: ['', Validators.required],
      selectedCoded: [{ value: null, disabled: true }, Validators.required],
      codedMessage: [{ value: '', disabled: true }],
    });
  }

  public onSubmit(): void {
    this.submit = true;
   if(this.form.valid){
    this.codingService.disablePDF = false;
    if(this.form.value.selectedEncode !==''){
      this.codingService.disableLearning = false;
    }
    if (this.form.value.encodeMessage !== ''){
      this.form.get('codedMessage')?.enable();
      this.codingService.disableStepByStep = false;
     
    }
   }
      
    // tutaj odwołujemy się do odpowiednich danych wybranych do kodwania 
  }

  public switchMessages(): void {
    this.form.controls['encodeMessage'].setValue(
      this.form.controls['codedMessage'].value
    );
    this.form.controls['codedMessage'].setValue('');
  }

  public changeCodedList( list: DropdownCodeListType): void{
    if(this.form.value.selectedEncode !==''){
      this.form.get('selectedCoded')?.enable();
      this.dropdownEncodeList = list.encodeList;
    }
      
  }

}
