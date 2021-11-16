(self["webpackChunkpsr_angular"] = self["webpackChunkpsr_angular"] || []).push([["main"],{

/***/ 5083:
/*!*******************************************************!*\
  !*** ./projects/psr/src/app/app-breadcrumb-config.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppBreadcrumbConfigProvider": () => (/* binding */ AppBreadcrumbConfigProvider)
/* harmony export */ });
/* harmony import */ var _widgets_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @widgets/breadcrumb/breadcrumb.service */ 2579);

const AppBreadcrumbConfigProvider = {
    provide: _widgets_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__.BREADCRUMB_CONFIG_TOKEN,
    useValue: []
};


/***/ }),

/***/ 3272:
/*!****************************************************!*\
  !*** ./projects/psr/src/app/app-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/auth.guard */ 3395);
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/home/home.component */ 1891);
/* harmony import */ var _modules_secret_secret_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/secret/secret.component */ 621);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ 599);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const appRoutes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent,
        children: [
            { path: 'home', component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
            {
                path: 'skills',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @psr/modules/skill-management/skill-mgt.module */ 1810)).then(m => m.SkillManagementModule)
            },
            { path: 'secret', component: _modules_secret_secret_component__WEBPACK_IMPORTED_MODULE_2__.SecretComponent, canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    },
    {
        path: 'auth',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @auth/auth.module */ 6421)).then(m => m.AuthModule)
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 8386:
/*!***********************************************!*\
  !*** ./projects/psr/src/app/app.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_alert_components_alert_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/alert/components/alert-container.component */ 4315);



class AppComponent {
    constructor() {
        this.title = 'psr';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-alert-container");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_alert_components_alert_container_component__WEBPACK_IMPORTED_MODULE_0__.AlertContainerComponent], styles: ["[_nghost-%COMP%] {\n    position: relative;\n    top: 0px;\n    display: block;\n    min-height: 100%\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUEsbUJBQUE7SUFBQSxTQUFBO0lBQUEsZUFBQTtJQUFBO0NBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6624:
/*!********************************************!*\
  !*** ./projects/psr/src/app/app.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/auth.module */ 6421);
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/home/home.component */ 1891);
/* harmony import */ var _modules_secret_secret_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/secret/secret.component */ 621);
/* harmony import */ var _psr_modules_skill_management_skill_mgt_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @psr/modules/skill-management/skill-mgt.module */ 1810);
/* harmony import */ var _app_breadcrumb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-breadcrumb-config */ 5083);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 3272);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 8386);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ 7365);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout.component */ 599);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ 2180);
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widgets/widgets.module */ 8319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        _app_breadcrumb_config__WEBPACK_IMPORTED_MODULE_4__.AppBreadcrumbConfigProvider
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule,
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_0__.AuthModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__.CoreModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule,
            // cleanup
            // AlertModule,
            // HeaderModule,
            _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_10__.WidgetsModule,
            _psr_modules_skill_management_skill_mgt_module__WEBPACK_IMPORTED_MODULE_3__.SkillManagementModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent,
        _modules_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
        _modules_secret_secret_component__WEBPACK_IMPORTED_MODULE_2__.SecretComponent,
        _layout_component__WEBPACK_IMPORTED_MODULE_8__.LayoutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_0__.AuthModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_7__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule,
        // cleanup
        // AlertModule,
        // HeaderModule,
        _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_10__.WidgetsModule,
        _psr_modules_skill_management_skill_mgt_module__WEBPACK_IMPORTED_MODULE_3__.SkillManagementModule] }); })();


/***/ }),

/***/ 4356:
/*!*************************************************!*\
  !*** ./projects/psr/src/app/core/app.config.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_CONFIG_TOKEN": () => (/* binding */ APP_CONFIG_TOKEN)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_auth_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/auth.constants */ 7353);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ 9328);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.constants */ 7334);




const APP_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken("Application configuration", {
    providedIn: 'root',
    factory: () => {
        const _baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
        return {
            baseUrl: `${_baseUrl}`,
            getUrl: (url) => {
                if (['/', '\\'].includes(url && url.slice(0, 1))) {
                    return `${_baseUrl}${url.slice(1)}`;
                }
                return `${_baseUrl}${url}`;
            },
            primaryMenu: [
                { label: 'Home', routerLink: _app_constants__WEBPACK_IMPORTED_MODULE_2__.AppRoutes.Home() },
                { label: 'Skills', routerLink: _app_constants__WEBPACK_IMPORTED_MODULE_2__.AppRoutes.Skills() },
                { label: 'Secret', routerLink: _app_constants__WEBPACK_IMPORTED_MODULE_2__.AppRoutes.Secret() }
            ],
            profileMenu: [
                { label: 'Sign out', routerLink: _auth_auth_constants__WEBPACK_IMPORTED_MODULE_0__.AuthRoutes.RevokeToken() }
            ]
        };
    }
});


/***/ }),

/***/ 7334:
/*!****************************************************!*\
  !*** ./projects/psr/src/app/core/app.constants.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryParameterNames": () => (/* binding */ QueryParameterNames),
/* harmony export */   "AppEndpoints": () => (/* binding */ AppEndpoints),
/* harmony export */   "AppRoutes": () => (/* binding */ AppRoutes)
/* harmony export */ });
const QueryParameterNames = {
    ReturnUrl: 'returnUrl'
};
let appPaths = {
    GetCountries: `lookup/countries`
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


/***/ }),

/***/ 7365:
/*!**************************************************!*\
  !*** ./projects/psr/src/app/core/core.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _error_error_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error/error.module */ 9350);
/* harmony import */ var _services_custom_url_serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/custom-url.serializer */ 7191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        // { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService] },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__.UrlSerializer, useClass: _services_custom_url_serializer__WEBPACK_IMPORTED_MODULE_1__.CustomUrlSerializer }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _error_error_module__WEBPACK_IMPORTED_MODULE_0__.ErrorModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _error_error_module__WEBPACK_IMPORTED_MODULE_0__.ErrorModule] }); })();


/***/ }),

/***/ 7885:
/*!******************************************************************!*\
  !*** ./projects/psr/src/app/core/error/error-handler.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorHandlerService": () => (/* binding */ ErrorHandlerService)
/* harmony export */ });
/* harmony import */ var _auth_auth_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/auth.constants */ 7353);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth/services/auth.service */ 4796);
/* harmony import */ var _shared_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/alert */ 8665);
/* harmony import */ var _env_environment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment.service */ 322);







class ErrorHandlerService {
    constructor(auth, alert, zone, env) {
        this.auth = auth;
        this.alert = alert;
        this.zone = zone;
        this.env = env;
    }
    handleError(response) {
        const problem = response.error && response.error;
        console.log('response.status', response.status);
        this.auth.getUser()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(_ => [401, 403].includes(response.status)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(user => ({ user, status: response.status })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(x => {
            this.zone.run(() => {
                if (x.user === null && [401, 403].includes(x.status)) {
                    this.alert.onCloseAlert(this.alert.error(problem.title, problem.detail, [
                        { name: 'Login', route: _auth_auth_constants__WEBPACK_IMPORTED_MODULE_0__.AuthRoutes.Login() }
                    ])).subscribe(_ => {
                        console.log('alert closed');
                    });
                }
            });
            x.user === null && [401, 403].includes(x.status) && this.auth.redirectToLogin();
            // x.user === null && [401, 403].includes(x.status) && this.auth.logout();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(x => {
            console.log('tapping...');
            console.log('x.user', x.user);
            console.log('x.status', x.status);
            x.user !== null && x.status === 401 && this.auth.logout();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(x => {
            this.zone.run(() => {
                (x.user !== null && x.status === 403) && this.alert.warn('Unauthorized', 'Not authorized to peform the action');
            });
        }))
            .subscribe();
        if (response.status === 0) {
            this.alert.error("No connection", "Unable to connect to the server. You're probably offline or sever unreachable.");
        }
        if (this.isProblemDetail(problem)) {
            console.error('Request does not return a problem detail, find out why');
            console.log(problem);
        }
        // console.log('problem instanceof ProblemDetails', problem instanceof ProblemDetails);
        /* if (!(problem instanceof ProblemDetails)) {
            console.error('Request does not return a problem detail, find out why');
            console.log(problem);
        } */
        [404].includes(response.status) && this.zone.run(() => {
            this.alert.error("Not found", "We could not find the resource you requested.");
        });
        ![401, 403, 404, 0].includes(response.status) && this.zone.run(() => {
            console.log('bad request');
            //TODO: ExpressionChangedAfterItHasBeenCheckedError
            this.alert.error(problem.title, problem.detail);
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)({
            success: false,
            status: response.status,
            statusText: response.statusText,
            message: response.message,
            error: response.error
        });
    }
    isProblemDetail(problem) {
        return "type" in problem
            && "title" in problem
            && "status" in problem
            && "detail" in problem
            && "instance" in problem
            && "errors" in problem;
    }
}
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) { return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_shared_alert__WEBPACK_IMPORTED_MODULE_2__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_env_environment_service__WEBPACK_IMPORTED_MODULE_3__.EnvironmentService)); };
ErrorHandlerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: ErrorHandlerService, factory: ErrorHandlerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8616:
/*!**************************************************************!*\
  !*** ./projects/psr/src/app/core/error/error.interceptor.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-handler.service */ 7885);



class ErrorInterceptor {
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(x => console.log('xxxxxx => ', x)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => this.errorHandler.handleError(error)));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_error_handler_service__WEBPACK_IMPORTED_MODULE_0__.ErrorHandlerService)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 9350:
/*!*********************************************************!*\
  !*** ./projects/psr/src/app/core/error/error.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorModule": () => (/* binding */ ErrorModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _shared_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/alert */ 8665);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ 8616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class ErrorModule {
}
ErrorModule.ɵfac = function ErrorModule_Factory(t) { return new (t || ErrorModule)(); };
ErrorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ErrorModule });
ErrorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        // { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService] },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS, useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_1__.ErrorInterceptor, multi: true }
    ], imports: [[_shared_alert__WEBPACK_IMPORTED_MODULE_0__.AlertModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ErrorModule, { imports: [_shared_alert__WEBPACK_IMPORTED_MODULE_0__.AlertModule] }); })();


/***/ }),

/***/ 7191:
/*!*********************************************************************!*\
  !*** ./projects/psr/src/app/core/services/custom-url.serializer.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomUrlSerializer": () => (/* binding */ CustomUrlSerializer)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 1258);

class CustomUrlSerializer {
    constructor() {
        this._doubleSlashPattern = /\/\//;
    }
    parse(url) {
        let dus = new _angular_router__WEBPACK_IMPORTED_MODULE_0__.DefaultUrlSerializer();
        // url = this.replaceDoubleSlash(url);
        return dus.parse(url);
    }
    serialize(tree) {
        let dus = new _angular_router__WEBPACK_IMPORTED_MODULE_0__.DefaultUrlSerializer(), path = dus.serialize(tree);
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


/***/ }),

/***/ 1185:
/*!**************************************************************!*\
  !*** ./projects/psr/src/app/core/services/lookup.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LookupService": () => (/* binding */ LookupService)
/* harmony export */ });
/* harmony import */ var _core_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/app.config */ 4356);
/* harmony import */ var _core_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/app.constants */ 7334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);




class LookupService {
    constructor(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    getCountries() {
        return this.http.get(this.appConfig.getUrl(_core_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppEndpoints.GetCountries));
    }
}
LookupService.ɵfac = function LookupService_Factory(t) { return new (t || LookupService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG_TOKEN)); };
LookupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LookupService, factory: LookupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8693:
/*!***************************************************************!*\
  !*** ./projects/psr/src/app/core/services/storage.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

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
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3923:
/*!************************************************************!*\
  !*** ./projects/psr/src/app/core/services/test.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestService": () => (/* binding */ TestService)
/* harmony export */ });
/* harmony import */ var _auth_auth_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/auth.constants */ 7353);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.config */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);




class TestService {
    constructor(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    getError() {
        console.log(this.appConfig.getUrl('error/get-error'));
        return this.http.get(this.appConfig.getUrl('error/get-error'));
    }
    getTestDescription() {
        return this.http.get(this.appConfig.getUrl(_auth_auth_constants__WEBPACK_IMPORTED_MODULE_0__.AuthEndpoints.GetTestDescription)).pipe(
        // shareReplay()
        );
    }
}
TestService.ɵfac = function TestService_Factory(t) { return new (t || TestService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_config__WEBPACK_IMPORTED_MODULE_1__.APP_CONFIG_TOKEN)); };
TestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TestService, factory: TestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 599:
/*!**************************************************!*\
  !*** ./projects/psr/src/app/layout.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/services/auth.service */ 4796);
/* harmony import */ var _widgets_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/header/header.component */ 8088);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);





class LayoutComponent {
  constructor(auth) {
    this.auth = auth;
    this.isAuthenticated$ = this.auth.isAuthenticated();
  }

  ngOnInit() {}

}

LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
  return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};

LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LayoutComponent,
  selectors: [["app-layout"]],
  decls: 5,
  vars: 3,
  consts: [[3, "showSignInOrSignUp"], [1, "flex-1", "h-0"], [1, "px-2", "mx-auto", "max-w-7xl", "sm:px-6", "lg:px-8", "min-h-full", "flex", "flex-col"]],
  template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showSignInOrSignUp", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.isAuthenticated$));
    }
  },
  directives: [_widgets_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUFaIiwiZmlsZSI6ImxheW91dC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuICAgICJdfQ== */"]
});

/***/ }),

/***/ 597:
/*!******************************************************************!*\
  !*** ./projects/psr/src/app/modules/auth/auth-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 8621);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/register/register.component */ 8944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const authRoutes = [
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(authRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 7353:
/*!*************************************************************!*\
  !*** ./projects/psr/src/app/modules/auth/auth.constants.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthEndpoints": () => (/* binding */ AuthEndpoints),
/* harmony export */   "AuthRoutes": () => (/* binding */ AuthRoutes),
/* harmony export */   "AuthConstants": () => (/* binding */ AuthConstants)
/* harmony export */ });
let authPaths = {
    Register: `auth/register`,
    Login: `auth/authenticate`,
    RefreshToken: `auth/refresh`,
    RevokeToken: `auth/revoke`,
    CheckEmailExists: `users/exists`,
    GetTestDescription: `test`,
};
let authRoutes = {
    Register: () => [`/auth/register`],
    Login: () => [`/auth/authenticate`],
    RefreshToken: () => [`/auth/refresh`],
    RevokeToken: () => [`/auth/revoke`],
};
let authConsts = {
    UserKey: "psr-userkey-tlxstgmzna"
};
const AuthEndpoints = authPaths;
const AuthRoutes = authRoutes;
const AuthConstants = authConsts;


/***/ }),

/***/ 3395:
/*!*********************************************************!*\
  !*** ./projects/psr/src/app/modules/auth/auth.guard.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _psr_core_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @psr/core/app.constants */ 7334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _auth_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.constants */ 7353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);






class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        return this.auth.isAuthenticated().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(isAuthenticated => this.handleAuthorization(isAuthenticated, state)));
    }
    handleAuthorization(isAuthenticated, state) {
        if (!isAuthenticated) {
            this.router.navigate([_auth_constants__WEBPACK_IMPORTED_MODULE_1__.AuthRoutes.Login], {
                queryParams: {
                    [_psr_core_app_constants__WEBPACK_IMPORTED_MODULE_0__.QueryParameterNames.ReturnUrl]: state.url
                }
            });
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9631:
/*!***************************************************************!*\
  !*** ./projects/psr/src/app/modules/auth/auth.interceptor.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizeInterceptor": () => (/* binding */ AuthorizeInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 4796);
/* harmony import */ var _env_environment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment.service */ 322);




class AuthorizeInterceptor {
    constructor(auth, env) {
        this.auth = auth;
        this.env = env;
    }
    intercept(req, next) {
        return this.auth.getToken()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(token => this.processRequestWithToken(token, req, next)));
    }
    processRequestWithToken(token, req, next) {
        const isApiUrl = req.url.startsWith(this.env.apiUrl);
        if (!!token && isApiUrl) { //this.isSameOriginUrl(req)
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(req);
    }
    isSameOriginUrl(req) {
        // It's an absolute url with the same origin.
        if (req.url.startsWith(`${window.location.origin}/`)) {
            return true;
        }
        // It's a protocol relative url with the same origin.
        // For example: //www.example.com/api/Products
        if (req.url.startsWith(`//${window.location.host}/`)) {
            return true;
        }
        // It's a relative url like /api/Products
        if (/^\/[^\/].*/.test(req.url)) {
            return true;
        }
        // It's an absolute or protocol relative url that
        // doesn't have the same origin.
        return false;
    }
}
AuthorizeInterceptor.ɵfac = function AuthorizeInterceptor_Factory(t) { return new (t || AuthorizeInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_env_environment_service__WEBPACK_IMPORTED_MODULE_1__.EnvironmentService)); };
AuthorizeInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthorizeInterceptor, factory: AuthorizeInterceptor.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6421:
/*!**********************************************************!*\
  !*** ./projects/psr/src/app/modules/auth/auth.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 597);
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.interceptor */ 9631);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 8621);
/* harmony import */ var _components_password_strength_password_strength_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/password-strength/password-strength.component */ 6813);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ 8944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);









class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS, useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__.AuthorizeInterceptor, multi: true }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent,
        _components_password_strength_password_strength_component__WEBPACK_IMPORTED_MODULE_3__.PasswordStrengthComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule] }); })();


/***/ }),

/***/ 8621:
/*!*******************************************************************************!*\
  !*** ./projects/psr/src/app/modules/auth/components/login/login.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _auth_auth_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/auth.constants */ 7353);
/* harmony import */ var _core_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/app.constants */ 7334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/services/auth.service */ 4796);
/* harmony import */ var _auth_services_auth_validators_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth/services/auth-validators.service */ 4208);
/* harmony import */ var _shared_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/alert */ 8665);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);











function LoginComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "What is your email address?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoginComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Invalid email format");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoginComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "What is your password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(auth, fb, validators, alert, router) {
        this.auth = auth;
        this.fb = fb;
        this.validators = validators;
        this.alert = alert;
        this.router = router;
        this.formIsValid = false;
    }
    ngOnInit() {
        this.createForm();
        this.formStatusSub = this.form.statusChanges
            .pipe(
        /**
         * The Debouncetime emits the last received value
         * from the source observable after a specified amount
         * of time has elapsed without any other value appearing
         * on the source Observable
         */
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(100)).subscribe(formStatus => {
            if (formStatus === "INVALID" || formStatus === "PENDING")
                this.formIsValid = false;
            else
                this.formIsValid = true;
        });
    }
    loginEmployee() {
        if (this.form.valid) {
            this.loginSub = this.auth.login(this.form.value).subscribe(response => {
                // console.info('login', response);
                this.form.reset();
                this.alert.success("Login successful", "Welcome to the Personal Skill Rating app. Please rate yourself.");
                this.router.navigate([_core_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppRoutes.Home]);
            });
        }
        else {
            this.form.markAllAsTouched();
        }
    }
    isInvalid(control, validation = undefined) {
        return (!validation && control.touched && control.invalid) ||
            (validation && control.touched && control.hasError(validation));
    }
    get emailControl() { return this.form.get('email'); }
    get passwordControl() { return this.form.get('password'); }
    createForm() {
        this.form = this.fb.group({
            email: ['john@email.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
            password: ['J0h1n.Pass', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.validators.passwordPatternValidator()]]
        });
    }
    gotoRegister() {
        this.router.navigate([_auth_auth_constants__WEBPACK_IMPORTED_MODULE_0__.AuthRoutes.Register]);
    }
    ngOnDestroy() {
        this.loginSub.unsubscribe();
        this.formStatusSub.unsubscribe();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_services_auth_validators_service__WEBPACK_IMPORTED_MODULE_3__.AuthValidatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_alert__WEBPACK_IMPORTED_MODULE_4__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 8, consts: [[1, "sm:mx-auto", "sm:w-full", "sm:max-w-md"], [1, "psr-form__header"], [1, "psr-form__container"], [1, "psr-form__group"], [1, "psr-form__form", 3, "formGroup", "ngSubmit"], ["for", "email-address", 1, "psr-form__label"], ["formControlName", "email", "id", "email-address", "name", "email-address", "type", "email", "placeholder", "example@email.com", "autocomplete", "email", 1, "psr-form__field"], ["class", "psr-form__field-error-msg", 4, "ngIf"], ["for", "password", 1, "psr-form__label"], ["formControlName", "password", "id", "password", "name", "password", "type", "password", "placeholder", "", "autocomplete", "current-password", 1, "psr-form__field"], ["type", "submit", 1, "psr-form__button"], [1, "psr-form__footer"], [1, "psr-form__alt-action", 3, "click"], [1, "psr-form__field-error-msg"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.loginEmployee(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, LoginComponent_p_10_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, LoginComponent_p_11_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, LoginComponent_p_16_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Don't Have an Account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_22_listener() { return ctx.gotoRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Create it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("psr-form__field--error", ctx.isInvalid(ctx.emailControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isInvalid(ctx.emailControl, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isInvalid(ctx.emailControl, "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("psr-form__field--error", ctx.isInvalid(ctx.passwordControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isInvalid(ctx.passwordControl, "required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  overflow-y: auto;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n\n[_nghost-%COMP%]::after {\n  content: \"\";\n  background-image: url(/assets/bg-login.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.2;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+IiwibG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxlQUFBO0VBQUEsaUJBQUE7RUFBQSxjQUFBO0VBQUEsdUJBQUE7RUFBQSxvQkFBQTtFQUFBLHdCQUFBO0VBQUEsY0FBQTtFQUFBLGlCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGtCQUFBO0VBQUE7Q0FBQTs7QUNNQTtFQUNJLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FBQSIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiOmhvc3Qge1xyXG4gICAgQGFwcGx5IGJsb2NrIG1pbi1oLWZ1bGw7XHJcbiAgICBAYXBwbHkgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXI7XHJcbiAgICBAYXBwbHkgaC1zY3JlZW4gcHgtNCBweS0xMiBvdmVyZmxvdy15LWF1dG87XHJcbn1cclxuXHJcbjpob3N0OjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvYmctbG9naW4uanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3BhY2l0eTogMC4yMDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4vKiAubG9naW4ge1xyXG5cclxuICAgICZfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgQGFwcGx5IHctZnVsbCBtYXgtdy1tZDtcclxuICAgICAgICBAYXBwbHkgYmctd2hpdGUgcm91bmRlZC1tZDtcclxuICAgICAgICBAYXBwbHkgc206bXgtYXV0byBzbTp3LWZ1bGwgc206bWF4LXctbWQgbXQtODtcclxuICAgIH1cclxuXHJcbiAgICAmX19ncm91cCB7XHJcbiAgICAgICAgQGFwcGx5IHB4LTYgcHktODtcclxuICAgIH1cclxuXHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICAgIEBhcHBseSB0ZXh0LTN4bCB0ZXh0LWNlbnRlcjtcclxuICAgICAgICBAYXBwbHkgZm9udC1ib2xkIHRleHQtZ3JheS05MDA7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgICAgQGFwcGx5IHNwYWNlLXktNjtcclxuICAgIH1cclxuXHJcbiAgICAmX19sYWJlbCB7XHJcbiAgICAgICAgQGFwcGx5IGJsb2NrIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ZpZWxkIHtcclxuICAgICAgICBAYXBwbHkgYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBtdC0yO1xyXG4gICAgICAgIEBhcHBseSByb3VuZGVkIHB5LTMgcHgtNCBtYi0zIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lO1xyXG4gICAgICAgIEBhcHBseSBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWdyYXktMjAwIGZvY3VzOmJnLXdoaXRlO1xyXG5cclxuICAgICAgICAmLS1lcnJvciB7XHJcbiAgICAgICAgICAgIEBhcHBseSBib3JkZXItcmVkLTUwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtZXJyb3ItbXNnIHtcclxuICAgICAgICAgICAgQGFwcGx5IHRleHQteHMgaXRhbGljIHRleHQtcmVkLTUwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYnV0dG9uIHtcclxuICAgICAgICBAYXBwbHkgcmVsYXRpdmUgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgcHktMiBweC00O1xyXG4gICAgICAgIEBhcHBseSBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtbGcgZm9udC1tZWRpdW0gcm91bmRlZC1tZDtcclxuICAgICAgICBAYXBwbHkgdGV4dC1pbmRpZ28tMTAwIGJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMCBmb2N1czpvdXRsaW5lLW5vbmU7XHJcbiAgICAgICAgQGFwcGx5IGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMDtcclxuICAgICAgICBAYXBwbHkgZGlzYWJsZWQ6b3BhY2l0eS01MCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9vdGVyIHtcclxuICAgICAgICBAYXBwbHkgcHktNCB0ZXh0LWdyYXktNTAwIHRleHQtY2VudGVyIGJvcmRlci10IGJvcmRlci1ncmF5LTIwMDtcclxuICAgIH1cclxuXHJcbiAgICAmX19yZWdpc3RlciB7XHJcbiAgICAgICAgQGFwcGx5IGlubGluZS1ibG9jayBmb250LW1lZGl1bSAgdW5kZXJsaW5lIGhvdmVyOm5vLXVuZGVybGluZTtcclxuICAgIH1cclxufSAqLyJdfQ== */"] });


/***/ }),

/***/ 6813:
/*!*******************************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/auth/components/password-strength/password-strength.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordStrengthComponent": () => (/* binding */ PasswordStrengthComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_password_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/password.service */ 6251);



const _c0 = ["chunk"];
class PasswordStrengthComponent {
    constructor(pwdService, renderer) {
        this.pwdService = pwdService;
        this.renderer = renderer;
        this.defaultColor = '#ddd';
        this.colors = ['darkred', 'orangered', 'orange', 'yellowgreen', '#ddd'];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.passwordControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)()).subscribe((value) => {
            const colorIndex = this.getColorIndex(this.pwdService.checkStrength(value));
            // reset bg color            
            this.chunkEls.forEach((item, index) => {
                this.renderer.setStyle(item.nativeElement, 'background-color', this.defaultColor);
                if (colorIndex === -1 || index <= colorIndex) {
                    this.renderer.setStyle(item.nativeElement, 'background-color', this.colors[colorIndex]);
                }
            });
        });
    }
    getColorIndex(score) {
        const index = [10, 20, 30, 40].indexOf(score);
        return index === -1 ? (this.colors.length - 1) : index;
    }
}
PasswordStrengthComponent.ɵfac = function PasswordStrengthComponent_Factory(t) { return new (t || PasswordStrengthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_password_service__WEBPACK_IMPORTED_MODULE_0__.PasswordService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2)); };
PasswordStrengthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PasswordStrengthComponent, selectors: [["app-password-strength"]], viewQuery: function PasswordStrengthComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.chunkEls = _t);
    } }, inputs: { passwordControl: ["password-control", "passwordControl"] }, decls: 10, vars: 0, consts: [[1, "strength"], [1, "strength__bar"], [1, "strength__chunk"], ["chunk", ""]], template: function PasswordStrengthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "li", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "li", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "li", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "li", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, styles: [".strength[_ngcontent-%COMP%] {\n  display: block;\n}\n.strength__bar[_ngcontent-%COMP%] {\n  margin: 0px;\n  display: flex;\n  list-style-type: none;\n}\n.strength__bar[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.strength__bar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.strength__chunk[_ngcontent-%COMP%] {\n  height: 0.25rem;\n  width: 25%;\n  border-radius: 0.125rem;\n  --tw-bg-opacity: 1;\n  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudC5zY3NzIiwiPG5vIHNvdXJjZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7QUNGQTtFQUFBLFlBQUE7RUFBQSxjQUFBO0VBQUE7Q0FBQTtBQUFBO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBO0NBQUE7QUFBQTtFQUFBO0NBQUE7QUFBQTtFQUFBLGdCQUFBO0VBQUEsV0FBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFBQTtDQUFBIiwiZmlsZSI6InBhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0cmVuZ3RoIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICZfX2JhciB7XHJcbiAgICAgICAgQGFwcGx5IGZsZXggc3BhY2UteC0xIG0tMCBwLTAgbGlzdC1ub25lO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2NodW5rIHtcclxuICAgICAgICBAYXBwbHkgYmctZ3JheS0yMDAgcm91bmRlZC1zbSBoLTEgdy0xLzQ7XHJcbiAgICB9XHJcbn0iLG51bGxdfQ== */"] });


