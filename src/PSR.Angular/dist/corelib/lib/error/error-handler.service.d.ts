import { HttpErrorResponse } from '@angular/common/http';
import { ObservableInput } from 'rxjs';
import { UserStorageService } from '../services';
import { ErrorDispatcherService } from './error-dispatcher.service';
import * as i0 from "@angular/core";
export declare class ErrorHandlerService {
    private userStorage;
    private errorDispatcher;
    constructor(userStorage: UserStorageService, errorDispatcher: ErrorDispatcherService);
    handleError(response: HttpErrorResponse): ObservableInput<any>;
    private isProblemDetail;
    private extractMessages;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorHandlerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ErrorHandlerService>;
}
