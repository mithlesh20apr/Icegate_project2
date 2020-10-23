import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingBillRoutingModule } from './shipping-bill-routing.module';
import { StepperLayoutComponent } from './component/stepper-layout/stepper-layout.component';
import { MaterialModule } from '../common/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Step1Component } from './component/step1/step1.component';
import { GeneralDetailsComponent } from './component/general-details/general-details.component';
import { ConsigneeDetailsComponent } from './component/consignee-details/consignee-details.component';
import { PackageDetailsComponent } from './component/package-details/package-details.component';
import { Step2Component } from './component/step2/step2.component';
import { InvoiceDetailsComponent } from './component/invoice-details/invoice-details.component';
import { FreightInsuranceDetailsComponent } from './component/freight-insurance-details/freight-insurance-details.component';
import { ThirdPartyDetailsComponent } from './component/third-party-details/third-party-details.component';
import { Step3Component } from './component/step3/step3.component';
import { Step4Component } from './component/step4/step4.component';
import { ItemDetailsComponent } from './component/item-details/item-details.component';
import { ItemAccessoriesComponent } from './component/item-accessories/item-accessories.component';
import { ItemThirdPartyDetailsComponent } from './component/item-third-party-details/item-third-party-details.component';
import { ItemCessComponent } from './component/item-cess/item-cess.component';
import { ItemDrawbackComponent } from './component/item-drawback/item-drawback.component';
import { ItemRawMaterialComponent } from './component/item-raw-material/item-raw-material.component';
import { Step5Component } from './component/step5/step5.component';
import { DepbDetailsComponent } from './component/depb-details/depb-details.component';
import { DepbParentDetailsComponent } from './component/depb-parent-details/depb-parent-details.component';
import { Step6Component } from './component/step6/step6.component';
import { LicenseDetailsComponent } from './component/license-details/license-details.component';
import { DfiaDetailsComponent } from './component/dfia-details/dfia-details.component';
import { JobWorkDetailsComponent } from './component/job-work-details/job-work-details.component';
import { Step7Component } from './component/step7/step7.component';
import { Ar4DetailsComponent } from './component/ar4-details/ar4-details.component';
import { PackingDetailsComponent } from './component/packing-details/packing-details.component';
import { ContainerDetailsComponent } from './component/container-details/container-details.component';
import { Step8Component } from './component/step8/step8.component';
import { RoslDetailsComponent } from './component/rosl-details/rosl-details.component';
import { AmendmentDetailsComponent } from './component/amendment-details/amendment-details.component';
import { Step9Component } from './component/step9/step9.component';
import { Step10Component } from './component/step10/step10.component';
import { Step11Component } from './component/step11/step11.component';

import { ShippingBillService } from './service/shipping-bill.service';
// import { ValidationMessagesComponent } from './component/Validation/validation-messages.component';
import { ValidationMessagesComponent } from '../common/component/validation-messages.component';
import { CommonSharedModule } from '../common/common-shared.module';



@NgModule({
  declarations: [ 
    StepperLayoutComponent, 
    Step1Component, 
    GeneralDetailsComponent, 
    ConsigneeDetailsComponent, 
    PackageDetailsComponent, 
    Step2Component, 
    InvoiceDetailsComponent, 
    FreightInsuranceDetailsComponent, 
    ThirdPartyDetailsComponent, 
    Step3Component, 
    Step4Component, 
    ItemDetailsComponent, 
    ItemAccessoriesComponent, 
    ItemThirdPartyDetailsComponent, 
    ItemCessComponent, 
    ItemDrawbackComponent, 
    ItemRawMaterialComponent, 
    Step5Component, 
    DepbDetailsComponent, 
    DepbParentDetailsComponent, 
    Step6Component, 
    LicenseDetailsComponent, 
    DfiaDetailsComponent, 
    JobWorkDetailsComponent, 
    Step7Component, 
    Ar4DetailsComponent, 
    PackingDetailsComponent, 
    ContainerDetailsComponent, 
    Step8Component, 
    RoslDetailsComponent, 
    AmendmentDetailsComponent, 
    Step9Component, 
    Step10Component, 
    Step11Component,
  ],
  entryComponents: [
    Step4Component,
  ],
  imports: [
    CommonModule,
    ShippingBillRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonSharedModule
  ],
  providers: [
    ShippingBillService,
  ]
})
export class ShippingBillModule { }
