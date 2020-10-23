import { Component, forwardRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';

@Component({
  selector: 'app-step13',
  templateUrl: './step13.component.html',
  styleUrls: ['./step13.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step13Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step13Component),
      multi: true
    }
  ]
})
export class Step13Component implements OnInit {
  panelOpenState = false;
  isLinear = false;
  inBondFormStep13: FormGroup;
  private formSumitAttempt: boolean;
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inBondFormStep13 = this._formBuilder.group({

      invoice_serial_number: ['', [Validators.required, Validators.maxLength(5), ValidatorsService.numberValidator]],
      item_serial_number: ['', [Validators.required, Validators.maxLength(4), ValidatorsService.numberValidator]],
      decleration_type: ['', [Validators.required, Validators.maxLength(2)]],
      cha_license_number: ['', [Validators.maxLength(15)]],
      iec: ['', [Validators.maxLength(10)]],
      icegate_user_id: ['', [Validators.required, Validators.maxLength(15)]],
      image_reference_number: ['', [Validators.required, Validators.maxLength(16)]],
      document_type_code: ['', [Validators.required, Validators.maxLength(6)]],
      document_issuing_party_code: ['', [Validators.maxLength(35)]],
      document_issuing_party_name: ['', [Validators.required, Validators.maxLength(70)]],
      document_issuing_party_name_address1: ['', [Validators.maxLength(70)]],
      document_issuing_party_name_address2: ['', [Validators.maxLength(70)]],
      document_issuing_party_name_city: ['', [Validators.maxLength(35)]],
      document_issuing_party_name_pin: ['', [Validators.maxLength(10),ValidatorsService.numberValidator]],
      document_reference_number:['', Validators.maxLength(17)],
      place_of_issue:['', [Validators.required,Validators.maxLength(35)]],
      document_issue_date:['',Validators.required],
      document_expiry_date:[''],
      document_beneficary_party_code:['',Validators.maxLength(35)],
      document_beneficary_party_name:['', [Validators.required,Validators.maxLength(70)]],
      document_beneficary_party_name_address1:['', [Validators.maxLength(70)]],
      document_beneficary_party_name_address2:['', [Validators.maxLength(70)]],
      document_beneficary_party_name_city:['', Validators.maxLength(35)],
      document_beneficary_party_name_pin:['', [Validators.maxLength(10)]],
      file_type: ['', [Validators.required, Validators.maxLength(5)]],
    })
  }
 // validation code
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.inBondFormStep13.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.inBondFormStep13.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.inBondFormStep13.disable() : this.inBondFormStep13.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.inBondFormStep13.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}

    // check validation when you click the continue buttons
    isFieldValid(field: string) {
      return (
        (!this.inBondFormStep13.get(field).valid && this.inBondFormStep13.get(field).touched) ||
        (this.inBondFormStep13.get(field).untouched && this.formSumitAttempt)
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
      // stepper.next();
       this.formSumitAttempt = true;
       if (this.inBondFormStep13.valid) {
         console.log('form submitted');
         
       }else{
         console.log('err');
       }
   }
  

}
