import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup,FormControl, Validator, FormBuilder,Validators,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
  providers: [
    {
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(() => Step1Component),
   multi: true
 },
  {
   provide: NG_VALIDATORS,
   useExisting: forwardRef(() => Step1Component),
   multi: true
 }
  ]
})
export class Step1Component implements OnInit,ControlValueAccessor,Validator {

  panelOpenState = false;
  isLinear = false;
  inBondFormStep1: FormGroup;
  private formSumitAttempt: boolean;


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.inBondFormStep1= this._formBuilder.group({
      
    message_type :['',[Validators.required,Validators.maxLength(3)]],
    custom_house_code:['',[Validators.required,Validators.maxLength(6), Validators.pattern("^[0-9a-zA-Z]+$")]],
    branch_sr_no:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9]+$")]],
    user_job_no:['',[Validators.required,Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
    user_job_date:['',Validators.required],
    be_number:['',[Validators.required,Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
    be_date:['',Validators.required],
    iec_code:['',[Validators.maxLength(10),Validators.required,Validators.pattern("[0-9]+$")]],
    name_importer:['',[Validators.maxLength(50),Validators.pattern("^[a-zA-Z ]+$")]],
    address1_importer:['',[Validators.maxLength(35),Validators.pattern("^[a-zA-Z0-9\\s,/'-]*$")]],
    address2_importer:['',[Validators.maxLength(35),Validators.pattern("^[a-zA-Z0-9\\s,/'-]*$")]],   
    city_importer:['',[Validators.maxLength(35),Validators.pattern("^[a-zA-Z]+$")]],   
    state_importer:['',[Validators.maxLength(25),Validators.pattern("^[a-zA-Z]+$")]],   
    pin_importer:['',[Validators.maxLength(6),Validators.pattern("^[1-9]+[0-9]+$")]],
    pin:['',[Validators.maxLength(6),Validators.pattern("^[1-9]+[0-9]+$")]],   
    mode_of_transport:['', Validators.required],
    importer_type:['', Validators.required],  
    kachcha_be:['', Validators.required],
    high_sea_sale_flag: ['', Validators.required],
    permission_code:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
    reason_for_request:['',[Validators.required,Validators.maxLength(2000),Validators.pattern("^[0-9a-zA-Z]+$")]],
    preceding_level:['',[Validators.required,Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
    invoice_serial_number:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
    port_of_origin:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
    cha_code:['',[Validators.maxLength(15),Validators.required,Validators.pattern("^[0-9a-zA-Z]+$")]],
    country_of_origin:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
    country_of_consignment:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
    port_of_shipment:['',[Validators.required,Validators.maxLength(6),Validators.pattern("^[0-9a-zA-Z]+$")]],
    green_channel_requested:['', Validators.required],
    section: ['', Validators.required],
    prior_be:['',Validators.required],
    authorized_dealer_code:['',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
    first_check_requested:['',Validators.required],

    warehouse_code:['',[Validators.required,Validators.maxLength(8),Validators.pattern("^[0-9a-zA-Z]+$")]], 
    warehouse_custom_site_id:['',[Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
    warehouse_be_no:['',[Validators.maxLength(6),Validators.pattern("^[0-9a-zA-Z]+$")]],
    warehouse_be_date:[''],
    no_packages_released:['',[Validators.maxLength(8),Validators.pattern("[0-9]+$")]],   
    package_code:['',[Validators.maxLength(13),Validators.pattern("^[0-9a-zA-Z]+$")]], 
    gross_weight:['',[Validators.maxLength(12),Validators.pattern("[0-9]+$")]], 
    unit_of_measurement:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
    additional_charges:['',[Validators.maxLength(6),Validators.pattern("[0-9]+$")]],
    misc_load:['',[Validators.maxLength(6),Validators.pattern("[0-9]+$")]],
    ucr:['',[Validators.required,Validators.maxLength(35), Validators.pattern("^[0-9a-zA-Z]+$")]],
    ucr_type:['',[Validators.required,Validators.maxLength(6),Validators.pattern("^[0-9a-zA-Z]+$")]],
    payment_method_code:['',[Validators.required,Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
    
  
  })   
  }

  // validation code
  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
   // console.log(val)
    val && this.inBondFormStep1.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.inBondFormStep1.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
   //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.inBondFormStep1.disable() : this.inBondFormStep1.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null{
    //console.log("Consignment Info validation", c);
    return this.inBondFormStep1.valid ? null : { invalidForm: {valid: false, message: "Step1 fields are invalid"}};
  }


  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.inBondFormStep1.get(field).valid && this.inBondFormStep1.get(field).touched) ||
      (this.inBondFormStep1.get(field).untouched && this.formSumitAttempt)
    );
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }


  // submit on save and continue sections
  onSubmit() {


   // stepper.next();
    this.formSumitAttempt = true;
    if (this.inBondFormStep1.valid) {
      console.log('form submitted');

      
      
    }else{
      console.log('err');
    }
}

}
