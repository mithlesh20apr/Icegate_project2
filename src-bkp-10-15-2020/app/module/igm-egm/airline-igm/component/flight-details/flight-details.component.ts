import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service'
@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

  flightDetails: FormGroup;

  constructor( private _formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.flightDetails= this._formBuilder.group({
      message_type:[''],
      custom_house_code:['',[ValidatorsService.alpaNumValidator,Validators.maxLength(6)]],
      flight_no:['',[ValidatorsService.alpaNumValidator,Validators.maxLength(15)]],
      flight_origin_date:[''],
      expected_date_time_arrival:['',Validators.required],
      port_origin:['',[ValidatorsService.alpaNumValidator,Validators.maxLength(3),Validators.required]],
      port_destination:['',[ValidatorsService.alpaNumValidator,Validators.maxLength(3),Validators.required]],
      registration_no:['',[ValidatorsService.alpaNumValidator,Validators.maxLength(10)]],
      nil_cargo_flight:['',[ValidatorsService.alpaNumValidator,Validators.maxLength(1),Validators.required]]

    })
  }

}
