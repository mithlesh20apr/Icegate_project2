import { Component, OnInit, EventEmitter,Output,ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Subject, BehaviorSubject } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { MatStepper } from '@angular/material/stepper';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";
import {IndexService} from '../../../common/service/index.service';
@Component({
  selector: 'app-exbond-bill-of-entry',
  templateUrl: './exbond-bill-of-entry.component.html',
  styleUrls: ['./exbond-bill-of-entry.component.scss'],
  providers: [IndexService]
})
export class ExbondBillOfEntryComponent implements OnInit {
  bill_of_entry: FormGroup; 
  tabs = [0];
  tabs1= [0];
  disableAddButton = false;
  disableAddButton1 = false;
  selected = new FormControl(0);
  selected1 = new FormControl(0);

  downloadJsonHref
  @ViewChild('stepper') private myStepper: MatStepper;
  constructor(private _apiService: IndexService,private http: HttpClient,private router: Router,private _fb: FormBuilder,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.bill_of_entry = this._fb.group({
      webFormTypeId: new FormControl("1"),
      icegateId: new FormControl("1"),
      exBondFormStep1: new FormControl(""),
      exBondFormStep2: new FormControl(""),
      exBondFormStep3: new FormControl(""),
      exBondFormStep4: new FormControl(""),
      exBondFormStep5: new FormControl(""),
      exBondFormStep6: new FormControl(""),
      exBondFormStep7: new FormControl(""), 

    });  
  }

  selectionChange($event) {
    if ($event.selectedIndex == 2 || $event.selectedIndex == 3 || $event.selectedIndex == 4) {
    }
  }

