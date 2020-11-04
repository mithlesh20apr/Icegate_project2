import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "src/app/module/common/material.module";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { ExbondBillOfEntryRoutingModule } from './exbond-bill-of-entry-routing.module';
import { CommonSharedModule } from 'src/app/module/common/common-shared.module';
import { Step1Component } from './step1/step1.component'
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { Step6Component } from './step6/step6.component';
import { Step7Component } from './step7/step7.component'
import { ExbondBillOfEntryComponent } from './exbond-bill-of-entry.component';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare,faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';


@NgModule({
  declarations: [
    
    Step1Component, 
    Step2Component, 
    Step3Component, 
    Step4Component, 
    Step5Component, 
    Step6Component, 
    Step7Component, 
    ExbondBillOfEntryComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ExbondBillOfEntryRoutingModule,
    CommonSharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
}) 
export class ExbondBillOfEntryModule{
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