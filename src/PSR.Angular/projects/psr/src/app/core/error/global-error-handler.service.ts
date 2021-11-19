import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { AlertService } from '@shared/alert';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
    constructor(
        private alert: AlertService,
        private zone: NgZone
    ) { }

    handleError(error: any) {
        console.log('GlobalErrorHandlerService', error);
        // Check if it's an error from an HTTP response
        if (!(error instanceof HttpErrorResponse)) {
            error = error.rejection; // get the error object
        }

        /* this.zone.run(() =>
            this.alert.error(
                error?.message || 'Undefined client error',
                error?.status
            )
        ); */

        // console.error('Error from global error handler');
    }
}
