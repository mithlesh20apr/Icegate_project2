import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  itemDetails: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.itemDetails = this._formBuilder.group({
      invoice_sr_number: ['', [Validators.maxLength(2), Validators.pattern("^[0-9]+$")]],
      item_sr_number_in_invoice: ['', [Validators.maxLength(4), Validators.pattern("^[0-9]+$")]],
      scheme_code: ['', [Validators.required,Validators.maxLength(2), ]],
      ritc_code: ['', [Validators.required,Validators.maxLength(8), ]],
      description_of_the_goods_1: ['',[Validators.required,Validators.maxLength(40), ]],
      description_of_the_goods_2: ['', [Validators.maxLength(40), ]],
      description_of_the_goods_3: ['', [Validators.maxLength(40), ]],
      unit_of_measurement: ['', [Validators.required, Validators.maxLength(3), ]],
      quantity: ['', [Validators.required,Validators.maxLength(11), Validators.pattern("^[0-9]+$")]],
      unit_price:['', [Validators.required,Validators.maxLength(16), Validators.pattern("^[0-9]+$")]],
      unit_of_rate:['', [Validators.required, Validators.maxLength(3), ]],
      no_of_unit:['', [Validators.required, Validators.maxLength(8), Validators.pattern("^[0-9]+$")]],
      present_market_value:['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[0-9]+$")]],
      job_work_notification:['', [ Validators.maxLength(10), ]],
      third_party:['', [Validators.maxLength(1), ]],
      reward_item:['', [Validators.required, Validators.maxLength(1), ]],
      amendment_type: ['', [Validators.maxLength(1), ]],
      amendment_no: ['', [Validators.maxLength(7), Validators.pattern("^[0-9]+$")]],
      amendment_date: ['',],
      szzzza:['', [Validators.maxLength(1), ]],
      item_manufacturer_code:['', [Validators.maxLength(17), ]],
      item_manufacturer_type_address1:['', [Validators.maxLength(70), ]],
      item_manufacturer_type_address2:['', [Validators.maxLength(50), ]],
      item_manufacturer_type_city:['', [Validators.maxLength(35), ]],
      item_manufacturer_type_subdivision:['', [Validators.maxLength(35), ]],
      item_manufacturer_type_pin:['', [Validators.maxLength(10), ]],
      item_manufacturer_type_country:['', [Validators.maxLength(2), ]],
      source_state:['', [Validators.maxLength(2), ]],
      transit_country:['', [Validators.maxLength(2), ]],
      accessory_status:['', [Validators.maxLength(1), ]],
      end_use_of_item:['', [Validators.required, Validators.maxLength(20), ]],
      hawb_no:['', [Validators.maxLength(15), ]],
      total_package:['', [Validators.maxLength(8), Validators.pattern("^[0-9]+$")]],
      igst_payment_status:['', [Validators.required, Validators.maxLength(3), ]],
      taxable_value:['', [Validators.maxLength(16), Validators.pattern("^[0-9]+$")]],
      igst_amount:['', [Validators.maxLength(16), Validators.pattern("^[0-9]+$")]],
  });
}

}
