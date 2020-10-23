
import { ShippingBillService } from './service/shipping-bill.service';
import { Component, OnInit, EventEmitter,Output,ViewChild  } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Subject, BehaviorSubject } from 'rxjs';
import { MatStepper } from '@angular/material/stepper';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shipping-bill',
  templateUrl: './shipping-bill.component.html',
  styleUrls: ['./shipping-bill.component.scss']
})
export class ShippingBillComponent implements OnInit {

  tabs = [1];
  tabs1= [1];
  tabs3=[1];
  selected = new FormControl(0);
  selected1 = new FormControl(0);
  selected3 = new FormControl(0);
  disableAddButton = false;
  ShippingBill: FormGroup;
  downloadJsonHref
  constructor(public _shippingBillService: ShippingBillService,private router: Router,private _fb: FormBuilder,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.ShippingBill = this._fb.group({


      shipingBillSStepOne: new FormControl(""),
      shipingBillStepTwo: new FormControl(""),
      shippingBillStepThree: new FormControl(""),
      shippingBillstepFour: new FormControl(""),
      shippingBillstepFive: new FormControl(""),
      shipingBillStepSix: new FormControl(""),
      shipingBillStepSeven: new FormControl(""),
      shipingBillStepEight: new FormControl(""),
      shippingBillStepNine: new FormControl(""),
      shipingBillSStepTen: new FormControl(""),
      
     
    });
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
  }

  removeTab1(index: number) {
    this.tabs1.splice(index, 1);
  }

  addTab3() {
    this.tabs3.push(this.tabs3.length);
    this.selected3.setValue(this.tabs3.length);
  }
  removeTab3(index: number) {
    this.tabs3.splice(index, 1);
  }

  isIecAvailable(event){
    this._shippingBillService.iecAvailable.next(event.value);
  }

