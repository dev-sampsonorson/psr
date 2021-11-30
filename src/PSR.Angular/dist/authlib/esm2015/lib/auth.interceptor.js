import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_TOKEN } from '@corelib';
import { mergeMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./services/auth.service";
export class AuthorizeInterceptor {
    constructor(auth, appConfig) {
        this.auth = auth;
        this.appConfig = appConfig;
    }
    intercept(req, next) {
        return this.auth.getToken()
            .pipe(mergeMap(token => this.processRequestWithToken(token, req, next)));
    }
    processRequestWithToken(token, req, next) {
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
    isSameOriginUrl(req) {
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
AuthorizeInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthorizeInterceptor, deps: [{ token: i1.AuthService }, { token: APP_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
AuthorizeInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthorizeInterceptor, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthorizeInterceptor, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.AuthService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2F1dGhsaWIvc3JjL2xpYi9hdXRoLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBYyxNQUFNLFVBQVUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU8xQyxNQUFNLE9BQU8sb0JBQW9CO0lBQzdCLFlBQ1ksSUFBaUIsRUFDUyxTQUFxQjtRQUQvQyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ1MsY0FBUyxHQUFULFNBQVMsQ0FBWTtJQUN2RCxDQUFDO0lBRUwsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTthQUN0QixJQUFJLENBQ0QsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FDcEUsQ0FBQztJQUNWLENBQUM7SUFDTyx1QkFBdUIsQ0FBQyxLQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBaUI7UUFDMUYsd0RBQXdEO1FBQ3hELE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBRSxFQUFFLDJCQUEyQjtZQUNsRCxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDWixVQUFVLEVBQUU7b0JBQ1IsYUFBYSxFQUFFLFVBQVUsS0FBSyxFQUFFO2lCQUNuQzthQUNKLENBQUMsQ0FBQztTQUNOO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTyxlQUFlLENBQUMsR0FBUTtRQUM1Qiw2Q0FBNkM7UUFDN0MsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsRCxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQscURBQXFEO1FBQ3JELDhDQUE4QztRQUM5QyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ2xELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCx5Q0FBeUM7UUFDekMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsaURBQWlEO1FBQ2pELGdDQUFnQztRQUNoQyxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOztrSEE5Q1Esb0JBQW9CLDZDQUdqQixnQkFBZ0I7c0hBSG5CLG9CQUFvQixjQUZqQixNQUFNOzRGQUVULG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQUlRLE1BQU07MkJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFQUF9DT05GSUdfVE9LRU4sIElBcHBDb25maWcgfSBmcm9tICdAY29yZWxpYic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aG9yaXplSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSxcclxuICAgICAgICBASW5qZWN0KEFQUF9DT05GSUdfVE9LRU4pIHByaXZhdGUgYXBwQ29uZmlnOiBJQXBwQ29uZmlnXHJcbiAgICApIHsgfVxyXG5cclxuICAgIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF1dGguZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1lcmdlTWFwKHRva2VuID0+IHRoaXMucHJvY2Vzc1JlcXVlc3RXaXRoVG9rZW4odG9rZW4sIHJlcSwgbmV4dCkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHByb2Nlc3NSZXF1ZXN0V2l0aFRva2VuKHRva2VuOiBzdHJpbmcgfCBudWxsLCByZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKSB7XHJcbiAgICAgICAgLy8gY29uc3QgaXNBcGlVcmwgPSByZXEudXJsLnN0YXJ0c1dpdGgodGhpcy5lbnYuYXBpVXJsKTtcclxuICAgICAgICBjb25zdCBpc0FwaVVybCA9IHJlcS51cmwuc3RhcnRzV2l0aCh0aGlzLmFwcENvbmZpZy5iYXNlVXJsKTtcclxuICAgICAgICBpZiAoISF0b2tlbiAmJiBpc0FwaVVybCkgeyAvL3RoaXMuaXNTYW1lT3JpZ2luVXJsKHJlcSlcclxuICAgICAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcclxuICAgICAgICAgICAgICAgIHNldEhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNTYW1lT3JpZ2luVXJsKHJlcTogYW55KSB7XHJcbiAgICAgICAgLy8gSXQncyBhbiBhYnNvbHV0ZSB1cmwgd2l0aCB0aGUgc2FtZSBvcmlnaW4uXHJcbiAgICAgICAgaWYgKHJlcS51cmwuc3RhcnRzV2l0aChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9gKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEl0J3MgYSBwcm90b2NvbCByZWxhdGl2ZSB1cmwgd2l0aCB0aGUgc2FtZSBvcmlnaW4uXHJcbiAgICAgICAgLy8gRm9yIGV4YW1wbGU6IC8vd3d3LmV4YW1wbGUuY29tL2FwaS9Qcm9kdWN0c1xyXG4gICAgICAgIGlmIChyZXEudXJsLnN0YXJ0c1dpdGgoYC8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vYCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJdCdzIGEgcmVsYXRpdmUgdXJsIGxpa2UgL2FwaS9Qcm9kdWN0c1xyXG4gICAgICAgIGlmICgvXlxcL1teXFwvXS4qLy50ZXN0KHJlcS51cmwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSXQncyBhbiBhYnNvbHV0ZSBvciBwcm90b2NvbCByZWxhdGl2ZSB1cmwgdGhhdFxyXG4gICAgICAgIC8vIGRvZXNuJ3QgaGF2ZSB0aGUgc2FtZSBvcmlnaW4uXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==