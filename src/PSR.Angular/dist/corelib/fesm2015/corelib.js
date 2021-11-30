import * as i0 from '@angular/core';
import { Injectable, InjectionToken, Inject, ErrorHandler, NgModule } from '@angular/core';
import { BehaviorSubject, concat, of, Subject, throwError } from 'rxjs';
import { take, filter, tap, switchMap, distinctUntilKeyChanged, map, catchError, finalize } from 'rxjs/operators';
import { DefaultUrlSerializer } from '@angular/router';
import * as i1 from '@angular/common/http';
import { HttpErrorResponse, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

class CustomUrlSerializer {
    constructor() {
        this._doubleSlashPattern = /\/\//;
    }
    parse(url) {
        let dus = new DefaultUrlSerializer();
        // url = this.replaceDoubleSlash(url);
        return dus.parse(url);
    }
    serialize(tree) {
        let dus = new DefaultUrlSerializer(), path = dus.serialize(tree);
        path = this.replaceDoubleSlash(path);
        // console.log('path', path);
        return path;
    }
    replaceDoubleSlash(input) {
        let inputString = input;
        if (this._doubleSlashPattern.test(inputString)) {
            inputString = inputString.replace(this._doubleSlashPattern, '/');
        }
        return inputString;
    }
}

class FormService {
    constructor() { }
}
FormService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: FormService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FormService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: FormService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: FormService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

const QueryParameterNames = {
    ReturnUrl: 'returnUrl'
};
let appPaths = {
    GetCountries: `lookup/countries`,
    GetTestDescription: `test`,
};
let appRoutes = {
    Home: () => [`/home`],
    Skills: () => [`/skills`],
    Secret: () => [`/secret`],
};
const AppEndpoints = appPaths;
const AppRoutes = appRoutes;
/* type Initializer<T> = T extends any ? (string | (() => any[])) : never
// type AppRouteType =

function correct<T>(arg: Initializer<T>) : any[] | Initializer<T> {
    return typeof arg === 'function' ? arg() : arg;
}

let ans1 = correct("true");
let ans2 = correct(() => []);
let ans3 = correct(authRoutes.Login); */

const APP_CONFIG_TOKEN = new InjectionToken("APP_CONFIG_TOKEN");

const USER_STORAGE_KEY_TOKEN = new InjectionToken('USER_STORAGE_KEY_TOKEN', {
    providedIn: 'root',
    factory: () => ''
});

class LookupService {
    constructor(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    getCountries() {
        return this.http.get(this.appConfig.getUrl(AppEndpoints.GetCountries));
    }
}
LookupService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LookupService, deps: [{ token: i1.HttpClient }, { token: APP_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
LookupService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LookupService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LookupService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }]; } });

class StorageService {
    constructor() {
        this.storage = localStorage; // localStorage, sessionStorage;
    }
    saveItem(key, item) {
        this.storage.setItem(key, JSON.stringify(item));
    }
    getItem(key) {
        // JSON.parse(null) === null
        // localStorage.getItem(key) === null if cannot find item
        return JSON.parse(this.storage.getItem(key));
        /* let item = this.storage.getItem(key);

        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }

        return; */
    }
    removeItem(key) {
        this.storage.removeItem(key);
    }
}
StorageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: StorageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StorageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: StorageService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: StorageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class TestService {
    constructor(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    getError() {
        return this.http.get(this.appConfig.getUrl('error/get-error'));
    }
    getTestDescription() {
        return this.http.get(this.appConfig.getUrl(AppEndpoints.GetTestDescription)).pipe(
        // shareReplay()
        );
    }
}
TestService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: TestService, deps: [{ token: i1.HttpClient }, { token: APP_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
TestService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: TestService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: TestService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }]; } });

const EMPTY_USER = {
    id: '00000000-0000-0000-0000-000000000000'
};

/**
 * This service is responsible for holding in-memory user data,
 * notifying subscribers when user data changes, and persisting
 * user data to storage.
 *
 * This service makes it possible to remove the dependency on
 * Auth Service and in turn the Authlib.
 */
