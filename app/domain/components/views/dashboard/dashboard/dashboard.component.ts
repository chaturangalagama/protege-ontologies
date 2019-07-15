import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { AlertService } from '../../../../../core/services/util-services/alert.service';
import { BussinessStoreService } from '../../../../../core/services/api-services/store-bussiness.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  memberCreationFormGroup: FormGroup;
  rows = [];
  memberGroupsList = [];

  constructor(private fb: FormBuilder, private apiMemberDetailsService: DashboardService, private alertService: AlertService,
    private storeBussinessService: BussinessStoreService) {
    setTimeout(() => {
      this.getMemberGroupsNameList();
    }, 1000);
    this.getMemberGroupById();
    this.getMemberById();
  }

  ngOnInit() {
    this.memberCreationFormGroup = this.createMemberCreationFormGroup();
  }

  createMemberCreationFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      memberGroup: ['', Validators.required],
      // memberStatus: [''],
      // memberParameters: [''],
      // fitnessTests: ['']
    })
  }

  onSaveClicked() {
    this.apiMemberDetailsService.createMember(this.memberCreationFormGroup.value).subscribe(
      response => {
        this.rows = response['data'];
      },
      err => {
        this.alertService.error(JSON.stringify(err));
      }
    );
  }

  getMemberGroupsNameList() {
    this.memberGroupsList = this.storeBussinessService.memberGroupsList;
  }

  getMemberGroupById() {
    this.apiMemberDetailsService.getMemberGroupById("1").subscribe(
      response => {
        this.rows = response['data'];
      },
      err => {
        this.alertService.error(JSON.stringify(err));
      }
    );
  }

  getMemberById() {
    this.apiMemberDetailsService.getMemberById("1").subscribe(
      response => {
        this.rows = response['data'];
      },
      err => {
        this.alertService.error(JSON.stringify(err));
      }
    );
  }
}
