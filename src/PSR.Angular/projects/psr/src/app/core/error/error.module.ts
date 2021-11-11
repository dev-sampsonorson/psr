import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AlertModule } from '@widgets/alert';

import { ErrorInterceptor } from './error.interceptor';

@NgModule({
    declarations: [],
    imports: [AlertModule],
    providers: [
        // { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService] },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
})
export class ErrorModule { }
