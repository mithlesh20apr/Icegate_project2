import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ValidatorsService} from '../../../../../common/service/validators.service';
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
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]],
      invoice_date:[''],
      actual_invoice_number:['',[Validators.required,Validators.maxLength(16)]],
      address1_third_party:['',[Validators.maxLength(70 )]],
      address2_third_party:['',[Validators.maxLength(50)]],
      city_third_party:['',[Validators.maxLength(35)]],
      country_sub_division_third_party:['',[Validators.maxLength(35)]],
      country_code_third_party:['',[Validators.maxLength(2)]],
      pin_third_party:['',[Validators.maxLength(10)]],
      authorized_economic_operator:['',[Validators.maxLength(17)]],
      authorized_economic_operator_country:['',[Validators.maxLength(2)]],
      authorized_economic_operator_role:['',[Validators.maxLength(3)]],
      buyer_or_seller_related:['',[Validators.required,Validators.maxLength(70)]],
    })
  }

}
