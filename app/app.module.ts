
import { ErrorLogService } from './core/services/util-services/error-log.service';
import { AppConfigService } from './core/services/util-services/app-config.service';
import { JwtInterceptor } from './core/services/api-services/jwt-interceptor';
import { DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import {
  APP_SIDEBAR_NAV,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarMinimizerComponent
} from './core/components/views/';
import { FullLayoutComponent, SimpleLayoutComponent } from './core/components/containers';
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES,
  ReplaceDirective
} from './core/directives';
import { AlertService } from './core/services/util-services/alert.service';
import { AuthGuardService } from './core/services/util-services/auth-guard.service';
import { PermissionsGuardService } from './core/services/util-services/permissions-guard.service';
import { AuthService } from './core/services/api-services/auth.service';
import { CanDeactivateGuardService } from './core/services/util-services/can-deactivate-guard.service';
import { ConsoleLoggerService } from './core/services/util-services/console-logger.service';
import { DialogService } from './core/services/util-services/dialog.service';
import { LoggerService } from './core/services/util-services/logger.service';
import { StoreCoreService } from './core/services/api-services/store-core.service';
import { BussinessStoreService } from './core/services/api-services/store-bussiness.service';
import { SharedModule } from './shared.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { API_DOMAIN } from './core/constants/app.constants';
import { ApiMemberDetailsService } from './domain/components/views/member-details/api-member-details.service';

const APP_CONTAINERS = [FullLayoutComponent, SimpleLayoutComponent];

// Import components
const APP_COMPONENTS = [
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
];

// Import directives
const APP_DIRECTIVES = [AsideToggleDirective, ReplaceDirective, NAV_DROPDOWN_DIRECTIVES, SIDEBAR_TOGGLE_DIRECTIVES];

export function getAccessToken() {
  return localStorage.getItem('access_token');
}

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

// Import 3rd party components
@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, ...APP_COMPONENTS, ...APP_DIRECTIVES],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getAccessToken,
        whitelistedDomains: API_DOMAIN
      }
    }),
    NgxPermissionsModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  entryComponents: [],

  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (ps: NgxPermissionsService) =>
        function () {
          return new Promise((resolve, reject) => {
            if (localStorage.getItem('roles')) {
              resolve(localStorage.getItem('roles'));
            } else {
              resolve('');
            }
          }).then((data: string) => {
            console.log('Roles Loaded', data);
            if (data) {
              return ps.loadPermissions(JSON.parse(data));
            }
          });
        },
      deps: [NgxPermissionsService],
      multi: true
    },
    { provide: LoggerService, useClass: ConsoleLoggerService },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: JwtInterceptor,
    //   multi: true
    // },

    ErrorLogService,
    DatePipe,
    StoreCoreService,
    BussinessStoreService,
    AlertService,
    AuthService,
    DialogService,
    AuthGuardService,
    PermissionsGuardService,
    CanDeactivateGuardService,
    JwtHelperService,
    BsModalService,
    NgxPermissionsService,
    ApiMemberDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
