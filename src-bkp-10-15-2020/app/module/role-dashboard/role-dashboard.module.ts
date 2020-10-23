import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleDashboardRoutingModule } from './role-dashboard-routing.module';
import { RoleDashboardLayoutComponent } from './component/role-dashboard-layout/role-dashboard-layout.component';
import { CustomizeRolesComponent } from './component/customize-roles/customize-roles.component';
import { MaterialModule } from '../common/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RoleDashboardLayoutComponent, CustomizeRolesComponent],
  imports: [
    CommonModule,
    RoleDashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RoleDashboardModule { }