  isNfeiAvailable(nfeiEvent){
    this._shippingBillService.nfeiAvailable.next(nfeiEvent.value);
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
         this.ShippingBill.patchValue({
          shipingBillSStepOne: {
            consignee_name:data.shipingBillSStepOne.consignee_name,
            consignee_address_1:data.shipingBillSStepOne.consignee_address_1 ,
            consignee_address_2:data.shipingBillSStepOne.consignee_address_2 ,
            consignee_address_3:data.shipingBillSStepOne.consignee_address_3 ,
            consignee_address_4:data.shipingBillSStepOne.consignee_address_4 ,
            consignee_country:data.shipingBillSStepOne.consignee_country ,
            category_nfei_sb:data.shipingBillSStepOne.category_nfei_sb ,
            rbi_waiver_number: data.shipingBillSStepOne.rbi_waiver_number ,
            rbi_waiver_date: data.shipingBillSStepOne.rbi_waiver_date ,
            port_of_loading: data.shipingBillSStepOne.port_of_loading ,
            port_of_final_destination: data.shipingBillSStepOne.port_of_final_destination ,
            country_final_destination: data.shipingBillSStepOne.country_final_destination ,
            country_discharge: data.shipingBillSStepOne.country_discharge ,
            port_of_discharge: data.shipingBillSStepOne.port_of_discharge ,
            seal_type: data.shipingBillSStepOne.seal_type ,
            ie_code_eou: data.shipingBillSStepOne.ie_code_eou ,
            branch_sr_number_ie: data.shipingBillSStepOne.branch_sr_number_ie ,
            examination_date: data.shipingBillSStepOne.examination_date ,
            examining_officer_name: data.shipingBillSStepOne.examining_officer_name ,
            examining_officer_designation: data.shipingBillSStepOne.examining_officer_designation ,
            supervising_officer_name: data.shipingBillSStepOne.supervising_officer_name ,
            supervising_officer_designation: data.shipingBillSStepOne.supervising_officer_designation ,
            commissionerate: data.shipingBillSStepOne.commissionerate ,
            division: data.shipingBillSStepOne.division ,
            range: data.shipingBillSStepOne.range ,
            seal_number: data.shipingBillSStepOne.seal_number ,
            item_values_verified: data.shipingBillSStepOne.item_values_verified ,
            sample_forwarded: data.shipingBillSStepOne.sample_forwarded ,
            amendment_type: data.shipingBillSStepOne.amendment_type ,
            amendment_number: data.shipingBillSStepOne.amendment_number ,
            amendment_date: data.shipingBillSStepOne.amendment_date ,
            nature_of_cargo: data.shipingBillSStepOne.nature_of_cargo ,
            gross_weight: data.shipingBillSStepOne.gross_weight ,
            net_weight: data.shipingBillSStepOne.net_weight ,
            unit_measurement: data.shipingBillSStepOne.unit_measurement ,
            total_number_packages: data.shipingBillSStepOne.total_number_packages ,
            marks_and_numbers: data.shipingBillSStepOne.marks_and_numbers ,
            loose_packates_number: data.shipingBillSStepOne.loose_packates_number ,
            containers_number: data.shipingBillSStepOne.containers_number ,
            mawb_number: data.shipingBillSStepOne.mawb_number ,
            hawb_number: data.shipingBillSStepOne.hawb_number ,
            gstn_type: data.shipingBillSStepOne.gstn_type ,
            gstn_id: data.shipingBillSStepOne.gstn_id ,
            message_type: data.shipingBillSStepOne.message_type,
            custom_house_code: data.shipingBillSStepOne.custom_house_code,
            job_number: data.shipingBillSStepOne.job_number,
            job_date: data.shipingBillSStepOne.job_date,
            sb_number: data.shipingBillSStepOne.sb_number ,
            sb_date: data.shipingBillSStepOne.sb_date ,
            cha_license_number: data.shipingBillSStepOne.cha_license_number,
            importer_exporter_code: data.shipingBillSStepOne.importer_exporter_code,
            branch_sr_no_of_exporter: data.shipingBillSStepOne.branch_sr_no_of_exporter,
            importer_exporter_name: data.shipingBillSStepOne.importer_exporter_name,
            imp_exp_address1: data.shipingBillSStepOne.imp_exp_address1,
            imp_exp_address2: data.shipingBillSStepOne.imp_exp_address2,
            imp_exp_city: data.shipingBillSStepOne.imp_exp_city,
            imp_exp_state: data.shipingBillSStepOne.imp_exp_state,
            imp_exp_pin: data.shipingBillSStepOne.imp_exp_pin,
            type_of_exporter: data.shipingBillSStepOne.type_of_exporter,
            exporter_class: data.shipingBillSStepOne.exporter_class,
            state_of_origin_exporter: data.shipingBillSStepOne.state_of_origin_exporter,
            authorized_dealer_code: data.shipingBillSStepOne.authorized_dealer_code,
            epz_code: data.shipingBillSStepOne.epz_code 
          },
          shipingBillStepTwo: {
            invoice_sr_number: data.shipingBillStepTwo.invoice_sr_number,
            invoice_number: data.shipingBillStepTwo.invoice_number,
            invoice_currency: data.shipingBillStepTwo.invoice_currency,
            nature_of_contract: data.shipingBillStepTwo.nature_of_contract,
            invoice_date: data.shipingBillStepTwo.invoice_date,
            buyer_name: data.shipingBillStepTwo.buyer_name,
            buyer_address_1: data.shipingBillStepTwo.buyer_address_1,
            buyer_address_2: data.shipingBillStepTwo.buyer_address_2,
            buyer_address_3: data.shipingBillStepTwo.buyer_address_3,
            buyer_address_4: data.shipingBillStepTwo.buyer_address_4,
            freight_currency: data.shipingBillStepTwo.freight_currency,
            freight_amount: data.shipingBillStepTwo.freight_amount,
            insurance_rate: data.shipingBillStepTwo.insurance_rate,
            insurance_currency: data.shipingBillStepTwo.insurance_currency,
            insurance_amount: data.shipingBillStepTwo.insurance_amount,
            commission_rate: data.shipingBillStepTwo.commission_rate,
            commission_currency: data.shipingBillStepTwo.commission_currency,
            commission_amount: data.shipingBillStepTwo.commission_amount,
            discount_on_fob: data.shipingBillStepTwo.discount_on_fob,
            discount_currency: data.shipingBillStepTwo.discount_currency,
            discount_amount: data.shipingBillStepTwo.discount_amount,
            other_deductions: data.shipingBillStepTwo.other_deductions,
            other_deductions_currency: data.shipingBillStepTwo.other_deductions_currency,
            other_deductions_amount: data.shipingBillStepTwo.other_deductions_amount,
            add_freight: data.shipingBillStepTwo.add_freight,
            packing_charges: data.shipingBillStepTwo.packing_charges,
            exporter_contract_number: data.shipingBillStepTwo.exporter_contract_number,
            nature_of_payment: data.shipingBillStepTwo.nature_of_payment,
            period_of_payments: data.shipingBillStepTwo.period_of_payments,
            amendment_type: data.shipingBillStepTwo.amendment_type,
            amendment_number: data.shipingBillStepTwo.amendment_number,
            amendment_date: data.shipingBillStepTwo.amendment_date,
            iec: data.shipingBillStepTwo.iec,
            branch_serial_number: data.shipingBillStepTwo.branch_serial_number,
            exporter_name: data.shipingBillStepTwo.exporter_name,
            address1: data.shipingBillStepTwo.address1,
            address2: data.shipingBillStepTwo.address2,
            city: data.shipingBillStepTwo.city,
            state: data.shipingBillStepTwo.state,
            pin: data.shipingBillStepTwo.pin,
            gstn_type: data.shipingBillStepTwo.gstn_type,
            gstn_id: data.shipingBillStepTwo.gstn_id
          },
          shippingBillStepThree: {
            invoice_currency_code: data.shippingBillStepThree.invoice_currency_code,
            currency_name: data.shippingBillStepThree.currency_name,
            unit_in_rs: data.shippingBillStepThree.unit_in_rs,
            rate: data.shippingBillStepThree.rate,
            effective_date: data.shippingBillStepThree.effective_date,
            whether_standard_currency: data.shippingBillStepThree.whether_standard_currency,
            amendment_type: data.shippingBillStepThree.amendment_type,
            amendment_no: data.shippingBillStepThree.amendment_no,
            amendment_date: data.shippingBillStepThree.amendment_date
          },
          shippingBillstepFour: {
            invoice_sr_number: data.shippingBillstepFour.invoice_sr_number,
            item_sr_number_in_invoice: data.shippingBillstepFour.item_sr_number_in_invoice,
            scheme_code: data.shippingBillstepFour.scheme_code,
            ritc_code: data.shippingBillstepFour.ritc_code,
            description_of_the_goods_1: data.shippingBillstepFour.description_of_the_goods_1,
            description_of_the_goods_2: data.shippingBillstepFour.description_of_the_goods_2,
            description_of_the_goods_3: data.shippingBillstepFour.description_of_the_goods_3,
            unit_of_measurement: data.shippingBillstepFour.unit_of_measurement,
            quantity: data.shippingBillstepFour.quantity,
            unit_price: data.shippingBillstepFour.unit_price,
            unit_of_rate: data.shippingBillstepFour.unit_of_rate,
            no_of_unit: data.shippingBillstepFour.no_of_unit,
            present_market_value: data.shippingBillstepFour.present_market_value,
            job_work_notification: data.shippingBillstepFour.job_work_notification,
            third_party: data.shippingBillstepFour.third_party,
            reward_item: data.shippingBillstepFour.reward_item,
            amendment_type: data.shippingBillstepFour.amendment_type,
            amendment_no: data.shippingBillstepFour.amendment_no,
            amendment_date: data.shippingBillstepFour.amendment_date,
            szzzza: data.shippingBillstepFour.szzzza,
            item_manufacturer_code: data.shippingBillstepFour.item_manufacturer_code,
            item_manufacturer_type_address1: data.shippingBillstepFour.item_manufacturer_type_address1,
            item_manufacturer_type_address2: data.shippingBillstepFour.item_manufacturer_type_address2,
            item_manufacturer_type_city: data.shippingBillstepFour.item_manufacturer_type_city,
            item_manufacturer_type_subdivision: data.shippingBillstepFour.item_manufacturer_type_subdivision,
            item_manufacturer_type_pin: data.shippingBillstepFour.item_manufacturer_type_pin,
            item_manufacturer_type_country: data.shippingBillstepFour.item_manufacturer_type_country,
            source_state: data.shippingBillstepFour.source_state,
            transit_country: data.shippingBillstepFour.transit_country,
            accessory_status: data.shippingBillstepFour.accessory_status,
            end_use_of_item: data.shippingBillstepFour.end_use_of_item,
            hawb_no: data.shippingBillstepFour.hawb_no,
            total_package: data.shippingBillstepFour.total_package,
            igst_payment_status: data.shippingBillstepFour.igst_payment_status,
            taxable_value: data.shippingBillstepFour.taxable_value,
            igst_amount: data.shippingBillstepFour.igst_amount,
            description: data.shippingBillstepFour.description,
            iec: data.shippingBillstepFour.iec,
            branch_serial_number: data.shippingBillstepFour.branch_serial_number,
            exporter_name: data.shippingBillstepFour.exporter_name,
            address1: data.shippingBillstepFour.address1,
            address2: data.shippingBillstepFour.address2,
            city: data.shippingBillstepFour.city,
            state: data.shippingBillstepFour.state,
            pin: data.shippingBillstepFour.pin,
            gstn_type: data.shippingBillstepFour.gstn_type,
            gstn_id: data.shippingBillstepFour.gstn_id,
            srno: data.shippingBillstepFour.srno,
            cess_act_code: data.shippingBillstepFour.cess_act_code,
            ces_quantity: data.shippingBillstepFour.ces_quantity,
            dbk_schedule_number: data.shippingBillstepFour.dbk_schedule_number,
            drawback_quantity: data.shippingBillstepFour.drawback_quantity,
            raw_material_code: data.shippingBillstepFour.raw_material_code,
            row_material_quantity: data.shippingBillstepFour.row_material_quantity

          },
          shippingBillstepFive: {
            invoice_sr_number: data.shippingBillstepFive.invoice_sr_number ,
            item_sr_number_in_invoice: data.shippingBillstepFive.item_sr_number_in_invoice,
            group_code: data.shippingBillstepFive.group_code,
            item_code: data.shippingBillstepFive.item_code,
            quantity: data.shippingBillstepFive.quantity,
            amendment_type: data.shippingBillstepFive.amendment_type,
            amendment_no: data.shippingBillstepFive.amendment_no,
            amendment_date: data.shippingBillstepFive.amendment_date,
            sr_no: data.shippingBillstepFive.sr_no,
            unit_quantity_code: data.shippingBillstepFive.unit_quantity_code,
            quantity_percentage: data.shippingBillstepFive.quantity_percentage 

          },
          shipingBillStepSix: {
            invoice_sr_number: data.shipingBillStepSix.invoice_sr_number,
            item_sr_number_in_invoice: data.shipingBillStepSix.item_sr_number_in_invoice,
            sr_no: data.shipingBillStepSix.sr_no,
            registration_number: data.shipingBillStepSix.registration_number,
            registration_date: data.shipingBillStepSix.registration_date,
            item_sr_number_part_e: data.shipingBillStepSix.item_sr_number_part_e,
            item_sr_number_part_c: data.shipingBillStepSix.item_sr_number_part_c,
            quantity: data.shipingBillStepSix.quantity,
            export_quantity: data.shipingBillStepSix.export_quantity,
            whether_indigenous_imported: data.shipingBillStepSix.whether_indigenous_imported,
            amendment_type: data.shipingBillStepSix.amendment_type,
            amendment_no: data.shipingBillStepSix.amendment_no,
            amendment_date: data.shipingBillStepSix.amendment_date,
            sion_group_code: data.shipingBillStepSix.sion_group_code,
            sion_sr_number: data.shipingBillStepSix.sion_sr_number,
            sion_io_norm_sr_number: data.shipingBillStepSix.sion_io_norm_sr_number,
            dfia_quantity: data.shipingBillStepSix.dfia_quantity,
            unit_of_measurement: data.shipingBillStepSix.unit_of_measurement,
            item_description: data.shipingBillStepSix.item_description,
            technical_characteristics: data.shipingBillStepSix.technical_characteristics,
            file_number: data.shipingBillStepSix.file_number,
            license_number: data.shipingBillStepSix.license_number,
            be_number: data.shipingBillStepSix.be_number,
            be_date: data.shipingBillStepSix.be_date,
            be_invoice_serial_number: data.shipingBillStepSix.be_invoice_serial_number,
            be_invoice_number: data.shipingBillStepSix.be_invoice_number,
            be_item_number: data.shipingBillStepSix.be_item_number,
            be_port_code: data.shipingBillStepSix.be_port_code,
            be_qty_used: data.shipingBillStepSix.be_qty_used,
            qty_units: data.shipingBillStepSix.qty_units

          },
          shipingBillStepSeven: {
            invoice_sr_number:  data.shipingBillStepSeven.invoice_sr_number,
            item_sr_number_invoice:  data.shipingBillStepSeven.item_sr_number_invoice,
            ar4_number:  data.shipingBillStepSeven.ar4_number,
            ar4_date:  data.shipingBillStepSeven.ar4_date,
            commissionerate:  data.shipingBillStepSeven.commissionerate,
            division:  data.shipingBillStepSeven.division,
            range:  data.shipingBillStepSeven.range,
            remarks:  data.shipingBillStepSeven.remarks,
            packing_number_from:  data.shipingBillStepSeven.packing_number_from,
            packing_number_to:  data.shipingBillStepSeven.packing_number_to,
            packing_code:  data.shipingBillStepSeven.packing_code,
            rotation_date:  data.shipingBillStepSeven.rotation_date,
            rotation_number:  data.shipingBillStepSeven.rotation_number,
            factory_stuffed:  data.shipingBillStepSeven.factory_stuffed,
            sample_accompanied:  data.shipingBillStepSeven.sample_accompanied,
            container_number:  data.shipingBillStepSeven.container_number,
            container_size:  data.shipingBillStepSeven.container_size,
            excise_seal_number:  data.shipingBillStepSeven.excise_seal_number,
            seal_date:  data.shipingBillStepSeven.seal_date,
            seal_type_indicator:  data.shipingBillStepSeven.seal_type_indicator,
            seal_device_id:  data.shipingBillStepSeven.seal_device_id,
            movement_document_type:  data.shipingBillStepSeven.movement_document_type,
            movement_document_number:  data.shipingBillStepSeven.movement_document_number,
            eqmnt_type:  data.shipingBillStepSeven.eqmnt_type,
            eqmnt_qty:  data.shipingBillStepSeven.eqmnt_qty,
            eqmnt_qty_code:  data.shipingBillStepSeven.eqmnt_qty_code
          },
          shipingBillStepEight: {
            site_id: data.shipingBillStepEight.site_id,
            request_date: data.shipingBillStepEight.request_date,
            request_letter_number: data.shipingBillStepEight.request_letter_number,
            indicate_type_of_amendment: data.shipingBillStepEight.indicate_type_of_amendment,
            reason_for_amendment: data.shipingBillStepEight.reason_for_amendment,
            amendment_status: data.shipingBillStepEight.amendment_status,
            unique_number_generated: data.shipingBillStepEight.unique_number_generated,
            invoice_sr_number: data.shipingBillStepEight.invoice_sr_number,
            item_sr_number_invoice: data.shipingBillStepEight.item_sr_number_invoice,
            srno: data.shipingBillStepEight.srno,
            item_code_str_directory: data.shipingBillStepEight.item_code_str_directory,
            amendment_type: data.shipingBillStepEight.amendment_type,
            amendment_no: data.shipingBillStepEight.amendment_no,
            amendment_date: data.shipingBillStepEight.amendment_date
          },
          shippingBillStepNine: {
            site_id: data.shippingBillStepNine.site_id,
            invoice_serial_no: data.shippingBillStepNine.invoice_serial_no,
            item_serial_no: data.shippingBillStepNine.item_serial_no,
            serial_no: data.shippingBillStepNine.serial_no,
            info_type: data.shippingBillStepNine.info_type,
            info_qualifier: data.shippingBillStepNine.info_qualifier,
            info_code: data.shippingBillStepNine.info_code,
            info_text: data.shippingBillStepNine.info_text,
            info_msr: data.shippingBillStepNine.info_msr,
            info_uqc: data.shippingBillStepNine.info_uqc,
            constituent_element_name: data.shippingBillStepNine.constituent_element_name,
            constituent_code: data.shippingBillStepNine.constituent_code,
            constituent_percentage: data.shippingBillStepNine.constituent_percentage,
            constituent_yield_percentage: data.shippingBillStepNine.constituent_yield_percentage,
            active_ingredient: data.shippingBillStepNine.active_ingredient,
            production_batch_identifier: data.shippingBillStepNine.production_batch_identifier,
            production_batch_quantity: data.shippingBillStepNine.production_batch_quantity,
            unit_quantity_code: data.shippingBillStepNine.unit_quantity_code,
            manufacturing_date: data.shippingBillStepNine.manufacturing_date,
            expiry_date: data.shippingBillStepNine.expiry_date,
            best_before: data.shippingBillStepNine.best_before,
            control_type_code: data.shippingBillStepNine.control_type_code,
            control_location: data.shippingBillStepNine.control_location,
            control_start_date: data.shippingBillStepNine.control_start_date,
            control_end_date: data.shippingBillStepNine.control_end_date,
            control_result_code: data.shippingBillStepNine.control_result_code,
            control_result_text: data.shippingBillStepNine.control_result_text,
            statement_type: data.shippingBillStepNine.statement_type,
            statement_code: data.shippingBillStepNine.statement_code,
            statement_text: data.shippingBillStepNine.statement_text
          },
          shipingBillSStepTen: {
            invoice_serial_no: data.shipingBillSStepTen.invoice_serial_no,
            item_serial_no: data.shipingBillSStepTen.item_serial_no,
            serial_no: data.shipingBillSStepTen.serial_no,
            image_reference_number: data.shipingBillSStepTen.image_reference_number,
            document_type_code: data.shipingBillSStepTen.document_type_code,
            document_issuing_party_code: data.shipingBillSStepTen.document_issuing_party_code,
            document_issuing_party_name_address1: data.shipingBillSStepTen.document_issuing_party_name_address1,
            document_issuing_party_name_address2: data.shipingBillSStepTen.document_issuing_party_name_address2,
            document_issuing_party_name_city: data.shipingBillSStepTen.document_issuing_party_name_city,
            document_issuing_party_name_pin: data.shipingBillSStepTen.document_issuing_party_name_pin,
            document_reference_number: data.shipingBillSStepTen.document_reference_number,
            place_of_issue: data.shipingBillSStepTen.place_of_issue,
            document_issue_date: data.shipingBillSStepTen.document_issue_date,
            document_expiry_date: data.shipingBillSStepTen.document_expiry_date,
            document_beneficiary_party_code: data.shipingBillSStepTen.document_beneficiary_party_code,
            document_beneficiary_party_name_address1: data.shipingBillSStepTen.document_beneficiary_party_name_address1,
            document_beneficiary_party_name_address2: data.shipingBillSStepTen.document_beneficiary_party_name_address2,
            document_beneficiary_party_name_city: data.shipingBillSStepTen.document_beneficiary_party_name_city,
            document_beneficiary_party_name_pin: data.shipingBillSStepTen.document_beneficiary_party_name_pin,
            file_type: data.shipingBillSStepTen.file_type,
            icegate_user_id: data.shipingBillSStepTen.icegate_user_id,
            document_issuing_party_name: data.shipingBillSStepTen.document_issuing_party_name,
            document_beneficiary_party_name: data.shipingBillSStepTen.document_beneficiary_party_name

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
   let formObj = this.ShippingBill.getRawValue();
   let serializedForm = JSON.stringify(formObj);
   var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(serializedForm));
   this.downloadJsonHref = uri;
  // console.log(serializedForm);
 }

}
