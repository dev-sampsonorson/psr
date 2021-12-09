import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

import { ErrorDispatcherService } from './error-dispatcher.service';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

    constructor(
        private errorDispatcher: ErrorDispatcherService
    ) { }

    handleError(error: any) {
        console.log('GlobalErrorHandlerService', error);
        // Check if it's an error from an HTTP response
        if (!(error instanceof HttpErrorResponse)) {
            error = error.rejection; // get the error object
        }

        this.errorDispatcher.notifyGlobalError(error);

        /* this.zone.run(() =>
            this.alert.error(
                error?.message || 'Undefined client error',
                error?.status
            )
        ); */

        // console.error('Error from global error handler');
    }
}
