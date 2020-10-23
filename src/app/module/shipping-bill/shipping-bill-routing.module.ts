import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingBillComponent } from './shipping-bill.component';


const routes: Routes = [
  {
    path:'',
    component: ShippingBillComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippingBillRoutingModule { }
