import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TwoStepAuthComponent } from './two-step-auth/two-step-auth.component';


const routes: Routes = [
  {
    path: '', component: AuthComponent, children: [
      { path: '', component: LoginComponent },
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      {
        path: 'two-step-auth', component: TwoStepAuthComponent
      }
    ],
  },

  { path: '**', redirectTo: '/login', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
