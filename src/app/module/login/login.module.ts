import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from '../login/component/login/login.component';
import { LoginLayoutComponent } from '../login/component/login-layout/login-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgOtpInputModule } from 'ng-otp-input';
import { Ng2TelInputModule } from 'ng2-tel-input';

import { ResetPasswordLayoutComponent } from './component/reset-password/component/reset-password-layout/reset-password-layout.component';
import { GenerateOtpComponent } from './component/reset-password/component/generate-otp/generate-otp.component';
import { VerifyOtpComponent } from './component/reset-password/component/verify-otp/verify-otp.component';
import { CreatePasswordComponent } from './component/reset-password/component/create-password/create-password.component';
import { UnlockAccountLayoutComponent } from './component/unlock-account/component/unlock-account-layout/unlock-account-layout.component';
import { CheckIcegateIdComponent } from './component/unlock-account/component/check-icegate-id/check-icegate-id.component';
import { VerifyDetailsComponent } from './component/unlock-account/component/verify-details/verify-details.component';
import { CreateNewPasswordComponent } from './component/unlock-account/component/create-new-password/create-new-password.component';


@NgModule({
  declarations: [LoginComponent, LoginLayoutComponent, ResetPasswordLayoutComponent, GenerateOtpComponent, VerifyOtpComponent, CreatePasswordComponent, UnlockAccountLayoutComponent, CheckIcegateIdComponent, VerifyDetailsComponent, CreateNewPasswordComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOtpInputModule,
    Ng2TelInputModule,
  ]
})
export class LoginModule { }
