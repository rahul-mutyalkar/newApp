import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

// import {TreeTableModule} from "ng-treetable";
import { SharedModule } from '../shared/shared.module';
import {TreeTableModule} from 'primeng/treetable';
import { CustomTableTreeviewComponent } from './custom-table-treeview/custom-table-treeview.component';


@NgModule({
  declarations: [DashboardComponent, CustomTableTreeviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    TreeTableModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
