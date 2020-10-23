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
  exBondFormStep7: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.exBondFormStep7=this._formBuilder.group({
      state_code:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[a-zA-Z]+$")]],
      commercial_tax_registration:['',[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-zA-Z]+$")]],
      commercial_tax_type:['',[Validators.required,Validators.maxLength(1),Validators.pattern("^[a-zA-Z]+$")]],

    })
  }

}
