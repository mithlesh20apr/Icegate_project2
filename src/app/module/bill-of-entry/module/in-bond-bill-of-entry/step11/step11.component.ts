import { Component, forwardRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-step11',
  templateUrl: './step11.component.html',
  styleUrls: ['./step11.component.css'],
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
  panelOpenState = false;
  isLinear = false;
  inBondFormStep11: FormGroup;
  private formSumitAttempt: boolean;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.inBondFormStep11=this._formBuilder.group({
      state_code:['',[Validators.required,Validators.maxLength(2)]],
      commercial_tax_registration:['',[Validators.required,Validators.maxLength(20)]],
      commercial_tax_type:['',[Validators.required,Validators.maxLength(1)]],

    })
  }
    // validation code
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.inBondFormStep11.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.inBondFormStep11.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.inBondFormStep11.disable() : this.inBondFormStep11.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.inBondFormStep11.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}
  
  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.inBondFormStep11.get(field).valid && this.inBondFormStep11.get(field).touched) ||
      (this.inBondFormStep11.get(field).untouched && this.formSumitAttempt)
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
     if (this.inBondFormStep11.valid) {
       console.log('form submitted');
       
     }else{
       console.log('err');
     }
 }

  

}
