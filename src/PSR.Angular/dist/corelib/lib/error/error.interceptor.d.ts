import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';
import * as i0 from "@angular/core";
export declare class ErrorInterceptor implements HttpInterceptor {
    private errorHandler;
    constructor(errorHandler: ErrorHandlerService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ErrorInterceptor>;
}
