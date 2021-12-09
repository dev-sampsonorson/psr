import * as i0 from '@angular/core';
import { Injectable, Inject, Component, NgModule, ViewChildren, Input, EventEmitter, Output } from '@angular/core';
import * as i2$1 from '@angular/forms';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@corelib';
import { APP_CONFIG_TOKEN, USER_STORAGE_KEY_TOKEN, QueryParameterNames } from '@corelib';
import { take, map, tap, switchMap, distinctUntilChanged, debounceTime, first, mergeMap } from 'rxjs/operators';
import { BehaviorSubject, of, Subject } from 'rxjs';
import * as i1 from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import * as i3 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i3$1 from '@sharedlib';
import { CommonModule } from '@angular/common';

let authPaths = {
    Register: `auth/register`,
    Login: `auth/authenticate`,
    RefreshToken: `auth/refresh`,
    RevokeToken: `auth/revoke`,
    CheckEmailExists: `users/exists`,
};
let authRoutePaths = {
    Register: 'register',
    Login: 'login',
    RevokeToken: 'revoke',
};
let authNavRoutes = {
    Register: () => [`/auth/${authRoutePaths.Register}`],
    Login: () => [`/auth/${authRoutePaths.Login}`],
    // RefreshToken: () => [`/auth/refresh`],
    // RevokeToken: () => [`/auth/revoke`],
};
let authConsts = {
    UserKey: "psr-userkey-tlxstgmzna"
};
const AuthEndpoints = authPaths; // contained in authlib
const AuthRoutePaths = authRoutePaths;
// export const AuthNavRoutes: IAuthNavRoutes = authNavRoutes;
const AuthConstants = authConsts;

class AuthService {
    constructor(http, userStorage, router, appConfig, userStorageKey) {
        this.http = http;
        this.userStorage = userStorage;
        this.router = router;
        this.appConfig = appConfig;
        this.userStorageKey = userStorageKey;
    }
    isAuthenticated() {
        return this.userStorage.getUser().pipe(take(1), map(user => !!user));
    }
    getToken() {
        // this.retrieveUser()
        return this.userStorage.getUser().pipe(take(1), map(user => user && user.token));
    }
    login(payload) {
        return this.http.post(this.appConfig.getUrl(AuthEndpoints.Login), payload, { withCredentials: true }).pipe(
        // shareReplay(),
        tap(user => {
            this.userStorage.setUser(user);
            this.userStorage.storeUser(user);
            // this.userSubject.next(user);
            // this.startRefreshTokenTimer();
            // this.storeUser(user);
        }));
    }
    redirectToLogin() {
        this.router.navigate([this.appConfig.navigationPaths.Login]);
    }
    logout() {
        // this.userSubject.next(null);
        // logout from server
        // pass refresh token if you can
        // console.log('logging out...');
        return this.http.post(this.appConfig.getUrl(AuthEndpoints.RevokeToken), {}, { withCredentials: true }).pipe(
        // shareReplay(),
        tap((user) => {
            // emit null as next user
            this.userStorage.setUser(null);
            // this.userSubject.next(null);
            // stop refresh token timer
            // this.startRefreshTokenTimer();
            // remove user from localStorage
            this.userStorage.removeUser();
            // this.removeUser();
            // redirect to login
            this.router.navigate([this.appConfig.navigationPaths.Login]);
        })).subscribe();
    }
    register(payload) {
        return this.http.post(this.appConfig.getUrl(AuthEndpoints.Register), payload, { withCredentials: true }).pipe(tap(user => {
            this.userStorage.setUser(user);
            // this.userSubject.next(user);
            // this.startRefreshTokenTimer();
            this.userStorage.storeUser(user);
            // this.storeUser(user);
        }));
    }
    refreshToken() {
        return this.getToken().pipe(switchMap(token => this.http.post(this.appConfig.getUrl(AuthEndpoints.RefreshToken), { token }, { withCredentials: true }).pipe(tap((user) => {
            this.userStorage.setUser(user);
            // this.userSubject.next(user);
            // this.startRefreshTokenTimer();
            this.userStorage.storeUser(user);
            // this.storeUser(user);
        }))));
    }
    checkEmailExists(email) {
        return this.http.post(this.appConfig.getUrl(AuthEndpoints.CheckEmailExists), {
            email: email
        });
    }
    startRefreshTokenTimer() {
        this.userStorage.getUser()
            .pipe(take(1))
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
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthService, deps: [{ token: i1.HttpClient }, { token: i2.UserStorageService }, { token: i3.Router }, { token: APP_CONFIG_TOKEN }, { token: USER_STORAGE_KEY_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.UserStorageService }, { type: i3.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [USER_STORAGE_KEY_TOKEN]
                }] }]; } });

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
        const subject = new BehaviorSubject('');
        const debouncedInput$ = subject.asObservable().pipe(distinctUntilChanged(), debounceTime(1000), switchMap(value => this.auth.checkEmailExists(value)), map((result, index) => {
            return result.value === 'invalid' ? { emailNotAvailable: true } : null;
        })).pipe(first());
        return (control) => {
            if (!control.value)
                return of(null);
            subject.next(control.value);
            return debouncedInput$;
        };
    }
}
AuthValidatorsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthValidatorsService, deps: [{ token: AuthService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthValidatorsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthValidatorsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthValidatorsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: AuthService }]; } });

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
PasswordService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PasswordService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PasswordService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PasswordService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PasswordService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

