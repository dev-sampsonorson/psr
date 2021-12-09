import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../services";
import * as i2 from "./error-dispatcher.service";
export class ErrorHandlerService {
    constructor(userStorage, errorDispatcher) {
        this.userStorage = userStorage;
        this.errorDispatcher = errorDispatcher;
    }
    handleError(response) {
        const problem = response.error && response.error;
        this.userStorage.getUser()
            .pipe(take(1), filter(_ => [401, 403].includes(response.status)), map(user => ({ user, status: response.status })), tap(x => {
            if (x.user === null && x.status === 401) {
                this.errorDispatcher.notifyUnauthenticated(problem);
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
                this.errorDispatcher.notifyForbidden();
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
            this.errorDispatcher.notifyNoConnection();
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
            this.errorDispatcher.notifyNotFound();
        /* [404].includes(response.status) && this.zone.run(() => {
            this.alert.error(
                "Not found",
                "We could not find the resource you requested."
            );
        }); */
        if (![401, 403, 404, 0].includes(response.status)) {
            this.errorDispatcher.notifyHttpError(problem);
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
ErrorHandlerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ErrorHandlerService, deps: [{ token: i1.UserStorageService }, { token: i2.ErrorDispatcherService }], target: i0.ɵɵFactoryTarget.Injectable });
ErrorHandlerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ErrorHandlerService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ErrorHandlerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.UserStorageService }, { type: i2.ErrorDispatcherService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZWxpYi9zcmMvbGliL2Vycm9yL2Vycm9yLWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBbUIsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVN4RCxNQUFNLE9BQU8sbUJBQW1CO0lBRTVCLFlBQ1ksV0FBK0IsRUFDL0IsZUFBdUM7UUFEdkMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtJQUMvQyxDQUFDO0lBRUwsV0FBVyxDQUFDLFFBQTJCO1FBQ25DLE1BQU0sT0FBTyxHQUFtQixRQUFRLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUF1QixDQUFDO1FBRW5GLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO2FBQ3JCLElBQUksQ0FDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUNqRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUNoRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDSixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNwRCxzQkFBc0I7Z0JBQ3RCLCtCQUErQjthQUNsQztZQUNELG1GQUFtRjtZQUNuRiwwRUFBMEU7UUFDOUUsQ0FBQyxDQUFDO1FBQ0Y7O2NBRU07UUFDTixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDSixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzFDO1lBQ0Q7Ozs7O2lCQUtLO1FBQ1QsQ0FBQyxDQUFDLENBQ0w7YUFDQSxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQzs7O2lCQUdLO1NBQ1I7UUFHRDs7WUFFSTtRQUVKLHVGQUF1RjtRQUN2Rjs7O1lBR0k7UUFFSixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRztZQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTFDOzs7OztjQUtNO1FBRU4sSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqRDtRQUVEOzs7Ozs7Ozs7Y0FTTTtRQUVOLE9BQU8sVUFBVSxDQUFDO1lBQ2QsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU07WUFDdkIsVUFBVSxFQUFFLFFBQVEsQ0FBQyxVQUFVO1lBQy9CLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTztZQUN6QixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7U0FDeEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLGVBQWUsQ0FBQyxPQUFZO1FBQ2hDLE9BQU8sT0FBTyxJQUFJLE1BQU0sSUFBSSxPQUFPO2VBQzVCLE9BQU8sSUFBSSxPQUFPO2VBQ2xCLFFBQVEsSUFBSSxPQUFPO2VBQ25CLFFBQVEsSUFBSSxPQUFPO2VBQ25CLFVBQVUsSUFBSSxPQUFPLENBQUM7SUFDakMsQ0FBQztJQUVPLGVBQWUsQ0FBQyxPQUF1Qjs7UUFDM0MsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQyxDQUFBLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sMENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxLQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDekUsQ0FBQyxDQUFDLGdEQUFnRCxDQUFDO0lBQzNELENBQUM7O2lIQTFHUSxtQkFBbUI7cUhBQW5CLG1CQUFtQixjQUZoQixNQUFNOzRGQUVULG1CQUFtQjtrQkFIL0IsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFVzZXJTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgRXJyb3JEaXNwYXRjaGVyU2VydmljZSB9IGZyb20gJy4vZXJyb3ItZGlzcGF0Y2hlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvYmxlbURldGFpbHMgfSBmcm9tICcuL2Vycm9yLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRXJyb3JIYW5kbGVyU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSB1c2VyU3RvcmFnZTogVXNlclN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZXJyb3JEaXNwYXRjaGVyOiBFcnJvckRpc3BhdGNoZXJTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIGhhbmRsZUVycm9yKHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSk6IE9ic2VydmFibGVJbnB1dDxhbnk+IHtcclxuICAgICAgICBjb25zdCBwcm9ibGVtOiBQcm9ibGVtRGV0YWlscyA9IHJlc3BvbnNlLmVycm9yICYmIHJlc3BvbnNlLmVycm9yIGFzIFByb2JsZW1EZXRhaWxzO1xyXG5cclxuICAgICAgICB0aGlzLnVzZXJTdG9yYWdlLmdldFVzZXIoKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIHRha2UoMSksXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIoXyA9PiBbNDAxLCA0MDNdLmluY2x1ZGVzKHJlc3BvbnNlLnN0YXR1cykpLFxyXG4gICAgICAgICAgICAgICAgbWFwKHVzZXIgPT4gKHsgdXNlciwgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMgfSkpLFxyXG4gICAgICAgICAgICAgICAgdGFwKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4LnVzZXIgPT09IG51bGwgJiYgeC5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yRGlzcGF0Y2hlci5ub3RpZnlVbmF1dGhlbnRpY2F0ZWQocHJvYmxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYXV0aC5sb2dvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5hdXRoLnJlZGlyZWN0VG9Mb2dpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB4LnVzZXIgPT09IG51bGwgJiYgWzQwMSwgNDAzXS5pbmNsdWRlcyh4LnN0YXR1cykgJiYgdGhpcy5hdXRoLnJlZGlyZWN0VG9Mb2dpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHgudXNlciA9PT0gbnVsbCAmJiBbNDAxLCA0MDNdLmluY2x1ZGVzKHguc3RhdHVzKSAmJiB0aGlzLmF1dGgubG9nb3V0KCk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIC8qIHRhcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB4LnVzZXIgIT09IG51bGwgJiYgeC5zdGF0dXMgPT09IDQwMSAmJiB0aGlzLmF1dGgubG9nb3V0KCk7XHJcbiAgICAgICAgICAgICAgICB9KSwgKi9cclxuICAgICAgICAgICAgICAgIHRhcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeC51c2VyICE9PSBudWxsICYmIHguc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvckRpc3BhdGNoZXIubm90aWZ5Rm9yYmlkZGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8qIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoeC51c2VyICE9PSBudWxsICYmIHguc3RhdHVzID09PSA0MDMpICYmIHRoaXMuYWxlcnQud2FybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdVbmF1dGhvcml6ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05vdCBhdXRob3JpemVkIHRvIHBlZm9ybSB0aGUgYWN0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pICovXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yRGlzcGF0Y2hlci5ub3RpZnlOb0Nvbm5lY3Rpb24oKTtcclxuICAgICAgICAgICAgLyogdGhpcy5hbGVydC5lcnJvcihcclxuICAgICAgICAgICAgICAgIFwiTm8gY29ubmVjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgc2VydmVyLiBZb3UncmUgcHJvYmFibHkgb2ZmbGluZSBvciBzZXZlciB1bnJlYWNoYWJsZS5cIlxyXG4gICAgICAgICAgICApOyAqL1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8qIGlmICh0aGlzLmlzUHJvYmxlbURldGFpbChwcm9ibGVtKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9ibGVtKTtcclxuICAgICAgICB9ICovXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwcm9ibGVtIGluc3RhbmNlb2YgUHJvYmxlbURldGFpbHMnLCBwcm9ibGVtIGluc3RhbmNlb2YgUHJvYmxlbURldGFpbHMpO1xyXG4gICAgICAgIC8qIGlmICghKHByb2JsZW0gaW5zdGFuY2VvZiBQcm9ibGVtRGV0YWlscykpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUmVxdWVzdCBkb2VzIG5vdCByZXR1cm4gYSBwcm9ibGVtIGRldGFpbCwgZmluZCBvdXQgd2h5Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2JsZW0pO1xyXG4gICAgICAgIH0gKi9cclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KVxyXG4gICAgICAgICAgICB0aGlzLmVycm9yRGlzcGF0Y2hlci5ub3RpZnlOb3RGb3VuZCgpO1xyXG5cclxuICAgICAgICAvKiBbNDA0XS5pbmNsdWRlcyhyZXNwb25zZS5zdGF0dXMpICYmIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0LmVycm9yKFxyXG4gICAgICAgICAgICAgICAgXCJOb3QgZm91bmRcIixcclxuICAgICAgICAgICAgICAgIFwiV2UgY291bGQgbm90IGZpbmQgdGhlIHJlc291cmNlIHlvdSByZXF1ZXN0ZWQuXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTsgKi9cclxuXHJcbiAgICAgICAgaWYgKCFbNDAxLCA0MDMsIDQwNCwgMF0uaW5jbHVkZXMocmVzcG9uc2Uuc3RhdHVzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yRGlzcGF0Y2hlci5ub3RpZnlIdHRwRXJyb3IocHJvYmxlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiAhWzQwMSwgNDAzLCA0MDQsIDBdLmluY2x1ZGVzKHJlc3BvbnNlLnN0YXR1cykgJiYgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vVE9ETzogRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFcnJvclxyXG4gICAgICAgICAgICAvLyBsZXQga2trID0gdGhpcy5leHRyYWN0TWVzc2FnZXMocHJvYmxlbSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9ibGVtJywgcHJvYmxlbSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmFsZXJ0LmVycm9yKFxyXG4gICAgICAgICAgICAvLyAgICAgcHJvYmxlbT8udGl0bGUgfHwgJ0Vycm9yJyxcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZXh0cmFjdE1lc3NhZ2VzKHByb2JsZW0pIHx8IHByb2JsZW0uZGV0YWlsXHJcbiAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgfSk7ICovXHJcblxyXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHtcclxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxyXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiByZXNwb25zZS5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5tZXNzYWdlLFxyXG4gICAgICAgICAgICBlcnJvcjogcmVzcG9uc2UuZXJyb3JcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzUHJvYmxlbURldGFpbChwcm9ibGVtOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gcHJvYmxlbSAmJiBcInR5cGVcIiBpbiBwcm9ibGVtXHJcbiAgICAgICAgICAgICYmIFwidGl0bGVcIiBpbiBwcm9ibGVtXHJcbiAgICAgICAgICAgICYmIFwic3RhdHVzXCIgaW4gcHJvYmxlbVxyXG4gICAgICAgICAgICAmJiBcImRldGFpbFwiIGluIHByb2JsZW1cclxuICAgICAgICAgICAgJiYgXCJpbnN0YW5jZVwiIGluIHByb2JsZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0TWVzc2FnZXMocHJvYmxlbTogUHJvYmxlbURldGFpbHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1Byb2JsZW1EZXRhaWwocHJvYmxlbSlcclxuICAgICAgICAgICAgPyAocHJvYmxlbT8uZXJyb3JzPy5tYXAoeCA9PiAoeyBtZXNzYWdlOiB4Lm1lc3NhZ2UgfSkpIHx8IHByb2JsZW0uZGV0YWlsKVxyXG4gICAgICAgICAgICA6ICdBbiBlcnJvciBoYXMgb2NjdXJlZCBjb250YWN0IHRoZSBhZG1pbmlzdHJhdG9yJztcclxuICAgIH1cclxufSJdfQ==