/***/ }),

/***/ 8944:
/*!*************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/auth/components/register/register.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _auth_auth_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/auth.constants */ 7353);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3720);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _services_auth_validators_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth-validators.service */ 4208);
/* harmony import */ var _core_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/lookup.service */ 1185);
/* harmony import */ var _shared_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/alert */ 8665);
/* harmony import */ var _env_environment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/environment.service */ 322);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _password_strength_password_strength_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../password-strength/password-strength.component */ 6813);















function RegisterComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "What is your email address?");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Email not available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Enter a combination of at least eight characters; numbers, uppercase, lowercase, and punctuation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Passwords do not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Confirm your password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " What is your first name? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " What is your last name? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", country_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](country_r12.value);
} }
function RegisterComponent_p_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " What country do you reside in? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " What is your time zone? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " What is your core work period? (8am - 4pm) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " What is your probably work period? (6am - 9pm) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(auth, fb, validators, lookupService, alert, env, router) {
        this.auth = auth;
        this.fb = fb;
        this.validators = validators;
        this.lookupService = lookupService;
        this.alert = alert;
        this.env = env;
        this.router = router;
        this.passwordChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.countries = [];
        this.formIsValid = false;
        this.debouncer$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    }
    ngOnInit() {
        this.createForm();
        this.lookupService.getCountries().subscribe(result => this.countries = result);
        this.debouncer$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)()).subscribe((value) => this.passwordChange.emit(value));
        this.formStatusSub = this.form.statusChanges.subscribe(formStatus => {
            if (formStatus === "INVALID" || formStatus === "PENDING")
                this.formIsValid = false;
            else
                this.formIsValid = true;
        });
    }
    registerEmployee() {
        if (this.form.valid) {
            this.registerSub = this.auth.register(this.form.value).subscribe(response => {
                console.info(response);
                this.form.reset();
                this.alert.success("Registration successful", "You have completed registration. Please login.", [
                    { name: 'Login', route: _auth_auth_constants__WEBPACK_IMPORTED_MODULE_0__.AuthRoutes.Login() }
                ]);
            });
        }
        else {
            this.form.markAllAsTouched();
        }
    }
    onPasswordChange(e) {
        const { target } = e;
        this.debouncer$.next(target.value);
    }
    isInvalid(control, validation = undefined) {
        return (!validation && control.touched && control.invalid) ||
            (validation && control.touched && control.hasError(validation));
    }
    get emailControl() { return this.form.get('email'); }
    get passwordControl() { return this.form.get('password'); }
    get confirmPasswordControl() { return this.form.get('confirmPassword'); }
    get firstNameControl() { return this.form.get('firstName'); }
    get lastNameControl() { return this.form.get('lastName'); }
    get countryControl() { return this.form.get('country'); }
    get timezoneControl() { return this.form.get('timezone'); }
    get workHoursControl() { return this.form.get('workHours'); }
    get coreHoursControl() { return this.form.get('coreHours'); }
    createForm() {
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.email], [this.validators.emailAvailableValidator()]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, this.validators.passwordPatternValidator()]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            timezone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            workHours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            coreHours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
        }, {
            validator: this.validators.passwordMatchValidator('password', 'confirmPassword')
        });
    }
    gotoLogin() {
        this.router.navigate([_auth_auth_constants__WEBPACK_IMPORTED_MODULE_0__.AuthRoutes.Login]);
    }
    ngOnDestroy() {
        this.registerSub.unsubscribe();
        this.formStatusSub.unsubscribe();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_auth_validators_service__WEBPACK_IMPORTED_MODULE_2__.AuthValidatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_alert__WEBPACK_IMPORTED_MODULE_4__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_env_environment_service__WEBPACK_IMPORTED_MODULE_5__.EnvironmentService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], outputs: { passwordChange: "passwordChange" }, decls: 68, vars: 33, consts: [[1, "sm:mx-auto", "sm:w-full", "sm:max-w-md"], [1, "psr-form__header"], [1, "psr-form__container"], [1, "psr-form__group"], [1, "psr-form__form", 3, "formGroup", "ngSubmit"], ["for", "email-address", 1, "psr-form__label"], ["formControlName", "email", "id", "email-address", "name", "email-address", "type", "email", "placeholder", "example@email.com", "autocomplete", "email", 1, "psr-form__field"], ["class", "psr-form__field-error-msg", 4, "ngIf"], [1, "flex", "flex-wrap", "-mx-3"], [1, "w-1/2", "px-3"], ["for", "password", 1, "psr-form__label"], ["formControlName", "password", "id", "password", "name", "password", "type", "password", "placeholder", "", "autocomplete", "current-password", 1, "psr-form__field", 3, "input"], [3, "password-control"], ["for", "confirm-password", 1, "psr-form__label"], ["formControlName", "confirmPassword", "id", "confirm-password", "name", "confirm-password", "type", "password", "placeholder", "", "autocomplete", "new-password", 1, "psr-form__field"], ["for", "first-name", 1, "psr-form__label"], ["formControlName", "firstName", "id", "first-name", "name", "first-name", "type", "text", "placeholder", "", 1, "psr-form__field"], ["for", "last-name", 1, "psr-form__label"], ["formControlName", "lastName", "id", "last-name", "name", "last-name", "type", "text", "placeholder", "", 1, "psr-form__field"], ["for", "country", 1, "psr-form__label"], ["formControlName", "country", "id", "country", "name", "country", 1, "psr-form__select"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "timezone", 1, "psr-form__label"], ["formControlName", "timezone", "id", "timezone", "name", "timezone", "type", "text", "placeholder", "", 1, "psr-form__field"], ["for", "core-hours", 1, "psr-form__label"], ["formControlName", "coreHours", "id", "core-hours", "name", "core-hours", "type", "text", "placeholder", "", 1, "psr-form__field"], ["for", "work-hours", 1, "psr-form__label"], ["formControlName", "workHours", "id", "work-hours", "name", "work-hours", "type", "text", "placeholder", "", 1, "psr-form__field"], ["type", "submit", 1, "psr-form__button", 3, "disabled"], [1, "psr-form__footer"], [1, "psr-form__alt-action", 3, "click"], [1, "psr-form__field-error-msg"], [3, "value"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener() { return ctx.registerEmployee(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, RegisterComponent_p_10_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, RegisterComponent_p_11_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_16_listener($event) { return ctx.onPasswordChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-password-strength", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, RegisterComponent_p_18_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, RegisterComponent_p_23_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, RegisterComponent_p_24_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, RegisterComponent_p_30_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, RegisterComponent_p_35_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, " -- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, RegisterComponent_option_43_Template, 2, 2, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, RegisterComponent_p_44_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Timezone");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, RegisterComponent_p_49_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Core hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, RegisterComponent_p_55_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Work hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, RegisterComponent_p_60_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "Already have an Account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_66_listener() { return ctx.gotoLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "Log in.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("psr-form__field--error", ctx.isInvalid(ctx.emailControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isInvalid(ctx.emailControl, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isInvalid(ctx.emailControl, "emailNotAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("psr-form__field--error", ctx.isInvalid(ctx.passwordControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("password-control", ctx.passwordControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isInvalid(ctx.passwordControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("psr-form__field--error", ctx.isInvalid(ctx.confirmPasswordControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.confirmPasswordControl.hasError("passwordMismatch"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isInvalid(ctx.confirmPasswordControl, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("psr-form__field--error", ctx.isInvalid(ctx.firstNameControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isInvalid(ctx.firstNameControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("psr-form__field--error", ctx.isInvalid(ctx.lastNameControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isInvalid(ctx.lastNameControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("psr-form__field--error", ctx.isInvalid(ctx.countryControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isInvalid(ctx.countryControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("psr-form__field--error", ctx.isInvalid(ctx.timezoneControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isInvalid(ctx.timezoneControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("psr-form__field--error", ctx.isInvalid(ctx.coreHoursControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isInvalid(ctx.coreHoursControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("psr-form__field--error", ctx.isInvalid(ctx.workHoursControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isInvalid(ctx.workHoursControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.formIsValid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _password_strength_password_strength_component__WEBPACK_IMPORTED_MODULE_6__.PasswordStrengthComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  overflow-y: auto;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n\n[_nghost-%COMP%]::after {\n  content: \"\";\n  background-image: url(/assets/bg-login.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.2;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+IiwicmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxlQUFBO0VBQUEsaUJBQUE7RUFBQSxjQUFBO0VBQUEsdUJBQUE7RUFBQSxvQkFBQTtFQUFBLHdCQUFBO0VBQUEsY0FBQTtFQUFBLGlCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGtCQUFBO0VBQUE7Q0FBQTs7QUNNQTtFQUNJLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOltudWxsLCI6aG9zdCB7XHJcbiAgICBAYXBwbHkgYmxvY2sgbWluLWgtZnVsbDtcclxuICAgIEBhcHBseSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcjtcclxuICAgIEBhcHBseSBoLXNjcmVlbiBweC00IHB5LTEyIG92ZXJmbG93LXktYXV0bztcclxufVxyXG5cclxuOmhvc3Q6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9iZy1sb2dpbi5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjIwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi8qIC5yZWdpc3RlciB7XHJcblxyXG4gICAgJl9fY29udGFpbmVyIHtcclxuICAgICAgICBAYXBwbHkgdy1mdWxsIG1heC13LW1kO1xyXG4gICAgICAgIEBhcHBseSBiZy13aGl0ZSByb3VuZGVkLW1kO1xyXG4gICAgICAgIEBhcHBseSBzbTpteC1hdXRvIHNtOnctZnVsbCBzbTptYXgtdy1tZCBtdC04O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2dyb3VwIHtcclxuICAgICAgICBAYXBwbHkgcHgtNiBweS04O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2hlYWRlciB7XHJcbiAgICAgICAgQGFwcGx5IHRleHQtM3hsIHRleHQtY2VudGVyO1xyXG4gICAgICAgIEBhcHBseSBmb250LWJvbGQgdGV4dC1ncmF5LTkwMDtcclxuICAgIH1cclxuXHJcbiAgICAmX19mb3JtIHtcclxuICAgICAgICBAYXBwbHkgc3BhY2UteS02O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2xhYmVsIHtcclxuICAgICAgICBAYXBwbHkgYmxvY2sgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1tZWRpdW07XHJcbiAgICB9XHJcblxyXG4gICAgJl9fc2VsZWN0IHtcclxuXHJcbiAgICAgICAgQGFwcGx5IGJsb2NrIHctZnVsbCBtdC0yIHBsLTMgcHItMTAgcHktMi41O1xyXG4gICAgICAgIEBhcHBseSByb3VuZGVkIG1iLTMgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgO1xyXG4gICAgICAgIEBhcHBseSAgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGZvY3VzOmJnLXdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ZpZWxkIHtcclxuICAgICAgICBAYXBwbHkgYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBtdC0yO1xyXG4gICAgICAgIEBhcHBseSByb3VuZGVkIHB5LTMgcHgtNCBtYi0zIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lO1xyXG4gICAgICAgIEBhcHBseSBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWdyYXktMjAwIGZvY3VzOmJnLXdoaXRlO1xyXG4gICAgICAgIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XHJcblxyXG4gICAgICAgICYtLWVycm9yIHtcclxuICAgICAgICAgICAgQGFwcGx5IGJvcmRlci1yZWQtNTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1lcnJvci1tc2cge1xyXG4gICAgICAgICAgICBAYXBwbHkgdGV4dC14cyBpdGFsaWMgdGV4dC1yZWQtNTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19idXR0b24ge1xyXG4gICAgICAgIEBhcHBseSByZWxhdGl2ZSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBweS0yIHB4LTQ7XHJcbiAgICAgICAgQGFwcGx5IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1sZyBmb250LW1lZGl1bSByb3VuZGVkLW1kO1xyXG4gICAgICAgIEBhcHBseSB0ZXh0LWluZGlnby0xMDAgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZTtcclxuICAgICAgICBAYXBwbHkgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwO1xyXG4gICAgICAgIEBhcHBseSBkaXNhYmxlZDpvcGFjaXR5LTUwIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZDtcclxuICAgIH1cclxuXHJcbiAgICAmX19mb290ZXIge1xyXG4gICAgICAgIEBhcHBseSBweS00IHRleHQtZ3JheS01MDAgdGV4dC1jZW50ZXIgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2xvZ2luIHtcclxuICAgICAgICBAYXBwbHkgaW5saW5lLWJsb2NrIGZvbnQtbWVkaXVtICB1bmRlcmxpbmUgaG92ZXI6bm8tdW5kZXJsaW5lO1xyXG4gICAgfVxyXG59ICovIl19 */"] });


/***/ }),

/***/ 1347:
/*!****************************************************************!*\
  !*** ./projects/psr/src/app/modules/auth/models/user.model.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_USER": () => (/* binding */ EMPTY_USER)
/* harmony export */ });
const EMPTY_USER = {
    id: '00000000-0000-0000-0000-000000000000',
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    token: ''
};


/***/ }),

/***/ 4208:
/*!*******************************************************************************!*\
  !*** ./projects/psr/src/app/modules/auth/services/auth-validators.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthValidatorsService": () => (/* binding */ AuthValidatorsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 4796);




class AuthValidatorsService {
    constructor(auth) {
        this.auth = auth;
    }
    passwordMatchValidator(password, confirmPassword) {
        return (formGroup) => {
            const passwordControl = formGroup.controls[password];
            const confirmPasswordControl = formGroup.controls[confirmPassword];
            if (!passwordControl || !confirmPasswordControl) {
                return null;
            }
            if (confirmPasswordControl.errors &&
                !confirmPasswordControl.errors.passwordMismatch) {
                return null;
            }
            if (passwordControl.value !== confirmPasswordControl.value) {
                confirmPasswordControl.setErrors({ passwordMismatch: true });
                return true;
            }
            else {
                confirmPasswordControl.setErrors(null);
                return null;
            }
        };
    }
    /*
        RegEx	Description
        ^	The password string will start this way
        (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
        (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
        (?=.*[0-9])	The string must contain at least 1 numeric character
        (?=.*[!@#$%^&*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
        (?=.{8,})	The string must be eight characters or longer

        by- Nic Raboy
    */
    passwordPatternValidator() {
        return (control) => {
            if (!control.value)
                return null;
            const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])(?=.{8,})');
            const valid = regex.test(control.value);
            return valid ? null : { passwordInvalid: true };
        };
    }
    emailAvailableValidator() {
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        const debouncedInput$ = subject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(value => this.auth.checkEmailExists(value)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((result, index) => {
            return result.value === 'invalid' ? { emailNotAvailable: true } : null;
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)());
        return (control) => {
            if (!control.value)
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
            subject.next(control.value);
            return debouncedInput$;
        };
    }
}
AuthValidatorsService.ɵfac = function AuthValidatorsService_Factory(t) { return new (t || AuthValidatorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthValidatorsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: AuthValidatorsService, factory: AuthValidatorsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4796:
/*!********************************************************************!*\
  !*** ./projects/psr/src/app/modules/auth/services/auth.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _core_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/app.config */ 4356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6461);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 4787);
/* harmony import */ var _auth_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.constants */ 7353);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ 1347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/storage.service */ 8693);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 1258);









class AuthService {
    constructor(http, storage, router, appConfig) {
        this.http = http;
        this.storage = storage;
        this.router = router;
        this.appConfig = appConfig;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    }
    redirectToLogin() {
        this.router.navigate([_auth_constants__WEBPACK_IMPORTED_MODULE_1__.AuthRoutes.Login]);
    }
    isAuthenticated() {
        return this.getUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(user => !!user));
    }
    getUser() {
        let source$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concat)(this.userSubject.pipe(
        // take will trigger the `subject` observable
        // to complete so that the next observable in
        // concat is subscribed to
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1), 
        // filter out null values (false)
        // convert null to false
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(user => !!user)), 
        // the `of` observable will automatically complete
        // so the next observable in concate will be
        // subscribed to
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(this.storage.getItem(_auth_constants__WEBPACK_IMPORTED_MODULE_1__.AuthConstants.UserKey)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(user => !!user), 
        // tap(x => console.log('storage => ', x)),
        // we will get here if the value is not null
        // update the user subject
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(user => this.userSubject.next(user))), this.userSubject.asObservable()).pipe(
        // here to allow distinctUntilKeyChanged to work
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(user => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(user !== null && user !== void 0 ? user : _models_user_model__WEBPACK_IMPORTED_MODULE_2__.EMPTY_USER)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.distinctUntilKeyChanged)('id'), 
        // transform back to null
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(user => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(user.id === _models_user_model__WEBPACK_IMPORTED_MODULE_2__.EMPTY_USER.id ? null : user)));
        return source$;
    }
    getToken() {
        // this.retrieveUser()
        return this.getUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(user => user && user.token));
    }
    login(payload) {
        return this.http.post(this.appConfig.getUrl(_auth_constants__WEBPACK_IMPORTED_MODULE_1__.AuthEndpoints.Login), payload, { withCredentials: true }).pipe(
        // shareReplay(),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(user => {
            this.userSubject.next(user);
            // this.startRefreshTokenTimer();
            this.storeUser(user);
        }));
    }
    logout() {
        // this.userSubject.next(null);
        // logout from server
        // pass refresh token if you can
        // console.log('logging out...');
        return this.http.post(this.appConfig.getUrl(_auth_constants__WEBPACK_IMPORTED_MODULE_1__.AuthEndpoints.RevokeToken), {}, { withCredentials: true }).pipe(
        // shareReplay(),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)((user) => {
            // emit null as next user
            this.userSubject.next(null);
            // stop refresh token timer
            // this.startRefreshTokenTimer();
            // remove user from localStorage
            this.removeUser();
            // redirect to login
            this.router.navigate([_auth_constants__WEBPACK_IMPORTED_MODULE_1__.AuthRoutes.Login]);
        })).subscribe();
    }
    register(payload) {
        return this.http.post(this.appConfig.getUrl(_auth_constants__WEBPACK_IMPORTED_MODULE_1__.AuthEndpoints.Register), payload, { withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(user => {
            this.userSubject.next(user);
            // this.startRefreshTokenTimer();
            this.storeUser(user);
        }));
    }
    refreshToken() {
        return this.getToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(token => this.http.post(this.appConfig.getUrl(_auth_constants__WEBPACK_IMPORTED_MODULE_1__.AuthEndpoints.RefreshToken), { token }, { withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)((user) => {
            this.userSubject.next(user);
            // this.startRefreshTokenTimer();
            this.storeUser(user);
        }))));
    }
    checkEmailExists(email) {
        return this.http.post(this.appConfig.getUrl(_auth_constants__WEBPACK_IMPORTED_MODULE_1__.AuthEndpoints.CheckEmailExists), {
            email: email
        });
    }
    startRefreshTokenTimer() {
        this.getUser()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe(user => {
            // parse json object from base64 encoded jwt token
            const jwtToken = user && JSON.parse(atob(user.token.split('.')[1]));
            if (!jwtToken)
                return;
            // set a timeout to refresh the token a minute before it expires
            const expires = new Date(jwtToken.exp * 1000);
            const timeout = expires.getTime() - Date.now() - (60 * 1000);
            this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
        });
    }
    stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
    storeUser(item) {
        this.storage.saveItem(_auth_constants__WEBPACK_IMPORTED_MODULE_1__.AuthConstants.UserKey, item);
    }
    removeUser() {
        this.storage.removeItem(_auth_constants__WEBPACK_IMPORTED_MODULE_1__.AuthConstants.UserKey);
    }
    retrieveUser() {
        return this.storage.getItem(_auth_constants__WEBPACK_IMPORTED_MODULE_1__.AuthConstants.UserKey);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_core_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_core_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG_TOKEN)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6251:
/*!************************************************************************!*\
  !*** ./projects/psr/src/app/modules/auth/services/password.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordService": () => (/* binding */ PasswordService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class PasswordService {
    constructor() { }
    checkStrength(password) {
        /* if (!password)
            return 0; */
        // 1
        let force = 0;
        // 2
        const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
        const lowerLetters = /[a-z]+/.test(password);
        const upperLetters = /[A-Z]+/.test(password);
        const numbers = /[0-9]+/.test(password);
        const symbols = regex.test(password);
        // 3
        const flags = [lowerLetters, upperLetters, numbers, symbols];
        // 4
        let passedMatches = 0;
        for (const flag of flags) {
            passedMatches += flag === true ? 1 : 0;
        }
        // 5
        force += 2 * password.length + ((password.length >= 10) ? 1 : 0);
        force += passedMatches * 10;
        // 6
        force = (password.length <= 8) ? Math.min(force, 10) : force;
        // 7
        force = (passedMatches === 1) ? Math.min(force, 10) : force;
        force = (passedMatches === 2) ? Math.min(force, 20) : force;
        force = (passedMatches === 3) ? Math.min(force, 30) : force;
        force = (passedMatches === 4) ? Math.min(force, 40) : force;
        return force;
    }
}
PasswordService.ɵfac = function PasswordService_Factory(t) { return new (t || PasswordService)(); };
PasswordService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PasswordService, factory: PasswordService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1891:
/*!*************************************************************!*\
  !*** ./projects/psr/src/app/modules/home/home.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _auth_auth_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/auth.constants */ 7353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _core_services_test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/test.service */ 3923);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);






function HomeComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Welcome ", ctx_r0.user == null ? null : ctx_r0.user.firstName, "");
} }
class HomeComponent {
    constructor(test, auth, router) {
        this.test = test;
        this.auth = auth;
        this.router = router;
        this.user = null;
    }
    ngOnInit() {
        this.getUserSub = this.auth.getUser()
            .subscribe(user => {
            this.user = user;
        });
    }
    onGetError() {
        this.test.getError().subscribe(value => {
            console.info(value);
        }, error => {
            console.error(error);
        });
    }
    onGetTestDescription() {
        this.testDescSub = this.test.getTestDescription().subscribe(result => {
            console.log('result', result);
        });
    }
    onLogin() {
        this.router.navigate([_auth_auth_constants__WEBPACK_IMPORTED_MODULE_0__.AuthRoutes.Login]);
    }
    onLogout() {
        this.auth.logout();
    }
    ngOnDestroy() {
        this.getUserSub && this.getUserSub.unsubscribe();
        // this.logoutSub.unsubscribe();
        this.testDescSub && this.testDescSub.unsubscribe();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_test_service__WEBPACK_IMPORTED_MODULE_1__.TestService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 1, consts: [[4, "ngIf"], [1, "btn__elevated", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, HomeComponent_h1_2_Template, 2, 1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_3_listener() { return ctx.onGetError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Get Error\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() { return ctx.onGetTestDescription(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Get Test Description\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_7_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Logout\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Login\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".btn__elevated[_ngcontent-%COMP%] {--tw-bg-opacity: 1;background-color: rgba(255, 255, 255, var(--tw-bg-opacity))\n}.btn__elevated[_ngcontent-%COMP%]:hover {--tw-bg-opacity: 1;background-color: rgba(243, 244, 246, var(--tw-bg-opacity))\n}.btn__elevated[_ngcontent-%COMP%] {font-weight: 600;--tw-text-opacity: 1;color: rgba(31, 41, 55, var(--tw-text-opacity));border-radius: 0.25rem;border-width: 1px;--tw-border-opacity: 1;border-color: rgba(156, 163, 175, var(--tw-border-opacity));padding-top: 0.5rem;padding-bottom: 0.5rem;padding-left: 1rem;padding-right: 1rem;--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBLG1CQUFBO0NBQUEsc0JBQUEsbUJBQUE7Q0FBQSxnQkFBQSxpQkFBQSxxQkFBQSxnREFBQSx1QkFBQSxrQkFBQSx1QkFBQSw0REFBQSxvQkFBQSx1QkFBQSxtQkFBQSxvQkFBQSw2RUFBQTtDQUFBIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 621:
/*!*****************************************************************!*\
  !*** ./projects/psr/src/app/modules/secret/secret.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecretComponent": () => (/* binding */ SecretComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SecretComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecretComponent.ɵfac = function SecretComponent_Factory(t) { return new (t || SecretComponent)(); };
SecretComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecretComponent, selectors: [["app-secret"]], decls: 2, vars: 0, template: function SecretComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " secret works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 3821:
/*!*************************************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/components/add-skill-card/add-skill-card.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSkillCardComponent": () => (/* binding */ AddSkillCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


class AddSkillCardComponent {
    constructor() {
        this.addSkillCardClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    addSkillCardClickHandler() {
        this.addSkillCardClick.emit();
    }
    onFocus() {
        console.log('onFocus');
    }
}
AddSkillCardComponent.ɵfac = function AddSkillCardComponent_Factory(t) { return new (t || AddSkillCardComponent)(); };
AddSkillCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddSkillCardComponent, selectors: [["app-add-skill-card"]], outputs: { addSkillCardClick: "addSkillCardClick" }, decls: 5, vars: 0, consts: [["tabindex", "0", 1, "flex", "flex-col", "items-center", "justify-center", "h-full", "p-4", "space-y-4", "text-left", "text-indigo-500", "bg-white", "border", "border-gray-100", "rounded-lg", "shadow", "hover:border-gray-300", "focus-within:ring-2", "focus-within:ring-inset", "focus-within:ring-indigo-500", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-16", "h-16"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"]], template: function AddSkillCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSkillCardComponent_Template_div_click_0_listener() { return ctx.addSkillCardClickHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add New Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 190px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1za2lsbC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUVBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBSiIsImZpbGUiOiJhZGQtc2tpbGwtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvLyB3aWR0aDogMjUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTkwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4iXX0= */"] });


/***/ }),

/***/ 6220:
/*!***************************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/components/skill-add/skill-add.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillAddComponent": () => (/* binding */ SkillAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_skills_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/skills.service */ 7023);
/* harmony import */ var _shared_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/secondary-header/secondary-header.component */ 7417);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/disable-control.directive */ 5739);









function SkillAddComponent_ng_container_2_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](category_r3.name);
} }
function SkillAddComponent_ng_container_2_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", subCategory_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", subCategory_r4.name, " ");
} }
function SkillAddComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SkillAddComponent_ng_container_2_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.addSkill(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Skill name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SkillAddComponent_ng_container_2_Template_select_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.categoryChangeHandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SkillAddComponent_ng_container_2_option_12_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Sub category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, SkillAddComponent_ng_container_2_option_19_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Add skill ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disableControl", ctx_r0.isSubcategoryDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.subCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.formIsValid);
} }
class SkillAddComponent {
    constructor(fb, route, router, skillService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.skillService = skillService;
        this.title = 'Add New Skill';
        this.description = 'Provide details about the skill.';
        this.categories = [];
        this.subCategories = [];
        this.formIsValid = false;
        this.isSubcategoryDisabled = true;
    }
    get nameControl() { var _a; return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get('name'); }
    get categoryControl() { var _a; return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get('category'); }
    get subCategoryContorl() { var _a; return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get('subCategory'); }
    ngOnInit() {
        this.route.data.subscribe(({ categories }) => {
            this.categories = categories;
        });
        this.createForm();
        this.listenCategoryValueChange();
        this.listenFormStatusChange();
    }
    addSkill() {
        var _a, _b;
        if (this.formIsValid && ((_a = this.form) === null || _a === void 0 ? void 0 : _a.valid)) {
        }
        else {
            (_b = this.form) === null || _b === void 0 ? void 0 : _b.markAllAsTouched();
        }
    }
    createForm() {
        this.form = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            subCategory: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
    }
    listenCategoryValueChange() {
        this._categoryValueChangeSub = this.categoryControl.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(categoryId => !!categoryId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(categoryId => this.skillService.getSubCategories(categoryId)))
            .subscribe(subCategories => {
            this.subCategories = subCategories;
            this.subCategoryContorl.patchValue('');
            this.isSubcategoryDisabled = false;
        });
    }
    listenFormStatusChange() {
        var _a;
        this._formStatusChangeSub = (_a = this.form) === null || _a === void 0 ? void 0 : _a.statusChanges.pipe(
        /**
         * The Debouncetime emits the last received value
         * from the source observable after a specified amount
         * of time has elapsed without any other value appearing
         * on the source Observable
         */
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(100)).subscribe(formStatus => {
            if (formStatus === "INVALID" || formStatus === "PENDING")
                this.formIsValid = false;
            else
                this.formIsValid = true;
        });
    }
    categoryChangeHandler() {
        this.isSubcategoryDisabled = true;
    }
    onCloseClick() {
        this.router.navigate(['/skills', { outlets: { details: null } }]);
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this._categoryValueChangeSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this._formStatusChangeSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
SkillAddComponent.ɵfac = function SkillAddComponent_Factory(t) { return new (t || SkillAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_skills_service__WEBPACK_IMPORTED_MODULE_0__.SkillsService)); };
SkillAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SkillAddComponent, selectors: [["app-skill-add"]], decls: 3, vars: 3, consts: [[3, "title", "description", "closeClick"], [1, "flex", "flex-col", "py-5", "space-y-6", "border-t", "border-gray-200"], [4, "ngIf"], [1, "psr-form__form", 3, "formGroup", "ngSubmit"], ["for", "name", 1, "psr-form__label"], ["formControlName", "name", "id", "name", "name", "name", "type", "text", "placeholder", "", 1, "psr-form__field", "psr-form__field--alt"], ["for", "category", 1, "psr-form__label"], ["formControlName", "category", "id", "category", "name", "category", 1, "psr-form__select", "psr-form__select--alt", 3, "change"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "sub-category", 1, "psr-form__label"], ["formControlName", "subCategory", "id", "sub-category", "name", "sub-category", 1, "psr-form__select", "psr-form__select--alt", 3, "disableControl"], ["type", "submit", 1, "psr-form__button", 3, "disabled"], [3, "value"]], template: function SkillAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-secondary-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("closeClick", function SkillAddComponent_Template_app_secondary_header_closeClick_0_listener() { return ctx.onCloseClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SkillAddComponent_ng_container_2_Template, 23, 5, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx.title)("description", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_shared_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_1__.SecondaryHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _shared_directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_2__.DisableControlDirective], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJza2lsbC1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"] });


/***/ }),

/***/ 3447:
/*!*****************************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/components/skill-card/skill-card.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillCardComponent": () => (/* binding */ SkillCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _psr_shared_icons_icon_eye_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @psr/shared/icons/icon-eye.component */ 561);
/* harmony import */ var _psr_shared_icons_icon_pencil_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @psr/shared/icons/icon-pencil.component */ 8392);
/* harmony import */ var _psr_shared_icons_icon_trash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @psr/shared/icons/icon-trash.component */ 4842);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/button-icon/button-icon.component */ 4264);
/* harmony import */ var _shared_icons_icon_dot_vertical_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/icons/icon-dot-vertical.component */ 445);
/* harmony import */ var _shared_link_icon_link_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/link-icon/link-icon.component */ 8971);









