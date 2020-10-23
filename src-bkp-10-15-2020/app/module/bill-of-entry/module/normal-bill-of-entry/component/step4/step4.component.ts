import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  homeConsumptionFormStep4: FormGroup;
  @Input() index: number;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep4 = this._formBuilder.group ({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
      misc_charge_code:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9a-zA-Z]+$")]],
      misc_description:['',[Validators.required,Validators.maxLength(35),Validators.pattern("^[0-9a-zA-Z]+$")]],
      misc_charges:['',[Validators.maxLength(10),Validators.pattern("[0-9]+$")]],
      misc_rate:['',[Validators.maxLength(3),Validators.pattern("[0-9]")]]
    });
  }

}
