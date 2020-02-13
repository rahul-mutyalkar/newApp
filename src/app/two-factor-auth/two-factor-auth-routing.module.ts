import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoFactorAuthComponent } from './two-factor-auth.component';
// import { DashboardComponent } from './dashboard.component';
TwoFactorAuthComponent


const routes: Routes = [
    { path: '', component: TwoFactorAuthComponent }
    //   { path: '**', component: DashboardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TwoFactorAuthRoutingModule { }
