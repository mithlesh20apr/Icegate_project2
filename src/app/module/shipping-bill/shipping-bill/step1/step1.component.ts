import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ShippingBillService } from '../service/shipping-bill.service';
import { ValidatorsService } from '../../common/service/validators.service'
import Swal from 'sweetalert2';
import { TooltipPosition } from '@angular/material/tooltip';
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
export class Step1Component implements OnInit {

  shipingBillSStepOne: FormGroup;
  isNfeiAvailable: string;
  // isIecAvail:string;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  isIecAvailable: string;
  private formSumitAttempt: boolean;
  constructor(
    private _formBuilder: FormBuilder,
    public _shippingBillService: ShippingBillService
  ) {
    this._shippingBillService.nfeiAvailable.subscribe(nfeiAvail => {
      console.log('Value from Radio button isNfeiAvailable', nfeiAvail)
      this.isNfeiAvailable = nfeiAvail;
      console.log(this.isNfeiAvailable)
    })
    this._shippingBillService.iecAvailable.subscribe(iecAvail => {
      console.log('Value from Radio button isIecAvailable', iecAvail)
      this.isIecAvailable = iecAvail;
      console.log(this.isIecAvailable)
    })
  }

  ngOnInit(): void {
    this.shipingBillSStepOne = this._formBuilder.group({
      //consignee details
      consignee_details: new FormGroup({
        consignee_name: new FormControl('', [Validators.required, Validators.maxLength(35)]),
        consignee_address_1: new FormControl('', [Validators.required, Validators.maxLength(35)]),
        consignee_address_2: new FormControl('', Validators.maxLength(35)),
        consignee_address_3: new FormControl('', Validators.maxLength(35)),
        consignee_address_4: new FormControl('', Validators.maxLength(35)),
        consignee_country: new FormControl('', Validators.required),
        category_nfei_sb: new FormControl(''),
        rbi_waiver_number: new FormControl('', Validators.maxLength(20)),
        rbi_waiver_date: new FormControl(''),
        port_of_loading: new FormControl('', Validators.required),
        port_of_final_destination: new FormControl('', Validators.required),
        country_final_destination: new FormControl('', Validators.required),
        country_discharge: new FormControl('', Validators.required),
        port_of_discharge: new FormControl('', Validators.required,),
        seal_type: new FormControl(''),
        ie_code_eou: new FormControl(''),
        branch_sr_number_ie: new FormControl(''),
        examination_date: new FormControl(''),
        examining_officer_name: new FormControl(''),
        examining_officer_designation: new FormControl(''),
        supervising_officer_name: new FormControl(''),
        supervising_officer_designation: new FormControl(''),
        commissionerate: new FormControl(''),
        division: new FormControl(''),
        range: new FormControl(''),
        seal_number: new FormControl(''),
        item_values_verified: new FormControl(''),
        sample_forwarded: new FormControl(''),
        // ie_code_eou: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        // branch_sr_number_ie: new FormControl('', [Validators.required, Validators.maxLength(3), ValidatorsService.numberValidator]),
        // examination_date: new FormControl('', Validators.required),
        // examining_officer_name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
        // examining_officer_designation: new FormControl('', [Validators.required, Validators.maxLength(30)]),
        // supervising_officer_name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
        // supervising_officer_designation: new FormControl('', [Validators.required, Validators.maxLength(30)]),
        // commissionerate: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        // division: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        // range: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        // seal_number: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        // item_values_verified: new FormControl('', Validators.required),
        // sample_forwarded: new FormControl('', Validators.required),
      }),
      // amendment_type: new FormControl [''],
      // amendment_number: new FormControl [''],
      // amendment_date: new FormControl [''],

      // package details
      package_details: new FormGroup({
        nature_of_cargo: new FormControl(''),
        gross_weight: new FormControl('', [Validators.maxLength(17), ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/), 13)]),
        net_weight: new FormControl('', ValidatorsService.numberValidator),
        unit_measurement: new FormControl('', Validators.maxLength(3)),
        total_number_packages: new FormControl('', [Validators.maxLength(8), ValidatorsService.numberValidator]),
        marks_and_numbers: new FormControl('', Validators.maxLength(300)),
        loose_packates_number: new FormControl('', [Validators.maxLength(8), ValidatorsService.numberValidator]),
        containers_number: new FormControl('', [Validators.maxLength(2), ValidatorsService.numberValidator]),
        mawb_number: new FormControl('', Validators.maxLength(15)),
        hawb_number: new FormControl('', Validators.maxLength(15)),
        // amendment_type: new FormControl ['', [Validators.maxLength(1)]],
        // amendment_number: new FormControl ['', [Validators.maxLength(7), ValidatorsService.numberValidator]],
        // amendment_date: new FormControl [''],
        gstn_type: new FormControl('', [Validators.maxLength(3), Validators.required]),
        gstn_id: new FormControl('', [Validators.maxLength(20), Validators.required]),

      }),


      // general details
      general_details: new FormGroup({
        message_type: new FormControl('F', [Validators.required, Validators.maxLength(1)]),
        custom_house_code: new FormControl('', [Validators.maxLength(6)]),
        job_number: new FormControl('', [Validators.maxLength(7), ValidatorsService.numberValidator]),
        job_date: new FormControl(''),
        sb_number: new FormControl('', [Validators.maxLength(7), ValidatorsService.numberValidator]),
        sb_date: new FormControl(''),
        cha_license_number: new FormControl('', [Validators.required, Validators.maxLength(15)]),
        importer_exporter_code: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        branch_sr_no_of_exporter: new FormControl(''),
        importer_exporter_name: new FormControl(''),
        imp_exp_address1: new FormControl(''),
        imp_exp_address2: new FormControl(''),
        imp_exp_city: new FormControl(''),
        imp_exp_state: new FormControl(''),
        imp_exp_pin: new FormControl(''),
        type_of_exporter: new FormControl('', [Validators.required, Validators.maxLength(1)]),
        exporter_class: new FormControl('', [Validators.required, Validators.maxLength(1)]),
        state_of_origin_exporter: new FormControl('', [Validators.required, Validators.maxLength(2)]),
        authorized_dealer_code: new FormControl(''),
        epz_code: new FormControl('', Validators.maxLength(1))

      })
    });
  }
  isIecAvailable1(event:MatRadioChange){
    this._shippingBillService.iecAvailable.next(event.value);
    if(event.value==='N'){
    this.shipingBillSStepOne.get('general_details.importer_exporter_name').setValidators([Validators.required, Validators.maxLength(50)]);
    this.shipingBillSStepOne.get('general_details.imp_exp_address1').setValidators([Validators.required, Validators.maxLength(35)]);
    this.shipingBillSStepOne.get('general_details.imp_exp_address2').setValidators([Validators.maxLength(35)]);
    this.shipingBillSStepOne.get('general_details.imp_exp_city').setValidators([Validators.maxLength(35)]);
    this.shipingBillSStepOne.get('general_details.imp_exp_state').setValidators([Validators.maxLength(25)]);
    this.shipingBillSStepOne.get('general_details.imp_exp_pin').setValidators([Validators.maxLength(6), ValidatorsService.numberValidator]);
    this.shipingBillSStepOne.get('general_details.branch_sr_no_of_exporter').setValidators([ Validators.maxLength(3), ValidatorsService.numberValidator]);
    
    this.shipingBillSStepOne.get('general_details.importer_exporter_name').updateValueAndValidity();
    this.shipingBillSStepOne.get('general_details.imp_exp_address1').updateValueAndValidity();
    this.shipingBillSStepOne.get('general_details.imp_exp_address2').updateValueAndValidity();
    this.shipingBillSStepOne.get('general_details.imp_exp_city').updateValueAndValidity();
    this.shipingBillSStepOne.get('general_details.imp_exp_state').updateValueAndValidity();
    this.shipingBillSStepOne.get('general_details.imp_exp_pin').updateValueAndValidity();
    this.shipingBillSStepOne.get('general_details.branch_sr_no_of_exporter').updateValueAndValidity();
    }

    else if(event.value==='Y' || event.value===undefined ){
      this.shipingBillSStepOne.get('general_details.branch_sr_no_of_exporter').setValidators([Validators.required, Validators.maxLength(3), ValidatorsService.numberValidator]);

      this.shipingBillSStepOne.get('general_details.branch_sr_no_of_exporter').updateValueAndValidity();
      this.shipingBillSStepOne.get('general_details.importer_exporter_name').clearValidators();
    this.shipingBillSStepOne.get('general_details.imp_exp_address1').clearValidators();
    this.shipingBillSStepOne.get('general_details.imp_exp_address2').clearValidators();
    this.shipingBillSStepOne.get('general_details.importer_exporter_name').setValidators([Validators.maxLength(50)]);
    this.shipingBillSStepOne.get('general_details.imp_exp_address1').setValidators([Validators.maxLength(35)]);
    this.shipingBillSStepOne.get('general_details.importer_exporter_name').updateValueAndValidity();
    this.shipingBillSStepOne.get('general_details.imp_exp_address1').updateValueAndValidity();

    }

   else {
    this.shipingBillSStepOne.get('consignee_details.ie_code_eou').clearValidators();
    this.shipingBillSStepOne.get('general_details.importer_exporter_name').clearValidators();
    this.shipingBillSStepOne.get('general_details.imp_exp_address1').clearValidators();
    this.shipingBillSStepOne.get('general_details.imp_exp_address2').clearValidators();
    this.shipingBillSStepOne.get('general_details.imp_exp_city').clearValidators();
    this.shipingBillSStepOne.get('general_details.imp_exp_state').clearValidators();
    this.shipingBillSStepOne.get('general_details.imp_exp_pin').clearValidators();
    this.shipingBillSStepOne.get('general_details.branch_sr_no_of_exporter').clearValidators();

    
    //  Clear All Validators
    this.shipingBillSStepOne.get('general_details.importer_exporter_name').updateValueAndValidity();
    this.shipingBillSStepOne.get('general_details.imp_exp_address1').updateValueAndValidity();
    this.shipingBillSStepOne.get('general_details.imp_exp_address2').updateValueAndValidity();
    this.shipingBillSStepOne.get('general_details.imp_exp_city').updateValueAndValidity();
    this.shipingBillSStepOne.get('general_details.imp_exp_state').updateValueAndValidity();
    this.shipingBillSStepOne.get('general_details.imp_exp_pin').updateValueAndValidity();
    this.shipingBillSStepOne.get('general_details.branch_sr_no_of_exporter').updateValueAndValidity();
  }
}
  isNfeiAvailable1(nfeievent:MatRadioChange){
    console.log(this._shippingBillService.nfeiAvailable.next(nfeievent.value))
    this._shippingBillService.nfeiAvailable.next(nfeievent.value);
    if(nfeievent.value==='N' || nfeievent.value===undefined ){
      this.shipingBillSStepOne.get('general_details.authorized_dealer_code').setValidators([Validators.required, Validators.maxLength(10)]);

      this.shipingBillSStepOne.get('general_details.authorized_dealer_code').updateValueAndValidity();
    }

    else if(nfeievent.value==='Y'){
      this.shipingBillSStepOne.get('consignee_details.category_nfei_sb').setValidators([Validators.required,Validators.maxLength(2)]);
      // this.shipingBillSStepOne.get('general_details.authorized_dealer_code').setValidators([Validators.maxLength(10)]);

      this.shipingBillSStepOne.get('consignee_details.category_nfei_sb').updateValueAndValidity();
      this.shipingBillSStepOne.get('general_details.authorized_dealer_code').clearValidators();
      this.shipingBillSStepOne.get('general_details.authorized_dealer_code').setValidators([Validators.maxLength(10)]);
      this.shipingBillSStepOne.get('general_details.authorized_dealer_code').updateValueAndValidity();

    }
    else{
      this.shipingBillSStepOne.get('general_details.authorized_dealer_code').clearValidators();
      this.shipingBillSStepOne.get('consignee_details.category_nfei_sb').clearValidators();
     
      this.shipingBillSStepOne.get('general_details.authorized_dealer_code').updateValueAndValidity();
      this.shipingBillSStepOne.get('consignee_details.category_nfei_sb').updateValueAndValidity();
    }
  }
  // validation code
  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.shipingBillSStepOne.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.shipingBillSStepOne.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.shipingBillSStepOne.disable() : this.shipingBillSStepOne.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.shipingBillSStepOne.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }


  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.shipingBillSStepOne.get(field).valid && this.shipingBillSStepOne.get(field).touched) ||
      (this.shipingBillSStepOne.get(field).untouched && this.formSumitAttempt)
    );
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  onSealChange(value:MatRadioChange) {
    console.log(value)
    if(value.value === 'A' || value.value==='S') {
    this.shipingBillSStepOne.get('consignee_details.ie_code_eou').setValidators([Validators.required, Validators.maxLength(10)]);
    this.shipingBillSStepOne.get('consignee_details.branch_sr_number_ie').setValidators([Validators.required, Validators.maxLength(3), ValidatorsService.numberValidator]);
    this.shipingBillSStepOne.get('consignee_details.examination_date').setValidators([Validators.required]);
    this.shipingBillSStepOne.get('consignee_details.examining_officer_name').setValidators([Validators.required, Validators.maxLength(30)]);
    this.shipingBillSStepOne.get('consignee_details.examining_officer_designation').setValidators([Validators.required, Validators.maxLength(30)]);
    this.shipingBillSStepOne.get('consignee_details.supervising_officer_name').setValidators([Validators.required, Validators.maxLength(30)]);
    this.shipingBillSStepOne.get('consignee_details.supervising_officer_designation').setValidators([Validators.required, Validators.maxLength(30)]);
    this.shipingBillSStepOne.get('consignee_details.commissionerate').setValidators([Validators.required, Validators.maxLength(20)]);
    this.shipingBillSStepOne.get('consignee_details.division').setValidators([Validators.required, Validators.maxLength(20)]);
    this.shipingBillSStepOne.get('consignee_details.range').setValidators([Validators.required, Validators.maxLength(20)]);
    this.shipingBillSStepOne.get('consignee_details.seal_number').setValidators([Validators.required, Validators.maxLength(100)]);
    this.shipingBillSStepOne.get('consignee_details.item_values_verified').setValidators([Validators.required]);
    this.shipingBillSStepOne.get('consignee_details.sample_forwarded').setValidators([Validators.required]);


    //  Clear All Validators
    this.shipingBillSStepOne.get('consignee_details.ie_code_eou').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.branch_sr_number_ie').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.examination_date').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.examining_officer_name').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.examining_officer_designation').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.supervising_officer_name').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.supervising_officer_designation').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.commissionerate').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.division').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.range').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.seal_number').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.item_values_verified').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.sample_forwarded').updateValueAndValidity();

    
  } else {
    this.shipingBillSStepOne.get('consignee_details.ie_code_eou').clearValidators();
    this.shipingBillSStepOne.get('consignee_details.branch_sr_number_ie').clearValidators();
    this.shipingBillSStepOne.get('consignee_details.examination_date').clearValidators();
    this.shipingBillSStepOne.get('consignee_details.examining_officer_name').clearValidators();
    this.shipingBillSStepOne.get('consignee_details.examining_officer_designation').clearValidators();
    this.shipingBillSStepOne.get('consignee_details.supervising_officer_name').clearValidators();
    this.shipingBillSStepOne.get('consignee_details.supervising_officer_designation').clearValidators();
    this.shipingBillSStepOne.get('consignee_details.commissionerate').clearValidators();
    this.shipingBillSStepOne.get('consignee_details.division').clearValidators();
    this.shipingBillSStepOne.get('consignee_details.range').clearValidators();
    this.shipingBillSStepOne.get('consignee_details.seal_number').clearValidators();
    this.shipingBillSStepOne.get('consignee_details.item_values_verified').clearValidators();
    this.shipingBillSStepOne.get('consignee_details.sample_forwarded').clearValidators();


    
    //  Clear All Validators
    this.shipingBillSStepOne.get('consignee_details.ie_code_eou').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.branch_sr_number_ie').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.examination_date').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.examining_officer_name').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.examining_officer_designation').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.supervising_officer_name').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.supervising_officer_designation').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.commissionerate').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.division').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.range').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.seal_number').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.item_values_verified').updateValueAndValidity();
    this.shipingBillSStepOne.get('consignee_details.sample_forwarded').updateValueAndValidity();

 }
  }


  // submit on save and continue sections
  onSubmit() {
    // console.log(this.shipingBillSStepOne.valid);
    // console.log(this.shipingBillSStepOne.value);
    // console.log();
    if (this.shipingBillSStepOne.valid === true) {
      this.shipingBillSStepOne.value
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
          let element: HTMLElement = document.getElementById('save_continues') as HTMLElement;
          element.click();
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Required Validation is left. Please check',
      }).then((result) => {
        this.formSumitAttempt = true
      })

    }
  }

}
