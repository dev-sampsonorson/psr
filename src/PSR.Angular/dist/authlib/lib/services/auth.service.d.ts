import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IAppConfig, IUser, IUserRegistrationReq, UserStorageService } from '@corelib';
import { Observable } from 'rxjs';
import { IUserLoginReq } from '../models';
import * as i0 from "@angular/core";
export declare class AuthService {
    private http;
    private userStorage;
    private router;
    private appConfig;
    private userStorageKey;
    private refreshTokenTimeout;
    constructor(http: HttpClient, userStorage: UserStorageService, router: Router, appConfig: IAppConfig, userStorageKey: string);
    isAuthenticated(): Observable<boolean>;
    getToken(): Observable<string | null>;
    login(payload: IUserLoginReq): Observable<IUser>;
    redirectToLogin(): void;
    logout(): import("rxjs").Subscription;
    register(payload: IUserRegistrationReq): Observable<IUser>;
    refreshToken(): Observable<any>;
    checkEmailExists(email: string): Observable<any>;
    private startRefreshTokenTimer;
    private stopRefreshTokenTimer;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
