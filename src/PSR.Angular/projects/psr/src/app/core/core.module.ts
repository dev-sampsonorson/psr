import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInterceptor } from './error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertComponent, AlertHostDirective, AlertContainerComponent } from './alert/index';
import { AlertModule } from './alert/alert.module';
import { ErrorModule } from './error/error.module';



@NgModule({
    declarations: [
        AlertComponent,
        AlertHostDirective,
        AlertContainerComponent
    ],
    imports: [
        CommonModule,
        AlertModule,
        ErrorModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    exports: [
        AlertComponent,
        AlertHostDirective,
        AlertContainerComponent
    ]
})
export class CoreModule { }
