import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../../../shared.module';

@NgModule({
  imports: [PagesRoutingModule, FormsModule, CommonModule, SharedModule],
  declarations: [LoginComponent],
  providers: [],
  entryComponents: []
})
export class PagesModule { }
