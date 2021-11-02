import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthPaths } from '@psr/auth/auth.constants';
import { Observable } from 'rxjs';
import { share, shareReplay } from 'rxjs/operators';
import { APP_CONFIG_TOKEN, IAppConfig } from '../app.config';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor(private http: HttpClient, @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig) { }

    getError(): Observable<any> {
        console.log(this.appConfig.getUrl('error/get-error'));
        return this.http.get(this.appConfig.getUrl('error/get-error'));
    }

    getTestDescription(): Observable<string> {
        return this.http.get<string>(this.appConfig.getUrl(AuthPaths.GetTestDescription)).pipe(
            // shareReplay()
        );
    }
}