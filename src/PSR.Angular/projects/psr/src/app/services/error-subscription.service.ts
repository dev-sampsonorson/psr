import { Injectable } from '@angular/core';
import { AlertService } from '@sharedlib';
import { AuthService } from 'projects/authlib/src';
import { GlobalErrorHandlerService, ProblemDetails } from 'projects/corelib/src/lib/error';
import { Observable, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ErrorSubscriptionService {

    private _onUnauthenticated$: Observable<ProblemDetails>;
    private _onForbidden$: Observable<void>;
    private _onNotFound$: Observable<void>;
    private _onNoConnection$: Observable<void>;
    private _onHttpError$: Observable<ProblemDetails>;
    private _onGlobalError$: Observable<any>;

    private _onUnauthenticatedSubscription: Subscription | undefined;
    private _onForbiddenSubscription: Subscription | undefined;
    private _onNotFoundSubscription: Subscription | undefined;
    private _onNoConnectionSubscription: Subscription | undefined;
    private _onHttpErrorSubscription: Subscription | undefined;
    private _onGlobalErrorSubscription: Subscription | undefined;

    constructor(
        private globalError: GlobalErrorHandlerService,
        private auth: AuthService,
        private alert: AlertService
    ) {
        this._onUnauthenticated$ = this.globalError.onUnauthenticated$;
        this._onForbidden$ = this.globalError.onForbidden$;
        this._onNotFound$ = this.globalError.onNotFound$;
        this._onNoConnection$ = this.globalError.onNoConnection$;
        this._onHttpError$ = this.globalError.onHttpError$;
        this._onGlobalError$ = this.globalError.onGlobalError$;
    }

    public startSubscription(): void {
        this._onUnauthenticatedSubscription = this._onUnauthenticated$.subscribe((problem: ProblemDetails) => {
            this.auth.logout();
            this.alert.onCloseAlert(
                this.alert.error(
                    problem.title,
                    problem.detail,
                    /* [
                        { name: 'Login', route: AuthRoutes.Login() }
                    ] */
                )
            ).subscribe(() => {
                // console.log('alert closed');
            });
        });

        this._onHttpErrorSubscription = this._onHttpError$.subscribe((problem: ProblemDetails) => {
            console.error('HTTP error => ', problem);
        });

        this._onForbiddenSubscription = this._onForbidden$.subscribe(() => {
            this.alert.warn(
                'Unauthorized',
                'Not authorized to peform the action'
            );
        });

        this._onNotFoundSubscription = this._onNotFound$.subscribe(() => {
            this.alert.error(
                "Not found",
                "We could not find the resource you requested."
            );
        });

        this._onNoConnectionSubscription = this._onNoConnection$.subscribe(() => {
            this.alert.error(
                "No connection",
                "Unable to connect to the server. You're probably offline or sever unreachable."
            );
        });

        this._onGlobalErrorSubscription = this._onGlobalError$.subscribe((error: any) => {
            console.error('Global error => ', error);
            // console.error('Error from global error handler');
        });
    }

    public stopSubscription(): void {
        this._onUnauthenticatedSubscription?.unsubscribe();
        this._onHttpErrorSubscription?.unsubscribe();
        this._onForbiddenSubscription?.unsubscribe();
        this._onNotFoundSubscription?.unsubscribe();
        this._onNoConnectionSubscription?.unsubscribe();
        this._onGlobalErrorSubscription?.unsubscribe();
    }
}
