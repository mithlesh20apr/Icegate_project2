import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-step11',
  templateUrl: './step11.component.html',
  styleUrls: ['./step11.component.css']
})
export class Step11Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  homeConsumptionFormStep11: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.homeConsumptionFormStep11=this._formBuilder.group({
      state_code:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[a-zA-Z]+$")]],
      commercial_tax_registration:['',[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-zA-Z]+$")]],
      commercial_tax_type:['',[Validators.required,Validators.maxLength(1),Validators.pattern("^[a-zA-Z]+$")]],

    })
  }

}
