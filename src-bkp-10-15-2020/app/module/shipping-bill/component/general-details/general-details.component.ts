import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShippingBillService } from '../../service/shipping-bill.service';

@Component({
  selector: 'app-general-details',
  templateUrl: './general-details.component.html',
  styleUrls: ['./general-details.component.scss'],
})
export class GeneralDetailsComponent implements OnInit {

  generalDetails: FormGroup;
  isIecAvailable: string;
  isNfeiAvailable: string;

  constructor(
    private _formBuilder: FormBuilder,
    public _shippingBillService: ShippingBillService
  ) { 
    this._shippingBillService.iecAvailable.subscribe( iecAvail => {
      this.isIecAvailable = iecAvail;
    })
    this._shippingBillService.nfeiAvailable.subscribe( nfeiAvail => {
      this.isNfeiAvailable = nfeiAvail;
    })
  }

  ngOnInit(): void {
    this.generalDetails = this._formBuilder.group({
      message_type: ['F', [Validators.required, Validators.maxLength(1)]],
      custom_house_code: ['', [Validators.maxLength(6)]],
      job_number: ['', [Validators.maxLength(7), Validators.pattern("^[0-9]*$")]],
      job_date: [''],
      sb_number: ['', [Validators.maxLength(7), Validators.pattern("^[0-9]*$")]],
      sb_date: [''],
      cha_license_number: ['', [Validators.required, Validators.maxLength(15)]],
      importer_exporter_code: ['', [Validators.required, Validators.maxLength(10)]],
      branch_sr_no_of_exporter: ['', [Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9]*$")]],
      importer_exporter_name: ['', [Validators.required, Validators.maxLength(50)]],
      imp_exp_address1: ['', [Validators.required, Validators.maxLength(35)]],
      imp_exp_address2: ['', [Validators.maxLength(35)]],
      imp_exp_city: ['', [Validators.maxLength(35)]],
      imp_exp_state: ['', [Validators.maxLength(25)]],
      imp_exp_pin: ['', [Validators.maxLength(6),Validators.pattern("^[0-9]*$")]],
      type_of_exporter: ['', [Validators.required, Validators.maxLength(1)]],
      exporter_class: ['', [Validators.required, Validators.maxLength(1)]],
      state_of_origin_exporter: ['', [Validators.required, Validators.maxLength(2)]],
      authorized_dealer_code: ['', [Validators.required, Validators.maxLength(10)]],
      epz_code: ['', [Validators.maxLength(1)]]
    });
  }

}
