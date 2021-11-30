import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_TOKEN, USER_STORAGE_KEY_TOKEN, } from '@corelib';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { AuthEndpoints } from '../auth.constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@corelib";
import * as i3 from "@angular/router";
export class AuthService {
    constructor(http, userStorage, router, appConfig, userStorageKey) {
        this.http = http;
        this.userStorage = userStorage;
        this.router = router;
        this.appConfig = appConfig;
        this.userStorageKey = userStorageKey;
    }
    isAuthenticated() {
        return this.userStorage.getUser().pipe(take(1), map(user => !!user));
    }
    getToken() {
        // this.retrieveUser()
        return this.userStorage.getUser().pipe(take(1), map(user => user && user.token));
    }
    login(payload) {
        return this.http.post(this.appConfig.getUrl(AuthEndpoints.Login), payload, { withCredentials: true }).pipe(
        // shareReplay(),
        tap(user => {
            this.userStorage.setUser(user);
            this.userStorage.storeUser(user);
            // this.userSubject.next(user);
            // this.startRefreshTokenTimer();
            // this.storeUser(user);
        }));
    }
    redirectToLogin() {
        this.router.navigate([this.appConfig.navigationPaths.Login]);
    }
    logout() {
        // this.userSubject.next(null);
        // logout from server
        // pass refresh token if you can
        // console.log('logging out...');
        return this.http.post(this.appConfig.getUrl(AuthEndpoints.RevokeToken), {}, { withCredentials: true }).pipe(
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
        })).subscribe();
    }
    register(payload) {
        return this.http.post(this.appConfig.getUrl(AuthEndpoints.Register), payload, { withCredentials: true }).pipe(tap(user => {
            this.userStorage.setUser(user);
            // this.userSubject.next(user);
            // this.startRefreshTokenTimer();
            this.userStorage.storeUser(user);
            // this.storeUser(user);
        }));
    }
    refreshToken() {
        return this.getToken().pipe(switchMap(token => this.http.post(this.appConfig.getUrl(AuthEndpoints.RefreshToken), { token }, { withCredentials: true }).pipe(tap((user) => {
            this.userStorage.setUser(user);
            // this.userSubject.next(user);
            // this.startRefreshTokenTimer();
            this.userStorage.storeUser(user);
            // this.storeUser(user);
        }))));
    }
    checkEmailExists(email) {
        return this.http.post(this.appConfig.getUrl(AuthEndpoints.CheckEmailExists), {
            email: email
        });
    }
    startRefreshTokenTimer() {
        this.userStorage.getUser()
            .pipe(take(1))
            .subscribe(user => {
            // parse json object from base64 encoded jwt token
            const jwtToken = user && JSON.parse(atob(user.token.split('.')[1]));
            if (!jwtToken)
                return;
            // set a timeout to refresh the token a minute before it expires
            const expires = new Date(jwtToken.exp * 1000);
            const timeout = expires.getTime() - Date.now() - (60 * 1000);
            this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
        });
    }
    stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthService, deps: [{ token: i1.HttpClient }, { token: i2.UserStorageService }, { token: i3.Router }, { token: APP_CONFIG_TOKEN }, { token: USER_STORAGE_KEY_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.UserStorageService }, { type: i3.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [USER_STORAGE_KEY_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXV0aGxpYi9zcmMvbGliL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQ0gsZ0JBQWdCLEVBSWhCLHNCQUFzQixHQUV6QixNQUFNLFVBQVUsQ0FBQztBQUVsQixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztBQU1sRCxNQUFNLE9BQU8sV0FBVztJQUdwQixZQUNZLElBQWdCLEVBQ2hCLFdBQStCLEVBQy9CLE1BQWMsRUFDWSxTQUFxQixFQUNmLGNBQXNCO1FBSnRELFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDWSxjQUFTLEdBQVQsU0FBUyxDQUFZO1FBQ2YsbUJBQWMsR0FBZCxjQUFjLENBQVE7SUFDOUQsQ0FBQztJQUVFLGVBQWU7UUFDbEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDbEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FDdEIsQ0FBQztJQUNOLENBQUM7SUFFTSxRQUFRO1FBQ1gsc0JBQXNCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQ2xDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUs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LE9BQU8sQ0FBQyxDQUFDO1FBQzFGLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUVPLHFCQUFxQjtRQUN6QixZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDM0MsQ0FBQzs7eUdBNUhRLFdBQVcsb0dBT1IsZ0JBQWdCLGFBQ2hCLHNCQUFzQjs2R0FSekIsV0FBVyxjQUZSLE1BQU07NEZBRVQsV0FBVztrQkFIdkIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQVFRLE1BQU07MkJBQUMsZ0JBQWdCOzswQkFDdkIsTUFBTTsyQkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtcclxuICAgIEFQUF9DT05GSUdfVE9LRU4sXHJcbiAgICBJQXBwQ29uZmlnLFxyXG4gICAgSVVzZXIsXHJcbiAgICBJVXNlclJlZ2lzdHJhdGlvblJlcSxcclxuICAgIFVTRVJfU1RPUkFHRV9LRVlfVE9LRU4sXHJcbiAgICBVc2VyU3RvcmFnZVNlcnZpY2UsXHJcbn0gZnJvbSAnQGNvcmVsaWInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBBdXRoRW5kcG9pbnRzIH0gZnJvbSAnLi4vYXV0aC5jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBJVXNlckxvZ2luUmVxIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSByZWZyZXNoVG9rZW5UaW1lb3V0OiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByaXZhdGUgdXNlclN0b3JhZ2U6IFVzZXJTdG9yYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIEBJbmplY3QoQVBQX0NPTkZJR19UT0tFTikgcHJpdmF0ZSBhcHBDb25maWc6IElBcHBDb25maWcsXHJcbiAgICAgICAgQEluamVjdChVU0VSX1NUT1JBR0VfS0VZX1RPS0VOKSBwcml2YXRlIHVzZXJTdG9yYWdlS2V5OiBzdHJpbmdcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIGlzQXV0aGVudGljYXRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyU3RvcmFnZS5nZXRVc2VyKCkucGlwZShcclxuICAgICAgICAgICAgdGFrZSgxKSxcclxuICAgICAgICAgICAgbWFwKHVzZXIgPT4gISF1c2VyKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRva2VuKCk6IE9ic2VydmFibGU8c3RyaW5nIHwgbnVsbD4ge1xyXG4gICAgICAgIC8vIHRoaXMucmV0cmlldmVVc2VyKClcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyU3RvcmFnZS5nZXRVc2VyKCkucGlwZShcclxuICAgICAgICAgICAgdGFrZSgxKSxcclxuICAgICAgICAgICAgbWFwKHVzZXIgPT4gdXNlciAmJiB1c2VyLnRva2VuKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ2luKHBheWxvYWQ6IElVc2VyTG9naW5SZXEpOiBPYnNlcnZhYmxlPElVc2VyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PElVc2VyPih0aGlzLmFwcENvbmZpZy5nZXRVcmwoQXV0aEVuZHBvaW50cy5Mb2dpbiksIHBheWxvYWQsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnBpcGUoXHJcbiAgICAgICAgICAgIC8vIHNoYXJlUmVwbGF5KCksXHJcbiAgICAgICAgICAgIHRhcCh1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlclN0b3JhZ2Uuc2V0VXNlcih1c2VyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlclN0b3JhZ2Uuc3RvcmVVc2VyKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51c2VyU3ViamVjdC5uZXh0KHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdGFydFJlZnJlc2hUb2tlblRpbWVyKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0b3JlVXNlcih1c2VyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVkaXJlY3RUb0xvZ2luKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmFwcENvbmZpZy5uYXZpZ2F0aW9uUGF0aHMuTG9naW5dKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nb3V0KCkge1xyXG4gICAgICAgIC8vIHRoaXMudXNlclN1YmplY3QubmV4dChudWxsKTtcclxuICAgICAgICAvLyBsb2dvdXQgZnJvbSBzZXJ2ZXJcclxuICAgICAgICAvLyBwYXNzIHJlZnJlc2ggdG9rZW4gaWYgeW91IGNhblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdsb2dnaW5nIG91dC4uLicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuYXBwQ29uZmlnLmdldFVybChBdXRoRW5kcG9pbnRzLlJldm9rZVRva2VuKSwge30sIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnBpcGUoXHJcbiAgICAgICAgICAgIC8vIHNoYXJlUmVwbGF5KCksXHJcbiAgICAgICAgICAgIHRhcCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZW1pdCBudWxsIGFzIG5leHQgdXNlclxyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU3RvcmFnZS5zZXRVc2VyKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51c2VyU3ViamVjdC5uZXh0KG51bGwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHN0b3AgcmVmcmVzaCB0b2tlbiB0aW1lclxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdGFydFJlZnJlc2hUb2tlblRpbWVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHVzZXIgZnJvbSBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlclN0b3JhZ2UucmVtb3ZlVXNlcigpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yZW1vdmVVc2VyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVkaXJlY3QgdG8gbG9naW5cclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmFwcENvbmZpZy5uYXZpZ2F0aW9uUGF0aHMuTG9naW5dKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXIocGF5bG9hZDogSVVzZXJSZWdpc3RyYXRpb25SZXEpOiBPYnNlcnZhYmxlPElVc2VyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PElVc2VyPih0aGlzLmFwcENvbmZpZy5nZXRVcmwoQXV0aEVuZHBvaW50cy5SZWdpc3RlciksIHBheWxvYWQsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcCh1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlclN0b3JhZ2Uuc2V0VXNlcih1c2VyKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudXNlclN1YmplY3QubmV4dCh1c2VyKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhcnRSZWZyZXNoVG9rZW5UaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU3RvcmFnZS5zdG9yZVVzZXIodXNlcik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0b3JlVXNlcih1c2VyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWZyZXNoVG9rZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oKS5waXBlKFxyXG4gICAgICAgICAgICBzd2l0Y2hNYXAodG9rZW4gPT4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLmFwcENvbmZpZy5nZXRVcmwoQXV0aEVuZHBvaW50cy5SZWZyZXNoVG9rZW4pLCB7IHRva2VuIH0sIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YXAoKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJTdG9yYWdlLnNldFVzZXIodXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy51c2VyU3ViamVjdC5uZXh0KHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhcnRSZWZyZXNoVG9rZW5UaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclN0b3JhZ2Uuc3RvcmVVc2VyKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RvcmVVc2VyKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrRW1haWxFeGlzdHMoZW1haWw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBwQ29uZmlnLmdldFVybChBdXRoRW5kcG9pbnRzLkNoZWNrRW1haWxFeGlzdHMpLCB7XHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRSZWZyZXNoVG9rZW5UaW1lcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy51c2VyU3RvcmFnZS5nZXRVc2VyKClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YWtlKDEpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHBhcnNlIGpzb24gb2JqZWN0IGZyb20gYmFzZTY0IGVuY29kZWQgand0IHRva2VuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBqd3RUb2tlbiA9IHVzZXIgJiYgSlNPTi5wYXJzZShhdG9iKHVzZXIudG9rZW4uc3BsaXQoJy4nKVsxXSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghand0VG9rZW4pIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgYSB0aW1lb3V0IHRvIHJlZnJlc2ggdGhlIHRva2VuIGEgbWludXRlIGJlZm9yZSBpdCBleHBpcmVzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHBpcmVzID0gbmV3IERhdGUoand0VG9rZW4uZXhwICogMTAwMCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lb3V0ID0gZXhwaXJlcy5nZXRUaW1lKCkgLSBEYXRlLm5vdygpIC0gKDYwICogMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hUb2tlblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVmcmVzaFRva2VuKCkuc3Vic2NyaWJlKCksIHRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9wUmVmcmVzaFRva2VuVGltZXIoKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVmcmVzaFRva2VuVGltZW91dCk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=