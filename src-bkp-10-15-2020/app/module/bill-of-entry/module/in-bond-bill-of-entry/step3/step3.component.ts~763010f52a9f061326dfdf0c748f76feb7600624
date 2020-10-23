import { Component, OnInit,forwardRef,Input } from '@angular/core';
import { FormGroup,FormControl, Validator, FormBuilder,Validators,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';
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
export class Step3Component implements OnInit,ControlValueAccessor,Validator  {
  panelOpenState = false;
  isLinear = false;
  @Input() index: number;
  inBondFormStep3: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inBondFormStep3= this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
      invoice_date:[''],
      purchase_order_number:['',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]],
      purchase_order_date:[''],
      contract_number:['',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]],
      contract_date:[''],
      lc_number:['',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]],
      lc_date:[''],
      svb_reference_number:['',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]],
      svb_reference_date:[''],
      svb_load_assessable_value:['',[Validators.maxLength(10),Validators.pattern("[0-9]+$")]],
      svb_load_on_duty:['',[Validators.maxLength(10),Validators.pattern("[0-9]+$")]],
      svb_flag:['',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      load_final_provisional_on_ass_value:['',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      load_final_provisional_on_duty:['',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      custom_house_code_imposed_load:['',[Validators.maxLength(6),Validators.pattern("^[0-9a-zA-Z]+$")]],
  
      name_supplier:['',[Validators.required,Validators.maxLength(50),Validators.pattern("^[a-zA-Z]+$")]],
      address1_supplier:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      address2_supplier:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      address3_supplier:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      country_supplier:['',[Validators.maxLength(25),Validators.pattern("^[0-9a-zA-Z]+$")]],
      pin_supplier:['',[Validators.maxLength(10),Validators.pattern("[1-9]{1}[0-9]+$")]],
  
  
      name_seller:['',[Validators.maxLength(35),Validators.pattern("^[a-zA-Z]+$")]],
      address1_seller:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      address2_seller:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      address3_seller:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      country_seller:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      pin_seller:['',[Validators.maxLength(10),Validators.pattern("[1-9]{1}[0-9]{5}")]],
  
      name_broker:['',[Validators.maxLength(50),Validators.pattern("^[0-9a-zA-Z]+$")]],
      address1_broker:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      address2_broker:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      address3_broker:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      country_broker:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      pin_broker:['',[Validators.maxLength(10),Validators.pattern("[1-9]{1}[0-9]{9}")]],
  
      invoice_value:['',[Validators.required,Validators.maxLength(16),Validators.pattern("^[0-9]+$")]],
      terms_of_invoice:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      invoice_currency:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      nature_of_discount:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      discount_rate:['',[Validators.maxLength(6),Validators.pattern("[0-9]+$")]],
      discount_amount:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
  
      hss_load_rate:['',[Validators.maxLength(6),Validators.pattern("[0-9]+$")]],
      hss_load_amount:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
  
      freight_value:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      freight_rate:['',[Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
      freight_actual:['',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      freight_currency:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
  
      insurance_value:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      insurance_rate:['',[Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
      insurance_currency:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
  
      misc_charge:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      misc_currency:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      misc_rate:['',[Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
  
      landing_rate:['',[Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
      loading_charge:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      loading_currency:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      load_rate:['',[Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
  
      agency_commission:['',[Validators.maxLength(16),Validators.pattern("[0-9]+$")]],
      agency_commission_currency:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      agency_commission_rate:['',[Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
      nature_of_transaction:['',[Validators.required,Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
      payment_terms:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
  
      cond_sale_1:['',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]],
      cond_sale_2:['',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]],
      cond_sale_3:['',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]],
      cond_sale_4:['',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]],
      cond_sale_5:['',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]],
  
      valuation_method_applicable:['',[Validators.maxLength(40),Validators.pattern("^[0-9a-zA-Z]+$")]],
      actual_invoice_number:['',[Validators.required,Validators.maxLength(16),Validators.pattern("^[0-9a-zA-Z]+$")]],
      other_relevant_information:['',[Validators.maxLength(100),Validators.pattern("^[0-9a-zA-Z]+$")]],
      terms_place:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
  
      name_third_party:['',[Validators.maxLength(70),Validators.pattern("^[0-9a-zA-Z]+$")]],
      address1_third_party:['',[Validators.maxLength(70 ),Validators.pattern("^[0-9a-zA-Z]+$")]],
      address2_third_party:['',[Validators.maxLength(50),Validators.pattern("^[0-9a-zA-Z]+$")]],
      city_third_party:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      country_sub_division_third_party:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      country_code_third_party:['',[Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      pin_third_party:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
  
      authorized_economic_operator:['',[Validators.maxLength(17),Validators.pattern("^[0-9a-zA-Z]+$")]],
      authorized_economic_operator_country:['',[Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      authorized_economic_operator_role:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      buyer_or_seller_related:['',[Validators.required,Validators.maxLength(70),Validators.pattern("^[0-9a-zA-Z]+$")]],

      authorized_economic_operator_code:['',[Validators.maxLength(17),Validators.pattern("^[0-9a-zA-Z]+$")]],
  
    })
  }


  // communication between part to child compoentent code for form data saving in main in-bound-bill-of-entry part code
  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.inBondFormStep3.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.inBondFormStep3.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
   //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.inBondFormStep3.disable() : this.inBondFormStep3.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null{
  //  console.log("Consignment Info validation", c);
    return this.inBondFormStep3.valid ? null : { invalidForm: {valid: false, message: "Step1 fields are invalid"}};
  }

}