function SkillCardComponent_ng_container_0_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-link-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("menuItem", item_r2);
} }
function SkillCardComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Employees");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Team Competency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "app-button-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("buttonClick", function SkillCardComponent_ng_container_0_Template_app_button_icon_buttonClick_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.onMoreClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "app-icon-dot-vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, SkillCardComponent_ng_container_0_ng_container_23_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.skill.name, " Employee Packet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.skill.employees);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.skill.teamCompetency);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", ctx_r0.getCategoryInfo(ctx_r0.skill));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getCategoryInfo(ctx_r0.skill));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.menuItems);
} }
class SkillCardComponent {
    constructor() {
        this.menuItems = [
            { label: 'Skill detail', routerLink: [], isIconVisible: true, iconComponent: _psr_shared_icons_icon_eye_component__WEBPACK_IMPORTED_MODULE_0__.IconEyeComponent },
            { label: 'Edit skill', routerLink: [], isIconVisible: true, iconComponent: _psr_shared_icons_icon_pencil_component__WEBPACK_IMPORTED_MODULE_1__.IconPencilComponent },
            { label: 'Delete skill', routerLink: [], isIconVisible: true, iconComponent: _psr_shared_icons_icon_trash_component__WEBPACK_IMPORTED_MODULE_2__.IconTrashComponent }
        ];
        this.skillCardClick = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    }
    ngOnInit() {
    }
    getCategoryInfo(skill) {
        return `${skill.categoryName} / ${skill.subCategoryName}`;
    }
    skillCardClickHandler(skill) {
        this.skillCardClick.emit(skill);
    }
    onMoreClick() {
        console.log('More clicked');
    }
}
SkillCardComponent.ɵfac = function SkillCardComponent_Factory(t) { return new (t || SkillCardComponent)(); };
SkillCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SkillCardComponent, selectors: [["app-skill-card"]], inputs: { skill: "skill", menuItems: "menuItems" }, outputs: { skillCardClick: "skillCardClick" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["tabindex", "0", 1, "flex", "flex-col", "justify-between", "h-full", "p-4", "space-y-4", "text-left", "border", "border-gray-200", "rounded-lg", "hover:border-gray-300", "focus-within:ring-1", "focus-within:ring-inset", "focus-within:ring-indigo-500"], [1, "text-lg", "font-medium", "text-gray-700"], [1, "skill-stats"], [1, "skill-stats__info"], [1, "mr-4", "text-xs", "font-thin", "text-gray-500", "transition-colors", "duration-200", "hover:text-gray-900"], [1, "text-xl", "font-normal", "text-gray-700"], [1, "flex", "items-center", "h-5"], [1, "flex-1", "pr-2", "text-sm", "font-thin", "text-gray-500", "truncate", 3, "title"], [1, "relative"], [3, "buttonClick"], ["role", "menu", "aria-orientation", "vertical", "aria-labelledby", "menu-0-button", "tabindex", "-1", 1, "absolute", "right-0", "w-56", "mt-2", "origin-top-right", "bg-white", "rounded-md", "shadow-lg", "ring-1", "ring-black", "ring-opacity-5", "focus:outline-none"], ["role", "none", 1, "py-1"], [4, "ngFor", "ngForOf"], [1, "text-gray-700", "hover:text-indigo-700", 3, "menuItem"]], template: function SkillCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, SkillCardComponent_ng_container_0_Template, 24, 6, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.skill);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_3__.ButtonIconComponent, _shared_icons_icon_dot_vertical_component__WEBPACK_IMPORTED_MODULE_4__.IconDotVerticalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _shared_link_icon_link_icon_component__WEBPACK_IMPORTED_MODULE_5__.LinkIconComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 190px;\n  cursor: pointer;\n}\n\n.skill-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.skill-stats__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUdBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFBUiIsImZpbGUiOiJza2lsbC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7IC8vICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgbWluLWhlaWdodDogMTkwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uc2tpbGwtc3RhdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgJl9faW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 530:
/*!***********************************************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/components/skill-category-card/skill-category-card.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillCategoryCardComponent": () => (/* binding */ SkillCategoryCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);



function SkillCategoryCardComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillCategoryCardComponent_ng_container_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onCardClickHandler(ctx_r1.category); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.category.name);
} }
class SkillCategoryCardComponent {
    constructor() {
        this.onCardClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    onCardClickHandler(category) {
        this.onCardClick.emit(category);
    }
}
SkillCategoryCardComponent.ɵfac = function SkillCategoryCardComponent_Factory(t) { return new (t || SkillCategoryCardComponent)(); };
SkillCategoryCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillCategoryCardComponent, selectors: [["app-skill-category-card"]], inputs: { category: "category" }, outputs: { onCardClick: "onCardClick" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["tabindex", "0", 1, "flex", "flex-col", "justify-between", "h-full", "p-4", "space-y-4", "text-left", "border", "border-gray-200", "rounded-lg", "hover:border-gray-300", "focus-within:ring-1", "focus-within:ring-inset", "focus-within:ring-indigo-500", 3, "click"], [1, "text-lg", "font-medium", "text-gray-700"]], template: function SkillCategoryCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SkillCategoryCardComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.category);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLWNhdGVnb3J5LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJza2lsbC1jYXRlZ29yeS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvLyBtYXgtaGVpZ2h0OiAxNTBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 8244:
/*!***********************************************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/components/skill-category-list/skill-category-list.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillCategoryListComponent": () => (/* binding */ SkillCategoryListComponent)
/* harmony export */ });
/* harmony import */ var _skill_mgt_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../skill-mgt-constants */ 4043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/page-title.service */ 8330);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _skill_category_card_skill_category_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skill-category-card/skill-category-card.component */ 530);






function SkillCategoryListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-skill-category-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onCardClick", function SkillCategoryListComponent_ng_container_0_Template_app_skill_category_card_onCardClick_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const category_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onCardClick(category_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("category", category_r1);
} }
class SkillCategoryListComponent {
    constructor(route, router, pageTitle) {
        this.route = route;
        this.router = router;
        this.pageTitle = pageTitle;
        this.categories = [];
        this.pageTitle.updatePageTitle("Skill Categories");
        this.pageTitle.updatePageSubTitle("Choose a skill category from the list below to see sub categories");
    }
    ngOnInit() {
        this.route.data.subscribe(({ categories }) => {
            this.categories = categories;
        });
    }
    onCardClick(category) {
        console.log(_skill_mgt_constants__WEBPACK_IMPORTED_MODULE_0__.SkillMgtRoutes.ListSubcategories(category.id));
        this.router.navigate(_skill_mgt_constants__WEBPACK_IMPORTED_MODULE_0__.SkillMgtRoutes.ListSubcategories(category.id));
    }
}
SkillCategoryListComponent.ɵfac = function SkillCategoryListComponent_Factory(t) { return new (t || SkillCategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_page_title_service__WEBPACK_IMPORTED_MODULE_1__.PageTitleService)); };
SkillCategoryListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SkillCategoryListComponent, selectors: [["app-skill-category-list"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "category", "onCardClick"]], template: function SkillCategoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SkillCategoryListComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _skill_category_card_skill_category_card_component__WEBPACK_IMPORTED_MODULE_2__.SkillCategoryCardComponent], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-auto-rows: minmax(150px, auto);\n  grid-gap: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLWNhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsMkRBQUE7RUFFQSxtQ0FBQTtFQUNBLGNBQUE7QUFESiIsImZpbGUiOiJza2lsbC1jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC8vIEBhcHBseSBmbGV4IGZsZXgtd3JhcCBzcGFjZS14LTQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxNTBweCwgYXV0byk7XG4gICAgZ3JpZC1nYXA6IDJyZW07XG59Il19 */"] });


/***/ }),

/***/ 1528:
/*!*********************************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/components/skill-filter/skill-filter.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillFilterComponent": () => (/* binding */ SkillFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/directives/disable-control.directive */ 5739);





function SkillFilterComponent_ng_container_0_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r3.name);
} }
function SkillFilterComponent_ng_container_0_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", subCategory_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", subCategory_r4.name, " ");
} }
function SkillFilterComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SkillFilterComponent_ng_container_0_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.filterSkillsHandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Pick a category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SkillFilterComponent_ng_container_0_option_7_Template, 2, 2, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Pick a subcategory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SkillFilterComponent_ng_container_0_option_12_Template, 2, 2, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disableControl", ctx_r0.isSubcategoryDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.subCategories);
} }
class SkillFilterComponent {
    constructor(fb) {
        this.fb = fb;
        this.categories = [];
        this.subCategories = [];
        this.isSubcategoryDisabled = true;
    }
    ngOnInit() {
        this.form = this.fb.group({
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            subCategory: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
    }
    filterSkillsHandler() {
    }
}
SkillFilterComponent.ɵfac = function SkillFilterComponent_Factory(t) { return new (t || SkillFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
SkillFilterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SkillFilterComponent, selectors: [["app-skill-filter"]], inputs: { categories: "categories" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "flex", "justify-end", "space-x-4"], ["formControlName", "category", "id", "category", "name", "category", 1, "psr-form__select", "psr-form__select--alt"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "subCategory", "id", "sub-category", "name", "sub-category", 1, "psr-form__select", "psr-form__select--alt", 3, "disableControl"], [3, "value"]], template: function SkillFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SkillFilterComponent_ng_container_0_Template, 13, 4, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_0__.DisableControlDirective], styles: ["[_nghost-%COMP%] {\n    display: flex;\n    justify-content: flex-end\n}\n[_nghost-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(1rem * var(--tw-space-x-reverse));\n    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)))\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUEsY0FBQTtJQUFBO0NBQUE7QUFBQTtJQUFBLHdCQUFBO0lBQUEscURBQUE7SUFBQTtDQUFBIiwiZmlsZSI6InNraWxsLWZpbHRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7539:
/*!*****************************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/components/skill-list/skill-list.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillListComponent": () => (/* binding */ SkillListComponent)
/* harmony export */ });
/* harmony import */ var _skill_mgt_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../skill-mgt-constants */ 4043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/page-title.service */ 8330);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _add_skill_card_add_skill_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-skill-card/add-skill-card.component */ 3821);
/* harmony import */ var _skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../skill-card/skill-card.component */ 3447);
/* harmony import */ var _widgets_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../widgets/empty-state/empty-state.component */ 9497);








function SkillListComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-skill-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("skillCardClick", function SkillListComponent_ng_container_0_ng_container_2_Template_app_skill_card_skillCardClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r4.skillCardClickHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("skill", skill_r3);
} }
function SkillListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-add-skill-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("addSkillCardClick", function SkillListComponent_ng_container_0_Template_app_add_skill_card_addSkillCardClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.addSkillCardClickHandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SkillListComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.skills);
} }
function SkillListComponent_app_empty_state_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-empty-state", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r1.emptyStateTitle)("description", ctx_r1.emptyStateDescription)("buttonLabel", ctx_r1.emptyStateButtonLabel);
} }
class SkillListComponent {
    constructor(route, router, pageTitle) {
        this.route = route;
        this.router = router;
        this.pageTitle = pageTitle;
        this.skills = [];
        this.pageTitle.updatePageTitle("Skills");
        this.pageTitle.updatePageSubTitle("View list of skill, see skill details, and add new skill.");
        this.emptyStateTitle = 'No skills';
        this.emptyStateDescription = 'Get started by adding skills to this sub category';
        this.emptyStateButtonLabel = 'Add New Skill';
    }
    get isSkillsVisible() {
        return this.skills.length > 0;
    }
    ngOnInit() {
        this.route.data.subscribe(({ skills }) => {
            this.skills = skills; //.slice(0, 1);
        });
    }
    addSkillCardClickHandler() {
        this.router.navigate(_skill_mgt_constants__WEBPACK_IMPORTED_MODULE_0__.SkillMgtRoutes.AddSkill());
    }
    skillCardClickHandler(skill) {
        this.router.navigate(_skill_mgt_constants__WEBPACK_IMPORTED_MODULE_0__.SkillMgtRoutes.ReadSkill(skill.id));
    }
}
SkillListComponent.ɵfac = function SkillListComponent_Factory(t) { return new (t || SkillListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_page_title_service__WEBPACK_IMPORTED_MODULE_1__.PageTitleService)); };
SkillListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SkillListComponent, selectors: [["app-skill-list"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "title", "description", "buttonLabel", 4, "ngIf"], [3, "addSkillCardClick"], [4, "ngFor", "ngForOf"], [3, "skill", "skillCardClick"], [3, "title", "description", "buttonLabel"]], template: function SkillListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SkillListComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SkillListComponent_app_empty_state_1_Template, 1, 3, "app-empty-state", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isSkillsVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isSkillsVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _add_skill_card_add_skill_card_component__WEBPACK_IMPORTED_MODULE_2__.AddSkillCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_3__.SkillCardComponent, _widgets_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_4__.EmptyStateComponent], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsMkRBQUE7RUFHQSxjQUFBO0FBRkoiLCJmaWxlIjoic2tpbGwtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC8vIEBhcHBseSBmbGV4IGZsZXgtd3JhcCBzcGFjZS14LTQ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAvLyBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW5tYXgoMjUwcHgsIGF1dG8pKTtcclxuICAgIGdyaWQtZ2FwOiAycmVtO1xyXG59Il19 */"] });


/***/ }),

/***/ 3844:
/*!*****************************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/components/skill-read/skill-read.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillReadComponent": () => (/* binding */ SkillReadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/secondary-header/secondary-header.component */ 7417);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _widgets_read_field_read_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../widgets/read-field/read-field.component */ 9284);





function SkillReadComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-read-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-read-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-read-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-read-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-read-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fieldLabel", "Skill name")("fieldValue", ctx_r0.skill.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fieldLabel", "Category")("fieldValue", ctx_r0.skill.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fieldLabel", "Sub category")("fieldValue", ctx_r0.skill.subCategoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fieldLabel", "Employees")("fieldValue", ctx_r0.skill.employees);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fieldLabel", "Team competency")("fieldValue", ctx_r0.skill.teamCompetency);
} }
class SkillReadComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'Skill Information';
        this.description = 'Detils of the skill.';
    }
    ngOnInit() {
        this.route.data.subscribe(({ skill }) => {
            this.skill = skill;
        });
    }
    onCloseClick() {
        this.router.navigate(['/skills', { outlets: { details: null } }]);
    }
}
SkillReadComponent.ɵfac = function SkillReadComponent_Factory(t) { return new (t || SkillReadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
SkillReadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SkillReadComponent, selectors: [["app-skill-read"]], decls: 2, vars: 3, consts: [[3, "title", "description", "closeClick"], [4, "ngIf"], [1, "flex", "flex-col", "py-5", "space-y-6"], [3, "fieldLabel", "fieldValue"]], template: function SkillReadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-secondary-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeClick", function SkillReadComponent_Template_app_secondary_header_closeClick_0_listener() { return ctx.onCloseClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SkillReadComponent_ng_container_1_Template, 7, 10, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.title)("description", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.skill);
    } }, directives: [_shared_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_0__.SecondaryHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _widgets_read_field_read_field_component__WEBPACK_IMPORTED_MODULE_1__.ReadFieldComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLXJlYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic2tpbGwtcmVhZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"] });


/***/ }),

/***/ 8973:
/*!*****************************************************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/components/skill-subcategory-card/skill-subcategory-card.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillSubcategoryCardComponent": () => (/* binding */ SkillSubcategoryCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);



function SkillSubcategoryCardComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillSubcategoryCardComponent_ng_container_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onCardClickHandler(ctx_r1.subcategory); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.subcategory.name);
} }
class SkillSubcategoryCardComponent {
    constructor() {
        this.onCardClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    onCardClickHandler(subcategory) {
        this.onCardClick.emit(subcategory);
    }
}
SkillSubcategoryCardComponent.ɵfac = function SkillSubcategoryCardComponent_Factory(t) { return new (t || SkillSubcategoryCardComponent)(); };
SkillSubcategoryCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillSubcategoryCardComponent, selectors: [["app-skill-subcategory-card"]], inputs: { subcategory: "subcategory" }, outputs: { onCardClick: "onCardClick" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["tabindex", "0", 1, "flex", "flex-col", "justify-between", "h-full", "p-4", "space-y-4", "text-left", "border", "border-gray-200", "rounded-lg", "hover:border-gray-300", "focus-within:ring-1", "focus-within:ring-inset", "focus-within:ring-indigo-500", 3, "click"], [1, "text-lg", "font-medium", "text-gray-700"]], template: function SkillSubcategoryCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SkillSubcategoryCardComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subcategory);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLXN1YmNhdGVnb3J5LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJza2lsbC1zdWJjYXRlZ29yeS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvLyBtYXgtaGVpZ2h0OiAxNTBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 1657:
/*!*****************************************************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/components/skill-subcategory-list/skill-subcategory-list.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillSubcategoryListComponent": () => (/* binding */ SkillSubcategoryListComponent)
/* harmony export */ });
/* harmony import */ var _skill_mgt_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../skill-mgt-constants */ 4043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/page-title.service */ 8330);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _skill_subcategory_card_skill_subcategory_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skill-subcategory-card/skill-subcategory-card.component */ 8973);






function SkillSubcategoryListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-skill-subcategory-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onCardClick", function SkillSubcategoryListComponent_ng_container_0_Template_app_skill_subcategory_card_onCardClick_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const subcategory_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onCardClick(subcategory_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const subcategory_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("subcategory", subcategory_r1);
} }
class SkillSubcategoryListComponent {
    constructor(route, router, pageTitle) {
        this.route = route;
        this.router = router;
        this.pageTitle = pageTitle;
        this.subcategories = [];
        this.pageTitle.updatePageTitle("Skill Subcategories");
        this.pageTitle.updatePageSubTitle("Choose a skill subcategory from the list below to see skills");
    }
    ngOnInit() {
        this.route.data.subscribe(({ subcategories }) => {
            this.subcategories = subcategories;
        });
    }
    onCardClick(category) {
        // console.log(SkillMgtRoutes.ListSubcategories(category.id));
        // console.log(SkillMgtRoutes.ListSkills(category.categoryId, category.id));
        this.router.navigate(_skill_mgt_constants__WEBPACK_IMPORTED_MODULE_0__.SkillMgtRoutes.ListSkills(category.categoryId, category.id));
    }
}
SkillSubcategoryListComponent.ɵfac = function SkillSubcategoryListComponent_Factory(t) { return new (t || SkillSubcategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_page_title_service__WEBPACK_IMPORTED_MODULE_1__.PageTitleService)); };
SkillSubcategoryListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SkillSubcategoryListComponent, selectors: [["app-skill-subcategory-list"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "subcategory", "onCardClick"]], template: function SkillSubcategoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SkillSubcategoryListComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.subcategories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _skill_subcategory_card_skill_subcategory_card_component__WEBPACK_IMPORTED_MODULE_2__.SkillSubcategoryCardComponent], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-auto-rows: minmax(150px, auto);\n  grid-gap: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLXN1YmNhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJza2lsbC1zdWJjYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTUwcHgsIGF1dG8pO1xuICAgIGdyaWQtZ2FwOiAycmVtO1xufSJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!********************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/pages/index.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexComponent": () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/page-title.service */ 8330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _psr_widgets_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @psr/widgets/breadcrumb/breadcrumb.service */ 2579);
/* harmony import */ var _psr_shared_secondary_header_secondary_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @psr/shared/secondary-header/secondary-header.service */ 9212);
/* harmony import */ var _shared_layouts_two_column_two_column_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/layouts/two-column/two-column-layout.component */ 2643);
/* harmony import */ var _shared_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/page-heading/page-heading.component */ 1394);
/* harmony import */ var _widgets_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../widgets/breadcrumb/breadcrumb.component */ 8969);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);










class IndexComponent {
  constructor(pageTitle, route, router, breadcrumbService, secondaryHeaderService) {
    this.pageTitle = pageTitle;
    this.route = route;
    this.router = router;
    this.breadcrumbService = breadcrumbService;
    this.secondaryHeaderService = secondaryHeaderService;
    this.categories = [];
    this.isSecondaryContentVisible = false;
    this.pageTitle$ = this.pageTitle.pageTitle$;
    this.pageSubTitle$ = this.pageTitle.pageSubTitle$;
    this._breadcrumbs$ = this.breadcrumbService;
  }

  ngOnInit() {
    this.route.data.subscribe(({
      resolverResult: {
        categories
      }
    }) => {
      this.categories = categories;
    });
    this.secondaryHeaderService.isCloseClicked$.subscribe(isCloseClicked => {
      if (isCloseClicked) {
        this.router.navigate(['/skills', {
          outlets: {
            details: null
          }
        }]);
      }
    });
  }

  onDetailsRouterOutletActivate() {
    this.isSecondaryContentVisible = true; // console.log('activate');
  }

  onDetailsRouterOutletDeactivate() {
    this.isSecondaryContentVisible = false;
  }

  onPrimaryRouterOutletActivate() {// console.log('activate');
  }

  onPrimaryRouterOutletDeactivate() {// console.log('deactivate');
  }

  hamburgerMenuClickHandler() {// console.log('hamburgerMenuClickHandler');
  }

  ngOnDestroy() {
    var _a, _b;

    (_a = this._routerEventSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    (_b = this._routeDataSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
  }

}

IndexComponent.ɵfac = function IndexComponent_Factory(t) {
  return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_page_title_service__WEBPACK_IMPORTED_MODULE_0__.PageTitleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_psr_widgets_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_psr_shared_secondary_header_secondary_header_service__WEBPACK_IMPORTED_MODULE_2__.SecondaryHeaderService));
};

IndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: IndexComponent,
  selectors: [["app-index"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_services_page_title_service__WEBPACK_IMPORTED_MODULE_0__.PageTitleService])],
  decls: 14,
  vars: 13,
  consts: [[3, "isSecondaryContentVisible", "hamburgerMenuClick"], ["x-size", "large", "x-color", "black", 3, "title", "description"], ["header-content", "", 1, ""], [1, "text-3xl", "font-bold", "text-gray-900"], ["id", "message-heading", 1, "text-lg", "font-normal", "text-gray-900"], ["breadcrumb-content", ""], ["main-content", "", 3, "activate", "deactivate"], ["secondary-content", "", "name", "details", 3, "activate", "deactivate"]],
  template: function IndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-two-column-layout", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("hamburgerMenuClick", function IndexComponent_Template_app_two_column_layout_hamburgerMenuClick_0_listener() {
        return ctx.hamburgerMenuClickHandler();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-page-heading", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "app-breadcrumb", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "router-outlet", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("activate", function IndexComponent_Template_router_outlet_activate_12_listener() {
        return ctx.onPrimaryRouterOutletActivate();
      })("deactivate", function IndexComponent_Template_router_outlet_deactivate_12_listener() {
        return ctx.onPrimaryRouterOutletDeactivate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "router-outlet", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("activate", function IndexComponent_Template_router_outlet_activate_13_listener() {
        return ctx.onDetailsRouterOutletActivate();
      })("deactivate", function IndexComponent_Template_router_outlet_deactivate_13_listener() {
        return ctx.onDetailsRouterOutletDeactivate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isSecondaryContentVisible", ctx.isSecondaryContentVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 5, ctx.pageTitle$))("description", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 7, ctx.pageSubTitle$));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 9, ctx.pageTitle$), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 11, ctx.pageSubTitle$), " ");
    }
  },
  directives: [_shared_layouts_two_column_two_column_layout_component__WEBPACK_IMPORTED_MODULE_3__.TwoColumnLayoutComponent, _shared_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_4__.PageHeadingComponent, _widgets_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 0%;\n  height: 0px;\n  border-left-width: 2px;\n  border-right-width: 2px;\n  border-style: dashed;\n  --tw-border-opacity: 1;\n  border-color: rgba(229, 231, 235, var(--tw-border-opacity));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbXBvbmVudC50cyIsIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUNMUix1QkFBQTtFQUFBLHdCQUFBO0VBQUEscUJBQUE7RUFBQSx1QkFBQTtFQUFBLDREQUFBO0FETUEiLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXg6IDEgMSAwJTtcbiAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgIEBhcHBseSBib3JkZXItbC0yIGJvcmRlci1yLTIgYm9yZGVyLWdyYXktMjAwIGJvcmRlci1kYXNoZWQ7XG4gICAgICB9XG4gICAgIixudWxsXX0= */"]
});

/***/ }),

/***/ 6320:
/*!**********************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/services/index.resolver.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexResolver": () => (/* binding */ IndexResolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills.service */ 7023);



class IndexResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        return this.skillService.getCategories().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => ({
            "categories": response
        })));
    }
}
IndexResolver.ɵfac = function IndexResolver_Factory(t) { return new (t || IndexResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_skills_service__WEBPACK_IMPORTED_MODULE_0__.SkillsService)); };
IndexResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: IndexResolver, factory: IndexResolver.ɵfac });


/***/ }),

/***/ 8330:
/*!**************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/services/page-title.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTitleService": () => (/* binding */ PageTitleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class PageTitleService {
    constructor() {
        this._pageTitle$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('Skill Management');
        this._pageSubTitle$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('Manage skill categories, subcategories, and skills');
    }
    get pageTitle$() {
        return this._pageTitle$.asObservable();
    }
    get pageSubTitle$() {
        return this._pageSubTitle$.asObservable();
    }
    updatePageTitle(title) {
        this._pageTitle$.next(title);
    }
    updatePageSubTitle(title) {
        this._pageSubTitle$.next(title);
    }
}
PageTitleService.ɵfac = function PageTitleService_Factory(t) { return new (t || PageTitleService)(); };
PageTitleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PageTitleService, factory: PageTitleService.ɵfac });


/***/ }),

/***/ 712:
/*!**************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/services/skill-add.resolver.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillAddResolver": () => (/* binding */ SkillAddResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills.service */ 7023);



class SkillAddResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        var _a, _b, _c;
        const categories = (_c = (_b = (_a = route.parent) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.resolverResult) === null || _c === void 0 ? void 0 : _c.categories;
        return categories
            ? (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(categories)
            : this.skillService.getCategories();
    }
}
SkillAddResolver.ɵfac = function SkillAddResolver_Factory(t) { return new (t || SkillAddResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_skills_service__WEBPACK_IMPORTED_MODULE_0__.SkillsService)); };
SkillAddResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SkillAddResolver, factory: SkillAddResolver.ɵfac });


/***/ }),

/***/ 5147:
/*!*******************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/services/skill-category.resolver.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillCategoryResolver": () => (/* binding */ SkillCategoryResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills.service */ 7023);



class SkillCategoryResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        var _a, _b, _c;
        const categories = (_c = (_b = (_a = route.parent) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.resolverResult) === null || _c === void 0 ? void 0 : _c.categories;
        return categories
            ? (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(categories)
            : this.skillService.getCategories();
    }
}
SkillCategoryResolver.ɵfac = function SkillCategoryResolver_Factory(t) { return new (t || SkillCategoryResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_skills_service__WEBPACK_IMPORTED_MODULE_0__.SkillsService)); };
SkillCategoryResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SkillCategoryResolver, factory: SkillCategoryResolver.ɵfac });


/***/ }),

/***/ 3925:
/*!***************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/services/skill-list.resolver.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillListResolver": () => (/* binding */ SkillListResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills.service */ 7023);




class SkillListResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(route.params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({ categoryId, subcategoryId }) => ({ categoryId, subcategoryId })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(params => this.skillService.getSkillsByCategoryAndSubcategory(params.categoryId, params.subcategoryId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1));
    }
}
SkillListResolver.ɵfac = function SkillListResolver_Factory(t) { return new (t || SkillListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_skills_service__WEBPACK_IMPORTED_MODULE_0__.SkillsService)); };
SkillListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SkillListResolver, factory: SkillListResolver.ɵfac });


/***/ }),

/***/ 9881:
/*!**********************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/services/skill-subcategory.resolver.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillSubcategoryResolver": () => (/* binding */ SkillSubcategoryResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4236);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills.service */ 7023);




class SkillSubcategoryResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(route.params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.pluck)('categoryId'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(id => this.skillService.getSubCategories(id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1));
    }
}
SkillSubcategoryResolver.ɵfac = function SkillSubcategoryResolver_Factory(t) { return new (t || SkillSubcategoryResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_skills_service__WEBPACK_IMPORTED_MODULE_0__.SkillsService)); };
SkillSubcategoryResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SkillSubcategoryResolver, factory: SkillSubcategoryResolver.ɵfac });


/***/ }),

/***/ 3290:
/*!**********************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/services/skill.resolver.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillResolver": () => (/* binding */ SkillResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4236);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills.service */ 7023);




class SkillResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(route.params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.pluck)('id'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(id => this.skillService.getSkill(id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1));
        // return this.skillService.getSkill();
    }
}
SkillResolver.ɵfac = function SkillResolver_Factory(t) { return new (t || SkillResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_skills_service__WEBPACK_IMPORTED_MODULE_0__.SkillsService)); };
SkillResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SkillResolver, factory: SkillResolver.ɵfac });


/***/ }),

/***/ 7023:
/*!**********************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/services/skills.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsService": () => (/* binding */ SkillsService)
/* harmony export */ });
/* harmony import */ var _psr_core_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @psr/core/app.config */ 4356);
/* harmony import */ var _skill_mgt_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../skill-mgt-constants */ 4043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);




class SkillsService {
    constructor(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    getSkills() {
        return this.http.get(_skill_mgt_constants__WEBPACK_IMPORTED_MODULE_1__.SkillMgtEndpoints.GetSkills(this.appConfig)).pipe(
        // shareReplay()
        );
    }
    getSkillsByCategoryAndSubcategory(categoryId, subcategoryId) {
        return this.http.get(_skill_mgt_constants__WEBPACK_IMPORTED_MODULE_1__.SkillMgtEndpoints.GetSkillsByCategoryAndSubcategory(this.appConfig, categoryId, subcategoryId)).pipe(
        // shareReplay()
        );
    }
    getSkill(id) {
        return this.http.get(_skill_mgt_constants__WEBPACK_IMPORTED_MODULE_1__.SkillMgtEndpoints.GetSkill(this.appConfig, id)).pipe(
        // shareReplay()
        );
    }
    getCategories() {
        return this.http.get(_skill_mgt_constants__WEBPACK_IMPORTED_MODULE_1__.SkillMgtEndpoints.GetSkillCategories(this.appConfig)).pipe(
        // shareReplay()
        );
    }
    getSubCategories(categoryId) {
        return this.http.get(_skill_mgt_constants__WEBPACK_IMPORTED_MODULE_1__.SkillMgtEndpoints.GetSkillSubCategories(this.appConfig, categoryId)).pipe(
        // shareReplay()
        );
    }
}
SkillsService.ɵfac = function SkillsService_Factory(t) { return new (t || SkillsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_psr_core_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG_TOKEN)); };
SkillsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SkillsService, factory: SkillsService.ɵfac });


/***/ }),

/***/ 792:
/*!**************************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/skill-mgt-breadcrumb-config.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skillMgtBreadcrumbConfigProvider": () => (/* binding */ skillMgtBreadcrumbConfigProvider)
/* harmony export */ });
/* harmony import */ var _psr_widgets_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @psr/widgets/breadcrumb/breadcrumb.service */ 2579);

const skillMgtBreadcrumbConfigProvider = {
    provide: _psr_widgets_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__.BREADCRUMB_CONFIG_TOKEN,
    useValue: [
        {
            name: "categories",
            label: "Categories",
            path: '/skills/categories',
            route: ["/skills", { outlets: { primary: 'categories', details: null } }],
            newRoute: '/skills/categories'
        },
        {
            name: "subcategories",
            label: "Sub categories",
            path: '/skills/subcategories',
            route: ["/skills", { outlets: { primary: 'subcategories', details: null } }],
            newRoute: '/skills/categories/:categoryId/subcategories'
        },
        {
            name: "list",
            label: "Skills",
            path: '/skills/list',
            route: ["/skills", { outlets: { primary: 'list', details: null } }],
            newRoute: '/skills/categories/:categoryId/subcategories/:subcategoryId/list'
        },
    ]
};


/***/ }),

/***/ 4043:
/*!******************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/skill-mgt-constants.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillMgtEndpoints": () => (/* binding */ SkillMgtEndpoints),
/* harmony export */   "SkillMgtRoutes": () => (/* binding */ SkillMgtRoutes)
/* harmony export */ });
let appPaths = {
    GetSkills: (config) => config.getUrl(`skills`),
    GetSkillsByCategoryAndSubcategory: (config, categoryId, subcategoryId) => {
        return config.getUrl(`skills/categories/${categoryId}/subcategories/${subcategoryId}/list`);
    },
    GetSkill: (config, id) => config.getUrl(`skills/${id}`),
    GetSkillCategories: (config) => config.getUrl(`skills/categories`),
    GetSkillSubCategories: (config, categoryId) => config.getUrl(`skills/categories/${categoryId}/subcategories`),
};
let appRoutes = {
    ListSkills: (categoryId, subcategoryId) => [`/skills`, `categories`, `${categoryId}`, `subcategories`, `${subcategoryId}`, `list`],
    // ReadSkill: (id: string) => [`/skills`, { outlets: { details: ['read', id] } }],
    ReadSkill: (id) => [`/skills`, { outlets: { details: ['read', id] } }],
    AddSkill: () => [`/skills`, { outlets: { details: ['add'] } }],
    ListSubcategories: (id) => [`/skills`, `categories`, `${id}`, `subcategories`],
};
const SkillMgtEndpoints = appPaths;
const SkillMgtRoutes = appRoutes;


/***/ }),

