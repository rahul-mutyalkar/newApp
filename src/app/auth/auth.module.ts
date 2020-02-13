import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SharedModule } from '../shared/shared.module';
import { TwoStepAuthComponent } from './two-step-auth/two-step-auth.component';



@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent, TwoStepAuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule, SharedModule]
})
export class AuthModule { }
