import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { EnvironmentService } from '@env/environment.service';
import { AuthRoutes } from '@psr/auth/auth.constants';
import { AuthService } from '@psr/auth/services/auth.service';
import { ObservableInput, throwError } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { AlertService } from '../alert/alert.service';
import { ProblemDetails } from '../error/error.model';



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
        const problem = response.error && response.error as ProblemDetails;

        this.auth.getUser()
            .pipe(
                filter(_ => [401, 403].includes(response.status)),
                map(user => ({ user, status: response.status })),
                tap(x => {
                    this.zone.run(() => {
                        if (x.user === null && [401, 403].includes(x.status)) {
                            this.alert.onCloseAlert(
                                this.alert.error(
                                    this.env.alertOptions,
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
                    // x.user === null && [401, 403].includes(x.status) && this.auth.redirectToLogin();
                }),
                // tap(x => x.user !== null && x.status === 401 && this.auth.logout()),
                tap(x => {
                    this.zone.run(() => {
                        (x.user !== null && x.status === 403) && this.alert.warn(
                            this.env.alertOptions,
                            'Unauthorized',
                            'Not authorized to peform the action'
                        );
                    })
                })
            )
            .subscribe();

        if (!(problem instanceof ProblemDetails)) {
            console.error('Request does not return a problem detail, find out why');
        }

        [404].includes(response.status) && this.zone.run(() => {
            this.alert.error(
                this.env.alertOptions,
                "Not found",
                "We could not find the resource you requested."
            );
        });

        ![401, 403, 404].includes(response.status) && this.zone.run(() => {
            console.log('bad request');

            //TODO: ExpressionChangedAfterItHasBeenCheckedError
            this.alert.error(
                this.env.alertOptions,
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
