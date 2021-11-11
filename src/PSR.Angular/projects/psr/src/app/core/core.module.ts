import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorModule } from './error/error.module';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ErrorModule
    ],
    providers: [
        // { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService] },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    exports: []
})
export class CoreModule { }
