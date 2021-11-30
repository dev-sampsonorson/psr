import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';

import { ErrorInterceptor } from './error.interceptor';
import { GlobalErrorHandlerService } from './global-error-handler.service';

@NgModule({
    declarations: [],
    providers: [
        {
            provide: ErrorHandler, // processes all errors
            useClass: GlobalErrorHandlerService,
        },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        /* {
            provide: ErrorHandler, // processes all errors
            useClass: GlobalErrorHandlerService,
        }, */
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // { provide: APP_INITIALIZER, useFactory: authInitializer, multi: true, deps: [AuthService] },
    ],
})
export class ErrorModule { }