class UserStorageService {
    constructor(storage, userStorageKey) {
        this.storage = storage;
        this.userStorageKey = userStorageKey;
        this._userSubject = new BehaviorSubject(null);
    }
    getUser() {
        let source$ = concat(this._userSubject.pipe(
        // take will trigger the `subject` observable
        // to complete so that the next observable in
        // concat is subscribed to
        take(1), 
        // filter out null values (false)
        // convert null to false
        filter(user => !!user)), 
        // the `of` observable will automatically complete
        // so the next observable in concate will be
        // subscribed to
        of(this.storage.getItem(this.userStorageKey)).pipe(filter(user => !!user), 
        // tap(x => console.log('storage => ', x)),
        // we will get here if the value is not null
        // update the user subject
        tap(user => this._userSubject.next(user))), this._userSubject.asObservable()).pipe(
        // here to allow distinctUntilKeyChanged to work
        switchMap(user => of(user !== null && user !== void 0 ? user : EMPTY_USER)), distinctUntilKeyChanged('id'), 
        // transform back to null
        switchMap(user => of(user.id === EMPTY_USER.id ? null : user)));
        return source$;
    }
    setUser(user) {
        this._userSubject.next(user);
    }
    storeUser(item) {
        this.storage.saveItem(this.userStorageKey, item);
    }
    removeUser() {
        this.storage.removeItem(this.userStorageKey);
    }
    retrieveUser() {
        return this.storage.getItem(this.userStorageKey);
    }
}
UserStorageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: UserStorageService, deps: [{ token: StorageService }, { token: USER_STORAGE_KEY_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
UserStorageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: UserStorageService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: UserStorageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: StorageService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [USER_STORAGE_KEY_TOKEN]
                }] }]; } });

class GlobalErrorHandlerService {
    constructor() {
        this._unauthenticatedSubject = new Subject();
        this._forbiddenSubject = new Subject();
        this._noConnectionSubject = new Subject();
        this._notFoundSubject = new Subject();
        this._httpErrorSubject = new Subject();
        this._globalErrorSubject = new Subject();
    }
    get onUnauthenticated$() {
        return this._unauthenticatedSubject.asObservable();
    }
    get onForbidden$() {
        return this._forbiddenSubject.asObservable();
    }
    get onNotFound$() {
        return this._notFoundSubject.asObservable();
    }
    get onNoConnection$() {
        return this._noConnectionSubject.asObservable();
    }
    get onHttpError$() {
        return this._httpErrorSubject.asObservable();
    }
    get onGlobalError$() {
        return this._globalErrorSubject.asObservable();
    }
    handleError(error) {
        console.log('GlobalErrorHandlerService', error);
        // Check if it's an error from an HTTP response
        if (!(error instanceof HttpErrorResponse)) {
            error = error.rejection; // get the error object
        }
        this.notifyGlobalError(error);
        /* this.zone.run(() =>
            this.alert.error(
                error?.message || 'Undefined client error',
                error?.status
            )
        ); */
        // console.error('Error from global error handler');
    }
    notifyUnauthenticated(problem) {
        this._unauthenticatedSubject.next(problem);
    }
    notifyForbidden() {
        this._forbiddenSubject.next();
    }
    notifyNotFound() {
        this._notFoundSubject.next();
    }
    notifyNoConnection() {
        this._noConnectionSubject.next();
    }
    notifyHttpError(problem) {
        this._httpErrorSubject.next(problem);
    }
    notifyGlobalError(error) {
        this._globalErrorSubject.next(error);
    }
}
GlobalErrorHandlerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: GlobalErrorHandlerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
GlobalErrorHandlerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: GlobalErrorHandlerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: GlobalErrorHandlerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class ErrorHandlerService {
    constructor(userStorage, globalError) {
        this.userStorage = userStorage;
        this.globalError = globalError;
    }
    handleError(response) {
        const problem = response.error && response.error;
        this.userStorage.getUser()
            .pipe(take(1), filter(_ => [401, 403].includes(response.status)), map(user => ({ user, status: response.status })), tap(x => {
            if (x.user === null && x.status === 401) {
                this.globalError.notifyUnauthenticated(problem);
                // this.auth.logout();
                // this.auth.redirectToLogin();
            }
            // x.user === null && [401, 403].includes(x.status) && this.auth.redirectToLogin();
            // x.user === null && [401, 403].includes(x.status) && this.auth.logout();
        }), 
        /* tap(x => {
            x.user !== null && x.status === 401 && this.auth.logout();
        }), */
        tap(x => {
            if (x.user !== null && x.status === 403) {
                this.globalError.notifyForbidden();
            }
            /* this.zone.run(() => {
                (x.user !== null && x.status === 403) && this.alert.warn(
                    'Unauthorized',
                    'Not authorized to peform the action'
                );
            }) */
        }))
            .subscribe();
        if (response.status === 0) {
            this.globalError.notifyNoConnection();
            /* this.alert.error(
                "No connection",
                "Unable to connect to the server. You're probably offline or sever unreachable."
            ); */
        }
        /* if (this.isProblemDetail(problem)) {
            console.log(problem);
        } */
        // console.log('problem instanceof ProblemDetails', problem instanceof ProblemDetails);
        /* if (!(problem instanceof ProblemDetails)) {
            console.error('Request does not return a problem detail, find out why');
            console.log(problem);
        } */
        if (response.status === 404)
            this.globalError.notifyNotFound();
        /* [404].includes(response.status) && this.zone.run(() => {
            this.alert.error(
                "Not found",
                "We could not find the resource you requested."
            );
        }); */
        if (![401, 403, 404, 0].includes(response.status)) {
            this.globalError.notifyHttpError(problem);
        }
        /* ![401, 403, 404, 0].includes(response.status) && this.zone.run(() => {
            //TODO: ExpressionChangedAfterItHasBeenCheckedError
            // let kkk = this.extractMessages(problem);
            console.log('problem', problem);

            // this.alert.error(
            //     problem?.title || 'Error',
            //     this.extractMessages(problem) || problem.detail
            // );
        }); */
        return throwError({
            success: false,
            status: response.status,
            statusText: response.statusText,
            message: response.message,
            error: response.error
        });
    }
    isProblemDetail(problem) {
        return problem && "type" in problem
            && "title" in problem
            && "status" in problem
            && "detail" in problem
            && "instance" in problem;
    }
    extractMessages(problem) {
        var _a;
        return this.isProblemDetail(problem)
            ? (((_a = problem === null || problem === void 0 ? void 0 : problem.errors) === null || _a === void 0 ? void 0 : _a.map(x => ({ message: x.message }))) || problem.detail)
            : 'An error has occured contact the administrator';
    }
}
ErrorHandlerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ErrorHandlerService, deps: [{ token: UserStorageService }, { token: GlobalErrorHandlerService }], target: i0.ɵɵFactoryTarget.Injectable });
ErrorHandlerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ErrorHandlerService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ErrorHandlerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: UserStorageService }, { type: GlobalErrorHandlerService }]; } });

