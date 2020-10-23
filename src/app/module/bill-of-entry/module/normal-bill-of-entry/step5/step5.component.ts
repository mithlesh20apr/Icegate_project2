import { Component, OnInit, Input,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms'; 

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step5Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step5Component),
      multi: true
    }
  ]
})
export class Step5Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  tabs = [1];
  tabs1= [1];
  tabs3=[1];
  selected = new FormControl(0);
  selected1 = new FormControl(0);
  selected3 = new FormControl(0);
  disableAddButton = false;
  disableAddButton1 = false;
  homeConsumptionFormStep5: FormGroup;
  private formSumitAttempt:boolean
  @Input() index: number;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep5 = this._formBuilder.group ({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),Validators.pattern("[0-9]+$")]],
      item_serial_number:['',[Validators.required,Validators.maxLength(4),Validators.pattern("[0-9]+$")]],
      item_quantity:['',[Validators.required,Validators.maxLength(16),Validators.pattern("[0-9]")]],
      unit_quantity_code:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      ritc_code:['',[Validators.required,Validators.maxLength(8),Validators.pattern("^[0-9a-zA-Z]+$")]],
      item_description1:['',[Validators.required,Validators.maxLength(60),Validators.pattern("^[0-9a-zA-Z]+$")]],
      item_description2:['',[Validators.maxLength(60),Validators.pattern("^[0-9a-zA-Z]+$")]],
      item_category:['',[Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      item_description_generic:['',[Validators.maxLength(60),Validators.pattern("^[0-9a-zA-Z]+$")]],
      item_accessories:['',[Validators.maxLength(2000),Validators.pattern("^[0-9a-zA-Z]+$")]],

      name_producer:['',[Validators.maxLength(50),Validators.pattern("^[0-9a-zA-Z]+$")]],
      name_brand:['',[Validators.required,Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]],
      model:['',[Validators.required,Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]],
      end_use_item:['',[Validators.required,Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]],
      country_of_origin_of_item:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      cth:['',[Validators.required,Validators.maxLength(8),Validators.pattern("^[0-9a-zA-Z]+$")]],
      preferential_or_standard:['',[Validators.required,Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      ceth:['',[Validators.required,Validators.maxLength(8),Validators.pattern("^[0-9a-zA-Z]+$")]],

      bcd_notification:['',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      bcd_notification_sr_no: ['',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      cvd_notification:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      cvd_notification_sr_no: ['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      additional_notification1:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      additional_notification1_sr_no: ['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      additional_notification2:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      additional_notification2_sr_no: ['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      other_notification:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      other_notification_sr_no: ['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      cex_educess_notification:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      cex_educess_notification_sr_no: ['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      cus_educess_notification:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      cus_educess_notification_sr_no: ['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      ncd_notification:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      ncd_notification_sr_no: ['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      antii_dumping_duty_notification:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      antii_dumping_duty_notification_sr_no: ['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      
      cth_serial_number:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      supplier_serial_number:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      quantity_antii_dumping_duty_notification:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      quantity_tariff_value_notification:['',[Validators.maxLength(16),Validators.pattern("[0-9]")]],
      tariff_value_notification:['',[Validators.maxLength(10),Validators.pattern("[0-9]+$")]],
      tariff_value_notification_sr_no: ['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      quantiy_tariff_value_notification:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      sapta_notification:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      sapta_notification_sr_no: ['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      health_notification:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      health_notification_sr_no: ['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      additional_cvd_notification:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      additional_cvd_notification_sr_no: ['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      aggregate_duty_notification:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      aggregate_duty_notification_sr_no: ['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      safeguard_duty_notification:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      safeguard_duty_notification_sr_no: ['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],

      unit_price_invoiced:['',[Validators.required,Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      discount_rate:['',[Validators.maxLength(6),Validators.pattern("[0-9]")]],
      discount_amount:['',[Validators.maxLength(16),Validators.pattern("[0-9]")]],
      quantity_cth:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      svb_reference_number:['',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]],
      svb_load_assessable_value:['',[Validators.maxLength(10),Validators.pattern("[0-9]")]],
      svb_load_on_duty:['',[Validators.maxLength(10),Validators.pattern("[0-9]")]],
      svb_flag:['',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      load_final_provisional_on_ass_value:['',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      load_final_provisional_on_duty:['',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      custom_house_code_imposed_load:['',[Validators.maxLength(6),Validators.pattern("^[0-9a-zA-Z]+$")]],
      policy_para_no:['',[Validators.maxLength(7),Validators.pattern("^[0-9a-zA-Z]+$")]],
      policy_year:['',[Validators.maxLength(5),Validators.pattern("^[0-9a-zA-Z]+$")]],
      rsp_applicability:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      re_import:['',Validators.required],
      prev_be_no:['',[Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
      prev_be_date:[''],
      prev_unit_price:['',[Validators.maxLength(16),Validators.pattern("^[0-9a-zA-Z]+$")]],
      prev_unit_currency:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      prev_customm_site:['',[Validators.maxLength(6),Validators.pattern("^[0-9a-zA-Z]+$")]],
      custom_notifictaion_exempting_central_excise_flag:[ '',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      producer_code:['',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      grower_code:['',[Validators.maxLength(17),Validators.pattern("^[0-9a-zA-Z]+$")]],
      address1_grower:['',[Validators.maxLength(70),Validators.pattern("^[0-9a-zA-Z]+$")]],
      address2_grower:['',[Validators.maxLength(50),Validators.pattern("^[0-9a-zA-Z]+$")]],
      city_grower:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      country_sub_division_grower:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      pin_grower:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      country_grower:['',[Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      source_country:['',[Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      transit_country:['',[Validators.maxLength(2),Validators.pattern("[^[0-9a-zA-Z]+$")]],
      accessory_status:['',[Validators.required,Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      
      active_ingredient_flag: ['', Validators.required],
      ritc_qualifier:['',[Validators.required,Validators.maxLength(100),Validators.pattern("^[0-9a-zA-Z]+$")]],
      info_type:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[a-zA-Z]+$")]],
      info_qualifier:['',[Validators.required,Validators.maxLength(100),Validators.pattern("^[a-zA-Z]+$")]],
      info_code:['',[Validators.maxLength(100),Validators.pattern("^[a-zA-Z]+$")]],
      info_text:['',[,Validators.maxLength(100),Validators.pattern("^[a-zA-Z]+$")]],
      info_msr:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      info_uqc:['',[Validators.maxLength(3),Validators.pattern("^[a-zA-Z]+$")]],

      constituent_serial_number:['',[Validators.required,Validators.maxLength(3),Validators.pattern("[0-9]+$")]],
      constituent_element_name:['',[Validators.required,Validators.maxLength(256),Validators.pattern("^[a-zA-Z]+$")]],
      constituent_element_code:['',[Validators.required,Validators.maxLength(17),Validators.pattern("^[a-zA-Z]+$")]],
      constituent_percentage:['',[Validators.required,Validators.maxLength(6),Validators.pattern("[0-9]+$")]],
      constituent_yield_percentage:['',[Validators.required,Validators.maxLength(6),Validators.pattern("[0-9]+$")]],
  
      production_batch_identifier:['',[Validators.required,Validators.maxLength(17),Validators.pattern("^[a-zA-Z]+$")]],
      production_batch_quantity:['',[Validators.required,Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      date_manufacturing:['',Validators.required],
      date_expiry:['',Validators.required],
      best_before:['',Validators.required],
  
      control_type_code:['',[Validators.required,Validators.maxLength(17),Validators.pattern("^[a-zA-Z]+$")]],
      control_location:['',[Validators.required,Validators.maxLength(17),Validators.pattern("^[a-zA-Z]+$")]],
      control_start_date:[''],
      control_end_date:[''],
      control_result_code:['',[Validators.required,Validators.maxLength(17),Validators.pattern("^[a-zA-Z]+$")]],
      control_result_text:['',[Validators.maxLength(4000),Validators.pattern("^[a-zA-Z]+$")]],
      


      item_serial_number_invoice:['',[Validators.maxLength(4),Validators.required,Validators.pattern("[0-9]+$")]],
      notification_number:['',[Validators.maxLength(10),Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
      notification_serial_number:['',[Validators.maxLength(10),Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
      duty_type:['',[Validators.required]],
      additional_duty_flag:['',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
      exmp_notification:['',[Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]],

      exmp_notification_serial_number:['',[Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]],
      customs_exmp:['',[Validators.pattern("^[a-zA-Z]+$")]],
      suplier_number:['',[Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]],
      nou:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      debit_unit_of_measurement:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      license_registration_number:['',[Validators.required,Validators.maxLength(10),Validators.pattern("[0-9]+$")]],
      license_code:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      license_registration_date:['',Validators.required],
      license_reg_port:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      item_serial_number_license:['',[Validators.required,Validators.maxLength(4),Validators.pattern("[0-9]+$")]],

      shipping_bill_no:['',[Validators.required,Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
      shipping_bill_date:['',Validators.required],
      invoice_no_sb:['',[Validators.maxLength(2),Validators.pattern("[0-9]+$")]],
    });
  }
  addTab1() {
    this.tabs1.push(this.tabs1.length);
    this.selected1.setValue(this.tabs1.length);
    if(this.tabs1.length == 3){
      this.disableAddButton1 = true;
    }
  }

  removeTab1(index: number) {
    this.tabs1.splice(index, 1);
    if(this.tabs.length < 3){
      this.disableAddButton1 = false;
    }
  }
}
