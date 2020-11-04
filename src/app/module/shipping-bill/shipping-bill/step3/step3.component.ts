import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ShippingBillService } from '../service/shipping-bill.service';
import {ValidatorsService} from '../../common/service/validators.service'
import Swal from 'sweetalert2';
import {TooltipPosition} from '@angular/material/tooltip';
import { MatRadioChange } from '@angular/material/radio';

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
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  private formSumitAttempt: boolean;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.shippingBillStepThree = this._formBuilder.group({
      invoice_currency_code:['', [Validators.maxLength(3), ]],
      currency_name:['', [Validators.maxLength(20), ]],
      unit_in_rs:['', [Validators.maxLength(7), ValidatorsService.numberValidator]],
      rate:['', [Validators.maxLength(9), ValidatorsService.numberValidator]],
      effective_date:['', ],
      whether_standard_currency:['', [Validators.required, Validators.maxLength(1), ]],
      // amendment_type:['', [Validators.maxLength(1), ]],
      // amendment_no:['', [Validators.maxLength(7), ValidatorsService.numberValidator]],
      // amendment_date:['', ],
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
  return this.shippingBillStepThree.valid ? null : { invalidForm: { valid: false, message: "Step 3 fields are invalid" } };
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
  // console.log(this.shippingBillStepThree.valid);
  // console.log(this.shippingBillStepThree.value);
  // console.log();
  if (this.shippingBillStepThree.valid === true) {
    this.shippingBillStepThree.value
    Swal.fire({
      title: 'Step 3 completed',
      text: "Please click next for other step or click cancel",
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Next &nbsp; &#8594;'
    }).then((result) => {
      if (result.isConfirmed) {
        let element:HTMLElement = document.getElementById('save_continues') as HTMLElement;
        element.click();
      }
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Required Validation is left. Please check',
    }).then((result) =>{
      this.formSumitAttempt = true
    })

  }
}
}
