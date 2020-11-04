import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirlineIgmComponent } from './airline-igm.component';


const routes: Routes = [
  {path:'',
  component: AirlineIgmComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirlineIgmRoutingModule { }
