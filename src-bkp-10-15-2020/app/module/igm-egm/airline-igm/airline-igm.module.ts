import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AirlineIgmRoutingModule } from './airline-igm-routing.module';
import {LayoutComponent} from './component/layout/layout.component';
import { FlightDetailsComponent } from './component/flight-details/flight-details.component';
import { MawbDetailsComponent } from './component/mawb-details/mawb-details.component';
import { HawbDetailsComponent } from './component/hawb-details/hawb-details.component';
import { MaterialModule } from '../../common/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonSharedModule } from '../../common/common-shared.module';
import { HawbDialogContentComponent } from './component/hawb-dialog-content/hawb-dialog-content.component';



@NgModule({
  declarations: [
    LayoutComponent,
    FlightDetailsComponent,
    MawbDetailsComponent,
    HawbDetailsComponent,
    HawbDialogContentComponent,
  
  ],

  imports: [
    CommonModule,
    AirlineIgmRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonSharedModule

  ]
})
export class AirlineIgmModule { }
