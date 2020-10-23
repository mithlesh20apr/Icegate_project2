import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ShippingBillService } from '../service/shipping-bill.service';
import {ValidatorsService} from '../../common/service/validators.service'

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
  private formSumitAttempt: boolean;
  constructor(
    private _formBuilder: FormBuilder,
    public _shippingBillService: ShippingBillService
    ) {
    this._shippingBillService.nfeiAvailable.subscribe( nfeiAvail => {
      this.isNfeiAvailable = nfeiAvail;
    })
   }

  ngOnInit(): void {
    this.shipingBillSStepOne = this._formBuilder.group({
      consignee_name: ['', [Validators.required, Validators.maxLength(35)]],
      consignee_address_1: ['', [Validators.required, Validators.maxLength(35)]],
      consignee_address_2: ['', [Validators.maxLength(35)]],
      consignee_address_3: ['', [Validators.maxLength(35)]],
      consignee_address_4: ['', [Validators.maxLength(35)]],
      consignee_country: ['', [Validators.required]],
      category_nfei_sb: ['', [Validators.required, Validators.maxLength(2)]],
      rbi_waiver_number: ['', [Validators.maxLength(20)]],
      rbi_waiver_date: [''],
      port_of_loading: ['', [Validators.required]],
      port_of_final_destination: ['', [Validators.required]],
      country_final_destination: ['', [Validators.required]],
      country_discharge: ['', [Validators.required]],
      port_of_discharge: ['', [Validators.required]],
      seal_type: [''],
      ie_code_eou: ['', [Validators.required, Validators.maxLength(10)]],
      branch_sr_number_ie: ['', [Validators.required, Validators.maxLength(3),Validators.pattern("^[0-9]*$")]],
      examination_date: ['', [Validators.required]],
      examining_officer_name: ['', [Validators.required, Validators.maxLength(30)]],
      examining_officer_designation: ['', [Validators.required, Validators.maxLength(30)]],
      supervising_officer_name: ['', [Validators.required, Validators.maxLength(30)]],
      supervising_officer_designation: ['', [Validators.required, Validators.maxLength(30)]],
      commissionerate: ['', [Validators.required, Validators.maxLength(20)]],
      division: ['', [Validators.required, Validators.maxLength(20)]],
      range: ['', [Validators.required, Validators.maxLength(20)]],
      seal_number: ['', [Validators.required, Validators.maxLength(100)]],
      item_values_verified: ['', [Validators.required]],
      sample_forwarded: ['', [Validators.required]],
      amendment_type: [''],
      amendment_number: [''],
      amendment_date: [''],

      // package validations
      nature_of_cargo: [''],
      gross_weight: ['', [Validators.maxLength(17),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),13)]],
      net_weight: ['', [Validators.pattern("^[0-9]*$")]],
      unit_measurement: ['', [Validators.maxLength(3)]],
      total_number_packages: ['', [Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
      marks_and_numbers: ['', [Validators.maxLength(300)]],
      loose_packates_number: ['', [Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
      containers_number: ['', [Validators.maxLength(2), Validators.pattern("^[0-9]*$")]],
      mawb_number: ['', [Validators.maxLength(15)]],
      hawb_number: ['', [Validators.maxLength(15)]],
      // amendment_type: ['', [Validators.maxLength(1)]],
      // amendment_number: ['', [Validators.maxLength(7), Validators.pattern("^[0-9]*$")]],
      // amendment_date: [''],
      gstn_type: ['', [Validators.maxLength(3), Validators.required]],
      gstn_id: ['', [Validators.maxLength(20), Validators.required]],


      // general details
      message_type: ['F', [Validators.required, Validators.maxLength(1)]],
      custom_house_code: ['', [Validators.maxLength(6)]],
      job_number: ['', [Validators.maxLength(7), Validators.pattern("^[0-9]*$")]],
      job_date: [''],
      sb_number: ['', [Validators.maxLength(7), Validators.pattern("^[0-9]*$")]],
      sb_date: [''],
      cha_license_number: ['', [Validators.required, Validators.maxLength(15)]],
      importer_exporter_code: ['', [Validators.required, Validators.maxLength(10)]],
      branch_sr_no_of_exporter: ['', [Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9]*$")]],
      importer_exporter_name: ['', [Validators.required, Validators.maxLength(50)]],
      imp_exp_address1: ['', [Validators.required, Validators.maxLength(35)]],
      imp_exp_address2: ['', [Validators.maxLength(35)]],
      imp_exp_city: ['', [Validators.maxLength(35)]],
      imp_exp_state: ['', [Validators.maxLength(25)]],
      imp_exp_pin: ['', [Validators.maxLength(6),Validators.pattern("^[0-9]*$")]],
      type_of_exporter: ['', [Validators.required, Validators.maxLength(1)]],
      exporter_class: ['', [Validators.required, Validators.maxLength(1)]],
      state_of_origin_exporter: ['', [Validators.required, Validators.maxLength(2)]],
      authorized_dealer_code: ['', [Validators.required, Validators.maxLength(10)]],
      epz_code: ['', [Validators.maxLength(1)]]
    });
  }
  isIecAvailable(event){
    this._shippingBillService.iecAvailable.next(event.value);
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

// submit on save and continue sections
onSubmit() {
  console.log(this.shipingBillSStepOne.value);

  // stepper.next();
  this.formSumitAttempt = true;
  if (this.shipingBillSStepOne.valid) {
    console.log('form submitted');
    
  } else {
    console.log('err');

  }
}

}