function authInitializer(auth) {
    return () => new Promise(resolve => {
        // attempt to refresh token on app start up to auto authenticate
        auth.refreshToken()
            .subscribe()
            .add(resolve);
    });
}

class LoginComponent {
    constructor(auth, fb, validators, alert, router, appConfig) {
        this.auth = auth;
        this.fb = fb;
        this.validators = validators;
        this.alert = alert;
        this.router = router;
        this.appConfig = appConfig;
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
        debounceTime(100)).subscribe(formStatus => {
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
                this.router.navigate([this.appConfig.navigationPaths.Home]);
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
            email: ['john@email.com', [Validators.required, Validators.email]],
            password: ['J0h1n.Pass', [Validators.required, this.validators.passwordPatternValidator()]]
        });
    }
    gotoRegister() {
        this.router.navigate([this.appConfig.navigationPaths.Register]);
    }
    ngOnDestroy() {
        this.loginSub.unsubscribe();
        this.formStatusSub.unsubscribe();
    }
}
LoginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LoginComponent, deps: [{ token: AuthService }, { token: i2$1.FormBuilder }, { token: AuthValidatorsService }, { token: i3$1.AlertService }, { token: i3.Router }, { token: APP_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Component });
LoginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: LoginComponent, selector: "app-login", ngImport: i0, template: "<!-- <div class=\"login\"> -->\r\n<div class=\"sm:mx-auto sm:w-full sm:max-w-md\">\r\n    <h2 class=\"psr-form__header\">Sign In</h2>\r\n</div>\r\n<div class=\"psr-form__container\">\r\n    <div class=\"psr-form__group\">\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"loginEmployee()\" class=\"psr-form__form\">\r\n            <div>\r\n                <label class=\"psr-form__label\" for=\"email-address\">Email address</label>\r\n                <input formControlName=\"email\" [class.psr-form__field--error]=\"isInvalid(emailControl)\"\r\n                       id=\"email-address\" name=\"email-address\" type=\"email\" class=\"psr-form__field\"\r\n                       placeholder=\"example@email.com\" autocomplete=\"email\" />\r\n                <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(emailControl, 'required')\">What is your email\r\n                    address?</p>\r\n                <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(emailControl, 'email')\">Invalid email format</p>\r\n            </div>\r\n            <div>\r\n                <label class=\"psr-form__label\" for=\"password\">Password</label>\r\n                <input formControlName=\"password\" [class.psr-form__field--error]=\"isInvalid(passwordControl)\"\r\n                       id=\"password\" name=\"password\" type=\"password\" class=\"psr-form__field\" placeholder=\"\"\r\n                       autocomplete=\"current-password\">\r\n                <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(passwordControl, 'required')\">What is your\r\n                    password?</p>\r\n            </div>\r\n            <div>\r\n                <!-- [disabled]=\"!formIsValid\" -->\r\n                <button class=\"psr-form__button\" type=\"submit\">\r\n                    Sign in\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <p class=\"psr-form__footer\">Don't Have an Account? <a class=\"psr-form__alt-action\" (click)=\"gotoRegister()\">Create\r\n            it.</a></p>\r\n</div>\r\n<!-- </div> -->\r\n", styles: [":host{@apply block min-h-full;@apply flex flex-col justify-center items-center;@apply h-screen px-4 py-12 overflow-y-auto;}:host:after{content:\"\";background-image:url(/assets/bg-login.jpg);background-repeat:no-repeat;background-size:cover;opacity:.2;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1}\n"], directives: [{ type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-login',
                    templateUrl: './login.component.html',
                    styleUrls: ['./login.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: AuthService }, { type: i2$1.FormBuilder }, { type: AuthValidatorsService }, { type: i3$1.AlertService }, { type: i3.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }]; } });

class LoginModule {
}
LoginModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LoginModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LoginModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LoginModule, declarations: [LoginComponent], imports: [ReactiveFormsModule], exports: [LoginComponent] });
LoginModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LoginModule, imports: [[ReactiveFormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LoginModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [ReactiveFormsModule],
                    declarations: [LoginComponent],
                    exports: [LoginComponent]
                }]
        }] });

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
        this.passwordControl.valueChanges.pipe(debounceTime(200), distinctUntilChanged()).subscribe((value) => {
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
PasswordStrengthComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PasswordStrengthComponent, deps: [{ token: PasswordService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
PasswordStrengthComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: PasswordStrengthComponent, selector: "app-password-strength", inputs: { passwordControl: ["password-control", "passwordControl"] }, viewQueries: [{ propertyName: "chunkEls", predicate: ["chunk"], descendants: true }], ngImport: i0, template: "<div class=\"strength\">\r\n    <ul class=\"strength__bar\">\r\n        <li class=\"strength__chunk\" #chunk></li>\r\n        <li class=\"strength__chunk\" #chunk></li>\r\n        <li class=\"strength__chunk\" #chunk></li>\r\n        <li class=\"strength__chunk\" #chunk></li>\r\n    </ul>\r\n</div>\r\n", styles: [".strength{display:block}.strength__bar{@apply flex space-x-1 m-0 p-0 list-none;}.strength__chunk{@apply bg-gray-200 rounded-sm h-1 w-1/4;}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PasswordStrengthComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-password-strength',
                    templateUrl: './password-strength.component.html',
                    styleUrls: ['./password-strength.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: PasswordService }, { type: i0.Renderer2 }]; }, propDecorators: { chunkEls: [{
                type: ViewChildren,
                args: ['chunk']
            }], passwordControl: [{
                type: Input,
                args: ['password-control']
            }] } });

class PasswordStrengthModule {
}
PasswordStrengthModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PasswordStrengthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PasswordStrengthModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PasswordStrengthModule, declarations: [PasswordStrengthComponent], exports: [PasswordStrengthComponent] });
PasswordStrengthModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PasswordStrengthModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PasswordStrengthModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PasswordStrengthComponent],
                    exports: [PasswordStrengthComponent]
                }]
        }] });

