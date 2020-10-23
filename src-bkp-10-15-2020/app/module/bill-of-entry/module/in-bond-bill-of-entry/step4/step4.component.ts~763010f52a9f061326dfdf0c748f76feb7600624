import { Component, OnInit, Input,forwardRef } from '@angular/core';
import { FormGroup,FormControl, Validator, FormBuilder,Validators,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';
@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css'],
  providers: [
    {
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(() => Step4Component),
   multi: true
 },
  {
   provide: NG_VALIDATORS,
   useExisting: forwardRef(() => Step4Component),
   multi: true
 }
  ]
})
export class Step4Component implements OnInit,ControlValueAccessor,Validator  {
  panelOpenState = false;
  isLinear = false;
  @Input() index: number;
  inBondFormStep4: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.inBondFormStep4=this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
      misc_charge_code:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      misc_description:['',[Validators.required,Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      misc_charges:['',[Validators.maxLength(10),Validators.pattern("[0-9]+$")]],
      misc_rate:['',[Validators.maxLength(3),Validators.pattern("[0-9]+$")]]
    })
  }
  
  // communication between part to child compoentent code for form data saving in main in-bound-bill-of-entry part code
 
  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.inBondFormStep4.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.inBondFormStep4.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
   //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.inBondFormStep4.disable() : this.inBondFormStep4.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null{
   // console.log("Consignment Info validation", c);
    return this.inBondFormStep4.valid ? null : { invalidForm: {valid: false, message: "Step1 fields are invalid"}};
  }

}
