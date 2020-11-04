import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,FormControl, Validator,FormArray, FormBuilder,Validators,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';
import Swal from 'sweetalert2';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css']
})
export class Step5Component implements OnInit{
  panelOpenState = false;
  isLinear = false;
  disableAddButtons= false;
  formSumitAttempt: boolean;
  selecteds = new FormControl(0);
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
 
  @Input() index: number;
  inBondFormStep5: FormGroup;
  tabs2 = [0];
  selected = new FormControl(0);
  disableAdd2Button = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inBondFormStep5=this._formBuilder.group({
      addNewItemStepThree: this._formBuilder.array([])
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
  addNewItemInvoices() : FormArray {
        return this.inBondFormStep5.get("addNewItemStepThree") as FormArray
  }
  addNewitemstabs() {
    this.addNewItemInvoices().push(this.AddNewItemInvoideDetailss());
     if(this.addNewItemInvoices().controls.length === 10){
      this.disableAddButtons = true;
    }
  }
  removeNewItemTab(index: number) {
    this.addNewItemInvoices().controls.splice(index, 1);
    if(this.addNewItemInvoices().controls.length < 10){
      this.disableAddButtons = false;
    }
  }

  addTab2() {
    this.tabs2.push(this.tabs2.length);
    this.selected.setValue(this.tabs2.length);
    if(this.tabs2.length == 10){
      this.disableAdd2Button = true;
    }
  }

  removeTab2(index: number) {
    this.tabs2.splice(index, 1);
    if(this.tabs2.length < 10){
      this.disableAdd2Button = false;
    }
  }
  public onTouched: () => void = () => {};

 
  writeValue(val: any): void {
   // console.log(val);
    val && this.inBondFormStep5.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
  //  console.log("on change");
    this.inBondFormStep5.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
  //  console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.inBondFormStep5.disable() : this.inBondFormStep5.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null{
    //console.log("Consignment Info validation", c);
    return this.inBondFormStep5.valid ? null : { invalidForm: {valid: false, message: "Step3 fields are invalid"}};
  }
  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    //this.inBondFormStep5.get("stepThree_invoice")
    //console.log(this.inBondFormStep5.get(field));
    return (
      //this.inBondFormStep5.get(field)
      (!this.inBondFormStep5.get(field)?.valid && this.inBondFormStep5.get(field)?.touched) ||
      (this.inBondFormStep5.get(field)?.untouched && this.formSumitAttempt)
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
    console.log(this.inBondFormStep5.value);
    // if (this.inBondFormStep5.valid === true) {
    //   this.inBondFormStep5.value
    //   Swal.fire({
    //     title: 'Step 3 is completed',
    //     text: "Please click next for other step or click cancel",
    //     icon: 'success',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Next &nbsp; &#8594;'
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       let element:HTMLElement = document.getElementById('save_continues') as HTMLElement;
    //       element.click();
    //     }
    //   })
    // } else {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Required Validation is left. Please check',
    //   }).then((result) =>{
    //     this.formSumitAttempt = true
    //   })

    // }
  }



}
