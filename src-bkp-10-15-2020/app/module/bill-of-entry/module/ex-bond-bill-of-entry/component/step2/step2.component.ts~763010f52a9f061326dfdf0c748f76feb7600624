import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  panelOpenState = false;
  isLinear = false;
  @Input() index: number;
  exBondFormStep2: FormGroup

  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.exBondFormStep2=this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
      invoice_date:[''],
      actual_invoice_number:['',[Validators.required,Validators.maxLength(16),Validators.pattern("^[0-9a-zA-Z]+$")]],
      address1_third_party:['',[Validators.maxLength(70 ),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      address2_third_party:['',[Validators.maxLength(50),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      city_third_party:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      country_sub_division_third_party:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      country_code_third_party:['',[Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      pin_third_party:['',[Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
  
      authorized_economic_operator:['',[Validators.maxLength(17),Validators.pattern("^[0-9a-zA-Z]+$")]],
      authorized_economic_operator_country:['',[Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      authorized_economic_operator_role:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      buyer_or_seller_related:['',[Validators.required,Validators.maxLength(70),Validators.pattern("^[0-9a-zA-Z]+$")]],
    })
  }

}
