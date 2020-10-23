import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ValidatorsService} from '../../../../../common/service/validators.service';
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  panelOpenState = false;
  isLinear = false;
  exBondFormStep1: FormGroup

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.exBondFormStep1 = this._formBuilder.group({
      message_type: ['', [Validators.required, Validators.maxLength(1)]],
      custom_house_code: ['', [Validators.required, Validators.maxLength(6)]],
      branch_sr_no: ['', [Validators.required, Validators.maxLength(3), ValidatorsService.numberValidator]],
      user_job_no: ['', [Validators.required, Validators.maxLength(7),  ValidatorsService.numberValidator]],
      user_job_date: ['', Validators.required],
      be_number: ['', [Validators.required, Validators.maxLength(7),  ValidatorsService.numberValidator]],
      be_date: ['', Validators.required],
      iec_code: ['', [Validators.maxLength(10), Validators.required,  ValidatorsService.numberValidator]],
      name_importer: ['', [Validators.maxLength(50)]],
      address1_importer: ['', [Validators.maxLength(35)]],
      address2_importer: ['', [Validators.maxLength(35)]],
      city_importer: ['', [Validators.maxLength(35)]],
      state_importer: ['', [Validators.maxLength(25)]],
      pin_importer: ['', [Validators.maxLength(6), ValidatorsService.numberValidator]],
      mode_of_transport: ['', Validators.required],
      importer_type: ['', Validators.required],
      kachcha_be: ['', Validators.required],
      high_sea_sale_flag: ['', Validators.required],
      permission_code: ['', [Validators.required, Validators.maxLength(3)]],
      reason_for_request: ['', [Validators.required, Validators.maxLength(2000)]],
      preceding_level: ['', [Validators.required, Validators.maxLength(1)]],
      invoice_serial_number: ['', [Validators.required, Validators.maxLength(5), ValidatorsService.numberValidator]],
      port_of_origin: ['', [Validators.required, Validators.maxLength(3)]],
      cha_code: ['', [Validators.maxLength(15), Validators.required]],
      country_of_origin: ['', [Validators.required, Validators.maxLength(3)]],
      country_of_consignment: ['', [Validators.required, Validators.maxLength(2)]],
      port_of_shipment: ['', [Validators.required, Validators.maxLength(6)]],
      green_channel_requested: ['', Validators.required],
      section: ['', Validators.required],
      prior_be: ['', Validators.required],
      authorized_dealer_code: ['', [Validators.required, Validators.maxLength(10)]],
      first_check_requested: ['', Validators.required],

      warehouse_code: ['', [Validators.required, Validators.maxLength(8)]],
      warehouse_custom_site_id: ['', [Validators.required, Validators.maxLength(7),  ValidatorsService.numberValidator]],
      warehouse_be_no: ['', [Validators.required, Validators.maxLength(7)]],
      warehouse_be_date: ['', Validators.required,],
      no_packages_released: ['', [Validators.required, Validators.maxLength(8),  ValidatorsService.numberValidator]],
      package_code: ['', [Validators.required, Validators.maxLength(13)]],
      gross_weight: ['', [Validators.required, Validators.maxLength(3),  ValidatorsService.numberValidator]],
      unit_of_measurement: ['', [Validators.maxLength(3)]],
      additional_charges: ['', [Validators.maxLength(6),  ValidatorsService.numberValidator]],
      misc_load: ['', [Validators.maxLength(6),  ValidatorsService.numberValidator]],
      ucr: ['', [Validators.maxLength(35)]],
      ucr_type: ['', [Validators.maxLength(6)]],
      payment_method_code: ['', [Validators.required, Validators.maxLength(1)]],

    })


  }

}
