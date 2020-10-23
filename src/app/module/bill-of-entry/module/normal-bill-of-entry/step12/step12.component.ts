import { Component, OnInit ,forwardRef} from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms'; 
@Component({
  selector: 'app-step12',
  templateUrl: './step12.component.html',
  styleUrls: ['./step12.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step12Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step12Component),
      multi: true
    }
  ]
})
export class Step12Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  homeConsumptionFormStep12: FormGroup;
  private formSumitAttempt:boolean;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep12=this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
      item_serial_number: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("[0-9]+$")]],
      decleration_type:['',[Validators.required,Validators.maxLength(1),Validators.pattern("^[a-zA-Z]+$")]],
      decleration_number:['',[Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
      decleration_date:[''],
      statement_type:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[a-zA-Z]+$")]],
      statement_code:['',[Validators.maxLength(7),Validators.pattern("^[a-zA-Z]+$")]],
      statement_text:['',[Validators.maxLength(4000),Validators.pattern("^[a-zA-Z]+$")]],
    })
  }

  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.homeConsumptionFormStep12.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.homeConsumptionFormStep12.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.homeConsumptionFormStep12.disable() : this.homeConsumptionFormStep12.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.homeConsumptionFormStep12.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }


  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.homeConsumptionFormStep12.get(field).valid && this.homeConsumptionFormStep12.get(field).touched) ||
      (this.homeConsumptionFormStep12.get(field).untouched && this.formSumitAttempt)
    );
  }
  
}
