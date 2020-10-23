import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  homeConsumptionFormStep2: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep2 = this._formBuilder.group ({
      currency_code:['',[Validators.required,Validators.maxLength(3)]],
      standard_currency:['',[Validators.required,Validators.maxLength(1)]],
      unit_in_rs:['',[Validators.maxLength(7),Validators.pattern("[0-9]+$")]],
      rate:['',[Validators.maxLength(9),Validators.pattern("[0-9]+$")]],
      effective_date:[''],
      bankname_non_standard_currency:['',[Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      certificate_number:['',[Validators.maxLength(20),Validators.pattern("^[0-9a-zA-Z]+$")]],
      certificate_date:[''],
      certificate_type:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
    });
  }

}
