import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {
    // private loadingDialogService: LoadingDialogService
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('loading...');
        //   this.loadingDialogService.openDialog();
        return next.handle(request).pipe(
            finalize(() => {
                //   this.loadingDialogService.hideDialog();
                console.log('complete!!!!');
            })
        ) as Observable<HttpEvent<any>>;
    }
}