  public onFormSubmit(){
    console.log( this.bill_of_entry.value); 
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
         this.bill_of_entry.patchValue({
             exBondFormStep1: {
               custom_house_code: data.exBondFormStep1.custom_house_code,
               message_type: data.exBondFormStep1.message_type,
               branch_sr_no: data.exBondFormStep1.branch_sr_no,
               iec_code: data.exBondFormStep1.iec_code,
               name_importer: data.exBondFormStep1.name_importer,
               address1_importer: data.exBondFormStep1.address1_importer,
               address2_importer: data.exBondFormStep1.address2_importer,
               city_importer: data.exBondFormStep1.city_importer,
               state_importer: data.exBondFormStep1.state_importer,
               pin_importer: data.exBondFormStep1.pin_importer,
               pin: data.exBondFormStep1.pin,
               mode_of_transport: data.exBondFormStep1.mode_of_transport,
               importer_type: data.exBondFormStep1.importer_type,
               kachcha_be: data.exBondFormStep1.kachcha_be,
               high_sea_sale_flag: data.exBondFormStep1.high_sea_sale_flag,
               permission_code: data.exBondFormStep1.permission_code,
               reason_for_request: data.exBondFormStep1.reason_for_request,
               preceding_level: data.exBondFormStep1.preceding_level,
               invoice_serial_number: data.exBondFormStep1.invoice_serial_number,
               port_of_origin: data.exBondFormStep1.port_of_origin,
               cha_code: data.exBondFormStep1.cha_code,
               country_of_origin: data.exBondFormStep1.country_of_origin,
               country_of_consignment: data.exBondFormStep1.country_of_consignment,
               port_of_shipment: data.exBondFormStep1.port_of_shipment,
               green_channel_requested: data.exBondFormStep1.green_channel_requested,
               section: data.exBondFormStep1.section,
               prior_be: data.exBondFormStep1.prior_be,
               authorized_dealer_code: data.exBondFormStep1.authorized_dealer_code,
               first_check_requested: data.exBondFormStep1.first_check_requested,
               warehouse_code: data.exBondFormStep1.warehouse_code,
               warehouse_custom_site_id: data.exBondFormStep1.warehouse_custom_site_id,
               warehouse_be_no: data.exBondFormStep1.warehouse_be_no,
               warehouse_be_date: data.exBondFormStep1.warehouse_be_date,
               no_packages_released: data.exBondFormStep1.no_packages_released,
               package_code: data.exBondFormStep1.package_code,
               gross_weight: data.exBondFormStep1.gross_weight,
               unit_of_measurement: data.exBondFormStep1.unit_of_measuremen,
               additional_charges: data.exBondFormStep1.additional_charges,
               misc_load: data.exBondFormStep1.misc_load,
               ucr: data.exBondFormStep1.ucr,
               ucr_type: data.exBondFormStep1.ucr_type,
               payment_method_code: data.exBondFormStep1.payment_method_code
             },
             exBondFormStep2:{
              invoice_serial_number:data.exBondFormStep2.invoice_serial_number,
              invoice_date:data.exBondFormStep2.invoice_date,
              actual_invoice_number:data.exBondFormStep2.actual_invoice_number,
              address1_third_party:data.exBondFormStep2.address1_third_party,
              address2_third_party:data.exBondFormStep2.address2_third_party,
              city_third_party:data.exBondFormStep2.city_third_party,
              country_sub_division_third_party:data.exBondFormStep2.country_sub_division_third_party,
              country_code_third_party:data.exBondFormStep2.country_code_third_party,
              pin_third_party:data.exBondFormStep2.pin_third_party,
              authorized_economic_operator:data.exBondFormStep2.authorized_economic_operator,
              authorized_economic_operator_country:data.exBondFormStep2.authorized_economic_operator_country,
              authorized_economic_operator_role:data.exBondFormStep2.authorized_economic_operator_role,
              buyer_or_seller_related:data.exBondFormStep2.buyer_or_seller_related,
             },
             exBondFormStep3:{
              invoice_serial_number:data.exBondFormStep3.invoice_serial_number,
              item_serial_number:data.exBondFormStep3.item_serial_number,
              item_quantity:data.exBondFormStep3.item_quantity,
              unit_quantity_code:data.exBondFormStep3.unit_quantity_code,
              ritc_code:data.exBondFormStep3.ritc_code,
              item_category:data.exBondFormStep3.item_category,
              country_of_origin_of_item:data.exBondFormStep3.country_of_origin_of_item,
              cth:data.exBondFormStep3.cth,
              preferential_or_standard:data.exBondFormStep3.preferential_or_standard,
              ceth:data.exBondFormStep3.ceth,
              
              bcd_notification:data.exBondFormStep3.bcd_notification,
              bcd_notification_sr_no:data.exBondFormStep3.bcd_notification_sr_no,
              cvd_notification:data.exBondFormStep3.cvd_notification,
              cvd_notification_sr_no:data.exBondFormStep3.cvd_notification_sr_no,
              additional_notification1:data.exBondFormStep3.additional_notification1,
              additional_notification1_sr_no:data.exBondFormStep3.additional_notification1_sr_no,
              additional_notification2:data.exBondFormStep3.additional_notification2,
              additional_notification2_sr_no:data.exBondFormStep3.additional_notification2_sr_no,
              other_notification:data.exBondFormStep3.other_notification,
              other_notification_sr_no:data.exBondFormStep3.other_notification_sr_no,
              cex_educess_notification:data.exBondFormStep3.cex_educess_notification,
              cex_educess_notification_sr_no:data.exBondFormStep3.cex_educess_notification_sr_no,
              cus_educess_notification:data.exBondFormStep3.cus_educess_notification,
              cus_educess_notification_sr_no:data.exBondFormStep3.cus_educess_notification_sr_no,
              ncd_notification:data.exBondFormStep3.ncd_notification,
              ncd_notification_sr_no:data.exBondFormStep3.ncd_notification_sr_no,
              antii_dumping_duty_notification:data.exBondFormStep3.antii_dumping_duty_notification,
              antii_dumping_duty_notification_sr_no:data.exBondFormStep3.antii_dumping_duty_notification_sr_no,

              cth_serial_number:data.exBondFormStep3.cth_serial_number,
              supplier_serial_number:data.exBondFormStep3.supplier_serial_number,
              quantity_antii_dumping_duty_notification:data.exBondFormStep3.quantity_antii_dumping_duty_notification,
              quantity_tariff_value_notification:data.exBondFormStep3.quantity_tariff_value_notification,
              tariff_value_notification:data.exBondFormStep3.tariff_value_notification,
              tariff_value_notification_sr_no:data.exBondFormStep3.tariff_value_notification_sr_no,
              quantiy_tariff_value_notification:data.exBondFormStep3.quantiy_tariff_value_notification,
              sapta_notification:data.exBondFormStep3.sapta_notification,
              sapta_notification_sr_no:data.exBondFormStep3.sapta_notification_sr_no,
              health_notification:data.exBondFormStep3.health_notification,
              health_notification_sr_no:data.exBondFormStep3.health_notification_sr_no,

              additional_cvd_notification:data.exBondFormStep3.additional_cvd_notification,
              additional_cvd_notification_sr_no:data.exBondFormStep3.additional_cvd_notification_sr_no,
              aggregate_duty_notification:data.exBondFormStep3.aggregate_duty_notification,
              aggregate_duty_notification_sr_no:data.exBondFormStep3.aggregate_duty_notification_sr_no,
              safeguard_duty_notification:data.exBondFormStep3.safeguard_duty_notification,
              safeguard_duty_notification_sr_no:data.exBondFormStep3.safeguard_duty_notification_sr_no,

              unit_price_invoiced:data.exBondFormStep3.unit_price_invoiced,
              discount_rate:data.exBondFormStep3.discount_rate,
              discount_amount:data.exBondFormStep3.discount_amount,
              quantity_cth:data.exBondFormStep3.quantity_cth,
              svb_reference_date:data.exBondFormStep3.svb_reference_date,
              svb_reference_number:data.exBondFormStep3.svb_reference_number,
              svb_load_assessable_value:data.exBondFormStep3.svb_load_assessable_value,
              svb_load_on_duty:data.exBondFormStep3.svb_load_on_duty,
              svb_flag:data.exBondFormStep3.svb_flag,
              load_final_provisional_on_ass_value:data.exBondFormStep3.load_final_provisional_on_ass_value, 
              load_final_provisional_on_duty:data.exBondFormStep3.load_final_provisional_on_duty,
              custom_house_code_imposed_load:data.exBondFormStep3.custom_house_code_imposed_load,
              policy_para_no:data.exBondFormStep3.policy_para_no,
              policy_year:data.exBondFormStep3.policy_year,
              rsp_applicability:data.exBondFormStep3.rsp_applicability,
              re_import:data.exBondFormStep3.re_import,
              prev_be_no:data.exBondFormStep3.prev_be_no,
              prev_be_date:data.exBondFormStep3.prev_be_date,
              prev_unit_price:data.exBondFormStep3.prev_unit_price,
              prev_unit_currency:data.exBondFormStep3.prev_unit_currency,
              prev_customm_site:data.exBondFormStep3.prev_customm_site,
              custom_notifictaion_exempting_central_excise_flag:data.exBondFormStep3.custom_notifictaion_exempting_central_excise_flag,
              producer_code:data.exBondFormStep3.producer_code,
              grower_code:data.exBondFormStep3.grower_code,
              address1_grower:data.exBondFormStep3.address1_grower,
              address2_grower:data.exBondFormStep3.address2_grower,
              city_grower:data.exBondFormStep3.city_grower,
              country_sub_division_grower:data.exBondFormStep3.country_sub_division_grower,
              pin_grower:data.exBondFormStep3.pin_grower,
              country_grower:data.exBondFormStep3.country_grower,
              source_country:data.exBondFormStep3.source_country,
              transit_country:data.exBondFormStep3.transit_country,
              accessory_status:data.exBondFormStep3.accessory_status,

              active_ingredient_flag:data.exBondFormStep3.active_ingredient_flag,
              ritc_qualifier:data.exBondFormStep3.ritc_qualifier,
              info_type:data.exBondFormStep3.info_type,
              info_qualifier:data.exBondFormStep3.info_qualifier,
              info_code:data.exBondFormStep3.info_code,
              info_text:data.exBondFormStep3.info_text,
              info_msr:data.exBondFormStep3.info_msr,
              info_uqc:data.exBondFormStep3.info_uqc,

              constituent_serial_number:data.exBondFormStep3.constituent_serial_number,
              constituent_element_name:data.exBondFormStep3.constituent_element_name,
              constituent_element_code:data.exBondFormStep3.constituent_element_code,
              constituent_percentage:data.exBondFormStep3.constituent_percentage,
              constituent_yield_percentage:data.exBondFormStep3.constituent_yield_percentage,

              production_batch_identifier:data.exBondFormStep3.production_batch_identifier,
              production_batch_quantity:data.exBondFormStep3.production_batch_quantity,
              date_manufacturing:data.exBondFormStep3.date_manufacturing,
              date_expiry:data.exBondFormStep3.date_expiry,
              best_before:data.exBondFormStep3.best_before,

              control_type_code:data.exBondFormStep3.control_type_code,
              control_location:data.exBondFormStep3.control_location,
              control_start_date:data.exBondFormStep3.control_start_date,
              control_end_date:data.exBondFormStep3.control_end_date,
              control_result_code:data.exBondFormStep3.control_result_code,
              control_result_text:data.exBondFormStep3.control_result_text,

              item_serial_number_invoice:data.exBondFormStep3.item_serial_number_invoice,
              notification_number:data.exBondFormStep3.notification_number,
              notification_serial_number:data.exBondFormStep3.notification_serial_number,
              duty_type:data.exBondFormStep3.duty_type,
              additional_duty_flag:data.exBondFormStep3.additional_duty_flag,
              exmp_notification:data.exBondFormStep3.exmp_notification,

              exmp_notification_serial_number:data.exBondFormStep3.exmp_notification_serial_number,
              nou:data.exBondFormStep3.nou,
              suplier_number:data.exBondFormStep3.suplier_number,
              customs_exmp:data.exBondFormStep3.customs_exmp,
             },
             exBondFormStep4:{
              invoice_serial_number:data.exBondFormStep4.invoice_serial_number,
              item_serial_number:data.exBondFormStep4.item_serial_number,
              item_serial_number_invoice:data.exBondFormStep4.item_serial_number_invoice,
              item_serial_number_rsp:data.exBondFormStep4.item_serial_number_rsp,
              rsp:data.exBondFormStep4.rsp,
              quantity:data.exBondFormStep4.quantity,
              description:data.exBondFormStep4.description,
              rsp_notification:data.exBondFormStep4.rsp_notification,
              rsp_notification_sr_no:data.exBondFormStep4.rsp_notification_sr_no
             },
             exBondFormStep5:{
              invoice_serial_number:data.exBondFormStep5.invoice_serial_number,
              item_serial_number_invoice:data.exBondFormStep5.item_serial_number_invoice,
              bcd_notification:data.exBondFormStep5.bcd_notification,
              bcd_notification_sr_no:data.exBondFormStep5.bcd_notification_sr_no,
              exemption_required:data.exBondFormStep5.exemption_required
             },
             exBondFormStep6:{
              bond_number:data.exBondFormStep6.bond_number,
              bond_code:data.exBondFormStep6.bond_code,
              bond_port:data.exBondFormStep6.bond_port,
              bond:data.exBondFormStep6.bond,
              certificate_number:data.exBondFormStep6.certificate_number,
              certificate_date:data.exBondFormStep6.certificate_date,
              certificate_type:data.exBondFormStep6.certificate_type
             },
             exBondFormStep7:{
              state_code:data.exBondFormStep7.state_code,
              commercial_tax_registration:data.exBondFormStep7.commercial_tax_registration,
              commercial_tax_type:data.exBondFormStep7.commercial_tax_type
             },
         }, );
       }
       });
   }
   }
   fileReader.onerror = (error) => {
     console.log(error);
   }

 }

  downloadbillentry() { 
    let formObj = this.bill_of_entry.getRawValue();
    let serializedForm = JSON.stringify(formObj);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(serializedForm));
    this.downloadJsonHref = uri;
   // console.log(serializedForm);
  }
 
  exbond_bill_of_entry() {
  console.log(this.bill_of_entry.value);
  this._apiService.createBillOfEntry({"webFormJSON": this.bill_of_entry.value}).subscribe(
    (data:any) => {
      console.log(data.response, "Result");
},
error => {
    console.log(error);
}
);

}

}
