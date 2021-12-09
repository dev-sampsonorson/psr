import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./error-dispatcher.service";
export class GlobalErrorHandlerService {
    constructor(errorDispatcher) {
        this.errorDispatcher = errorDispatcher;
    }
    handleError(error) {
        console.log('GlobalErrorHandlerService', error);
        // Check if it's an error from an HTTP response
        if (!(error instanceof HttpErrorResponse)) {
            error = error.rejection; // get the error object
        }
        this.errorDispatcher.notifyGlobalError(error);
        /* this.zone.run(() =>
            this.alert.error(
                error?.message || 'Undefined client error',
                error?.status
            )
        ); */
        // console.error('Error from global error handler');
    }
}
GlobalErrorHandlerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: GlobalErrorHandlerService, deps: [{ token: i1.ErrorDispatcherService }], target: i0.ɵɵFactoryTarget.Injectable });
GlobalErrorHandlerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: GlobalErrorHandlerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: GlobalErrorHandlerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ErrorDispatcherService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWVycm9yLWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmVsaWIvc3JjL2xpYi9lcnJvci9nbG9iYWwtZXJyb3ItaGFuZGxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFLekQsTUFBTSxPQUFPLHlCQUF5QjtJQUVsQyxZQUNZLGVBQXVDO1FBQXZDLG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtJQUMvQyxDQUFDO0lBRUwsV0FBVyxDQUFDLEtBQVU7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRCwrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLGlCQUFpQixDQUFDLEVBQUU7WUFDdkMsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyx1QkFBdUI7U0FDbkQ7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlDOzs7OzthQUtLO1FBRUwsb0RBQW9EO0lBQ3hELENBQUM7O3VIQXZCUSx5QkFBeUI7MkhBQXpCLHlCQUF5Qjs0RkFBekIseUJBQXlCO2tCQURyQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRXJyb3JEaXNwYXRjaGVyU2VydmljZSB9IGZyb20gJy4vZXJyb3ItZGlzcGF0Y2hlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdsb2JhbEVycm9ySGFuZGxlclNlcnZpY2UgaW1wbGVtZW50cyBFcnJvckhhbmRsZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZXJyb3JEaXNwYXRjaGVyOiBFcnJvckRpc3BhdGNoZXJTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dsb2JhbEVycm9ySGFuZGxlclNlcnZpY2UnLCBlcnJvcik7XG4gICAgICAgIC8vIENoZWNrIGlmIGl0J3MgYW4gZXJyb3IgZnJvbSBhbiBIVFRQIHJlc3BvbnNlXG4gICAgICAgIGlmICghKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICBlcnJvciA9IGVycm9yLnJlamVjdGlvbjsgLy8gZ2V0IHRoZSBlcnJvciBvYmplY3RcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXJyb3JEaXNwYXRjaGVyLm5vdGlmeUdsb2JhbEVycm9yKGVycm9yKTtcblxuICAgICAgICAvKiB0aGlzLnpvbmUucnVuKCgpID0+XG4gICAgICAgICAgICB0aGlzLmFsZXJ0LmVycm9yKFxuICAgICAgICAgICAgICAgIGVycm9yPy5tZXNzYWdlIHx8ICdVbmRlZmluZWQgY2xpZW50IGVycm9yJyxcbiAgICAgICAgICAgICAgICBlcnJvcj8uc3RhdHVzXG4gICAgICAgICAgICApXG4gICAgICAgICk7ICovXG5cbiAgICAgICAgLy8gY29uc29sZS5lcnJvcignRXJyb3IgZnJvbSBnbG9iYWwgZXJyb3IgaGFuZGxlcicpO1xuICAgIH1cbn1cbiJdfQ==