import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeaEgmRoutingModule } from './sea-egm-routing.module';
import { MaterialModule } from '../../common/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from '../sea-egm/component/layout/layout.component';
import { EgmMasterDetailsComponent } from './component/egm-master-details/egm-master-details.component';
import { EgmContainerDetailsComponent } from './component/egm-container-details/egm-container-details.component';
import { EgmContainerDialogContentComponent } from './component/egm-container-dialog-content/egm-container-dialog-content.component';
import { CommonSharedModule } from '../../common/common-shared.module';
import { ShippingDetailsComponent } from './component/shipping-details/shipping-details.component';


@NgModule({
  declarations: [LayoutComponent,EgmMasterDetailsComponent,EgmContainerDetailsComponent, EgmContainerDialogContentComponent, ShippingDetailsComponent],
  imports: [
    CommonModule,
    SeaEgmRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonSharedModule
  ]
})
export class SeaEgmModule { }
