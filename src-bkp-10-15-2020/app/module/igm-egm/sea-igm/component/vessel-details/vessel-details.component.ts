import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service'
import * as moment from 'moment';
import { ThemePalette } from '@angular/material/core';
@Component({
  selector: 'app-vessel-details',
  templateUrl: './vessel-details.component.html',
  styleUrls: ['./vessel-details.component.scss']
})
export class VesselDetailsComponent implements OnInit {

  // date time picker code here

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

  vesselDetails: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.vesselDetails=this._formBuilder.group({

      message_type:['F',[Validators.maxLength(6)]],
      custom_house_code:['',[Validators.maxLength(6),ValidatorsService.alpaNumValidator]],
      imo_code_of_vessel:['',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]],
      vessel_code:['',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]],
      voyage_no:['',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]],
      shipping_line_code:['',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]],
      shipping_agent_code:['',[Validators.maxLength(16),ValidatorsService.alpaNumValidator]],
      master_name:['',[Validators.maxLength(6),ValidatorsService.alpaNumValidator,Validators.required]],
      port_of_arrival:['',[Validators.maxLength(30),ValidatorsService.alpaNumValidator,Validators.required]],
      last_port_called:['',[Validators.maxLength(6),ValidatorsService.alpaNumValidator,Validators.required]],
      port_called_prior_sno_12:['',[Validators.maxLength(6),ValidatorsService.alpaNumValidator]],
      port_called_prior_sno_13:['',[Validators.maxLength(6),ValidatorsService.alpaNumValidator]],
      vessel_type:['',[Validators.maxLength(1),ValidatorsService.alpaNumValidator,Validators.required]],
      total_no_of_lines:['',[Validators.maxLength(4),ValidatorsService.numberValidator,Validators.required]],
      brief_cargo_description:['',[Validators.maxLength(30),ValidatorsService.alpaNumValidator,Validators.required]],
      expected_date_and_time:['',[ValidatorsService.alpaNumValidator,Validators.required]],
      light_house_dues:['',[Validators.maxLength(9),ValidatorsService.numberValidator]],
      same_bottom_cargo:['',[Validators.maxLength(1),ValidatorsService.alpaNumValidator,Validators.required]],
      ship_stores_declaration:['',[Validators.maxLength(1),ValidatorsService.alpaNumValidator,Validators.required]],
      crew_list_declaration:['',[Validators.maxLength(1),ValidatorsService.alpaNumValidator,Validators.required]],
      passenger_list:['',[Validators.maxLength(1),ValidatorsService.alpaNumValidator,Validators.required]],
      crew_effect_declaration:['',[Validators.maxLength(1),ValidatorsService.alpaNumValidator,Validators.required]],
      maritime_declaration:['',[Validators.maxLength(1),ValidatorsService.alpaNumValidator,Validators.required]],
      terminal_operator_code:['',[Validators.maxLength(10),ValidatorsService.alpaNumValidator,Validators.required]]

    })
  }

}
