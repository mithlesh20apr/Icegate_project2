import { Component, OnInit, EventEmitter,Output,ViewChild  } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Subject, BehaviorSubject } from 'rxjs';
import { MatStepper } from '@angular/material/stepper';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-normal-bill-of-entry',
  templateUrl: './normal-bill-of-entry.component.html',
  styleUrls: ['./normal-bill-of-entry.component.scss']
})
export class NormalBillOfEntryComponent implements OnInit {

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


      homeConsumptionFormStep1: new FormControl(""),
      homeConsumptionFormStep2: new FormControl(""),
      homeConsumptionFormStep3: new FormControl(""),
      homeConsumptionFormStep4: new FormControl(""),
      homeConsumptionFormStep5: new FormControl(""),
      homeConsumptionFormStep6: new FormControl(""),
      homeConsumptionFormStep7: new FormControl(""),
      homeConsumptionFormStep8: new FormControl(""),
      homeConsumptionFormStep9: new FormControl(""),
      homeConsumptionFormStep10: new FormControl(""),
      homeConsumptionFormStep11: new FormControl(""),
      homeConsumptionFormStep12: new FormControl(""),
      homeConsumptionFormStep13: new FormControl(""),
      
     
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
        console.log(data);
         this.bill_of_entrly.patchValue({
             homeConsumptionFormStep1: {
               custom_house_code: data.homeConsumptionFormStep1.custom_house_code,
               message_type: data.homeConsumptionFormStep1.message_type,
               branch_sr_no: data.homeConsumptionFormStep1.branch_sr_no,
               user_job_no: data.homeConsumptionFormStep1.user_job_no,
               user_job_date: data.homeConsumptionFormStep1.user_job_date,
               be_number: data.homeConsumptionFormStep1.be_number,
               be_date: data.homeConsumptionFormStep1.be_date,
               iec_code: data.homeConsumptionFormStep1.iec_code,
               name_importer: data.homeConsumptionFormStep1.name_importer,
               address1_importer: data.homeConsumptionFormStep1.address1_importer,
               address2_importer: data.homeConsumptionFormStep1.address2_importer,
               city_importer: data.homeConsumptionFormStep1.city_importer,
               state_importer: data.homeConsumptionFormStep1.state_importer,
               pin_importer: data.homeConsumptionFormStep1.pin_importer,
               pin: data.homeConsumptionFormStep1.pin,
               mode_of_transport: data.homeConsumptionFormStep1.mode_of_transport,
               importer_type: data.homeConsumptionFormStep1.importer_type,
               kachcha_be: data.homeConsumptionFormStep1.kachcha_be,
               high_sea_sale_flag: data.homeConsumptionFormStep1.high_sea_sale_flag,
               permission_code: data.homeConsumptionFormStep1.permission_code,
               reason_for_request: data.homeConsumptionFormStep1.reason_for_request,
               preceding_level: data.homeConsumptionFormStep1.preceding_level,
               invoice_serial_number: data.homeConsumptionFormStep1.invoice_serial_number,
               port_of_origin: data.homeConsumptionFormStep1.port_of_origin,
               cha_code: data.homeConsumptionFormStep1.cha_code,
               country_of_origin: data.homeConsumptionFormStep1.country_of_origin,
               country_of_consignment: data.homeConsumptionFormStep1.country_of_consignment,
               port_of_shipment: data.homeConsumptionFormStep1.port_of_shipment,
               green_channel_requested: data.homeConsumptionFormStep1.green_channel_requested,
               section: data.homeConsumptionFormStep1.section,
               prior_be: data.homeConsumptionFormStep1.prior_be,
               authorized_dealer_code: data.homeConsumptionFormStep1.authorized_dealer_code,
               first_check_requested: data.homeConsumptionFormStep1.first_check_requested,
               warehouse_code: data.homeConsumptionFormStep1.warehouse_code,
               warehouse_custom_site_id: data.homeConsumptionFormStep1.warehouse_custom_site_id,
               warehouse_be_no: data.homeConsumptionFormStep1.warehouse_be_no,
               warehouse_be_date: data.homeConsumptionFormStep1.warehouse_be_date,
               no_packages_released: data.homeConsumptionFormStep1.no_packages_released,
               package_code: data.homeConsumptionFormStep1.package_code,
               gross_weight: data.homeConsumptionFormStep1.gross_weight,
               unit_of_measurement: data.homeConsumptionFormStep1.unit_of_measuremen,
               additional_charges: data.homeConsumptionFormStep1.additional_charges,
               misc_load: data.homeConsumptionFormStep1.misc_load,
               ucr: data.homeConsumptionFormStep1.ucr,
               ucr_type: data.homeConsumptionFormStep1.ucr_type,
               payment_method_code: data.homeConsumptionFormStep1.payment_method_code

             },
             homeConsumptionFormStep2: {
               currency_code: data.homeConsumptionFormStep2.currency_code,
              //  standard_currency:data.homeConsumptionFormStep2.standard_currency,
               unit_in_rs:data.homeConsumptionFormStep2.unit_in_rs,
               rate:data.homeConsumptionFormStep2.rate,
               effective_date:data.homeConsumptionFormStep2.effective_date,
               bankname_non_standard_currency:data.homeConsumptionFormStep2.bankname_non_standard_currency,
               certificate_number:data.homeConsumptionFormStep2.certificate_number,
               certificate_date:data.homeConsumptionFormStep2.certificate_date,
              //  certificate_type:data.homeConsumptionFormStep2.certificate_type
             },
             homeConsumptionFormStep3: {
              invoice_serial_number:data.homeConsumptionFormStep3.invoice_serial_number,
              invoice_date:data.homeConsumptionFormStep3.invoice_date,
              purchase_order_number:data.homeConsumptionFormStep3.purchase_order_number,
              purchase_order_date:data.homeConsumptionFormStep3.purchase_order_date,
              contract_number:data.homeConsumptionFormStep3.contract_number,
              contract_date:data.homeConsumptionFormStep3.contract_date,
              lc_number:data.homeConsumptionFormStep3.lc_number,
              lc_date:data.homeConsumptionFormStep3.lc_date,
              svb_reference_number:data.homeConsumptionFormStep3.svb_reference_number,
              svb_reference_date:data.homeConsumptionFormStep3.svb_reference_date,
              svb_load_assessable_value:data.homeConsumptionFormStep3.svb_load_assessable_value,
              svb_load_on_duty:data.homeConsumptionFormStep3.svb_load_on_duty,
              svb_flag:data.homeConsumptionFormStep3.svb_flag,
              load_final_provisional_on_ass_value:data.homeConsumptionFormStep3.load_final_provisional_on_ass_value,
              load_final_provisional_on_duty:data.homeConsumptionFormStep3.load_final_provisional_on_duty,
              custom_house_code_imposed_load:data.homeConsumptionFormStep3.custom_house_code_imposed_load,
          
              name_supplier:data.homeConsumptionFormStep3.name_supplier,
              address1_supplier:data.homeConsumptionFormStep3.address1_supplier,
              address2_supplier:data.homeConsumptionFormStep3.address2_supplier,
              address3_supplier:data.homeConsumptionFormStep3.address3_supplier,
              country_supplier:data.homeConsumptionFormStep3.country_supplier,
              pin_supplier:data.homeConsumptionFormStep3.pin_supplier,
          
          
              name_seller:data.homeConsumptionFormStep3.name_seller,
              address1_seller:data.homeConsumptionFormStep3.address1_seller,
              address2_seller:data.homeConsumptionFormStep3.address2_seller,
              address3_seller:data.homeConsumptionFormStep3.address3_seller,
              country_seller:data.homeConsumptionFormStep3.country_seller,
              pin_seller:data.homeConsumptionFormStep3.pin_seller,
          
              name_broker:data.homeConsumptionFormStep3.name_broker,
              address1_broker:data.homeConsumptionFormStep3.address1_broker,
              address2_broker:data.homeConsumptionFormStep3.address2_broker,
              address3_broker:data.homeConsumptionFormStep3.address3_broker,
              country_broker:data.homeConsumptionFormStep3.country_broker,
              pin_broker:data.homeConsumptionFormStep3.pin_broker,
          
              invoice_value:data.homeConsumptionFormStep3.invoice_value,
              terms_of_invoice:data.homeConsumptionFormStep3.terms_of_invoice,
              invoice_currency:data.homeConsumptionFormStep3.invoice_currency,
              nature_of_discount:data.homeConsumptionFormStep3.nature_of_discount,
              discount_rate:data.homeConsumptionFormStep3.discount_rate,
              discount_amount:data.homeConsumptionFormStep3.discount_amount,
          
              hss_load_rate:data.homeConsumptionFormStep3.hss_load_rate,
              hss_load_amount:data.homeConsumptionFormStep3.hss_load_amount,
          
              freight_value:data.homeConsumptionFormStep3.freight_value,
              freight_rate:data.homeConsumptionFormStep3.freight_rate,
              freight_actual:data.homeConsumptionFormStep3.freight_actual,
              freight_currency:data.homeConsumptionFormStep3.freight_currency,
          
              insurance_value:data.homeConsumptionFormStep3.insurance_value,
              insurance_rate:data.homeConsumptionFormStep3.insurance_rate,
              insurance_currency:data.homeConsumptionFormStep3.insurance_currency,
          
              misc_charge:data.homeConsumptionFormStep3.misc_charge,
              misc_currency:data.homeConsumptionFormStep3.misc_currency,
              misc_rate:data.homeConsumptionFormStep3.misc_rate,
          
              landing_rate:data.homeConsumptionFormStep3.landing_rate,
              loading_charge:data.homeConsumptionFormStep3.loading_charge,
              loading_currency:data.homeConsumptionFormStep3.loading_currency,
              load_rate:data.homeConsumptionFormStep3.load_rate,
          
              agency_commission:data.homeConsumptionFormStep3.agency_commission,
              agency_commission_currency:data.homeConsumptionFormStep3.agency_commission_currency,
              agency_commission_rate:data.homeConsumptionFormStep3.agency_commission_rate,
              nature_of_transaction:data.homeConsumptionFormStep3.nature_of_transaction,
              payment_terms:data.homeConsumptionFormStep3.payment_terms,
          
              cond_sale_1:data.homeConsumptionFormStep3.cond_sale_1,
              cond_sale_2:data.homeConsumptionFormStep3.cond_sale_2,
              cond_sale_3:data.homeConsumptionFormStep3.cond_sale_3,
              cond_sale_4:data.homeConsumptionFormStep3.cond_sale_4,
              cond_sale_5:data.homeConsumptionFormStep3.cond_sale_5,
          
              valuation_method_applicable:data.homeConsumptionFormStep3.valuation_method_applicable,
              actual_invoice_number:data.homeConsumptionFormStep3.actual_invoice_number,
              other_relevant_information:data.homeConsumptionFormStep3.other_relevant_information,
              terms_place:data.homeConsumptionFormStep3.terms_place,
          
              name_third_party:data.homeConsumptionFormStep3.name_third_party,
              address1_third_party:data.homeConsumptionFormStep3.address1_third_party,
              address2_third_party:data.homeConsumptionFormStep3.address2_third_party,
              city_third_party:data.homeConsumptionFormStep3.city_third_party,
              country_sub_division_third_party:data.homeConsumptionFormStep3.country_sub_division_third_party,
              country_code_third_party:data.homeConsumptionFormStep3.country_code_third_party,
              pin_third_party:data.homeConsumptionFormStep3.pin_third_party,
          
              authorized_economic_operator:data.homeConsumptionFormStep3.authorized_economic_operator,
              authorized_economic_operator_country:data.homeConsumptionFormStep3.authorized_economic_operator_country,
              authorized_economic_operator_role:data.homeConsumptionFormStep3.authorized_economic_operator_role,
              buyer_or_seller_related:data.homeConsumptionFormStep3.buyer_or_seller_related,
        
              authorized_economic_operator_code:data.homeConsumptionFormStep3.authorized_economic_operator_code,
             },
             homeConsumptionFormStep4: {
              invoice_serial_number:data.homeConsumptionFormStep4.invoice_serial_number,
              misc_charge_code:data.homeConsumptionFormStep4.misc_charge_code,
              misc_description:data.homeConsumptionFormStep4.misc_description,
              misc_charges:data.homeConsumptionFormStep4.misc_charges,
              misc_rate:data.homeConsumptionFormStep4.misc_rate,
             },
             homeConsumptionFormStep6:{
              invoice_serial_number:data.homeConsumptionFormStep6.invoice_serial_number,
              item_serial_number_invoice:data.homeConsumptionFormStep6.item_serial_number_invoice,
              item_serial_number_rsp:data.homeConsumptionFormStep6.item_serial_number_rsp,
              rsp:data.homeConsumptionFormStep6.rsp,
              quantity:data.homeConsumptionFormStep6.quantity,
              description:data.homeConsumptionFormStep6.description,
              rsp_notification:data.homeConsumptionFormStep6.rsp_notification,
              rsp_notification_sr_no:data.homeConsumptionFormStep6.rsp_notification_sr_no
             },
             homeConsumptionFormStep7:{
              invoice_serial_number:data.homeConsumptionFormStep7.invoice_serial_number,
              item_serial_number_invoice:data.homeConsumptionFormStep7.item_serial_number_invoice,
              bcd_notification:data.homeConsumptionFormStep7.bcd_notification,
              bcd_notification_sr_no:data.homeConsumptionFormStep7.bcd_notification_sr_no,
              exemption_required:data.homeConsumptionFormStep7.exemption_required
             },
             homeConsumptionFormStep8:{
              bond_number:data.homeConsumptionFormStep8.bond_number,
              bond_code:data.homeConsumptionFormStep8.bond_code,
              bond_port:data.homeConsumptionFormStep8.bond_port,
              bond:data.homeConsumptionFormStep8.bond,
              certificate_number:data.homeConsumptionFormStep8.certificate_number,
              certificate_date:data.homeConsumptionFormStep8.certificate_date,
              certificate_type:data.homeConsumptionFormStep8.certificate_type
             },
             homeConsumptionFormStep9:{
              igm_no:data.homeConsumptionFormStep9.igm_no,
              igm_date:data.homeConsumptionFormStep9.igm_date,
              inward_date:data.homeConsumptionFormStep9.inward_date,
              gateway_igm_number:data.homeConsumptionFormStep9.gateway_igm_number,
              gateway_igm_date:data.homeConsumptionFormStep9.gateway_igm_date,
              gateway_port_code:data.homeConsumptionFormStep9.gateway_port_code,
              gross_weight:data.homeConsumptionFormStep9.gross_weight,
              mawb_bl_no:data.homeConsumptionFormStep9.mawb_bl_no,
              mawb_bl_date:data.homeConsumptionFormStep9.mawb_bl_date,
              hawb_hbl_no:data.homeConsumptionFormStep9.hawb_hbl_no,
              hawb_hbl_date:data.homeConsumptionFormStep9.hawb_hbl_date,
              total_number_of_packages:data.homeConsumptionFormStep9.total_number_of_packages,
              marks_number1:data.homeConsumptionFormStep9.marks_number1,
              marks_number2:data.homeConsumptionFormStep9.marks_number2,
              marks_number3:data.homeConsumptionFormStep9.marks_number3,
              unit_quantity_code:data.homeConsumptionFormStep9.unit_quantity_code,
              package_code:data.homeConsumptionFormStep9.package_code
             },
             homeConsumptionFormStep10:{
              igm_no:data.homeConsumptionFormStep10.igm_no,
              igm_date:data.homeConsumptionFormStep10.igm_date,
              lcl_fcl:data.homeConsumptionFormStep10.lcl_fcl,
              container_number:data.homeConsumptionFormStep10.container_number,
              seal_number:data.homeConsumptionFormStep10.seal_number,
              truck_number:data.homeConsumptionFormStep10.truck_number
             },
             homeConsumptionFormStep11:{
              state_code:data.homeConsumptionFormStep11.state_code,
              commercial_tax_registration:data.homeConsumptionFormStep11.commercial_tax_registration,
              commercial_tax_type:data.homeConsumptionFormStep11.commercial_tax_type
             },
             homeConsumptionFormStep12:{
              invoice_serial_number:data.homeConsumptionFormStep12.invoice_serial_number,
              item_serial_number:data.homeConsumptionFormStep12.item_serial_number,
              decleration_type: data.homeConsumptionFormStep12.decleration_type,
              decleration_number:data.homeConsumptionFormStep12.decleration_number,
              decleration_date:data.homeConsumptionFormStep12.decleration_date,
              statement_type:data.homeConsumptionFormStep12.statement_type,
              statement_code:data.homeConsumptionFormStep12.statement_code,
              statement_text:data.homeConsumptionFormStep12.statement_text
             },
            homeConsumptionFormStep13:{
              invoice_serial_number:data.homeConsumptionFormStep13.invoice_serial_number,
              item_serial_number:data.homeConsumptionFormStep13.item_serial_number,
              decleration_type: data.homeConsumptionFormStep13.decleration_type,
              cha_license_number:data.homeConsumptionFormStep13.cha_license_number,
              iec:data.homeConsumptionFormStep13.iec,
              icegate_user_id:data.homeConsumptionFormStep13.icegate_user_id,
              image_reference_number:data.homeConsumptionFormStep13.image_reference_number,
              document_type_code:data.homeConsumptionFormStep13.document_type_code,
              document_issuing_party_code:data.homeConsumptionFormStep13.document_issuing_party_code,
              document_issuing_party_name:data.homeConsumptionFormStep13.document_issuing_party_name,
              document_issuing_party_name_address1:data.homeConsumptionFormStep13.document_issuing_party_name_address1,
              document_issuing_party_name_address2:data.homeConsumptionFormStep13.document_issuing_party_name_address2,
              document_issuing_party_name_city:data.homeConsumptionFormStep13.document_issuing_party_name_city,
              document_issuing_party_name_pin:data.homeConsumptionFormStep13.document_issuing_party_name_pin,
              document_reference_number:data.homeConsumptionFormStep13.document_reference_number,
              place_of_issue:data.homeConsumptionFormStep13.place_of_issue,
              document_issue_date:data.homeConsumptionFormStep13.document_issue_date,
              document_expiry_date:data.homeConsumptionFormStep13.document_expiry_date,
              document_beneficary_party_code:data.homeConsumptionFormStep13.document_beneficary_party_code,
              document_beneficary_party_name:data.homeConsumptionFormStep13.document_beneficary_party_name,
              document_beneficary_party_name_address1:data.homeConsumptionFormStep13.document_beneficary_party_name_address1,
              document_beneficary_party_name_address2:data.homeConsumptionFormStep13.document_beneficary_party_name_address2,
              document_beneficary_party_name_city:data.homeConsumptionFormStep13.document_beneficary_party_name_city,
              document_beneficary_party_name_pin:data.homeConsumptionFormStep13.document_beneficary_party_name_pin,
              file_type:data.homeConsumptionFormStep13.file_type
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
