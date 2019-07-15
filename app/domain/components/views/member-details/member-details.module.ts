import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MemberDetailLayoutComponent } from '../../../../core/components/containers/member-detail-layout';
import { SharedModule } from '../../../../shared.module';
import { MemberCreationComponent } from './member-creation/member-creation.component';
import { MemberDetailsRoutingModule } from './member-details-routing.module';
import { MemberSearchComponent } from "./member-search/member-search.component";
import { ApiMemberDetailsService } from "./api-member-details.service";

@NgModule({
  imports: [
    CommonModule,
    MemberDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    SharedModule,
  ],
  declarations: [
    MemberDetailLayoutComponent,
    MemberCreationComponent,
    MemberSearchComponent
  ],

  providers: [
    ApiMemberDetailsService
  ]
})
export class MemberDetailsModule { }
