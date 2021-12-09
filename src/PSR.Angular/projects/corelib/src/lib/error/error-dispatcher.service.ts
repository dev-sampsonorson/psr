import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ProblemDetails } from './error.model';

@Injectable({
    providedIn: 'root'
})
export class ErrorDispatcherService {

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
