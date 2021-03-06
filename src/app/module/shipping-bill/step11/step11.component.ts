import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ShippingBillService } from '../service/shipping-bill.service';
import {ValidatorsService} from '../../common/service/validators.service'
import Swal from 'sweetalert2';
import {TooltipPosition} from '@angular/material/tooltip';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-step11',
  templateUrl: './step11.component.html',
  styleUrls: ['./step11.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step11Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step11Component),
      multi: true
    }
  ]
})
export class Step11Component implements OnInit {
  private formSumitAttempt: boolean;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  shipingBillStepEleven: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.shipingBillStepEleven = this._formBuilder.group({
      invoice_serial_no: ['', [Validators.maxLength(5), ValidatorsService.numberValidator]],
      item_serial_no: ['', [Validators.maxLength(4), ValidatorsService.numberValidator]],
      serial_no: ['', [Validators.required, Validators.maxLength(4), ValidatorsService.numberValidator]],
      be_site:['',[Validators.required,Validators.maxLength(6)]],
      be_no: ['', [Validators.required,Validators.maxLength(7), ValidatorsService.numberValidator]],
      be_date:['',Validators.required],
      be_invoice_no:['', [Validators.required,Validators.maxLength(5), ValidatorsService.numberValidator]],
      be_item:['', [Validators.required,Validators.maxLength(4), ValidatorsService.numberValidator]],
      manual_be:['',Validators.required],
      be_quantity_utilised:['', [Validators.required,Validators.maxLength(23), ValidatorsService.Decimalcheck((/^\d*\.?\d{0,6}$/),16)]],
      be_item_description:['',[Validators.required,Validators.maxLength(120)]],
      be_quantity:['', [Validators.required,Validators.maxLength(23), ValidatorsService.Decimalcheck((/^\d*\.?\d{0,6}$/),16)]],
      be_uqc:['',[Validators.required,Validators.maxLength(3)]],
      be_assessed_value:['', [Validators.required,Validators.maxLength(23), ValidatorsService.Decimalcheck((/^\d*\.?\d{0,6}$/),16)]],
      be_duty_paid:['', [Validators.required,Validators.maxLength(23), ValidatorsService.Decimalcheck((/^\d*\.?\d{0,6}$/),16)]],
      be_duty_payment_date:['',Validators.required],
      be_other_identifiable_parameter:['',[Validators.required,Validators.maxLength(250)]],
      be_assessed_value_claim:['', [Validators.required,Validators.maxLength(23), ValidatorsService.Decimalcheck((/^\d*\.?\d{0,6}$/),16)]],
      be_item_used:['',Validators.required],
      commisioner_permission:['',Validators.required],
      input_credit:['',Validators.required],
      personal_used:['',Validators.required],
      modvat_availed:['',Validators.required],
      modvat_repaid:['',Validators.required],
    });
  }
 // validation code
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.shipingBillStepEleven.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.shipingBillStepEleven.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.shipingBillStepEleven.disable() : this.shipingBillStepEleven.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.shipingBillStepEleven.valid ? null : { invalidForm: { valid: false, message: "Step 9 fields are invalid" } };
}


// check validation when you click the continue buttons
isFieldValid(field: string) {
  return (
    (!this.shipingBillStepEleven.get(field).valid && this.shipingBillStepEleven.get(field).touched) ||
    (this.shipingBillStepEleven.get(field).untouched && this.formSumitAttempt)
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
  // console.log(this.shipingBillStepEleven.valid);
  // console.log(this.shipingBillStepEleven.value);
  // console.log();
  if (this.shipingBillStepEleven.valid === true) {
    this.shipingBillStepEleven.value
    Swal.fire({
      title: 'Step 9 completed',
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
