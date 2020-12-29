import { Component, OnInit,Input, EventEmitter,Output,ViewChild  } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd ,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl,FormArray, Validator,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors  } from '@angular/forms';
import { Subject, BehaviorSubject } from 'rxjs';
import { MatStepper } from '@angular/material/stepper';
import { HttpClient } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,} from '@angular/platform-browser';
import { environment } from "../../../../../environments/environment";
import Swal from 'sweetalert2';

import { MatDialog } from '@angular/material/dialog';
import { } from '@angular/forms';
import {ValidatorsService} from '../../../common/service/validators.service';
import {IndexService} from '../../../common/service/index.service';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-in-bond-bill-of-entry',
  templateUrl: './in-bond-bill-of-entry.component.html',
  styleUrls: ['./in-bond-bill-of-entry.component.scss'],
  providers: [IndexService]
})
export class InBondBillOfEntryComponent implements OnInit {
  panelOpenState = false;
  isLinear = false;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  //tabs = [1];
  //addStep3Inoices() = ['Invoice1']
 
  selected = new FormControl(0);
  selecteds = new FormControl(0);
  disableAddButton = false;
  disableAddButton4 = false;
  disableAddButtons= false;
  formSumitAttempt: boolean;
  hiddenInput : string = "step three";
  uploadFiles: null;
  @Input() index: number;
  webFormJSON: FormGroup; 
  tabs = [1];
  tabs1= [1];
  tabs3=[1];
//  selected = new FormControl(0);
 // webFormJSON: FormGroup;
  selected1 = new FormControl(0);
  selected3 = new FormControl(0);
//  disableAddButton = false;
  disableAddButton1 = false;
  downloadJsonHref
  @ViewChild('stepper') private myStepper: MatStepper;
  constructor(private route:ActivatedRoute,private http: HttpClient,private router: Router,private _fb: FormBuilder,private sanitizer: DomSanitizer,private _apiService: IndexService,) { }

