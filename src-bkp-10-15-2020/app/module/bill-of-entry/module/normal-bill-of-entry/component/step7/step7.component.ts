import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.css']
})
export class Step7Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  homeConsumptionFormStep7: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep7=this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
      item_serial_number_invoice: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("[0-9]+$")]],
      bcd_notification:['',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      bcd_notification_sr_no: ['',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      exemption_required:['',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]]
    })
  }

}
