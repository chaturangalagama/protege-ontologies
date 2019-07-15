import { AppConfigService } from '../../../../core/services/util-services/app-config.service';
import { Subject, Observable } from 'rxjs';
import { HttpResponseBody } from '../../../../core/objects/HttpResponseBody';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class DashboardService {
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    API_MEMBER_DETAILS_URL: any;

    constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private appConfig: AppConfigService) {
        this.API_MEMBER_DETAILS_URL = appConfig.getConfig().API_MEMBER_DETAILS_URL;
    }

    createMember(member): Observable<HttpResponseBody> {
        return this.http.post<HttpResponseBody>(
            `${this.API_MEMBER_DETAILS_URL}/member/create`, JSON.stringify(member), { headers: this.headers }
        );
    }

    getMemberById(id: String): Observable<HttpResponseBody> {
        return this.http.get<HttpResponseBody>(
            `${this.API_MEMBER_DETAILS_URL}/member/getById/${id}`, { headers: this.headers }
        );
    }

    getMemberGroupList(): Observable<HttpResponseBody> {
        return this.http.get<HttpResponseBody>(
            `${this.API_MEMBER_DETAILS_URL}/memberGroup/getAll`, { headers: this.headers }
        );
    }

    getMemberGroupById(id: String): Observable<HttpResponseBody> {
        return this.http.get<HttpResponseBody>(
            `${this.API_MEMBER_DETAILS_URL}/memberGroup/getById/${id}`, { headers: this.headers }
        );
    }
}