class ErrorInterceptor {
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
    }
    intercept(request, next) {
        return next.handle(request).pipe(catchError(error => this.errorHandler.handleError(error)));
    }
}
ErrorInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ErrorInterceptor, deps: [{ token: ErrorHandlerService }], target: i0.ɵɵFactoryTarget.Injectable });
ErrorInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ErrorInterceptor, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ErrorInterceptor, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: ErrorHandlerService }]; } });

class ProblemDetails {
    constructor() {
        this.type = '';
        this.title = '';
        this.status = -1;
        this.detail = '';
        this.instance = '';
        this.errors = [];
    }
}

class ErrorModule {
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

class HttpLoadingInterceptor {
    // private loadingDialogService: LoadingDialogService
    constructor() { }
    intercept(request, next) {
        // console.log('loading...');
        //   this.loadingDialogService.openDialog();
        return next.handle(request).pipe(finalize(() => {
            //   this.loadingDialogService.hideDialog();
            // console.log('complete!!!!');
        }));
    }
}
HttpLoadingInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HttpLoadingInterceptor, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
HttpLoadingInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HttpLoadingInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HttpLoadingInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

// import { ErrorModule } from './error';
class CorelibModule {
    static withConfig(config) {
        return {
            ngModule: CorelibModule,
            providers: [
                { provide: APP_CONFIG_TOKEN, useValue: config },
            ]
        };
    }
}
CorelibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: CorelibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CorelibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: CorelibModule, imports: [CommonModule,
        HttpClientModule,
        ErrorModule], exports: [HttpClientModule,
        ErrorModule] });
CorelibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: CorelibModule, providers: [
        // { provide: APP_INITIALIZER, useFactory: authInitializer, multi: true, deps: [AuthService] },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // { provide: UrlSerializer, useClass: CustomUrlSerializer },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpLoadingInterceptor,
            multi: true,
        },
        { provide: USER_STORAGE_KEY_TOKEN, useValue: 'psr-userkey-tlxstgmzna' },
    ], imports: [[
            CommonModule,
            HttpClientModule,
            ErrorModule
        ], HttpClientModule,
        ErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: CorelibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        ErrorModule
                    ],
                    providers: [
                        // { provide: APP_INITIALIZER, useFactory: authInitializer, multi: true, deps: [AuthService] },
                        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
                        // { provide: UrlSerializer, useClass: CustomUrlSerializer },
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: HttpLoadingInterceptor,
                            multi: true,
                        },
                        { provide: USER_STORAGE_KEY_TOKEN, useValue: 'psr-userkey-tlxstgmzna' },
                    ],
                    exports: [
                        HttpClientModule,
                        ErrorModule
                    ]
                    // ErrorModule,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { APP_CONFIG_TOKEN, AppEndpoints, AppRoutes, CorelibModule, CustomUrlSerializer, EMPTY_USER, ErrorHandlerService, ErrorInterceptor, ErrorModule, FormService, GlobalErrorHandlerService, HttpLoadingInterceptor, LookupService, ProblemDetails, QueryParameterNames, StorageService, TestService, USER_STORAGE_KEY_TOKEN, UserStorageService };
//# sourceMappingURL=corelib.js.map
