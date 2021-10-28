import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@psr/core/services/storage.service';
import { BehaviorSubject, concat, from, Observable, of } from 'rxjs';
import { distinctUntilKeyChanged, filter, map, take, tap } from 'rxjs/operators';
import { APP_CONFIG_TOKEN, IAppConfig } from '../../app.config';
import { AuthConstants, AuthPaths, AuthRoutes } from '../auth.constants';
import { IUser } from '../models/user.model';

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
    redirectToLogin(): void {
        this.router.navigate([AuthRoutes.Login])
    }
    private refreshTokenTimeout: any;
    private userSubject = new BehaviorSubject<IUser | null>(null);

    constructor(
        private http: HttpClient,
        private storage: StorageService,
        private router: Router,
        @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig
    ) { }

    public isAuthenticated(): Observable<boolean> {
        return this.getUser().pipe(map(user => !!user));
    }

    public getUser(): Observable<IUser | null> {
        let source$ = concat(
            this.userSubject.pipe(take(1), filter(user => !!user)),
            of(this.storage.getItem(AuthConstants.UserKey)).pipe(filter(user => !!user), tap(user => this.userSubject.next(user))),
            this.userSubject.asObservable()
        ).pipe(
            distinctUntilKeyChanged('id')
        );

        return source$;
    }

    public getToken(): Observable<string | null> {
        return from(this.getUser()).pipe(
            map(user => user && user.token)
        );
    }




    public register(payload: IUserRegistrationReq): Observable<IUser> {
        return this.http.post<IUser>(this.appConfig.getUrl(AuthPaths.Register), payload).pipe(
            tap(user => {
                this.userSubject.next(user);
                // this.startRefreshTokenTimer();
                this.storeUser(user);
            })
        );
    }

    public refreshToken() {
        return this.http.post<any>(AuthPaths.RefreshToken, {}, { withCredentials: true }).pipe(
            tap((user) => {
                this.userSubject.next(user);
                // this.startRefreshTokenTimer();
                this.storeUser(user);
            })
        );
    }

    public logout() {
        return this.http.post<any>(this.appConfig.getUrl(AuthPaths.RevokeToken), {}, { withCredentials: true }).pipe(
            tap((user) => {
                // emit null as next user
                // this.userSubject.next(null);

                // stop refresh token timer
                // this.startRefreshTokenTimer();

                // remove user from localStorage
                // this.removeUser();

                // redirect to login
            })
        ).subscribe();
        // logout from server
        // pass refresh token if you can
        // 
        /* return this.http.post<any>(this.appConfig.getUrl(AuthPaths.RevokeToken), {}, { withCredentials: true }).pipe(
            tap((user) => {
                // emit null as next user
                this.userSubject.next(null);

                // stop refresh token timer
                // this.startRefreshTokenTimer();

                // remove user from localStorage
                this.removeUser();

                // redirect to login
            })
        ).subscribe(); */


        /*  */
        // this.userSubject.next(null);
    }

    public checkEmailExists(email: string): Observable<any> {
        return this.http.post(this.appConfig.getUrl(AuthPaths.CheckEmailExists), {
            email: email
        });
    }

    private startRefreshTokenTimer() {

        this.getUser().subscribe(user => {
            // parse json object from base64 encoded jwt token
            const jwtToken = user && JSON.parse(atob(user.token.split('.')[1]));

            if (!jwtToken) return;

            // set a timeout to refresh the token a minute before it expires
            const expires = new Date(jwtToken.exp * 1000);
            const timeout = expires.getTime() - Date.now() - (60 * 1000);
            this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
        });

    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }

    private storeUser(item: IUser) {
        this.storage.saveItem(AuthConstants.UserKey, item);
    }

    private removeUser(): void {
        this.storage.removeItem(AuthConstants.UserKey);
    }


}
