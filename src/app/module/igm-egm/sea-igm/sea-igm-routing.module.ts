import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeaIgmComponent } from './sea-igm.component';


const routes: Routes = [
  {path:'',
  component:SeaIgmComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeaIgmRoutingModule { }
