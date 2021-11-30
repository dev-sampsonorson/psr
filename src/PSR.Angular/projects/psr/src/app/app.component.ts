import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from '@sharedlib';
import { GlobalErrorHandlerService, ProblemDetails } from 'projects/corelib/src';
import { Observable } from 'rxjs';

import { ErrorSubscriptionService } from './services/error-subscription.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    private _onUnauthenticated$: Observable<ProblemDetails>;

    constructor(
        private alert: AlertService,
        private globalError: GlobalErrorHandlerService,
        private zone: NgZone,
        private error: ErrorSubscriptionService
    ) {
        this._onUnauthenticated$ = this.globalError.onUnauthenticated$;
    }
    ngOnInit(): void {
        this.error.startSubscription();
        /* this._onUnauthenticated$.subscribe((problem: ProblemDetails) => {
            this.zone.run(() => {
                this.alert.onCloseAlert(
                    this.alert.error(
                        problem.title,
                        problem.detail,
                        [
                            { name: 'Login', route: AuthRoutes.Login() }
                        ]
                    )
                ).subscribe(() => {
                    // console.log('alert closed');
                });
            });
        }); */
    }
    ngOnDestroy(): void {
        this.error.stopSubscription();
    }
}
