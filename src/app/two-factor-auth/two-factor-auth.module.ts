import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoFactorAuthRoutingModule } from './two-factor-auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TwoFactorAuthComponent } from './two-factor-auth.component';



@NgModule({
  declarations: [TwoFactorAuthComponent],
  imports: [
    CommonModule,
    SharedModule,
    TwoFactorAuthRoutingModule
  ]
})
export class TwoFactorAuthModule { }
