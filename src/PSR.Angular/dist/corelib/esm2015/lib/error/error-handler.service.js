import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../services";
import * as i2 from "./global-error-handler.service";
export class ErrorHandlerService {
    constructor(userStorage, globalError) {
        this.userStorage = userStorage;
        this.globalError = globalError;
    }
    handleError(response) {
        const problem = response.error && response.error;
        this.userStorage.getUser()
            .pipe(take(1), filter(_ => [401, 403].includes(response.status)), map(user => ({ user, status: response.status })), tap(x => {
            if (x.user === null && x.status === 401) {
                this.globalError.notifyUnauthenticated(problem);
                // this.auth.logout();
                // this.auth.redirectToLogin();
            }
            // x.user === null && [401, 403].includes(x.status) && this.auth.redirectToLogin();
            // x.user === null && [401, 403].includes(x.status) && this.auth.logout();
        }), 
        /* tap(x => {
            x.user !== null && x.status === 401 && this.auth.logout();
        }), */
        tap(x => {
            if (x.user !== null && x.status === 403) {
                this.globalError.notifyForbidden();
            }
            /* this.zone.run(() => {
                (x.user !== null && x.status === 403) && this.alert.warn(
                    'Unauthorized',
                    'Not authorized to peform the action'
                );
            }) */
        }))
            .subscribe();
        if (response.status === 0) {
            this.globalError.notifyNoConnection();
            /* this.alert.error(
                "No connection",
                "Unable to connect to the server. You're probably offline or sever unreachable."
            ); */
        }
        /* if (this.isProblemDetail(problem)) {
            console.log(problem);
        } */
        // console.log('problem instanceof ProblemDetails', problem instanceof ProblemDetails);
        /* if (!(problem instanceof ProblemDetails)) {
            console.error('Request does not return a problem detail, find out why');
            console.log(problem);
        } */
        if (response.status === 404)
            this.globalError.notifyNotFound();
        /* [404].includes(response.status) && this.zone.run(() => {
            this.alert.error(
                "Not found",
                "We could not find the resource you requested."
            );
        }); */
        if (![401, 403, 404, 0].includes(response.status)) {
            this.globalError.notifyHttpError(problem);
        }
        /* ![401, 403, 404, 0].includes(response.status) && this.zone.run(() => {
            //TODO: ExpressionChangedAfterItHasBeenCheckedError
            // let kkk = this.extractMessages(problem);
            console.log('problem', problem);

            // this.alert.error(
            //     problem?.title || 'Error',
            //     this.extractMessages(problem) || problem.detail
            // );
        }); */
        return throwError({
            success: false,
            status: response.status,
            statusText: response.statusText,
            message: response.message,
            error: response.error
        });
    }
    isProblemDetail(problem) {
        return problem && "type" in problem
            && "title" in problem
            && "status" in problem
            && "detail" in problem
            && "instance" in problem;
    }
    extractMessages(problem) {
        var _a;
        return this.isProblemDetail(problem)
            ? (((_a = problem === null || problem === void 0 ? void 0 : problem.errors) === null || _a === void 0 ? void 0 : _a.map(x => ({ message: x.message }))) || problem.detail)
            : 'An error has occured contact the administrator';
    }
}
ErrorHandlerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ErrorHandlerService, deps: [{ token: i1.UserStorageService }, { token: i2.GlobalErrorHandlerService }], target: i0.ɵɵFactoryTarget.Injectable });
ErrorHandlerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ErrorHandlerService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ErrorHandlerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.UserStorageService }, { type: i2.GlobalErrorHandlerService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZWxpYi9zcmMvbGliL2Vycm9yL2Vycm9yLWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBbUIsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVN4RCxNQUFNLE9BQU8sbUJBQW1CO0lBRTVCLFlBQ1ksV0FBK0IsRUFDL0IsV0FBc0M7UUFEdEMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLGdCQUFXLEdBQVgsV0FBVyxDQUEyQjtJQUM5QyxDQUFDO0lBRUwsV0FBVyxDQUFDLFFBQTJCO1FBQ25DLE1BQU0sT0FBTyxHQUFtQixRQUFRLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUF1QixDQUFDO1FBRW5GLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO2FBQ3JCLElBQUksQ0FDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUNqRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUNoRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDSixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxzQkFBc0I7Z0JBQ3RCLCtCQUErQjthQUNsQztZQUNELG1GQUFtRjtZQUNuRiwwRUFBMEU7UUFDOUUsQ0FBQyxDQUFDO1FBQ0Y7O2NBRU07UUFDTixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDSixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3RDO1lBQ0Q7Ozs7O2lCQUtLO1FBQ1QsQ0FBQyxDQUFDLENBQ0w7YUFDQSxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUN0Qzs7O2lCQUdLO1NBQ1I7UUFHRDs7WUFFSTtRQUVKLHVGQUF1RjtRQUN2Rjs7O1lBR0k7UUFFSixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRztZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRDOzs7OztjQUtNO1FBRU4sSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QztRQUVEOzs7Ozs7Ozs7Y0FTTTtRQUVOLE9BQU8sVUFBVSxDQUFDO1lBQ2QsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU07WUFDdkIsVUFBVSxFQUFFLFFBQVEsQ0FBQyxVQUFVO1lBQy9CLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTztZQUN6QixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7U0FDeEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLGVBQWUsQ0FBQyxPQUFZO1FBQ2hDLE9BQU8sT0FBTyxJQUFJLE1BQU0sSUFBSSxPQUFPO2VBQzVCLE9BQU8sSUFBSSxPQUFPO2VBQ2xCLFFBQVEsSUFBSSxPQUFPO2VBQ25CLFFBQVEsSUFBSSxPQUFPO2VBQ25CLFVBQVUsSUFBSSxPQUFPLENBQUM7SUFDakMsQ0FBQztJQUVPLGVBQWUsQ0FBQyxPQUF1Qjs7UUFDM0MsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQyxDQUFBLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sMENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxLQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDekUsQ0FBQyxDQUFDLGdEQUFnRCxDQUFDO0lBQzNELENBQUM7O2lIQTFHUSxtQkFBbUI7cUhBQW5CLG1CQUFtQixjQUZoQixNQUFNOzRGQUVULG1CQUFtQjtrQkFIL0IsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFVzZXJTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgUHJvYmxlbURldGFpbHMgfSBmcm9tICcuL2Vycm9yLm1vZGVsJztcclxuaW1wb3J0IHsgR2xvYmFsRXJyb3JIYW5kbGVyU2VydmljZSB9IGZyb20gJy4vZ2xvYmFsLWVycm9yLWhhbmRsZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVycm9ySGFuZGxlclNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgdXNlclN0b3JhZ2U6IFVzZXJTdG9yYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGdsb2JhbEVycm9yOiBHbG9iYWxFcnJvckhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcihyZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiBPYnNlcnZhYmxlSW5wdXQ8YW55PiB7XHJcbiAgICAgICAgY29uc3QgcHJvYmxlbTogUHJvYmxlbURldGFpbHMgPSByZXNwb25zZS5lcnJvciAmJiByZXNwb25zZS5lcnJvciBhcyBQcm9ibGVtRGV0YWlscztcclxuXHJcbiAgICAgICAgdGhpcy51c2VyU3RvcmFnZS5nZXRVc2VyKClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YWtlKDEpLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyKF8gPT4gWzQwMSwgNDAzXS5pbmNsdWRlcyhyZXNwb25zZS5zdGF0dXMpKSxcclxuICAgICAgICAgICAgICAgIG1hcCh1c2VyID0+ICh7IHVzZXIsIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzIH0pKSxcclxuICAgICAgICAgICAgICAgIHRhcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeC51c2VyID09PSBudWxsICYmIHguc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxFcnJvci5ub3RpZnlVbmF1dGhlbnRpY2F0ZWQocHJvYmxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYXV0aC5sb2dvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5hdXRoLnJlZGlyZWN0VG9Mb2dpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB4LnVzZXIgPT09IG51bGwgJiYgWzQwMSwgNDAzXS5pbmNsdWRlcyh4LnN0YXR1cykgJiYgdGhpcy5hdXRoLnJlZGlyZWN0VG9Mb2dpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHgudXNlciA9PT0gbnVsbCAmJiBbNDAxLCA0MDNdLmluY2x1ZGVzKHguc3RhdHVzKSAmJiB0aGlzLmF1dGgubG9nb3V0KCk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIC8qIHRhcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB4LnVzZXIgIT09IG51bGwgJiYgeC5zdGF0dXMgPT09IDQwMSAmJiB0aGlzLmF1dGgubG9nb3V0KCk7XHJcbiAgICAgICAgICAgICAgICB9KSwgKi9cclxuICAgICAgICAgICAgICAgIHRhcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeC51c2VyICE9PSBudWxsICYmIHguc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxFcnJvci5ub3RpZnlGb3JiaWRkZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLyogdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh4LnVzZXIgIT09IG51bGwgJiYgeC5zdGF0dXMgPT09IDQwMykgJiYgdGhpcy5hbGVydC53YXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1VuYXV0aG9yaXplZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTm90IGF1dGhvcml6ZWQgdG8gcGVmb3JtIHRoZSBhY3Rpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkgKi9cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgpO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsRXJyb3Iubm90aWZ5Tm9Db25uZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIC8qIHRoaXMuYWxlcnQuZXJyb3IoXHJcbiAgICAgICAgICAgICAgICBcIk5vIGNvbm5lY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIFwiVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIHNlcnZlci4gWW91J3JlIHByb2JhYmx5IG9mZmxpbmUgb3Igc2V2ZXIgdW5yZWFjaGFibGUuXCJcclxuICAgICAgICAgICAgKTsgKi9cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvKiBpZiAodGhpcy5pc1Byb2JsZW1EZXRhaWwocHJvYmxlbSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvYmxlbSk7XHJcbiAgICAgICAgfSAqL1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncHJvYmxlbSBpbnN0YW5jZW9mIFByb2JsZW1EZXRhaWxzJywgcHJvYmxlbSBpbnN0YW5jZW9mIFByb2JsZW1EZXRhaWxzKTtcclxuICAgICAgICAvKiBpZiAoIShwcm9ibGVtIGluc3RhbmNlb2YgUHJvYmxlbURldGFpbHMpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlcXVlc3QgZG9lcyBub3QgcmV0dXJuIGEgcHJvYmxlbSBkZXRhaWwsIGZpbmQgb3V0IHdoeScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9ibGVtKTtcclxuICAgICAgICB9ICovXHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNClcclxuICAgICAgICAgICAgdGhpcy5nbG9iYWxFcnJvci5ub3RpZnlOb3RGb3VuZCgpO1xyXG5cclxuICAgICAgICAvKiBbNDA0XS5pbmNsdWRlcyhyZXNwb25zZS5zdGF0dXMpICYmIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0LmVycm9yKFxyXG4gICAgICAgICAgICAgICAgXCJOb3QgZm91bmRcIixcclxuICAgICAgICAgICAgICAgIFwiV2UgY291bGQgbm90IGZpbmQgdGhlIHJlc291cmNlIHlvdSByZXF1ZXN0ZWQuXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTsgKi9cclxuXHJcbiAgICAgICAgaWYgKCFbNDAxLCA0MDMsIDQwNCwgMF0uaW5jbHVkZXMocmVzcG9uc2Uuc3RhdHVzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdsb2JhbEVycm9yLm5vdGlmeUh0dHBFcnJvcihwcm9ibGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qICFbNDAxLCA0MDMsIDQwNCwgMF0uaW5jbHVkZXMocmVzcG9uc2Uuc3RhdHVzKSAmJiB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy9UT0RPOiBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yXHJcbiAgICAgICAgICAgIC8vIGxldCBra2sgPSB0aGlzLmV4dHJhY3RNZXNzYWdlcyhwcm9ibGVtKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2JsZW0nLCBwcm9ibGVtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuYWxlcnQuZXJyb3IoXHJcbiAgICAgICAgICAgIC8vICAgICBwcm9ibGVtPy50aXRsZSB8fCAnRXJyb3InLFxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5leHRyYWN0TWVzc2FnZXMocHJvYmxlbSkgfHwgcHJvYmxlbS5kZXRhaWxcclxuICAgICAgICAgICAgLy8gKTtcclxuICAgICAgICB9KTsgKi9cclxuXHJcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3Ioe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXHJcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGVycm9yOiByZXNwb25zZS5lcnJvclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNQcm9ibGVtRGV0YWlsKHByb2JsZW06IGFueSkge1xyXG4gICAgICAgIHJldHVybiBwcm9ibGVtICYmIFwidHlwZVwiIGluIHByb2JsZW1cclxuICAgICAgICAgICAgJiYgXCJ0aXRsZVwiIGluIHByb2JsZW1cclxuICAgICAgICAgICAgJiYgXCJzdGF0dXNcIiBpbiBwcm9ibGVtXHJcbiAgICAgICAgICAgICYmIFwiZGV0YWlsXCIgaW4gcHJvYmxlbVxyXG4gICAgICAgICAgICAmJiBcImluc3RhbmNlXCIgaW4gcHJvYmxlbTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4dHJhY3RNZXNzYWdlcyhwcm9ibGVtOiBQcm9ibGVtRGV0YWlscykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzUHJvYmxlbURldGFpbChwcm9ibGVtKVxyXG4gICAgICAgICAgICA/IChwcm9ibGVtPy5lcnJvcnM/Lm1hcCh4ID0+ICh7IG1lc3NhZ2U6IHgubWVzc2FnZSB9KSkgfHwgcHJvYmxlbS5kZXRhaWwpXHJcbiAgICAgICAgICAgIDogJ0FuIGVycm9yIGhhcyBvY2N1cmVkIGNvbnRhY3QgdGhlIGFkbWluaXN0cmF0b3InO1xyXG4gICAgfVxyXG59Il19