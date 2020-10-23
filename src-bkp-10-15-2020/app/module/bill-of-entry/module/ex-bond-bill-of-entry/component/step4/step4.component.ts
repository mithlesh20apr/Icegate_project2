import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {
  panelOpenState = false;
  isLinear = false;
  exBondFormStep4: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.exBondFormStep4= this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
      item_serial_number: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("[0-9]+$")]],
      item_serial_number_invoice: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("[0-9]+$")]],
      item_serial_number_rsp: ['', [Validators.maxLength(16), Validators.pattern("[0-9]+$")]],
      rsp: ['', [Validators.required, Validators.maxLength(16), Validators.pattern("[0-9]+$")]],
      quantity: ['', [Validators.required, Validators.maxLength(16), Validators.pattern("[0-9]+$")]],
      description: ['', [Validators.required, Validators.maxLength(40), Validators.pattern("^[0-9a-zA-Z]+$")]],
      rsp_notification: ['', [Validators.maxLength(10), Validators.pattern("^[0-9a-zA-Z]+$")]],
      rsp_notification_sr_no: ['', [Validators.maxLength(10), Validators.pattern("^[0-9a-zA-Z]+$")]],
    })
  }

}