/***/ 938:
/*!***********************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/skill-mgt-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillMgtRoutingModule": () => (/* binding */ SkillMgtRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_skill_add_skill_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/skill-add/skill-add.component */ 6220);
/* harmony import */ var _components_skill_category_list_skill_category_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/skill-category-list/skill-category-list.component */ 8244);
/* harmony import */ var _components_skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/skill-list/skill-list.component */ 7539);
/* harmony import */ var _components_skill_read_skill_read_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/skill-read/skill-read.component */ 3844);
/* harmony import */ var _components_skill_subcategory_list_skill_subcategory_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/skill-subcategory-list/skill-subcategory-list.component */ 1657);
/* harmony import */ var _pages_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index.component */ 6747);
/* harmony import */ var _services_index_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/index.resolver */ 6320);
/* harmony import */ var _services_skill_add_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/skill-add.resolver */ 712);
/* harmony import */ var _services_skill_category_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/skill-category.resolver */ 5147);
/* harmony import */ var _services_skill_list_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/skill-list.resolver */ 3925);
/* harmony import */ var _services_skill_subcategory_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/skill-subcategory.resolver */ 9881);
/* harmony import */ var _services_skill_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/skill.resolver */ 3290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);















const routes = [
    {
        path: '',
        component: _pages_index_component__WEBPACK_IMPORTED_MODULE_5__.IndexComponent,
        children: [
            { path: 'categories', component: _components_skill_category_list_skill_category_list_component__WEBPACK_IMPORTED_MODULE_1__.SkillCategoryListComponent, resolve: { categories: _services_skill_category_resolver__WEBPACK_IMPORTED_MODULE_8__.SkillCategoryResolver }, data: { breadcrumb: 'categories' } },
            { path: 'categories/:categoryId/subcategories', component: _components_skill_subcategory_list_skill_subcategory_list_component__WEBPACK_IMPORTED_MODULE_4__.SkillSubcategoryListComponent, resolve: { subcategories: _services_skill_subcategory_resolver__WEBPACK_IMPORTED_MODULE_10__.SkillSubcategoryResolver }, data: { breadcrumb: 'subcategories' } },
            { path: 'categories/:categoryId/subcategories/:subcategoryId/list', component: _components_skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_2__.SkillListComponent, resolve: { skills: _services_skill_list_resolver__WEBPACK_IMPORTED_MODULE_9__.SkillListResolver }, data: { breadcrumb: 'list' } },
            { path: 'read/:id', component: _components_skill_read_skill_read_component__WEBPACK_IMPORTED_MODULE_3__.SkillReadComponent, outlet: 'details', resolve: { skill: _services_skill_resolver__WEBPACK_IMPORTED_MODULE_11__.SkillResolver } },
            { path: 'add', component: _components_skill_add_skill_add_component__WEBPACK_IMPORTED_MODULE_0__.SkillAddComponent, outlet: 'details', resolve: { categories: _services_skill_add_resolver__WEBPACK_IMPORTED_MODULE_7__.SkillAddResolver } },
            { path: '**', redirectTo: 'categories', pathMatch: 'full' }
        ],
        resolve: { resolverResult: _services_index_resolver__WEBPACK_IMPORTED_MODULE_6__.IndexResolver }
    }
];
class SkillMgtRoutingModule {
}
SkillMgtRoutingModule.ɵfac = function SkillMgtRoutingModule_Factory(t) { return new (t || SkillMgtRoutingModule)(); };
SkillMgtRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: SkillMgtRoutingModule });
SkillMgtRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SkillMgtRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


/***/ }),

/***/ 1810:
/*!***************************************************************************!*\
  !*** ./projects/psr/src/app/modules/skill-management/skill-mgt.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillManagementModule": () => (/* binding */ SkillManagementModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 2180);
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @widgets/widgets.module */ 8319);
/* harmony import */ var _components_add_skill_card_add_skill_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-skill-card/add-skill-card.component */ 3821);
/* harmony import */ var _components_skill_add_skill_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/skill-add/skill-add.component */ 6220);
/* harmony import */ var _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/skill-card/skill-card.component */ 3447);
/* harmony import */ var _components_skill_category_card_skill_category_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/skill-category-card/skill-category-card.component */ 530);
/* harmony import */ var _components_skill_category_list_skill_category_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/skill-category-list/skill-category-list.component */ 8244);
/* harmony import */ var _components_skill_filter_skill_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/skill-filter/skill-filter.component */ 1528);
/* harmony import */ var _components_skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/skill-list/skill-list.component */ 7539);
/* harmony import */ var _components_skill_read_skill_read_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/skill-read/skill-read.component */ 3844);
/* harmony import */ var _components_skill_subcategory_list_skill_subcategory_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/skill-subcategory-list/skill-subcategory-list.component */ 1657);
/* harmony import */ var _pages_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/index.component */ 6747);
/* harmony import */ var _services_index_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/index.resolver */ 6320);
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/page-title.service */ 8330);
/* harmony import */ var _services_skill_add_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/skill-add.resolver */ 712);
/* harmony import */ var _services_skill_category_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/skill-category.resolver */ 5147);
/* harmony import */ var _services_skill_list_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/skill-list.resolver */ 3925);
/* harmony import */ var _services_skill_subcategory_resolver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/skill-subcategory.resolver */ 9881);
/* harmony import */ var _services_skill_resolver__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/skill.resolver */ 3290);
/* harmony import */ var _services_skills_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/skills.service */ 7023);
/* harmony import */ var _skill_mgt_breadcrumb_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./skill-mgt-breadcrumb-config */ 792);
/* harmony import */ var _skill_mgt_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./skill-mgt-routing.module */ 938);
/* harmony import */ var _components_skill_subcategory_card_skill_subcategory_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/skill-subcategory-card/skill-subcategory-card.component */ 8973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 2316);


























class SkillManagementModule {
}
SkillManagementModule.ɵfac = function SkillManagementModule_Factory(t) { return new (t || SkillManagementModule)(); };
SkillManagementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: SkillManagementModule });
SkillManagementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ providers: [
        _services_page_title_service__WEBPACK_IMPORTED_MODULE_13__.PageTitleService,
        _services_skills_service__WEBPACK_IMPORTED_MODULE_19__.SkillsService,
        _services_skill_list_resolver__WEBPACK_IMPORTED_MODULE_16__.SkillListResolver,
        _services_skill_resolver__WEBPACK_IMPORTED_MODULE_18__.SkillResolver,
        _services_skill_add_resolver__WEBPACK_IMPORTED_MODULE_14__.SkillAddResolver,
        _services_index_resolver__WEBPACK_IMPORTED_MODULE_12__.IndexResolver,
        _services_skill_category_resolver__WEBPACK_IMPORTED_MODULE_15__.SkillCategoryResolver,
        _services_skill_subcategory_resolver__WEBPACK_IMPORTED_MODULE_17__.SkillSubcategoryResolver,
        _skill_mgt_breadcrumb_config__WEBPACK_IMPORTED_MODULE_20__.skillMgtBreadcrumbConfigProvider
    ], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _skill_mgt_routing_module__WEBPACK_IMPORTED_MODULE_21__.SkillMgtRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
            _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](SkillManagementModule, { declarations: [_components_skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_8__.SkillListComponent,
        _pages_index_component__WEBPACK_IMPORTED_MODULE_11__.IndexComponent,
        _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_4__.SkillCardComponent,
        _components_add_skill_card_add_skill_card_component__WEBPACK_IMPORTED_MODULE_2__.AddSkillCardComponent,
        _components_skill_read_skill_read_component__WEBPACK_IMPORTED_MODULE_9__.SkillReadComponent,
        _components_skill_add_skill_add_component__WEBPACK_IMPORTED_MODULE_3__.SkillAddComponent,
        _components_skill_filter_skill_filter_component__WEBPACK_IMPORTED_MODULE_7__.SkillFilterComponent,
        _components_skill_category_list_skill_category_list_component__WEBPACK_IMPORTED_MODULE_6__.SkillCategoryListComponent,
        _components_skill_subcategory_list_skill_subcategory_list_component__WEBPACK_IMPORTED_MODULE_10__.SkillSubcategoryListComponent,
        _components_skill_category_card_skill_category_card_component__WEBPACK_IMPORTED_MODULE_5__.SkillCategoryCardComponent,
        _components_skill_subcategory_card_skill_subcategory_card_component__WEBPACK_IMPORTED_MODULE_22__.SkillSubcategoryCardComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _skill_mgt_routing_module__WEBPACK_IMPORTED_MODULE_21__.SkillMgtRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
        _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule] }); })();


/***/ }),

/***/ 8028:
/*!**********************************************************!*\
  !*** ./projects/psr/src/app/shared/alert/alert.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alert": () => (/* binding */ Alert),
/* harmony export */   "AlertType": () => (/* binding */ AlertType)
/* harmony export */ });
class Alert {
    constructor(init) {
        this.id = Symbol('alert');
        this.type = AlertType.Info;
        this.title = '';
        this.message = '';
        this.actions = [];
        this.autoClose = true;
        this.timeToClose = 5;
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ 7269:
/*!***********************************************************!*\
  !*** ./projects/psr/src/app/shared/alert/alert.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertModule": () => (/* binding */ AlertModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_alert_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/alert-container.component */ 4315);
/* harmony import */ var _components_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/alert.component */ 1146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class AlertModule {
}
AlertModule.ɵfac = function AlertModule_Factory(t) { return new (t || AlertModule)(); };
AlertModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AlertModule });
AlertModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [AlertModule], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AlertModule, { declarations: [_components_alert_container_component__WEBPACK_IMPORTED_MODULE_0__.AlertContainerComponent, _components_alert_component__WEBPACK_IMPORTED_MODULE_1__.AlertComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_components_alert_container_component__WEBPACK_IMPORTED_MODULE_0__.AlertContainerComponent] }); })();


/***/ }),

/***/ 4315:
/*!***********************************************************************************!*\
  !*** ./projects/psr/src/app/shared/alert/components/alert-container.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertContainerComponent": () => (/* binding */ AlertContainerComponent)
/* harmony export */ });
/* harmony import */ var _shared_directives_element_host_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/directives/element-host.directive */ 2219);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.component */ 1146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alert.service */ 640);




function AlertContainerComponent_ng_template_0_Template(rf, ctx) { }
class AlertContainerComponent {
    constructor(resolver, alertService) {
        this.resolver = resolver;
        this.alertService = alertService;
    }
    ngOnInit() {
        this.alertSubscription = this.alertService.onAlert().subscribe(alert => {
            this.addAlert(alert);
        });
    }
    addAlert(alert) {
        const container = this.alertHost.viewContainerRef;
        const componentFactory = this.resolver.resolveComponentFactory(_alert_component__WEBPACK_IMPORTED_MODULE_1__.AlertComponent);
        // container.clear();
        const componentRef = container.createComponent(componentFactory);
        componentRef.instance.alert = alert;
        componentRef.instance.closeAlert.subscribe(status => {
            status && componentRef.destroy();
            // status && container.clear();
        });
    }
    ngOnDestroy() {
        this.alertSubscription.unsubscribe();
    }
}
AlertContainerComponent.ɵfac = function AlertContainerComponent_Factory(t) { return new (t || AlertContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService)); };
AlertContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AlertContainerComponent, selectors: [["app-alert-container"]], viewQuery: function AlertContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_shared_directives_element_host_directive__WEBPACK_IMPORTED_MODULE_0__.ElementHostDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.alertHost = _t.first);
    } }, decls: 1, vars: 0, consts: [["appElementHost", ""]], template: function AlertContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AlertContainerComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, styles: ["[_nghost-%COMP%] {pointer-events: none;position: fixed;top: 0px;right: 0px;display: flex;max-width: 24rem;flex-direction: row;flex-wrap: wrap;align-items: flex-end;padding-left: 1rem;padding-right: 1rem;padding-top: 1.5rem;padding-bottom: 1.5rem\n}@media (min-width: 640px) {[_nghost-%COMP%] {align-items: flex-end\n    }[_nghost-%COMP%] {padding: 1.5rem\n    }\n}[_nghost-%COMP%] {z-index: 20;width: 100%;max-width: 24rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQUEscUJBQUEsZ0JBQUEsU0FBQSxXQUFBLGNBQUEsaUJBQUEsb0JBQUEsZ0JBQUEsc0JBQUEsbUJBQUEsb0JBQUEsb0JBQUE7Q0FBQSwyQkFBQSxPQUFBO0tBQUEsT0FBQTtLQUFBO0NBQUEsT0FBQSxZQUFBLFlBQUE7Q0FBQSIsImZpbGUiOiJhbGVydC1jb250YWluZXIuY29tcG9uZW50LnRzIn0= */"] });


/***/ }),

/***/ 1146:
/*!*************************************************************************!*\
  !*** ./projects/psr/src/app/shared/alert/components/alert.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/alert */ 8665);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);






const _c0 = ["successIcon"];
const _c1 = ["errorIcon"];
const _c2 = ["infoIcon"];
const _c3 = ["warningIcon"];
function AlertComponent_div_0_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function AlertComponent_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlertComponent_div_0_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.alertIconRef);
} }
function AlertComponent_div_0_div_12_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertComponent_div_0_div_12_button_1_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const action_r13 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r14.onAction(action_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", action_r13.name, " ");
} }
function AlertComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlertComponent_div_0_div_12_button_1_Template, 2, 1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.alert == null ? null : ctx_r10.alert.actions);
} }
function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AlertComponent_div_0_ng_container_6_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AlertComponent_div_0_div_12_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertComponent_div_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.onCloseAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.cssClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.alertIconRef);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.alert == null ? null : ctx_r0.alert.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.alert == null ? null : ctx_r0.alert.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.hasActions());
} }
function AlertComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlertComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlertComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlertComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AlertComponent {
    constructor(alertService, router) {
        this.alertService = alertService;
        this.router = router;
        this.alert = undefined;
        this.closeAlert = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        var _a, _b;
        ((_a = this.alert) === null || _a === void 0 ? void 0 : _a.autoClose) && this.startAutoClose();
        switch ((_b = this.alert) === null || _b === void 0 ? void 0 : _b.type) {
            case _shared_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Success:
                this.alertIconRef = this.successIconRef;
                break;
            case _shared_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Error:
                this.alertIconRef = this.errorIconRef;
                break;
            case _shared_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Info:
                this.alertIconRef = this.infoIconRef;
                break;
            case _shared_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Warning:
                this.alertIconRef = this.warningIconRef;
                break;
            default:
                throw new Error('Invalid alert type');
        }
    }
    ngAfterViewInit() {
    }
    onAction(action) {
        this.router.navigate([action.route]);
        this.startAutoClose();
    }
    onCloseAlert() {
        var _a;
        this.closeAlert.emit(true);
        this.alertService.closeAlert((_a = this.alert) === null || _a === void 0 ? void 0 : _a.id);
    }
    startAutoClose() {
        var _a;
        this._timeout = setTimeout(() => {
            this.onCloseAlert();
        }, (((_a = this.alert) === null || _a === void 0 ? void 0 : _a.timeToClose) || 0) * 1000);
    }
    cssClass() {
        const alertType = this.alert ? this.alert.type : _shared_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Info;
        const classes = ['flex items-end flex-1 max-w-sm pointer-events-none sm:items-start'];
        const alertTypeClass = {
            [_shared_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Success]: 'alert--success',
            [_shared_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Error]: 'alert--error',
            [_shared_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Info]: 'alert--info',
            [_shared_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Warning]: 'alert--warning',
        };
        classes.push(alertTypeClass[alertType]);
        return classes.join(' ');
    }
    hasActions() {
        var _a;
        return !!((_a = this.alert) === null || _a === void 0 ? void 0 : _a.actions) && this.alert.actions.length > 0;
    }
    ngOnDestroy() {
        clearTimeout(this._timeout);
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_alert__WEBPACK_IMPORTED_MODULE_0__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], viewQuery: function AlertComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.successIconRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.errorIconRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infoIconRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.warningIconRef = _t.first);
    } }, inputs: { alert: "alert" }, outputs: { closeAlert: "closeAlert" }, decls: 9, vars: 1, consts: [["aria-live", "assertive", 3, "class", 4, "ngIf"], ["successIcon", ""], ["errorIcon", ""], ["infoIcon", ""], ["warningIcon", ""], ["aria-live", "assertive"], [1, "flex", "flex-col", "items-center", "w-full", "max-w-sm", "space-y-4", "sm:items-end"], [1, "alert__wrapper"], [1, "p-4"], [1, "flex", "items-start"], [1, "flex-shrink-0"], [4, "ngIf"], [1, "ml-3", "w-0", "flex-1", "pt-0.5"], [1, "alert__title"], [1, "alert__message"], ["class", "flex mt-3 space-x-7", 4, "ngIf"], [1, "flex", "flex-shrink-0", "ml-4"], [1, "alert__btn-close", 3, "click"], [1, "sr-only"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", 1, "w-5", "h-5"], ["fill-rule", "evenodd", "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clip-rule", "evenodd"], [4, "ngTemplateOutlet"], [1, "flex", "mt-3", "space-x-7"], ["type", "button", "class", "alert__btn-action", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "alert__btn-action", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "aria-hidden", "true", 1, "w-6", "h-6", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 19, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlertComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AlertComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AlertComponent_ng_template_5_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AlertComponent_ng_template_7_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.alert);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["[_nghost-%COMP%] {\n\n    margin-bottom: 1rem;\n\n    width: 100%;\n\n    flex: 1 1 auto\n}\n\n.alert__wrapper[_ngcontent-%COMP%] {\n\n    width: 100%;\n\n    max-width: 24rem;\n\n    overflow: hidden;\n\n    border-radius: 0.5rem;\n\n    pointer-events: auto;\n\n    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n\n    --tw-ring-opacity: 1;\n\n    --tw-ring-color: rgba(0, 0, 0, var(--tw-ring-opacity));\n\n    --tw-ring-opacity: 0.1\n}\n\n.alert__title[_ngcontent-%COMP%] {\n\n    font-size: 0.875rem;\n\n    line-height: 1.25rem;\n\n    font-weight: 500\n}\n\n.alert__message[_ngcontent-%COMP%] {\n\n    margin-top: 0.25rem;\n\n    font-size: 0.875rem;\n\n    line-height: 1.25rem\n}\n\n.alert__btn-action[_ngcontent-%COMP%] {\n\n    border-radius: 0.375rem;\n\n    font-size: 0.875rem;\n\n    line-height: 1.25rem;\n\n    font-weight: 500\n}\n\n.alert__btn-action[_ngcontent-%COMP%]:focus {\n\n    outline: 2px solid transparent;\n\n    outline-offset: 2px\n}\n\n.alert__btn-close[_ngcontent-%COMP%] {\n\n    display: inline-flex;\n\n    border-radius: 0.375rem\n}\n\n.alert__btn-close[_ngcontent-%COMP%]:focus {\n\n    outline: 2px solid transparent;\n\n    outline-offset: 2px\n}\n\n.alert--error[_ngcontent-%COMP%]   .alert__wrapper[_ngcontent-%COMP%] {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(127, 29, 29, var(--tw-bg-opacity))\n}\n\n.alert--error[_ngcontent-%COMP%]   .alert__title[_ngcontent-%COMP%] {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n.alert--error[_ngcontent-%COMP%]   .alert__message[_ngcontent-%COMP%] {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(254, 202, 202, var(--tw-text-opacity))\n}\n\n.alert--error[_ngcontent-%COMP%]   .alert__btn-action[_ngcontent-%COMP%] {\n\n    background-color: transparent;\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n.alert--error[_ngcontent-%COMP%]   .alert__btn-action[_ngcontent-%COMP%]:hover {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(254, 202, 202, var(--tw-text-opacity))\n}\n\n.alert--error[_ngcontent-%COMP%]   .alert__btn-close[_ngcontent-%COMP%] {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(127, 29, 29, var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgba(254, 226, 226, var(--tw-text-opacity))\n}\n\n.alert--error[_ngcontent-%COMP%]   .alert__btn-close[_ngcontent-%COMP%]:hover {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n.alert--info[_ngcontent-%COMP%]   .alert__wrapper[_ngcontent-%COMP%] {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(37, 99, 235, var(--tw-bg-opacity))\n}\n\n.alert--info[_ngcontent-%COMP%]   .alert__title[_ngcontent-%COMP%] {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n.alert--info[_ngcontent-%COMP%]   .alert__message[_ngcontent-%COMP%] {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(191, 219, 254, var(--tw-text-opacity))\n}\n\n.alert--info[_ngcontent-%COMP%]   .alert__btn-action[_ngcontent-%COMP%] {\n\n    background-color: transparent;\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n.alert--info[_ngcontent-%COMP%]   .alert__btn-action[_ngcontent-%COMP%]:hover {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(191, 219, 254, var(--tw-text-opacity))\n}\n\n.alert--info[_ngcontent-%COMP%]   .alert__btn-close[_ngcontent-%COMP%] {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(37, 99, 235, var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgba(219, 234, 254, var(--tw-text-opacity))\n}\n\n.alert--info[_ngcontent-%COMP%]   .alert__btn-close[_ngcontent-%COMP%]:hover {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n.alert--success[_ngcontent-%COMP%]   .alert__wrapper[_ngcontent-%COMP%] {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(5, 150, 105, var(--tw-bg-opacity))\n}\n\n.alert--success[_ngcontent-%COMP%]   .alert__title[_ngcontent-%COMP%] {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n.alert--success[_ngcontent-%COMP%]   .alert__message[_ngcontent-%COMP%] {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(167, 243, 208, var(--tw-text-opacity))\n}\n\n.alert--success[_ngcontent-%COMP%]   .alert__btn-action[_ngcontent-%COMP%] {\n\n    background-color: transparent;\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n.alert--success[_ngcontent-%COMP%]   .alert__btn-action[_ngcontent-%COMP%]:hover {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(167, 243, 208, var(--tw-text-opacity))\n}\n\n.alert--success[_ngcontent-%COMP%]   .alert__btn-close[_ngcontent-%COMP%] {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(5, 150, 105, var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgba(209, 250, 229, var(--tw-text-opacity))\n}\n\n.alert--success[_ngcontent-%COMP%]   .alert__btn-close[_ngcontent-%COMP%]:hover {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n.alert--warning[_ngcontent-%COMP%]   .alert__wrapper[_ngcontent-%COMP%] {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(217, 119, 6, var(--tw-bg-opacity))\n}\n\n.alert--warning[_ngcontent-%COMP%]   .alert__title[_ngcontent-%COMP%] {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n.alert--warning[_ngcontent-%COMP%]   .alert__message[_ngcontent-%COMP%] {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(253, 230, 138, var(--tw-text-opacity))\n}\n\n.alert--warning[_ngcontent-%COMP%]   .alert__btn-action[_ngcontent-%COMP%] {\n\n    background-color: transparent;\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n.alert--warning[_ngcontent-%COMP%]   .alert__btn-action[_ngcontent-%COMP%]:hover {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(253, 230, 138, var(--tw-text-opacity))\n}\n\n.alert--warning[_ngcontent-%COMP%]   .alert__btn-close[_ngcontent-%COMP%] {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(217, 119, 6, var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgba(254, 243, 199, var(--tw-text-opacity))\n}\n\n.alert--warning[_ngcontent-%COMP%]   .alert__btn-close[_ngcontent-%COMP%]:hover {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUFBLG9CQUFBOztJQUFBLFlBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSxZQUFBOztJQUFBLGlCQUFBOztJQUFBLGlCQUFBOztJQUFBLHNCQUFBOztJQUFBLHFCQUFBOztJQUFBLHFGQUFBOztJQUFBLHdHQUFBOztJQUFBLDRHQUFBOztJQUFBLDBHQUFBOztJQUFBLDZGQUFBOztJQUFBLHFCQUFBOztJQUFBLHVEQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEsb0JBQUE7O0lBQUEscUJBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSxvQkFBQTs7SUFBQSxvQkFBQTs7SUFBQTtDQUFBOztBQUFBOztJQUFBLHdCQUFBOztJQUFBLG9CQUFBOztJQUFBLHFCQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEsK0JBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSxxQkFBQTs7SUFBQTtDQUFBOztBQUFBOztJQUFBLCtCQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEsbUJBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSxxQkFBQTs7SUFBQTtDQUFBOztBQUFBOztJQUFBLHFCQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEsOEJBQUE7O0lBQUEscUJBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSxxQkFBQTs7SUFBQTtDQUFBOztBQUFBOztJQUFBLG1CQUFBOztJQUFBLDBEQUFBOztJQUFBLHFCQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEscUJBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSxtQkFBQTs7SUFBQTtDQUFBOztBQUFBOztJQUFBLHFCQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEscUJBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSw4QkFBQTs7SUFBQSxxQkFBQTs7SUFBQTtDQUFBOztBQUFBOztJQUFBLHFCQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEsbUJBQUE7O0lBQUEsMERBQUE7O0lBQUEscUJBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSxxQkFBQTs7SUFBQTtDQUFBOztBQUFBOztJQUFBLG1CQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEscUJBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSxxQkFBQTs7SUFBQTtDQUFBOztBQUFBOztJQUFBLDhCQUFBOztJQUFBLHFCQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEscUJBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSxtQkFBQTs7SUFBQSwwREFBQTs7SUFBQSxxQkFBQTs7SUFBQTtDQUFBOztBQUFBOztJQUFBLHFCQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEsbUJBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSxxQkFBQTs7SUFBQTtDQUFBOztBQUFBOztJQUFBLHFCQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEsOEJBQUE7O0lBQUEscUJBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSxxQkFBQTs7SUFBQTtDQUFBOztBQUFBOztJQUFBLG1CQUFBOztJQUFBLDBEQUFBOztJQUFBLHFCQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEscUJBQUE7O0lBQUE7Q0FBQSIsImZpbGUiOiJhbGVydC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8665:
/*!****************************************************!*\
  !*** ./projects/psr/src/app/shared/alert/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertContainerComponent": () => (/* reexport safe */ _components_alert_container_component__WEBPACK_IMPORTED_MODULE_0__.AlertContainerComponent),
/* harmony export */   "AlertComponent": () => (/* reexport safe */ _components_alert_component__WEBPACK_IMPORTED_MODULE_1__.AlertComponent),
/* harmony export */   "AlertService": () => (/* reexport safe */ _services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService),
/* harmony export */   "Alert": () => (/* reexport safe */ _alert_model__WEBPACK_IMPORTED_MODULE_3__.Alert),
/* harmony export */   "AlertType": () => (/* reexport safe */ _alert_model__WEBPACK_IMPORTED_MODULE_3__.AlertType),
/* harmony export */   "AlertModule": () => (/* reexport safe */ _alert_module__WEBPACK_IMPORTED_MODULE_4__.AlertModule)
/* harmony export */ });
/* harmony import */ var _components_alert_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/alert-container.component */ 4315);
/* harmony import */ var _components_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/alert.component */ 1146);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/alert.service */ 640);
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.model */ 8028);
/* harmony import */ var _alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.module */ 7269);







/***/ }),

/***/ 640:
/*!*********************************************************************!*\
  !*** ./projects/psr/src/app/shared/alert/services/alert.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var _shared_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/alert */ 8665);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _env_environment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment.service */ 322);





class AlertService {
    constructor(env) {
        this.env = env;
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this._onCloseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this._defaultId = 'default-alert';
    }
    success(title, message, actions = [], options = this.env.alertOptions) {
        return this.sendAlert(new _shared_alert__WEBPACK_IMPORTED_MODULE_0__.Alert(Object.assign(Object.assign({}, options), { type: _shared_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Success, title, message, actions })));
    }
    error(title, message, actions = [], options = this.env.alertOptions) {
        return this.sendAlert(new _shared_alert__WEBPACK_IMPORTED_MODULE_0__.Alert(Object.assign(Object.assign({}, options), { type: _shared_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Error, title, message, actions })));
    }
    info(title, message, actions = [], options = this.env.alertOptions) {
        return this.sendAlert(new _shared_alert__WEBPACK_IMPORTED_MODULE_0__.Alert(Object.assign(Object.assign({}, options), { type: _shared_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Info, title, message, actions })));
    }
    warn(title, message, actions = [], options = this.env.alertOptions) {
        return this.sendAlert(new _shared_alert__WEBPACK_IMPORTED_MODULE_0__.Alert(Object.assign(Object.assign({}, options), { type: _shared_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Warning, title, message, actions })));
    }
    sendAlert(alert) {
        alert.id = alert.id || Symbol('alert');
        //TODO: ExpressionChangedAfterItHasBeenCheckedError
        this._subject.next(alert);
        return alert.id;
    }
    closeAlert(alertSymbol) {
        this._onCloseSubject.next(alertSymbol);
    }
    onAlert() {
        return this._subject.asObservable();
    }
    onCloseAlert(alertSymbol) {
        return this._onCloseSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(x => x === alertSymbol));
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_env_environment_service__WEBPACK_IMPORTED_MODULE_1__.EnvironmentService)); };
AlertService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4264:
/*!**************************************************************************!*\
  !*** ./projects/psr/src/app/shared/button-icon/button-icon.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonIconComponent": () => (/* binding */ ButtonIconComponent),
/* harmony export */   "ButtonIconModule": () => (/* binding */ ButtonIconModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


const _c0 = ["*"];
class ButtonIconComponent {
    constructor() {
        this.ariaLabel = '';
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    // @ContentChild(IconCloseComponent) icon!: IconCloseComponent;
    ngOnInit() { }
    ngAfterContentInit() {
        /* if (!(this.icon instanceof IconCloseComponent))
            console.error('Invalid component projected in ButtonIcon component'); */
    }
    onClick(e) {
        this.buttonClick.emit();
    }
}
ButtonIconComponent.ɵfac = function ButtonIconComponent_Factory(t) { return new (t || ButtonIconComponent)(); };
ButtonIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonIconComponent, selectors: [["app-button-icon"]], inputs: { ariaLabel: "ariaLabel" }, outputs: { buttonClick: "buttonClick" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [["type", "button", 1, "bg-transparent", 3, "click"], [1, "sr-only"]], template: function ButtonIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonIconComponent_Template_button_click_0_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ariaLabel);
    } }, styles: ["[_nghost-%COMP%] {\n    display: flex;\n    height: 1.75rem;\n    align-items: center;\n    outline: 2px solid transparent;\n    outline-offset: 2px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUEsY0FBQTtJQUFBLGdCQUFBO0lBQUEsb0JBQUE7SUFBQSwrQkFBQTtJQUFBO0NBQUEiLCJmaWxlIjoiYnV0dG9uLWljb24uY29tcG9uZW50LnRzIn0= */"] });
class ButtonIconModule {
}
ButtonIconModule.ɵfac = function ButtonIconModule_Factory(t) { return new (t || ButtonIconModule)(); };
ButtonIconModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ButtonIconModule });
ButtonIconModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ButtonIconModule, { declarations: [ButtonIconComponent], exports: [ButtonIconComponent] }); })();


