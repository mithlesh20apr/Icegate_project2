import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "src/app/module/common/material.module";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { LayoutComponent } from './component/layout/layout.component';
import { NormalBillOfEntryRoutingModule } from './normal-bill-of-entry-routing.module';
import { CommonSharedModule } from 'src/app/module/common/common-shared.module';
import { Step1Component } from './component/step1/step1.component';
import { Step2Component } from './component/step2/step2.component';
import { Step3Component } from './component/step3/step3.component';
import { Step4Component } from './component/step4/step4.component';
import { Step5Component } from './component/step5/step5.component';
import { Step6Component } from './component/step6/step6.component';
import { Step7Component } from './component/step7/step7.component';
import { Step8Component } from './component/step8/step8.component';
import { Step9Component } from './component/step9/step9.component';
import { Step10Component } from './component/step10/step10.component';
import { Step11Component } from './component/step11/step11.component';
import { Step12Component } from './component/step12/step12.component';
import { Step13Component } from './component/step13/step13.component';

@NgModule({
  declarations: [
    LayoutComponent, 
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
    Step13Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NormalBillOfEntryRoutingModule,
    CommonSharedModule
  ]
})
export class NormalBillOfEntryModule { }
