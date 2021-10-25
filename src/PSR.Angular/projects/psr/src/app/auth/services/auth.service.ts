import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONFIG_TOKEN, IAppConfig } from '../../app.config';
import { AuthPaths } from '../auth.constants';

export interface IUserRegistrationReq {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    timeZone: string;
    workHours: string;
    coreHours: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig
    ) { }

    public register(payload: IUserRegistrationReq): Observable<any> {
        return this.http.post(this.appConfig.getUrl(AuthPaths.Register), payload);
    }

    public checkEmailExists(email: string): Observable<any> {
        return this.http.post(this.appConfig.getUrl(AuthPaths.CheckEmailExists), {
            email: email
        });
    }


}
