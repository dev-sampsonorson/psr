import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { APP_CONFIG_TOKEN, IAppConfig, QueryParameterNames } from '@corelib';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from './services/auth.service';



@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private auth: AuthService,
        private router: Router,
        @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.auth.isAuthenticated().pipe(
            tap(isAuthenticated => this.handleAuthorization(isAuthenticated, state))
        )
    }

    private handleAuthorization(isAuthenticated: boolean, state: RouterStateSnapshot) {
        if (!isAuthenticated) {
            this.router.navigate([this.appConfig.navigationPaths.Login], {
                queryParams: {
                    [QueryParameterNames.ReturnUrl]: state.url
                }
            });
        }
    }

}