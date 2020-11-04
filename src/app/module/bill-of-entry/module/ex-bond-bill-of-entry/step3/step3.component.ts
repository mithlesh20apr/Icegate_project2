import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors} from '@angular/forms';
import { ValidatorsService } from '../../../../common/service/validators.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step3Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step3Component),
      multi: true
    }
  ]
})
export class Step3Component implements OnInit {
  panelOpenState = false;
  isLinear = false;
  @Input() index: number;
  exBondFormStep3: FormGroup;
  private formSumitAttempt: boolean;
 
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.exBondFormStep3= this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]],
      item_serial_number:['',[Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]],
      item_quantity:['',[Validators.required,Validators.maxLength(16),ValidatorsService.numberValidator]],
      unit_quantity_code:['',[Validators.required,Validators.maxLength(3)]],
      ritc_code:['',[Validators.required,Validators.maxLength(8)]],
  
     
      item_category:['',[Validators.maxLength(2)]],
      
      country_of_origin_of_item:['',[Validators.maxLength(2)]],
      cth:['',[Validators.required,Validators.maxLength(8)]],
      preferential_or_standard:['',[Validators.required,Validators.maxLength(1)]],
      ceth:['',[Validators.required,Validators.maxLength(8)]],
  
      bcd_notification:['',[Validators.maxLength(10)]],
      bcd_notification_sr_no: ['',[Validators.maxLength(10)]],
      cvd_notification:['',[Validators.maxLength(10)]],
      cvd_notification_sr_no: ['',[Validators.maxLength(10)]],
      additional_notification1:['',[Validators.maxLength(10)]],
      additional_notification1_sr_no: ['',[Validators.maxLength(10)]],
      additional_notification2:['',[Validators.maxLength(10)]],
      additional_notification2_sr_no: ['',[Validators.maxLength(10)]],
      other_notification:['',[Validators.maxLength(10)]],
      other_notification_sr_no: ['',[Validators.maxLength(10)]],
      cex_educess_notification:['',[Validators.maxLength(10)]],
      cex_educess_notification_sr_no: ['',[Validators.maxLength(10)]],
      cus_educess_notification:['',[Validators.maxLength(10)]],
      cus_educess_notification_sr_no: ['',[Validators.maxLength(10)]],
      ncd_notification:['',[Validators.maxLength(10)]],
      ncd_notification_sr_no: ['',Validators.maxLength(10)],
      antii_dumping_duty_notification:['',Validators.maxLength(10)],
      antii_dumping_duty_notification_sr_no: ['',Validators.maxLength(10)],
      
      cth_serial_number:['',Validators.maxLength(10)],
      supplier_serial_number:['',Validators.maxLength(10)],
      quantity_antii_dumping_duty_notification:['',[Validators.maxLength(16),ValidatorsService.numberValidator]],
      quantity_tariff_value_notification:['',[Validators.maxLength(16),ValidatorsService.numberValidator]],
      tariff_value_notification:['',[Validators.maxLength(10)]],
      tariff_value_notification_sr_no: ['',[Validators.maxLength(10)]],
      quantiy_tariff_value_notification:['',[Validators.maxLength(16),ValidatorsService.numberValidator]],
      sapta_notification:['',Validators.maxLength(10)],
      sapta_notification_sr_no: ['',Validators.maxLength(10)],
      health_notification:['',Validators.maxLength(10)],
      health_notification_sr_no: ['',Validators.maxLength(10)],
      additional_cvd_notification:['',Validators.maxLength(10)],
      additional_cvd_notification_sr_no: ['',Validators.maxLength(10)],
      aggregate_duty_notification:['',Validators.maxLength(10)],
      aggregate_duty_notification_sr_no: ['',Validators.maxLength(10)],
      safeguard_duty_notification:['',[Validators.maxLength(10)]],
      safeguard_duty_notification_sr_no: ['',Validators.maxLength(10)],
  
      unit_price_invoiced:['',[Validators.required,Validators.maxLength(16),ValidatorsService.numberValidator]],
      discount_rate:['',[Validators.maxLength(6),ValidatorsService.numberValidator]],
      discount_amount:['',[Validators.maxLength(16),ValidatorsService.numberValidator]],
      quantity_cth:['',[Validators.maxLength(16),ValidatorsService.numberValidator]],
      svb_reference_date:[''],
      svb_reference_number:['',Validators.maxLength(20)],
      svb_load_assessable_value:['',[Validators.maxLength(10),ValidatorsService.numberValidator]],
      svb_load_on_duty:['',[Validators.maxLength(10),ValidatorsService.numberValidator]],
      svb_flag:['',Validators.maxLength(1)],
      load_final_provisional_on_ass_value:['',Validators.maxLength(1)],
      load_final_provisional_on_duty:['',Validators.maxLength(1)],
      custom_house_code_imposed_load:['',Validators.maxLength(6)],
  
      policy_para_no:['',Validators.maxLength(7)],
      policy_year:['',Validators.maxLength(5)],
      rsp_applicability:['',[Validators.required,Validators.maxLength(2)]],
      re_import:['',Validators.required],
      prev_be_no:['',[Validators.maxLength(7),ValidatorsService.numberValidator]],
      prev_be_date:[''],
      prev_unit_price:['',Validators.maxLength(16)],
      prev_unit_currency:['',Validators.maxLength(3)],
      prev_customm_site:['',Validators.maxLength(6)],
      custom_notifictaion_exempting_central_excise_flag:[ '',Validators.maxLength(1)],
      producer_code:['',Validators.maxLength(1)],
      grower_code:['',Validators.maxLength(17)],
      address1_grower:['',Validators.maxLength(70)],
      address2_grower:['',Validators.maxLength(50)],
      city_grower:['',[Validators.maxLength(35)]],
      country_sub_division_grower:['',[Validators.maxLength(35)]],
      pin_grower:['',[Validators.maxLength(10),ValidatorsService.numberValidator]],
      country_grower:['',Validators.maxLength(2)],
      source_country:['',Validators.maxLength(2)],
      transit_country:['',Validators.maxLength(2)],
      accessory_status:['',Validators.maxLength(1)],

      ritc_qualifier:['',[Validators.required,Validators.maxLength(100)]],
      
      // info_type:['',[Validators.required,Validators.maxLength(3)]],
      // info_qualifier:['',[Validators.required,Validators.maxLength(100)]],
      // info_code:['',[Validators.maxLength(100)]],
      // info_text:['',[,Validators.maxLength(100)]],
      // info_msr:['',[Validators.maxLength(16),ValidatorsService.numberValidator]],
      // info_uqc:['',[Validators.maxLength(3)]],

      // constituent_serial_number:['',[Validators.required,Validators.maxLength(3)]],
      // constituent_element_name:['',[Validators.required,Validators.maxLength(256)]],
      // constituent_element_code:['',[Validators.required,Validators.maxLength(17)]],
      // constituent_percentage:['',[Validators.required,Validators.maxLength(6),ValidatorsService.numberValidator]],
      // constituent_yield_percentage:['',[Validators.required,Validators.maxLength(6),ValidatorsService.numberValidator]],
      // active_ingredient_flag: ['', Validators.required],

      // production_batch_identifier:['',[Validators.required,Validators.maxLength(3)]],
      // production_batch_quantity:['',[Validators.required,Validators.maxLength(16),ValidatorsService.numberValidator]],
      // date_manufacturing:['',Validators.required],
      // date_expiry:['',Validators.required],
      // best_before:['',Validators.required],
  
      // control_type_code:['',[Validators.required,Validators.maxLength(17)]],
      // control_location:['',[Validators.required,Validators.maxLength(17)]],
      // control_start_date:[''],
      // control_end_date:[''],
      // control_result_code:['',[Validators.required,Validators.maxLength(17)]],
      // control_result_text:['',Validators.maxLength(4000)],

      item_serial_number_invoice:['',[Validators.maxLength(4),Validators.required,ValidatorsService.numberValidator]],
      notification_number:['',[Validators.maxLength(10),Validators.required]],
      notification_serial_number:['',[Validators.maxLength(10),Validators.required]],
      duty_type:['',[Validators.required]],
      additional_duty_flag:['',Validators.required],
      exmp_notification:['',Validators.maxLength(10)],

      exmp_notification_serial_number:['',Validators.maxLength(10)],
      customs_exmp:[''],
      suplier_number:['',[Validators.maxLength(10)]],
      nou:['',[Validators.maxLength(16),ValidatorsService.numberValidator]],
    })
  }
    // validation code
    public onTouched: () => void = () => {

      //console.log('data');
    };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.exBondFormStep3.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.exBondFormStep3.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.exBondFormStep3.disable() : this.exBondFormStep3.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.exBondFormStep3.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }


  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.exBondFormStep3.get(field).valid && this.exBondFormStep3.get(field).touched) ||
      (this.exBondFormStep3.get(field).untouched && this.formSumitAttempt)
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
    console.log(this.exBondFormStep3.value);

    // stepper.next();
    this.formSumitAttempt = true;
    if (this.exBondFormStep3.valid) {
      console.log('form submitted');
      
    } else {
      console.log('err');

    }
  }

  }


