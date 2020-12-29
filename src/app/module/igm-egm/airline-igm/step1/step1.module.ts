import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { Step1Component } from './step1.component';
import { MY_DATE_FORMATS } from '../../../common/component/my-date-formats';

@NgModule({
    declarations: [
        Step1Component,
      ],
    imports: [
        HttpClientModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule
      ],
      exports: [
       // material
      ],
      providers: [
        { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
      ]
})
export class StepOneModule { 

}