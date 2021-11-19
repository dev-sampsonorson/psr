import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ErrorModule } from './error/error.module';
import { HttpLoadingInterceptor } from './http-loading.interceptor';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        ErrorModule
    ],
    providers: [
        // { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService] },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // { provide: UrlSerializer, useClass: CustomUrlSerializer },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpLoadingInterceptor,
            multi: true,
        },
    ],
    exports: [ErrorModule, HttpClientModule]
})
export class CoreModule { }
