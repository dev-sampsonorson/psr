import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAppConfig } from '../tokens';
import * as i0 from "@angular/core";
export declare class TestService {
    private http;
    private appConfig;
    constructor(http: HttpClient, appConfig: IAppConfig);
    getError(): Observable<any>;
    getTestDescription(): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TestService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TestService>;
}
