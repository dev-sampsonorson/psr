import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthEndpoints } from '@auth/auth.constants';
import { APP_CONFIG_TOKEN, IAppConfig } from '@config/app.config';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor(private http: HttpClient, @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig) { }

    getError(): Observable<any> {
        return this.http.get(this.appConfig.getUrl('error/get-error'));
    }

    getTestDescription(): Observable<string> {
        return this.http.get<string>(this.appConfig.getUrl(AuthEndpoints.GetTestDescription)).pipe(
            // shareReplay()
        );
    }
}
