import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  homeConsumptionFormStep3: FormGroup;
  @Input() index: number;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep3 = this._formBuilder.group ({
      hssf: ['', Validators.required],
      bond:['', Validators.required], 
      message_type :['',[Validators.required,Validators.maxLength(1),Validators.pattern("^[0-9a-zA-z]+$")]],
      house_code:['',[Validators.required,Validators.maxLength(6), Validators.pattern("^[0-9a-zA-Z]+$")]],
      custom_house_code:['',[Validators.required,Validators.maxLength(6), Validators.pattern("^[0-9a-zA-Z]+$")]],
      branch_sr_no:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9a-zA-Z]+$")]],
      user_job_no:['',[Validators.required,Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
      user_job_date:['',Validators.required],
      be_number:['',[Validators.required,Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
      be_date:['',Validators.required],
      iec_code:['',[Validators.maxLength(3),Validators.required,Validators.pattern("[0-9]+$")]],
      name_importer:['',[Validators.required,Validators.maxLength(50),Validators.pattern("^[a-zA-Z ]+$")]],
      address1_importer:['',[Validators.required,Validators.maxLength(35),Validators.pattern("^[a-zA-Z0-9\\s,/'-]*$")]],
      address2_importer:['',[Validators.maxLength(35),Validators.pattern("^[a-zA-Z0-9\\s,/'-]*$")]],
      city_importer:['',[Validators.required,Validators.maxLength(35),Validators.pattern("^[a-zA-Z]+$")]],
      state_importer:['',[Validators.required,Validators.maxLength(25),Validators.pattern("^[a-zA-Z]+$")]],
      pin_importer:['',[Validators.required,Validators.maxLength(6),Validators.pattern("[1-9]{1}[0-9]{5}")]],
      mode_of_transport:['', Validators.required],
      importer_type:['', Validators.required],  
      kachcha_be:['', Validators.required],
      high_sea_sale_flag: ['', Validators.required],
      permission_code:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      reason_for_request:['',[Validators.required,Validators.maxLength(2000),Validators.pattern("^[0-9a-zA-Z]+$")]],
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
      branch_serial_number:['',[Validators.maxLength(3),Validators.pattern("^[0-9]+$")]],
      port_of_origin:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      cha_code:['',[Validators.maxLength(15),Validators.required,Validators.pattern("^[0-9a-zA-Z]+$")]],
      country_of_origin:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      country_of_consignment:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      port_of_shipment:['',[Validators.required,Validators.maxLength(6),Validators.pattern("^[0-9a-zA-Z]+$")]],    
      green_channel_requested:['', Validators.required],
      section: ['', Validators.required],
      prior_be:['',Validators.required],
      authorized_dealer_code:['',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      first_check_requested:['',Validators.required],
      warehouse_code:['',[Validators.required,Validators.maxLength(8),Validators.pattern("^[0-9a-zA-Z]+$")]],
      warehouse_custom_site_id:['',[Validators.maxLength(7),Validators.pattern("[0-9]+")]],
      warehouse_be_no:['',[Validators.maxLength(7),Validators.pattern("^[0-9a-zA-Z]+$")]],
      warehouse_be_date:[''],
      no_packages_released:['',[Validators.maxLength(8),Validators.pattern("[0-9]+")]],
      package_code:['',[Validators.maxLength(13),Validators.pattern("^[0-9a-zA-Z]+$")]],
      gross_weight:['',[Validators.maxLength(3),Validators.pattern("[0-9]+")]],
      unit_of_measurement:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      additional_charges:['',[Validators.maxLength(6),Validators.pattern("[0-9]+")]],
      misc_load:['',[Validators.maxLength(6),Validators.pattern("[0-9]+$")]],
      ucr:['',[Validators.required,Validators.maxLength(35), Validators.pattern("^[0-9a-zA-Z]+$")]],
      ucr_type:['',[Validators.required,Validators.maxLength(6),Validators.pattern("^[0-9a-zA-Z]+$")]],
      payment_method_code:['',[Validators.required,Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      currency_code:['',[Validators.required,Validators.maxLength(3)]],
      standard_currency:['',[Validators.required,Validators.maxLength(1)]],
      unit_in_rs:['',[Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
      rate:['',[Validators.maxLength(9),Validators.pattern("[0-9]+$")]],
      effective_date:[''],
      bankname_non_standard_currency:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      certificate_number:['',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]],
      certificate_date:[''],
      certificate_type:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      
      invoice_date:[''],
      purchase_order_number:['',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]],
      purchase_order_date:[''],
      contract_number:['',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]],
      contract_date:[''],
      lc_number:['',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]],
      lc_date:[''],
      svb_reference_number:['',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]],
      svb_reference_date:[''],
      svb_load_assessable_value:['',[Validators.maxLength(10),Validators.pattern("[0-9]")]],
      svb_load_on_duty:['',[Validators.maxLength(10),Validators.pattern("[0-9]")]],
      svb_flag:['',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      load_final_provisional_on_ass_value:['',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      load_final_provisional_on_duty:['',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      custom_house_code_imposed_load:['',[Validators.maxLength(6),Validators.pattern("^[0-9a-zA-Z]+$")]],
  
  
      name_supplier:['',[Validators.maxLength(50),Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
      address1_supplier:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      address2_supplier:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      address3_supplier:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      country_supplier:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      pin_supplier:['',[Validators.maxLength(10),Validators.pattern("[1-9]{1}[0-9]{5}")]],
  
  
      name_seller:['',[Validators.maxLength(50),Validators.pattern("^[a-zA-Z]+$")]],
      address1_seller:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      address2_seller:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      address3_seller:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      country_seller:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      pin_seller:['',[Validators.maxLength(10),Validators.pattern("[1-9]{1}[0-9]{5}")]],
  
      name_broker:['',[Validators.maxLength(50),Validators.pattern("^[0-9a-zA-Z]+$")]],
      address1_broker:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      address2_broker:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      address3_broker:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      country_broker:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      pin_broker:['',[Validators.maxLength(10),Validators.pattern("[1-9]{1}[0-9]{9}")]],
  
      invoice_value:['',[Validators.required,Validators.maxLength(16),Validators.pattern("^[0-9]+$")]],
      terms_of_invoice:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      invoice_currency:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      nature_of_discount:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      discount_rate:['',[Validators.maxLength(6),Validators.pattern("[0-9]")]],
      discount_amount:['',[Validators.maxLength(16),Validators.pattern("[0-9]")]],
  
      hss_load_rate:['',[Validators.maxLength(6),Validators.pattern("[0-9]")]],
      hss_load_amount:['',[Validators.maxLength(16),Validators.pattern("[0-9]")]],
  
      freight_value:['',[Validators.maxLength(16),Validators.pattern("[0-9]")]],
      freight_rate:['',[Validators.maxLength(7),Validators.pattern("[0-9]")]],
      freight_actual:['',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      freight_currency:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
  
      insurance_value:['',[Validators.maxLength(16),Validators.pattern("[0-9]")]],
      insurance_rate:['',[Validators.maxLength(7),Validators.pattern("[0-9]")]],
      insurance_currency:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
  
      misc_charge:['',[Validators.maxLength(16),Validators.pattern("[0-9]")]],
      misc_currency:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      misc_rate:['',[Validators.maxLength(7),Validators.pattern("[0-9]")]],
  
      landing_rate:['',[Validators.maxLength(7),Validators.pattern("[0-9]")]],
      loading_charge:['',[Validators.maxLength(16),Validators.pattern("[0-9]")]],
      loading_currency:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      load_rate:['',[Validators.maxLength(7),Validators.pattern("[0-9]")]],
  
      agency_commission:['',[Validators.maxLength(16),Validators.pattern("[0-9]")]],
      agency_commission_currency:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      agency_commission_rate:['',[Validators.maxLength(7),Validators.pattern("[0-9]")]],
      nature_of_transaction:['',[Validators.required,Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      payment_terms:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
  
      cond_sale_1:['',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]],
      cond_sale_2:['',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]],
      cond_sale_3:['',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]],
      cond_sale_4:['',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]],
      cond_sale_5:['',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]],
  
      valuation_method_applicable:['',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]],
      actual_invoice_number:['',[Validators.required,Validators.maxLength(16),Validators.pattern("^[0-9a-zA-Z]+$")]],
      other_relevant_information:['',[Validators.maxLength(100),Validators.pattern("^[0-9a-zA-Z]+$")]],
      terms_place:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
  
      name_third_party:['',[Validators.maxLength(70),Validators.pattern("^[0-9a-zA-Z]+$")]],
      address1_third_party:['',[Validators.maxLength(70 ),Validators.pattern("^[0-9a-zA-Z]+$")]],
      address2_third_party:['',[Validators.maxLength(50),Validators.pattern("^[0-9a-zA-Z]+$")]],
      city_third_party:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      country_sub_division_third_party:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      country_code_third_party:['',[Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      pin_third_party:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      authorized_economic_operator_code:['',[Validators.maxLength(17),Validators.pattern("^[0-9a-zA-Z]+$")]],
      authorized_economic_operator:['',[Validators.maxLength(17),Validators.pattern("^[0-9a-zA-Z]+$")]],
      authorized_economic_operator_country:['',[Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      authorized_economic_operator_role:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      buyer_or_seller_related:['',[Validators.required,Validators.maxLength(70),Validators.pattern("^[0-9a-zA-Z]+$")]],
    });
  }

}
