import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonDashboardLayoutComponent } from './component/common-dashboard-layout/common-dashboard-layout.component';
import { CommonDashboardComponent } from './component/common-dashboard/common-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CommonDashboardLayoutComponent,
    children: [{
      path: '',
      redirectTo: 'common-dashboard',
      pathMatch: 'full'
    },
    {
      path: 'common-dashboard',
      component: CommonDashboardComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }