import { FormGroup, FormBuilder } from '@angular/forms';
import { UserLogin } from '../../../objects/UserLogin';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/api-services/auth.service';
import { AlertService } from '../../../services/util-services/alert.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Validators } from '@angular/forms';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  username: string;
  password: string;
  clinic: string;
  clinicList = [];
  clinicListOptions = [];
  clinicData = [];
  authorizedClinicList = [];
  loading = false;
  returnUrl = 'pages/member-details/list';
  clinicUrl = 'pages/client-selector/select';
  bsModalRef: BsModalRef;
  hasShownPopUp = false;
  loginFormGroup: FormGroup;

  constructor(
    private router: Router, private authService: AuthService, private alertService: AlertService, private fb: FormBuilder) {
    this.loginFormGroup = this.createLoginFormGroup();
  }

  ngOnInit() {

  }

  onLoginSubmit() {
    localStorage.removeItem('access_token');
    this.username = this.loginFormGroup.get('username').value;
    this.password = this.loginFormGroup.get('password').value;
    const user = new UserLogin(this.username, this.password);
    this.loading = true;
    this.authService.login(user).subscribe(
      resp => {
        localStorage.setItem('access_token', resp.body['access_token']);
      },
      err => {
        this.alertService.error(err.error.message);
        this.loading = false;
      }
    );
    this.getClinicForModal({});
  }

  getClinicForModal(data) {
    this.router.navigate(['pages/member-details/list']);
  }

  createLoginFormGroup(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
}
