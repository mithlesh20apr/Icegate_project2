import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup,FormControl, Validator, FormBuilder,Validators,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';
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
export class Step8Component implements OnInit,ControlValueAccessor,Validator  {
  panelOpenState = false;
  isLinear = false;
  inBondFormStep8: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inBondFormStep8 = this._formBuilder.group({
      bond_number: ['', [Validators.maxLength(10), Validators.pattern("[0-9]+$")]],
      bond_code: ['', [Validators.maxLength(2), Validators.pattern("[^[0-9a-zA-Z]+$")]],
      bond_port: ['', [Validators.maxLength(6), Validators.pattern("^[0-9a-zA-Z]+$")]],
      bond:['', Validators.required], 
      certificate_number: ['', [Validators.required, Validators.maxLength(30), Validators.pattern("^[0-9a-zA-Z]+$")]],
      certificate_date: ['', Validators.required],
      certificate_type: ['', [Validators.required, Validators.maxLength(2), Validators.pattern("^[0-9a-zA-Z]+$")]],
    })
  }

  // communication between part to child compoentent code for form data saving in main in-bound-bill-of-entry part code
 
  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.inBondFormStep8.setValue(val, { emitEvent: false });
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
  validate(c: AbstractControl): ValidationErrors | null{
   // console.log("Consignment Info validation", c);
    return this.inBondFormStep8.valid ? null : { invalidForm: {valid: false, message: "Step1 fields are invalid"}};
  }

}
