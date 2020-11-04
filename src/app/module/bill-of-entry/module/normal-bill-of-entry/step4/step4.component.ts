import { Component, OnInit, Input,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors,FormArray } from '@angular/forms'; 
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
export class Step4Component implements OnInit, ControlValueAccessor, Validator {

  panelOpenState = false;
  isLinear = false;

  private formSumitAttempt:boolean

  homeConsumptionFormStep4: FormGroup;
  selected = new FormControl(0);
  disableAddButton = false;
  @Input() index: number;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep4= this._formBuilder.group({
      miscCharges: this._formBuilder.array([]),
    })
  }

  AddStepMiscCharges(): FormGroup {
    return this._formBuilder.group ({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]],
      misc_charge_code:['',[Validators.required,Validators.maxLength(2)]],
      misc_description:['',[Validators.required,Validators.maxLength(35)]],
      misc_charges:['',[Validators.maxLength(10),ValidatorsService.numberValidator]],
      misc_rate:['',[Validators.maxLength(3),ValidatorsService.numberValidator]]
    });
  }

  addMiscCharges(): FormArray {
        return this.homeConsumptionFormStep4.get("miscCharges") as FormArray
  }

  addMiscChargesTabs() {
    this.addMiscCharges().push(this.AddStepMiscCharges());
    this.selected.setValue(this.addMiscCharges().controls.length);
    if(this.addMiscCharges().controls.length == 3){
      this.disableAddButton = true;
    }
  }

  removeMiscChargesTabs(index: number) {
    this.addMiscCharges().controls.splice(index, 1);
    if(this.addMiscCharges().controls.length < 3){
      this.disableAddButton = false;
    }
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
