import { Component, OnInit, Input,forwardRef } from '@angular/core';
import { FormGroup,FormControl, Validator, FormBuilder,Validators,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';
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
export class Step10Component implements OnInit,ControlValueAccessor,Validator {
  panelOpenState = false;
  isLinear = false;
  inBondFormStep10: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.inBondFormStep10 = this._formBuilder.group({
      igm_no: ['', [Validators.required, Validators.maxLength(7), Validators.pattern("[0-9]+$")]],
      igm_date: ['', Validators.required],
      lcl_fcl: ['', [Validators.required, Validators.maxLength(1), Validators.pattern("^[0-9a-zA-Z]+$")]],
      container_number: ['', [Validators.required, Validators.maxLength(11), Validators.pattern("^[0-9a-zA-Z]+$")]],
      seal_number: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9a-zA-Z]+$")]],
      truck_number: ['', [Validators.maxLength(20), Validators.pattern("^[0-9a-zA-Z]+$")]],
    })
  }
 
  // communication between part to child compoentent code for form data saving in main in-bound-bill-of-entry part code
 
  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.inBondFormStep10.setValue(val, { emitEvent: false });
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
  validate(c: AbstractControl): ValidationErrors | null{
   // console.log("Consignment Info validation", c);
    return this.inBondFormStep10.valid ? null : { invalidForm: {valid: false, message: "Step1 fields are invalid"}};
  }
}
