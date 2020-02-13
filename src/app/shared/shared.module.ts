import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { TreeTableModule } from 'primeng/treetable';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { ManagerProductivityReportComponent } from '../reusable-component/manager-productivity-report/manager-productivity-report.component';
// import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { HighchartsChartModule } from 'highcharts-angular';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    ManagerProductivityReportComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // TreeTableModule,
    NgMultiSelectDropDownModule,
    NgxExtendedPdfViewerModule,
    HttpClientModule,
    // NgxDocViewerModule,
    HighchartsChartModule,
    ToastrModule.forRoot()],
  exports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    // NgxDocViewerModule,
    // TreeTableModule,
    NgxExtendedPdfViewerModule,
    HttpClientModule,
    HighchartsChartModule,
    NgMultiSelectDropDownModule,
    ManagerProductivityReportComponent]
})
export class SharedModule { }