/***/ }),

/***/ 5739:
/*!*****************************************************************************!*\
  !*** ./projects/psr/src/app/shared/directives/disable-control.directive.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisableControlDirective": () => (/* binding */ DisableControlDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);


class DisableControlDirective {
    constructor(ngControl) {
        this.ngControl = ngControl;
    }
    set disableControl(condition) {
        if (this.disabled !== undefined) {
            this.toggleControl(condition);
        }
        this.disabled = condition;
    }
    ngOnInit() {
        var _a;
        this.toggleControl((_a = this.disabled) !== null && _a !== void 0 ? _a : false);
    }
    toggleControl(condition) {
        const action = condition ? 'disable' : 'enable';
        if (this.ngControl.control) {
            this.ngControl.control[action]();
        }
    }
}
DisableControlDirective.ɵfac = function DisableControlDirective_Factory(t) { return new (t || DisableControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl)); };
DisableControlDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DisableControlDirective, selectors: [["", "disableControl", ""]], inputs: { disableControl: "disableControl" } });


/***/ }),

/***/ 2219:
/*!**************************************************************************!*\
  !*** ./projects/psr/src/app/shared/directives/element-host.directive.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementHostDirective": () => (/* binding */ ElementHostDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ElementHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ElementHostDirective.ɵfac = function ElementHostDirective_Factory(t) { return new (t || ElementHostDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
ElementHostDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ElementHostDirective, selectors: [["", "appElementHost", ""]] });


/***/ }),

/***/ 790:
/*!**************************************************************************!*\
  !*** ./projects/psr/src/app/shared/directives/template-ref.directive.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateRefDirective": () => (/* binding */ TemplateRefDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class TemplateRefDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TemplateRefDirective.ɵfac = function TemplateRefDirective_Factory(t) { return new (t || TemplateRefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
TemplateRefDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TemplateRefDirective, selectors: [["", "appTemplateRef", ""]] });


/***/ }),

/***/ 4885:
/*!******************************************************************!*\
  !*** ./projects/psr/src/app/shared/icons/base-icon.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseIconComponent": () => (/* binding */ BaseIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class BaseIconComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.iconClass = '';
    }
    ngOnInit() {
        if (this.iconClass.trim())
            this.renderer.addClass(this.el.nativeElement, this.iconClass);
    }
}
BaseIconComponent.ɵfac = function BaseIconComponent_Factory(t) { return new (t || BaseIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
BaseIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseIconComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function BaseIconComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 6439:
/*!*******************************************************************!*\
  !*** ./projects/psr/src/app/shared/icons/icon-close.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconCloseComponent": () => (/* binding */ IconCloseComponent)
/* harmony export */ });
/* harmony import */ var _base_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-icon.component */ 4885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class IconCloseComponent extends _base_icon_component__WEBPACK_IMPORTED_MODULE_0__.BaseIconComponent {
    constructor(el, renderer) {
        super(el, renderer);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
IconCloseComponent.ɵfac = function IconCloseComponent_Factory(t) { return new (t || IconCloseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2)); };
IconCloseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IconCloseComponent, selectors: [["app-icon-close"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["x-description", "Heroicon name: outline/x", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "aria-hidden", "true"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"]], template: function IconCloseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n    display: block;\n    height: 1.5rem;\n    width: 1.5rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUEsZUFBQTtJQUFBLGVBQUE7SUFBQTtDQUFBIiwiZmlsZSI6Imljb24tY2xvc2UuY29tcG9uZW50LnRzIn0= */"] });


/***/ }),

/***/ 445:
/*!**************************************************************************!*\
  !*** ./projects/psr/src/app/shared/icons/icon-dot-vertical.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconDotVerticalComponent": () => (/* binding */ IconDotVerticalComponent)
/* harmony export */ });
/* harmony import */ var _base_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-icon.component */ 4885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class IconDotVerticalComponent extends _base_icon_component__WEBPACK_IMPORTED_MODULE_0__.BaseIconComponent {
    constructor(el, renderer) {
        super(el, renderer);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
IconDotVerticalComponent.ɵfac = function IconDotVerticalComponent_Factory(t) { return new (t || IconDotVerticalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2)); };
IconDotVerticalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IconDotVerticalComponent, selectors: [["app-icon-dot-vertical"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true"], ["d", "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"]], template: function IconDotVerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n    display: block;\n    height: 1.25rem;\n    width: 1.25rem;\n    --tw-text-opacity: 1;\n    color: rgba(107, 114, 128, var(--tw-text-opacity));\n    transition-property: background-color, border-color, color, fill, stroke;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n    transition-duration: 200ms\n}\n[_nghost-%COMP%]:hover {\n    --tw-text-opacity: 1;\n    color: rgba(17, 24, 39, var(--tw-text-opacity))\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUEsZUFBQTtJQUFBLGdCQUFBO0lBQUEsZUFBQTtJQUFBLHFCQUFBO0lBQUEsbURBQUE7SUFBQSx5RUFBQTtJQUFBLHlEQUFBO0lBQUEsMkJBQUE7SUFBQTtDQUFBO0FBQUE7SUFBQSxxQkFBQTtJQUFBO0NBQUEiLCJmaWxlIjoiaWNvbi1kb3QtdmVydGljYWwuY29tcG9uZW50LnRzIn0= */"] });


/***/ }),

/***/ 561:
/*!*****************************************************************!*\
  !*** ./projects/psr/src/app/shared/icons/icon-eye.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconEyeComponent": () => (/* binding */ IconEyeComponent)
/* harmony export */ });
/* harmony import */ var _base_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-icon.component */ 4885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class IconEyeComponent extends _base_icon_component__WEBPACK_IMPORTED_MODULE_0__.BaseIconComponent {
    constructor(el, renderer) {
        super(el, renderer);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
IconEyeComponent.ɵfac = function IconEyeComponent_Factory(t) { return new (t || IconEyeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2)); };
IconEyeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IconEyeComponent, selectors: [["app-icon-eye"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 0, consts: [["fill", "currentColor", "viewBox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10 12a2 2 0 100-4 2 2 0 000 4z"], ["fill-rule", "evenodd", "d", "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z", "clip-rule", "evenodd"]], template: function IconEyeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n    display: block;\n    height: 1.25rem;\n    width: 1.25rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUEsZUFBQTtJQUFBLGdCQUFBO0lBQUE7Q0FBQSIsImZpbGUiOiJpY29uLWV5ZS5jb21wb25lbnQudHMifQ== */"] });


/***/ }),

/***/ 8392:
/*!********************************************************************!*\
  !*** ./projects/psr/src/app/shared/icons/icon-pencil.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconPencilComponent": () => (/* binding */ IconPencilComponent)
/* harmony export */ });
/* harmony import */ var _base_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-icon.component */ 4885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class IconPencilComponent extends _base_icon_component__WEBPACK_IMPORTED_MODULE_0__.BaseIconComponent {
    constructor(el, renderer) {
        super(el, renderer);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
IconPencilComponent.ɵfac = function IconPencilComponent_Factory(t) { return new (t || IconPencilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2)); };
IconPencilComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IconPencilComponent, selectors: [["app-icon-pencil"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["fill", "currentColor", "viewBox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"]], template: function IconPencilComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n    display: block;\n    height: 1.25rem;\n    width: 1.25rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUEsZUFBQTtJQUFBLGdCQUFBO0lBQUE7Q0FBQSIsImZpbGUiOiJpY29uLXBlbmNpbC5jb21wb25lbnQudHMifQ== */"] });


/***/ }),

/***/ 4842:
/*!*******************************************************************!*\
  !*** ./projects/psr/src/app/shared/icons/icon-trash.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconTrashComponent": () => (/* binding */ IconTrashComponent)
/* harmony export */ });
/* harmony import */ var _base_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-icon.component */ 4885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class IconTrashComponent extends _base_icon_component__WEBPACK_IMPORTED_MODULE_0__.BaseIconComponent {
    constructor(el, renderer) {
        super(el, renderer);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
IconTrashComponent.ɵfac = function IconTrashComponent_Factory(t) { return new (t || IconTrashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2)); };
IconTrashComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IconTrashComponent, selectors: [["app-icon-trash"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["fill", "currentColor", "viewBox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "d", "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z", "clip-rule", "evenodd"]], template: function IconTrashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n    display: block;\n    height: 1.25rem;\n    width: 1.25rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUEsZUFBQTtJQUFBLGdCQUFBO0lBQUE7Q0FBQSIsImZpbGUiOiJpY29uLXRyYXNoLmNvbXBvbmVudC50cyJ9 */"] });


/***/ }),

/***/ 6185:
/*!***********************************************************!*\
  !*** ./projects/psr/src/app/shared/icons/icons.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsModule": () => (/* binding */ IconsModule)
/* harmony export */ });
/* harmony import */ var _base_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-icon.component */ 4885);
/* harmony import */ var _icon_close_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-close.component */ 6439);
/* harmony import */ var _icon_dot_vertical_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-dot-vertical.component */ 445);
/* harmony import */ var _icon_eye_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon-eye.component */ 561);
/* harmony import */ var _icon_pencil_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon-pencil.component */ 8392);
/* harmony import */ var _icon_trash_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon-trash.component */ 4842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);







class IconsModule {
}
IconsModule.ɵfac = function IconsModule_Factory(t) { return new (t || IconsModule)(); };
IconsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: IconsModule });
IconsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](IconsModule, { declarations: [_icon_close_component__WEBPACK_IMPORTED_MODULE_1__.IconCloseComponent,
        _icon_dot_vertical_component__WEBPACK_IMPORTED_MODULE_2__.IconDotVerticalComponent,
        _icon_eye_component__WEBPACK_IMPORTED_MODULE_3__.IconEyeComponent,
        _icon_pencil_component__WEBPACK_IMPORTED_MODULE_4__.IconPencilComponent,
        _icon_trash_component__WEBPACK_IMPORTED_MODULE_5__.IconTrashComponent,
        _base_icon_component__WEBPACK_IMPORTED_MODULE_0__.BaseIconComponent], exports: [_icon_close_component__WEBPACK_IMPORTED_MODULE_1__.IconCloseComponent,
        _icon_dot_vertical_component__WEBPACK_IMPORTED_MODULE_2__.IconDotVerticalComponent,
        _icon_eye_component__WEBPACK_IMPORTED_MODULE_3__.IconEyeComponent,
        _icon_pencil_component__WEBPACK_IMPORTED_MODULE_4__.IconPencilComponent,
        _icon_trash_component__WEBPACK_IMPORTED_MODULE_5__.IconTrashComponent,
        _base_icon_component__WEBPACK_IMPORTED_MODULE_0__.BaseIconComponent] }); })();


/***/ }),

/***/ 1849:
/*!******************************************************************************!*\
  !*** ./projects/psr/src/app/shared/layouts/page-heading-layout.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeadingLayoutComponent": () => (/* binding */ PageHeadingLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

const _c0 = ["*"];
class PageHeadingLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageHeadingLayoutComponent.ɵfac = function PageHeadingLayoutComponent_Factory(t) { return new (t || PageHeadingLayoutComponent)(); };
PageHeadingLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHeadingLayoutComponent, selectors: [["app-page-heading-layout"]], ngContentSelectors: _c0, decls: 4, vars: 0, consts: [[1, "bg-white", "border-dashed", "border-b-2", "border-gray-200"], [1, "max-w-7xl", "mx-auto", "py-6", "px-4", "sm:px-6", "lg:px-8"]], template: function PageHeadingLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " dfaf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGluZy1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0UsY0FBQTtBQUFSIiwiZmlsZSI6InBhZ2UtaGVhZGluZy1sYXlvdXQuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 2643:
/*!***************************************************************************************!*\
  !*** ./projects/psr/src/app/shared/layouts/two-column/two-column-layout.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwoColumnLayoutComponent": () => (/* binding */ TwoColumnLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);



function TwoColumnLayoutComponent_aside_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = [[["", "header-content", ""]], [["", "breadcrumb-content", ""]], [["", "main-content", ""]], [["", "secondary-content", ""]]];
const _c1 = ["[header-content]", "[breadcrumb-content]", "[main-content]", "[secondary-content]"];
class TwoColumnLayoutComponent {
    constructor() {
        this.isSecondaryContentVisible = false;
        this.hamburgerMenuClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    hamburgerMenuClickHandler() {
        this.hamburgerMenuClick.emit();
    }
}
TwoColumnLayoutComponent.ɵfac = function TwoColumnLayoutComponent_Factory(t) { return new (t || TwoColumnLayoutComponent)(); };
TwoColumnLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwoColumnLayoutComponent, selectors: [["app-two-column-layout"]], inputs: { isSecondaryContentVisible: "isSecondaryContentVisible" }, outputs: { hamburgerMenuClick: "hamburgerMenuClick" }, ngContentSelectors: _c1, decls: 19, vars: 1, consts: [[1, "bg-white", "border-b-2", "border-gray-200", "border-dashed"], [1, "px-4", "py-6", "mx-auto", "max-w-7xl", "sm:px-6", "lg:px-8"], ["aria-label", "Breadcrumb", 1, "flex", "px-4", "py-4", "mx-auto", "border-b-2", "border-gray-200", "border-dashed", "max-w-7xl", "sm:px-6", "lg:px-8"], [1, "flex", "flex-col", "flex-1", "min-w-0", "min-h-full"], [1, "lg:hidden"], [1, "flex", "items-center", "justify-between", "bg-gray-50", "border-b", "border-gray-200", "px-4", "py-1.5"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "w-12", "h-12", "-mr-3", "text-gray-500", "rounded-md", "hover:text-gray-900", 3, "click"], [1, "sr-only"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "aria-hidden", "true", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"], [1, "relative", "z-0", "flex", "flex-1"], [1, "relative", "z-0", "flex-1", "bg-white", "focus:outline-none"], [1, "min-h-full", "px-4", "py-6", "sm:px-6", "lg:px-8"], [1, "h-full"], ["class", "relative flex-shrink-0 hidden border-l border-gray-200 bg-purple-50 lg:flex lg:flex-col w-80", 4, "ngIf"], [1, "relative", "flex-shrink-0", "hidden", "border-l", "border-gray-200", "bg-purple-50", "lg:flex", "lg:flex-col", "w-80"]], template: function TwoColumnLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TwoColumnLayoutComponent_Template_button_click_8_listener() { return ctx.hamburgerMenuClickHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Open sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "main", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](17, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TwoColumnLayoutComponent_aside_18_Template, 4, 0, "aside", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSecondaryContentVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: block;\n  flex: 1 1 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3by1jb2x1bW4tbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBQVYiLCJmaWxlIjoidHdvLWNvbHVtbi1sYXlvdXQuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZmxleDogMSAxIDAlO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 8971:
/*!**********************************************************************!*\
  !*** ./projects/psr/src/app/shared/link-icon/link-icon.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkIconComponent": () => (/* binding */ LinkIconComponent),
/* harmony export */   "LinkIconModule": () => (/* binding */ LinkIconModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _icons_icon_trash_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/icon-trash.component */ 4842);





const _c0 = ["container"];
const _c1 = ["tpl"];
function LinkIconComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, null, 2);
} }
class LinkIconComponent {
    constructor(resolver) {
        this.resolver = resolver;
        this.iconClass = 'bg-indigo-700';
        this.linkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // console.log('viewContainerRef', viewContainer);
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        // console.log('icon', this.icon);
    }
    ngAfterViewInit() {
        var _a;
        // console.log('this.iconHost', this.iconViewContainerRef);
        if (!this.menuItem || !this.menuItem.iconComponent)
            return;
        const componentFactory = this.resolver.resolveComponentFactory(this.menuItem.iconComponent);
        this._iconComponentRef = (_a = this.iconViewContainerRef) === null || _a === void 0 ? void 0 : _a.createComponent(componentFactory);
        if (this._iconComponentRef)
            this._iconComponentRef.instance.iconClass = this.iconClass;
    }
    onLinkClick() {
        // this.menuItem?.command();
        this.linkClick.emit(this.menuItem);
    }
    ngOnDestroy() {
        var _a;
        (_a = this._iconComponentRef) === null || _a === void 0 ? void 0 : _a.destroy();
    }
}
LinkIconComponent.ɵfac = function LinkIconComponent_Factory(t) { return new (t || LinkIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver)); };
LinkIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinkIconComponent, selectors: [["app-link-icon"]], contentQueries: function LinkIconComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _icons_icon_trash_component__WEBPACK_IMPORTED_MODULE_0__.IconTrashComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.icon = _t.first);
    } }, viewQuery: function LinkIconComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.iconViewContainerRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tpl = _t.first);
    } }, inputs: { menuItem: "menuItem", iconClass: "iconClass" }, outputs: { linkClick: "linkClick" }, decls: 4, vars: 2, consts: [["role", "menuitem", "tabindex", "-1", 1, "flex", "px-4", "py-2", "text-sm", 3, "click"], [4, "ngIf"], ["container", ""]], template: function LinkIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkIconComponent_Template_a_click_0_listener() { return ctx.onLinkClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LinkIconComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.menuItem == null ? null : ctx.menuItem.isIconVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.menuItem == null ? null : ctx.menuItem.label);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmstaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ007RUFDRSxjQUFBO0FBQVIiLCJmaWxlIjoibGluay1pY29uLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAiXX0= */"] });
