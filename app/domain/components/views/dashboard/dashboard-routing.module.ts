import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { DashboardComponent } from './dashboard/dashboard.component';
// import { MemberDetailLayoutComponent } from '../../../../core/components/containers/member-detail-layout';

export const routes: Routes = [
  {
    path: '',
    // component: MemberDetailLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
