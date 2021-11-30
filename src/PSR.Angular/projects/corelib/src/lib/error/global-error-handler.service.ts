import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ProblemDetails } from './error.model';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

    private _unauthenticatedSubject = new Subject<ProblemDetails>();
    private _forbiddenSubject = new Subject<void>();
    private _noConnectionSubject = new Subject<void>();
    private _notFoundSubject = new Subject<void>();
    private _httpErrorSubject = new Subject<ProblemDetails>();
    private _globalErrorSubject = new Subject<any>();

    constructor() { }

    get onUnauthenticated$() {
        return this._unauthenticatedSubject.asObservable();
    }

    get onForbidden$() {
        return this._forbiddenSubject.asObservable();
    }

    get onNotFound$() {
        return this._notFoundSubject.asObservable();
    }

    get onNoConnection$() {
        return this._noConnectionSubject.asObservable();
    }

    get onHttpError$() {
        return this._httpErrorSubject.asObservable();
    }

    get onGlobalError$() {
        return this._globalErrorSubject.asObservable();
    }

    handleError(error: any) {
        console.log('GlobalErrorHandlerService', error);
        // Check if it's an error from an HTTP response
        if (!(error instanceof HttpErrorResponse)) {
            error = error.rejection; // get the error object
        }

        this.notifyGlobalError(error);

        /* this.zone.run(() =>
            this.alert.error(
                error?.message || 'Undefined client error',
                error?.status
            )
        ); */

        // console.error('Error from global error handler');
    }

    notifyUnauthenticated(problem: ProblemDetails) {
        this._unauthenticatedSubject.next(problem);
    }

    notifyForbidden() {
        this._forbiddenSubject.next();
    }

    notifyNotFound() {
        this._notFoundSubject.next();
    }

    notifyNoConnection() {
        this._noConnectionSubject.next();
    }

    notifyHttpError(problem: ProblemDetails) {
        this._httpErrorSubject.next(problem);
    }

    notifyGlobalError(error: any) {
        this._globalErrorSubject.next(error);
    }
}
