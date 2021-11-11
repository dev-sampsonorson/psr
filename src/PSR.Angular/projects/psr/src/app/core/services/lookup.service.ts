import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_TOKEN, IAppConfig } from '@core/app.config';
import { AppEndpoints } from '@core/app.constants';
import { ILookupItem } from '@core/app.interfaces';
import { Observable } from 'rxjs';

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
