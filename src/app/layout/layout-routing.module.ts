
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(mod => mod.DashboardModule),
      },
      { path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },
      { path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
      { path: 'two-factor-auth', loadChildren: () => import('../two-factor-auth/two-factor-auth.module').then(m => m.TwoFactorAuthModule) },
      {
        path: '',
        redirectTo: '/app/dashboard',
        pathMatch: 'full'
      },
      { path: '**', component: PageNotFoundComponent }
    ]
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
