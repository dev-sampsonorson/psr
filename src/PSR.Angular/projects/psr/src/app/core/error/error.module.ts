import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { AlertModule } from '@shared/alert';

import { ErrorInterceptor } from './error.interceptor';
import { GlobalErrorHandlerService } from './global-error-handler.service';

@NgModule({
    declarations: [],
    imports: [AlertModule],
    providers: [

        {
            // processes all errors
            provide: ErrorHandler,
            useClass: GlobalErrorHandlerService,
        },
        // { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService] },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
})
export class ErrorModule { }
