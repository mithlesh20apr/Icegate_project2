import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NormalBillOfEntryComponent } from './normal-bill-of-entry.component';

const routes: Routes = [
    {
      path: '',
      component: NormalBillOfEntryComponent
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
  export class NormalBillOfEntryRoutingModule { }