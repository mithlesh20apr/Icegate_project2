import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service'
import * as moment from 'moment';
import { ThemePalette } from '@angular/material/core';
@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

  @ViewChild('picker') picker: any;

  public date: moment.Moment;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate: moment.Moment;
  public maxDate: moment.Moment;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';

  flightDetails: FormGroup;

  constructor( private _formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.flightDetails= this._formBuilder.group({
      message_type:[''],
      custom_house_code:['',[Validators.maxLength(6)]],
      flight_no:['',[Validators.maxLength(15)]],
      flight_origin_date:[''],
      expected_date_time_arrival:['',Validators.required],
      port_origin:['',[Validators.maxLength(3),Validators.required]],
      port_destination:['',[Validators.maxLength(3),Validators.required]],
      registration_no:['',[Validators.maxLength(10)]],
      nil_cargo_flight:['',[Validators.maxLength(1),Validators.required]]

    })
  }

}
