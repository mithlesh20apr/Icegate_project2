import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-step10',
  templateUrl: './step10.component.html',
  styleUrls: ['./step10.component.css']
})
export class Step10Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  homeConsumptionFormStep10: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.homeConsumptionFormStep10 = this._formBuilder.group({
      igm_no: ['', [Validators.required, Validators.maxLength(7), Validators.pattern("[0-9]+$")]],
      igm_date: ['', Validators.required],
      lcl_fcl: ['', [Validators.required, Validators.maxLength(1), Validators.pattern("^[0-9a-zA-Z]+$")]],
      container_number: ['', [Validators.required, Validators.maxLength(11), Validators.pattern("^[0-9a-zA-Z]+$")]],
      seal_number: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9a-zA-Z]+$")]],
      truck_number: ['', [Validators.maxLength(20), Validators.pattern("^[0-9a-zA-Z]+$")]],
    })
  }

}
