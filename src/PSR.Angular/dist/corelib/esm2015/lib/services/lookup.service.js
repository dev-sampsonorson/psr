import { Inject, Injectable } from '@angular/core';
import { AppEndpoints } from '../app.constants';
import { APP_CONFIG_TOKEN } from '../tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class LookupService {
    constructor(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    getCountries() {
        return this.http.get(this.appConfig.getUrl(AppEndpoints.GetCountries));
    }
}
LookupService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LookupService, deps: [{ token: i1.HttpClient }, { token: APP_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
LookupService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LookupService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LookupService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9va3VwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlbGliL3NyYy9saWIvc2VydmljZXMvbG9va3VwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBYyxNQUFNLFdBQVcsQ0FBQzs7O0FBVXpELE1BQU0sT0FBTyxhQUFhO0lBRXRCLFlBQW9CLElBQWdCLEVBQW9DLFNBQXFCO1FBQXpFLFNBQUksR0FBSixJQUFJLENBQVk7UUFBb0MsY0FBUyxHQUFULFNBQVMsQ0FBWTtJQUFJLENBQUM7SUFFM0YsWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWdCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7OzJHQU5RLGFBQWEsNENBRXdCLGdCQUFnQjsrR0FGckQsYUFBYSxjQUZWLE1BQU07NEZBRVQsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQUcwQyxNQUFNOzJCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBBcHBFbmRwb2ludHMgfSBmcm9tICcuLi9hcHAuY29uc3RhbnRzJztcclxuaW1wb3J0IHsgSUxvb2t1cEl0ZW0gfSBmcm9tICcuLi9hcHAuaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IEFQUF9DT05GSUdfVE9LRU4sIElBcHBDb25maWcgfSBmcm9tICcuLi90b2tlbnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb3VudHJ5IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9va3VwU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBASW5qZWN0KEFQUF9DT05GSUdfVE9LRU4pIHByaXZhdGUgYXBwQ29uZmlnOiBJQXBwQ29uZmlnKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q291bnRyaWVzKCk6IE9ic2VydmFibGU8SUxvb2t1cEl0ZW1bXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PElMb29rdXBJdGVtW10+KHRoaXMuYXBwQ29uZmlnLmdldFVybChBcHBFbmRwb2ludHMuR2V0Q291bnRyaWVzKSk7XHJcbiAgICB9XHJcbn1cclxuIl19