class LinkIconModule {
}
LinkIconModule.ɵfac = function LinkIconModule_Factory(t) { return new (t || LinkIconModule)(); };
LinkIconModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LinkIconModule });
LinkIconModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LinkIconModule, { declarations: [LinkIconComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [LinkIconComponent] }); })();


/***/ }),

/***/ 1394:
/*!****************************************************************************!*\
  !*** ./projects/psr/src/app/shared/page-heading/page-heading.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeadingComponent": () => (/* binding */ PageHeadingComponent),
/* harmony export */   "PageHeadingModule": () => (/* binding */ PageHeadingModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class PageHeadingComponent {
    constructor() {
        this.title = '';
        this.description = '';
        this.xSize = "large";
        this.xColor = "black";
        // this.title = this.title ?? '';
        // this.description = this.description ?? '';
    }
    ngOnInit() {
    }
}
PageHeadingComponent.ɵfac = function PageHeadingComponent_Factory(t) { return new (t || PageHeadingComponent)(); };
PageHeadingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHeadingComponent, selectors: [["app-page-heading"]], inputs: { title: "title", description: "description", xSize: ["x-size", "xSize"], xColor: ["x-color", "xColor"] }, decls: 4, vars: 2, template: function PageHeadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n[x-size=large][_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n  font-weight: 700;\n}\n\n[x-size=large][_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 400;\n}\n\n[x-size=medium][_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  line-height: 1.5rem;\n}\n\n[x-size=medium][_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  max-width: 42rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n[x-color=black][_nghost-%COMP%]   h1[_ngcontent-%COMP%], [x-color=black][_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n\n[x-color=indigo][_nghost-%COMP%]   h1[_ngcontent-%COMP%], [x-color=indigo][_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgba(49, 46, 129, var(--tw-text-opacity));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGluZy5jb21wb25lbnQudHMiLCI8bm8gc291cmNlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLGNBQUE7QUFBUjs7QUNGQTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQTtDQUFBOztBQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBO0NBQUE7O0FBQUE7RUFBQSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsaUJBQUE7RUFBQTtDQUFBOztBQUFBO0VBQUEsb0JBQUE7RUFBQSxpQkFBQTtFQUFBLG9CQUFBO0VBQUE7Q0FBQTs7QUFBQTtFQUFBLHFCQUFBO0VBQUE7Q0FBQTs7QUFBQTtFQUFBLHFCQUFBO0VBQUE7Q0FBQSIsImZpbGUiOiJwYWdlLWhlYWRpbmcuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbeC1zaXplPWxhcmdlXSkge1xuICAgICAgICAgICYgaDEge1xuICAgICAgICAgICAgICBAYXBwbHkgdGV4dC0zeGwgZm9udC1ib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYgcCB7XG4gICAgICAgICAgICAgIEBhcHBseSB0ZXh0LWxnIGZvbnQtbm9ybWFsO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3gtc2l6ZT1tZWRpdW1dKSB7XG4gICAgICAgICAgJiBoMSB7XG4gICAgICAgICAgICAgIEBhcHBseSB0ZXh0LWxnIGZvbnQtbWVkaXVtIGxlYWRpbmctNjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmIHAge1xuICAgICAgICAgICAgICBAYXBwbHkgbWF4LXctMnhsIG10LTEgdGV4dC1zbTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt4LWNvbG9yPWJsYWNrXSkge1xuICAgICAgICAgICYgaDEsICYgcCB7XG4gICAgICAgICAgICAgIEBhcHBseSB0ZXh0LWdyYXktOTAwO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3gtY29sb3I9aW5kaWdvXSkge1xuICAgICAgICAgICYgaDEsICYgcCB7XG4gICAgICAgICAgICAgIEBhcHBseSB0ZXh0LWluZGlnby05MDA7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICIsbnVsbF19 */"] });
class PageHeadingModule {
}
PageHeadingModule.ɵfac = function PageHeadingModule_Factory(t) { return new (t || PageHeadingModule)(); };
PageHeadingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageHeadingModule });
PageHeadingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageHeadingModule, { declarations: [PageHeadingComponent], exports: [PageHeadingComponent] }); })();


/***/ }),

/***/ 7417:
/*!************************************************************************************!*\
  !*** ./projects/psr/src/app/shared/secondary-header/secondary-header.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondaryHeaderComponent": () => (/* binding */ SecondaryHeaderComponent),
/* harmony export */   "SecondaryHeaderModule": () => (/* binding */ SecondaryHeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button-icon/button-icon.component */ 4264);
/* harmony import */ var _icons_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/icons.module */ 6185);
/* harmony import */ var _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-heading/page-heading.component */ 1394);
/* harmony import */ var _secondary_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secondary-header.service */ 9212);
/* harmony import */ var _icons_icon_close_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/icon-close.component */ 6439);









class SecondaryHeaderComponent {
    constructor() {
        this.title = '';
        this.description = '';
        this.closeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    ngOnInit() {
    }
    onButtonClick() {
        this.closeClick.emit();
    }
}
SecondaryHeaderComponent.ɵfac = function SecondaryHeaderComponent_Factory(t) { return new (t || SecondaryHeaderComponent)(); };
SecondaryHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SecondaryHeaderComponent, selectors: [["app-secondary-header"]], inputs: { title: "title", description: "description" }, outputs: { closeClick: "closeClick" }, decls: 3, vars: 2, consts: [["x-size", "medium", "x-color", "indigo", 3, "title", "description"], [3, "buttonClick"]], template: function SecondaryHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-page-heading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-button-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("buttonClick", function SecondaryHeaderComponent_Template_app_button_icon_buttonClick_1_listener() { return ctx.onButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-icon-close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.title)("description", ctx.description);
    } }, directives: [_page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_2__.PageHeadingComponent, _button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_0__.ButtonIconComponent, _icons_icon_close_component__WEBPACK_IMPORTED_MODULE_4__.IconCloseComponent], styles: ["[_nghost-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    border-bottom-width: 1px;\n    --tw-border-opacity: 1;\n    border-color: rgba(229, 231, 235, var(--tw-border-opacity));\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUEsY0FBQTtJQUFBLCtCQUFBO0lBQUEseUJBQUE7SUFBQSx1QkFBQTtJQUFBLDREQUFBO0lBQUEscUJBQUE7SUFBQTtDQUFBIiwiZmlsZSI6InNlY29uZGFyeS1oZWFkZXIuY29tcG9uZW50LnRzIn0= */"] });
class SecondaryHeaderModule {
}
SecondaryHeaderModule.ɵfac = function SecondaryHeaderModule_Factory(t) { return new (t || SecondaryHeaderModule)(); };
SecondaryHeaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SecondaryHeaderModule });
SecondaryHeaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_secondary_header_service__WEBPACK_IMPORTED_MODULE_3__.SecondaryHeaderService], imports: [[_button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_0__.ButtonIconModule, _icons_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_2__.PageHeadingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SecondaryHeaderModule, { declarations: [SecondaryHeaderComponent], imports: [_button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_0__.ButtonIconModule, _icons_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_2__.PageHeadingModule], exports: [SecondaryHeaderComponent] }); })();


/***/ }),

/***/ 9212:
/*!**********************************************************************************!*\
  !*** ./projects/psr/src/app/shared/secondary-header/secondary-header.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondaryHeaderService": () => (/* binding */ SecondaryHeaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class SecondaryHeaderService {
    constructor() {
        this._subjectCloseClicked$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    get isCloseClicked$() {
        return this._subjectCloseClicked$.asObservable();
    }
    closeClicked() {
        this._subjectCloseClicked$.next(true);
    }
}
SecondaryHeaderService.ɵfac = function SecondaryHeaderService_Factory(t) { return new (t || SecondaryHeaderService)(); };
SecondaryHeaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SecondaryHeaderService, factory: SecondaryHeaderService.ɵfac });


/***/ }),

/***/ 2180:
/*!******************************************************!*\
  !*** ./projects/psr/src/app/shared/shared.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ 8665);
/* harmony import */ var _button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-icon/button-icon.component */ 4264);
/* harmony import */ var _directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/disable-control.directive */ 5739);
/* harmony import */ var _directives_element_host_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/element-host.directive */ 2219);
/* harmony import */ var _directives_template_ref_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/template-ref.directive */ 790);
/* harmony import */ var _icons_icons_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/icons.module */ 6185);
/* harmony import */ var _layouts_page_heading_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/page-heading-layout.component */ 1849);
/* harmony import */ var _layouts_two_column_two_column_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/two-column/two-column-layout.component */ 2643);
/* harmony import */ var _link_icon_link_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./link-icon/link-icon.component */ 8971);
/* harmony import */ var _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-heading/page-heading.component */ 1394);
/* harmony import */ var _secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./secondary-header/secondary-header.component */ 7417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);














class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_9__.PageHeadingModule,
            _icons_icons_module__WEBPACK_IMPORTED_MODULE_5__.IconsModule,
            _button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_1__.ButtonIconModule,
            _secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_10__.SecondaryHeaderModule,
            _link_icon_link_icon_component__WEBPACK_IMPORTED_MODULE_8__.LinkIconModule,
            _alert__WEBPACK_IMPORTED_MODULE_0__.AlertModule
        ], _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_9__.PageHeadingModule,
        _icons_icons_module__WEBPACK_IMPORTED_MODULE_5__.IconsModule,
        _button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_1__.ButtonIconModule,
        _link_icon_link_icon_component__WEBPACK_IMPORTED_MODULE_8__.LinkIconModule,
        _secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_10__.SecondaryHeaderModule,
        _alert__WEBPACK_IMPORTED_MODULE_0__.AlertModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_layouts_two_column_two_column_layout_component__WEBPACK_IMPORTED_MODULE_7__.TwoColumnLayoutComponent,
        _layouts_page_heading_layout_component__WEBPACK_IMPORTED_MODULE_6__.PageHeadingLayoutComponent,
        _directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_2__.DisableControlDirective,
        _directives_element_host_directive__WEBPACK_IMPORTED_MODULE_3__.ElementHostDirective,
        _directives_template_ref_directive__WEBPACK_IMPORTED_MODULE_4__.TemplateRefDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_9__.PageHeadingModule,
        _icons_icons_module__WEBPACK_IMPORTED_MODULE_5__.IconsModule,
        _button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_1__.ButtonIconModule,
        _secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_10__.SecondaryHeaderModule,
        _link_icon_link_icon_component__WEBPACK_IMPORTED_MODULE_8__.LinkIconModule,
        _alert__WEBPACK_IMPORTED_MODULE_0__.AlertModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_9__.PageHeadingModule,
        _icons_icons_module__WEBPACK_IMPORTED_MODULE_5__.IconsModule,
        _button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_1__.ButtonIconModule,
        _link_icon_link_icon_component__WEBPACK_IMPORTED_MODULE_8__.LinkIconModule,
        _secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_10__.SecondaryHeaderModule,
        _alert__WEBPACK_IMPORTED_MODULE_0__.AlertModule,
        _layouts_two_column_two_column_layout_component__WEBPACK_IMPORTED_MODULE_7__.TwoColumnLayoutComponent,
        _layouts_page_heading_layout_component__WEBPACK_IMPORTED_MODULE_6__.PageHeadingLayoutComponent,
        _directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_2__.DisableControlDirective,
        _directives_element_host_directive__WEBPACK_IMPORTED_MODULE_3__.ElementHostDirective,
        _directives_template_ref_directive__WEBPACK_IMPORTED_MODULE_4__.TemplateRefDirective] }); })();


/***/ }),

/***/ 8969:
/*!*************************************************************************!*\
  !*** ./projects/psr/src/app/widgets/breadcrumb/breadcrumb.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb.service */ 2579);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);




function BreadcrumbComponent_ol_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", item_r2.newRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.label);
} }
const _c0 = function () { return ["/"]; };
function BreadcrumbComponent_ol_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BreadcrumbComponent_ol_0_ng_container_8_Template, 7, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.breadcrumbs);
} }
class BreadcrumbComponent {
    constructor(breadcrumbService, router) {
        this.breadcrumbService = breadcrumbService;
        this.router = router;
        this.breadcrumbs = [];
        this.breadcrumbs$ = this.breadcrumbService;
    }
    get isBreadcrumbVisible() {
        return this.breadcrumbs.length > 0;
    }
    ngOnInit() {
        // console.log('ngOnInit');
        this._breadcrumbSub = this.breadcrumbs$.subscribe(breadcrumbs => {
            this.breadcrumbs = breadcrumbs;
        });
    }
    onBreadcrumbMenuItemClick(item) {
        this.router.navigateByUrl(item.newRoute);
    }
    ngOnDestroy() {
        var _a;
        // console.log('ngOnDestroy');
        (_a = this._breadcrumbSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 1, vars: 1, consts: [["role", "list", "class", "flex items-center space-x-4", 4, "ngIf"], ["role", "list", 1, "flex", "items-center", "space-x-4"], [1, "text-gray-400", "hover:text-gray-500", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", 1, "flex-shrink-0", "w-5", "h-5"], ["d", "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"], [1, "sr-only"], [4, "ngFor", "ngForOf"], [1, "flex", "items-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 20 20", "aria-hidden", "true", 1, "flex-shrink-0", "w-5", "h-5", "text-gray-300"], ["d", "M5.555 17.776l8-16 .894.448-8 16-.894-.448z"], [1, "ml-4", "text-sm", "font-medium", "text-gray-500", "cursor-pointer", "hover:text-gray-700", 3, "routerLink"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BreadcrumbComponent_ol_0_Template, 9, 3, "ol", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isBreadcrumbVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0UsY0FBQTtBQUFSIiwiZmlsZSI6ImJyZWFkY3J1bWIuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 3554:
/*!**********************************************************************!*\
  !*** ./projects/psr/src/app/widgets/breadcrumb/breadcrumb.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbModule": () => (/* binding */ BreadcrumbModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb.component */ 8969);
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumb.service */ 2579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





class BreadcrumbModule {
}
BreadcrumbModule.ɵfac = function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); };
BreadcrumbModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BreadcrumbModule });
BreadcrumbModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BreadcrumbModule, { declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent] }); })();


/***/ }),

/***/ 2579:
/*!***********************************************************************!*\
  !*** ./projects/psr/src/app/widgets/breadcrumb/breadcrumb.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BREADCRUMB_CONFIG_TOKEN": () => (/* binding */ BREADCRUMB_CONFIG_TOKEN),
/* harmony export */   "BreadcrumbService": () => (/* binding */ BreadcrumbService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5160);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8636);






const BREADCRUMB_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("breadcrumb-config");
/* const breadcrumbConfig: IBreadcrumb[] = ; */
class BreadcrumbService extends rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable {
    constructor(route, router, breadcrumbConfig) {
        super(subscriber => {
            // console.log('subscriber');
            // this._routerEvent$.subscribe(subscriber);
            this._breadcrumbsSub = this._breadcrumbs$.asObservable().subscribe(subscriber);
            this._routeEventSub = this._routerEvent$.subscribe();
            return () => {
                var _a, _b;
                (_a = this._routeEventSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
                (_b = this._breadcrumbsSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
            };
        });
        this.route = route;
        this.router = router;
        this.breadcrumbConfig = breadcrumbConfig;
        this._breadcrumbs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this._paramPattern = /\:([a-zA-Z]+)/g;
        // console.log('constructor');
        this._routeEventSub = this._routerEvent$.subscribe();
    }
    get _routerEvent$() {
        return this.router.events.pipe(
        // Filter the NavigationEnd events as the breadcrumb is
        // updated only when the route reaches its end
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => this.route), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(route => {
            return route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => {
                let index = this.breadcrumbConfig.findIndex(x => x.name === data.breadcrumb);
                return this.updateWithParams(this.breadcrumbConfig.slice(0, index + 1), route.snapshot.params);
            }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(breadcrumb => {
            this._breadcrumbs$.next(breadcrumb);
        }));
    }
    updateWithParams(breadcrumb, params) {
        let result;
        let breadcrumbCopy = JSON.parse(JSON.stringify(breadcrumb));
        // let first = breadcrumbCopy[0];
        breadcrumbCopy.forEach((b) => {
            var _a;
            let routeToUpdate = b.newRoute;
            while ((result = this._paramPattern.exec(routeToUpdate)) != null) {
                routeToUpdate = routeToUpdate.replace(result[0], (_a = params[result[1]]) !== null && _a !== void 0 ? _a : result[0]);
            }
            if (routeToUpdate.indexOf(':') > -1)
                console.error(`Unable to update parameters of route: ${b.newRoute}`);
            b.newRoute = routeToUpdate;
        });
        return breadcrumbCopy;
    }
}
BreadcrumbService.ɵfac = function BreadcrumbService_Factory(t) { return new (t || BreadcrumbService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BREADCRUMB_CONFIG_TOKEN)); };
BreadcrumbService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BreadcrumbService, factory: BreadcrumbService.ɵfac });


/***/ }),

/***/ 1994:
/*!*******************************************************************************!*\
  !*** ./projects/psr/src/app/widgets/dropdown-menu/dropdown-menu.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownMenuComponent": () => (/* binding */ DropdownMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);




function DropdownMenuComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownMenuComponent_ng_container_1_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const menuItem_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onMenuItemClick(menuItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", menuItem_r1.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menuItem_r1.label, " ");
} }
class DropdownMenuComponent {
    constructor() {
        this.menus = [];
        this.menuItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    onMenuItemClick(menuItem) {
        this.menuItemClicked.emit(menuItem);
    }
}
DropdownMenuComponent.ɵfac = function DropdownMenuComponent_Factory(t) { return new (t || DropdownMenuComponent)(); };
DropdownMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropdownMenuComponent, selectors: [["app-dropdown-menu"]], inputs: { menus: "menus" }, outputs: { menuItemClicked: "menuItemClicked" }, decls: 2, vars: 1, consts: [["role", "menu", "aria-orientation", "vertical", "aria-labelledby", "user-menu-button", "tabindex", "-1", 1, "absolute", "right-0", "w-48", "py-1", "mt-2", "origin-top-right", "bg-white", "rounded-md", "shadow-lg", "ring-1", "ring-black", "ring-opacity-5", "focus:outline-none"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "router-link-active", "tabindex", "-1", 1, "block", "px-4", "py-2", "text-sm", "text-gray-700", 3, "routerLink", "click"]], template: function DropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropdownMenuComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 514:
/*!****************************************************************************!*\
  !*** ./projects/psr/src/app/widgets/dropdown-menu/dropdown-menu.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownMenuModule": () => (/* binding */ DropdownMenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _dropdown_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-menu.component */ 1994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




class DropdownMenuModule {
}
DropdownMenuModule.ɵfac = function DropdownMenuModule_Factory(t) { return new (t || DropdownMenuModule)(); };
DropdownMenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DropdownMenuModule });
DropdownMenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DropdownMenuModule, { declarations: [_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_0__.DropdownMenuComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_0__.DropdownMenuComponent] }); })();


/***/ }),

/***/ 9497:
/*!***************************************************************************!*\
  !*** ./projects/psr/src/app/widgets/empty-state/empty-state.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyStateComponent": () => (/* binding */ EmptyStateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class EmptyStateComponent {
    constructor() {
        this.title = 'No item found';
        this.description = 'Get started by adding a new item';
        this.buttonLabel = 'Add New';
    }
    ngOnInit() {
    }
}
EmptyStateComponent.ɵfac = function EmptyStateComponent_Factory(t) { return new (t || EmptyStateComponent)(); };
EmptyStateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmptyStateComponent, selectors: [["app-empty-state"]], inputs: { title: "title", description: "description", buttonLabel: "buttonLabel" }, decls: 11, vars: 3, consts: [["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "aria-hidden", "true", 1, "w-12", "h-12", "mx-auto", "text-gray-400"], ["vector-effect", "non-scaling-stroke", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"], [1, "mt-2", "text-sm", "font-medium", "text-gray-900"], [1, "mt-1", "text-sm", "text-gray-500"], [1, "mt-6"], ["type", "button", 1, "inline-flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "text-white", "bg-indigo-600", "border", "border-transparent", "rounded-md", "shadow-sm", "hover:bg-indigo-700", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-indigo-500"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", 1, "w-5", "h-5", "mr-2", "-ml-1"], ["fill-rule", "evenodd", "d", "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z", "clip-rule", "evenodd"]], template: function EmptyStateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.buttonLabel, " ");
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  border-width: 2px;\n  --tw-border-opacity: 1;\n  border-color: rgba(209, 213, 219, var(--tw-border-opacity));\n  padding: 3rem;\n  text-align: center;\n  border-radius: 0.5rem;\n  border-style: dashed;\n}[_nghost-%COMP%]:hover {\n  --tw-border-opacity: 1;\n  border-color: rgba(156, 163, 175, var(--tw-border-opacity));\n}[_nghost-%COMP%]:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHR5LXN0YXRlLmNvbXBvbmVudC50cyIsIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0UsY0FBQTtFQ0ZSLGtCQUFBO0VBQUEsdUJBQUE7RUFBQSw0REFBQTtFQUFBLGNBQUE7RUFBQSxtQkFBQTtFQUFBLHNCQUFBO0VBQUEscUJBQUE7QURJQSxDQ0pBO0VBQUEsdUJBQUE7RUFBQTtDQUFBO0VBQUEsK0JBQUE7RUFBQTtDQUFBIiwiZmlsZSI6ImVtcHR5LXN0YXRlLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgQGFwcGx5IHAtMTIgdGV4dC1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwO1xuICAgICAgICBAYXBwbHkgYm9yZGVyLWRhc2hlZCByb3VuZGVkLWxnIGhvdmVyOmJvcmRlci1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmU7XG4gICAgICB9XG4gICAgIixudWxsXX0= */"] });


/***/ }),

/***/ 8853:
/*!******************************************************************************!*\
  !*** ./projects/psr/src/app/widgets/header/hamburger/hamburger.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HamburgerComponent": () => (/* binding */ HamburgerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


