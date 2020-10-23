import { Component, OnInit, Input,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms'; 

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
export class Step4Component implements OnInit, ControlValueAccessor, Validator {

  panelOpenState = false;
  isLinear = false;

  private formSumitAttempt:boolean

  homeConsumptionFormStep4: FormGroup;
  @Input() index: number;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep4 = this._formBuilder.group ({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
      misc_charge_code:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      misc_description:['',[Validators.required,Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      misc_charges:['',[Validators.maxLength(10),Validators.pattern("[0-9]+$")]],
      misc_rate:['',[Validators.maxLength(3),Validators.pattern("[0-9]")]]
    });
  }
  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.homeConsumptionFormStep4.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.homeConsumptionFormStep4.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.homeConsumptionFormStep4.disable() : this.homeConsumptionFormStep4.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.homeConsumptionFormStep4.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }


  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.homeConsumptionFormStep4.get(field).valid && this.homeConsumptionFormStep4.get(field).touched) ||
      (this.homeConsumptionFormStep4.get(field).untouched && this.formSumitAttempt)
    );
  }
}
