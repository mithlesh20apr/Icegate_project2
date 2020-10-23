import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent
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
  export class ExBondBillOfEntryRoutingModule { }