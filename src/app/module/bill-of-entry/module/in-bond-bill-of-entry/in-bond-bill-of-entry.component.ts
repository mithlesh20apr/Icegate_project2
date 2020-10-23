import { Component, OnInit, EventEmitter,Output,ViewChild  } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Subject, BehaviorSubject } from 'rxjs';
import { MatStepper } from '@angular/material/stepper';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-in-bond-bill-of-entry',
  templateUrl: './in-bond-bill-of-entry.component.html',
  styleUrls: ['./in-bond-bill-of-entry.component.scss']
})
export class InBondBillOfEntryComponent implements OnInit {
  bill_of_entrly: FormGroup; 
  tabs = [1];
  tabs1= [1];
  tabs3=[1];
  selected = new FormControl(0);
  selected1 = new FormControl(0);
  selected3 = new FormControl(0);
  disableAddButton = false;
  disableAddButton1 = false;
  downloadJsonHref
  @ViewChild('stepper') private myStepper: MatStepper;
  constructor(private router: Router,private _fb: FormBuilder,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.bill_of_entrly = this._fb.group({


      inBondFormStep1: new FormControl(""),
      inBondFormStep2: new FormControl(""),
      inBondFormStep3: new FormControl(""),
      inBondFormStep4: new FormControl(""),
      inBondFormStep5: new FormControl(""),
      inBondFormStep6: new FormControl(""),
      inBondFormStep7: new FormControl(""),
      inBondFormStep8: new FormControl(""),
      inBondFormStep9: new FormControl(""),
      inBondFormStep10: new FormControl(""),
      inBondFormStep11: new FormControl(""),
      inBondFormStep12: new FormControl(""),
      inBondFormStep13: new FormControl(""),
      
     
    });

  }

  selectionChange($event) {
    if ($event.selectedIndex == 2 || $event.selectedIndex == 3 || $event.selectedIndex == 4) {
    }
  }

  public onFormSubmit(){
    console.log( this.bill_of_entrly.value); 
  }

