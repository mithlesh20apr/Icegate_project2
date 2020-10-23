import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-step8',
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.css']
})
export class Step8Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  homeConsumptionFormStep8: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep8 = this._formBuilder.group({
      bond_number: ['', [Validators.maxLength(10), Validators.pattern("[0-9]+$")]],
      bond_code: ['', [Validators.maxLength(2), Validators.pattern("[^[0-9a-zA-Z]+$")]],
      bond_port: ['', [Validators.maxLength(6), Validators.pattern("^[0-9a-zA-Z]+$")]],
      bond:['', Validators.required], 
      certificate_number: ['', [Validators.required, Validators.maxLength(30), Validators.pattern("^[0-9a-zA-Z]+$")]],
      certificate_date: ['', Validators.required],
      certificate_type: ['', [Validators.required, Validators.maxLength(2), Validators.pattern("^[0-9a-zA-Z]+$")]],
    })
  }


}
