import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InBondBillOfEntryComponent } from './in-bond-bill-of-entry.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
      path: '',
      component: InBondBillOfEntryComponent
    }
  ];
  
  @NgModule({
    declarations: [
      
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class InBondBillOfEntryRoutingModule { }