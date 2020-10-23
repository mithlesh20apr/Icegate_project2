import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms'; 
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
export class Step10Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  homeConsumptionFormStep10: FormGroup;
  private formSumitAttempt:boolean;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.homeConsumptionFormStep10 = this._formBuilder.group({
      igm_no: ['', [Validators.required, Validators.maxLength(7), Validators.pattern("[0-9]+$")]],
      igm_date: ['', Validators.required],
      lcl_fcl: ['', [Validators.required, Validators.maxLength(1), Validators.pattern("^[0-9a-zA-Z]+$")]],
      container_number: ['', [Validators.required, Validators.maxLength(11), Validators.pattern("^[0-9a-zA-Z]+$")]],
      seal_number: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9a-zA-Z]+$")]],
      truck_number: ['', [Validators.maxLength(20), Validators.pattern("^[0-9a-zA-Z]+$")]],
    })
  }
  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.homeConsumptionFormStep10.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.homeConsumptionFormStep10.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.homeConsumptionFormStep10.disable() : this.homeConsumptionFormStep10.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.homeConsumptionFormStep10.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }


  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.homeConsumptionFormStep10.get(field).valid && this.homeConsumptionFormStep10.get(field).touched) ||
      (this.homeConsumptionFormStep10.get(field).untouched && this.formSumitAttempt)
    );
  }
  
}
