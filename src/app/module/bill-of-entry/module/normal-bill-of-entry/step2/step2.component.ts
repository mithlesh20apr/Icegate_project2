import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ValidatorsService } from '../../../../common/service/validators.service';
import Swal from 'sweetalert2';
import {TooltipPosition} from '@angular/material/tooltip';
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
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  homeConsumptionFormStep2: FormGroup;
  private formSumitAttempt: boolean;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep2 = this._formBuilder.group ({
      currency_code:['',[Validators.required,Validators.maxLength(3),]],
      standard_currency:['',[Validators.required,Validators.maxLength(1),]],
      unit_in_rs:['',[Validators.maxLength(10),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),7)]],
      rate:['',[Validators.maxLength(14),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),9)]],
      effective_date:[''],
      bankname_non_standard_currency:['',[Validators.maxLength(35),]],
      certificate_number:['',[Validators.maxLength(20),]],
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
    return this.homeConsumptionFormStep2.valid ? null : { invalidForm: { valid: false, message: "Step2 fields are invalid" } };
  }


  // check validation when you click the continue buttons
  // isFieldValid(field: string) {
  //   return (
  //     (!this.homeConsumptionFormStep2.get(field).valid && this.homeConsumptionFormStep2.get(field).touched) ||
  //     (this.homeConsumptionFormStep2.get(field).untouched && this.formSumitAttempt)
  //   );
  // }

  isFieldValid(field: string) {
    return (
      (!this.homeConsumptionFormStep2.get(field).valid && this.homeConsumptionFormStep2.get(field).touched) ||
      (this.homeConsumptionFormStep2.get(field).untouched && this.formSumitAttempt)
    );
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  onSubmit() {
    // console.log(this.homeConsumptionFormStep2.valid);
    // console.log(this.homeConsumptionFormStep2.value);
    // console.log();
    if (this.homeConsumptionFormStep2.valid === true) {
      this.homeConsumptionFormStep2.value
      Swal.fire({
        title: 'Step 2 completed',
        text: "Please click next for other step or click cancel",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Next &nbsp; &#8594;'
      }).then((result) => {
        if (result.isConfirmed) {
          let element:HTMLElement = document.getElementById('save_continues') as HTMLElement;
          element.click();
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Required Validation is left. Please check',
      }).then((result) =>{
        this.formSumitAttempt = true
      })

    }
  }

}
