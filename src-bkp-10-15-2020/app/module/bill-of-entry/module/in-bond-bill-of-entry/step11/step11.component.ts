import { Component, OnInit, Input,forwardRef } from '@angular/core';
import { FormGroup,FormControl, Validator, FormBuilder,Validators,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';
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
export class Step11Component implements OnInit,ControlValueAccessor,Validator {
  panelOpenState = false;
  isLinear = false;
  inBondFormStep11: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.inBondFormStep11=this._formBuilder.group({
      state_code:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[a-zA-Z]+$")]],
      commercial_tax_registration:['',[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-zA-Z]+$")]],
      commercial_tax_type:['',[Validators.required,Validators.maxLength(1),Validators.pattern("^[a-zA-Z]+$")]],

    })
  }
  
  // communication between part to child compoentent code for form data saving in main in-bound-bill-of-entry part code
 
  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.inBondFormStep11.setValue(val, { emitEvent: false });
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
  validate(c: AbstractControl): ValidationErrors | null{
   // console.log("Consignment Info validation", c);
    return this.inBondFormStep11.valid ? null : { invalidForm: {valid: false, message: "Step1 fields are invalid"}};
  }

}
