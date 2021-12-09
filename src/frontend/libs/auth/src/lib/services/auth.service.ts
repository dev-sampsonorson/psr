import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  APP_CONFIG_TOKEN,
  IAppConfig,
  IUser,
  IUserRegistrationReq,
  USER_STORAGE_KEY_TOKEN,
  UserStorageService,
} from '@psr/core';
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

import { AuthEndpoints } from '../auth.constants';
import { IUserLoginReq } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private refreshTokenTimeout: any;

  constructor(
    private http: HttpClient,
    private userStorage: UserStorageService,
    private router: Router,
    @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig,
    @Inject(USER_STORAGE_KEY_TOKEN) private userStorageKey: string
  ) { }

  public isAuthenticated(): Observable<boolean> {
    return this.userStorage.getUser().pipe(
      take(1),
      map(user => !!user)
    );
  }

  public getToken(): Observable<string | null> {
    // this.retrieveUser()
    return this.userStorage.getUser().pipe(
      take(1),
      map(user => user && user.token)
    );
  }

  public login(payload: IUserLoginReq): Observable<IUser> {
    return this.http.post<IUser>(this.appConfig.getUrl(AuthEndpoints.Login), payload, { withCredentials: true }).pipe(
      // shareReplay(),
      tap(user => {
        this.userStorage.setUser(user);
        this.userStorage.storeUser(user);
        // this.userSubject.next(user);
        // this.startRefreshTokenTimer();
        // this.storeUser(user);
      })
    );
  }


  public redirectToLogin(): void {
    this.router.navigate([this.appConfig.navigationPaths.Login]);
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
        this.userStorage.setUser(null);
        // this.userSubject.next(null);

        // stop refresh token timer
        // this.startRefreshTokenTimer();

        // remove user from localStorage
        this.userStorage.removeUser();
        // this.removeUser();

        // redirect to login
        this.router.navigate([this.appConfig.navigationPaths.Login]);
      })
    ).subscribe();
  }


  public register(payload: IUserRegistrationReq): Observable<IUser> {
    return this.http.post<IUser>(this.appConfig.getUrl(AuthEndpoints.Register), payload, { withCredentials: true }).pipe(
      tap(user => {
        this.userStorage.setUser(user);
        // this.userSubject.next(user);
        // this.startRefreshTokenTimer();
        this.userStorage.storeUser(user);
        // this.storeUser(user);
      })
    );
  }

  public refreshToken() {
    return this.getToken().pipe(
      switchMap(token => this.http.post<any>(this.appConfig.getUrl(AuthEndpoints.RefreshToken), { token }, { withCredentials: true }).pipe(
        tap((user) => {
          this.userStorage.setUser(user);
          // this.userSubject.next(user);
          // this.startRefreshTokenTimer();
          this.userStorage.storeUser(user);
          // this.storeUser(user);
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

    this.userStorage.getUser()
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


}
