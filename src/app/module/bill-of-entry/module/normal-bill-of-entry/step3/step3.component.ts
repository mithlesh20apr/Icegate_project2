import { MatDialog } from '@angular/material/dialog';
import { Step5Component } from '../../in-bond-bill-of-entry/step5/step5.component';
import { Component, OnInit,ViewChild,Input,forwardRef,Output,EventEmitter } from '@angular/core';
import { FormGroup,FormControl,FormArray, Validator, FormBuilder,Validators,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';
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
export class Step3Component implements OnInit, ControlValueAccessor, Validator {

  panelOpenState = false;
  isLinear = false;
  tabs = [1];
  selected = new FormControl(0);
  selecteds = new FormControl(0);
  disableAddButton = false;
  disableAddButtons= false;
  homeConsumptionFormStep3: FormGroup;
  private formSumitAttempt: boolean;
  @Input() index: number;
  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep3= this._formBuilder.group({
      stepThree_invoice: this._formBuilder.array([]),
    })
  }
    AddStepThreeInvoideDetails(): FormGroup {
      return this._formBuilder.group({
        invoiceDetails: new FormGroup({
          invoice_serial_number:  new FormControl('',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]),
          invoice_date:  new FormControl(''),
          purchase_order_number:  new FormControl('',[Validators.maxLength(20),]),
          purchase_order_date:  new FormControl(''),
          contract_number:  new FormControl('',[Validators.maxLength(20),]),
          contract_date:  new FormControl(''),
          lc_number:  new FormControl('',[Validators.maxLength(20),]),
          lc_date:  new FormControl(''),
          svb_reference_number:  new FormControl('',[Validators.maxLength(20),]),
          svb_reference_date:  new FormControl(''),
          svb_load_assessable_value:  new FormControl('',[Validators.maxLength(10),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),12)]),
          svb_load_on_duty:  new FormControl('',[Validators.maxLength(10),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),12)]),
          svb_flag:  new FormControl('',[Validators.maxLength(1),]),
          load_final_provisional_on_ass_value:  new FormControl('',[Validators.maxLength(1),]),
          load_final_provisional_on_duty:  new FormControl('',[Validators.maxLength(1),]),
          custom_house_code_imposed_load:  new FormControl('',[Validators.maxLength(6),]),
        }),
        suppliereDetails: new FormGroup({
          name_supplier:new FormControl('',[Validators.required,Validators.maxLength(50),]),
          address1_supplier:new FormControl('',[Validators.maxLength(35),]),
          address2_supplier:new FormControl('',[Validators.maxLength(35),]),
          address3_supplier:new FormControl('',[Validators.maxLength(35),]),
          country_supplier:new FormControl('',[Validators.maxLength(25),]),
          pin_supplier:new FormControl('',[Validators.maxLength(10),Validators.pattern("[1-9]{1}[0-9]+$")]),
        }),
        sellerDetails: new FormGroup({
          name_seller:new FormControl('',[Validators.maxLength(35),]),
          address1_seller:new FormControl('',[Validators.maxLength(35),]),
          address2_seller:new FormControl('',[Validators.maxLength(35),]),
          address3_seller:new FormControl('',[Validators.maxLength(35),]),
          country_seller:new FormControl('',[Validators.maxLength(35),]),
          pin_seller:new FormControl('',[Validators.maxLength(10),Validators.pattern("[1-9]{1}[0-9]{5}")]),
        }),
        brokerDetails: new FormGroup({
          name_broker:new FormControl('',[Validators.maxLength(50),]),
          address1_broker:new FormControl('',[Validators.maxLength(35),]),
          address2_broker:new FormControl('',[Validators.maxLength(35),]),
          address3_broker:new FormControl('',[Validators.maxLength(35),]),
          country_broker:new FormControl('',[Validators.maxLength(35),]),
          pin_broker:new FormControl('',[Validators.maxLength(10),ValidatorsService.numberValidator]),
        }),
        invoiceratesDetails: new FormGroup({
          invoice_value:new FormControl('',[Validators.required,Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
          terms_of_invoice:new FormControl('',[Validators.required,Validators.maxLength(3),]),
          invoice_currency:new FormControl('',[Validators.required,Validators.maxLength(3),]),
          nature_of_discount:new FormControl('',[Validators.maxLength(35),]),
          discount_rate:new FormControl('',[Validators.maxLength(6),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),6)]),
          discount_amount:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
          hss_load_rate:new FormControl('',[Validators.maxLength(6),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),6)]),
          hss_load_amount:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
          freight_value:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
          freight_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
          freight_actual:new FormControl('',[Validators.maxLength(1),]),
          freight_currency:new FormControl('',[Validators.maxLength(3),]),
          insurance_value:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
          insurance_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
          insurance_currency:new FormControl('',[Validators.maxLength(3),]),
          misc_charge:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
          misc_currency:new FormControl('',[Validators.maxLength(3),]),
          misc_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
          landing_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
          loading_charge:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
          loading_currency:new FormControl('',[Validators.maxLength(3),]),
          load_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
          agency_commission:new FormControl('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),16)]),
          agency_commission_currency:new FormControl('',[Validators.maxLength(3),]),
          agency_commission_rate:new FormControl('',[Validators.maxLength(7),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,4}$/),7)]),
          nature_of_transaction:new FormControl('',[Validators.required,Validators.maxLength(1),]),
          payment_terms:new FormControl('',[Validators.required,Validators.maxLength(3),]),
          cond_sale_1:new FormControl('',[Validators.maxLength(40),]),
          cond_sale_2:new FormControl('',[Validators.maxLength(40),]),
          cond_sale_3:new FormControl('',[Validators.maxLength(40),]),
          cond_sale_4:new FormControl('',[Validators.maxLength(40),]),
          cond_sale_5:new FormControl('',[Validators.maxLength(40),]),
          valuation_method_applicable:new FormControl('',[Validators.maxLength(40),]),
          actual_invoice_number:new FormControl('',[Validators.required,Validators.maxLength(16),]),
          other_relevant_information:new FormControl('',[Validators.maxLength(100),]),
          terms_place:new FormControl('',[Validators.maxLength(35),]),       
        }),
        thirdPartyDetails: new FormGroup({
          name_third_party:new FormControl('',[Validators.maxLength(70),]),
          address1_third_party:new FormControl('',[Validators.maxLength(70 ),]),
          address2_third_party:new FormControl('',[Validators.maxLength(50),]),
          city_third_party:new FormControl('',[Validators.maxLength(35),]),
          country_sub_division_third_party:new FormControl('',[Validators.maxLength(35),]),
          country_code_third_party:new FormControl('',[Validators.maxLength(2),]),
          pin_third_party:new FormControl('',[Validators.maxLength(10),]),
          // authorized_economic_operator:new FormControl('',[Validators.maxLength(17),]),
          // authorized_economic_operator_country:new FormControl('',[Validators.maxLength(2),]),
          authorized_economic_operator_role:new FormControl('',[Validators.maxLength(3),]),
          buyer_or_seller_related:new FormControl('',[Validators.required,Validators.maxLength(70),]),
          authorized_economic_operator_code:new FormControl('',[Validators.maxLength(17),]),
    
        }),
        addNewItemStepThree: this._formBuilder.array([]),
      })
    }
    // inner array part data display there
    AddNewItemInvoideDetailss() {
      return this._formBuilder.group({
        itemDetails: new FormGroup({
          item_quantity:new FormControl('',[Validators.required,Validators.maxLength(16),ValidatorsService.numberValidator]),
          unit_quantity_code:new FormControl('',[Validators.required,Validators.maxLength(3),]),
          ritc_code:new FormControl('',[Validators.required,Validators.maxLength(8),]),
          item_description1:new FormControl('',[Validators.required,Validators.maxLength(60),]),
          item_description2:new FormControl('',[Validators.maxLength(60),]),
          item_category:new FormControl('',[Validators.maxLength(2),]),
          item_description_generic:new FormControl('',[Validators.maxLength(60),]),
          item_accessories:new FormControl('',[Validators.maxLength(2000),]),
          item_category_invoice_serial_numbers:new FormControl('',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]),
          invoice_serial_numbers:new FormControl('',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]),
          item_serial_number:new FormControl('',[Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]),
          item_category_item_serial_number:new FormControl('',[Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]),
          item_category_item_serial_number_license:new FormControl('',[Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]),
          item_category_debit_value:new FormControl(''),
          item_category_debit_quantity:new FormControl(''),
          item_category_debit_unit_of_measurement:new FormControl('',[Validators.maxLength(3),]),
          item_category_license_registration_number:new FormControl('',[Validators.required,Validators.maxLength(10),ValidatorsService.numberValidator]),
          item_category_license_code:new FormControl('',[Validators.required,Validators.maxLength(2),]),
          item_category_license_registration_date:new FormControl('',Validators.required),
          item_category_license_reg_port:new FormControl('',[Validators.required,Validators.maxLength(2),]),
        }),
        productDetails: new FormGroup({
          preferential_or_standard:new FormControl('',[Validators.required,Validators.maxLength(1),]),
          ceth:new FormControl('',[Validators.required,Validators.maxLength(8),]),
          name_producer:new FormControl('',[Validators.maxLength(50),]),
          name_brand:new FormControl('',[Validators.required,Validators.maxLength(20),]),
          model:new FormControl('',[Validators.required,Validators.maxLength(20),]),
          end_use_item:new FormControl('',[Validators.required,Validators.maxLength(20),]),
          country_of_origin_of_item:new FormControl('',[Validators.required,Validators.maxLength(2),]),
          cth:new FormControl('',[Validators.required,Validators.maxLength(8),]),
          product_details_invoice_serial_numbers:new FormControl('',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]),
          product_details_item_serial_number:new FormControl('',[Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]),
          ritc_qualifier:new FormControl('',[Validators.required,Validators.maxLength(100),]),
          info_type:new FormControl('',[Validators.required,Validators.maxLength(3),]),
          info_qualifier:new FormControl('',[Validators.required,Validators.maxLength(100),]),
          info_code:new FormControl('',[Validators.maxLength(100),]),
          info_text:new FormControl('',[,Validators.maxLength(100),]),
          info_msr:new FormControl('',[Validators.maxLength(16),ValidatorsService.numberValidator]),
          info_uqc:new FormControl('',[Validators.maxLength(3),]),
        }),
        notificationDetails:new FormGroup({
          bcd_notification:new FormControl('',[Validators.required,Validators.maxLength(10),]),
          bcd_notification_sr_no: new FormControl('',[Validators.required,Validators.maxLength(10),]),
          cvd_notification:new FormControl('',[Validators.maxLength(10),]),
          cvd_notification_sr_no: new FormControl('',[Validators.maxLength(10),]),
          additional_notification1:new FormControl('',[Validators.maxLength(10),]),
          additional_notification1_sr_no: new FormControl('',[Validators.maxLength(10),]),
          additional_notification2:new FormControl('',[Validators.maxLength(10),]),
          additional_notification2_sr_no: new FormControl('',[Validators.maxLength(10),]),
          other_notification:new FormControl('',[Validators.maxLength(10),]),
          other_notification_sr_no: new FormControl('',[Validators.maxLength(10),]),
          notification_invoice_serial_number:new FormControl('',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]),
          notification_item_serial_number_invoice:new FormControl('',[Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]),
          notification_number:new FormControl('',[Validators.maxLength(10),Validators.required,]),
          notification_serial_number:new FormControl('',[Validators.maxLength(10),Validators.required,]),
          duty_type:new FormControl('',[Validators.required]),
          additional_duty_flag:new FormControl('',[Validators.required,]),
          exmp_notification:new FormControl('',[Validators.maxLength(10),]),
          exmp_notification_serial_number:new FormControl('',[Validators.maxLength(10),]),
          customs_exmp:new FormControl('',[]),
          suplier_number:new FormControl('',[Validators.maxLength(10),]),
          nou:new FormControl('',[Validators.maxLength(16),ValidatorsService.numberValidator]),
          cex_educess_notification:new FormControl('',[Validators.maxLength(10),]),
          cex_educess_notification_sr_no: new FormControl('',[Validators.maxLength(10),]),
          cus_educess_notification:new FormControl('',[Validators.maxLength(10),]),
          cus_educess_notification_sr_no: new FormControl('',[Validators.maxLength(10),]),
          ncd_notification:new FormControl('',[Validators.maxLength(10),]),
          ncd_notification_sr_no: new FormControl('',[Validators.maxLength(10),]),
          antii_dumping_duty_notification:new FormControl('',[Validators.maxLength(10),]),
          antii_dumping_duty_notification_sr_no: new FormControl('',[Validators.maxLength(10),]),
          cth_serial_number:new FormControl('',[Validators.maxLength(10),]),
          supplier_serial_number:new FormControl('',[Validators.maxLength(10),]),
          quantity_antii_dumping_duty_notification:new FormControl('',[Validators.maxLength(16),ValidatorsService.numberValidator]),
          quantity_tariff_value_notification:new FormControl('',[Validators.maxLength(16),ValidatorsService.numberValidator]),
          tariff_value_notification:new FormControl('',[Validators.maxLength(10),]),
          tariff_value_notification_sr_no: new FormControl('',[Validators.maxLength(10),]),
          quantiy_tariff_value_notification:new FormControl('',[Validators.maxLength(16),ValidatorsService.numberValidator]),
          sapta_notification:new FormControl('',[Validators.maxLength(10),]),
          sapta_notification_sr_no: new FormControl('',[Validators.maxLength(10),]),
          health_notification:new FormControl('',[Validators.maxLength(10),]),
          health_notification_sr_no: new FormControl('',[Validators.maxLength(10),]),
          additional_cvd_notification:new FormControl('',[Validators.maxLength(10),]),
          additional_cvd_notification_sr_no: new FormControl('',[Validators.maxLength(10),]),
          aggregate_duty_notification:new FormControl('',[Validators.maxLength(10),]),
          aggregate_duty_notification_sr_no: new FormControl('',[Validators.maxLength(10),]),
          safeguard_duty_notification:new FormControl('',[Validators.maxLength(10),]),
          safeguard_duty_notification_sr_no: new FormControl('',[Validators.maxLength(10),]),  
        }),
        priceDetails: new FormGroup({
          price_details_unit_price_invoiced:new FormControl('',[Validators.required,Validators.maxLength(16),ValidatorsService.numberValidator]),
          price_details_discount_rate:new FormControl('',[Validators.maxLength(6),ValidatorsService.numberValidator]),
          price_details_discount_amount:new FormControl('',[Validators.maxLength(16),ValidatorsService.numberValidator]),
          price_details_quantity_cth:new FormControl('',[Validators.maxLength(16),ValidatorsService.numberValidator]),
          price_details_svb_reference_number:new FormControl('',[Validators.maxLength(20),]),
          price_details_svb_reference_date:new FormControl(''),
          price_details_svb_load_assessable_value:new FormControl('',[Validators.maxLength(10),ValidatorsService.numberValidator]),
          price_details_svb_load_on_duty:new FormControl('',[Validators.maxLength(10),ValidatorsService.numberValidator]),
          price_details_svb_flag:new FormControl('',[Validators.maxLength(1),]),
          price_details_load_final_provisional_on_ass_value:new FormControl('',[Validators.maxLength(1),]),
          price_details_load_final_provisional_on_duty:new FormControl('',[Validators.maxLength(1),]),
          price_details_custom_house_code_imposed_load:new FormControl('',[Validators.maxLength(6),]),
          price_details_policy_para_no:new FormControl('',[Validators.maxLength(7),]),
          price_details_policy_year:new FormControl('',[Validators.maxLength(5),]),
          price_details_rsp_applicability:new FormControl('',[Validators.required,Validators.maxLength(2),]),
          price_details_re_import:new FormControl('',Validators.required),
          price_details_permission_code:new FormControl(''),
          price_details_reason_for_request:new FormControl(''),
          price_details_invoice_serial_number:new FormControl('',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]),
          price_details_item_serial_number_invoice:new FormControl('',[Validators.required,Validators.maxLength(4),ValidatorsService.numberValidator]),
          price_details_shipping_bill_no:new FormControl('',[Validators.required,Validators.maxLength(7),ValidatorsService.numberValidator]),
          price_details_shipping_bill_date:new FormControl('',Validators.required),
          price_details_port_of_export:new FormControl(''),
          price_details_invoice_no_sb:new FormControl('',[Validators.maxLength(2),ValidatorsService.numberValidator]),
          price_details_item_no_sb:new FormControl(''),
          price_details_notification_no:new FormControl(''),
          price_details_notification_sr_no: new FormControl('',[Validators.required,Validators.maxLength(10),]),
          price_details_export_freight:new FormControl(''),
          price_details_export_insurance:new FormControl(''),
          price_details_excise_duty:new FormControl(''),
          price_details_customs_duty:new FormControl(''),
          price_details_prev_be_no:new FormControl('',[Validators.maxLength(7),ValidatorsService.numberValidator]),
          price_details_prev_be_date:new FormControl(''),
          price_details_prev_unit_price:new FormControl('',[Validators.maxLength(16),]),
          price_details_prev_unit_currency:new FormControl('',[Validators.maxLength(3),]),
          price_details_prev_customm_site:new FormControl('',[Validators.maxLength(6),]),
          price_details_custom_notifictaion_exempting_central_excise_flag:new FormControl( '',[Validators.maxLength(1),]),
         
        }),
        manufaturingDetails: new FormGroup({
          producer_code:new FormControl('',[Validators.maxLength(1),]),
          grower_code:new FormControl('',[Validators.maxLength(17),]),
          address1_grower:new FormControl('',[Validators.maxLength(70),]),
          address2_grower:new FormControl('',[Validators.maxLength(50),]),
          city_grower:new FormControl('',[Validators.maxLength(35),]),
          country_sub_division_grower:new FormControl('',[Validators.maxLength(35),]),
          pin_grower:new FormControl('',[Validators.maxLength(10),ValidatorsService.numberValidator]),
          country_grower:new FormControl('',[Validators.maxLength(2),]),
          source_country:new FormControl('',[Validators.maxLength(2),]),
          transit_country:new FormControl('',[Validators.maxLength(2),]),
          accessory_status:new FormControl('',[Validators.required,Validators.maxLength(1),]),
    
        }),
        constituentDetails: new FormGroup({
          active_ingredient_flag: new FormControl('', Validators.required),
          constituent_serial_number:new FormControl('',[Validators.required,Validators.maxLength(3),ValidatorsService.numberValidator]),
          constituent_element_name:new FormControl('',[Validators.required,Validators.maxLength(256),]),
          constituent_element_code:new FormControl('',[Validators.required,Validators.maxLength(17),]),
          constituent_percentage:new FormControl('',[Validators.required,Validators.maxLength(6),ValidatorsService.numberValidator]),
          constituent_yield_percentage:new FormControl('',[Validators.required,Validators.maxLength(6),ValidatorsService.numberValidator]),
        }),
        productionDetails: new FormGroup({
          production_batch_identifier:new FormControl('',[Validators.required,Validators.maxLength(17),]),
          production_batch_quantity:new FormControl('',[Validators.required,Validators.maxLength(16),ValidatorsService.numberValidator]),
          production_unit_quantity_code:new FormControl('',[Validators.required,Validators.maxLength(3),]),
          production_date_manufacturing:new FormControl('',Validators.required),
          production_date_expiry:new FormControl('',Validators.required),
          production_best_before:new FormControl('',Validators.required),
        }),
        controlDetails: new FormGroup({
          control_type_code:new FormControl('',[Validators.required,Validators.maxLength(17),]),
          control_location:new FormControl('',[Validators.required,Validators.maxLength(17),]),
          control_start_date:new FormControl(''),
          control_end_date:new FormControl(''),
          control_result_code:new FormControl('',[Validators.required,Validators.maxLength(17),]),
          control_result_text:new FormControl('',[Validators.maxLength(4000),]),
        
        })
      })
    }  


  openDialog(){
    let dialogRef = this._dialog.open(Step5Component);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  addStep3Inoices(): FormArray {
    // console.log('addStep3inoices()',this.homeConsumptionFormStep3.get("stepThree_invoice"))
        return this.homeConsumptionFormStep3.get("stepThree_invoice") as FormArray
  }

  addNewItemInvoices(i:number) : FormArray {
    // console.log('addnewitemfunction()',this.addStep3Inoices().at(i).get("addNewItemStepThree"))
        return this.addStep3Inoices().at(i).get("addNewItemStepThree") as FormArray
  }

  addStepThreetabs() {
    this.addStep3Inoices().push(this.AddStepThreeInvoideDetails());
    this.selected.setValue(this.addStep3Inoices().controls.length);
    if(this.addStep3Inoices().controls.length == 3){
      this.disableAddButton = true;
    }
  }
  // i is used as a parameter since there are multiple item of a single invoice 
  addNewitemstabs(i:number) {
    console.log('addnewitem',i)
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


  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.homeConsumptionFormStep3.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.homeConsumptionFormStep3.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.homeConsumptionFormStep3.disable() : this.homeConsumptionFormStep3.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.homeConsumptionFormStep3.valid ? null : { invalidForm: { valid: false, message: "Step3 fields are invalid" } };
  }


  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.homeConsumptionFormStep3.get(field).valid && this.homeConsumptionFormStep3.get(field).touched) ||
      (this.homeConsumptionFormStep3.get(field).untouched && this.formSumitAttempt)
    );
  }
  onSubmit() {
    // console.log(this.inBondFormStep1.valid);
     console.log(this.homeConsumptionFormStep3.value);

  }

}
