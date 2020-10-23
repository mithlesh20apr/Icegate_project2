import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessagesComponent } from './component/validation-messages.component';




@NgModule({
  declarations: [ValidationMessagesComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ValidationMessagesComponent
]
})
export class CommonSharedModule { }
