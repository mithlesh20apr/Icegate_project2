import { Component, forwardRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import Swal from 'sweetalert2';
import {ValidatorsService} from '../../../common/service/validators.service'

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step1Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step1Component),
      multi: true
    }
  ]
})
export class Step1Component implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  airlineEgmStep1:FormGroup;
  private formSumitAttempt: boolean;
  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.airlineEgmStep1= this._formBuilder.group({
      message_type:['F'],
      custom_house_code:['',Validators.maxLength(6)],
      flight_no:['',[Validators.maxLength(15),Validators.required]],
      flight_origin_date:['',Validators.required],
      egm_no:['',[ValidatorsService.numberValidator,Validators.maxLength(7)]],
      egm_date:[''],
      port_origin:['',[Validators.maxLength(3),Validators.required]],
      port_destination:['',[Validators.maxLength(3),Validators.required]],
      registration_no:['',[Validators.maxLength(10)]],
      nil_cargo_flight:['',Validators.required]
    })
  }

       // validation code
       public onTouched: () => void = () => {

        //console.log('data');
      };
      writeValue(val: any): void {
        //console.log('written values')
        val && this.airlineEgmStep1.patchValue(val, { emitEvent: true });
      }
      registerOnChange(fn: any): void {
        //console.log("on change");
        this.airlineEgmStep1.valueChanges.subscribe(fn);
      }
      registerOnTouched(fn: any): void {
        //console.log("on blur");
        this.onTouched = fn;
      }
      setDisabledState?(isDisabled: boolean): void {
        isDisabled ? this.airlineEgmStep1.disable() : this.airlineEgmStep1.enable();
      }
      validate(c: AbstractControl): ValidationErrors | null {
        //console.log("Consignment Info validation", c);
        return this.airlineEgmStep1.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
      }
      // check validation when you click the continue buttons
      isFieldValid(field: string) {
        return (
          (!this.airlineEgmStep1.get(field).valid && this.airlineEgmStep1.get(field).touched) ||
          (this.airlineEgmStep1.get(field).untouched && this.formSumitAttempt)
        );
      }
    
      displayFieldCss(field: string) {
        return {
          'has-error': this.isFieldValid(field),
          'has-feedback': this.isFieldValid(field)
        };
      }
      onSubmit() {
        if (this.airlineEgmStep1.valid === true) {
          this.airlineEgmStep1.value
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


