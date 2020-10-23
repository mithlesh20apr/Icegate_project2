import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {

  invoiceDetails: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.invoiceDetails = this._formBuilder.group({
      invoice_sr_number: ['', [Validators.maxLength(2)]],
      invoice_number: ['', [Validators.required, Validators.maxLength(17)]],
      invoice_currency: ['', [Validators.required]],
      nature_of_contract: ['', [Validators.required]],
      invoice_date: ['', [Validators.required]],
      buyer_name: ['', [Validators.required, Validators.maxLength(35)]],
      buyer_address_1: ['', [Validators.required, Validators.maxLength(35)]],
      buyer_address_2: ['', [Validators.maxLength(35)]],
      buyer_address_3: ['', [Validators.maxLength(35)]],
      buyer_address_4: ['', Validators.maxLength(35)]
    });
  }

}
