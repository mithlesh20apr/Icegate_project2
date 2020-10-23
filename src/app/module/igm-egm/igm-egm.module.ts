import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IgmEgmRoutingModule } from './igm-egm-routing.module';
import { MaterialModule } from '../common/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IgmEgmRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IgmEgmModule { }
