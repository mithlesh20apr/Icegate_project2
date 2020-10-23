import { Component, forwardRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';
@Component({
  selector: 'app-step10',
  templateUrl: './step10.component.html',
  styleUrls: ['./step10.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step10Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step10Component),
      multi: true
    }
  ]  

})
export class Step10Component implements OnInit {
  panelOpenState = false;
  isLinear = false;
  inBondFormStep10: FormGroup;
  private formSumitAttempt: boolean;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.inBondFormStep10 = this._formBuilder.group({
      igm_no: ['', [Validators.required, Validators.maxLength(7),ValidatorsService.numberValidator]],
      igm_date: ['', Validators.required],
      lcl_fcl: ['', [Validators.required, Validators.maxLength(1)]],
      container_number: ['', [Validators.required, Validators.maxLength(11)]],
      seal_number: ['', [Validators.required, Validators.maxLength(10)]],
      truck_number: ['', Validators.maxLength(20)],
    })
  }
 // validation code
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.inBondFormStep10.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.inBondFormStep10.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.inBondFormStep10.disable() : this.inBondFormStep10.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.inBondFormStep10.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}
  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.inBondFormStep10.get(field).valid && this.inBondFormStep10.get(field).touched) ||
      (this.inBondFormStep10.get(field).untouched && this.formSumitAttempt)
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
     if (this.inBondFormStep10.valid) {
       console.log('form submitted');
       
     }else{
       console.log('err');
     }
 }

}
