import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './component/login-layout/login-layout.component';
import { LoginComponent } from './component/login/login.component';
import { ResetPasswordLayoutComponent } from './component/reset-password/component/reset-password-layout/reset-password-layout.component';
import { UnlockAccountLayoutComponent } from './component/unlock-account/component/unlock-account-layout/unlock-account-layout.component';



const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'reset-password',
      component: ResetPasswordLayoutComponent
    },
    {
      path:'unlock-account',
      component: UnlockAccountLayoutComponent
    }
  ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
