import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillOfEntryRoutingModule } from './bill-of-entry-routing.module';
import { SelectBillOfEntryComponent } from './component/select-bill-of-entry/select-bill-of-entry.component';
import { CommonSharedModule } from 'src/app/module/common/common-shared.module';

@NgModule({
  declarations: [SelectBillOfEntryComponent],
  imports: [
    CommonModule,
    BillOfEntryRoutingModule,
    CommonSharedModule
  ]
})
export class BillOfEntryModule { }