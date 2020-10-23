import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ShippingBillService } from '../service/shipping-bill.service';
import {ValidatorsService} from '../../common/service/validators.service'
@Component({
  selector: 'app-step8',
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step8Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step8Component),
      multi: true
    }
  ]
})
export class Step8Component implements OnInit {
  private formSumitAttempt: boolean;
  shipingBillStepEight:FormGroup;
  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.shipingBillStepEight=this._formBuilder.group({
      // Amendment details
      site_id:['',Validators.maxLength(6)],
      request_date:[''],
      request_letter_number:['',Validators.maxLength(10)],
      indicate_type_of_amendment:['',Validators.maxLength(15)],
      reason_for_amendment:['',Validators.maxLength(2000)],
      amendment_status:['',Validators.maxLength(1)],
      unique_number_generated:['',[Validators.maxLength(7),Validators.pattern("[0-9]*$")]],
      
      // Rosl details
      invoice_sr_number:['',[Validators.maxLength(2),Validators.pattern("[0-9]*$")]],
      item_sr_number_invoice:['',[Validators.maxLength(4),Validators.pattern("[0-9]*$")]],
      srno:['',[Validators.maxLength(2),Validators.pattern("[0-9]*$")]],
      item_code_str_directory:['',[Validators.required,Validators.maxLength(8)]],
      amendment_type:['',Validators.maxLength(1)],
      amendment_no:['',[Validators.maxLength(7),Validators.pattern("[0-9]*$")]],
      amendment_date:[''],

    })
  }

// validation code
public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.shipingBillStepEight.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.shipingBillStepEight.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.shipingBillStepEight.disable() : this.shipingBillStepEight.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.shipingBillStepEight.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}


// check validation when you click the continue buttons
isFieldValid(field: string) {
  return (
    (!this.shipingBillStepEight.get(field).valid && this.shipingBillStepEight.get(field).touched) ||
    (this.shipingBillStepEight.get(field).untouched && this.formSumitAttempt)
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
  console.log(this.shipingBillStepEight.value);

  // stepper.next();
  this.formSumitAttempt = true;
  if (this.shipingBillStepEight.valid) {
    console.log('form submitted');
    
  } else {
    console.log('err');

  }
}

}