class RegisterComponent {
    constructor(auth, fb, validators, lookupService, alert, router, appConfig) {
        this.auth = auth;
        this.fb = fb;
        this.validators = validators;
        this.lookupService = lookupService;
        this.alert = alert;
        this.router = router;
        this.appConfig = appConfig;
        this.passwordChange = new EventEmitter();
        this.countries = [];
        this.formIsValid = false;
        this.debouncer$ = new Subject();
    }
    ngOnInit() {
        this.createForm();
        this.lookupService.getCountries().subscribe(result => this.countries = result);
        this.debouncer$.pipe(debounceTime(500), distinctUntilChanged()).subscribe((value) => this.passwordChange.emit(value));
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
                    { name: 'Login', route: [this.appConfig.navigationPaths.Login] }
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
            email: ['', [Validators.required, Validators.email], [this.validators.emailAvailableValidator()]],
            password: ['', [Validators.required, this.validators.passwordPatternValidator()]],
            confirmPassword: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            country: ['', Validators.required],
            timezone: ['', Validators.required],
            workHours: ['', Validators.required],
            coreHours: ['', Validators.required]
        }, {
            validator: this.validators.passwordMatchValidator('password', 'confirmPassword')
        });
    }
    gotoLogin() {
        this.router.navigate([this.appConfig.navigationPaths.Login]);
    }
    ngOnDestroy() {
        this.registerSub.unsubscribe();
        this.formStatusSub.unsubscribe();
    }
}
RegisterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: RegisterComponent, deps: [{ token: AuthService }, { token: i2$1.FormBuilder }, { token: AuthValidatorsService }, { token: i2.LookupService }, { token: i3$1.AlertService }, { token: i3.Router }, { token: APP_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Component });
RegisterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: RegisterComponent, selector: "app-register", outputs: { passwordChange: "passwordChange" }, ngImport: i0, template: "<div class=\"sm:mx-auto sm:w-full sm:max-w-md\">\r\n    <h2 class=\"psr-form__header\">Register\r\n    </h2>\r\n</div>\r\n<div class=\"psr-form__container\">\r\n    <div class=\"psr-form__group\">\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"registerEmployee()\" class=\"psr-form__form\">\r\n            <div>\r\n                <label class=\"psr-form__label\" for=\"email-address\">Email address</label>\r\n                <input formControlName=\"email\" [class.psr-form__field--error]=\"isInvalid(emailControl)\"\r\n                       id=\"email-address\" name=\"email-address\" type=\"email\" class=\"psr-form__field\"\r\n                       placeholder=\"example@email.com\" autocomplete=\"email\" />\r\n                <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(emailControl, 'required')\">What is your email\r\n                    address?</p>\r\n                <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(emailControl, 'emailNotAvailable')\">\r\n                    Email not available\r\n                </p>\r\n            </div>\r\n            <div class=\"flex flex-wrap -mx-3\">\r\n                <div class=\"w-1/2 px-3\">\r\n                    <label class=\"psr-form__label\" for=\"password\">Password</label>\r\n                    <input formControlName=\"password\" [class.psr-form__field--error]=\"isInvalid(passwordControl)\"\r\n                           (input)=\"onPasswordChange($event)\" id=\"password\" name=\"password\" type=\"password\"\r\n                           class=\"psr-form__field\" placeholder=\"\" autocomplete=\"current-password\">\r\n                    <app-password-strength [password-control]=\"passwordControl\"></app-password-strength>\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(passwordControl)\">\r\n                        Enter a combination of at least eight characters; numbers, uppercase, lowercase, and\r\n                        punctuation.\r\n                    </p>\r\n                </div>\r\n                <div class=\"w-1/2 px-3\">\r\n                    <label class=\"psr-form__label\" for=\"confirm-password\">Confirm password</label>\r\n                    <input formControlName=\"confirmPassword\"\r\n                           [class.psr-form__field--error]=\"isInvalid(confirmPasswordControl)\" id=\"confirm-password\"\r\n                           name=\"confirm-password\" type=\"password\" class=\"psr-form__field\" placeholder=\"\"\r\n                           autocomplete=\"new-password\">\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"confirmPasswordControl.hasError('passwordMismatch')\">\r\n                        Passwords do not match\r\n                    </p>\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(confirmPasswordControl, 'required')\">\r\n                        Confirm your password\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"flex flex-wrap -mx-3\">\r\n                <div class=\"w-1/2 px-3\">\r\n                    <label class=\"psr-form__label\" for=\"first-name\">First name</label>\r\n                    <input formControlName=\"firstName\" [class.psr-form__field--error]=\"isInvalid(firstNameControl)\"\r\n                           id=\"first-name\" name=\"first-name\" type=\"text\" class=\"psr-form__field\" placeholder=\"\">\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(firstNameControl)\">\r\n                        What is your first name?\r\n                    </p>\r\n                </div>\r\n                <div class=\"w-1/2 px-3\">\r\n                    <label class=\"psr-form__label\" for=\"last-name\">Last name</label>\r\n                    <input formControlName=\"lastName\" [class.psr-form__field--error]=\"isInvalid(lastNameControl)\"\r\n                           id=\"last-name\" name=\"last-name\" type=\"text\" class=\"psr-form__field\" placeholder=\"\">\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(lastNameControl)\">\r\n                        What is your last name?\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"flex flex-wrap -mx-3\">\r\n                <div class=\"w-1/2 px-3\">\r\n                    <label for=\"country\" class=\"psr-form__label\">Country</label>\r\n                    <select formControlName=\"country\" [class.psr-form__field--error]=\"isInvalid(countryControl)\"\r\n                            id=\"country\" name=\"country\" class=\"psr-form__select\">\r\n                        <option value=\"\" selected> -- </option>\r\n                        <option [value]=\"country.id\" *ngFor=\"let country of countries\">{{ country.value }}</option>\r\n                    </select>\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(countryControl)\">\r\n                        What country do you reside in?\r\n                    </p>\r\n                </div>\r\n                <div class=\"w-1/2 px-3\">\r\n                    <label class=\"psr-form__label\" for=\"timezone\">Timezone</label>\r\n                    <input formControlName=\"timezone\" [class.psr-form__field--error]=\"isInvalid(timezoneControl)\"\r\n                           id=\"timezone\" name=\"timezone\" type=\"text\" class=\"psr-form__field\" placeholder=\"\">\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(timezoneControl)\">\r\n                        What is your time zone?\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"flex flex-wrap -mx-3\">\r\n                <div class=\"w-1/2 px-3\">\r\n                    <label class=\"psr-form__label\" for=\"core-hours\">Core hours</label>\r\n                    <input formControlName=\"coreHours\" [class.psr-form__field--error]=\"isInvalid(coreHoursControl)\"\r\n                           id=\"core-hours\" name=\"core-hours\" type=\"text\" class=\"psr-form__field\" placeholder=\"\">\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(coreHoursControl)\">\r\n                        What is your core work period? (8am - 4pm)\r\n                    </p>\r\n                </div>\r\n                <div class=\"w-1/2 px-3\">\r\n                    <label class=\"psr-form__label\" for=\"work-hours\">Work hours</label>\r\n                    <input formControlName=\"workHours\" [class.psr-form__field--error]=\"isInvalid(workHoursControl)\"\r\n                           id=\"work-hours\" name=\"work-hours\" type=\"text\" class=\"psr-form__field\" placeholder=\"\">\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(workHoursControl)\">\r\n                        What is your probably work period? (6am - 9pm)\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <button [disabled]=\"!formIsValid\" class=\"psr-form__button\" type=\"submit\">\r\n                    Register\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <p class=\"psr-form__footer\">Already have an Account? <a class=\"psr-form__alt-action\" (click)=\"gotoLogin()\">Log\r\n            in.</a></p>\r\n</div>\r\n", styles: [":host{@apply block min-h-full;@apply flex flex-col justify-center items-center;@apply h-screen px-4 py-12 overflow-y-auto;}:host:after{content:\"\";background-image:url(/assets/bg-login.jpg);background-repeat:no-repeat;background-size:cover;opacity:.2;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1}\n"], components: [{ type: PasswordStrengthComponent, selector: "app-password-strength", inputs: ["password-control"] }], directives: [{ type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { type: i2$1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i2$1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: RegisterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-register',
                    templateUrl: './register.component.html',
                    styleUrls: ['./register.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: AuthService }, { type: i2$1.FormBuilder }, { type: AuthValidatorsService }, { type: i2.LookupService }, { type: i3$1.AlertService }, { type: i3.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }]; }, propDecorators: { passwordChange: [{
                type: Output
            }] } });

