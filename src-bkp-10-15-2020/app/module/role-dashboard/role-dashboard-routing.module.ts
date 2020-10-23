import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleDashboardLayoutComponent } from './component/role-dashboard-layout/role-dashboard-layout.component';
import { CustomizeRolesComponent } from './component/customize-roles/customize-roles.component';

const routes: Routes = [
  {
    path: '',
    component: RoleDashboardLayoutComponent,
    children: [{
      path: '',
      redirectTo: 'role-dashboard',
      pathMatch: 'full'
    },
    {
      path: 'role-dashboard',
      component: RoleDashboardLayoutComponent
    },
    {
      path:'customize-roles',
      component: CustomizeRolesComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleDashboardRoutingModule { }
