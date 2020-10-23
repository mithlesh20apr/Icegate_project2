import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../sea-igm/component/layout/layout.component';


const routes: Routes = [
  {path:'layout',
  component:LayoutComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeaIgmRoutingModule { }
