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
      unit_quantity_code:['',[Validators.required,Validators.maxLength(3)]],
      ritc_code:['',[Validators.required,Validators.maxLength(8)]],
      item_description1:['',[Validators.required,Validators.maxLength(60)]],
      item_description2:['',[Validators.maxLength(60)]],
      item_category:['',[Validators.maxLength(2)]],
      item_description_generic:['',[Validators.maxLength(60)]],
      item_accessories:['',[Validators.maxLength(2000)]],

      name_producer:['',[Validators.maxLength(50)]],
      name_brand:['',[Validators.required,Validators.maxLength(20)]],
      model:['',[Validators.required,Validators.maxLength(20)]],
      end_use_item:['',[Validators.required,Validators.maxLength(20)]],
      country_of_origin_of_item:['',[Validators.required,Validators.maxLength(2)]],
      cth:['',[Validators.required,Validators.maxLength(8)]],
      preferential_or_standard:['',[Validators.required,Validators.maxLength(1)]],
      ceth:['',[Validators.required,Validators.maxLength(8)]],

      bcd_notification:['',[Validators.required,Validators.maxLength(10)]],
      bcd_notification_sr_no: ['',[Validators.required,Validators.maxLength(10)]],
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
      ncd_notification_sr_no: ['',[Validators.maxLength(10)]],
      antii_dumping_duty_notification:['',[Validators.maxLength(10)]],
      antii_dumping_duty_notification_sr_no: ['',[Validators.maxLength(10)]],
      
      cth_serial_number:['',[Validators.maxLength(10)]],
      supplier_serial_number:['',[Validators.maxLength(10)]],
      quantity_antii_dumping_duty_notification:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      quantity_tariff_value_notification:['',[Validators.maxLength(16),Validators.pattern("[0-9]")]],
      tariff_value_notification:['',[Validators.maxLength(10),Validators.pattern("[0-9]+$")]],
      tariff_value_notification_sr_no: ['',[Validators.maxLength(10)]],
      quantiy_tariff_value_notification:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      sapta_notification:['',[Validators.maxLength(10)]],
      sapta_notification_sr_no: ['',[Validators.maxLength(10)]],
      health_notification:['',[Validators.maxLength(10)]],
      health_notification_sr_no: ['',[Validators.maxLength(10)]],
      additional_cvd_notification:['',[Validators.maxLength(10)]],
      additional_cvd_notification_sr_no: ['',[Validators.maxLength(10)]],
      aggregate_duty_notification:['',[Validators.maxLength(10)]],
      aggregate_duty_notification_sr_no: ['',[Validators.maxLength(10)]],
      safeguard_duty_notification:['',[Validators.maxLength(10)]],
      safeguard_duty_notification_sr_no: ['',[Validators.maxLength(10)]],

      unit_price_invoiced:['',[Validators.required,Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      discount_rate:['',[Validators.maxLength(6),Validators.pattern("[0-9]")]],
      discount_amount:['',[Validators.maxLength(16),Validators.pattern("[0-9]")]],
      quantity_cth:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      svb_reference_number:['',[Validators.maxLength(20)]],
      svb_reference_date:[''],
      svb_load_assessable_value:['',[Validators.maxLength(10),Validators.pattern("[0-9]")]],
      svb_load_on_duty:['',[Validators.maxLength(10),Validators.pattern("[0-9]")]],
      svb_flag:['',[Validators.maxLength(1)]],
      load_final_provisional_on_ass_value:['',[Validators.maxLength(1)]],
      load_final_provisional_on_duty:['',[Validators.maxLength(1)]],
      custom_house_code_imposed_load:['',[Validators.maxLength(6)]],
      policy_para_no:['',[Validators.maxLength(7)]],
      policy_year:['',[Validators.maxLength(5)]],
      rsp_applicability:['',[Validators.required,Validators.maxLength(2)]],
      re_import:['',Validators.required],
      prev_be_no:['',[Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
      prev_be_date:[''],
      prev_unit_price:['',[Validators.maxLength(16)]],
      prev_unit_currency:['',[Validators.maxLength(3)]],
      prev_customm_site:['',[Validators.maxLength(6)]],
      custom_notifictaion_exempting_central_excise_flag:[ '',[Validators.maxLength(1)]],
      producer_code:['',[Validators.maxLength(1)]],
      grower_code:['',[Validators.maxLength(17)]],
      address1_grower:['',[Validators.maxLength(70)]],
      address2_grower:['',[Validators.maxLength(50)]],
      city_grower:['',[Validators.maxLength(35)]],
      country_sub_division_grower:['',[Validators.maxLength(35)]],
      pin_grower:['',[Validators.maxLength(10)]],
      country_grower:['',[Validators.maxLength(2)]],
      source_country:['',[Validators.maxLength(2)]],
      transit_country:['',[Validators.maxLength(2),Validators.pattern("[^[0-9a-zA-Z]+$")]],
      accessory_status:['',[Validators.required,Validators.maxLength(1)]],
      
      active_ingredient_flag: ['', Validators.required],
      ritc_qualifier:['',[Validators.required,Validators.maxLength(100)]],
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
      debit_unit_of_measurement:['',[Validators.maxLength(3)]],
      license_registration_number:['',[Validators.required,Validators.maxLength(10),Validators.pattern("[0-9]+$")]],
      license_code:['',[Validators.required,Validators.maxLength(2)]],
      license_registration_date:['',Validators.required],
      license_reg_port:['',[Validators.required,Validators.maxLength(2)]],
      item_serial_number_license:['',[Validators.required,Validators.maxLength(4),Validators.pattern("[0-9]+$")]],

      shipping_bill_no:['',[Validators.required,Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
      shipping_bill_date:['',Validators.required],
      invoice_no_sb:['',[Validators.maxLength(2),Validators.pattern("[0-9]+$")]],


      port_of_export:['',[Validators.required,Validators.maxLength(6)]],
      item_no_sb:['',[Validators.maxLength(4),Validators.pattern("[0-9]+$")]],
      export_freight:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      notification_no:['',[Validators.required,Validators.maxLength(10)]],
      notification_sr_no:['',[Validators.required,Validators.maxLength(10)]],
      export_insurance:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      customs_duty:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      excise_duty:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      exmp_notification_no:['',[Validators.maxLength(10)]],
      exmp_notification_sr_no:['',[Validators.maxLength(10)]],
      custom_notifictaion_exempting_igst_flag:['',[Validators.maxLength(1)]],
      item_slno:['',[Validators.maxLength(10)]],
      supplier_slno:['',[Validators.maxLength(10)]],
      permission_code:['',[Validators.required,Validators.maxLength(3)]],
      debit_value:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      debit_quantity:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
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
