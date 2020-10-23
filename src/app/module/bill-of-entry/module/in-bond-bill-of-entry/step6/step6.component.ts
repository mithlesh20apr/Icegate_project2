import { Component, forwardRef, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service'
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step6Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step6Component),
      multi: true
    }
  ]  
})
export class Step6Component implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  inBondFormStep6: FormGroup;
  private formSumitAttempt: boolean;
  constructor(private _formBuilder: FormBuilder) { }

  private formSubmitAttempt: boolean;

  ngOnInit(): void {
    this.inBondFormStep6 = this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]],
      item_serial_number: ['', [Validators.required, Validators.maxLength(4), ValidatorsService.numberValidator]],
      item_serial_number_invoice: ['', [Validators.required, Validators.maxLength(4), ValidatorsService.numberValidator]],
      item_serial_number_rsp: ['', [ValidatorsService.numberValidator,Validators.maxLength(16) ]],
      rsp: ['', [Validators.required, Validators.maxLength(16), ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]],
      quantity: ['', [Validators.required, Validators.maxLength(16), ValidatorsService.Decimalcheck((/^\d*\.?\d{0,6}$/),16)]],
      description: ['', [Validators.required, Validators.maxLength(40)]],
      rsp_notification: ['', [Validators.maxLength(10)]],
      rsp_notification_sr_no: ['', [Validators.maxLength(10)]],
    })
  }
   // validation code
   public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.inBondFormStep6.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.inBondFormStep6.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.inBondFormStep6.disable() : this.inBondFormStep6.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.inBondFormStep6.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }
   // check validation when you click the continue buttons
   isFieldValid(field: string) {
    return (
      (!this.inBondFormStep6.get(field).valid && this.inBondFormStep6.get(field).touched) ||
      (this.inBondFormStep6.get(field).untouched && this.formSumitAttempt)
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
   if (this.inBondFormStep6.valid) {
     console.log('form submitted');
     
   }else{
     console.log('err');
   }
  }


 
}