class RegisterModule {
}
RegisterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: RegisterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RegisterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: RegisterModule, declarations: [RegisterComponent], imports: [ReactiveFormsModule, PasswordStrengthModule], exports: [RegisterComponent] });
RegisterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: RegisterModule, imports: [[ReactiveFormsModule, PasswordStrengthModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: RegisterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [ReactiveFormsModule, PasswordStrengthModule],
                    declarations: [RegisterComponent],
                    exports: [RegisterComponent]
                }]
        }] });

const authRoutes = [
    { path: AuthRoutePaths.Register, component: RegisterComponent },
    { path: AuthRoutePaths.Login, component: LoginComponent },
    { path: '**', redirectTo: AuthRoutePaths.Login, pathMatch: 'full' }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AuthRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthRoutingModule, imports: [i3.RouterModule], exports: [RouterModule] });
AuthRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthRoutingModule, imports: [[RouterModule.forChild(authRoutes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(authRoutes)],
                    exports: [RouterModule]
                }]
        }] });

class AuthGuard {
    constructor(auth, router, appConfig) {
        this.auth = auth;
        this.router = router;
        this.appConfig = appConfig;
    }
    canActivate(route, state) {
        return this.auth.isAuthenticated().pipe(tap(isAuthenticated => this.handleAuthorization(isAuthenticated, state)));
    }
    handleAuthorization(isAuthenticated, state) {
        if (!isAuthenticated) {
            this.router.navigate([this.appConfig.navigationPaths.Login], {
                queryParams: {
                    [QueryParameterNames.ReturnUrl]: state.url
                }
            });
        }
    }
}
AuthGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthGuard, deps: [{ token: AuthService }, { token: i3.Router }, { token: APP_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
AuthGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: AuthService }, { type: i3.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }]; } });

