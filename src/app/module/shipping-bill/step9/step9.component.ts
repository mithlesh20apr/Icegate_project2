import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ShippingBillService } from '../service/shipping-bill.service';
import {ValidatorsService} from '../../common/service/validators.service'

@Component({
  selector: 'app-step9',
  templateUrl: './step9.component.html',
  styleUrls: ['./step9.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step9Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step9Component),
      multi: true
    }
  ]
})
export class Step9Component implements OnInit {

  shippingBillStepNine: FormGroup;
  private formSumitAttempt: boolean;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.shippingBillStepNine = this._formBuilder.group({
      site_id: ['', Validators.maxLength(6)],
      invoice_serial_no: ['', [Validators.maxLength(5), Validators.pattern("[0-9]*$")]],
      item_serial_no: ['', [Validators.maxLength(4), Validators.pattern("[0-9]*$")]],
      serial_no: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("[0-9]*$")]],
      info_type: ['',[Validators.required, Validators.maxLength(3)]],
      info_qualifier: ['', [Validators.required,Validators.maxLength(100)]],
      info_code: ['',[Validators.required, Validators.maxLength(100)]],
      info_text: ['', [Validators.required, Validators.maxLength(100)]],
      info_msr: ['', [Validators.maxLength(16), Validators.pattern("[0-9]*$")]],
      info_uqc: ['', [Validators.required, Validators.maxLength(100)]],
      constituent_element_name: ['', [Validators.required, Validators.maxLength(256)]],
      constituent_code: ['', [Validators.required, Validators.maxLength(17)]],
      constituent_percentage: ['', [Validators.required, Validators.maxLength(6), Validators.pattern("[0-9]*$")]],
      constituent_yield_percentage: ['', [Validators.required, Validators.maxLength(6), Validators.pattern("[0-9]*$")]],
      active_ingredient: ['', Validators.required],
      production_batch_identifier: ['', [Validators.required, Validators.maxLength(17)]],
      production_batch_quantity: ['', [Validators.required, Validators.maxLength(16), Validators.pattern("^[0-9]*$")]],
      unit_quantity_code:['', [Validators.required, Validators.maxLength(3)]],
      manufacturing_date: ['', Validators.required],
      expiry_date: ['', Validators.required],
      best_before: ['', Validators.required],
      control_type_code:['',Validators.maxLength(17)],
      control_location:['',[Validators.required,Validators.maxLength(17)]],
      control_start_date:['',Validators.required],
      control_end_date:['',Validators.required],
      control_result_code:['',[Validators.required,Validators.maxLength(17)]],
      control_result_text:['',Validators.maxLength(4000)],
      statement_type:['',[Validators.required,Validators.maxLength(3)]],
      statement_code:['',Validators.maxLength(7)],
      statement_text:['',[Validators.required,Validators.maxLength(4000)]],


    });
  }
// validation code
public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.shippingBillStepNine.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.shippingBillStepNine.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.shippingBillStepNine.disable() : this.shippingBillStepNine.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.shippingBillStepNine.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}


// check validation when you click the continue buttons
isFieldValid(field: string) {
  return (
    (!this.shippingBillStepNine.get(field).valid && this.shippingBillStepNine.get(field).touched) ||
    (this.shippingBillStepNine.get(field).untouched && this.formSumitAttempt)
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
  console.log(this.shippingBillStepNine.value);

  // stepper.next();
  this.formSumitAttempt = true;
  if (this.shippingBillStepNine.valid) {
    console.log('form submitted');
    
  } else {
    console.log('err');

  }
}
}
