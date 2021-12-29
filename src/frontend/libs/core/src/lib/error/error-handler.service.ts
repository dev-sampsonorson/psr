import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { ObservableInput, throwError } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';

import { UserStorageService } from '../services';
import { ErrorDispatcherService } from './error-dispatcher.service';
import { ProblemDetails } from './error.model';

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerService {

    constructor(
        private userStorage: UserStorageService,
        private errorDispatcher: ErrorDispatcherService,
        private zone: NgZone
    ) { }

    handleError(response: HttpErrorResponse): ObservableInput<any> {
        console.log('handleError', response);
        const problem: ProblemDetails = response.error && response.error as ProblemDetails;

        this.userStorage.getUser()
            .pipe(
                take(1),
                filter(() => [401, 403].includes(response.status)),
                map(user => ({ user, status: response.status })),
                tap(x => {
                    if (x.status === 403) {
                        this.errorDispatcher.notifyForbidden();
                    } else if (x.status === 401) {
                        this.userStorage.removeUser();
                        this.errorDispatcher.notifyUnauthenticated(problem);
                    }

                    /*  */
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

        return throwError(() => ({
            success: false,
            status: response.status,
            statusText: response.statusText,
            message: response.message,
            error: response.error
        }));
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