class AuthorizeInterceptor {
    constructor(auth, appConfig) {
        this.auth = auth;
        this.appConfig = appConfig;
    }
    intercept(req, next) {
        return this.auth.getToken()
            .pipe(mergeMap(token => this.processRequestWithToken(token, req, next)));
    }
    processRequestWithToken(token, req, next) {
        // const isApiUrl = req.url.startsWith(this.env.apiUrl);
        const isApiUrl = req.url.startsWith(this.appConfig.baseUrl);
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
AuthorizeInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthorizeInterceptor, deps: [{ token: AuthService }, { token: APP_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
AuthorizeInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthorizeInterceptor, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthorizeInterceptor, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: AuthService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }]; } });

class AuthlibModule {
}
AuthlibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthlibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AuthlibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthlibModule, imports: [CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        RegisterModule,
        PasswordStrengthModule,
        LoginModule] });
AuthlibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthlibModule, providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
    ], imports: [[
            CommonModule,
            ReactiveFormsModule,
            AuthRoutingModule,
            RegisterModule,
            PasswordStrengthModule,
            LoginModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthlibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        AuthRoutingModule,
                        RegisterModule,
                        PasswordStrengthModule,
                        LoginModule
                    ],
                    providers: [
                        { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
                    ],
                    exports: []
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AuthConstants, AuthEndpoints, AuthGuard, AuthRoutePaths, AuthRoutingModule, AuthService, AuthValidatorsService, AuthlibModule, AuthorizeInterceptor, LoginComponent, LoginModule, PasswordService, PasswordStrengthComponent, PasswordStrengthModule, RegisterComponent, RegisterModule, authInitializer };
//# sourceMappingURL=authlib.js.map
