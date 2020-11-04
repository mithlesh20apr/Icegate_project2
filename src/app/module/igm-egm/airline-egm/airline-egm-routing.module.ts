import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirlineEgmComponent } from './airline-egm.component';




const routes: Routes = [
  {path:'',
  component:AirlineEgmComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirlineEgmRoutingModule { }
