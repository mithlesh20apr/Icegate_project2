import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators , ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, FormControl,
 } from '@angular/forms';
import {ValidatorsService} from '../../../common/service/validators.service'
import * as moment from 'moment';
import { ThemePalette } from '@angular/material/core';
import Swal from 'sweetalert2';
import { TooltipPosition } from '@angular/material/tooltip';

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
  @ViewChild('picker') picker: any;
  public date: moment.Moment;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate: moment.Moment;
  public maxDate: moment.Moment;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  seaIgmStep1: FormGroup;
  private formSumitAttempt: boolean;
  constructor(private _formBuilder: FormBuilder) { }

  

  ngOnInit(): void {
    this.seaIgmStep1=this._formBuilder.group({

      message_type:['F'],
      custom_house_code:['',[Validators.maxLength(6)]],
      imo_code_of_vessel:['',[Validators.maxLength(10)]],
      vessel_code:['',[Validators.maxLength(10)]],
      voyage_no:['',[Validators.maxLength(10)]],
      shipping_line_code:['',[Validators.maxLength(10)]],
      shipping_agent_code:['',[Validators.maxLength(16)]],
      master_name:['',[Validators.maxLength(30),Validators.required]],
      port_of_arrival:['',[Validators.maxLength(6),Validators.required]],
      last_port_called:['',[Validators.maxLength(6),Validators.required]],
      port_called_prior_sno_12:['',[Validators.maxLength(6)]],
      port_called_prior_sno_13:['',[Validators.maxLength(6)]],
      vessel_type:['',[Validators.maxLength(1),Validators.required]],
      total_no_of_lines:['',[Validators.maxLength(4),ValidatorsService.numberValidator,Validators.required]],
      brief_cargo_description:['',[Validators.maxLength(30),Validators.required]],
      expected_date_and_time:['',[Validators.required]],
      light_house_dues:['',[Validators.maxLength(9),ValidatorsService.numberValidator]],
      same_bottom_cargo:['',[Validators.maxLength(1),Validators.required]],
      ship_stores_declaration:['',[Validators.maxLength(1),Validators.required]],
      crew_list_declaration:['',[Validators.maxLength(1),Validators.required]],
      passenger_list:['',[Validators.maxLength(1),Validators.required]],
      crew_effect_declaration:['',[Validators.maxLength(1),Validators.required]],
      maritime_declaration:['',[Validators.maxLength(1),Validators.required]],
      terminal_operator_code:['',[Validators.maxLength(10),Validators.required]]

    })
  }
   // validation code
   public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.seaIgmStep1.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.seaIgmStep1.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.seaIgmStep1.disable() : this.seaIgmStep1.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.seaIgmStep1.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }
  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.seaIgmStep1.get(field).valid && this.seaIgmStep1.get(field).touched) ||
      (this.seaIgmStep1.get(field).untouched && this.formSumitAttempt)
    );
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
  onSubmit() {
    
    if (this.seaIgmStep1.valid === true) {
      this.seaIgmStep1.value
      Swal.fire({
        title: 'Step 4 completed',
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
