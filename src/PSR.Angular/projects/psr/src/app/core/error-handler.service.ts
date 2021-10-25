import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObservableInput, throwError } from 'rxjs';

export interface IProblemDetails {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
    errors: any[];
}

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerService {

    constructor() { }

    handleError(response: HttpErrorResponse): ObservableInput<any> {
        /* if ([401, 403].includes(response.status) && this.authService.userValue) {
            this.authService.logout();
        } */

        let errorResult = null;
        if (response.error)
            errorResult = response.error as IProblemDetails;

        return throwError(errorResult);
    }
}
