import { HttpErrorResponse } from '@angular/common/http';
import { ObservableInput } from 'rxjs';
import { UserStorageService } from '../services';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import * as i0 from "@angular/core";
export declare class ErrorHandlerService {
    private userStorage;
    private globalError;
    constructor(userStorage: UserStorageService, globalError: GlobalErrorHandlerService);
    handleError(response: HttpErrorResponse): ObservableInput<any>;
    private isProblemDetail;
    private extractMessages;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorHandlerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ErrorHandlerService>;
}
