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
        console.log(data);
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
               class:data.inBondFormStep1.class,
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
               unit_of_measurement: data.inBondFormStep1.unit_of_measurement,
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
              //  certificate_type:data.inBondFormStep2.certificate_type
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
          
              // authorized_economic_operator:data.inBondFormStep3.authorized_economic_operator,
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
           
             inBondFormStep6:{
              invoice_serial_number:data.inBondFormStep6.invoice_serial_number,
              // item_serial_number:data.inBondFormStep6.item_serial_number,
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
              bond_number:data.inBondFormStep8.bond_number,
              // bond_code:data.inBondFormStep8.bond_code,
              bond_port:data.inBondFormStep8.bond_port,
              bond:data.inBondFormStep8.bond,
              certificate_number:data.inBondFormStep8.certificate_number,
              certificate_date:data.inBondFormStep8.certificate_date,
              certificate_type:data.inBondFormStep8.certificate_type
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
              // decleration_date:data.inBondFormStep12.decleration_date,
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
              document_beneficiary_party_code:data.inBondFormStep13.document_beneficiary_party_code,
              document_beneficiary_party_name:data.inBondFormStep13.document_beneficiary_party_name,
              document_beneficiary_party_name_address1:data.inBondFormStep13.document_beneficiary_party_name_address1,
              document_beneficiary_party_name_address2:data.inBondFormStep13.document_beneficiary_party_name_address2,
              document_beneficiary_party_name_city:data.inBondFormStep13.document_beneficiary_party_name_city,
              document_beneficiary_party_name_pin:data.inBondFormStep13.document_beneficiary_party_name_pin,
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
