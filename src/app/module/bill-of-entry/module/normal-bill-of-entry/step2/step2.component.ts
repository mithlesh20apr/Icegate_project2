import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ValidatorsService } from '../../../../common/service/validators.service';

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
export class Step2Component implements OnInit, ControlValueAccessor, Validator {

  panelOpenState = false;
  isLinear = false;
  homeConsumptionFormStep2: FormGroup;
  private formSumitAttempt: boolean;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep2 = this._formBuilder.group ({
      currency_code:['',[Validators.required,Validators.maxLength(3)]],
      standard_currency:['',[Validators.required,Validators.maxLength(1)]],
      unit_in_rs:['',[Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
      rate:['',[Validators.maxLength(9),Validators.pattern("[0-9]+$")]],
      effective_date:[''],
      bankname_non_standard_currency:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      certificate_number:['',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]],
      certificate_date:[''],
    });
  }
  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.homeConsumptionFormStep2.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.homeConsumptionFormStep2.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.homeConsumptionFormStep2.disable() : this.homeConsumptionFormStep2.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.homeConsumptionFormStep2.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }


  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.homeConsumptionFormStep2.get(field).valid && this.homeConsumptionFormStep2.get(field).touched) ||
      (this.homeConsumptionFormStep2.get(field).untouched && this.formSumitAttempt)
    );
  }
}
