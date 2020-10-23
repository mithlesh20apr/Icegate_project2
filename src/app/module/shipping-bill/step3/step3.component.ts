import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ShippingBillService } from '../service/shipping-bill.service';
import {ValidatorsService} from '../../common/service/validators.service'

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step3Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step3Component),
      multi: true
    }
  ]
})
export class Step3Component implements OnInit {

  shippingBillStepThree: FormGroup;
  private formSumitAttempt: boolean;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.shippingBillStepThree = this._formBuilder.group({
      invoice_currency_code:['', [Validators.maxLength(3), ]],
      currency_name:['', [Validators.maxLength(20), ]],
      unit_in_rs:['', [Validators.maxLength(7), Validators.pattern("^[0-9]+$")]],
      rate:['', [Validators.maxLength(9), Validators.pattern("^[0-9]+$")]],
      effective_date:['', ],
      whether_standard_currency:['', [Validators.required, Validators.maxLength(1), ]],
      amendment_type:['', [Validators.maxLength(1), ]],
      amendment_no:['', [Validators.maxLength(7), Validators.pattern("^[0-9]+$")]],
      amendment_date:['', ],
  });
}
 // validation code
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.shippingBillStepThree.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.shippingBillStepThree.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.shippingBillStepThree.disable() : this.shippingBillStepThree.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.shippingBillStepThree.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}


// check validation when you click the continue buttons
isFieldValid(field: string) {
  return (
    (!this.shippingBillStepThree.get(field).valid && this.shippingBillStepThree.get(field).touched) ||
    (this.shippingBillStepThree.get(field).untouched && this.formSumitAttempt)
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
  console.log(this.shippingBillStepThree.value);

  // stepper.next();
  this.formSumitAttempt = true;
  if (this.shippingBillStepThree.valid) {
    console.log('form submitted');
    
  } else {
    console.log('err');

  }
}
}
