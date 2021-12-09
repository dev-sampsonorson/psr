import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_TOKEN, IAppConfig } from '@psr/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { AuthService } from './services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthorizeInterceptor implements HttpInterceptor {
    constructor(
        private auth: AuthService,
        @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.auth.getToken()
            .pipe(
                mergeMap(token => this.processRequestWithToken(token, req, next))
            );
    }
    private processRequestWithToken(token: string | null, req: HttpRequest<any>, next: HttpHandler) {
        // const isApiUrl = req.url.startsWith(this.env.apiUrl);
        const isApiUrl = req.url.startsWith(this.appConfig.baseUrl);
        if (!!token && isApiUrl) { //this.isSameOriginUrl(req)
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(req);
    }

    private isSameOriginUrl(req: any) {
        // It's an absolute url with the same origin.
        if (req.url.startsWith(`${window.location.origin}/`)) {
            return true;
        }

        // It's a protocol relative url with the same origin.
        // For example: //www.example.com/api/Products
        if (req.url.startsWith(`//${window.location.host}/`)) {
            return true;
        }

        // It's a relative url like /api/Products
        if (/^\/[^\/].*/.test(req.url)) {
            return true;
        }

        // It's an absolute or protocol relative url that
        // doesn't have the same origin.
        return false;
    }
}
