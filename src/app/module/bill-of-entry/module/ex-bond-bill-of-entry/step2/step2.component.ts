import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import Swal from 'sweetalert2';
import {ValidatorsService} from '../../../../common/service/validators.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
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
export class Step2Component implements OnInit {
  panelOpenState = false;
  isLinear = false;
  @Input() index: number;
  exBondFormStep2: FormGroup;
  private formSumitAttempt: boolean;
  
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.exBondFormStep2=this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]],
      invoice_date:[''],
      actual_invoice_number:['',[Validators.required,Validators.maxLength(16)]],
      address1_third_party:['',[Validators.maxLength(70 )]],
      address2_third_party:['',[Validators.maxLength(50)]],
      city_third_party:['',[Validators.maxLength(35)]],
      country_sub_division_third_party:['',[Validators.maxLength(35)]],
      country_code_third_party:['',[Validators.maxLength(2)]],
      pin_third_party:['',[Validators.maxLength(10)]],
      authorized_economic_operator:['',[Validators.maxLength(17)]],
      authorized_economic_operator_country:['',[Validators.maxLength(2)]],
      authorized_economic_operator_role:['',[Validators.maxLength(3)]],
      buyer_or_seller_related:['',[Validators.required,Validators.maxLength(70)]],
    })
  }

    // validation code
    public onTouched: () => void = () => {

      //console.log('data');
    };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.exBondFormStep2.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.exBondFormStep2.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.exBondFormStep2.disable() : this.exBondFormStep2.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.exBondFormStep2.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }


  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.exBondFormStep2.get(field).valid && this.exBondFormStep2.get(field).touched) ||
      (this.exBondFormStep2.get(field).untouched && this.formSumitAttempt)
    );
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  // submit on save and continue sections

  onSubmit() {
    if (this.exBondFormStep2.valid === true) {
      this.exBondFormStep2.value
      Swal.fire({
        title: 'Step 1 completed',
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
