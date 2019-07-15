import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { MemberCreationComponent } from './member-creation/member-creation.component';
import { MemberSearchComponent } from './member-search/member-search.component';
import { MemberDetailLayoutComponent } from '../../../../core/components/containers/member-detail-layout';

export const routes: Routes = [
  {
    path: '',
    component: MemberDetailLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'creation'
      },
      {
        path: 'creation',
        component: MemberCreationComponent,
      },
      {
        path: 'search',
        component: MemberSearchComponent,
      }
    ]
    // data: {
    //   title: 'Member Details'
    // },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberDetailsRoutingModule { }
