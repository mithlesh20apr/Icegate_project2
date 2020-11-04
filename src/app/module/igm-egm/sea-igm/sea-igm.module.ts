import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeaIgmRoutingModule } from './sea-igm-routing.module';

import { MaterialModule } from '../../common/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonSharedModule } from '../../common/common-shared.module';
// import { ContainerDialogContentComponent } from './component/container-dialog-content/container-dialog-content.component';
import { SeaIgmComponent } from './sea-igm.component';
import { Step1Component } from './step1/step1.component';
import {Step2Component} from './step2/step2.component';
import {Step3Component} from './step3/step3.component';
import {Step3DialogContentComponent} from './step3-dialog-content/step3-dialog-content.component';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare,faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';


@NgModule({
  declarations: [
 
    SeaIgmComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step3DialogContentComponent
    
  ],
  imports: [
    CommonModule,
    SeaIgmRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonSharedModule,
    FontAwesomeModule
  ]
})
export class SeaIgmModule { 
  constructor( private library: FaIconLibrary){
    library.addIcons(
      faSquare,
      faExclamationCircle, 
      faCheckSquare, 
      farSquare, 
      faQuestionCircle, 
      faStackOverflow, 
      faGithub, 
      faMedium);
}  
}
