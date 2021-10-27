import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, concat, from, Observable, of } from 'rxjs';
import { distinctUntilKeyChanged, filter, map, take, tap } from 'rxjs/operators';
import { APP_CONFIG_TOKEN, IAppConfig } from '../../app.config';
import { AuthConstants, AuthPaths } from '../auth.constants';
import { IUser } from '../models/user.model';
import { StorageService } from '../../core/storage.service';

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
    private refreshTokenTimeout: any;
    private userSubject = new BehaviorSubject<IUser | null>(null);

    constructor(
        private http: HttpClient,
        private storage: StorageService,
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
