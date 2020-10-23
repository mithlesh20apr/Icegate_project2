import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonDashboardLayoutComponent } from './component/common-dashboard-layout/common-dashboard-layout.component';
import { CommonDashboardComponent } from './component/common-dashboard/common-dashboard.component';
import { CommonDashboardProfileComponent } from './component/common-dashboard-profile/common-dashboard-profile.component';
import { CommonDashboardBannerComponent } from './component/common-dashboard-banner/common-dashboard-banner.component';
import { CommonDashboardRegistrationComponent } from './component/common-dashboard-registration/common-dashboard-registration.component';
import { CommonDashboardTicketManagementComponent } from './component/common-dashboard-ticket-management/common-dashboard-ticket-management.component';
import { CommonDashboardServiceComponent } from './component/common-dashboard-service/common-dashboard-service.component';
import { CommonDashboardChecklistComponent } from './component/common-dashboard-checklist/common-dashboard-checklist.component';
import { CommonDashboardDraftsComponent } from './component/common-dashboard-drafts/common-dashboard-drafts.component';

@NgModule({
  declarations: [CommonDashboardLayoutComponent, CommonDashboardComponent, CommonDashboardProfileComponent, CommonDashboardBannerComponent, CommonDashboardRegistrationComponent, CommonDashboardTicketManagementComponent, CommonDashboardServiceComponent, CommonDashboardChecklistComponent, CommonDashboardDraftsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
