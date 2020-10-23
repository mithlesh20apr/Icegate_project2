import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service'

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {
  
  flightDetails:FormGroup
  constructor( private _formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.flightDetails= this._formBuilder.group({
      message_type:[''],
      custom_house_code:['',Validators.maxLength(6)],
      flight_no:['',Validators.maxLength(15)],
      flight_origin_date:['',Validators.required],
      egm_no:['',[ValidatorsService.numberValidator,Validators.maxLength(7)]],
      egm_date:[''],
      port_origin:['',[Validators.maxLength(3),Validators.required]],
      port_destination:['',[Validators.maxLength(3),Validators.required]],
      registration_no:['',[Validators.maxLength(10)]],
      nil_cargo_flight:['',[Validators.maxLength(1),Validators.required]]
    })
  }

}
