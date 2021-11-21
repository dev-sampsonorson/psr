import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG_TOKEN, IAppConfig } from '@config/app.config';
import { StorageService } from '@core/services/storage.service';
import { BehaviorSubject, concat, Observable, of } from 'rxjs';
import { distinctUntilKeyChanged, filter, map, switchMap, take, tap } from 'rxjs/operators';

import { AuthConstants, AuthEndpoints, AuthRoutes } from '../auth.constants';
import { EMPTY_USER, IUser, IUserLoginReq, IUserRegistrationReq } from '../models/user.model';



@Injectable({
    providedIn: 'root'
})
export class AuthService {
    redirectToLogin(): void {
        this.router.navigate(AuthRoutes.Login() as any[]);
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
        return this.getUser().pipe(
            take(1),
            map(user => !!user)
        );
    }

    public getUser(): Observable<IUser | null> {
        let source$ = concat(
            this.userSubject.pipe(
                // take will trigger the `subject` observable
                // to complete so that the next observable in
                // concat is subscribed to
                take(1),

                // filter out null values (false)
                // convert null to false
                filter(user => !!user)
            ),

            // the `of` observable will automatically complete
            // so the next observable in concate will be
            // subscribed to
            of(this.storage.getItem(AuthConstants.UserKey)).pipe(
                filter(user => !!user),

                // tap(x => console.log('storage => ', x)),

                // we will get here if the value is not null
                // update the user subject
                tap(user => this.userSubject.next(user))
            ),
            this.userSubject.asObservable()
        ).pipe(
            // here to allow distinctUntilKeyChanged to work
            switchMap(user => of(user ?? EMPTY_USER)),
            distinctUntilKeyChanged('id'),
            // transform back to null
            switchMap(user => of(user.id === EMPTY_USER.id ? null : user))
        );

        return source$;
    }

    public getToken(): Observable<string | null> {
        // this.retrieveUser()
        return this.getUser().pipe(
            take(1),
            map(user => user && user.token)
        );
    }

    public login(payload: IUserLoginReq): Observable<IUser> {
        return this.http.post<IUser>(this.appConfig.getUrl(AuthEndpoints.Login), payload, { withCredentials: true }).pipe(
            // shareReplay(),
            tap(user => {
                this.userSubject.next(user);
                // this.startRefreshTokenTimer();
                this.storeUser(user);
            })
        );
    }

    public logout() {
        // this.userSubject.next(null);
        // logout from server
        // pass refresh token if you can
        // console.log('logging out...');
        return this.http.post<any>(this.appConfig.getUrl(AuthEndpoints.RevokeToken), {}, { withCredentials: true }).pipe(
            // shareReplay(),
            tap((user) => {
                // emit null as next user
                this.userSubject.next(null);

                // stop refresh token timer
                // this.startRefreshTokenTimer();

                // remove user from localStorage
                this.removeUser();

                // redirect to login
                this.router.navigate(AuthRoutes.Login() as any[]);
            })
        ).subscribe();
    }


    public register(payload: IUserRegistrationReq): Observable<IUser> {
        return this.http.post<IUser>(this.appConfig.getUrl(AuthEndpoints.Register), payload, { withCredentials: true }).pipe(
            tap(user => {
                this.userSubject.next(user);
                // this.startRefreshTokenTimer();
                this.storeUser(user);
            })
        );
    }

    public refreshToken() {
        return this.getToken().pipe(
            switchMap(token => this.http.post<any>(this.appConfig.getUrl(AuthEndpoints.RefreshToken), { token }, { withCredentials: true }).pipe(
                tap((user) => {
                    this.userSubject.next(user);
                    // this.startRefreshTokenTimer();
                    this.storeUser(user);
                })
            ))
        )
    }

    public checkEmailExists(email: string): Observable<any> {
        return this.http.post(this.appConfig.getUrl(AuthEndpoints.CheckEmailExists), {
            email: email
        });
    }

    private startRefreshTokenTimer() {

        this.getUser()
            .pipe(
                take(1)
            )
            .subscribe(user => {
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

    private retrieveUser(): IUser | null {
        return this.storage.getItem(AuthConstants.UserKey);
    }


}
