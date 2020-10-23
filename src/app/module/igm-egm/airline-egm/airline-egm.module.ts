import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirlineEgmRoutingModule } from './airline-egm-routing.module';
import {LayoutComponent} from './component/layout/layout.component';
import { FlightDetailsComponent } from './component/flight-details/flight-details.component';
import { MawbDetailsComponent } from './component/mawb-details/mawb-details.component';
import { HawbDetailsComponent } from './component/hawb-details/hawb-details.component';
import { MaterialModule } from '../../common/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonSharedModule } from '../../common/common-shared.module';
import { HawbDilaogContentComponent } from './component/hawb-dilaog-content/hawb-dilaog-content.component';

   
@NgModule({
  declarations: [
    LayoutComponent,
    FlightDetailsComponent,
    MawbDetailsComponent,
    HawbDetailsComponent,
    HawbDilaogContentComponent
  ],
  imports: [
    CommonModule,
    AirlineEgmRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonSharedModule
  ]
})
export class AirlineEgmModule { }
