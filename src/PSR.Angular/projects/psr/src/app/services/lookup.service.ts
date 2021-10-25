import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_CONFIG_TOKEN, IAppConfig } from '../app.config';
import { AppPaths } from '../core/app.constants';
import { ILookupItem, ILookupRespose } from '../core/app.interfaces';


export interface Country {
    id: number;
    name: string;
}

@Injectable({
    providedIn: 'root'
})
export class LookupService {

    constructor(private http: HttpClient, @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig) { }

    public getCountries(): Observable<ILookupItem[]> {
        return this.http.get<ILookupRespose>(this.appConfig.getUrl(AppPaths.GetCountries)).pipe(
            map(x => x.result)
        );
    }
}
