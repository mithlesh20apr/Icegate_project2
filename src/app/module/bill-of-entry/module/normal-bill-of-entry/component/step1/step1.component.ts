import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  homeConsumptionFormStep1: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.homeConsumptionFormStep1 = this._formBuilder.group ({
    hssf: ['', Validators.required],
    bond:['', Validators.required], 
    message_type :['',[Validators.required,Validators.maxLength(1),Validators.pattern("^[0-9a-zA-z]+$")]],
    house_code:['',[Validators.required,Validators.maxLength(6), Validators.pattern("^[0-9a-zA-Z]+$")]],
    custom_house_code:['',[Validators.required,Validators.maxLength(6), Validators.pattern("^[0-9a-zA-Z]+$")]],
    branch_sr_no:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9a-zA-Z]+$")]],
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
    invoice_serial_number:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
    branch_serial_number:['',[Validators.maxLength(3),Validators.pattern("^[0-9]+$")]],
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
    warehouse_custom_site_id:['',[Validators.maxLength(7),Validators.pattern("[0-9]+")]],
    warehouse_be_no:['',[Validators.maxLength(6),Validators.pattern("^[0-9a-zA-Z]+$")]],
    warehouse_be_date:[''],
    no_packages_released:['',[Validators.maxLength(8),Validators.pattern("[0-9]+")]],
    package_code:['',[Validators.maxLength(13),Validators.pattern("^[0-9a-zA-Z]+$")]],
    gross_weight:['',[Validators.maxLength(13),Validators.pattern("[0-9]+")]],
    unit_of_measurement:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
    additional_charges:['',[Validators.maxLength(6),Validators.pattern("[0-9]+")]],
    misc_load:['',[Validators.maxLength(6),Validators.pattern("[0-9]+$")]],
    ucr:['',[Validators.required,Validators.maxLength(35), Validators.pattern("^[0-9a-zA-Z]+$")]],
    ucr_type:['',[Validators.required,Validators.maxLength(6),Validators.pattern("^[0-9a-zA-Z]+$")]],
    payment_method_code:['',[Validators.required,Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]],
    });
  }

}
