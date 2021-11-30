import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILookupItem } from '../app.interfaces';
import { IAppConfig } from '../tokens';
import * as i0 from "@angular/core";
export interface Country {
    id: number;
    name: string;
}
export declare class LookupService {
    private http;
    private appConfig;
    constructor(http: HttpClient, appConfig: IAppConfig);
    getCountries(): Observable<ILookupItem[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LookupService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LookupService>;
}
