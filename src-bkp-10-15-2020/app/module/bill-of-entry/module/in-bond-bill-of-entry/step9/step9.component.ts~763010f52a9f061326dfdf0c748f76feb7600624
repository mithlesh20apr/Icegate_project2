import { Component, OnInit, Input,forwardRef } from '@angular/core';
import { FormGroup,FormControl, Validator, FormBuilder,Validators,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';
@Component({
  selector: 'app-step9',
  templateUrl: './step9.component.html',
  styleUrls: ['./step9.component.css'],
  providers: [
    {
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(() => Step9Component),
   multi: true
 },
  {
   provide: NG_VALIDATORS,
   useExisting: forwardRef(() => Step9Component),
   multi: true
 }
  ]
})
export class Step9Component implements OnInit,ControlValueAccessor,Validator {
  panelOpenState = false;
  isLinear = false;
  inBondFormStep9: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inBondFormStep9 = this._formBuilder.group({
      igm_no: ['', [Validators.required, Validators.maxLength(7), Validators.pattern("[0-9]+$")]],
      igm_date: ['', Validators.required],
      inward_date: ['', Validators.required],
      gateway_igm_number: ['', [Validators.maxLength(5), Validators.pattern("[0-9]+$")]],
      gateway_igm_date: [''],
      gateway_port_code: ['', [Validators.maxLength(6), Validators.pattern("^[0-9a-zA-Z]+$")]],
      gross_weight:['',[Validators.maxLength(12),Validators.pattern("[0-9]+$")]],
      mawb_bl_no: ['', [Validators.required, Validators.maxLength(20), Validators.pattern("^[0-9a-zA-Z]+$")]],
      mawb_bl_date: ['', Validators.required],
      hawb_hbl_no: ['', [Validators.maxLength(20), Validators.pattern("[0-9]+$")]],
      hawb_hbl_date: [''],
      total_number_of_packages: ['', [Validators.required, Validators.maxLength(8), Validators.pattern("[0-9]+$")]],
      marks_number1: ['', [Validators.required, Validators.maxLength(40), Validators.pattern("^[0-9a-zA-Z]+$")]],
      marks_number2: ['', [Validators.maxLength(40), Validators.pattern("^[0-9a-zA-Z]+$")]],
      marks_number3: ['', [Validators.maxLength(40), Validators.pattern("^[0-9a-zA-Z]+$")]],
      unit_quantity_code:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      package_code:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$"),Validators.required]],
    })
  }

   
  // communication between part to child compoentent code for form data saving in main in-bound-bill-of-entry part code
 
  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.inBondFormStep9.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.inBondFormStep9.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
   //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.inBondFormStep9.disable() : this.inBondFormStep9.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null{
   // console.log("Consignment Info validation", c);
    return this.inBondFormStep9.valid ? null : { invalidForm: {valid: false, message: "Step1 fields are invalid"}};
  }

}