  addTab() {
    this.tabs.push(this.tabs.length);
    this.selected.setValue(this.tabs.length);
    if(this.tabs.length == 3){
      this.disableAddButton = true;
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    if(this.tabs.length < 3){
      this.disableAddButton = false;
    }
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
    if(this.tabs1.length < 3){
      this.disableAddButton1 = false;
    }
  }

  onSubmit() {

    this.myStepper.next();
 }

 // import json files code there
uploadFile(event) {
  const file = (event.target as HTMLInputElement).files[0];
  var filePath = file.name;
  var allowedExtensions = /(\.json)$/i; 
  const fileReader = new FileReader();
   fileReader.readAsText(file, "UTF-8");
   fileReader.onload = () => {
     if (!allowedExtensions.exec(filePath)) { 
       Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Only Json file is allowed',
        
       }).then((result) => {
         event.target.value = '';
       })
      
     }else{
       Swal.fire({
         title: 'This file is valid',
         text: "If You want upload it.Click ok button",
         icon: 'success',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, upload it!'
       }).then((result) => {
         if (result.isConfirmed) {  
         var data = JSON.parse(fileReader.result as string);
      //  console.log(data);
         this.bill_of_entrly.patchValue({
             inBondFormStep1: {
               custom_house_code: data.inBondFormStep1.custom_house_code,
               message_type: data.inBondFormStep1.message_type,
               branch_sr_no: data.inBondFormStep1.branch_sr_no,
               user_job_no: data.inBondFormStep1.user_job_no,
               user_job_date: data.inBondFormStep1.user_job_date,
               be_number: data.inBondFormStep1.be_number,
               be_date: data.inBondFormStep1.be_date,
               iec_code: data.inBondFormStep1.iec_code,
               name_importer: data.inBondFormStep1.name_importer,
               address1_importer: data.inBondFormStep1.address1_importer,
               address2_importer: data.inBondFormStep1.address2_importer,
               city_importer: data.inBondFormStep1.city_importer,
               state_importer: data.inBondFormStep1.state_importer,
               pin_importer: data.inBondFormStep1.pin_importer,
               pin: data.inBondFormStep1.pin,
               mode_of_transport: data.inBondFormStep1.mode_of_transport,
               importer_type: data.inBondFormStep1.importer_type,
               kachcha_be: data.inBondFormStep1.kachcha_be,
               high_sea_sale_flag: data.inBondFormStep1.high_sea_sale_flag,
               permission_code: data.inBondFormStep1.permission_code,
               reason_for_request: data.inBondFormStep1.reason_for_request,
               preceding_level: data.inBondFormStep1.preceding_level,
               invoice_serial_number: data.inBondFormStep1.invoice_serial_number,
               port_of_origin: data.inBondFormStep1.port_of_origin,
               cha_code: data.inBondFormStep1.cha_code,
               country_of_origin: data.inBondFormStep1.country_of_origin,
               country_of_consignment: data.inBondFormStep1.country_of_consignment,
               port_of_shipment: data.inBondFormStep1.port_of_shipment,
               green_channel_requested: data.inBondFormStep1.green_channel_requested,
               section: data.inBondFormStep1.section,
               prior_be: data.inBondFormStep1.prior_be,
               authorized_dealer_code: data.inBondFormStep1.authorized_dealer_code,
               first_check_requested: data.inBondFormStep1.first_check_requested,
               warehouse_code: data.inBondFormStep1.warehouse_code,
               warehouse_custom_site_id: data.inBondFormStep1.warehouse_custom_site_id,
               warehouse_be_no: data.inBondFormStep1.warehouse_be_no,
               warehouse_be_date: data.inBondFormStep1.warehouse_be_date,
               no_packages_released: data.inBondFormStep1.no_packages_released,
               package_code: data.inBondFormStep1.package_code,
               gross_weight: data.inBondFormStep1.gross_weight,
               unit_of_measurement: data.inBondFormStep1.unit_of_measuremen,
               additional_charges: data.inBondFormStep1.additional_charges,
               misc_load: data.inBondFormStep1.misc_load,
               ucr: data.inBondFormStep1.ucr,
               ucr_type: data.inBondFormStep1.ucr_type,
               payment_method_code: data.inBondFormStep1.payment_method_code

             },
             inBondFormStep2: {
               currency_code: data.inBondFormStep2.currency_code,
               standard_currency:data.inBondFormStep2.standard_currency,
               unit_in_rs:data.inBondFormStep2.unit_in_rs,
               rate:data.inBondFormStep2.rate,
               effective_date:data.inBondFormStep2.effective_date,
               bankname_non_standard_currency:data.inBondFormStep2.bankname_non_standard_currency,
               certificate_number:data.inBondFormStep2.certificate_number,
               certificate_date:data.inBondFormStep2.certificate_date,
               certificate_type:data.inBondFormStep2.certificate_type
             },
             inBondFormStep3: {
              invoice_serial_number:data.inBondFormStep3.invoice_serial_number,
              invoice_date:data.inBondFormStep3.invoice_date,
              purchase_order_number:data.inBondFormStep3.purchase_order_number,
              purchase_order_date:data.inBondFormStep3.purchase_order_date,
              contract_number:data.inBondFormStep3.contract_number,
              contract_date:data.inBondFormStep3.contract_date,
              lc_number:data.inBondFormStep3.lc_number,
              lc_date:data.inBondFormStep3.lc_date,
              svb_reference_number:data.inBondFormStep3.svb_reference_number,
              svb_reference_date:data.inBondFormStep3.svb_reference_date,
              svb_load_assessable_value:data.inBondFormStep3.svb_load_assessable_value,
              svb_load_on_duty:data.inBondFormStep3.svb_load_on_duty,
              svb_flag:data.inBondFormStep3.svb_flag,
              load_final_provisional_on_ass_value:data.inBondFormStep3.load_final_provisional_on_ass_value,
              load_final_provisional_on_duty:data.inBondFormStep3.load_final_provisional_on_duty,
              custom_house_code_imposed_load:data.inBondFormStep3.custom_house_code_imposed_load,
          
              name_supplier:data.inBondFormStep3.name_supplier,
              address1_supplier:data.inBondFormStep3.address1_supplier,
              address2_supplier:data.inBondFormStep3.address2_supplier,
              address3_supplier:data.inBondFormStep3.address3_supplier,
              country_supplier:data.inBondFormStep3.country_supplier,
              pin_supplier:data.inBondFormStep3.pin_supplier,
          
          
              name_seller:data.inBondFormStep3.name_seller,
              address1_seller:data.inBondFormStep3.address1_seller,
              address2_seller:data.inBondFormStep3.address2_seller,
              address3_seller:data.inBondFormStep3.address3_seller,
              country_seller:data.inBondFormStep3.country_seller,
              pin_seller:data.inBondFormStep3.pin_seller,
          
              name_broker:data.inBondFormStep3.name_broker,
              address1_broker:data.inBondFormStep3.address1_broker,
              address2_broker:data.inBondFormStep3.address2_broker,
              address3_broker:data.inBondFormStep3.address3_broker,
              country_broker:data.inBondFormStep3.country_broker,
              pin_broker:data.inBondFormStep3.pin_broker,
          
              invoice_value:data.inBondFormStep3.invoice_value,
              terms_of_invoice:data.inBondFormStep3.terms_of_invoice,
              invoice_currency:data.inBondFormStep3.invoice_currency,
              nature_of_discount:data.inBondFormStep3.nature_of_discount,
              discount_rate:data.inBondFormStep3.discount_rate,
              discount_amount:data.inBondFormStep3.discount_amount,
          
              hss_load_rate:data.inBondFormStep3.hss_load_rate,
              hss_load_amount:data.inBondFormStep3.hss_load_amount,
          
              freight_value:data.inBondFormStep3.freight_value,
              freight_rate:data.inBondFormStep3.freight_rate,
              freight_actual:data.inBondFormStep3.freight_actual,
              freight_currency:data.inBondFormStep3.freight_currency,
          
              insurance_value:data.inBondFormStep3.insurance_value,
              insurance_rate:data.inBondFormStep3.insurance_rate,
              insurance_currency:data.inBondFormStep3.insurance_currency,
          
              misc_charge:data.inBondFormStep3.misc_charge,
              misc_currency:data.inBondFormStep3.misc_currency,
              misc_rate:data.inBondFormStep3.misc_rate,
          
              landing_rate:data.inBondFormStep3.landing_rate,
              loading_charge:data.inBondFormStep3.loading_charge,
              loading_currency:data.inBondFormStep3.loading_currency,
              load_rate:data.inBondFormStep3.load_rate,
          
              agency_commission:data.inBondFormStep3.agency_commission,
              agency_commission_currency:data.inBondFormStep3.agency_commission_currency,
              agency_commission_rate:data.inBondFormStep3.agency_commission_rate,
              nature_of_transaction:data.inBondFormStep3.nature_of_transaction,
              payment_terms:data.inBondFormStep3.payment_terms,
          
              cond_sale_1:data.inBondFormStep3.cond_sale_1,
              cond_sale_2:data.inBondFormStep3.cond_sale_2,
              cond_sale_3:data.inBondFormStep3.cond_sale_3,
              cond_sale_4:data.inBondFormStep3.cond_sale_4,
              cond_sale_5:data.inBondFormStep3.cond_sale_5,
          
              valuation_method_applicable:data.inBondFormStep3.valuation_method_applicable,
              actual_invoice_number:data.inBondFormStep3.actual_invoice_number,
              other_relevant_information:data.inBondFormStep3.other_relevant_information,
              terms_place:data.inBondFormStep3.terms_place,
          
              name_third_party:data.inBondFormStep3.name_third_party,
              address1_third_party:data.inBondFormStep3.address1_third_party,
              address2_third_party:data.inBondFormStep3.address2_third_party,
              city_third_party:data.inBondFormStep3.city_third_party,
              country_sub_division_third_party:data.inBondFormStep3.country_sub_division_third_party,
              country_code_third_party:data.inBondFormStep3.country_code_third_party,
              pin_third_party:data.inBondFormStep3.pin_third_party,
          
              authorized_economic_operator:data.inBondFormStep3.authorized_economic_operator,
              authorized_economic_operator_country:data.inBondFormStep3.authorized_economic_operator_country,
              authorized_economic_operator_role:data.inBondFormStep3.authorized_economic_operator_role,
              buyer_or_seller_related:data.inBondFormStep3.buyer_or_seller_related,
        
              authorized_economic_operator_code:data.inBondFormStep3.authorized_economic_operator_code,
             },
             inBondFormStep4: {
              invoice_serial_number:data.inBondFormStep4.invoice_serial_number,
              misc_charge_code:data.inBondFormStep4.misc_charge_code,
              misc_description:data.inBondFormStep4.misc_description,
              misc_charges:data.inBondFormStep4.misc_charges,
              misc_rate:data.inBondFormStep4.misc_rate,
             },
            //  inBondFormStep5: {
            //   invoice_serial_number:  data.inBondFormStep5.invoice_serial_number,
            //   item_serial_number:  data.inBondFormStep5.item_serial_number,
            //   item_quantity:  data.inBondFormStep5.item_quantity,
            //   unit_quantity_code:  data.inBondFormStep5.unit_quantity_code,
            //   ritc_code:  data.inBondFormStep5.ritc_code,
            //   item_description1:  data.inBondFormStep5.item_description1,
            //   item_description2:  data.inBondFormStep5.item_description2,
            //   item_category:  data.inBondFormStep5.item_category,
            //   item_description_generic:  data.inBondFormStep5.item_description_generic,
            //   item_accessories:  data.inBondFormStep5.item_accessories,
            //   name_producer:  data.inBondFormStep5.name_producer,
            //   name_brand:  data.inBondFormStep5.name_brand,
            //   model:  data.inBondFormStep5.model,
            //   end_use_item:  data.inBondFormStep5.end_use_item,
            //   country_of_origin_of_item:  data.inBondFormStep5.country_of_origin_of_item,
            //   cth:  data.inBondFormStep5.cth,
            //   preferential_or_standard:  data.inBondFormStep5.preferential_or_standard,
            //   ceth:  data.inBondFormStep5.ceth,
            //   bcd_notification:  data.inBondFormStep5.bcd_notification,
            //   bcd_notification_sr_no:  data.inBondFormStep5.bcd_notification_sr_no,
            //   cvd_notification:  data.inBondFormStep5.cvd_notification,
            //   cvd_notification_sr_no:  data.inBondFormStep5.cvd_notification_sr_no,
            //   additional_notification1:  data.inBondFormStep5.additional_notification1,
            //   additional_notification1_sr_no:  data.inBondFormStep5.additional_notification1_sr_no,
            //   additional_notification2:  data.inBondFormStep5.additional_notification2,
            //   additional_notification2_sr_no:  data.inBondFormStep5.additional_notification2_sr_no,
            //   other_notification:  data.inBondFormStep5.other_notification,
            //   other_notification_sr_no:  data.inBondFormStep5.other_notification_sr_no,
            //   cex_educess_notification:  data.inBondFormStep5.cex_educess_notification,
            //   cex_educess_notification_sr_no:  data.inBondFormStep5.cex_educess_notification_sr_no,
            //   cus_educess_notification:  data.inBondFormStep5.cus_educess_notification,
            //   cus_educess_notification_sr_no:  data.inBondFormStep5.cus_educess_notification_sr_no,
            //   ncd_notification:  data.inBondFormStep5.ncd_notification,
            //   ncd_notification_sr_no:  data.inBondFormStep5.ncd_notification_sr_no,
            //   antii_dumping_duty_notification:  data.inBondFormStep5.antii_dumping_duty_notification,
            //   antii_dumping_duty_notification_sr_no:  data.inBondFormStep5.antii_dumping_duty_notification_sr_no,
            //   cth_serial_number:  data.inBondFormStep5.cth_serial_number,
            //   supplier_serial_number:  data.inBondFormStep5.supplier_serial_number,
            //   quantity_antii_dumping_duty_notification:  data.inBondFormStep5.quantity_antii_dumping_duty_notification,
            //   quantity_tariff_value_notification:  data.inBondFormStep5.quantity_tariff_value_notification,
            //   tariff_value_notification:  data.inBondFormStep5.tariff_value_notification,
            //   tariff_value_notification_sr_no:  data.inBondFormStep5.tariff_value_notification_sr_no,
            //   quantiy_tariff_value_notification:  data.inBondFormStep5.quantiy_tariff_value_notification,
            //   sapta_notification:  data.inBondFormStep5.sapta_notification,
            //   sapta_notification_sr_no:  data.inBondFormStep5.sapta_notification_sr_no,
            //   health_notification:  data.inBondFormStep5.health_notification,
            //   health_notification_sr_no:  data.inBondFormStep5.health_notification_sr_no,
            //   additional_cvd_notification:  data.inBondFormStep5.additional_cvd_notification,
            //   additional_cvd_notification_sr_no:  data.inBondFormStep5.additional_cvd_notification_sr_no,
            //   aggregate_duty_notification:  data.inBondFormStep5.aggregate_duty_notification,
            //   aggregate_duty_notification_sr_no:  data.inBondFormStep5.aggregate_duty_notification_sr_no,
            //   safeguard_duty_notification:  data.inBondFormStep5.safeguard_duty_notification,
            //   safeguard_duty_notification_sr_no:  data.inBondFormStep5.safeguard_duty_notification_sr_no,
            //   unit_price_invoiced:  data.inBondFormStep5.unit_price_invoiced,
            //   discount_rate:  data.inBondFormStep5.discount_rate,
            //   discount_amount:  data.inBondFormStep5.discount_amount,
            //   quantity_cth:  data.inBondFormStep5.quantity_cth,
            //   svb_reference_number:  data.inBondFormStep5.svb_reference_number,
            //   svb_load_assessable_value:  data.inBondFormStep5.svb_load_assessable_value,
            //   svb_load_on_duty:  data.inBondFormStep5.svb_load_on_duty,
            //   svb_flag:  data.inBondFormStep5.svb_flag,
            //   load_final_provisional_on_ass_value:  data.inBondFormStep5.load_final_provisional_on_ass_value,
            //   load_final_provisional_on_duty:  data.inBondFormStep5.load_final_provisional_on_duty,
            //   custom_house_code_imposed_load:  data.inBondFormStep5.custom_house_code_imposed_load,
            //   policy_para_no:  data.inBondFormStep5.policy_para_no,
            //   policy_year:  data.inBondFormStep5.policy_year,
            //   rsp_applicability:  data.inBondFormStep5.rsp_applicability,
            //   re_import:  data.inBondFormStep5.re_import,
            //   prev_be_no:  data.inBondFormStep5.prev_be_no,
            //   prev_be_date:  data.inBondFormStep5.prev_be_date,
            //   prev_unit_price:  data.inBondFormStep5.prev_unit_price,
            //   prev_unit_currency:  data.inBondFormStep5.prev_unit_currency,
            //   prev_customm_site:  data.inBondFormStep5.prev_customm_site,
            //   custom_notifictaion_exempting_central_excise_flag:  data.inBondFormStep5.custom_notifictaion_exempting_central_excise_flag,
            //   producer_code:  data.inBondFormStep5.producer_code,
            //   grower_code:  data.inBondFormStep5.grower_code,
            //   address1_grower:  data.inBondFormStep5.address1_grower,
            //   address2_grower:  data.inBondFormStep5.address2_grower,
            //   city_grower:  data.inBondFormStep5.city_grower,
            //   country_sub_division_grower:  data.inBondFormStep5.country_sub_division_grower,
            //   pin_grower:  data.inBondFormStep5.pin_grower,
            //   country_grower:  data.inBondFormStep5.country_grower,
            //   source_country:  data.inBondFormStep5.source_country,
            //   transit_country:  data.inBondFormStep5.transit_country,
            //   accessory_status:  data.inBondFormStep5.accessory_status,
            //   active_ingredient_flag:  data.inBondFormStep5.active_ingredient_flag,
            //   ritc_qualifier:  data.inBondFormStep5.ritc_qualifier,
            //   info_type:  data.inBondFormStep5.info_type,
            //   info_qualifier:  data.inBondFormStep5.info_qualifier,
            //   info_code:  data.inBondFormStep5.info_code,
            //   info_text:  data.inBondFormStep5.info_text,
            //   info_msr:  data.inBondFormStep5.info_msr,
            //   info_uqc:  data.inBondFormStep5.info_uqc,
            //   constituent_serial_number:  data.inBondFormStep5.constituent_serial_number,
            //   constituent_element_name:  data.inBondFormStep5.constituent_element_name,
            //   constituent_element_code:  data.inBondFormStep5.constituent_element_code,
            //   constituent_percentage:  data.inBondFormStep5.constituent_percentage,
            //   constituent_yield_percentage:  data.inBondFormStep5.constituent_yield_percentage,
            //   production_batch_identifier:  data.inBondFormStep5.production_batch_identifier,
            //   production_batch_quantity:  data.inBondFormStep5.production_batch_quantity,
            //   date_manufacturing:  data.inBondFormStep5.date_manufacturing,
            //   date_expiry:  data.inBondFormStep5.date_expiry,
            //   best_before:  data.inBondFormStep5.best_before,
            //   control_type_code:  data.inBondFormStep5.control_type_code,
            //   control_location:  data.inBondFormStep5.control_location,
            //   control_start_date:  data.inBondFormStep5.control_start_date,
            //   control_end_date:  data.inBondFormStep5.control_end_date,
            //   control_result_code:  data.inBondFormStep5.control_result_code,
            //   control_result_text:  data.inBondFormStep5.control_result_text,
            //   invoice_serial_number_on:  data.inBondFormStep5.invoice_serial_number_on,
            //   item_serial_number_invoice:  data.inBondFormStep5.item_serial_number_invoice,
            //   notification_number:  data.inBondFormStep5.notification_number,
            //   notification_serial_number:  data.inBondFormStep5.notification_serial_number,
            //   duty_type:  data.inBondFormStep5.duty_type,
            //   additional_duty_flag:  data.inBondFormStep5.additional_duty_flag,
            //   exmp_notification:  data.inBondFormStep5.exmp_notification,
            //   exmp_notification_serial_number:  data.inBondFormStep5.exmp_notification_serial_number,
            //   customs_exmp:  data.inBondFormStep5.customs_exmp,
            //   suplier_number:  data.inBondFormStep5.suplier_number,
            //   nou:  data.inBondFormStep5.nou,
            //   debit_unit_of_measurement:  data.inBondFormStep5.debit_unit_of_measurement,
            //   license_registration_number:  data.inBondFormStep5.license_registration_number,
            //   license_code:  data.inBondFormStep5.license_code,
            //   license_registration_date:  data.inBondFormStep5.license_registration_date,
            //   license_reg_port:  data.inBondFormStep5.license_reg_port,
            //   item_serial_number_license:  data.inBondFormStep5.item_serial_number_license,
            //   shipping_bill_no:  data.inBondFormStep5.shipping_bill_no,
            //   shipping_bill_date:  data.inBondFormStep5.shipping_bill_date,
            //   invoice_no_sb:  data.inBondFormStep5.invoice_no_sb
            //  },
             inBondFormStep6:{
              invoice_serial_number:data.inBondFormStep6.invoice_serial_number,
              item_serial_number:data.inBondFormStep6.item_serial_number,
              item_serial_number_invoice:data.inBondFormStep6.item_serial_number_invoice,
              item_serial_number_rsp:data.inBondFormStep6.item_serial_number_rsp,
              rsp:data.inBondFormStep6.rsp,
              quantity:data.inBondFormStep6.quantity,
              description:data.inBondFormStep6.description,
              rsp_notification:data.inBondFormStep6.rsp_notification,
              rsp_notification_sr_no:data.inBondFormStep6.rsp_notification_sr_no
             },
             inBondFormStep7:{
              invoice_serial_number:data.inBondFormStep7.invoice_serial_number,
              item_serial_number_invoice:data.inBondFormStep7.item_serial_number_invoice,
              bcd_notification:data.inBondFormStep7.bcd_notification,
              bcd_notification_sr_no:data.inBondFormStep7.bcd_notification_sr_no,
              exemption_required:data.inBondFormStep7.exemption_required
             },
             inBondFormStep8:{
              bond_number: data.inBondFormStep8.bond_number,
              bond_code: data.inBondFormStep8.bond_code,
              bond_port: data.inBondFormStep8.bond_port,
              bond: data.inBondFormStep8.bond,
              certificate_number: data.inBondFormStep8.certificate_number,
              certificate_date: data.inBondFormStep8.certificate_date,
              certificate_type: data.inBondFormStep8.certificate_type
             },
             inBondFormStep9:{
              igm_no:data.inBondFormStep9.igm_no,
              igm_date:data.inBondFormStep9.igm_date,
              inward_date:data.inBondFormStep9.inward_date,
              gateway_igm_number:data.inBondFormStep9.gateway_igm_number,
              gateway_igm_date:data.inBondFormStep9.gateway_igm_date,
              gateway_port_code:data.inBondFormStep9.gateway_port_code,
              gross_weight:data.inBondFormStep9.gross_weight,
              mawb_bl_no:data.inBondFormStep9.mawb_bl_no,
              mawb_bl_date:data.inBondFormStep9.mawb_bl_date,
              hawb_hbl_no:data.inBondFormStep9.hawb_hbl_no,
              hawb_hbl_date:data.inBondFormStep9.hawb_hbl_date,
              total_number_of_packages:data.inBondFormStep9.total_number_of_packages,
              marks_number1:data.inBondFormStep9.marks_number1,
              marks_number2:data.inBondFormStep9.marks_number2,
              marks_number3:data.inBondFormStep9.marks_number3,
              unit_quantity_code:data.inBondFormStep9.unit_quantity_code,
              package_code:data.inBondFormStep9.package_code
             },
             inBondFormStep10:{
              igm_no:data.inBondFormStep10.igm_no,
              igm_date:data.inBondFormStep10.igm_date,
              lcl_fcl:data.inBondFormStep10.lcl_fcl,
              container_number:data.inBondFormStep10.container_number,
              seal_number:data.inBondFormStep10.seal_number,
              truck_number:data.inBondFormStep10.truck_number
             },
             inBondFormStep11:{
              state_code:data.inBondFormStep11.state_code,
              commercial_tax_registration:data.inBondFormStep11.commercial_tax_registration,
              commercial_tax_type:data.inBondFormStep11.commercial_tax_type
             },
             inBondFormStep12:{
              invoice_serial_number:data.inBondFormStep12.invoice_serial_number,
              item_serial_number:data.inBondFormStep12.item_serial_number,
              decleration_type: data.inBondFormStep12.decleration_type,
              decleration_number:data.inBondFormStep12.decleration_number,
              decleration_date:data.inBondFormStep12.decleration_date,
              statement_type:data.inBondFormStep12.statement_type,
              statement_code:data.inBondFormStep12.statement_code,
              statement_text:data.inBondFormStep12.statement_text
             },
            inBondFormStep13:{
              invoice_serial_number:data.inBondFormStep13.invoice_serial_number,
              item_serial_number:data.inBondFormStep13.item_serial_number,
              decleration_type: data.inBondFormStep13.decleration_type,
              cha_license_number:data.inBondFormStep13.cha_license_number,
              iec:data.inBondFormStep13.iec,
              icegate_user_id:data.inBondFormStep13.icegate_user_id,
              image_reference_number:data.inBondFormStep13.image_reference_number,
              document_type_code:data.inBondFormStep13.document_type_code,
              document_issuing_party_code:data.inBondFormStep13.document_issuing_party_code,
              document_issuing_party_name:data.inBondFormStep13.document_issuing_party_name,
              document_issuing_party_name_address1:data.inBondFormStep13.document_issuing_party_name_address1,
              document_issuing_party_name_address2:data.inBondFormStep13.document_issuing_party_name_address2,
              document_issuing_party_name_city:data.inBondFormStep13.document_issuing_party_name_city,
              document_issuing_party_name_pin:data.inBondFormStep13.document_issuing_party_name_pin,
              document_reference_number:data.inBondFormStep13.document_reference_number,
              place_of_issue:data.inBondFormStep13.place_of_issue,
              document_issue_date:data.inBondFormStep13.document_issue_date,
              document_expiry_date:data.inBondFormStep13.document_expiry_date,
              document_beneficary_party_code:data.inBondFormStep13.document_beneficary_party_code,
              document_beneficary_party_name:data.inBondFormStep13.document_beneficary_party_name,
              document_beneficary_party_name_address1:data.inBondFormStep13.document_beneficary_party_name_address1,
              document_beneficary_party_name_address2:data.inBondFormStep13.document_beneficary_party_name_address2,
              document_beneficary_party_name_city:data.inBondFormStep13.document_beneficary_party_name_city,
              document_beneficary_party_name_pin:data.inBondFormStep13.document_beneficary_party_name_pin,
              file_type:data.inBondFormStep13.file_type
            }
             
             
         }, );
       }
       });
   }
   }
   fileReader.onerror = (error) => {
     console.log(error);
   }

 }
 // Download bill of entry in json format
 downloadbillentry() { 
   let formObj = this.bill_of_entrly.getRawValue();
   let serializedForm = JSON.stringify(formObj);
   var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(serializedForm));
   this.downloadJsonHref = uri;
  // console.log(serializedForm);
 }

}
