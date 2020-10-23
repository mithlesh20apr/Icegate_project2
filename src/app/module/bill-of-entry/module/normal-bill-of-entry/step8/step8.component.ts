import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms'; 
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
export class Step8Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  homeConsumptionFormStep8: FormGroup
  private formSumitAttempt:boolean
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep8 = this._formBuilder.group({
      bond_number: ['', [Validators.maxLength(10), Validators.pattern("[0-9]+$")]],
      bond_code: ['', [Validators.maxLength(2), Validators.pattern("[^[0-9a-zA-Z]+$")]],
      bond_port: ['', [Validators.maxLength(6), Validators.pattern("^[0-9a-zA-Z]+$")]],
      bond:['', Validators.required], 
      certificate_number: ['', [Validators.required, Validators.maxLength(30), Validators.pattern("^[0-9a-zA-Z]+$")]],
      certificate_date: ['', Validators.required],
      certificate_type: ['', [Validators.required, Validators.maxLength(2), Validators.pattern("^[0-9a-zA-Z]+$")]],
    })
  }

  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.homeConsumptionFormStep8.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.homeConsumptionFormStep8.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.homeConsumptionFormStep8.disable() : this.homeConsumptionFormStep8.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.homeConsumptionFormStep8.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }


  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.homeConsumptionFormStep8.get(field).valid && this.homeConsumptionFormStep8.get(field).touched) ||
      (this.homeConsumptionFormStep8.get(field).untouched && this.formSumitAttempt)
    );
  }
  
}
