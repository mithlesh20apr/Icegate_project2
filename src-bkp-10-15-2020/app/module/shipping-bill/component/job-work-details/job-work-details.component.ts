import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-job-work-details',
  templateUrl: './job-work-details.component.html',
  styleUrls: ['./job-work-details.component.scss']
})
export class JobWorkDetailsComponent implements OnInit {
  jobWorkDetails: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.jobWorkDetails = this._formBuilder.group({
      be_number: ['', [Validators.required, Validators.maxLength(7), Validators.pattern("^[0-9]+$")]],
      be_date: ['', [Validators.required]],
      be_invoice_serial_number: ['', [Validators.required, Validators.maxLength(2), Validators.pattern("^[0-9]+$")]],
      be_invoice_number: ['', [Validators.required, Validators.maxLength(16), ]],
      be_item_number: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("^[0-9]+$")]],
      be_port_code: ['', [Validators.required, Validators.maxLength(6), ]],
      be_qty_used: ['', [Validators.required, Validators.maxLength(14), Validators.pattern("^[0-9]+$")]],
      qty_units: ['', [Validators.required, Validators.maxLength(3), ]],
    })
  }
}
