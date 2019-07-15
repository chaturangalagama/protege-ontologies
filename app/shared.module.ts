import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CKEditorModule } from 'ng2-ckeditor';
import { FileUploadModule } from 'ng2-file-upload';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AlertComponent } from './core/directives/alert/alert.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { LoadingComponent } from './core/components/views/loading/loading.component';
import { LoadingRetryComponent } from './core/components/views/loading-retry/loading-retry.component';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    InternationalPhoneModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    TimepickerModule.forRoot(),
    ModalModule.forRoot(),
    NgSelectModule,
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    CKEditorModule,
    ChartsModule,
    AngularSvgIconModule,
    FileUploadModule,
    NgxPermissionsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    NgxDatatableModule,
    NgSelectModule,
    AlertComponent,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    InternationalPhoneModule,
    BsDropdownModule,
    ModalModule,
    PopoverModule,
    TabsModule,
    CollapseModule,
    BsDatepickerModule,
    CKEditorModule,
    TimepickerModule,
    ModalModule,
    ChartsModule,
    AngularSvgIconModule,
    FileUploadModule,
    NgxPermissionsModule,

    RouterModule,
    LoadingComponent,
    LoadingRetryComponent,
  ],
  declarations: [
    AlertComponent,
    LoadingComponent,
    LoadingRetryComponent,
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
