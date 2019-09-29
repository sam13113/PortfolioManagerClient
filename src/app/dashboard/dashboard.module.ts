import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { DashboardProjectsComponent } from './dashboard-projects/dashboard-projects.component';
import { DashboardCommonModule } from '../common/dashboard-common.module';
import { DashboardChartsModule } from '../modules/dashboard-charts/dashboard-charts.module';

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardContentComponent,
        DashboardProjectsComponent
    ],
    imports: [
        CommonModule,
        DashboardCommonModule,
        DashboardChartsModule
    ],
    providers: [],
    exports: [DashboardComponent]

})
export class DashboardModule { }
