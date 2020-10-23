import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-step9',
  templateUrl: './step9.component.html',
  styleUrls: ['./step9.component.css']
})
export class Step9Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  homeConsumptionFormStep9: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep9 = this._formBuilder.group({
      igm_no: ['', [Validators.required, Validators.maxLength(7), Validators.pattern("[0-9]+$")]],
      igm_date: ['', Validators.required],
      inward_date: ['', Validators.required],
      gateway_igm_number: ['', [Validators.maxLength(5), Validators.pattern("[0-9]+$")]],
      gateway_igm_date: [''],
      gateway_port_code: ['', [Validators.maxLength(6), Validators.pattern("^[0-9a-zA-Z]+$")]],
      gross_weight:['',[Validators.maxLength(12),Validators.pattern("[0-9]+$")]],
      mawb_bl_no: ['', [Validators.required, Validators.maxLength(20), Validators.pattern("^[0-9a-zA-Z]+$")]],
      mawb_bl_date: ['', Validators.required],
      hawb_hbl_no: ['', [Validators.maxLength(20), Validators.pattern("[0-9]+$")]],
      hawb_hbl_date: [''],
      total_number_of_packages: ['', [Validators.required, Validators.maxLength(8), Validators.pattern("[0-9]+$")]],
      marks_number1: ['', [Validators.required, Validators.maxLength(40), Validators.pattern("^[0-9a-zA-Z]+$")]],
      marks_number2: ['', [Validators.maxLength(40), Validators.pattern("^[0-9a-zA-Z]+$")]],
      marks_number3: ['', [Validators.maxLength(40), Validators.pattern("^[0-9a-zA-Z]+$")]],
      unit_quantity_code:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$")]],
      package_code:['',[Validators.maxLength(3),Validators.pattern("^[0-9a-zA-Z]+$"),Validators.required]],
    })
  }
}
