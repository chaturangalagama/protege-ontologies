import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { ApiMemberDetailsService } from '../../../domain/components/views/member-details/api-member-details.service';
import { AlertService } from '../util-services/alert.service';

@Injectable()
export class BussinessStoreService {

  public memberGroupsList = [];

  constructor(private apiMemberDetailsService: ApiMemberDetailsService, private alertService: AlertService
  ) {
    this.getResult();
  }

  getResult() {
    // this.apiMemberDetailsService.getResult().subscribe(
    //   response => {
    //     this.memberGroupsList = response['data'];
    //   },
    //   err => {
    //     this.alertService.error(JSON.stringify(err));
    //   }
    // );
  }

}
