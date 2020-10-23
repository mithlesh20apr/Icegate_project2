import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "src/app/module/common/material.module";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { InBondBillOfEntryRoutingModule } from './in-bond-bill-of-entry-routing.module';
import { CommonSharedModule } from 'src/app/module/common/common-shared.module';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { Step6Component } from './step6/step6.component';
import { Step7Component } from './step7/step7.component';
import { Step8Component } from './step8/step8.component';
import { Step9Component } from './step9/step9.component';
import { Step10Component } from './step10/step10.component';
import { Step11Component } from './step11/step11.component';
import { Step12Component } from './step12/step12.component';
import { Step13Component } from './step13/step13.component';
import { InBondBillOfEntryComponent } from './in-bond-bill-of-entry.component';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare,faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

@NgModule({

    
  imports: [
    CommonModule,FontAwesomeModule,
    InBondBillOfEntryRoutingModule,
    CommonSharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    Step1Component, 
    Step2Component, 
    Step3Component, 
    Step4Component, 
    Step5Component, 
    Step6Component, 
    Step7Component, 
    Step8Component, 
    Step9Component, 
    Step10Component, 
    Step11Component, 
    Step12Component, 
    Step13Component, InBondBillOfEntryComponent],
})
export class InBondBillOfEntryModule { 
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSquare,faExclamationCircle, faCheckSquare, farSquare, faQuestionCircle, faStackOverflow, faGithub, faMedium);
  }
}
