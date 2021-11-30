import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { ErrorInterceptor } from './error.interceptor';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import * as i0 from "@angular/core";
export class ErrorModule {
}
ErrorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ErrorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ErrorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ErrorModule });
ErrorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ErrorModule, providers: [
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandlerService,
        },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        /* {
            provide: ErrorHandler, // processes all errors
            useClass: GlobalErrorHandlerService,
        }, */
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // { provide: APP_INITIALIZER, useFactory: authInitializer, multi: true, deps: [AuthService] },
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ErrorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    providers: [
                        {
                            provide: ErrorHandler,
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZWxpYi9zcmMvbGliL2Vycm9yL2Vycm9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFtQjNFLE1BQU0sT0FBTyxXQUFXOzt5R0FBWCxXQUFXOzBHQUFYLFdBQVc7MEdBQVgsV0FBVyxhQWZUO1FBQ1A7WUFDSSxPQUFPLEVBQUUsWUFBWTtZQUNyQixRQUFRLEVBQUUseUJBQXlCO1NBQ3RDO1FBQ0QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFFdkU7OzthQUdLO1FBQ0wsMkVBQTJFO1FBQzNFLCtGQUErRjtLQUNsRzs0RkFFUSxXQUFXO2tCQWpCdkIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsU0FBUyxFQUFFO3dCQUNQOzRCQUNJLE9BQU8sRUFBRSxZQUFZOzRCQUNyQixRQUFRLEVBQUUseUJBQXlCO3lCQUN0Qzt3QkFDRCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTt3QkFFdkU7Ozs2QkFHSzt3QkFDTCwyRUFBMkU7d0JBQzNFLCtGQUErRjtxQkFDbEc7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRXJyb3JJbnRlcmNlcHRvciB9IGZyb20gJy4vZXJyb3IuaW50ZXJjZXB0b3InO1xyXG5pbXBvcnQgeyBHbG9iYWxFcnJvckhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi9nbG9iYWwtZXJyb3ItaGFuZGxlci5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBFcnJvckhhbmRsZXIsIC8vIHByb2Nlc3NlcyBhbGwgZXJyb3JzXHJcbiAgICAgICAgICAgIHVzZUNsYXNzOiBHbG9iYWxFcnJvckhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEVycm9ySW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXHJcblxyXG4gICAgICAgIC8qIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogRXJyb3JIYW5kbGVyLCAvLyBwcm9jZXNzZXMgYWxsIGVycm9yc1xyXG4gICAgICAgICAgICB1c2VDbGFzczogR2xvYmFsRXJyb3JIYW5kbGVyU2VydmljZSxcclxuICAgICAgICB9LCAqL1xyXG4gICAgICAgIC8vIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBFcnJvckludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxyXG4gICAgICAgIC8vIHsgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLCB1c2VGYWN0b3J5OiBhdXRoSW5pdGlhbGl6ZXIsIG11bHRpOiB0cnVlLCBkZXBzOiBbQXV0aFNlcnZpY2VdIH0sXHJcbiAgICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXJyb3JNb2R1bGUgeyB9XHJcbiJdfQ==