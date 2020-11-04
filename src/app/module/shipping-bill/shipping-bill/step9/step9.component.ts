import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ShippingBillService } from '../service/shipping-bill.service';
import {ValidatorsService} from '../../common/service/validators.service'
import Swal from 'sweetalert2';
import {TooltipPosition} from '@angular/material/tooltip';
import { MatRadioChange } from '@angular/material/radio';
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
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  private formSumitAttempt: boolean;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.shippingBillStepNine = this._formBuilder.group({
      site_id: ['', Validators.maxLength(6)],
      invoice_serial_no: ['', [Validators.maxLength(5), ValidatorsService.numberValidator]],
      item_serial_no: ['', [Validators.maxLength(4), ValidatorsService.numberValidator]],
      serial_no: ['', [Validators.required, Validators.maxLength(4), ValidatorsService.numberValidator]],
      info_type: ['',[Validators.required, Validators.maxLength(3)]],
      info_qualifier: ['', [Validators.required,Validators.maxLength(100)]],
      info_code: ['',[Validators.required, Validators.maxLength(100)]],
      info_text: ['', [Validators.required, Validators.maxLength(100)]],
      info_msr: ['', [Validators.maxLength(16), ValidatorsService.numberValidator]],
      info_uqc: ['', [Validators.required, Validators.maxLength(100)]],
      constituent_element_name: ['', [Validators.required, Validators.maxLength(256)]],
      constituent_code: ['', [Validators.required, Validators.maxLength(17)]],
      constituent_percentage: ['', [Validators.required, Validators.maxLength(6), ValidatorsService.numberValidator]],
      constituent_yield_percentage: ['', [Validators.required, Validators.maxLength(6), ValidatorsService.numberValidator]],
      active_ingredient: ['', Validators.required],
      production_batch_identifier: ['', [Validators.required, Validators.maxLength(17)]],
      production_batch_quantity: ['', [Validators.required, Validators.maxLength(16), ValidatorsService.numberValidator]],
      unit_quantity_code:['', [Validators.required, Validators.maxLength(3)]],
      manufacturing_date: ['', Validators.required],
      expiry_date: ['', Validators.required],
      best_before: ['', Validators.required],
      // control_type_code:['',Validators.maxLength(17)],
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
  return this.shippingBillStepNine.valid ? null : { invalidForm: { valid: false, message: "Step 7 fields are invalid" } };
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
  // console.log(this.shipingBillStepNine.valid);
  // console.log(this.shipingBillStepNine.value);
  // console.log();
  if (this.shippingBillStepNine.valid === true) {
    this.shippingBillStepNine.value
    Swal.fire({
      title: 'Step 7 completed',
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
