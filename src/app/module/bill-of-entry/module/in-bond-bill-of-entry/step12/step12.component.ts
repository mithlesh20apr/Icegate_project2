import { Component, forwardRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';
@Component({
  selector: 'app-step12',
  templateUrl: './step12.component.html',
  styleUrls: ['./step12.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step12Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step12Component),
      multi: true
    }
  ]
})
export class Step12Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  inBondFormStep12: FormGroup;
  private formSumitAttempt: boolean;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inBondFormStep12=this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]],
      item_serial_number: ['', [Validators.required, Validators.maxLength(4), ValidatorsService.numberValidator]],
      decleration_type:['',[Validators.required,Validators.maxLength(1)]],
      decleration_number:['',[Validators.maxLength(7),ValidatorsService.numberValidator]],
      decleration_date:[''],
      statement_type:['',[Validators.required,Validators.maxLength(3)]],
      statement_code:['',Validators.maxLength(7)],
      statement_text:['',Validators.maxLength(4000)],
    })
  }


  // validation code
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.inBondFormStep12.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.inBondFormStep12.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.inBondFormStep12.disable() : this.inBondFormStep12.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.inBondFormStep12.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}
   // check validation when you click the continue buttons
   isFieldValid(field: string) {
    return (
      (!this.inBondFormStep12.get(field).valid && this.inBondFormStep12.get(field).touched) ||
      (this.inBondFormStep12.get(field).untouched && this.formSumitAttempt)
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
     if (this.inBondFormStep12.valid) {
       console.log('form submitted');
       
     }else{
       console.log('err');
     }
 }

}
