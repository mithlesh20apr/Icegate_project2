import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms'; 
@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step6Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step6Component),
      multi: true
    }
  ]
})
export class Step6Component implements OnInit, ControlValueAccessor, Validator {

  panelOpenState = false;
  matStepperNext;
  homeConsumptionFormStep6: FormGroup
  constructor(private _formBuilder: FormBuilder) { }
  private formSumitAttempt:boolean

  ngOnInit(): void {
    this.homeConsumptionFormStep6 = this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
      item_serial_number_invoice: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("[0-9]+$")]],
      item_serial_number_rsp: ['', [Validators.maxLength(16), Validators.pattern("[0-9]+$")]],
      rsp: ['', [Validators.required, Validators.maxLength(16), Validators.pattern("[0-9]+$")]],
      quantity: ['', [Validators.required, Validators.maxLength(16), Validators.pattern("[0-9]+$")]],
      description: ['', [Validators.required, Validators.maxLength(40), Validators.pattern("^[0-9a-zA-Z]+$")]],
      rsp_notification: ['', [Validators.maxLength(10), Validators.pattern("^[0-9a-zA-Z]+$")]],
      rsp_notification_sr_no: ['', [Validators.maxLength(10), Validators.pattern("^[0-9a-zA-Z]+$")]],
    })
  }

  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.homeConsumptionFormStep6.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.homeConsumptionFormStep6.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.homeConsumptionFormStep6.disable() : this.homeConsumptionFormStep6.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.homeConsumptionFormStep6.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }


  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.homeConsumptionFormStep6.get(field).valid && this.homeConsumptionFormStep6.get(field).touched) ||
      (this.homeConsumptionFormStep6.get(field).untouched && this.formSumitAttempt)
    );
  }
  
}
