import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ShippingBillService } from '../service/shipping-bill.service';
import {ValidatorsService} from '../../common/service/validators.service'

@Component({
  selector: 'app-step10',
  templateUrl: './step10.component.html',
  styleUrls: ['./step10.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step10Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step10Component),
      multi: true
    }
  ]
})
export class Step10Component implements OnInit {
  tabs = [1];
  tabs1= [1];
  tabs3=[1];
  selected = new FormControl(0);
  selected1 = new FormControl(0);
  selected3 = new FormControl(0);
  disableAddButton = false;
  private formSumitAttempt: boolean;
  shipingBillSStepTen: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.shipingBillSStepTen = this._formBuilder.group({
      invoice_serial_no: ['', [Validators.maxLength(5), Validators.pattern("[0-9]*$")]],
      item_serial_no: ['', [Validators.maxLength(4), Validators.pattern("[0-9]*$")]],
      serial_no: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("[0-9]*$")]],
      image_reference_number: ['', [Validators.required, Validators.maxLength(16)]],
      document_type_code: ['', [Validators.required, Validators.maxLength(6)]],
      document_issuing_party_code: ['', [Validators.maxLength(35)]],
      document_issuing_party_name_address1: ['', [Validators.maxLength(70)]],
      document_issuing_party_name_address2: ['', [Validators.maxLength(70)]],
      document_issuing_party_name_city: ['', [Validators.maxLength(35)]],
      document_issuing_party_name_pin: ['', [Validators.maxLength(10)]],
      document_reference_number: ['', [Validators.maxLength(17)]],
      place_of_issue: ['', [Validators.required, Validators.maxLength(35)]],
      document_issue_date: ['', Validators.required],
      document_expiry_date: ['',Validators.required],
      document_beneficiary_party_code: ['', Validators.maxLength(35)],
      document_beneficiary_party_name_address1: ['', Validators.maxLength(70)],
      document_beneficiary_party_name_address2: ['', Validators.maxLength(70)],
      document_beneficiary_party_name_city: ['', Validators.maxLength(35)],
      document_beneficiary_party_name_pin: ['', Validators.maxLength(10)],
      file_type: ['', [Validators.required, Validators.maxLength(5)]],
      icegate_user_id:['', [Validators.required,Validators.maxLength(15)]],
      document_issuing_party_name:['', [Validators.required,Validators.maxLength(70)]],
      document_beneficiary_party_name:['', [Validators.required,Validators.maxLength(70)]],
    });
  }
  addTab() {
    this.tabs.push(this.tabs.length);
    this.selected.setValue(this.tabs.length);
    if(this.tabs.length == 3){
      this.disableAddButton = true;
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    if(this.tabs.length < 3){
      this.disableAddButton = false;
    }
  }

  addTab1() {
    this.tabs1.push(this.tabs1.length);
    this.selected1.setValue(this.tabs1.length);
  }

  removeTab1(index: number) {
    this.tabs1.splice(index, 1);
  }

  addTab3() {
    this.tabs3.push(this.tabs3.length);
    this.selected3.setValue(this.tabs3.length);
  }
  removeTab3(index: number) {
    this.tabs3.splice(index, 1);
  }
 // validation code
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.shipingBillSStepTen.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.shipingBillSStepTen.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.shipingBillSStepTen.disable() : this.shipingBillSStepTen.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.shipingBillSStepTen.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}


// check validation when you click the continue buttons
isFieldValid(field: string) {
  return (
    (!this.shipingBillSStepTen.get(field).valid && this.shipingBillSStepTen.get(field).touched) ||
    (this.shipingBillSStepTen.get(field).untouched && this.formSumitAttempt)
  );
}

displayFieldCss(field: string) {
  return {
    'has-error': this.isFieldValid(field),
    'has-feedback': this.isFieldValid(field)
  };
}

// submit on save and continue sections
onSubmit() {
  console.log(this.shipingBillSStepTen.value);

  // stepper.next();
  this.formSumitAttempt = true;
  if (this.shipingBillSStepTen.valid) {
    console.log('form submitted');
    
  } else {
    console.log('err');

  }
}
}
