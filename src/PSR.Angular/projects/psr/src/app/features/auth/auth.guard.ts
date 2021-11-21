import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { QueryParameterNames } from '@core/app.constants';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthRoutes } from './auth.constants';
import { AuthService } from './services/auth.service';



@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private auth: AuthService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.auth.isAuthenticated().pipe(
            tap(isAuthenticated => this.handleAuthorization(isAuthenticated, state))
        )
    }

    private handleAuthorization(isAuthenticated: boolean, state: RouterStateSnapshot) {
        if (!isAuthenticated) {
            this.router.navigate(AuthRoutes.Login() as any[], {
                queryParams: {
                    [QueryParameterNames.ReturnUrl]: state.url
                }
            });
        }
    }

}