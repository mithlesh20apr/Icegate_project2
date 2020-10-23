import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms'; 
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
  homeConsumptionFormStep11: FormGroup;
  private formSumitAttempt:boolean;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.homeConsumptionFormStep11=this._formBuilder.group({
      state_code:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[a-zA-Z]+$")]],
      commercial_tax_registration:['',[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-zA-Z]+$")]],
      commercial_tax_type:['',[Validators.required,Validators.maxLength(1),Validators.pattern("^[a-zA-Z]+$")]],

    })
  }
  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.homeConsumptionFormStep11.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.homeConsumptionFormStep11.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.homeConsumptionFormStep11.disable() : this.homeConsumptionFormStep11.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.homeConsumptionFormStep11.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }


  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.homeConsumptionFormStep11.get(field).valid && this.homeConsumptionFormStep11.get(field).touched) ||
      (this.homeConsumptionFormStep11.get(field).untouched && this.formSumitAttempt)
    );
  }
  
}
