import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class GlobalErrorHandlerService {
    constructor() {
        this._unauthenticatedSubject = new Subject();
        this._forbiddenSubject = new Subject();
        this._noConnectionSubject = new Subject();
        this._notFoundSubject = new Subject();
        this._httpErrorSubject = new Subject();
        this._globalErrorSubject = new Subject();
    }
    get onUnauthenticated$() {
        return this._unauthenticatedSubject.asObservable();
    }
    get onForbidden$() {
        return this._forbiddenSubject.asObservable();
    }
    get onNotFound$() {
        return this._notFoundSubject.asObservable();
    }
    get onNoConnection$() {
        return this._noConnectionSubject.asObservable();
    }
    get onHttpError$() {
        return this._httpErrorSubject.asObservable();
    }
    get onGlobalError$() {
        return this._globalErrorSubject.asObservable();
    }
    handleError(error) {
        console.log('GlobalErrorHandlerService', error);
        // Check if it's an error from an HTTP response
        if (!(error instanceof HttpErrorResponse)) {
            error = error.rejection; // get the error object
        }
        this.notifyGlobalError(error);
        /* this.zone.run(() =>
            this.alert.error(
                error?.message || 'Undefined client error',
                error?.status
            )
        ); */
        // console.error('Error from global error handler');
    }
    notifyUnauthenticated(problem) {
        this._unauthenticatedSubject.next(problem);
    }
    notifyForbidden() {
        this._forbiddenSubject.next();
    }
    notifyNotFound() {
        this._notFoundSubject.next();
    }
    notifyNoConnection() {
        this._noConnectionSubject.next();
    }
    notifyHttpError(problem) {
        this._httpErrorSubject.next(problem);
    }
    notifyGlobalError(error) {
        this._globalErrorSubject.next(error);
    }
}
GlobalErrorHandlerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: GlobalErrorHandlerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
GlobalErrorHandlerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: GlobalErrorHandlerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: GlobalErrorHandlerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWVycm9yLWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmVsaWIvc3JjL2xpYi9lcnJvci9nbG9iYWwtZXJyb3ItaGFuZGxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSy9CLE1BQU0sT0FBTyx5QkFBeUI7SUFTbEM7UUFQUSw0QkFBdUIsR0FBRyxJQUFJLE9BQU8sRUFBa0IsQ0FBQztRQUN4RCxzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ3hDLHlCQUFvQixHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDM0MscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUN2QyxzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBa0IsQ0FBQztRQUNsRCx3QkFBbUIsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO0lBRWpDLENBQUM7SUFFakIsSUFBSSxrQkFBa0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVELElBQUksWUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDWCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsSUFBSSxlQUFlO1FBQ2YsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVELElBQUksWUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDZCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVU7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRCwrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLGlCQUFpQixDQUFDLEVBQUU7WUFDdkMsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyx1QkFBdUI7U0FDbkQ7UUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUI7Ozs7O2FBS0s7UUFFTCxvREFBb0Q7SUFDeEQsQ0FBQztJQUVELHFCQUFxQixDQUFDLE9BQXVCO1FBQ3pDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELGNBQWM7UUFDVixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELGtCQUFrQjtRQUNkLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZUFBZSxDQUFDLE9BQXVCO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQVU7UUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDOzt1SEE1RVEseUJBQXlCOzJIQUF6Qix5QkFBeUI7NEZBQXpCLHlCQUF5QjtrQkFEckMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFByb2JsZW1EZXRhaWxzIH0gZnJvbSAnLi9lcnJvci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHbG9iYWxFcnJvckhhbmRsZXJTZXJ2aWNlIGltcGxlbWVudHMgRXJyb3JIYW5kbGVyIHtcblxuICAgIHByaXZhdGUgX3VuYXV0aGVudGljYXRlZFN1YmplY3QgPSBuZXcgU3ViamVjdDxQcm9ibGVtRGV0YWlscz4oKTtcbiAgICBwcml2YXRlIF9mb3JiaWRkZW5TdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgICBwcml2YXRlIF9ub0Nvbm5lY3Rpb25TdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgICBwcml2YXRlIF9ub3RGb3VuZFN1YmplY3QgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICAgIHByaXZhdGUgX2h0dHBFcnJvclN1YmplY3QgPSBuZXcgU3ViamVjdDxQcm9ibGVtRGV0YWlscz4oKTtcbiAgICBwcml2YXRlIF9nbG9iYWxFcnJvclN1YmplY3QgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgZ2V0IG9uVW5hdXRoZW50aWNhdGVkJCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VuYXV0aGVudGljYXRlZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgZ2V0IG9uRm9yYmlkZGVuJCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvcmJpZGRlblN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgZ2V0IG9uTm90Rm91bmQkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbm90Rm91bmRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIGdldCBvbk5vQ29ubmVjdGlvbiQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub0Nvbm5lY3Rpb25TdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIGdldCBvbkh0dHBFcnJvciQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwRXJyb3JTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIGdldCBvbkdsb2JhbEVycm9yJCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dsb2JhbEVycm9yU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHbG9iYWxFcnJvckhhbmRsZXJTZXJ2aWNlJywgZXJyb3IpO1xuICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGFuIGVycm9yIGZyb20gYW4gSFRUUCByZXNwb25zZVxuICAgICAgICBpZiAoIShlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSkge1xuICAgICAgICAgICAgZXJyb3IgPSBlcnJvci5yZWplY3Rpb247IC8vIGdldCB0aGUgZXJyb3Igb2JqZWN0XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGlmeUdsb2JhbEVycm9yKGVycm9yKTtcblxuICAgICAgICAvKiB0aGlzLnpvbmUucnVuKCgpID0+XG4gICAgICAgICAgICB0aGlzLmFsZXJ0LmVycm9yKFxuICAgICAgICAgICAgICAgIGVycm9yPy5tZXNzYWdlIHx8ICdVbmRlZmluZWQgY2xpZW50IGVycm9yJyxcbiAgICAgICAgICAgICAgICBlcnJvcj8uc3RhdHVzXG4gICAgICAgICAgICApXG4gICAgICAgICk7ICovXG5cbiAgICAgICAgLy8gY29uc29sZS5lcnJvcignRXJyb3IgZnJvbSBnbG9iYWwgZXJyb3IgaGFuZGxlcicpO1xuICAgIH1cblxuICAgIG5vdGlmeVVuYXV0aGVudGljYXRlZChwcm9ibGVtOiBQcm9ibGVtRGV0YWlscykge1xuICAgICAgICB0aGlzLl91bmF1dGhlbnRpY2F0ZWRTdWJqZWN0Lm5leHQocHJvYmxlbSk7XG4gICAgfVxuXG4gICAgbm90aWZ5Rm9yYmlkZGVuKCkge1xuICAgICAgICB0aGlzLl9mb3JiaWRkZW5TdWJqZWN0Lm5leHQoKTtcbiAgICB9XG5cbiAgICBub3RpZnlOb3RGb3VuZCgpIHtcbiAgICAgICAgdGhpcy5fbm90Rm91bmRTdWJqZWN0Lm5leHQoKTtcbiAgICB9XG5cbiAgICBub3RpZnlOb0Nvbm5lY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX25vQ29ubmVjdGlvblN1YmplY3QubmV4dCgpO1xuICAgIH1cblxuICAgIG5vdGlmeUh0dHBFcnJvcihwcm9ibGVtOiBQcm9ibGVtRGV0YWlscykge1xuICAgICAgICB0aGlzLl9odHRwRXJyb3JTdWJqZWN0Lm5leHQocHJvYmxlbSk7XG4gICAgfVxuXG4gICAgbm90aWZ5R2xvYmFsRXJyb3IoZXJyb3I6IGFueSkge1xuICAgICAgICB0aGlzLl9nbG9iYWxFcnJvclN1YmplY3QubmV4dChlcnJvcik7XG4gICAgfVxufVxuIl19