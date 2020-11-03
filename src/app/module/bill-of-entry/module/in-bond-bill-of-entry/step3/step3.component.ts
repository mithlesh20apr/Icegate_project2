import { MatDialog } from '@angular/material/dialog';
import { Step5Component } from '../../in-bond-bill-of-entry/step5/step5.component';
import { Component, OnInit,ViewChild,Input,forwardRef,Output,EventEmitter,HostListener } from '@angular/core';
import { FormGroup,FormControl,FormArray, Validator, FormBuilder,Validators,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';
import Swal from 'sweetalert2';
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
  //tabs = [1];
  //addStep3Inoices() = ['Invoice1']
 
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
    console.log('fddfdf')
      // let element:HTMLElement = document.getElementById('step_three_add_items') as HTMLElement;
      // element.click();
 // });
  }
  @HostListener('onload') onClick() {
    window.alert('Host Element Clicked');
 }
  // Add step three invoice details
  AddStepThreeInvoideDetails(): FormGroup {
    return this._formBuilder.group({
      invoiceDetails: new FormGroup({
        invoice_serial_number:  new FormControl('',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]),
        invoice_date:  new FormControl(''),
        purchase_order_number:  new FormControl('',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]),
        purchase_order_date:  new FormControl(''),
        contract_number:  new FormControl('',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]),
        contract_date:  new FormControl(''),
        lc_number:  new FormControl('',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]),
        lc_date:  new FormControl(''),
        svb_reference_number:  new FormControl('',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]),
        svb_reference_date:  new FormControl(''),
        svb_load_assessable_value:  new FormControl('',[Validators.maxLength(10),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),12)]),
        svb_load_on_duty:  new FormControl('',[Validators.maxLength(10),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),12)]),
        svb_flag:  new FormControl('',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]),
        load_final_provisional_on_ass_value:  new FormControl('',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]),
        load_final_provisional_on_duty:  new FormControl('',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]),
        custom_house_code_imposed_load:  new FormControl('',[Validators.maxLength(6),Validators.pattern("^[0-9a-zA-Z]+$")]),
      }),
      suppliereDetails: new FormGroup({
        name_supplier:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern("^[a-zA-Z]+$")]),
        address1_supplier:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]),
        address2_supplier:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]),
        address3_supplier:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]),
        country_supplier:new FormControl('',[Validators.maxLength(25),Validators.pattern("^[0-9a-zA-Z]+$")]),
        pin_supplier:new FormControl('',[Validators.maxLength(10),Validators.pattern("[1-9]{1}[0-9]+$")]),
        supplier_country_name: new FormControl('')
      }),
      sellerDetails: new FormGroup({
        name_seller:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[a-zA-Z]+$")]),
        address1_seller:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]),
        address2_seller:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]),
        address3_seller:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]),
        country_seller:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]),
        pin_seller:new FormControl('',[Validators.maxLength(10),Validators.pattern("[1-9]{1}[0-9]{5}")]),
        Seller_country_name: new FormControl('')
      }),
      brokerDetails: new FormGroup({
        name_broker:new FormControl('',[Validators.maxLength(50),Validators.pattern("^[0-9a-zA-Z]+$")]),
        address1_broker:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]),
        address2_broker:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]),
        address3_broker:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]),
        country_broker:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]),
        pin_broker:new FormControl('',[Validators.maxLength(10),Validators.pattern("[1-9]{1}[0-9]{9}")]),
        broker_country_name: new FormControl('')
      }),
      invoiceratesDetails: new FormGroup({
        invoice_value:new FormControl('',[Validators.required,Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
        terms_of_invoice:new FormControl('',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]),
        invoice_currency:new FormControl('',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]),
        nature_of_discount:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]),
        discount_rate:new FormControl('',[Validators.maxLength(6),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),6)]),
        discount_amount:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
        hss_load_rate:new FormControl('',[Validators.maxLength(6),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),6)]),
        hss_load_amount:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
        freight_value:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
        freight_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
        freight_actual:new FormControl('',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]),
        freight_currency:new FormControl('',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]),
        insurance_value:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
        insurance_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
        insurance_currency:new FormControl('',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]),
        misc_charge:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
        misc_currency:new FormControl('',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]),
        misc_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
        landing_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
        loading_charge:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
        loading_currency:new FormControl('',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]),
        load_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
        agency_commission:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
        agency_commission_currency:new FormControl('',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]),
        agency_commission_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
        nature_of_transaction:new FormControl('',[Validators.required,Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]),
        payment_terms:new FormControl('',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]),
        cond_sale_1:new FormControl('',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]),
        cond_sale_2:new FormControl('',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]),
        cond_sale_3:new FormControl('',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]),
        cond_sale_4:new FormControl('',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]),
        cond_sale_5:new FormControl('',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]),
        valuation_method_applicable:new FormControl('',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]),
        actual_invoice_number:new FormControl('',[Validators.required,Validators.maxLength(16),Validators.pattern("^[0-9a-zA-Z]+$")]),
        other_relevant_information:new FormControl('',[Validators.maxLength(100),Validators.pattern("^[0-9a-zA-Z]+$")]),
        terms_place:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]),       
      }),
      thirdPartyDetails: new FormGroup({
        name_third_party:new FormControl('',[Validators.maxLength(70),Validators.pattern("^[0-9a-zA-Z]+$")]),
        address1_third_party:new FormControl('',[Validators.maxLength(70 ),Validators.pattern("^[0-9a-zA-Z]+$")]),
        address2_third_party:new FormControl('',[Validators.maxLength(50),Validators.pattern("^[0-9a-zA-Z]+$")]),
        city_third_party:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]),
        country_sub_division_third_party:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]),
        country_code_third_party:new FormControl('',[Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]),
        pin_third_party:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        authorized_economic_operator:new FormControl('',[Validators.maxLength(17),Validators.pattern("^[0-9a-zA-Z]+$")]),
        authorized_economic_operator_country:new FormControl('',[Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]),
        authorized_economic_operator_role:new FormControl('',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]),
        buyer_or_seller_related:new FormControl('',[Validators.required,Validators.maxLength(70),Validators.pattern("^[0-9a-zA-Z]+$")]),
        authorized_economic_operator_code:new FormControl('',[Validators.maxLength(17),Validators.pattern("^[0-9a-zA-Z]+$")]),
        autohrized_operator_country:new FormControl('')
      }),
      addNewItemStepThree: this._formBuilder.array([]),
    })
  }
  // inner array part data display there
  AddNewItemInvoideDetailss() {
    return this._formBuilder.group({
      itemDetails: new FormGroup({
        item_quantity:new FormControl('',[Validators.required,Validators.maxLength(16),Validators.pattern("[0-9]")]),
        unit_quantity_code:new FormControl('',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]),
        ritc_code:new FormControl('',[Validators.required,Validators.maxLength(8),Validators.pattern("^[0-9a-zA-Z]+$")]),
        item_description1:new FormControl('',[Validators.required,Validators.maxLength(60),Validators.pattern("^[0-9a-zA-Z]+$")]),
        item_description2:new FormControl('',[Validators.maxLength(60),Validators.pattern("^[0-9a-zA-Z]+$")]),
        item_category:new FormControl('',[Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]),
        item_description_generic:new FormControl('',[Validators.maxLength(60),Validators.pattern("^[0-9a-zA-Z]+$")]),
        item_accessories:new FormControl('',[Validators.maxLength(2000),Validators.pattern("^[0-9a-zA-Z]+$")]),
        item_category_invoice_serial_number:new FormControl('',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]),
        item_category_item_serial_number_invoice: new FormControl(''),
        invoice_serial_numbers:new FormControl('',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]),
        item_serial_number:new FormControl('',[Validators.required,Validators.maxLength(4),Validators.pattern("[0-9]+$")]),
        item_category_item_serial_number:new FormControl('',[Validators.required,Validators.maxLength(4),Validators.pattern("[0-9]+$")]),
        item_category_item_serial_number_license:new FormControl('',[Validators.required,Validators.maxLength(4),Validators.pattern("[0-9]+$")]),
        item_category_debit_value:new FormControl(''),
        item_category_debit_quantity:new FormControl(''),
        item_category_debit_unit_of_measurement:new FormControl('',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]),
        item_category_license_registration_number:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern("[0-9]+$")]),
        item_category_license_code:new FormControl('',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]),
        item_category_license_registration_date:new FormControl('',Validators.required),
        item_category_license_reg_port:new FormControl('',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]),
      }),
      productDetails: new FormGroup({
        preferential_or_standard:new FormControl('',[Validators.required,Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]),
        ceth:new FormControl('',[Validators.required,Validators.maxLength(8),Validators.pattern("^[0-9a-zA-Z]+$")]),
        name_producer:new FormControl('',[Validators.maxLength(50),Validators.pattern("^[0-9a-zA-Z]+$")]),
        name_brand:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]),
        model:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]),
        end_use_item:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]),
        country_of_origin_of_item:new FormControl('',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]),
        cth:new FormControl('',[Validators.required,Validators.maxLength(8),Validators.pattern("^[0-9a-zA-Z]+$")]),
        product_details_invoice_serial_numbers:new FormControl('',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]),
        product_details_item_serial_number:new FormControl('',[Validators.required,Validators.maxLength(4),Validators.pattern("[0-9]+$")]),
        ritc_qualifier:new FormControl('',[Validators.required,Validators.maxLength(100),Validators.pattern("^[0-9a-zA-Z]+$")]),
        info_type:new FormControl('',[Validators.required,Validators.maxLength(3),Validators.pattern("^[a-zA-Z]+$")]),
        info_qualifier:new FormControl('',[Validators.required,Validators.maxLength(100),Validators.pattern("^[a-zA-Z]+$")]),
        info_code:new FormControl('',[Validators.maxLength(100),Validators.pattern("^[a-zA-Z]+$")]),
        info_text:new FormControl('',[,Validators.maxLength(100),Validators.pattern("^[a-zA-Z]+$")]),
        info_msr:new FormControl('',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]),
        info_uqc:new FormControl('',[Validators.maxLength(3),Validators.pattern("^[a-zA-Z]+$")]),
      }),
      notificationDetails:new FormGroup({
        bcd_notification:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        bcd_notification_sr_no: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        cvd_notification:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        cvd_notification_sr_no: new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        additional_notification1:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        additional_notification1_sr_no: new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        additional_notification2:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        additional_notification2_sr_no: new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        other_notification:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        other_notification_sr_no: new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        notification_invoice_serial_number:new FormControl('',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]),
        notification_item_serial_number_invoice:new FormControl('',[Validators.required,Validators.maxLength(4),Validators.pattern("[0-9]+$")]),
        notification_number:new FormControl('',[Validators.maxLength(10),Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
        notification_serial_number:new FormControl('',[Validators.maxLength(10),Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
        duty_type:new FormControl('',[Validators.required]),
        additional_duty_flag:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
        exmp_notification:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]),
        exmp_notification_serial_number:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]),
        customs_exmp:new FormControl('',[Validators.pattern("^[a-zA-Z]+$")]),
        suplier_number:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]),
        nou:new FormControl('',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]),
        cex_educess_notification:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        cex_educess_notification_sr_no: new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        cus_educess_notification:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        cus_educess_notification_sr_no: new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        ncd_notification:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        ncd_notification_sr_no: new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        antii_dumping_duty_notification:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        antii_dumping_duty_notification_sr_no: new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        cth_serial_number:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        supplier_serial_number:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        quantity_antii_dumping_duty_notification:new FormControl('',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]),
        quantity_tariff_value_notification:new FormControl('',[Validators.maxLength(16),Validators.pattern("[0-9]")]),
        tariff_value_notification:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        tariff_value_notification_sr_no: new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        quantiy_tariff_value_notification:new FormControl('',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]),
        sapta_notification:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        sapta_notification_sr_no: new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        health_notification:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        health_notification_sr_no: new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        additional_cvd_notification:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        additional_cvd_notification_sr_no: new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        aggregate_duty_notification:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        aggregate_duty_notification_sr_no: new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        safeguard_duty_notification:new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        safeguard_duty_notification_sr_no: new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),  
      }),
      priceDetails: new FormGroup({
        price_details_unit_price_invoiced:new FormControl('',[Validators.required,Validators.maxLength(16),Validators.pattern("[0-9]+$")]),
        price_details_discount_rate:new FormControl('',[Validators.maxLength(6),Validators.pattern("[0-9]+$")]),
        price_details_discount_amount:new FormControl('',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]),
        price_details_quantity_cth:new FormControl('',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]),
        price_details_svb_reference_number:new FormControl('',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]),
        price_details_svb_reference_date:new FormControl(''),
        price_details_svb_load_assessable_value:new FormControl('',[Validators.maxLength(10),Validators.pattern("[0-9]")]),
        price_details_svb_load_on_duty:new FormControl('',[Validators.maxLength(10),Validators.pattern("[0-9]+$")]),
        price_details_svb_flag:new FormControl('',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]),
        price_details_load_final_provisional_on_ass_value:new FormControl('',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]),
        price_details_load_final_provisional_on_duty:new FormControl('',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]),
        price_details_custom_house_code_imposed_load:new FormControl('',[Validators.maxLength(6),Validators.pattern("^[0-9a-zA-Z]+$")]),
        price_details_policy_para_no:new FormControl('',[Validators.maxLength(7),Validators.pattern("^[0-9a-zA-Z]+$")]),
        price_details_policy_year:new FormControl('',[Validators.maxLength(5),Validators.pattern("^[0-9a-zA-Z]+$")]),
        price_details_rsp_applicability:new FormControl('',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]),
        price_details_re_import:new FormControl('',Validators.required),
        price_details_permission_code:new FormControl(''),
        price_details_reason_for_request:new FormControl(''),
        price_details_invoice_serial_number:new FormControl('',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]),
        price_details_item_serial_number_invoice:new FormControl('',[Validators.required,Validators.maxLength(4),Validators.pattern("[0-9]+$")]),
        price_details_shipping_bill_no:new FormControl('',[Validators.required,Validators.maxLength(7),Validators.pattern("[0-9]+$")]),
        price_details_shipping_bill_date:new FormControl('',Validators.required),
        price_details_port_of_export:new FormControl(''),
        price_details_invoice_no_sb:new FormControl('',[Validators.maxLength(2),Validators.pattern("[0-9]+$")]),
        price_details_item_no_sb:new FormControl(''),
        price_details_notification_no:new FormControl(''),
        price_details_notification_sr_no: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]),
        price_details_export_freight:new FormControl(''),
        price_details_export_insurance:new FormControl(''),
        price_details_excise_duty:new FormControl(''),
        price_details_customs_duty:new FormControl(''),
        price_details_prev_be_no:new FormControl('',[Validators.maxLength(7),Validators.pattern("[0-9]+$")]),
        price_details_prev_be_date:new FormControl(''),
        price_details_prev_unit_price:new FormControl('',[Validators.maxLength(16),Validators.pattern("^[0-9a-zA-Z]+$")]),
        price_details_prev_unit_currency:new FormControl('',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]),
        price_details_prev_customm_site:new FormControl('',[Validators.maxLength(6),Validators.pattern("^[0-9a-zA-Z]+$")]),
        price_details_custom_notifictaion_exempting_central_excise_flag:new FormControl( '',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]),
       
      }),
      manufaturingDetails: new FormGroup({
        producer_code:new FormControl('',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]),
        grower_code:new FormControl('',[Validators.maxLength(17),Validators.pattern("^[0-9a-zA-Z]+$")]),
        address1_grower:new FormControl('',[Validators.maxLength(70),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]),
        address2_grower:new FormControl('',[Validators.maxLength(50),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]),
        city_grower:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]),
        country_sub_division_grower:new FormControl('',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]),
        pin_grower:new FormControl('',[Validators.maxLength(10),Validators.pattern("[1-9]{1}[0-9]{9}")]),
        country_grower:new FormControl('',[Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]),
        source_country:new FormControl('',[Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]),
        transit_country:new FormControl('',[Validators.maxLength(2),Validators.pattern("[^[0-9a-zA-Z]+$")]),
        accessory_status:new FormControl('',[Validators.required,Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$]")]),
  
      }),
      constituentDetails: new FormGroup({
        active_ingredient_flag: new FormControl('', Validators.required),
        constituent_serial_number:new FormControl('',[Validators.required,Validators.maxLength(3),Validators.pattern("[0-9]+$")]),
        constituent_element_name:new FormControl('',[Validators.required,Validators.maxLength(256),Validators.pattern("^[a-zA-Z]+$")]),
        constituent_element_code:new FormControl('',[Validators.required,Validators.maxLength(17),Validators.pattern("^[a-zA-Z]+$")]),
        constituent_percentage:new FormControl('',[Validators.required,Validators.maxLength(6),Validators.pattern("[0-9]+$")]),
        constituent_yield_percentage:new FormControl('',[Validators.required,Validators.maxLength(6),Validators.pattern("[0-9]+$")]),
      }),
      productionDetails: new FormGroup({
        production_batch_identifier:new FormControl('',[Validators.required,Validators.maxLength(17),Validators.pattern("^[a-zA-Z]+$")]),
        production_batch_quantity:new FormControl('',[Validators.required,Validators.maxLength(16),Validators.pattern("[0-9]+$")]),
        production_unit_quantity_code:new FormControl('',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]),
        production_date_manufacturing:new FormControl('',Validators.required),
        production_date_expiry:new FormControl('',Validators.required),
        production_best_before:new FormControl('',Validators.required),
      }),
      controlDetails: new FormGroup({
        control_type_code:new FormControl('',[Validators.required,Validators.maxLength(17),Validators.pattern("^[a-zA-Z]+$")]),
        control_location:new FormControl('',[Validators.required,Validators.maxLength(17),Validators.pattern("^[a-zA-Z]+$")]),
        control_start_date:new FormControl(''),
        control_end_date:new FormControl(''),
        control_result_code:new FormControl('',[Validators.required,Validators.maxLength(17),Validators.pattern("^[a-zA-Z]+$")]),
        control_result_text:new FormControl('',[Validators.maxLength(4000),Validators.pattern("^[a-zA-Z]+$")]),
      
      })
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
   // console.log(val);
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
    //this.inBondFormStep3.get("stepThree_invoice")
    console.log(this.inBondFormStep3.get(field));
    return (
      //this.inBondFormStep3.get(field)
      (!this.inBondFormStep3.get(field)?.valid && this.inBondFormStep3.get(field)?.touched) ||
      (this.inBondFormStep3.get(field)?.untouched && this.formSumitAttempt)
    );
  }

  displayFieldCss(field: string) {
    // console.log(field);
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
  // convenience getter for easy access to form fields
  get f() { return this.inBondFormStep3.controls; }
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
