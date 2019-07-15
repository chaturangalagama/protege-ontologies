import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent, SimpleLayoutComponent } from './core/components/containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/pages/member-details/search',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    children: [
      // {
      //   path: 'dashboard',
      //   loadChildren: './domain/components/views/dashboard/dashboard.module#DashboardModule'
      // },
      {
        path: 'member-details',
        loadChildren: './domain/components/views/member-details/member-details.module#MemberDetailsModule'
      }
    ]
    // data: {
    //   title: 'Home'
    // }
  },
  {
    path: '**',
    redirectTo: '/pages'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
