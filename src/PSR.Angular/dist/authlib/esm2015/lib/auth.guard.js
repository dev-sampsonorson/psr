import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_TOKEN, QueryParameterNames } from '@corelib';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./services/auth.service";
import * as i2 from "@angular/router";
export class AuthGuard {
    constructor(auth, router, appConfig) {
        this.auth = auth;
        this.router = router;
        this.appConfig = appConfig;
    }
    canActivate(route, state) {
        return this.auth.isAuthenticated().pipe(tap(isAuthenticated => this.handleAuthorization(isAuthenticated, state)));
    }
    handleAuthorization(isAuthenticated, state) {
        if (!isAuthenticated) {
            this.router.navigate([this.appConfig.navigationPaths.Login], {
                queryParams: {
                    [QueryParameterNames.ReturnUrl]: state.url
                }
            });
        }
    }
}
AuthGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthGuard, deps: [{ token: i1.AuthService }, { token: i2.Router }, { token: APP_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
AuthGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.AuthService }, { type: i2.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2F1dGhsaWIvc3JjL2xpYi9hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBYyxtQkFBbUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUU3RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFTckMsTUFBTSxPQUFPLFNBQVM7SUFFbEIsWUFDWSxJQUFpQixFQUNqQixNQUFjLEVBQ1ksU0FBcUI7UUFGL0MsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ1ksY0FBUyxHQUFULFNBQVMsQ0FBWTtJQUN2RCxDQUFDO0lBRUwsV0FBVyxDQUFDLEtBQTZCLEVBQUUsS0FBMEI7UUFDakUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FDbkMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUMzRSxDQUFBO0lBQ0wsQ0FBQztJQUVPLG1CQUFtQixDQUFDLGVBQXdCLEVBQUUsS0FBMEI7UUFDNUUsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN6RCxXQUFXLEVBQUU7b0JBQ1QsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRztpQkFDN0M7YUFDSixDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7O3VHQXRCUSxTQUFTLG1FQUtOLGdCQUFnQjsyR0FMbkIsU0FBUyxjQUZOLE1BQU07NEZBRVQsU0FBUztrQkFIckIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQU1RLE1BQU07MkJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBUFBfQ09ORklHX1RPS0VOLCBJQXBwQ29uZmlnLCBRdWVyeVBhcmFtZXRlck5hbWVzIH0gZnJvbSAnQGNvcmVsaWInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgQEluamVjdChBUFBfQ09ORklHX1RPS0VOKSBwcml2YXRlIGFwcENvbmZpZzogSUFwcENvbmZpZ1xyXG4gICAgKSB7IH1cclxuXHJcbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHwgVXJsVHJlZSB8IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF1dGguaXNBdXRoZW50aWNhdGVkKCkucGlwZShcclxuICAgICAgICAgICAgdGFwKGlzQXV0aGVudGljYXRlZCA9PiB0aGlzLmhhbmRsZUF1dGhvcml6YXRpb24oaXNBdXRoZW50aWNhdGVkLCBzdGF0ZSkpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQXV0aG9yaXphdGlvbihpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW4sIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XHJcbiAgICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXBwQ29uZmlnLm5hdmlnYXRpb25QYXRocy5Mb2dpbl0sIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW1F1ZXJ5UGFyYW1ldGVyTmFtZXMuUmV0dXJuVXJsXTogc3RhdGUudXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=