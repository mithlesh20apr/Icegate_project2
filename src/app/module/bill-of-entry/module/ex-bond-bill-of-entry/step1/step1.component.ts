import { Component, ElementRef, forwardRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators , ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, FormControl, Validator } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';
import Swal from 'sweetalert2';
import {TooltipPosition} from '@angular/material/tooltip';
import { MatRadioChange } from '@angular/material/radio';

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
export class Step1Component implements OnInit,ControlValueAccessor,Validator {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  panelOpenState = false;
  isLinear = false;
  exBondFormStep1: FormGroup;
  private formSumitAttempt: boolean;
  exBondGeneralDetails: FormGroup;
  exBondWarehouseDetails: FormGroup;
  isKachaBeAvail: String;
  isSection48Avail: String;
  @ViewChild('myStepOne') myStepOne: ElementRef<HTMLElement>;

  constructor(private _formBuilder: FormBuilder) { }
    ngOnInit(): void {
    this.exBondFormStep1 = this._formBuilder.group({
      general_details:new FormGroup({
      message_type: new FormControl ('F'),
      custom_house_code: new FormControl ('', [Validators.required, Validators.maxLength(6)]),
      branch_sr_no:new FormControl ('', [Validators.required, Validators.maxLength(3),ValidatorsService.numberValidator]),
      user_job_no: new FormControl('', [Validators.required, Validators.maxLength(7)]),
      user_job_date:  new FormControl('', Validators.required),
      be_number: new FormControl ('', [Validators.maxLength(7)]),
      be_date:  new FormControl(''),
      iec_code: new FormControl ('', [Validators.maxLength(10), Validators.required , ValidatorsService.numberValidator]),
      name: new FormControl ('', Validators.maxLength(50)),
      address1:  new FormControl('',Validators.maxLength(35)),
      address2:  new FormControl('',Validators.maxLength(35)),
      city:  new FormControl('',Validators.maxLength(35)),
      state: new FormControl ('',Validators.maxLength(25)),
      pin:  new FormControl('',[Validators.maxLength(6)]),
      mode_of_transport: new FormControl ('', Validators.required),
      importer_type: new FormControl ('', Validators.required),
      kachcha_be:  new FormControl('', Validators.required),
      high_sea_sale_flag:  new FormControl('', Validators.required),
      permission_code: new FormControl (''),
      reason_for_request: new FormControl (''),
      name_importer: new FormControl (''),
      address1_importer:  new FormControl(''),
      address2_importer:  new FormControl(''),
      city_importer:  new FormControl(''),
      pin_importer:  new FormControl(''),
      preceding_level: new FormControl (''),
      invoice_serial_number: new FormControl (''),
      branch_serial_no: new FormControl(''),
      port_of_origin:  new FormControl('', [Validators.required, Validators.maxLength(3)]),
      cha_code: new FormControl ('', [Validators.maxLength(15), Validators.required]),
      country_of_origin: new FormControl ('', [Validators.required, Validators.maxLength(3)]),
      country_of_consignment: new FormControl ('', [Validators.required, Validators.maxLength(2)]),
      port_of_shipment: new FormControl ('', [Validators.required, Validators.maxLength(6)]),
      green_channel_requested: new FormControl ('', Validators.required),
      section: new FormControl ('', Validators.required),
      section_48_permission_code: new FormControl(''),
      section_48_reason_for_request: new FormControl(''),
      prior_be: new FormControl ('', Validators.required),
      authorized_dealer_code: new FormControl ('', [Validators.required, Validators.maxLength(10)]),
      first_check_requested: new FormControl ('', Validators.required),
      class:new FormControl('',[Validators.required,Validators.maxLength(1),]),  
      }),
    warehouse_details:new FormGroup({
      warehouse_code: new FormControl ('', [Validators.required, Validators.maxLength(8)]),
      warehouse_custom_site_id:  new FormControl('', [Validators.required, Validators.maxLength(7),ValidatorsService.numberValidator]),
      warehouse_be_no: new FormControl ('', [Validators.required, Validators.maxLength(7)]),
      warehouse_be_date: new FormControl('', Validators.required),
      no_packages_released:new FormControl ('', [Validators.required, Validators.maxLength(8),ValidatorsService.numberValidator]),
      package_code:new FormControl ('', [Validators.required, Validators.maxLength(13)]),
      gross_weight:new FormControl('',[Validators.required,Validators.maxLength(13),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),9),]),
      unit_of_measurement:new FormControl ('', Validators.maxLength(3)),
      additional_charges: new FormControl('', [Validators.maxLength(9),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),6)]),
      misc_load: new FormControl ('', [Validators.maxLength(9),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),6)]),
      ucr: new FormControl ('', Validators.maxLength(35)),
      ucr_type: new FormControl ('', Validators.maxLength(6)),
      payment_method_code: new FormControl ('', [Validators.required, Validators.maxLength(1)]),
       })

    })

  }
  // validation code
  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.exBondFormStep1.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.exBondFormStep1.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.exBondFormStep1.disable() : this.exBondFormStep1.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.exBondFormStep1.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }


  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.exBondFormStep1.get(field).valid && this.exBondFormStep1.get(field).touched) ||
      (this.exBondFormStep1.get(field).untouched && this.formSumitAttempt)
    );
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
  isKachaBeAvailable(event){
    this.isKachaBeAvail = event.target.value;
  }

  isSection48Available(event){
    this.isSection48Avail = event.target.value;
  }
  get highSeaSale(): any {
    return this.exBondFormStep1.get('general_details.high_sea_sale_flag');
  }
   /* Set validation on yes or no check on High Sea sales Flag */
