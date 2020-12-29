import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import { ThemePalette } from '@angular/material/core';
import { TooltipPosition } from '@angular/material/tooltip';
import Swal from 'sweetalert2';
import { Moment } from 'moment';

const moment = _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'MMM DD, YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
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
    },
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class Step1Component implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  
  @ViewChild('picker') picker: any;
  public date: moment.Moment;
  public disabled = false;
  public showSpinners = true;
  //public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate: moment.Moment;
  public maxDate: moment.Moment;
  public stepHour = 1;
  public stepMinute = 1;
  //public stepSecond = 1;
  public color: ThemePalette = 'primary';


  airlineIgmStep1: FormGroup;
  private formSumitAttempt: boolean;
  constructor(  private _formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.airlineIgmStep1= this._formBuilder.group({
      message_type:['F', Validators.required],
      custom_house_code:['',[Validators.maxLength(6)]],
      flight_no:['',[Validators.maxLength(15)]],
      flight_origin_date:new FormControl(moment()),
      expected_date_time_arrival:['',Validators.required,moment()],
      port_origin:['',[Validators.maxLength(3),Validators.required]],
      port_destination:['',[Validators.maxLength(3),Validators.required]],
      registration_no:['',Validators.maxLength(10)],
      nil_cargo_flight:['',Validators.required]

    })
  }


   // validation code
   public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.airlineIgmStep1.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.airlineIgmStep1.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.airlineIgmStep1.disable() : this.airlineIgmStep1.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.airlineIgmStep1.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }
  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.airlineIgmStep1.get(field).valid && this.airlineIgmStep1.get(field).touched) ||
      (this.airlineIgmStep1.get(field).untouched && this.formSumitAttempt)
    );
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
  onSubmit() {
    if (this.airlineIgmStep1.valid === true) {
      this.airlineIgmStep1.value
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