class HamburgerComponent {
    constructor() {
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    onClick() {
        this.clicked.emit();
    }
}
HamburgerComponent.ɵfac = function HamburgerComponent_Factory(t) { return new (t || HamburgerComponent)(); };
HamburgerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HamburgerComponent, selectors: [["app-hamburger"]], outputs: { clicked: "clicked" }, decls: 7, vars: 0, consts: [["type", "button", "aria-controls", "mobile-menu", "aria-expanded", "false", 1, "inline-flex", "items-center", "justify-center", "p-2", "text-gray-400", "rounded-md", "hover:text-white", "hover:bg-gray-700", "focus:outline-none", "focus:ring-2", "focus:ring-inset", "focus:ring-white", 3, "click"], [1, "sr-only"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "aria-hidden", "true", 1, "block", "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "aria-hidden", "true", 1, "hidden", "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"]], template: function HamburgerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HamburgerComponent_Template_button_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Open main menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    display: flex;\n    align-items: center\n}\n@media (min-width: 640px) {\n    [_nghost-%COMP%] {\n        display: none\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUEsbUJBQUE7SUFBQSxTQUFBO0lBQUEsWUFBQTtJQUFBLFVBQUE7SUFBQSxjQUFBO0lBQUE7Q0FBQTtBQUFBO0lBQUE7UUFBQTtLQUFBO0NBQUEiLCJmaWxlIjoiaGFtYnVyZ2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8088:
/*!*****************************************************************!*\
  !*** ./projects/psr/src/app/widgets/header/header.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _psr_core_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @psr/core/app.config */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hamburger/hamburger.component */ 8853);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo/logo.component */ 7001);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.component */ 4914);
/* harmony import */ var _profile_menu_profile_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-menu/profile-menu.component */ 7762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);







function HeaderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-navigation", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("menu", ctx_r1.primaryMenu)("stacked", true);
} }
class HeaderComponent {
    constructor(appConfig) {
        this.appConfig = appConfig;
        this.isMobileMenuOpen = false;
        this.primaryMenu = this.appConfig.primaryMenu;
        this.profileMenu = this.appConfig.profileMenu;
        this._showSignInOrSignUp = false;
    }
    set showSignInOrSignUp(value) {
        this._showSignInOrSignUp = !(value !== null && value !== void 0 ? value : false);
    }
    ;
    get showSignInOrSignUp() {
        return this._showSignInOrSignUp;
    }
    ngOnInit() {
    }
    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_psr_core_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG_TOKEN)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { showSignInOrSignUp: "showSignInOrSignUp" }, decls: 12, vars: 5, consts: [[1, "bg-gray-800"], [1, "px-2", "mx-auto", "max-w-7xl", "sm:px-6", "lg:px-8"], [1, "relative", "flex", "items-center", "justify-between", "h-16"], [3, "clicked"], [1, "flex", "items-center", "justify-center", "flex-1", "sm:items-stretch", "sm:justify-start"], [1, "hidden", "sm:block", "sm:ml-12"], [1, "desktop-menu", 3, "menu", "stacked"], [1, "absolute", "inset-y-0", "right-0", "flex", "items-center", "pr-2", "sm:static", "sm:inset-auto", "sm:ml-6", "sm:pr-0"], [3, "menuItems"], ["class", "flex mt-4 md:mt-0 md:ml-4", 4, "ngIf"], ["class", "sm:hidden", 4, "ngIf"], [1, "flex", "mt-4", "md:mt-0", "md:ml-4"], ["type", "button", 1, "inline-flex", "items-center", "px-4", "py-2", "text-sm", "font-medium", "text-white", "bg-gray-700", "border", "border-transparent", "rounded-md", "shadow-sm", "hover:bg-gray-700", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-offset-gray-800", "focus:ring-indigo-500"], ["type", "button", 1, "inline-flex", "items-center", "px-4", "py-2", "ml-3", "text-sm", "font-medium", "text-white", "bg-indigo-500", "border", "border-transparent", "rounded-md", "shadow-sm", "hover:bg-indigo-600", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-offset-gray-800", "focus:ring-indigo-500"], [1, "sm:hidden"], [1, "mobile-menu", 3, "menu", "stacked"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "app-hamburger", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("clicked", function HeaderComponent_Template_app_hamburger_clicked_3_listener() { return ctx.toggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-navigation", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "app-profile-menu", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, HeaderComponent_div_10_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, HeaderComponent_div_11_Template, 2, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("menu", ctx.primaryMenu)("stacked", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("menuItems", ctx.profileMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showSignInOrSignUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isMobileMenuOpen);
    } }, directives: [_hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_1__.HamburgerComponent, _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__.LogoComponent, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__.NavigationComponent, _profile_menu_profile_menu_component__WEBPACK_IMPORTED_MODULE_4__.ProfileMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLGNBQUE7QUFFUiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9Il19 */"] });


/***/ }),

/***/ 3256:
/*!**************************************************************!*\
  !*** ./projects/psr/src/app/widgets/header/header.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModule": () => (/* binding */ HeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _widgets_dropdown_menu_dropdown_menu_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @widgets/dropdown-menu/dropdown-menu.module */ 514);
/* harmony import */ var _widgets_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @widgets/logo */ 5498);
/* harmony import */ var _hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburger/hamburger.component */ 8853);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ 8088);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/navigation.component */ 4914);
/* harmony import */ var _profile_menu_profile_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-menu/profile-display.component */ 3308);
/* harmony import */ var _profile_menu_profile_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-menu/profile-menu.component */ 7762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);










class HeaderModule {
}
HeaderModule.ɵfac = function HeaderModule_Factory(t) { return new (t || HeaderModule)(); };
HeaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
            _widgets_dropdown_menu_dropdown_menu_module__WEBPACK_IMPORTED_MODULE_0__.DropdownMenuModule,
            _widgets_logo__WEBPACK_IMPORTED_MODULE_1__.LogoModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_2__.HamburgerComponent,
        _profile_menu_profile_menu_component__WEBPACK_IMPORTED_MODULE_6__.ProfileMenuComponent,
        _profile_menu_profile_display_component__WEBPACK_IMPORTED_MODULE_5__.ProfileDisplayComponent,
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__.NavigationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
        _widgets_dropdown_menu_dropdown_menu_module__WEBPACK_IMPORTED_MODULE_0__.DropdownMenuModule,
        _widgets_logo__WEBPACK_IMPORTED_MODULE_1__.LogoModule], exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent] }); })();


/***/ }),

/***/ 2120:
/*!******************************************************!*\
  !*** ./projects/psr/src/app/widgets/header/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModule": () => (/* reexport safe */ _header_module__WEBPACK_IMPORTED_MODULE_0__.HeaderModule),
/* harmony export */   "HeaderComponent": () => (/* reexport safe */ _header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent)
/* harmony export */ });
/* harmony import */ var _header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.module */ 3256);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component */ 8088);




/***/ }),

/***/ 4914:
/*!********************************************************************************!*\
  !*** ./projects/psr/src/app/widgets/header/navigation/navigation.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



function NavigationComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.cssClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", menuItem_r1.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menuItem_r1.label, " ");
} }
class NavigationComponent {
    constructor() {
        this.menu = [];
        this.stacked = false;
    }
    ngOnInit() {
    }
    cssClass() {
        const classes = ['menu__item'];
        if (this.stacked) {
            classes.push('menu__item--stacked');
        }
        return classes.join(' ');
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], inputs: { menu: "menu", stacked: "stacked" }, decls: 1, vars: 1, consts: [["routerLinkActive", "menu__item--active", 3, "routerLink", "class", 4, "ngFor", "ngForOf"], ["routerLinkActive", "menu__item--active", 3, "routerLink"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavigationComponent_a_0_Template, 2, 5, "a", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: [".desktop-menu[_nghost-%COMP%], .desktop-menu   [_nghost-%COMP%] {\n\n    display: flex\n}\n\n.desktop-menu[_nghost-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]), .desktop-menu   [_nghost-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n\n    --tw-space-x-reverse: 0;\n\n    margin-right: calc(1rem * var(--tw-space-x-reverse));\n\n    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)))\n}\n\n.mobile-menu[_nghost-%COMP%], .mobile-menu   [_nghost-%COMP%] {\n\n    display: block\n}\n\n.mobile-menu[_nghost-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]), .mobile-menu   [_nghost-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n\n    --tw-space-y-reverse: 0;\n\n    margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n\n    margin-bottom: calc(0.25rem * var(--tw-space-y-reverse))\n}\n\n.mobile-menu[_nghost-%COMP%], .mobile-menu   [_nghost-%COMP%] {\n\n    padding-left: 0.5rem;\n\n    padding-right: 0.5rem;\n\n    padding-top: 0.5rem;\n\n    padding-bottom: 0.75rem\n}\n\n.menu__item[_ngcontent-%COMP%] {\n\n    border-radius: 0.375rem;\n\n    padding-left: 0.75rem;\n\n    padding-right: 0.75rem;\n\n    padding-top: 0.5rem;\n\n    padding-bottom: 0.5rem;\n\n    font-size: 0.875rem;\n\n    line-height: 1.25rem;\n\n    font-weight: 500;\n\n    --tw-text-opacity: 1;\n\n    color: rgba(209, 213, 219, var(--tw-text-opacity))\n}\n\n.menu__item[_ngcontent-%COMP%]:hover {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(55, 65, 81, var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n.menu__item--active[_ngcontent-%COMP%] {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(17, 24, 39, var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n.menu__item--stacked[_ngcontent-%COMP%] {\n\n    display: block;\n\n    font-size: 1rem;\n\n    line-height: 1.5rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEsd0JBQUE7O0lBQUEscURBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQTtDQUFBOztBQUFBOztJQUFBLHdCQUFBOztJQUFBLGdFQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEscUJBQUE7O0lBQUEsc0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSx3QkFBQTs7SUFBQSxzQkFBQTs7SUFBQSx1QkFBQTs7SUFBQSxvQkFBQTs7SUFBQSx1QkFBQTs7SUFBQSxvQkFBQTs7SUFBQSxxQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSxxQkFBQTs7SUFBQTtDQUFBOztBQUFBOztJQUFBLG1CQUFBOztJQUFBLHlEQUFBOztJQUFBLHFCQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEsbUJBQUE7O0lBQUEseURBQUE7O0lBQUEscUJBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSxlQUFBOztJQUFBLGdCQUFBOztJQUFBO0NBQUEiLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQudHMifQ== */"] });


/***/ }),

/***/ 9482:
/*!*********************************************************************!*\
  !*** ./projects/psr/src/app/widgets/header/profile-menu.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileMenuService": () => (/* binding */ ProfileMenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class ProfileMenuService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
    get openStatus$() {
        return this.subject.asObservable();
    }
    changeOpenStatus(status) {
        this.subject.next(status);
    }
}
ProfileMenuService.ɵfac = function ProfileMenuService_Factory(t) { return new (t || ProfileMenuService)(); };
ProfileMenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProfileMenuService, factory: ProfileMenuService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3308:
/*!***************************************************************************************!*\
  !*** ./projects/psr/src/app/widgets/header/profile-menu/profile-display.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileDisplayComponent": () => (/* binding */ ProfileDisplayComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _profile_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../profile-menu.service */ 9482);



class ProfileDisplayComponent {
    constructor(service) {
        this.service = service;
        this.openStatusSubscription = undefined;
        this.user = null;
        this.openStatus$ = this.service.openStatus$;
    }
    ngOnInit() {
    }
    toggleDropdown() {
        this.openStatusSubscription = this.openStatus$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1))
            .subscribe(status => {
            this.service.changeOpenStatus(!status);
        });
    }
    ngOnDestroy() {
        var _a;
        this.openStatusSubscription && ((_a = this.openStatusSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe());
    }
}
ProfileDisplayComponent.ɵfac = function ProfileDisplayComponent_Factory(t) { return new (t || ProfileDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_profile_menu_service__WEBPACK_IMPORTED_MODULE_0__.ProfileMenuService)); };
ProfileDisplayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileDisplayComponent, selectors: [["app-profile-display"]], inputs: { user: "user" }, decls: 6, vars: 1, consts: [[1, "profile-display"], ["type", "button", "id", "profile-menu-button", "aria-expanded", "false", "aria-haspopup", "true", 1, "profile-display__button", 3, "click"], [1, "sr-only"], [1, "profile-display__welcome"]], template: function ProfileDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileDisplayComponent_Template_button_click_1_listener() { return ctx.toggleDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Open profile menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Welcome ", ctx.user == null ? null : ctx.user.firstName, "");
    } }, styles: [".profile-display[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10\n}\n.profile-display__button[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center\n}\n.profile-display__button[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(1rem * var(--tw-space-x-reverse));\n    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)))\n}\n.profile-display__button[_ngcontent-%COMP%] {\n    border-radius: 9999px;\n    --tw-bg-opacity: 1;\n    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)\n}\n.profile-display__button[_ngcontent-%COMP%]:focus {\n    outline: 2px solid transparent;\n    outline-offset: 2px\n}\n.profile-display__welcome[_ngcontent-%COMP%] {\n    border-radius: 0.375rem;\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    font-weight: 500;\n    --tw-text-opacity: 1;\n    color: rgba(209, 213, 219, var(--tw-text-opacity))\n}\n.profile-display__welcome[_ngcontent-%COMP%]:hover {\n    --tw-text-opacity: 1;\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUEsbUJBQUE7SUFBQTtDQUFBO0FBQUE7SUFBQSxjQUFBO0lBQUE7Q0FBQTtBQUFBO0lBQUEsd0JBQUE7SUFBQSxxREFBQTtJQUFBO0NBQUE7QUFBQTtJQUFBLHNCQUFBO0lBQUEsbUJBQUE7SUFBQSx5REFBQTtJQUFBLDRHQUFBO0lBQUEsMEdBQUE7SUFBQTtDQUFBO0FBQUE7SUFBQSwrQkFBQTtJQUFBO0NBQUE7QUFBQTtJQUFBLHdCQUFBO0lBQUEsc0JBQUE7SUFBQSx1QkFBQTtJQUFBLG9CQUFBO0lBQUEsdUJBQUE7SUFBQSxvQkFBQTtJQUFBLHFCQUFBO0lBQUEsaUJBQUE7SUFBQSxxQkFBQTtJQUFBO0NBQUE7QUFBQTtJQUFBLHFCQUFBO0lBQUE7Q0FBQSIsImZpbGUiOiJwcm9maWxlLWRpc3BsYXkuY29tcG9uZW50LnRzIn0= */"] });


/***/ }),

/***/ 7762:
/*!************************************************************************************!*\
  !*** ./projects/psr/src/app/widgets/header/profile-menu/profile-menu.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileMenuComponent": () => (/* binding */ ProfileMenuComponent)
/* harmony export */ });
/* harmony import */ var _auth_auth_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/auth.constants */ 7353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _profile_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile-menu.service */ 9482);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/services/auth.service */ 4796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _profile_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-display.component */ 3308);
/* harmony import */ var _dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dropdown-menu/dropdown-menu.component */ 1994);







function ProfileMenuComponent_app_profile_display_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-profile-display", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("user", ctx_r0.user);
} }
function ProfileMenuComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileMenuComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.onHideDropdown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProfileMenuComponent_app_dropdown_menu_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-dropdown-menu", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("menuItemClicked", function ProfileMenuComponent_app_dropdown_menu_2_Template_app_dropdown_menu_menuItemClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.onMenuItemClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("menus", ctx_r2.menuItems);
} }
// (isDropdownOpen)="toggleDropdown($event)"
class ProfileMenuComponent {
    constructor(service, auth) {
        this.service = service;
        this.auth = auth;
        this.user = null;
        this.isDropdownOpen = false;
        this.menuItems = [];
        this.openStatus$ = this.service.openStatus$;
    }
    ngOnInit() {
        this.openStatus$.subscribe(status => {
            this.isDropdownOpen = status;
        });
        this.getUserSub = this.auth.getUser()
            .subscribe(user => {
            this.user = user;
        });
    }
    onHideDropdown() {
        this.service.changeOpenStatus(false);
    }
    onMenuItemClicked(menuItem) {
        if (JSON.stringify(menuItem.routerLink) === JSON.stringify(_auth_auth_constants__WEBPACK_IMPORTED_MODULE_0__.AuthRoutes.RevokeToken())) {
            this.service.changeOpenStatus(false);
        }
    }
    onHandleEscape(e) {
        if (e.key === 'Esc' || e.key === 'Escape') {
            this.service.changeOpenStatus(false);
        }
    }
    ngOnDestroy() {
        this.getUserSub && this.getUserSub.unsubscribe();
    }
}
ProfileMenuComponent.ɵfac = function ProfileMenuComponent_Factory(t) { return new (t || ProfileMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_profile_menu_service__WEBPACK_IMPORTED_MODULE_1__.ProfileMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
ProfileMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProfileMenuComponent, selectors: [["app-profile-menu"]], hostBindings: function ProfileMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown", function ProfileMenuComponent_keydown_HostBindingHandler($event) { return ctx.onHandleEscape($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
    } }, inputs: { menuItems: "menuItems" }, decls: 3, vars: 3, consts: [[3, "user", 4, "ngIf"], ["class", "close-overlay", "tabindex", "-1", 3, "click", 4, "ngIf"], [3, "menus", "menuItemClicked", 4, "ngIf"], [3, "user"], ["tabindex", "-1", 1, "close-overlay", 3, "click"], [3, "menus", "menuItemClicked"]], template: function ProfileMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ProfileMenuComponent_app_profile_display_0_Template, 1, 1, "app-profile-display", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileMenuComponent_button_1_Template, 1, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileMenuComponent_app_dropdown_menu_2_Template, 1, 1, "app-dropdown-menu", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isDropdownOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isDropdownOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _profile_display_component__WEBPACK_IMPORTED_MODULE_3__.ProfileDisplayComponent, _dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuComponent], styles: ["[_nghost-%COMP%] {\n\n    position: relative\n}\n\n.close-overlay[_ngcontent-%COMP%] {\n\n    position: fixed;\n\n    top: 0px;\n\n    right: 0px;\n\n    bottom: 0px;\n\n    left: 0px;\n\n    height: 100%;\n\n    width: 100%;\n\n    cursor: default\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsU0FBQTs7SUFBQSxXQUFBOztJQUFBLFlBQUE7O0lBQUEsVUFBQTs7SUFBQSxhQUFBOztJQUFBLFlBQUE7O0lBQUE7Q0FBQSIsImZpbGUiOiJwcm9maWxlLW1lbnUuY29tcG9uZW50LnRzIn0= */"] });


/***/ }),

/***/ 5498:
/*!****************************************************!*\
  !*** ./projects/psr/src/app/widgets/logo/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoComponent": () => (/* reexport safe */ _logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent),
/* harmony export */   "LogoModule": () => (/* reexport safe */ _logo_module__WEBPACK_IMPORTED_MODULE_1__.LogoModule)
/* harmony export */ });
/* harmony import */ var _logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.component */ 7001);
/* harmony import */ var _logo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.module */ 3183);




/***/ }),

/***/ 7001:
/*!*************************************************************!*\
  !*** ./projects/psr/src/app/widgets/logo/logo.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoComponent": () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 1, vars: 0, consts: [["src", "assets/psr-abbrv-logo.svg", "alt", "Personal Skill Rating", 1, "block", "w-10", "h-8", "lg:block"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["[_nghost-%COMP%] {\n    display: flex;\n    flex-shrink: 0;\n    align-items: center\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUEsY0FBQTtJQUFBLGVBQUE7SUFBQTtDQUFBIiwiZmlsZSI6ImxvZ28uY29tcG9uZW50LnRzIn0= */"] });


/***/ }),

/***/ 3183:
/*!**********************************************************!*\
  !*** ./projects/psr/src/app/widgets/logo/logo.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoModule": () => (/* binding */ LogoModule)
/* harmony export */ });
/* harmony import */ var _logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.component */ 7001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class LogoModule {
}
LogoModule.ɵfac = function LogoModule_Factory(t) { return new (t || LogoModule)(); };
LogoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LogoModule });
LogoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LogoModule, { declarations: [_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent], exports: [_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent] }); })();


/***/ }),

/***/ 9284:
/*!*************************************************************************!*\
  !*** ./projects/psr/src/app/widgets/read-field/read-field.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadFieldComponent": () => (/* binding */ ReadFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function ReadFieldComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.fieldLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.fieldValue);
} }
class ReadFieldComponent {
    constructor() { }
    get isFieldVisible() {
        return this.fieldLabel && this.fieldValue;
    }
}
ReadFieldComponent.ɵfac = function ReadFieldComponent_Factory(t) { return new (t || ReadFieldComponent)(); };
ReadFieldComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReadFieldComponent, selectors: [["app-read-field"]], inputs: { fieldLabel: "fieldLabel", fieldValue: "fieldValue" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "text-sm", "font-medium", "text-indigo-900"], [1, "mt-1", "text-sm", "text-indigo-900"]], template: function ReadFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReadFieldComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFieldVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWQtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0UsY0FBQTtBQUFSIiwiZmlsZSI6InJlYWQtZmllbGQuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 8319:
/*!********************************************************!*\
  !*** ./projects/psr/src/app/widgets/widgets.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsModule": () => (/* binding */ WidgetsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.module */ 3554);
/* harmony import */ var _empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty-state/empty-state.component */ 9497);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ 2120);
/* harmony import */ var _read_field_read_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./read-field/read-field.component */ 9284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);






class WidgetsModule {
}
WidgetsModule.ɵfac = function WidgetsModule_Factory(t) { return new (t || WidgetsModule)(); };
WidgetsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: WidgetsModule });
WidgetsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _header__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
            _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbModule
        ], _header__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
        _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WidgetsModule, { declarations: [_read_field_read_field_component__WEBPACK_IMPORTED_MODULE_3__.ReadFieldComponent,
        _empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_1__.EmptyStateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _header__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
        _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbModule], exports: [_header__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
        _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbModule,
        _read_field_read_field_component__WEBPACK_IMPORTED_MODULE_3__.ReadFieldComponent,
        _empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_1__.EmptyStateComponent] }); })();


/***/ }),

/***/ 322:
/*!**************************************************************!*\
  !*** ./projects/psr/src/environments/environment.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnvironmentService": () => (/* binding */ EnvironmentService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 9328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class EnvironmentService {
    constructor() { }
    get production() {
        return _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production;
    }
    get enableDebugTools() {
        return _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.enableDebugTools;
    }
    get logLevel() {
        return _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.logLevel;
    }
    get apiUrl() {
        return _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    get alertOptions() {
        return _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.alertOptions;
    }
}
EnvironmentService.ɵfac = function EnvironmentService_Factory(t) { return new (t || EnvironmentService)(); };
EnvironmentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EnvironmentService, factory: EnvironmentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9328:
/*!******************************************************!*\
  !*** ./projects/psr/src/environments/environment.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const _apiHost = 'localhost';
const _apiPort = 4455;
const _version = "v1";
const _apiUrl = `http://${_apiHost}:${_apiPort}/api/${_version}/`;
const environment = {
    production: false,
    enableDebugTools: true,
    logLevel: 'debug',
    apiUrl: _apiUrl,
    alertOptions: {
        autoClose: true,
        timeToClose: 10
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 2080:
/*!**********************************!*\
  !*** ./projects/psr/src/main.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRootUrl": () => (/* binding */ getRootUrl)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6624);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 9328);




function getRootUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'ROOT_URL', useFactory: getRootUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 7969:
/*!********************************************************************!*\
  !*** ./projects/psr/$_lazy_route_resources/ lazy namespace object ***!
  \********************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 7969;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(2080)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map