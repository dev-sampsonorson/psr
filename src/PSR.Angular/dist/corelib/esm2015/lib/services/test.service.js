import { Inject, Injectable } from '@angular/core';
import { AppEndpoints } from '../app.constants';
import { APP_CONFIG_TOKEN } from '../tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class TestService {
    constructor(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    getError() {
        return this.http.get(this.appConfig.getUrl('error/get-error'));
    }
    getTestDescription() {
        return this.http.get(this.appConfig.getUrl(AppEndpoints.GetTestDescription)).pipe(
        // shareReplay()
        );
    }
}
TestService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: TestService, deps: [{ token: i1.HttpClient }, { token: APP_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
TestService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: TestService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: TestService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZWxpYi9zcmMvbGliL3NlcnZpY2VzL3Rlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFjLE1BQU0sV0FBVyxDQUFDOzs7QUFLekQsTUFBTSxPQUFPLFdBQVc7SUFFcEIsWUFBb0IsSUFBZ0IsRUFBb0MsU0FBcUI7UUFBekUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFvQyxjQUFTLEdBQVQsU0FBUyxDQUFZO0lBQUksQ0FBQztJQUVsRyxRQUFRO1FBQ0osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELGtCQUFrQjtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3JGLGdCQUFnQjtTQUNuQixDQUFDO0lBQ04sQ0FBQzs7eUdBWlEsV0FBVyw0Q0FFMEIsZ0JBQWdCOzZHQUZyRCxXQUFXLGNBRlIsTUFBTTs0RkFFVCxXQUFXO2tCQUh2QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7MEJBRzBDLE1BQU07MkJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEFwcEVuZHBvaW50cyB9IGZyb20gJy4uL2FwcC5jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBUFBfQ09ORklHX1RPS0VOLCBJQXBwQ29uZmlnIH0gZnJvbSAnLi4vdG9rZW5zJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVzdFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgQEluamVjdChBUFBfQ09ORklHX1RPS0VOKSBwcml2YXRlIGFwcENvbmZpZzogSUFwcENvbmZpZykgeyB9XHJcblxyXG4gICAgZ2V0RXJyb3IoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwcENvbmZpZy5nZXRVcmwoJ2Vycm9yL2dldC1lcnJvcicpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUZXN0RGVzY3JpcHRpb24oKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxzdHJpbmc+KHRoaXMuYXBwQ29uZmlnLmdldFVybChBcHBFbmRwb2ludHMuR2V0VGVzdERlc2NyaXB0aW9uKSkucGlwZShcclxuICAgICAgICAgICAgLy8gc2hhcmVSZXBsYXkoKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19