import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-freight-insurance-details',
  templateUrl: './freight-insurance-details.component.html',
  styleUrls: ['./freight-insurance-details.component.scss']
})
export class FreightInsuranceDetailsComponent implements OnInit {

  freightInsuranceDetails: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.freightInsuranceDetails = this._formBuilder.group({
      freight_currency: [''],
      freight_amount: ['', [Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
      insurance_rate: ['', [Validators.maxLength(3), Validators.pattern("^[0-9]*$")]],
      insurance_currency: [''],
      insurance_amount: ['', [Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
      commission_rate: ['', [Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
      commission_currency: [''],
      commission_amount: ['', [Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
      discount_on_fob: ['', [Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
      discount_currency: [''],
      discount_amount: ['', [Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
      other_deductions: ['', [Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
      other_deductions_currency: [''],
      other_deductions_amount: ['', [Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
      add_freight: ['', [Validators.required]],
      packing_charges: ['', [Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
      exporter_contract_number: ['', [Validators.maxLength(30)]],
      nature_of_payment: ['', [Validators.maxLength(2)]],
      period_of_payments: ['', [Validators.maxLength(3)]],
      amendment_type: ['', [Validators.maxLength(1)]],
      amendment_number: ['', [Validators.maxLength(3), Validators.pattern("^[0-9]*$")]],
      amendment_date: ['']
    });
  }

}
