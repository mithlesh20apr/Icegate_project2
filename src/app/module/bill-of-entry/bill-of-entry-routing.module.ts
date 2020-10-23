import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectBillOfEntryComponent } from './component/select-bill-of-entry/select-bill-of-entry.component';

const normalBillOfEntryModule = () => import('./module/normal-bill-of-entry/normal-bill-of-entry.module')
  .then(x => x.NormalBillOfEntryModule);

const inBondBillOfEntryModule = () => import('./module/in-bond-bill-of-entry/in-bond-bill-of-entry.module')
  .then(x => x.InBondBillOfEntryModule);

const ExBondBillOfEntryModule = () => import('./module/ex-bond-bill-of-entry/ex-bond-bill-of-entry.module')
  .then(x => x.ExBondBillOfEntryModule);

const routes: Routes = [
  {
    path: '',
    component: SelectBillOfEntryComponent
  },
  {
    path: 'home-consumption',
    loadChildren: normalBillOfEntryModule
  },
  {
    path: 'in-bond',
    loadChildren: inBondBillOfEntryModule
  },
  {
    path: 'ex-bond',
    loadChildren: ExBondBillOfEntryModule
  }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BillOfEntryRoutingModule { }