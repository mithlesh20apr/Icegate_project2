import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShippingBillService } from '../../service/shipping-bill.service';

@Component({
  selector: 'app-consignee-details',
  templateUrl: './consignee-details.component.html',
  styleUrls: ['./consignee-details.component.scss']
})
export class ConsigneeDetailsComponent implements OnInit {

  consigneeDetails: FormGroup;
  isNfeiAvailable: string;

  constructor(
    private _formBuilder: FormBuilder,
    public _shippingBillService: ShippingBillService
    ) {
    this._shippingBillService.nfeiAvailable.subscribe( nfeiAvail => {
      this.isNfeiAvailable = nfeiAvail;
    })
   }

  ngOnInit(): void {
    this.consigneeDetails = this._formBuilder.group({
      consignee_name: ['', [Validators.required, Validators.maxLength(35)]],
      consignee_address_1: ['', [Validators.required, Validators.maxLength(35)]],
      consignee_address_2: ['', [Validators.maxLength(35)]],
      consignee_address_3: ['', [Validators.maxLength(35)]],
      consignee_address_4: ['', [Validators.maxLength(35)]],
      consignee_country: ['', [Validators.required]],
      category_nfei_sb: ['', [Validators.required, Validators.maxLength(2)]],
      rbi_waiver_number: ['', [Validators.maxLength(20)]],
      rbi_waiver_date: [''],
      port_of_loading: ['', [Validators.required]],
      port_of_final_destination: ['', [Validators.required]],
      country_final_destination: ['', [Validators.required]],
      country_discharge: ['', [Validators.required]],
      port_of_discharge: ['', [Validators.required]],
      seal_type: [''],
      ie_code_eou: ['', [Validators.required, Validators.maxLength(10)]],
      branch_sr_number_ie: ['', [Validators.required, Validators.maxLength(3),Validators.pattern("^[0-9]*$")]],
      examination_date: ['', [Validators.required]],
      examining_officer_name: ['', [Validators.required, Validators.maxLength(30)]],
      examining_officer_designation: ['', [Validators.required, Validators.maxLength(30)]],
      supervising_officer_name: ['', [Validators.required, Validators.maxLength(30)]],
      supervising_officer_designation: ['', [Validators.required, Validators.maxLength(30)]],
      commissionerate: ['', [Validators.required, Validators.maxLength(20)]],
      division: ['', [Validators.required, Validators.maxLength(20)]],
      range: ['', [Validators.required, Validators.maxLength(20)]],
      seal_number: ['', [Validators.required, Validators.maxLength(100)]],
      item_values_verified: ['', [Validators.required]],
      sample_forwarded: ['', [Validators.required]],
      amendment_type: [''],
      amendment_number: [''],
      amendment_date: ['']
    });
  }

}
