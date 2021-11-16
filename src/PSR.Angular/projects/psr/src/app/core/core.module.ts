import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UrlSerializer } from '@angular/router';

import { ErrorModule } from './error/error.module';
import { HttpLoadingInterceptor } from './http-loading.interceptor';
import { CustomUrlSerializer } from './services/custom-url.serializer';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ErrorModule
    ],
    providers: [
        // { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService] },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
        { provide: UrlSerializer, useClass: CustomUrlSerializer },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpLoadingInterceptor,
            multi: true,
        },
    ],
    exports: []
})
export class CoreModule { }
