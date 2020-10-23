import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-step12',
  templateUrl: './step12.component.html',
  styleUrls: ['./step12.component.css']
})
export class Step12Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  homeConsumptionFormStep12: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep12=this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
      item_serial_number: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("[0-9]+$")]],
      decleration_type:['',[Validators.required,Validators.maxLength(1),Validators.pattern("^[a-zA-Z]+$")]],
      decleration_number:['',[Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
      decleration_date:[''],
      statement_type:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[a-zA-Z]+$")]],
      statement_code:['',[Validators.maxLength(7),Validators.pattern("^[a-zA-Z]+$")]],
      statement_text:['',[Validators.maxLength(4000),Validators.pattern("^[a-zA-Z]+$")]],
    })
  }
}
