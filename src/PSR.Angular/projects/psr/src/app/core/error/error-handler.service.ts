import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { AuthRoutes } from '@auth/auth.constants';
import { AuthService } from '@auth/services/auth.service';
import { EnvironmentService } from '@env/environment.service';
import { AlertService } from '@widgets/alert';
import { ObservableInput, throwError } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';

import { ProblemDetails } from './error.model';

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerService {

    constructor(
        private auth: AuthService,
        private alert: AlertService,
        private zone: NgZone,
        private env: EnvironmentService
    ) { }

    handleError(response: HttpErrorResponse): ObservableInput<any> {
        const problem: ProblemDetails = response.error && response.error as ProblemDetails;

        console.log('response.status', response.status);

        this.auth.getUser()
            .pipe(
                take(1),
                filter(_ => [401, 403].includes(response.status)),
                map(user => ({ user, status: response.status })),
                tap(x => {
                    this.zone.run(() => {
                        if (x.user === null && [401, 403].includes(x.status)) {
                            this.alert.onCloseAlert(
                                this.alert.error(
                                    problem.title,
                                    problem.detail,
                                    [
                                        { name: 'Login', route: AuthRoutes.Login }
                                    ]
                                )
                            ).subscribe(_ => {
                                console.log('alert closed');
                            });
                        }
                    });
                    x.user === null && [401, 403].includes(x.status) && this.auth.redirectToLogin();
                    // x.user === null && [401, 403].includes(x.status) && this.auth.logout();
                }),
                tap(x => {
                    console.log('tapping...');
                    console.log('x.user', x.user);
                    console.log('x.status', x.status);
                    x.user !== null && x.status === 401 && this.auth.logout();
                }),
                tap(x => {
                    this.zone.run(() => {
                        (x.user !== null && x.status === 403) && this.alert.warn(
                            'Unauthorized',
                            'Not authorized to peform the action'
                        );
                    })
                })
            )
            .subscribe();

        if (response.status === 0) {
            this.alert.error(
                "No connection",
                "Unable to connect to the server. You're probably offline or sever unreachable."
            );
        }

        console.log('problem instanceof ProblemDetails', problem instanceof ProblemDetails);
        if (!(problem instanceof ProblemDetails)) {
            console.error('Request does not return a problem detail, find out why');
            console.log(problem);
        }

        [404].includes(response.status) && this.zone.run(() => {
            this.alert.error(
                "Not found",
                "We could not find the resource you requested."
            );
        });

        ![401, 403, 404, 0].includes(response.status) && this.zone.run(() => {
            console.log('bad request');

            //TODO: ExpressionChangedAfterItHasBeenCheckedError
            this.alert.error(
                problem.title,
                problem.detail
            );
        });

        return throwError({
            success: false,
            status: response.status,
            statusText: response.statusText,
            message: response.message,
            error: response.error
        });
    }
}
