import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirlineIgmModule } from './airline-igm/airline-igm.module';

const airlineEgmModule=()=> import('./airline-egm/airline-egm.module').then(x=>x.AirlineEgmModule)
const airlineIgmModule=()=> import('./airline-igm/airline-igm.module').then(x=>x.AirlineIgmModule)
const seaEgmModule=()=> import('./sea-egm/sea-egm.module').then(x=>x.SeaEgmModule)
const seaIgmModule=()=>import('./sea-igm/sea-igm.module').then(x=>x.SeaIgmModule)

const routes: Routes = [

  {
    path: 'airline-egm',
    loadChildren: airlineEgmModule
  },
  {
    path:'airline-igm',
    loadChildren:airlineIgmModule
  },
  {
    path:'sea-egm',
    loadChildren:seaEgmModule
  },
  {
    path:'sea-igm',
    loadChildren:seaIgmModule
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IgmEgmRoutingModule { }
