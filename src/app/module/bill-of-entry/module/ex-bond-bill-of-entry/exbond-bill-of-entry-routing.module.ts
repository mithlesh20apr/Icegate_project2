import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExbondBillOfEntryComponent } from './exbond-bill-of-entry.component';
const routes: Routes = [
  {
    path: '',
    component: ExbondBillOfEntryComponent
  }
];

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExbondBillOfEntryRoutingModule { }
