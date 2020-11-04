import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeaEgmComponent } from './sea-egm.component';


const routes: Routes = [
  {path:'',
  component:SeaEgmComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeaEgmRoutingModule { }
