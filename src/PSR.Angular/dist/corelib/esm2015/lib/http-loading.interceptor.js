import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class HttpLoadingInterceptor {
    // private loadingDialogService: LoadingDialogService
    constructor() { }
    intercept(request, next) {
        // console.log('loading...');
        //   this.loadingDialogService.openDialog();
        return next.handle(request).pipe(finalize(() => {
            //   this.loadingDialogService.hideDialog();
            // console.log('complete!!!!');
        }));
    }
}
HttpLoadingInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HttpLoadingInterceptor, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
HttpLoadingInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HttpLoadingInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HttpLoadingInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1sb2FkaW5nLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZWxpYi9zcmMvbGliL2h0dHAtbG9hZGluZy5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHMUMsTUFBTSxPQUFPLHNCQUFzQjtJQUMvQixxREFBcUQ7SUFDckQsZ0JBQWdCLENBQUM7SUFFakIsU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7UUFDbEQsNkJBQTZCO1FBQzdCLDRDQUE0QztRQUM1QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM1QixRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ1YsNENBQTRDO1lBQzVDLCtCQUErQjtRQUNuQyxDQUFDLENBQUMsQ0FDeUIsQ0FBQztJQUNwQyxDQUFDOztvSEFiUSxzQkFBc0I7d0hBQXRCLHNCQUFzQjs0RkFBdEIsc0JBQXNCO2tCQURsQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cExvYWRpbmdJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgICAvLyBwcml2YXRlIGxvYWRpbmdEaWFsb2dTZXJ2aWNlOiBMb2FkaW5nRGlhbG9nU2VydmljZVxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2xvYWRpbmcuLi4nKTtcclxuICAgICAgICAvLyAgIHRoaXMubG9hZGluZ0RpYWxvZ1NlcnZpY2Uub3BlbkRpYWxvZygpO1xyXG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxyXG4gICAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgIHRoaXMubG9hZGluZ0RpYWxvZ1NlcnZpY2UuaGlkZURpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbXBsZXRlISEhIScpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICkgYXMgT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj47XHJcbiAgICB9XHJcbn0iXX0=