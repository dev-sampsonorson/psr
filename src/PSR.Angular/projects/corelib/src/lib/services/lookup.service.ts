import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppEndpoints } from '../app.constants';
import { ILookupItem } from '../app.interfaces';
import { APP_CONFIG_TOKEN, IAppConfig } from '../tokens';

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
        return this.http.get<ILookupItem[]>(this.appConfig.getUrl(AppEndpoints.GetCountries));
    }
}
