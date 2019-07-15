import { AppConfigService } from '../../../../core/services/util-services/app-config.service';
import { Subject, Observable } from 'rxjs';
import { HttpResponseBody } from '../../../../core/objects/HttpResponseBody';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class ApiMemberDetailsService {
    headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    // headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    API_MEMBER_DETAILS_URL: any;

    constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private appConfig: AppConfigService) {
        this.API_MEMBER_DETAILS_URL = appConfig.getConfig().API_MEMBER_DETAILS_URL;
    }

    getResult(query): Observable<HttpResponseBody> {
        return this.http.post<HttpResponseBody>(
            `http://localhost:3030/resturant-ontology/sparql`, query.toString(), { headers: this.headers }
        );
    }

    // getResult(query): Observable<HttpResponseBody> {
    //     return this.http.post<HttpResponseBody>(
    //         `http://localhost:3030/resturant-ontology/sparql`, JSON.stringify(query), { headers: this.headers }
    //     );
    // }

    // login(username, password): Observable<any> {
    //     const body = new HttpParams()
    //       .set('username', username)
    //       .set('password', password);
      
    //     return this.http.post('/login',
    //       body.toString(),
    //       {
    //         headers: new HttpHeaders()
    //           .set('Content-Type', 'application/x-www-form-urlencoded')
    //       }
    //     );
    //   }
















    getMemberGroupById(id: String): Observable<HttpResponseBody> {
        return this.http.get<HttpResponseBody>(
            `${this.API_MEMBER_DETAILS_URL}/memberGroup/getById/${id}`, { headers: this.headers }
        );
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
}
