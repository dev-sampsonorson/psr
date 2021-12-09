import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ErrorDispatcherService } from '@corelib';
import { AlertService } from '@sharedlib';
import { ProblemDetails } from 'projects/corelib/src';
import { Observable } from 'rxjs';

import { ErrorSubscriptionService } from './services/error-subscription.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [`
        :host {
            @apply relative top-0 block min-h-full;
        }

        .app-test {
            @apply bg-red-700;
        }
    `]
})
export class AppComponent implements OnInit, OnDestroy {

    private _onUnauthenticated$: Observable<ProblemDetails>;

    constructor(
        private alert: AlertService,
        private errorDispatcher: ErrorDispatcherService,
        private zone: NgZone,
        private error: ErrorSubscriptionService
    ) {
        this._onUnauthenticated$ = this.errorDispatcher.onUnauthenticated$;
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
