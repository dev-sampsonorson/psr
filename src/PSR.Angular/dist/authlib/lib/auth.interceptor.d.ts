import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { IAppConfig } from '@corelib';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import * as i0 from "@angular/core";
export declare class AuthorizeInterceptor implements HttpInterceptor {
    private auth;
    private appConfig;
    constructor(auth: AuthService, appConfig: IAppConfig);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private processRequestWithToken;
    private isSameOriginUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthorizeInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthorizeInterceptor>;
}
