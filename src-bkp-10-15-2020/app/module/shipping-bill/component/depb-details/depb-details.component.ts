import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators  } from '@angular/forms';
@Component({
  selector: 'app-depb-details',
  templateUrl: './depb-details.component.html',
  styleUrls: ['./depb-details.component.scss']
})
export class DepbDetailsComponent implements OnInit {

  depb: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.depb = this._formBuilder.group({
      invoice_sr_number:['', [Validators.maxLength(2),Validators.pattern("^[0-9]+$")]],
      item_sr_number_in_invoice:['', [Validators.maxLength(4),Validators.pattern("^[0-9]+$")]],
      group_code:['', [Validators.required,Validators.maxLength(2)]],
      item_code:['', [Validators.required,Validators.maxLength(10)]],
      quantity:['', [Validators.maxLength(10),Validators.pattern("^[0-9]+$")]],
      amendment_type:['', [Validators.maxLength(1)]],
      amendment_no:['', [Validators.maxLength(7),Validators.pattern("^[0-9]+$")]],
      amendment_date:['', ],
  });
  }

}
