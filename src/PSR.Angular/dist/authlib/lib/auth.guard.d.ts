import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { IAppConfig } from '@corelib';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import * as i0 from "@angular/core";
export declare class AuthGuard implements CanActivate {
    private auth;
    private router;
    private appConfig;
    constructor(auth: AuthService, router: Router, appConfig: IAppConfig);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;
    private handleAuthorization;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthGuard>;
}
