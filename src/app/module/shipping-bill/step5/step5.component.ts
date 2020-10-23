import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ShippingBillService } from '../service/shipping-bill.service';
import {ValidatorsService} from '../../common/service/validators.service'
@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step5Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step5Component),
      multi: true
    }
  ]
})
export class Step5Component implements OnInit {

  shippingBillstepFive: FormGroup;
  private formSumitAttempt: boolean;
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.shippingBillstepFive = this._formBuilder.group({
      // Depb details
      invoice_sr_number:['', [Validators.maxLength(2),Validators.pattern("^[0-9]+$")]],
      item_sr_number_in_invoice:['', [Validators.maxLength(4),Validators.pattern("^[0-9]+$")]],
      group_code:['', [Validators.required,Validators.maxLength(2)]],
      item_code:['', [Validators.required,Validators.maxLength(10)]],
      quantity:['', [Validators.maxLength(10),Validators.pattern("^[0-9]+$")]],
      amendment_type:['', [Validators.maxLength(1)]],
      amendment_no:['', [Validators.maxLength(7),Validators.pattern("^[0-9]+$")]],
      amendment_date:['', ],

      // depb parent details 
      sr_no:['', [Validators.maxLength(2),Validators.pattern("^[0-9]+$")]],
      unit_quantity_code:['', [Validators.required,Validators.maxLength(3)]],
      quantity_percentage:['', [Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
  });
  }
 // validation code
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.shippingBillstepFive.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.shippingBillstepFive.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.shippingBillstepFive.disable() : this.shippingBillstepFive.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.shippingBillstepFive.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}


// check validation when you click the continue buttons
isFieldValid(field: string) {
  return (
    (!this.shippingBillstepFive.get(field).valid && this.shippingBillstepFive.get(field).touched) ||
    (this.shippingBillstepFive.get(field).untouched && this.formSumitAttempt)
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
  console.log(this.shippingBillstepFive.value);

  // stepper.next();
  this.formSumitAttempt = true;
  if (this.shippingBillstepFive.valid) {
    console.log('form submitted');
    
  } else {
    console.log('err');

  }
}
}
