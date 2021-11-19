import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AlertModule } from '@shared/alert';

import { ErrorInterceptor } from './error.interceptor';

@NgModule({
    declarations: [],
    imports: [AlertModule],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        /* {
            provide: ErrorHandler, // processes all errors
            useClass: GlobalErrorHandlerService,
        }, */
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService] },
    ],
})
export class ErrorModule { }
