import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "src/app/module/common/material.module";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { ExBondBillOfEntryRoutingModule } from './ex-bond-bill-of-entry-routing.module';
import { CommonSharedModule } from 'src/app/module/common/common-shared.module';
import { LayoutComponent } from './component/layout/layout.component';
import { Step1Component } from './component/step1/step1.component';
import { Step2Component } from './component/step2/step2.component';
import { Step3Component } from './component/step3/step3.component';
import { Step4Component } from './component/step4/step4.component';
import { Step5Component } from './component/step5/step5.component';
import { Step6Component } from './component/step6/step6.component';
import { Step7Component } from './component/step7/step7.component';


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
   ],
  imports: [
    CommonModule,
    ExBondBillOfEntryRoutingModule,
    CommonSharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ExBondBillOfEntryModule { }