//   onHighSeaChange(event: MatRadioChange) {
//       if(event.value === 'Yes') {
//       this.exBondFormStep1.get('general_details.permission_code').setValidators([Validators.required,Validators.maxLength(3),]);
//       this.exBondFormStep1.get('general_details.reason_for_request').setValidators([Validators.required,Validators.maxLength(2000),]);
//       this.exBondFormStep1.get('general_details.invoice_serial_number').setValidators([Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]);
//       this.exBondFormStep1.get('general_details.branch_serial_no').setValidators([Validators.required,Validators.maxLength(3),ValidatorsService.numberValidator]);
//       this.exBondFormStep1.get('general_details.name_importer').setValidators([Validators.maxLength(50),]);
//       this.exBondFormStep1.get('general_details.preceding_level').setValidators([Validators.required,Validators.maxLength(1),]);
//       this.exBondFormStep1.get('general_details.address1_importer').setValidators([Validators.maxLength(35),]);
//       this.exBondFormStep1.get('general_details.address2_importer').setValidators([Validators.maxLength(35),]);
//       this.exBondFormStep1.get('general_details.city_importer').setValidators([Validators.maxLength(35),]);
//       this.exBondFormStep1.get('general_details.pin_importer').setValidators([Validators.maxLength(6),ValidatorsService.numberValidator]);

//       //  Clear All Validators
//       this.exBondFormStep1.get('general_details.permission_code').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.reason_for_request').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.invoice_serial_number').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.branch_serial_no').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.name_importer').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.preceding_level').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.address1_importer').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.address2_importer').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.city_importer').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.pin_importer').updateValueAndValidity();
      
//     } else {
//       this.exBondFormStep1.get('general_details.permission_code').clearValidators();
//       this.exBondFormStep1.get('general_details.reason_for_request').clearValidators();
//       this.exBondFormStep1.get('general_details.invoice_serial_number').clearValidators();
//       this.exBondFormStep1.get('general_details.branch_serial_no').clearValidators();
//       this.exBondFormStep1.get('general_details.name_importer').clearValidators();
//       this.exBondFormStep1.get('general_details.preceding_level').clearValidators();
//       this.exBondFormStep1.get('general_details.address1_importer').clearValidators();
//       this.exBondFormStep1.get('general_details.address2_importer').clearValidators();
//       this.exBondFormStep1.get('general_details.city_importer').clearValidators();
//       this.exBondFormStep1.get('general_details.pin_importer').clearValidators();
      
//       //  Clear All Validators
//       this.exBondFormStep1.get('general_details.permission_code').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.reason_for_request').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.invoice_serial_number').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.branch_serial_no').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.name_importer').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.preceding_level').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.address1_importer').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.address2_importer').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.city_importer').updateValueAndValidity();
//       this.exBondFormStep1.get('general_details.pin_importer').updateValueAndValidity();
//    }
  
// }

/* set validation on check yes or no of section 48 part */
// section_48Value(event: MatRadioChange) {
//   if(event.value === 'Yes') {
//     this.exBondFormStep1.get('general_details.section_48_permission_code').setValidators([Validators.required,Validators.maxLength(3),]);
//     this.exBondFormStep1.get('general_details.section_48_reason_for_request').setValidators([Validators.required,Validators.maxLength(2000),]);
      
//   }else{
//     this.exBondFormStep1.get('general_details.section_48_permission_code').clearValidators();
//     this.exBondFormStep1.get('general_details.section_48_reason_for_request').clearValidators();
//   }
// }
  
  // submit on save and continue sections
  onSubmit() {
    if (this.exBondFormStep1.valid === true) {
      this.exBondFormStep1.value
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
