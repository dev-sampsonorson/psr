import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObservableInput, throwError } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';

import { UserStorageService } from '../services';
import { ProblemDetails } from './error.model';
import { GlobalErrorHandlerService } from './global-error-handler.service';

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerService {

    constructor(
        private userStorage: UserStorageService,
        private globalError: GlobalErrorHandlerService,
    ) { }

    handleError(response: HttpErrorResponse): ObservableInput<any> {
        const problem: ProblemDetails = response.error && response.error as ProblemDetails;

        this.userStorage.getUser()
            .pipe(
                take(1),
                filter(_ => [401, 403].includes(response.status)),
                map(user => ({ user, status: response.status })),
                tap(x => {
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
                })
            )
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

    private isProblemDetail(problem: any) {
        return problem && "type" in problem
            && "title" in problem
            && "status" in problem
            && "detail" in problem
            && "instance" in problem;
    }

    private extractMessages(problem: ProblemDetails) {
        return this.isProblemDetail(problem)
            ? (problem?.errors?.map(x => ({ message: x.message })) || problem.detail)
            : 'An error has occured contact the administrator';
    }
}