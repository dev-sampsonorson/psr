import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppEndpoints } from '../app.constants';
import { APP_CONFIG_TOKEN, IAppConfig } from '../tokens';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor(private http: HttpClient, @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig) { }

    getError(): Observable<any> {
        return this.http.get(this.appConfig.getUrl('error/get-error'));
    }

    getTestDescription(): Observable<string> {
        return this.http.get<string>(this.appConfig.getUrl(AppEndpoints.GetTestDescription)).pipe(
            // shareReplay()
        );
    }
}
