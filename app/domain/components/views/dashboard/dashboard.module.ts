import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { MemberDetailLayoutComponent } from '../../../../core/components/containers/member-detail-layout';
import { SharedModule } from '../../../../shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from "./dashboard.service";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    SharedModule,
  ],
  declarations: [
    // MemberDetailLayoutComponent,
    DashboardComponent
  ],

  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
