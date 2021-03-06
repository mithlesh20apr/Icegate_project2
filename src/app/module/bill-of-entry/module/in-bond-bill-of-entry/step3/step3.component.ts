import { MatDialog } from '@angular/material/dialog';
import { Step5Component } from '../../in-bond-bill-of-entry/step5/step5.component';
import { Component, OnInit,ViewChild,Input,forwardRef,Output,EventEmitter,HostListener } from '@angular/core';
import { FormGroup,FormControl,FormArray, Validator, FormBuilder,Validators,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';
import Swal from 'sweetalert2';
import {TooltipPosition} from '@angular/material/tooltip';
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css'],
  providers: [
    {
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(() => Step3Component),
   multi: true
 },
  {
   provide: NG_VALIDATORS,
   useExisting: forwardRef(() => Step3Component),
   multi: true
 }
]
})
export class Step3Component implements OnInit,ControlValueAccessor,Validator {
  panelOpenState = false;
  isLinear = false;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  //tabs = [1];
  //addStep3Inoices() = [Input'Invoice1']
 
  selected = new FormControl(0);
  selecteds = new FormControl(0);
  disableAddButton = false;
  disableAddButtons= false;
  formSumitAttempt: boolean;
  @Input() index: number;
  inBondFormStep3: FormGroup
  constructor(
    private _formBuilder: FormBuilder,
    public _dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.inBondFormStep3= this._formBuilder.group({
      stepThree_invoice: this._formBuilder.array([]),
    });
 //   console.log('fddfdf')
   // let i;
    //to have a default value in array
   // this.addStepThreetabs();
    //this.addNewitemstabs(i);
      // let element:HTMLElement = document.getElementById('step_three_add_items') as HTMLElement;
      // element.click();
 // });
  }

  // Add step three invoice details
  AddStepThreeInvoideDetails(): FormGroup {
    return this._formBuilder.group({

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
      addNewItemStepThree: this._formBuilder.array([]),
    })
  }
  // inner array part data display there
  AddNewItemInvoideDetailss() {
    return this._formBuilder.group({
     
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
      
    
    })
  }
  // these functoin are array function add remove or get functions
  addStep3Inoices(): FormArray {
        return this.inBondFormStep3.get("stepThree_invoice") as FormArray
  }
  addNewItemInvoices(i:number) : FormArray {
        return this.addStep3Inoices().at(i).get("addNewItemStepThree") as FormArray
  }
  addStepThreetabs() {
    this.addStep3Inoices().push(this.AddStepThreeInvoideDetails());
    this.selected.setValue(this.addStep3Inoices().controls.length);
    if(this.addStep3Inoices().controls.length == 3){
      this.disableAddButton = true;
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
  removeNewItemTab(i: number) {
    this.addNewItemInvoices(i).controls.splice(i, 1);
    if(this.addNewItemInvoices(i).controls.length < 10){
      this.disableAddButton = false;
    }
  }

  public onTouched: () => void = () => {};

 
  writeValue(val: any): void {
   console.log(val);
    val && this.inBondFormStep3.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
  //  console.log("on change");
    this.inBondFormStep3.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
  //  console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.inBondFormStep3.disable() : this.inBondFormStep3.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null{
    //console.log("Consignment Info validation", c);
  
    return this.inBondFormStep3.valid ? null : { invalidForm: {valid: false, message: "Step3 fields are invalid"}};
  }
  // check validation when you click the continue buttons
  isFieldValid(field: string) {
//    console.log()
//const expvalidation = <FormArray>this.addStep3Inoices().at(0).get('addNewItemStepThree');

    return (   
    
      (!this.addStep3Inoices().at(0).get(field)?.valid && this.addStep3Inoices().at(0).get(field)?.touched) ||
      (this.addStep3Inoices().at(0).get(field)?.untouched  && this.formSumitAttempt)
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
  onSubmit() {
    if (this.inBondFormStep3.valid === true) {
      this.inBondFormStep3.value
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

}
