import { Component, OnInit,ViewChild,Input,forwardRef,Output,EventEmitter } from '@angular/core';
import { FormGroup,FormControl, Validator, FormBuilder,Validators,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
  providers: [
    {
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(() => Step2Component),
   multi: true
 },
  {
   provide: NG_VALIDATORS,
   useExisting: forwardRef(() => Step2Component),
   multi: true
 }
]
})
export class Step2Component implements OnInit,ControlValueAccessor,Validator  {

  panelOpenState = false;
  isLinear = false;
  inBondFormStep2: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.inBondFormStep2 = this._formBuilder.group ({
      currency_code:['',[Validators.required,Validators.maxLength(3)]],
      standard_currency:['',[Validators.required,Validators.maxLength(1)]],
      unit_in_rs:['',[Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
      rate:['',[Validators.maxLength(9),Validators.pattern("[0-9]+$")]],
      effective_date:[''],
      bankname_non_standard_currency:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      certificate_number:['',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]],
      certificate_date:[''],
      certificate_type:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
    });

  }

  // validation codes
  
  // validation code
  public onTouched: () => void = () => {};


  writeValue(val: any): void {
    console.log(val);
    val && this.inBondFormStep2.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
  //  console.log("on change");
    this.inBondFormStep2.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
  //  console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.inBondFormStep2.disable() : this.inBondFormStep2.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null{
    //console.log("Consignment Info validation", c);
    return this.inBondFormStep2.valid ? null : { invalidForm: {valid: false, message: "Step2 fields are invalid"}};
  }

}
