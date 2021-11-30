import { ErrorHandler } from '@angular/core';
import { ProblemDetails } from './error.model';
import * as i0 from "@angular/core";
export declare class GlobalErrorHandlerService implements ErrorHandler {
    private _unauthenticatedSubject;
    private _forbiddenSubject;
    private _noConnectionSubject;
    private _notFoundSubject;
    private _httpErrorSubject;
    private _globalErrorSubject;
    constructor();
    get onUnauthenticated$(): import("rxjs").Observable<ProblemDetails>;
    get onForbidden$(): import("rxjs").Observable<void>;
    get onNotFound$(): import("rxjs").Observable<void>;
    get onNoConnection$(): import("rxjs").Observable<void>;
    get onHttpError$(): import("rxjs").Observable<ProblemDetails>;
    get onGlobalError$(): import("rxjs").Observable<any>;
    handleError(error: any): void;
    notifyUnauthenticated(problem: ProblemDetails): void;
    notifyForbidden(): void;
    notifyNotFound(): void;
    notifyNoConnection(): void;
    notifyHttpError(problem: ProblemDetails): void;
    notifyGlobalError(error: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GlobalErrorHandlerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GlobalErrorHandlerService>;
}
