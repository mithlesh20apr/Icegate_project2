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
  inBondFormStep3: FormGroup;
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
       
         this.bill_of_entrly.patchValue({
             inBondFormStep1: {
              general_details: {
                 message_type : data.inBondFormStep1.general_details.message_type,
                 custom_house_code : data.inBondFormStep1.general_details.custom_house_code,
                 branch_sr_no : data.inBondFormStep1.general_details.branch_sr_no,
                 user_job_no : data.inBondFormStep1.general_details.user_job_no,
                 user_job_date : data.inBondFormStep1.general_details.user_job_date,
                 be_number : data.inBondFormStep1.general_details.be_number,
                 be_date : data.inBondFormStep1.general_details.be_date,
                 iec_code : data.inBondFormStep1.general_details.iec_code,
                 state_importer : data.inBondFormStep1.general_details.state_importer,
                 pin : data.inBondFormStep1.general_details.pin,
                 class : data.inBondFormStep1.general_details.class,
                 mode_of_transport : data.inBondFormStep1.general_details.mode_of_transport,
                 importer_type : data.inBondFormStep1.general_details.importer_type,
                 kachcha_be : data.inBondFormStep1.general_details.kachcha_be,
                 high_sea_sale_flag : data.inBondFormStep1.general_details.high_sea_sale_flag,
                 permission_code : data.inBondFormStep1.general_details.permission_code,
                 reason_for_request : data.inBondFormStep1.general_details.reason_for_request,
                 invoice_serial_number : data.inBondFormStep1.general_details.invoice_serial_number,
                 branch_sr_no_sea : data.inBondFormStep1.general_details.branch_sr_no_sea,
                 name_importer : data.inBondFormStep1.general_details.name_importer,
                 preceding_level : data.inBondFormStep1.general_details.preceding_level,
                 address1 : data.inBondFormStep1.general_details.address1,
                 address2 : data.inBondFormStep1.general_details.address2,
                 address1_importer : data.inBondFormStep1.general_details.address1_importer,
                 address2_importer : data.inBondFormStep1.general_details.address2_importer,
                 city_importer : data.inBondFormStep1.general_details.city_importer,
                 pin_importer : data.inBondFormStep1.general_details.pin_importer,
                 port_of_origin : data.inBondFormStep1.general_details.port_of_origin,
                 cha_code : data.inBondFormStep1.general_details.cha_code,
                 country_of_origin : data.inBondFormStep1.general_details.country_of_origin,
                 country_of_consignment : data.inBondFormStep1.general_details.country_of_consignment,
                 port_of_shipment : data.inBondFormStep1.general_details.port_of_shipment,
                 green_channel_requested : data.inBondFormStep1.general_details.green_channel_requested,
                 section : data.inBondFormStep1.general_details.section,
                 prior_be : data.inBondFormStep1.general_details.prior_be,
                 authorized_dealer_code : data.inBondFormStep1.general_details.authorized_dealer_code,
                 first_check_requested : data.inBondFormStep1.general_details.first_check_requested,
                 section_48_permission_code : data.inBondFormStep1.general_details.section_48_permission_code,
                 section_48_reason_for_request : data.inBondFormStep1.general_details.section_48_reason_for_request
              },
              warehouse_details:{
                
                warehouse_code: data.inBondFormStep1.warehouse_details.warehouse_code,
                warehouse_custom_site_id: data.inBondFormStep1.warehouse_details.warehouse_custom_site_id,
                warehouse_be_no: data.inBondFormStep1.warehouse_details.warehouse_be_no,
                warehouse_be_date: data.inBondFormStep1.warehouse_details.warehouse_be_date,
                no_packages_released: data.inBondFormStep1.warehouse_details.no_packages_released,
                package_code: data.inBondFormStep1.warehouse_details.package_code,
                gross_weight: data.inBondFormStep1.warehouse_details.gross_weight,
                unit_of_measurement: data.inBondFormStep1.warehouse_details.unit_of_measurement,
                additional_charges: data.inBondFormStep1.warehouse_details.additional_charges,
                misc_load: data.inBondFormStep1.warehouse_details.misc_load,
                ucr: data.inBondFormStep1.warehouse_details.ucr,
                ucr_type: data.inBondFormStep1.warehouse_details.ucr_type,
                payment_method_code: data.inBondFormStep1.warehouse_details.payment_method_code
    
              }
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
              stepThree_invoice: []
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
       this.setStepThreeData(data.inBondFormStep3.stepThree_invoice);
       });
   }
   }
   fileReader.onerror = (error) => {
     console.log(error);
   }

 }
  // these functoin are array function add remove or get functions
  get addStep3Inoices( ) {
    var thissss = this.bill_of_entrly.get('inBondFormStep3');
    console.log(thissss);
    return <FormArray>this.bill_of_entrly.get('inBondFormStep3');
  }
  // addStep3Inoices(): FormArray {
    
  //       return this.inBondFormStep3.get("stepThree_invoice") as FormArray
  // }
 setStepThreeData(data) {
 //  console.log(data, 'data')
  if(data.length!=0) {
   // console.log(this.addStep3Inoices);
    this.addStep3Inoices.removeAt(0);
    data.forEach(items=>{
     // console.log(items);
      this.addStep3Inoices.push(this._fb.group({
        invoiceDetails: {
          invoice_serial_number:[items.invoice_serial_number]
        }
       }));

   })
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
