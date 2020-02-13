import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
// import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'app', loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule),
    canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
