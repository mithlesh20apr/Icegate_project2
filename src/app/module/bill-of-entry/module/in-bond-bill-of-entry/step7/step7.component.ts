import { Component, forwardRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service'
@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step7Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step7Component),
      multi: true
    }
  ]  
})
export class Step7Component implements OnInit {
 
  panelOpenState = false;
  isLinear = false;
  inBondFormStep7: FormGroup;
  private formSumitAttempt: boolean;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inBondFormStep7=this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]],
      item_serial_number_invoice: ['', [Validators.required, Validators.maxLength(4),ValidatorsService.numberValidator]],
      bcd_notification:['',[Validators.required,Validators.maxLength(10)]],
      bcd_notification_sr_no: ['',[Validators.required,Validators.maxLength(10)]],
      exemption_required:['',[Validators.maxLength(1)]]
    })
  }
    
   // validation code
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  console.log(val)
  val && this.inBondFormStep7.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.inBondFormStep7.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.inBondFormStep7.disable() : this.inBondFormStep7.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.inBondFormStep7.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}
 // check validation when you click the continue buttons
 isFieldValid(field: string) {
  return (
    (!this.inBondFormStep7.get(field).valid && this.inBondFormStep7.get(field).touched) ||
    (this.inBondFormStep7.get(field).untouched && this.formSumitAttempt)
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
   if (this.inBondFormStep7.valid) {
     console.log('form submitted');
     
   }else{
     console.log('err');
   }
  }



}


