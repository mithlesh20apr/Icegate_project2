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
 //   console.log('fddfdf')

    //to have a default value in array
    this.addStepThreetabs()
      // let element:HTMLElement = document.getElementById('step_three_add_items') as HTMLElement;
      // element.click();
 // });
  }

  // Add step three invoice details
  AddStepThreeInvoideDetails(): FormGroup {
    return this._formBuilder.group({
      invoiceDetails: new FormGroup({
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
      }),
      suppliereDetails: new FormGroup({
        name_supplier:new FormControl('',[Validators.required,Validators.maxLength(50),ValidatorsService.textValidator]),
        address1_supplier:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
        address2_supplier:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
        address3_supplier:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
        country_supplier:new FormControl('',[Validators.maxLength(25),ValidatorsService.alpaNumValidator]),
        pin_supplier:new FormControl('',[Validators.maxLength(10),ValidatorsService.numberValidator]),
        supplier_country_name: new FormControl('')
      }),
      sellerDetails: new FormGroup({
        name_seller:new FormControl('',[Validators.maxLength(35),ValidatorsService.textValidator]),
        address1_seller:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
        address2_seller:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
        address3_seller:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
        country_seller:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
        pin_seller:new FormControl('',[Validators.maxLength(10),ValidatorsService.numberValidator]),
        Seller_country_name: new FormControl('')
      }),
      brokerDetails: new FormGroup({
        name_broker:new FormControl('',[Validators.maxLength(50),ValidatorsService.alpaNumValidator]),
        address1_broker:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
        address2_broker:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
        address3_broker:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
        country_broker:new FormControl('',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]),
        pin_broker:new FormControl('',[Validators.maxLength(10),ValidatorsService.numberValidator]),
        broker_country_name: new FormControl('')
      }),
      invoiceratesDetails: new FormGroup({
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
      }),
      thirdPartyDetails: new FormGroup({
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
      }),
      addNewItemStepThree: this._formBuilder.array([]),
    })
  }
  // inner array part data display there
  AddNewItemInvoideDetailss() {
    return this._formBuilder.group({
      itemDetails: new FormGroup({
        item_quantity:new FormControl('',[Validators.required,Validators.maxLength(16),ValidatorsService.numberValidator]),
        unit_quantity_code:new FormControl('',[Validators.required,Validators.maxLength(3),ValidatorsService.alpaNumValidator]),
        ritc_code:new FormControl('',[Validators.required,Validators.maxLength(8),ValidatorsService.alpaNumValidator]),
        item_description1:new FormControl('',[Validators.required,Validators.maxLength(60),ValidatorsService.alpaNumValidator]),
        item_description2:new FormControl('',[Validators.maxLength(60),ValidatorsService.alpaNumValidator]),
        item_category:new FormControl('',[Validators.maxLength(2),ValidatorsService.alpaNumValidator]),
        item_description_generic:new FormControl('',[Validators.maxLength(60),ValidatorsService.alpaNumValidator]),
        item_accessories:new FormControl('',[Validators.maxLength(2000),ValidatorsService.alpaNumValidator]),
        item_category_invoice_serial_number:new FormControl('',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]),
        item_category_item_serial_number_invoice: new FormControl(''),
        invoice_serial_numbers:new FormControl('',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]),
        item_serial_number:new FormControl('',[Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]),
        item_category_item_serial_number:new FormControl('',[Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]),
        item_category_item_serial_number_license:new FormControl('',[Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]),
        item_category_debit_value:new FormControl(''),
        item_category_debit_quantity:new FormControl(''),
        item_category_debit_unit_of_measurement:new FormControl('',[Validators.maxLength(3),ValidatorsService.alpaNumValidator]),
        item_category_license_registration_number:new FormControl('',[Validators.required,Validators.maxLength(10),ValidatorsService.numberValidator]),
        item_category_license_code:new FormControl('',[Validators.required,Validators.maxLength(2),ValidatorsService.alpaNumValidator]),
        item_category_license_registration_date:new FormControl('',Validators.required),
        item_category_license_reg_port:new FormControl('',[Validators.required,Validators.maxLength(2),ValidatorsService.alpaNumValidator]),
      }),
      productDetails: new FormGroup({
        preferential_or_standard:new FormControl('',[Validators.required,Validators.maxLength(1),ValidatorsService.alpaNumValidator]),
        ceth:new FormControl('',[Validators.required,Validators.maxLength(8),ValidatorsService.alpaNumValidator]),
        name_producer:new FormControl('',[Validators.maxLength(50),ValidatorsService.alpaNumValidator]),
        name_brand:new FormControl('',[Validators.required,Validators.maxLength(20),ValidatorsService.alpaNumValidator]),
        model:new FormControl('',[Validators.required,Validators.maxLength(20),ValidatorsService.alpaNumValidator]),
        end_use_item:new FormControl('',[Validators.required,Validators.maxLength(20),ValidatorsService.alpaNumValidator]),
        country_of_origin_of_item:new FormControl('',[Validators.required,Validators.maxLength(2),ValidatorsService.alpaNumValidator]),
        cth:new FormControl('',[Validators.required,Validators.maxLength(8),ValidatorsService.alpaNumValidator]),
        product_details_invoice_serial_numbers:new FormControl('',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]),
        product_details_item_serial_number:new FormControl('',[Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]),
        ritc_qualifier:new FormControl('',[Validators.required,Validators.maxLength(100),ValidatorsService.alpaNumValidator]),
        info_type:new FormControl('',[Validators.required,Validators.maxLength(3),ValidatorsService.textValidator]),
        info_qualifier:new FormControl('',[Validators.required,Validators.maxLength(100),ValidatorsService.textValidator]),
        info_code:new FormControl('',[Validators.maxLength(100),ValidatorsService.textValidator]),
        info_text:new FormControl('',[,Validators.maxLength(100),ValidatorsService.textValidator]),
        info_msr:new FormControl('',[Validators.maxLength(16),ValidatorsService.numberValidator]),
        info_uqc:new FormControl('',[Validators.maxLength(3),ValidatorsService.textValidator]),
      }),
      notificationDetails:new FormGroup({
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
        notification_invoice_serial_number:new FormControl('',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]),
        notification_item_serial_number_invoice:new FormControl('',[Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]),
        notification_number:new FormControl('',[Validators.maxLength(10),Validators.required,ValidatorsService.textValidator]),
        notification_serial_number:new FormControl('',[Validators.maxLength(10),Validators.required,ValidatorsService.textValidator]),
        duty_type:new FormControl('',[Validators.required]),
        additional_duty_flag:new FormControl('',[Validators.required,ValidatorsService.textValidator]),
        exmp_notification:new FormControl('',[Validators.maxLength(10),ValidatorsService.textValidator]),
        exmp_notification_serial_number:new FormControl('',[Validators.maxLength(10),ValidatorsService.textValidator]),
        customs_exmp:new FormControl('',[ValidatorsService.textValidator]),
        suplier_number:new FormControl('',[Validators.maxLength(10),ValidatorsService.textValidator]),
        nou:new FormControl('',[Validators.maxLength(16),ValidatorsService.numberValidator]),
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
      }),
      priceDetails: new FormGroup({
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
        price_details_invoice_serial_number:new FormControl('',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]),
        price_details_item_serial_number_invoice:new FormControl('',[Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]),
        price_details_shipping_bill_no:new FormControl('',[Validators.required,Validators.maxLength(7),ValidatorsService.numberValidator]),
        price_details_shipping_bill_date:new FormControl('',Validators.required),
        price_details_port_of_export:new FormControl(''),
        price_details_invoice_no_sb:new FormControl('',[Validators.maxLength(2),ValidatorsService.numberValidator]),
        price_details_item_no_sb:new FormControl(''),
        price_details_notification_no:new FormControl(''),
        price_details_notification_sr_no: new FormControl('',[Validators.required,Validators.maxLength(10),ValidatorsService.alpaNumValidator]),
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
       
      }),
      manufaturingDetails: new FormGroup({
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
  
      }),
      constituentDetails: new FormGroup({
        active_ingredient_flag: new FormControl('', Validators.required),
        constituent_serial_number:new FormControl('',[Validators.required,Validators.maxLength(3),ValidatorsService.numberValidator]),
        constituent_element_name:new FormControl('',[Validators.required,Validators.maxLength(256),ValidatorsService.textValidator]),
        constituent_element_code:new FormControl('',[Validators.required,Validators.maxLength(17),ValidatorsService.textValidator]),
        constituent_percentage:new FormControl('',[Validators.required,Validators.maxLength(6),ValidatorsService.numberValidator]),
        constituent_yield_percentage:new FormControl('',[Validators.required,Validators.maxLength(6),ValidatorsService.numberValidator]),
      }),
      productionDetails: new FormGroup({
        production_batch_identifier:new FormControl('',[Validators.required,Validators.maxLength(17),ValidatorsService.textValidator]),
        production_batch_quantity:new FormControl('',[Validators.required,Validators.maxLength(16),ValidatorsService.numberValidator]),
        production_unit_quantity_code:new FormControl('',[Validators.required,Validators.maxLength(3),ValidatorsService.alpaNumValidator]),
        production_date_manufacturing:new FormControl('',Validators.required),
        production_date_expiry:new FormControl('',Validators.required),
        production_best_before:new FormControl('',Validators.required),
      }),
      controlDetails: new FormGroup({
        control_type_code:new FormControl('',[Validators.required,Validators.maxLength(17),ValidatorsService.textValidator]),
        control_location:new FormControl('',[Validators.required,Validators.maxLength(17),ValidatorsService.textValidator]),
        control_start_date:new FormControl(''),
        control_end_date:new FormControl(''),
        control_result_code:new FormControl('',[Validators.required,Validators.maxLength(17),ValidatorsService.textValidator]),
        control_result_text:new FormControl('',[Validators.maxLength(4000),ValidatorsService.textValidator]),
      
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
    //console.log(this.inBondFormStep3.get(field));
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
