import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {

  exchangeDetails: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.exchangeDetails = this._formBuilder.group({
      invoice_currency_code:['', [Validators.maxLength(3), ]],
      currency_name:['', [Validators.maxLength(20), ]],
      unit_in_rs:['', [Validators.maxLength(7), Validators.pattern("^[0-9]+$")]],
      rate:['', [Validators.maxLength(9), Validators.pattern("^[0-9]+$")]],
      effective_date:['', ],
      whether_standard_currency:['', [Validators.required, Validators.maxLength(1), ]],
      amendment_type:['', [Validators.maxLength(1), ]],
      amendment_no:['', [Validators.maxLength(7), Validators.pattern("^[0-9]+$")]],
      amendment_date:['', ],
  });
}

}