  ngOnInit(): void {
    
    this.webFormJSON = this._fb.group({

      webFormTypeId: new FormControl("1"),
      icegateId: new FormControl("1"),
      inBondFormStep1: new FormControl(""),
      inBondFormStep2: new FormControl(""),
      stepThree_invoice: this._fb.array([]),
      inBondFormStep4: this._fb.array([]),
      inBondFormStep6: new FormControl(""),
      inBondFormStep7: new FormControl(""),
      inBondFormStep8: new FormControl(""),
      inBondFormStep9: new FormControl(""),
      inBondFormStep10: new FormControl(""),
      inBondFormStep11: new FormControl(""),
      inBondFormStep12: new FormControl(""),
      // inBondFormStep13: new FormControl(""),
      
      
    });
    this.route.paramMap.subscribe(params => {
      let billofEntryId = params.get("id")
     console.log(billofEntryId);
      if(billofEntryId)
      this.getBillOfEntry(billofEntryId);
    //  this.setData(data)
    })
  }
 //get Bill of entry
 getBillOfEntry(billofEntryId){
  this._apiService.getBillOfEntryById(billofEntryId).subscribe((response:any[])=>{
    let data = response;
     this.setData(data)
  })
}
setData(data) {
this.webFormJSON.patchValue({
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
    stepThree_invoice: [],
    inBondFormStep4: [],
  
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
  
    
    
});
this.setStepThreeData(data.stepThree_invoice);
this.setStepFourData(data.inBondFormStep4);
}
// all code of step three
buttonClickFun() {
 if(this.webFormJSON.controls.inBondFormStep1.value === "" || this.webFormJSON.controls.stepThree_invoice.value === "" ) {
  this.addStepThreetabs();
  this.addStepFourtabs();
 // this.disableAddButton = true;
}
// if(this.addStep3Inoices().controls.length == 3){
//   this.disableAddButton = true;
  
// }
}
// Add step three invoice details
AddStepThreeInvoideDetails(): FormGroup {
  return this._fb.group({

      invoice_serial_number:  new FormControl('',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]),
      invoice_date:  new FormControl(''),
      purchase_order_number:  new FormControl('',[Validators.maxLength(20),ValidatorsService.alpaNumValidator]),
      purchase_order_date:  new FormControl(''),
      contract_number:  new FormControl('',[Validators.maxLength(20),ValidatorsService.alpaNumValidator]),
      contract_date:  new FormControl(''),
      lc_number:  new FormControl('',[Validators.maxLength(20),ValidatorsService.alpaNumValidator]),
      lc_date:  new FormControl(''),
      svb_reference_number:  new FormControl('',[Validators.maxLength(20),ValidatorsService.alpaNumValidator]),
      svb_reference_date:  new FormControl(''),
      svb_load_assessable_value:  new FormControl('',[Validators.maxLength(10),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),12)]),
      svb_load_on_duty:  new FormControl('',[Validators.maxLength(10),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),12)]),
      svb_flag:  new FormControl('',[Validators.maxLength(1),ValidatorsService.alpaNumValidator]),
      load_final_provisional_on_ass_value:  new FormControl('',[Validators.maxLength(1),ValidatorsService.alpaNumValidator]),
      load_final_provisional_on_duty:  new FormControl('',[Validators.maxLength(1),ValidatorsService.alpaNumValidator]),
      custom_house_code_imposed_load:  new FormControl('',[Validators.maxLength(6),ValidatorsService.alpaNumValidator]),
    
    
      name_supplier:new FormControl('',[Validators.required,Validators.maxLength(50),ValidatorsService.textValidator]),
      address1_supplier:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
      address2_supplier:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
      address3_supplier:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
      country_supplier:new FormControl('',[Validators.maxLength(25),ValidatorsService.alpaNumValidator]),
      pin_supplier:new FormControl('',[Validators.maxLength(10),ValidatorsService.numberValidator]),
      supplier_country_name: new FormControl(''),
 
      name_seller:new FormControl('',[Validators.maxLength(35),ValidatorsService.textValidator]),
      address1_seller:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
      address2_seller:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
      address3_seller:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
      country_seller:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
      pin_seller:new FormControl('',[Validators.maxLength(10),ValidatorsService.numberValidator]),
      Seller_country_name: new FormControl('')
    ,
   
      name_broker:new FormControl('',[Validators.maxLength(50),ValidatorsService.alpaNumValidator]),
      address1_broker:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
      address2_broker:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
      address3_broker:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
      country_broker:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
      pin_broker:new FormControl('',[Validators.maxLength(10),ValidatorsService.numberValidator]),
      broker_country_name: new FormControl('')
    ,
    
      invoice_value:new FormControl('',[Validators.required,Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
      terms_of_invoice:new FormControl('',[Validators.required,Validators.maxLength(3),ValidatorsService.alpaNumValidator]),
      invoice_currency:new FormControl('',[Validators.required,Validators.maxLength(3),ValidatorsService.alpaNumValidator]),
      nature_of_discount:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
      discount_rate:new FormControl('',[Validators.maxLength(6),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),6)]),
      discount_amount:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
      hss_load_rate:new FormControl('',[Validators.maxLength(6),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),6)]),
      hss_load_amount:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
      freight_value:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
      freight_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
      freight_actual:new FormControl('',[Validators.maxLength(1),ValidatorsService.alpaNumValidator]),
      freight_currency:new FormControl('',[Validators.maxLength(3),ValidatorsService.alpaNumValidator]),
      insurance_value:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
      insurance_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
      insurance_currency:new FormControl('',[Validators.maxLength(3),ValidatorsService.alpaNumValidator]),
      misc_charge:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
      misc_currency:new FormControl('',[Validators.maxLength(3),ValidatorsService.alpaNumValidator]),
      misc_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
      landing_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
      loading_charge:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
      loading_currency:new FormControl('',[Validators.maxLength(3),ValidatorsService.alpaNumValidator]),
      load_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
      agency_commission:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
      agency_commission_currency:new FormControl('',[Validators.maxLength(3),ValidatorsService.alpaNumValidator]),
      agency_commission_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
      nature_of_transaction:new FormControl('',[Validators.required,Validators.maxLength(1),ValidatorsService.alpaNumValidator]),
      payment_terms:new FormControl('',[Validators.required,Validators.maxLength(3),ValidatorsService.alpaNumValidator]),
      cond_sale_1:new FormControl('',[Validators.maxLength(40),ValidatorsService.alpaNumValidator]),
      cond_sale_2:new FormControl('',[Validators.maxLength(40),ValidatorsService.alpaNumValidator]),
      cond_sale_3:new FormControl('',[Validators.maxLength(40),ValidatorsService.alpaNumValidator]),
      cond_sale_4:new FormControl('',[Validators.maxLength(40),ValidatorsService.alpaNumValidator]),
      cond_sale_5:new FormControl('',[Validators.maxLength(40),ValidatorsService.alpaNumValidator]),
      valuation_method_applicable:new FormControl('',[Validators.maxLength(40),ValidatorsService.alpaNumValidator]),
      actual_invoice_number:new FormControl('',[Validators.required,Validators.maxLength(16),ValidatorsService.alpaNumValidator]),
      other_relevant_information:new FormControl('',[Validators.maxLength(100),ValidatorsService.alpaNumValidator]),
      terms_place:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),       
    
    
      name_third_party:new FormControl('',[Validators.maxLength(70),ValidatorsService.alpaNumValidator]),
      address1_third_party:new FormControl('',[Validators.maxLength(70 ),ValidatorsService.alpaNumValidator]),
      address2_third_party:new FormControl('',[Validators.maxLength(50),ValidatorsService.alpaNumValidator]),
      city_third_party:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
      country_sub_division_third_party:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
      country_code_third_party:new FormControl('',[Validators.maxLength(2),ValidatorsService.alpaNumValidator]),
      pin_third_party:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      authorized_economic_operator:new FormControl('',[Validators.maxLength(17),ValidatorsService.alpaNumValidator]),
      authorized_economic_operator_country:new FormControl('',[Validators.maxLength(2),ValidatorsService.alpaNumValidator]),
      authorized_economic_operator_role:new FormControl('',[Validators.maxLength(3),ValidatorsService.alpaNumValidator]),
      buyer_or_seller_related:new FormControl('',[Validators.required,Validators.maxLength(70),ValidatorsService.alpaNumValidator]),
      authorized_economic_operator_code:new FormControl('',[Validators.maxLength(17),ValidatorsService.alpaNumValidator]),
      autohrized_operator_country:new FormControl('')
    ,
   // invoice_serial_number: ['', [Validators.required, Validators.maxLength(5), ValidatorsService.numberValidator]],
    item_serial_number: ['', [Validators.required, Validators.maxLength(4), ValidatorsService.numberValidator]],
    decleration_type: ['', [Validators.required, Validators.maxLength(1), ]],
    cha_license_number: ['', [Validators.maxLength(15), ]],
    iec: ['', [Validators.maxLength(10), ]],
    icegate_user_id: ['', [Validators.required, Validators.maxLength(15), ]],
    image_reference_number: ['', [Validators.required, Validators.maxLength(16), ]],
    document_type_code: ['', [Validators.required, Validators.maxLength(6), ]],
    document_issuing_party_code: ['', [Validators.maxLength(35), ]],
    document_issuing_party_name: ['', [Validators.required, Validators.maxLength(70), ]],
    document_issuing_party_name_address1: ['', [Validators.maxLength(70), ]],
    document_issuing_party_name_address2: ['', [Validators.maxLength(70), ]],
    document_issuing_party_name_city: ['', [Validators.maxLength(35), ]],
    document_issuing_party_name_pin: ['', [Validators.maxLength(10)]],
    document_reference_number:['', [Validators.maxLength(17),]],
    place_of_issue:['', [Validators.required,Validators.maxLength(35),]],
    document_issue_date:['',Validators.required],
    document_expiry_date:[''],
    document_beneficiary_party_code:['', [Validators.maxLength(35),]],
    document_beneficiary_party_name:['', [Validators.required,Validators.maxLength(70),]],
    document_beneficiary_party_name_address1:['', [Validators.maxLength(70)]],
    document_beneficiary_party_name_address2:['', [Validators.maxLength(70)]],
    document_beneficiary_party_name_city:['', [Validators.maxLength(35),]],
    document_beneficiary_party_name_pin:['', [Validators.maxLength(10)]],
    file_type: ['', [Validators.required, Validators.maxLength(5), ]],
    uploadDocuments: ['', [Validators.required]],
    // uploadFiles: [''],
    // stepThree_page: new FormControl(null),
    // main_img_uploader: [''],
    addNewItemStepThree: this._fb.array([]),
  })
}
// inner array part data display there
AddNewItemInvoideDetailss() {
  return this._fb.group({
   
      invoice_serial_numbers:new FormControl('',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]),
      item_serial_number:new FormControl('',[Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]),
      item_quantity:new FormControl('',[Validators.required,Validators.maxLength(16),ValidatorsService.numberValidator]),
      unit_quantity_code:new FormControl('',[Validators.required,Validators.maxLength(3),ValidatorsService.alpaNumValidator]),
      ritc_code:new FormControl('',[Validators.required,Validators.maxLength(8),ValidatorsService.alpaNumValidator]),
      item_description1:new FormControl('',[Validators.required,Validators.maxLength(60),ValidatorsService.alpaNumValidator]),
      item_description2:new FormControl('',[Validators.maxLength(60),ValidatorsService.alpaNumValidator]),
      item_category:new FormControl(''),
      item_description_generic:new FormControl('',[Validators.maxLength(60),ValidatorsService.alpaNumValidator]),
      item_category_invoice_serial_number:new FormControl(''),
      item_category_item_serial_number_invoice: new FormControl(''),
      item_category_item_serial_number_license:new FormControl(''),
      //item_category_item_serial_numb: new FormControl(''),
      item_category_debit_value:new FormControl(''),
      item_category_debit_quantity:new FormControl(''),
      item_category_debit_unit_of_measurement:new FormControl(''),
      item_category_license_registration_number:new FormControl(''),
      item_category_license_code:new FormControl(''),
      item_category_license_registration_date:new FormControl(''),
      item_category_license_reg_port:new FormControl(''),
      item_accessories:new FormControl(''),
     
    
      preferential_or_standard:new FormControl('',[Validators.required,Validators.maxLength(1),ValidatorsService.alpaNumValidator]),
      ceth:new FormControl('',[Validators.required,Validators.maxLength(8),ValidatorsService.alpaNumValidator]),
      name_producer:new FormControl('',[Validators.maxLength(50),ValidatorsService.alpaNumValidator]),
      name_brand:new FormControl('',[Validators.required,Validators.maxLength(20),ValidatorsService.alpaNumValidator]),
      model:new FormControl('',[Validators.required,Validators.maxLength(20),ValidatorsService.alpaNumValidator]),
      end_use_item:new FormControl('',[Validators.required,Validators.maxLength(20),ValidatorsService.alpaNumValidator]),
      country_of_origin_of_item:new FormControl('',[Validators.required,Validators.maxLength(2),ValidatorsService.alpaNumValidator]),
      cth:new FormControl('',[Validators.required,Validators.maxLength(8),ValidatorsService.alpaNumValidator]),
      product_details_invoice_serial_number:new FormControl(''),
      product_details_item_serial_number:new FormControl(''),
      ritc_qualifier:new FormControl(''),
      info_type:new FormControl(''),
    //  info_qualifier:new FormControl(''),
      info_code:new FormControl(''),
      info_text:new FormControl(''),
      info_msr:new FormControl(''),
      info_uqc:new FormControl(''),
    

      bcd_notification:new FormControl('',[Validators.required,Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      bcd_notification_sr_no: new FormControl('',[Validators.required,Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      cvd_notification:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      cvd_notification_sr_no: new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      additional_notification1:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      additional_notification1_sr_no: new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      additional_notification2:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      additional_notification2_sr_no: new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      other_notification:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      other_notification_sr_no: new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      notification_invoice_serial_number:new FormControl(''),
      notification_item_serial_number_invoice:new FormControl(''),
      notification_number:new FormControl(''),
      notification_serial_number:new FormControl(''),
      duty_type:new FormControl(''),
      additional_duty_flag:new FormControl(''),
      exmp_notification:new FormControl(''),
      exmp_notification_serial_number:new FormControl(''),
      customs_exmp:new FormControl(''),
      suplier_number:new FormControl(''),
      nou:new FormControl(''),

      cex_educess_notification:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      cex_educess_notification_sr_no: new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      cus_educess_notification:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      cus_educess_notification_sr_no: new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      ncd_notification:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      ncd_notification_sr_no: new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      antii_dumping_duty_notification:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      antii_dumping_duty_notification_sr_no: new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      cth_serial_number:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      supplier_serial_number:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      quantity_antii_dumping_duty_notification:new FormControl('',[Validators.maxLength(16),ValidatorsService.numberValidator]),
      quantity_tariff_value_notification:new FormControl('',[Validators.maxLength(16),ValidatorsService.numberValidator]),
      tariff_value_notification:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      tariff_value_notification_sr_no: new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      quantiy_tariff_value_notification:new FormControl('',[Validators.maxLength(16),ValidatorsService.numberValidator]),
      sapta_notification:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      sapta_notification_sr_no: new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      health_notification:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      health_notification_sr_no: new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      additional_cvd_notification:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      additional_cvd_notification_sr_no: new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      aggregate_duty_notification:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      aggregate_duty_notification_sr_no: new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      safeguard_duty_notification:new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
      safeguard_duty_notification_sr_no: new FormControl('',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]),  
   

      price_details_unit_price_invoiced:new FormControl('',[Validators.required,Validators.maxLength(16),ValidatorsService.numberValidator]),
      price_details_discount_rate:new FormControl('',[Validators.maxLength(6),ValidatorsService.numberValidator]),
      price_details_discount_amount:new FormControl('',[Validators.maxLength(16),ValidatorsService.numberValidator]),
      price_details_quantity_cth:new FormControl('',[Validators.maxLength(16),ValidatorsService.numberValidator]),
      price_details_svb_reference_number:new FormControl('',[Validators.maxLength(20),ValidatorsService.alpaNumValidator]),
      price_details_svb_reference_date:new FormControl(''),
      price_details_svb_load_assessable_value:new FormControl('',[Validators.maxLength(10),ValidatorsService.numberValidator]),
      price_details_svb_load_on_duty:new FormControl('',[Validators.maxLength(10),ValidatorsService.numberValidator]),
      price_details_svb_flag:new FormControl('',[Validators.maxLength(1),ValidatorsService.alpaNumValidator]),
      price_details_load_final_provisional_on_ass_value:new FormControl('',[Validators.maxLength(1),ValidatorsService.alpaNumValidator]),
      price_details_load_final_provisional_on_duty:new FormControl('',[Validators.maxLength(1),ValidatorsService.alpaNumValidator]),
      price_details_custom_house_code_imposed_load:new FormControl('',[Validators.maxLength(6),ValidatorsService.alpaNumValidator]),
      price_details_policy_para_no:new FormControl('',[Validators.maxLength(7),ValidatorsService.alpaNumValidator]),
      price_details_policy_year:new FormControl('',[Validators.maxLength(5),ValidatorsService.alpaNumValidator]),
      price_details_rsp_applicability:new FormControl('',[Validators.required,Validators.maxLength(2),ValidatorsService.alpaNumValidator]),
      price_details_re_import:new FormControl('',Validators.required),
      price_details_permission_code:new FormControl(''),
      price_details_reason_for_request:new FormControl(''),
      price_details_invoice_serial_number_on: new FormControl(''),
   //   price_details_invoice_serial_number:new FormControl('',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]),
      price_details_item_serial_number_invoice:new FormControl(''),
      price_details_shipping_bill_no:new FormControl(''),
      price_details_shipping_bill_date:new FormControl(''),
      price_details_port_of_export:new FormControl(''),
      price_details_invoice_no_sb:new FormControl(''),
      price_details_item_no_sb:new FormControl(''),
      price_details_notification_no:new FormControl(''),
      price_details_notification_sr_no: new FormControl(''),
      price_details_export_freight:new FormControl(''),
      price_details_export_insurance:new FormControl(''),
      price_details_excise_duty:new FormControl(''),
      price_details_customs_duty:new FormControl(''),
      price_details_prev_be_no:new FormControl('',[Validators.maxLength(7),ValidatorsService.numberValidator]),
      price_details_prev_be_date:new FormControl(''),
      price_details_prev_unit_price:new FormControl('',[Validators.maxLength(16),ValidatorsService.alpaNumValidator]),
      price_details_prev_unit_currency:new FormControl('',[Validators.maxLength(3),ValidatorsService.alpaNumValidator]),
      price_details_prev_customm_site:new FormControl('',[Validators.maxLength(6),ValidatorsService.alpaNumValidator]),
      price_details_custom_notifictaion_exempting_central_excise_flag:new FormControl( '',[Validators.maxLength(1),ValidatorsService.alpaNumValidator]),
     
      producer_code:new FormControl('',[Validators.maxLength(1),ValidatorsService.alpaNumValidator]),
      grower_code:new FormControl('',[Validators.maxLength(17),ValidatorsService.alpaNumValidator]),
      address1_grower:new FormControl('',[Validators.maxLength(70),ValidatorsService.alpaNumValidator]),
      address2_grower:new FormControl('',[Validators.maxLength(50),ValidatorsService.alpaNumValidator]),
      city_grower:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
      country_sub_division_grower:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
      pin_grower:new FormControl('',[Validators.maxLength(10),ValidatorsService.numberValidator]),
      country_grower:new FormControl('',[Validators.maxLength(2),ValidatorsService.alpaNumValidator]),
      source_country:new FormControl('',[Validators.maxLength(2),ValidatorsService.alpaNumValidator]),
      transit_country:new FormControl('',[Validators.maxLength(2),ValidatorsService.alpaNumValidator]),
      accessory_status:new FormControl('',[Validators.required,Validators.maxLength(1),ValidatorsService.alpaNumValidator]),

   
      active_ingredient_flag: new FormControl('', Validators.required),
      constituent_serial_number:new FormControl('',[Validators.required,Validators.maxLength(3),ValidatorsService.numberValidator]),
      constituent_element_name:new FormControl('',[Validators.required,Validators.maxLength(256),ValidatorsService.textValidator]),
      constituent_element_code:new FormControl('',[Validators.required,Validators.maxLength(17),ValidatorsService.textValidator]),
      constituent_percentage:new FormControl('',[Validators.required,Validators.maxLength(6),ValidatorsService.numberValidator]),
      constituent_yield_percentage:new FormControl('',[Validators.required,Validators.maxLength(6),ValidatorsService.numberValidator]),
 
      production_batch_identifier:new FormControl('',[Validators.required,Validators.maxLength(17),ValidatorsService.textValidator]),
      production_batch_quantity:new FormControl('',[Validators.required,Validators.maxLength(16),ValidatorsService.numberValidator]),
      production_unit_quantity_code:new FormControl('',[Validators.required,Validators.maxLength(3),ValidatorsService.alpaNumValidator]),
      production_date_manufacturing:new FormControl('',Validators.required),
      production_date_expiry:new FormControl('',Validators.required),
      production_best_before:new FormControl('',Validators.required),
    
      control_type_code:new FormControl('',[Validators.required,Validators.maxLength(17),ValidatorsService.textValidator]),
      control_location:new FormControl('',[Validators.required,Validators.maxLength(17),ValidatorsService.textValidator]),
      control_start_date:new FormControl(''),
      control_end_date:new FormControl(''),
      control_result_code:new FormControl('',[Validators.required,Validators.maxLength(17),ValidatorsService.textValidator]),
      control_result_text:new FormControl('',[Validators.maxLength(4000),ValidatorsService.textValidator]),
    
     // item_serial_number: ['', [Validators.required, Validators.maxLength(4), ValidatorsService.numberValidator]],
      decleration_type: [''],
      cha_license_number: [''],
      iec: [''],
      icegate_user_id: [''],
      image_reference_number: [''],
      document_type_code: [''],
      document_issuing_party_code: [''],
      document_issuing_party_name: [''],
      document_issuing_party_name_address1: [''],
      document_issuing_party_name_address2: [''],
      document_issuing_party_name_city: [''],
      document_issuing_party_name_pin: [''],
      document_reference_number:[''],
      place_of_issue:[''],
      document_issue_date:[''],
      document_expiry_date:[''],
      document_beneficiary_party_code:[''],
      document_beneficiary_party_name:[''],
      document_beneficiary_party_name_address1:[''],
      document_beneficiary_party_name_address2:[''],
      document_beneficiary_party_name_city:[''],
      document_beneficiary_party_name_pin:[''],
      file_type: [''],
      uploadDocuments: [''],
  })
}
// Add step Four invoice details
AddStepFourInvoideDetails(): FormGroup {
  return this._fb.group({
    invoice_serial_number_four:new FormControl('',[Validators.required,Validators.maxLength(5)]),
    misc_charge_code:new FormControl('',[Validators.required,Validators.maxLength(2)]),
    misc_description:new FormControl('',[Validators.required,Validators.maxLength(35)]),
    misc_charges:new FormControl('',[Validators.maxLength(10),ValidatorsService.numberValidator]),
    misc_rate:new FormControl('',[Validators.maxLength(3),ValidatorsService.numberValidator])
  })
}
// these functoin are array function add remove or get functions
addStep3Inoices(): FormArray {
      return this.webFormJSON.get("stepThree_invoice") as FormArray
}
// these functoin are array function add remove or get functions
addStep4Inoices(): FormArray {
      return this.webFormJSON.get("inBondFormStep4") as FormArray
}
addNewItemInvoices(i:number) : FormArray {
      return this.addStep3Inoices().at(i).get("addNewItemStepThree") as FormArray
}
addStepThreetabs() {
 // console.log(this.webFormJSON.value)
  this.addStep3Inoices().push(this.AddStepThreeInvoideDetails( ));
  this.selected.setValue(this.addStep3Inoices().controls.length);
  if(this.addStep3Inoices().controls.length == 3){
    this.disableAddButton = true;
  }
  let lengthofButtons = this.addStep3Inoices().status;

  //console.log(lengthofButtons,this.addStep3Inoices().controls )
  //console.log(this.webFormJSON.value)
}

addStepFourtabs() {

  //alert('hi');

  this.addStep4Inoices().push(this.AddStepFourInvoideDetails());
 // this.selected.setValue(this.addStep4Inoices().controls.length);
  if(this.addStep4Inoices().controls.length == 10){
    this.disableAddButton4 = true;
  }
}
addNewitemstabs(i:number) {
  this.addNewItemInvoices(i).push(this.AddNewItemInvoideDetailss());
   if(this.addNewItemInvoices(i).controls.length === 10){
    this.disableAddButtons = true;
  }
}
removeStepThreeTab(index: number) {
  this.addStep3Inoices().controls.splice(index, 1);
  if(this.addStep3Inoices().controls.length < 3){
    this.disableAddButton = false;
  }
}
removeStepFourTab(index: number) {
  this.addStep4Inoices().controls.splice(index, 1);
  if(this.addStep4Inoices().controls.length < 3){
    this.disableAddButton = false;
  }
}
removeNewItemTab(i: number) {
  this.addNewItemInvoices(i).controls.splice(i, 1);
  if(this.addNewItemInvoices(i).controls.length < 10){
    this.disableAddButton = false;
  }
}

public onTouched: () => void = () => {};


writeValue(val: any): void {
 console.log(val);
  val && this.webFormJSON.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
//  console.log("on change");
  this.webFormJSON.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
//  console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.webFormJSON.disable() : this.webFormJSON.enable();
}
validate(c: AbstractControl): ValidationErrors | null{
  //console.log("Consignment Info validation", c);

  return this.webFormJSON.valid ? null : { invalidForm: {valid: false, message: "Step3 fields are invalid"}};
}
// check validation when you click the continue buttons
isFieldValid(field: string) {
//    console.log()
// const expvalidation = <FormArray>this.addStep3Inoices().at(0).get(field);
// console.log(<FormArray>this.addStep3Inoices().at(0).get(field));

  return (   
  
    (!this.addStep3Inoices().get(field)?.valid  && this.addStep3Inoices().get(field)?.touched ) ||
    (this.addStep3Inoices().get(field)?.untouched   && this.formSumitAttempt)
  );
}

displayFieldCss(field: string) {
  // console.log(field);
  return {
    'has-error': this.isFieldValid(field),
    'has-feedback': this.isFieldValid(field)
  };
}
// select box item category change value add remove validations
onItemCategory(event:any,i) {
  let eventTargetValue = event.target.value;
  const expvalidation = <FormArray>this.addStep3Inoices().at(i).get('addNewItemStepThree');
   if(eventTargetValue === 'LO') {
      expvalidation.at(i).get('item_category_item_serial_number_license').setValidators([Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]);
      expvalidation.at(i).get('item_category_item_serial_number_invoice').setValidators([Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]);
      expvalidation.at(i).get('item_category_invoice_serial_number').setValidators([Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]);
      expvalidation.at(i).get('item_category_debit_unit_of_measurement').setValidators([Validators.required,Validators.maxLength(3),ValidatorsService.alpaNumValidator]);
      expvalidation.at(i).get('item_category_license_registration_number').setValidators([Validators.required,Validators.maxLength(10),ValidatorsService.numberValidator]);
      expvalidation.at(i).get('item_category_license_registration_date').setValidators([Validators.required]);
      expvalidation.at(i).get('item_category_license_code').setValidators([Validators.required,Validators.maxLength(2),ValidatorsService.alpaNumValidator]);
      expvalidation.at(i).get('item_category_license_reg_port').setValidators([Validators.required,Validators.maxLength(2),ValidatorsService.alpaNumValidator]);
       //  Clear All Validators
       expvalidation.at(i).get('item_category_invoice_serial_number').updateValueAndValidity();
       expvalidation.at(i).get('item_category_item_serial_number_invoice').updateValueAndValidity();
       expvalidation.at(i).get('item_category_item_serial_number_license').updateValueAndValidity();
       expvalidation.at(i).get('item_category_debit_unit_of_measurement').updateValueAndValidity();
       expvalidation.at(i).get('item_category_license_registration_number').updateValueAndValidity();
       expvalidation.at(i).get('item_category_license_registration_date').updateValueAndValidity();
       expvalidation.at(i).get('item_category_license_code').updateValueAndValidity();
       expvalidation.at(i).get('item_category_license_reg_port').updateValueAndValidity();
    }else{
      expvalidation.at(i).get('item_category_invoice_serial_number').clearValidators();
      expvalidation.at(i).get('item_category_item_serial_number_invoice').clearValidators();
      expvalidation.at(i).get('item_category_item_serial_number_license').clearValidators();
      expvalidation.at(i).get('item_category_debit_unit_of_measurement').clearValidators();
      expvalidation.at(i).get('item_category_license_registration_number').clearValidators();
      expvalidation.at(i).get('item_category_license_registration_date').clearValidators();
      expvalidation.at(i).get('item_category_license_code').clearValidators();
      expvalidation.at(i).get('item_category_license_reg_port').clearValidators();
       //  Clear All Validators
       expvalidation.at(i).get('item_category_invoice_serial_number').updateValueAndValidity();
       expvalidation.at(i).get('item_category_item_serial_number_invoice').updateValueAndValidity();
       expvalidation.at(i).get('item_category_item_serial_number_license').updateValueAndValidity();
       expvalidation.at(i).get('item_category_debit_unit_of_measurement').updateValueAndValidity();
       expvalidation.at(i).get('item_category_license_registration_number').updateValueAndValidity();
       expvalidation.at(i).get('item_category_license_registration_date').updateValueAndValidity();
       expvalidation.at(i).get('item_category_license_code').updateValueAndValidity();
       expvalidation.at(i).get('item_category_license_reg_port').updateValueAndValidity();
 
      }
  };
// ctch length value if eight then add validations
cthLength(event,i) {
let eventTargetValue = event.target.value;
const cthvalidation = <FormArray>this.addStep3Inoices().at(i).get('addNewItemStepThree');

if(eventTargetValue.length === 8) {
     cthvalidation.at(i).get('product_details_invoice_serial_number').setValidators([Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]);
     cthvalidation.at(i).get('product_details_item_serial_number').setValidators([Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]);
     cthvalidation.at(i).get('ritc_qualifier').setValidators([Validators.required,Validators.maxLength(100),ValidatorsService.alpaNumValidator]);
     cthvalidation.at(i).get('info_type').setValidators([Validators.required,Validators.maxLength(3),ValidatorsService.textValidator]);
    // cthvalidation.at(i).get('info_qualifier').setValidators([Validators.required,Validators.maxLength(100),ValidatorsService.textValidator]);
     cthvalidation.at(i).get('info_code').setValidators([Validators.maxLength(100),ValidatorsService.textValidator]);
     cthvalidation.at(i).get('info_text').setValidators([,Validators.maxLength(100),ValidatorsService.textValidator]);
     cthvalidation.at(i).get('info_msr').setValidators([Validators.maxLength(16),ValidatorsService.numberValidator]);
     cthvalidation.at(i).get('info_uqc').setValidators([Validators.maxLength(3),ValidatorsService.textValidator])
      //  Clear All Validators
      cthvalidation.at(i).get('product_details_invoice_serial_number').updateValueAndValidity();
     cthvalidation.at(i).get('product_details_item_serial_number').updateValueAndValidity();
     cthvalidation.at(i).get('ritc_qualifier').updateValueAndValidity();
     cthvalidation.at(i).get('info_type').updateValueAndValidity();
     //cthvalidation.at(i).get('info_qualifier').updateValueAndValidity();
     cthvalidation.at(i).get('info_code').updateValueAndValidity();
     cthvalidation.at(i).get('info_text').updateValueAndValidity();
     cthvalidation.at(i).get('info_msr').updateValueAndValidity();
     cthvalidation.at(i).get('info_uqc').updateValueAndValidity();
       
}else{
    cthvalidation.at(i).get('product_details_invoice_serial_number').clearValidators();
    cthvalidation.at(i).get('product_details_item_serial_number').clearValidators();
    cthvalidation.at(i).get('ritc_qualifier').clearValidators();
    cthvalidation.at(i).get('info_type').clearValidators();
   // cthvalidation.at(i).get('info_qualifier').clearValidators();
    cthvalidation.at(i).get('info_code').clearValidators();
    cthvalidation.at(i).get('info_text').clearValidators();
    cthvalidation.at(i).get('info_msr').clearValidators();
    cthvalidation.at(i).get('info_uqc').clearValidators();
      //  Clear All Validators
    cthvalidation.at(i).get('product_details_invoice_serial_number').updateValueAndValidity();
    cthvalidation.at(i).get('product_details_item_serial_number').updateValueAndValidity();
    cthvalidation.at(i).get('ritc_qualifier').updateValueAndValidity();
    cthvalidation.at(i).get('info_type').updateValueAndValidity();
   // cthvalidation.at(i).get('info_qualifier').updateValueAndValidity();
    cthvalidation.at(i).get('info_code').updateValueAndValidity();
    cthvalidation.at(i).get('info_text').updateValueAndValidity();
    cthvalidation.at(i).get('info_msr').updateValueAndValidity();
    cthvalidation.at(i).get('info_uqc').updateValueAndValidity();
}
}

// other notification changes on ten value
otherNotificationChanges(event,i) {
let eventTargetValue = event.target.value;
const otherNotificationvalidation = <FormArray>this.addStep3Inoices().at(i).get('addNewItemStepThree');

if(eventTargetValue.length === 10) {
  otherNotificationvalidation.at(i).get('notification_invoice_serial_number').setValidators([Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]);
  otherNotificationvalidation.at(i).get('notification_item_serial_number_invoice').setValidators([Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]);
  otherNotificationvalidation.at(i).get('notification_number').setValidators([Validators.maxLength(10),Validators.required,ValidatorsService.textValidator]);
  otherNotificationvalidation.at(i).get('notification_serial_number').setValidators([Validators.maxLength(10),Validators.required,ValidatorsService.textValidator]);
  otherNotificationvalidation.at(i).get('duty_type').setValidators([Validators.required]);
  otherNotificationvalidation.at(i).get('additional_duty_flag').setValidators([Validators.required,ValidatorsService.textValidator]);
  otherNotificationvalidation.at(i).get('exmp_notification').setValidators([Validators.maxLength(10),ValidatorsService.textValidator]);
  otherNotificationvalidation.at(i).get('exmp_notification_serial_number').setValidators([Validators.maxLength(10),ValidatorsService.textValidator]);
  otherNotificationvalidation.at(i).get('customs_exmp').setValidators([ValidatorsService.textValidator]);
  otherNotificationvalidation.at(i).get('suplier_number').setValidators([Validators.maxLength(10),ValidatorsService.textValidator]);
  otherNotificationvalidation.at(i).get('nou').setValidators([Validators.maxLength(16),ValidatorsService.numberValidator]);


  // clear all validatiors
  otherNotificationvalidation.at(i).get('notification_invoice_serial_number').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('notification_item_serial_number_invoice').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('notification_number').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('notification_serial_number').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('duty_type').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('additional_duty_flag').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('exmp_notification').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('exmp_notification_serial_number').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('customs_exmp').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('suplier_number').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('nou').updateValueAndValidity();
 
 
}else{
  otherNotificationvalidation.at(i).get('notification_invoice_serial_number').clearValidators();
  otherNotificationvalidation.at(i).get('notification_item_serial_number_invoice').clearValidators();
  otherNotificationvalidation.at(i).get('notification_number').clearValidators();
  otherNotificationvalidation.at(i).get('notification_serial_number').clearValidators();
  otherNotificationvalidation.at(i).get('duty_type').clearValidators();
  otherNotificationvalidation.at(i).get('additional_duty_flag').clearValidators();
  otherNotificationvalidation.at(i).get('exmp_notification').clearValidators();
  otherNotificationvalidation.at(i).get('exmp_notification_serial_number').clearValidators();
  otherNotificationvalidation.at(i).get('customs_exmp').clearValidators();
  otherNotificationvalidation.at(i).get('suplier_number').clearValidators();
  otherNotificationvalidation.at(i).get('nou').clearValidators();
 
  // clear all validatiors
  otherNotificationvalidation.at(i).get('notification_invoice_serial_number').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('notification_item_serial_number_invoice').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('notification_number').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('notification_serial_number').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('duty_type').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('additional_duty_flag').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('exmp_notification').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('exmp_notification_serial_number').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('customs_exmp').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('suplier_number').updateValueAndValidity();
  otherNotificationvalidation.at(i).get('nou').updateValueAndValidity();
  
  
}
}
onPriceDetails(event,i){
const priceDetailsWheather = <FormArray>this.addStep3Inoices().at(i).get('addNewItemStepThree');

if(event.target.value === 'Yes') {
  console.log('dd')
  priceDetailsWheather.at(i).get('price_details_permission_code').setValidators([Validators.required]);
  priceDetailsWheather.at(i).get('price_details_reason_for_request').setValidators([Validators.required]);
  priceDetailsWheather.at(i).get('price_details_invoice_serial_number_on').setValidators([Validators.required]);
  priceDetailsWheather.at(i).get('price_details_item_serial_number_invoice').setValidators([Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]);
  priceDetailsWheather.at(i).get('price_details_shipping_bill_no').setValidators([Validators.required,Validators.maxLength(7),ValidatorsService.numberValidator]);
  priceDetailsWheather.at(i).get('price_details_shipping_bill_date').setValidators([Validators.required]);
  priceDetailsWheather.at(i).get('price_details_notification_no').setValidators([Validators.required]);
  priceDetailsWheather.at(i).get('price_details_notification_sr_no').setValidators([Validators.required,Validators.maxLength(10),ValidatorsService.alpaNumValidator]);
 
  // update
  priceDetailsWheather.at(i).get('price_details_permission_code').updateValueAndValidity();
  priceDetailsWheather.at(i).get('price_details_reason_for_request').updateValueAndValidity();
  priceDetailsWheather.at(i).get('price_details_invoice_serial_number_on').updateValueAndValidity();
  priceDetailsWheather.at(i).get('price_details_item_serial_number_invoice').updateValueAndValidity();
  priceDetailsWheather.at(i).get('price_details_shipping_bill_no').updateValueAndValidity();
  priceDetailsWheather.at(i).get('price_details_shipping_bill_date').updateValueAndValidity();
  priceDetailsWheather.at(i).get('price_details_notification_no').updateValueAndValidity();
  priceDetailsWheather.at(i).get('price_details_notification_sr_no').updateValueAndValidity();
 
}else{

  priceDetailsWheather.at(i).get('price_details_permission_code').clearValidators();
  priceDetailsWheather.at(i).get('price_details_reason_for_request').clearValidators();
  priceDetailsWheather.at(i).get('price_details_invoice_serial_number_on').clearValidators();
  priceDetailsWheather.at(i).get('price_details_item_serial_number_invoice').clearValidators();
  priceDetailsWheather.at(i).get('price_details_shipping_bill_no').clearValidators();
  priceDetailsWheather.at(i).get('price_details_shipping_bill_date').clearValidators();
  priceDetailsWheather.at(i).get('price_details_notification_no').clearValidators();
  priceDetailsWheather.at(i).get('price_details_notification_sr_no').clearValidators();

  priceDetailsWheather.at(i).get('price_details_permission_code').updateValueAndValidity();
  priceDetailsWheather.at(i).get('price_details_reason_for_request').updateValueAndValidity();
  priceDetailsWheather.at(i).get('price_details_invoice_serial_number_on').updateValueAndValidity();
  priceDetailsWheather.at(i).get('price_details_item_serial_number_invoice').updateValueAndValidity();
  priceDetailsWheather.at(i).get('price_details_shipping_bill_no').updateValueAndValidity();
  priceDetailsWheather.at(i).get('price_details_shipping_bill_date').updateValueAndValidity();
  priceDetailsWheather.at(i).get('price_details_notification_no').updateValueAndValidity();
  priceDetailsWheather.at(i).get('price_details_notification_sr_no').updateValueAndValidity();

}

}
// document upload code there
myFiles:string [] = [];
getFileDetails (e) {
  const file = (e.target as HTMLInputElement).files[0];
  var filePath = file.name;
  var allowedExtensions = /(\.pdf)$/i; 
  const fileReader = new FileReader();
   fileReader.readAsText(file, "UTF-8");
   fileReader.onload = () => {
     if (!allowedExtensions.exec(filePath)) { 
       Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Only pdf file is allowed',
         
       }).then((result) => {
         e.target.value = '';
       })
      
     }else{
      console.log (e.target.files);
       for (var i = 0; i < e.target.files.length; i++) {
         this.myFiles.push(e.target.files[i]);
       }
    }
}

}
onSubmitStepThree() {
    if (this.webFormJSON.controls.stepThree_invoice.valid === true) {
    //  this.webFormJSON.value
      Swal.fire({
        title: 'Step 3 is completed',
        text: "Please click next for other step or click cancel",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Next &nbsp; &#8594;'
      }).then((result) => {
        if (result.isConfirmed) {
          let element:HTMLElement = document.getElementById('save_continues') as HTMLElement;
          element.click();
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Required Validation is left. Please check',
      }).then((result) =>{
        this.formSumitAttempt = true
      })

    }
  }
 onSubmitStepFour() {
  
    if (this.webFormJSON.controls.inBondFormStep4.valid === true) {
      console.log(this.webFormJSON.value)
      Swal.fire({
        title: 'Step 4 is completed',
        text: "Please click next for other step or click cancel",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Next &nbsp; &#8594;'
      }).then((result) => {
        if (result.isConfirmed) {
          let element:HTMLElement = document.getElementById('save_continues') as HTMLElement;
          element.click();
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Required Validation is left. Please check',
      }).then((result) =>{
        this.formSumitAttempt = true
      })

    }
  }
  selectionChange($event) {
    if ($event.selectedIndex == 2 || $event.selectedIndex == 3 || $event.selectedIndex == 4) {
    }
  }

  // public onFormSubmit(){
  //   console.log( this.webFormJSON.value); 
  // }

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

  stepThreeClickFun(){
    alert('ss')
  }
 // import json files code there
uploadFile(event) {
  //console.log()
  // this.addStepThreetabs(){

  // }

  
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
          //console.log(data);
         this.webFormJSON.patchValue({
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
             stepThree_invoice: [],
             inBondFormStep4: [],
           
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
             }
         
             
             
         }, );
       }
       this.setStepThreeData(data.stepThree_invoice);
       this.setStepFourData(data.inBondFormStep4);
       });
   }
   }
   fileReader.onerror = (error) => {
     console.log(error);
   }

 }
  // these functoin are array function add remove or get functions
  // get addStep3Inoicess() {
  //   return <FormArray>this.webFormJSON.get('stepThree_invoice');
  // }

 setStepThreeData(data) {
  
  data.forEach(dataItem => {
   // console.log(dataItem);
    this.addStep3Inoices().push(
      this._fb.group({
       
        invoice_serial_number : dataItem.invoice_serial_number  ,
        invoice_date : dataItem.invoice_date ,
        purchase_order_number : dataItem.purchase_order_number ,
        purchase_order_date : dataItem.purchase_order_date ,
        contract_number : dataItem.contract_number ,
        contract_date : dataItem.contract_date ,
        lc_number : dataItem.lc_number ,
        lc_date : dataItem.lc_date ,
        svb_reference_number : dataItem.svb_reference_number ,
        svb_reference_date : dataItem.svb_reference_date ,
        svb_load_assessable_value : dataItem.svb_load_assessable_value ,
        svb_load_on_duty : dataItem.svb_load_on_duty ,
        svb_flag : dataItem.svb_flag ,
        load_final_provisional_on_ass_value : dataItem.load_final_provisional_on_ass_value ,
        load_final_provisional_on_duty : dataItem.load_final_provisional_on_duty ,
        custom_house_code_imposed_load : dataItem.custom_house_code_imposed_load ,
        name_supplier : dataItem.name_supplier ,
        address1_supplier : dataItem.address1_supplier ,
        address2_supplier : dataItem.address2_supplier ,
        address3_supplier : dataItem.address3_supplier ,
        country_supplier : dataItem.country_supplier ,
        pin_supplier : dataItem.pin_supplier ,
        supplier_country_name : dataItem.supplier_country_name ,
        name_seller : dataItem.name_seller ,
        address1_seller : dataItem.address1_seller ,
        address2_seller : dataItem.address2_seller ,
        address3_seller : dataItem.address3_seller ,
        country_seller : dataItem.country_seller ,
        pin_seller : dataItem.pin_seller ,
        Seller_country_name : dataItem.Seller_country_name ,
        name_broker : dataItem.name_broker ,
        address1_broker : dataItem.address1_broker ,
        address2_broker : dataItem.address2_broker ,
        address3_broker : dataItem.address3_broker ,
        country_broker : dataItem.country_broker ,
        pin_broker : dataItem.pin_broker ,
        broker_country_name : dataItem.broker_country_name ,
        invoice_value : dataItem.invoice_value ,
        terms_of_invoice : dataItem.terms_of_invoice ,
        invoice_currency : dataItem.invoice_currency ,
        nature_of_discount : dataItem.nature_of_discount ,
        discount_rate : dataItem.discount_rate ,
        discount_amount : dataItem.discount_amount ,
        hss_load_rate : dataItem.hss_load_rate ,
        hss_load_amount : dataItem.hss_load_amount ,
        freight_value : dataItem.freight_value ,
        freight_rate : dataItem.freight_rate ,
        freight_actual : dataItem.freight_actual ,
        freight_currency : dataItem.freight_currency ,
        insurance_value : dataItem.insurance_value ,
        insurance_rate : dataItem.insurance_rate ,
        insurance_currency : dataItem.insurance_currency ,
        misc_charge : dataItem.misc_charge ,
        misc_currency : dataItem.misc_currency ,
        misc_rate : dataItem.misc_rate ,
        landing_rate : dataItem.landing_rate ,
        loading_charge : dataItem.loading_charge ,
        loading_currency : dataItem.loading_currency ,
        load_rate : dataItem.load_rate ,
        agency_commission : dataItem.agency_commission ,
        agency_commission_currency : dataItem.agency_commission_currency ,
        agency_commission_rate : dataItem.agency_commission_rate ,
        nature_of_transaction : dataItem.nature_of_transaction ,
        payment_terms : dataItem.payment_terms ,
        cond_sale_1 : dataItem.cond_sale_1 ,
        cond_sale_2 : dataItem.cond_sale_2 ,
        cond_sale_3 : dataItem.cond_sale_3 ,
        cond_sale_4 : dataItem.cond_sale_4 ,
        cond_sale_5 : dataItem.cond_sale_5 ,
        valuation_method_applicable : dataItem.valuation_method_applicable ,
        actual_invoice_number : dataItem.actual_invoice_number ,
        other_relevant_information : dataItem.other_relevant_information ,
        terms_place : dataItem.terms_place ,
        name_third_party : dataItem.name_third_party ,
        address1_third_party : dataItem.address1_third_party ,
        address2_third_party : dataItem.address2_third_party ,
        city_third_party : dataItem.city_third_party ,
        country_sub_division_third_party : dataItem.country_sub_division_third_party ,
        country_code_third_party : dataItem.country_code_third_party ,
        pin_third_party : dataItem.pin_third_party ,
        authorized_economic_operator : dataItem.authorized_economic_operator ,
        authorized_economic_operator_country : dataItem.authorized_economic_operator_country ,
        authorized_economic_operator_role : dataItem.authorized_economic_operator_role ,
        buyer_or_seller_related : dataItem.buyer_or_seller_related ,
        authorized_economic_operator_code : dataItem.authorized_economic_operator_code ,
        autohrized_operator_country : dataItem.autohrized_operator_country ,
        
        document_type_code:dataItem.document_type_code,
        document_issuing_party_code:dataItem.document_issuing_party_code ,
        document_issuing_party_name:dataItem.document_issuing_party_name ,
        document_issuing_party_name_address1:dataItem.document_issuing_party_name_address1 ,
        document_issuing_party_name_address2:dataItem.document_issuing_party_name_address2 ,
        document_issuing_party_name_city:dataItem.document_issuing_party_name_city ,
        document_issuing_party_name_pin:dataItem.document_issuing_party_name_pin ,
        document_reference_number:dataItem.document_reference_number,
        place_of_issue:dataItem.place_of_issue,
        document_issue_date:dataItem.document_issue_date,
        document_expiry_date:dataItem.document_expiry_date,
        document_beneficiary_party_code:dataItem.document_beneficiary_party_code,
        document_beneficiary_party_name:dataItem.document_beneficiary_party_name,
        document_beneficiary_party_name_address1:dataItem.document_beneficiary_party_name_address1,
        document_beneficiary_party_name_address2:dataItem.document_beneficiary_party_name_address2,
        document_beneficiary_party_name_city:dataItem.document_beneficiary_party_name_city,
        document_beneficiary_party_name_pin:dataItem.document_beneficiary_party_name_pin,
        icegate_user_id:dataItem.icegate_user_id,
        iec:dataItem.iec,
        file_type:dataItem.file_type,
        cha_license_number:dataItem.cha_license_number,
        item_serial_number:dataItem.item_serial_number,
        decleration_type:dataItem.decleration_type,
        image_reference_number:dataItem.image_reference_number,
        uploadDocuments:dataItem.uploadDocuments,
        addNewItemStepThree:this.addnewItemInnerPartStepThree(dataItem)
      })
    )  });
 
 }
 addnewItemInnerPartStepThree(dataItem) {
  let arr = new FormArray([]);
  dataItem.addNewItemStepThree.forEach(innerData=> {
    arr.push(
      this._fb.group({
        
        invoice_serial_numbers : innerData.invoice_serial_numbers,
        item_serial_number : innerData.item_serial_number ,
        item_quantity : innerData.item_quantity ,
        unit_quantity_code : innerData.unit_quantity_code ,
        ritc_code : innerData.ritc_code ,
        item_description1 : innerData.item_description1 ,
        item_description2 : innerData.item_description2 ,
        item_category : innerData.item_category ,
        item_description_generic : innerData.item_description_generic ,
        item_category_invoice_serial_number : innerData.item_category_invoice_serial_number ,
        item_category_item_serial_number_invoice : innerData.item_category_item_serial_number_invoice ,
        item_category_item_serial_number_license : innerData.item_category_item_serial_number_license ,
        item_category_debit_value : innerData.item_category_debit_value ,
        item_category_debit_quantity : innerData.item_category_debit_quantity ,
        item_category_debit_unit_of_measurement : innerData.item_category_debit_unit_of_measurement ,
        item_category_license_registration_number : innerData.item_category_license_registration_number ,
        item_category_license_code : innerData.item_category_license_code ,
        item_category_license_registration_date : innerData.item_category_license_registration_date ,
        item_category_license_reg_port : innerData.item_category_license_reg_port ,
        item_accessories : innerData.item_accessories ,
        preferential_or_standard : innerData.preferential_or_standard ,
        ceth : innerData.ceth ,
        name_producer : innerData.name_producer ,
        name_brand : innerData.name_brand ,
        model : innerData.model ,
        end_use_item : innerData.end_use_item ,
        country_of_origin_of_item : innerData.country_of_origin_of_item ,
        cth : innerData.cth ,
        product_details_invoice_serial_number : innerData.product_details_invoice_serial_number ,
        product_details_item_serial_number : innerData.product_details_item_serial_number ,
        ritc_qualifier : innerData.ritc_qualifier ,
        info_type : innerData.info_type ,
        info_code : innerData.info_code ,
        info_text : innerData.info_text ,
        info_msr : innerData.info_msr ,
        info_uqc : innerData.info_uqc ,
        bcd_notification : innerData.bcd_notification ,
        bcd_notification_sr_no : innerData.bcd_notification_sr_no ,
        cvd_notification : innerData.cvd_notification ,
        cvd_notification_sr_no : innerData.cvd_notification_sr_no ,
        additional_notification1 : innerData.additional_notification1 ,
        additional_notification1_sr_no : innerData.additional_notification1_sr_no ,
        additional_notification2 : innerData.additional_notification2 ,
        additional_notification2_sr_no : innerData.additional_notification2_sr_no ,
        other_notification : innerData.other_notification ,
        other_notification_sr_no : innerData.other_notification_sr_no ,
        notification_invoice_serial_number : innerData.notification_invoice_serial_number ,
        notification_item_serial_number_invoice : innerData.notification_item_serial_number_invoice ,
        notification_number : innerData.notification_number ,
        notification_serial_number : innerData.notification_serial_number ,
        duty_type : innerData.duty_type ,
        additional_duty_flag : innerData.additional_duty_flag ,
        exmp_notification : innerData.exmp_notification ,
        exmp_notification_serial_number : innerData.exmp_notification_serial_number ,
        customs_exmp : innerData.customs_exmp ,
        suplier_number : innerData.suplier_number ,
        nou : innerData.nou ,
        cex_educess_notification : innerData.cex_educess_notification ,
        cex_educess_notification_sr_no : innerData.cex_educess_notification_sr_no ,
        cus_educess_notification : innerData.cus_educess_notification ,
        cus_educess_notification_sr_no : innerData.cus_educess_notification_sr_no ,
        ncd_notification : innerData.ncd_notification ,
        ncd_notification_sr_no : innerData.ncd_notification_sr_no ,
        antii_dumping_duty_notification : innerData.antii_dumping_duty_notification ,
        antii_dumping_duty_notification_sr_no : innerData.antii_dumping_duty_notification_sr_no ,
        cth_serial_number : innerData.cth_serial_number ,
        supplier_serial_number : innerData.supplier_serial_number ,
        quantity_antii_dumping_duty_notification : innerData.quantity_antii_dumping_duty_notification ,
        quantity_tariff_value_notification : innerData.quantity_tariff_value_notification ,
        tariff_value_notification : innerData.tariff_value_notification ,
        tariff_value_notification_sr_no : innerData.tariff_value_notification_sr_no ,
        quantiy_tariff_value_notification : innerData.quantiy_tariff_value_notification ,
        sapta_notification : innerData.sapta_notification ,
        sapta_notification_sr_no : innerData.sapta_notification_sr_no ,
        health_notification : innerData.health_notification ,
        health_notification_sr_no : innerData.health_notification_sr_no ,
        additional_cvd_notification : innerData.additional_cvd_notification ,
        additional_cvd_notification_sr_no : innerData.additional_cvd_notification_sr_no ,
        aggregate_duty_notification : innerData.aggregate_duty_notification ,
        aggregate_duty_notification_sr_no : innerData.aggregate_duty_notification_sr_no ,
        safeguard_duty_notification : innerData.safeguard_duty_notification ,
        safeguard_duty_notification_sr_no : innerData.safeguard_duty_notification_sr_no ,
        price_details_unit_price_invoiced : innerData.price_details_unit_price_invoiced ,
        price_details_discount_rate : innerData.price_details_discount_rate ,
        price_details_discount_amount : innerData.price_details_discount_amount ,
        price_details_quantity_cth : innerData.price_details_quantity_cth ,
        price_details_svb_reference_number : innerData.price_details_svb_reference_number ,
        price_details_svb_reference_date : innerData.price_details_svb_reference_date ,
        price_details_svb_load_assessable_value : innerData.price_details_svb_load_assessable_value ,
        price_details_svb_load_on_duty : innerData.price_details_svb_load_on_duty ,
        price_details_svb_flag : innerData.price_details_svb_flag ,
        price_details_load_final_provisional_on_ass_value : innerData.price_details_load_final_provisional_on_ass_value ,
        price_details_load_final_provisional_on_duty : innerData.price_details_load_final_provisional_on_duty ,
        price_details_custom_house_code_imposed_load : innerData.price_details_custom_house_code_imposed_load ,
        price_details_policy_para_no : innerData.price_details_policy_para_no ,
        price_details_policy_year : innerData.price_details_policy_year ,
        price_details_rsp_applicability : innerData.price_details_rsp_applicability ,
        price_details_re_import : innerData.price_details_re_import ,
        price_details_permission_code : innerData.price_details_permission_code ,
        price_details_reason_for_request : innerData.price_details_reason_for_request ,
        price_details_invoice_serial_number_on : innerData.price_details_invoice_serial_number_on ,
        price_details_item_serial_number_invoice : innerData.price_details_item_serial_number_invoice ,
        price_details_shipping_bill_no : innerData.price_details_shipping_bill_no ,
        price_details_shipping_bill_date : innerData.price_details_shipping_bill_date ,
        price_details_port_of_export : innerData.price_details_port_of_export ,
        price_details_invoice_no_sb : innerData.price_details_invoice_no_sb ,
        price_details_item_no_sb : innerData.price_details_item_no_sb ,
        price_details_notification_no : innerData.price_details_notification_no ,
        price_details_notification_sr_no : innerData.price_details_notification_sr_no ,
        price_details_export_freight : innerData.price_details_export_freight ,
        price_details_export_insurance : innerData.price_details_export_insurance ,
        price_details_excise_duty : innerData.price_details_excise_duty ,
        price_details_customs_duty : innerData.price_details_customs_duty ,
        price_details_prev_be_no : innerData.price_details_prev_be_no ,
        price_details_prev_be_date : innerData.price_details_prev_be_date ,
        price_details_prev_unit_price : innerData.price_details_prev_unit_price ,
        price_details_prev_unit_currency : innerData.price_details_prev_unit_currency ,
        price_details_prev_customm_site : innerData.price_details_prev_customm_site ,
        price_details_custom_notifictaion_exempting_central_excise_flag : innerData.price_details_custom_notifictaion_exempting_central_excise_flag ,
        producer_code : innerData.producer_code ,
        grower_code : innerData.grower_code ,
        address1_grower : innerData.address1_grower ,
        address2_grower : innerData.address2_grower ,
        city_grower : innerData.city_grower ,
        country_sub_division_grower : innerData.country_sub_division_grower ,
        pin_grower : innerData.pin_grower ,
        country_grower : innerData.country_grower ,
        source_country : innerData.source_country ,
        transit_country : innerData.transit_country ,
        accessory_status : innerData.accessory_status ,
        active_ingredient_flag : innerData.active_ingredient_flag ,
        constituent_serial_number : innerData.constituent_serial_number ,
        constituent_element_name : innerData.constituent_element_name ,
        constituent_element_code : innerData.constituent_element_code ,
        constituent_percentage : innerData.constituent_percentage ,
        constituent_yield_percentage : innerData.constituent_yield_percentage ,
        production_batch_identifier : innerData.production_batch_identifier ,
        production_batch_quantity : innerData.production_batch_quantity ,
        production_unit_quantity_code : innerData.production_unit_quantity_code ,
        production_date_manufacturing : innerData.production_date_manufacturing ,
        production_date_expiry : innerData.production_date_expiry ,
        production_best_before : innerData.production_best_before ,
        control_type_code : innerData.control_type_code ,
        control_location : innerData.control_location ,
        control_start_date : innerData.control_start_date ,
        control_end_date : innerData.control_end_date ,
        control_result_code : innerData.control_result_code ,
        control_result_text : innerData.control_result_text,
        document_type_code:dataItem.document_type_code,
        document_issuing_party_code:dataItem.document_issuing_party_code ,
        document_issuing_party_name:dataItem.document_issuing_party_name ,
        document_issuing_party_name_address1:dataItem.document_issuing_party_name_address1 ,
        document_issuing_party_name_address2:dataItem.document_issuing_party_name_address2 ,
        document_issuing_party_name_city:dataItem.document_issuing_party_name_city ,
        document_issuing_party_name_pin:dataItem.document_issuing_party_name_pin ,
        document_reference_number:dataItem.document_reference_number,
        place_of_issue:dataItem.place_of_issue,
        document_issue_date:dataItem.document_issue_date,
        document_expiry_date:dataItem.document_expiry_date,
        document_beneficiary_party_code:dataItem.document_beneficiary_party_code,
        document_beneficiary_party_name:dataItem.document_beneficiary_party_name,
        document_beneficiary_party_name_address1:dataItem.document_beneficiary_party_name_address1,
        document_beneficiary_party_name_address2:dataItem.document_beneficiary_party_name_address2,
        document_beneficiary_party_name_city:dataItem.document_beneficiary_party_name_city,
        document_beneficiary_party_name_pin:dataItem.document_beneficiary_party_name_pin, 
        file_type: dataItem.file_type,
        icegate_user_id: dataItem.icegate_user_id,
        iec:dataItem.iec,
        cha_license_number:dataItem.cha_license_number,
        decleration_type:dataItem.decleration_type,
        image_reference_number:dataItem.image_reference_number,
        uploadDocuments:dataItem.uploadDocuments,

      })
    );
  });
  return arr;
} 
// Step Four data pushing code there
setStepFourData(data) {
  data.forEach(dataItem => {
    this.addStep4Inoices().push(
      this._fb.group({
        invoice_serial_number_four:dataItem.invoice_serial_number_four,
        misc_charge_code:dataItem.misc_charge_code,
        misc_description:dataItem.misc_description,
        misc_charges:dataItem.misc_charges,
        misc_rate:dataItem.misc_rate
      }))
  })
}
 
 // Download bill of entry in json format
 downloadbillentry() { 
   let formObj = this.webFormJSON.getRawValue();
   let serializedForm = JSON.stringify(formObj);
   var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(serializedForm));
   this.downloadJsonHref = uri;
  // console.log(serializedForm);
 }
// data save in api
billofEntry() {
  console.log(this.webFormJSON.value);
  this._apiService.createBillOfEntry({"webFormJSON": this.webFormJSON.value}).subscribe(
    (data:any) => {
      let backendData = data.response;
      Swal.fire({
        title: 'Form has been save as draft',
        text: backendData,
        icon: 'success',
      })
     // console.log(data, "Result");
},
error => {
  let backendDataErrorMessage = error.message;
  Swal.fire({
    title: 'Form has not been save',
    text: backendDataErrorMessage,
    icon: 'error',
  })
}
);
}
}
