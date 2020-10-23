import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service'
@Component({
  selector: 'app-step8',
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.css'],
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
  panelOpenState = false;
  isLinear = false;
  inBondFormStep8: FormGroup;
  private formSumitAttempt: boolean;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inBondFormStep8 = this._formBuilder.group({
      bond_number: ['', [Validators.maxLength(10), ValidatorsService.numberValidator]],
      bond_code: ['', [Validators.maxLength(2)]],
      bond_port: ['', [Validators.maxLength(6)]],
      bond:['', Validators.required], 
      certificate_number: ['', [Validators.required, Validators.maxLength(30)]],
      certificate_date: ['', Validators.required],
      certificate_type: ['', [Validators.required, Validators.maxLength(2)]],
    })
  }

   // validation code
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.inBondFormStep8.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.inBondFormStep8.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.inBondFormStep8.disable() : this.inBondFormStep8.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.inBondFormStep8.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}
 // check validation when you click the continue buttons
 isFieldValid(field: string) {
  return (
    (!this.inBondFormStep8.get(field).valid && this.inBondFormStep8.get(field).touched) ||
    (this.inBondFormStep8.get(field).untouched && this.formSumitAttempt)
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
   if (this.inBondFormStep8.valid) {
     console.log('form submitted');
     
   }else{
     console.log('err');
   }
}



}
