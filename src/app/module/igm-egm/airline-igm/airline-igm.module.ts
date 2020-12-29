import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AirlineIgmRoutingModule } from './airline-igm-routing.module';

import { MaterialModule } from '../../common/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonSharedModule } from '../../common/common-shared.module';

import { AirlineIgmComponent } from './airline-igm.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step3DialogContentComponent } from './step3-dialog-content/step3-dialog-content.component';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare,faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MY_DATE_FORMATS } from '../../common/component/my-date-formats';


@NgModule({
  declarations: [
    
    AirlineIgmComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step3DialogContentComponent,
  
  ],

  imports: [
    CommonModule,
    AirlineIgmRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonSharedModule,
    FontAwesomeModule

  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class AirlineIgmModule { 
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
