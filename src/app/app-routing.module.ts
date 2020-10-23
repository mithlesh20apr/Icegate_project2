import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


const loginModule = () => import('./module/login/login.module').then(x => x.LoginModule);

const dashboardModule = () => import('./module/dashboard/dashboard.module').then(x => x.DashboardModule);

const roleDashboardModule = () => import('./module/role-dashboard/role-dashboard.module').then(x => x.RoleDashboardModule);

const billOfEntryModule = () => import('./module/bill-of-entry/bill-of-entry.module').then(x => x.BillOfEntryModule);

const shippingBillModule = () => import('./module/shipping-bill/shipping-bill.module').then(x => x.ShippingBillModule);

const igmEgmModule = () => import('./module/igm-egm/igm-egm.module').then(x => x.IgmEgmModule);

const routes: Routes = [

  {
    path: '',
    loadChildren: igmEgmModule
  },

  {
    path: 'bill-of-entry',
    loadChildren: billOfEntryModule
  },

  {
    path: 'shipping-bill',
    loadChildren: shippingBillModule
  },

  {
    path: 'dashboard',
    loadChildren: dashboardModule,
    canActivate: [AuthGuard]
  },

  {
    path: 'igm-egm',
    loadChildren: igmEgmModule
  },

  {
    path: 'role-dashboard',
    loadChildren: roleDashboardModule,
    canActivate: [AuthGuard]
  },

  {
    path: '**',
    redirectTo: 'igm-egm',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
