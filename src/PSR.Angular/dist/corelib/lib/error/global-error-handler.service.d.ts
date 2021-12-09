import { ErrorHandler } from '@angular/core';
import { ErrorDispatcherService } from './error-dispatcher.service';
import * as i0 from "@angular/core";
export declare class GlobalErrorHandlerService implements ErrorHandler {
    private errorDispatcher;
    constructor(errorDispatcher: ErrorDispatcherService);
    handleError(error: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GlobalErrorHandlerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GlobalErrorHandlerService>;
}
