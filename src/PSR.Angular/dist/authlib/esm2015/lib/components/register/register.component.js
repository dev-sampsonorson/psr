import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { APP_CONFIG_TOKEN } from '@corelib';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../services/auth.service";
import * as i2 from "@angular/forms";
import * as i3 from "../../services/auth-validators.service";
import * as i4 from "@corelib";
import * as i5 from "@sharedlib";
import * as i6 from "@angular/router";
import * as i7 from "../password-strength/password-strength.component";
export class RegisterComponent {
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
RegisterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: RegisterComponent, deps: [{ token: i1.AuthService }, { token: i2.FormBuilder }, { token: i3.AuthValidatorsService }, { token: i4.LookupService }, { token: i5.AlertService }, { token: i6.Router }, { token: APP_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Component });
RegisterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: RegisterComponent, selector: "app-register", outputs: { passwordChange: "passwordChange" }, ngImport: i0, template: "<div class=\"sm:mx-auto sm:w-full sm:max-w-md\">\r\n    <h2 class=\"psr-form__header\">Register\r\n    </h2>\r\n</div>\r\n<div class=\"psr-form__container\">\r\n    <div class=\"psr-form__group\">\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"registerEmployee()\" class=\"psr-form__form\">\r\n            <div>\r\n                <label class=\"psr-form__label\" for=\"email-address\">Email address</label>\r\n                <input formControlName=\"email\" [class.psr-form__field--error]=\"isInvalid(emailControl)\"\r\n                       id=\"email-address\" name=\"email-address\" type=\"email\" class=\"psr-form__field\"\r\n                       placeholder=\"example@email.com\" autocomplete=\"email\" />\r\n                <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(emailControl, 'required')\">What is your email\r\n                    address?</p>\r\n                <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(emailControl, 'emailNotAvailable')\">\r\n                    Email not available\r\n                </p>\r\n            </div>\r\n            <div class=\"flex flex-wrap -mx-3\">\r\n                <div class=\"w-1/2 px-3\">\r\n                    <label class=\"psr-form__label\" for=\"password\">Password</label>\r\n                    <input formControlName=\"password\" [class.psr-form__field--error]=\"isInvalid(passwordControl)\"\r\n                           (input)=\"onPasswordChange($event)\" id=\"password\" name=\"password\" type=\"password\"\r\n                           class=\"psr-form__field\" placeholder=\"\" autocomplete=\"current-password\">\r\n                    <app-password-strength [password-control]=\"passwordControl\"></app-password-strength>\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(passwordControl)\">\r\n                        Enter a combination of at least eight characters; numbers, uppercase, lowercase, and\r\n                        punctuation.\r\n                    </p>\r\n                </div>\r\n                <div class=\"w-1/2 px-3\">\r\n                    <label class=\"psr-form__label\" for=\"confirm-password\">Confirm password</label>\r\n                    <input formControlName=\"confirmPassword\"\r\n                           [class.psr-form__field--error]=\"isInvalid(confirmPasswordControl)\" id=\"confirm-password\"\r\n                           name=\"confirm-password\" type=\"password\" class=\"psr-form__field\" placeholder=\"\"\r\n                           autocomplete=\"new-password\">\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"confirmPasswordControl.hasError('passwordMismatch')\">\r\n                        Passwords do not match\r\n                    </p>\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(confirmPasswordControl, 'required')\">\r\n                        Confirm your password\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"flex flex-wrap -mx-3\">\r\n                <div class=\"w-1/2 px-3\">\r\n                    <label class=\"psr-form__label\" for=\"first-name\">First name</label>\r\n                    <input formControlName=\"firstName\" [class.psr-form__field--error]=\"isInvalid(firstNameControl)\"\r\n                           id=\"first-name\" name=\"first-name\" type=\"text\" class=\"psr-form__field\" placeholder=\"\">\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(firstNameControl)\">\r\n                        What is your first name?\r\n                    </p>\r\n                </div>\r\n                <div class=\"w-1/2 px-3\">\r\n                    <label class=\"psr-form__label\" for=\"last-name\">Last name</label>\r\n                    <input formControlName=\"lastName\" [class.psr-form__field--error]=\"isInvalid(lastNameControl)\"\r\n                           id=\"last-name\" name=\"last-name\" type=\"text\" class=\"psr-form__field\" placeholder=\"\">\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(lastNameControl)\">\r\n                        What is your last name?\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"flex flex-wrap -mx-3\">\r\n                <div class=\"w-1/2 px-3\">\r\n                    <label for=\"country\" class=\"psr-form__label\">Country</label>\r\n                    <select formControlName=\"country\" [class.psr-form__field--error]=\"isInvalid(countryControl)\"\r\n                            id=\"country\" name=\"country\" class=\"psr-form__select\">\r\n                        <option value=\"\" selected> -- </option>\r\n                        <option [value]=\"country.id\" *ngFor=\"let country of countries\">{{ country.value }}</option>\r\n                    </select>\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(countryControl)\">\r\n                        What country do you reside in?\r\n                    </p>\r\n                </div>\r\n                <div class=\"w-1/2 px-3\">\r\n                    <label class=\"psr-form__label\" for=\"timezone\">Timezone</label>\r\n                    <input formControlName=\"timezone\" [class.psr-form__field--error]=\"isInvalid(timezoneControl)\"\r\n                           id=\"timezone\" name=\"timezone\" type=\"text\" class=\"psr-form__field\" placeholder=\"\">\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(timezoneControl)\">\r\n                        What is your time zone?\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"flex flex-wrap -mx-3\">\r\n                <div class=\"w-1/2 px-3\">\r\n                    <label class=\"psr-form__label\" for=\"core-hours\">Core hours</label>\r\n                    <input formControlName=\"coreHours\" [class.psr-form__field--error]=\"isInvalid(coreHoursControl)\"\r\n                           id=\"core-hours\" name=\"core-hours\" type=\"text\" class=\"psr-form__field\" placeholder=\"\">\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(coreHoursControl)\">\r\n                        What is your core work period? (8am - 4pm)\r\n                    </p>\r\n                </div>\r\n                <div class=\"w-1/2 px-3\">\r\n                    <label class=\"psr-form__label\" for=\"work-hours\">Work hours</label>\r\n                    <input formControlName=\"workHours\" [class.psr-form__field--error]=\"isInvalid(workHoursControl)\"\r\n                           id=\"work-hours\" name=\"work-hours\" type=\"text\" class=\"psr-form__field\" placeholder=\"\">\r\n                    <p class=\"psr-form__field-error-msg\" *ngIf=\"isInvalid(workHoursControl)\">\r\n                        What is your probably work period? (6am - 9pm)\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <button [disabled]=\"!formIsValid\" class=\"psr-form__button\" type=\"submit\">\r\n                    Register\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <p class=\"psr-form__footer\">Already have an Account? <a class=\"psr-form__alt-action\" (click)=\"gotoLogin()\">Log\r\n            in.</a></p>\r\n</div>\r\n", styles: [":host{@apply block min-h-full;@apply flex flex-col justify-center items-center;@apply h-screen px-4 py-12 overflow-y-auto;}:host:after{content:\"\";background-image:url(/assets/bg-login.jpg);background-repeat:no-repeat;background-size:cover;opacity:.2;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1}\n"], components: [{ type: i7.PasswordStrengthComponent, selector: "app-password-strength", inputs: ["password-control"] }], directives: [{ type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: RegisterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-register',
                    templateUrl: './register.component.html',
                    styleUrls: ['./register.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.AuthService }, { type: i2.FormBuilder }, { type: i3.AuthValidatorsService }, { type: i4.LookupService }, { type: i5.AlertService }, { type: i6.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }]; }, propDecorators: { passwordChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXV0aGxpYi9zcmMvbGliL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXV0aGxpYi9zcmMvbGliL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUF1QyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQTBDLE1BQU0sVUFBVSxDQUFDO0FBRXBGLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0FBVXBFLE1BQU0sT0FBTyxpQkFBaUI7SUFZMUIsWUFDWSxJQUFpQixFQUNqQixFQUFlLEVBQ2YsVUFBaUMsRUFDakMsYUFBNEIsRUFDNUIsS0FBbUIsRUFDbkIsTUFBYyxFQUNZLFNBQXFCO1FBTi9DLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGVBQVUsR0FBVixVQUFVLENBQXVCO1FBQ2pDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNZLGNBQVMsR0FBVCxTQUFTLENBQVk7UUFqQmpELG1CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHckUsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFDOUIsZ0JB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LENBQUM7WUFDbEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDdkMsRUFBRTtZQUNDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQztTQUNuRixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsU0FBUztRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsV0FBVztRQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzsrR0FwR1EsaUJBQWlCLDRMQW1CZCxnQkFBZ0I7bUdBbkJuQixpQkFBaUIsbUdDaEI5Qiw2dU9BK0dBOzRGRC9GYSxpQkFBaUI7a0JBTDdCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7b0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUMzQzs7MEJBb0JRLE1BQU07MkJBQUMsZ0JBQWdCOzRDQWpCbEIsY0FBYztzQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFQUF9DT05GSUdfVE9LRU4sIElBcHBDb25maWcsIElMb29rdXBJdGVtLCBMb29rdXBTZXJ2aWNlIH0gZnJvbSAnQGNvcmVsaWInO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICdAc2hhcmVkbGliJztcclxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBBdXRoVmFsaWRhdG9yc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLXZhbGlkYXRvcnMuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtcmVnaXN0ZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBPdXRwdXQoKSBwYXNzd29yZENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgICBwdWJsaWMgZm9ybSE6IEZvcm1Hcm91cDtcclxuICAgIHB1YmxpYyBjb3VudHJpZXM6IElMb29rdXBJdGVtW10gPSBbXTtcclxuICAgIHB1YmxpYyBmb3JtSXNWYWxpZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgZGVib3VuY2VyJDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcclxuICAgIHByaXZhdGUgcmVnaXN0ZXJTdWIhOiBTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIGZvcm1TdGF0dXNTdWIhOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIHZhbGlkYXRvcnM6IEF1dGhWYWxpZGF0b3JzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGxvb2t1cFNlcnZpY2U6IExvb2t1cFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhbGVydDogQWxlcnRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgQEluamVjdChBUFBfQ09ORklHX1RPS0VOKSBwcml2YXRlIGFwcENvbmZpZzogSUFwcENvbmZpZ1xyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb29rdXBTZXJ2aWNlLmdldENvdW50cmllcygpLnN1YnNjcmliZShyZXN1bHQgPT4gdGhpcy5jb3VudHJpZXMgPSByZXN1bHQpO1xyXG5cclxuICAgICAgICB0aGlzLmRlYm91bmNlciQucGlwZShcclxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDUwMCksXHJcbiAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcclxuICAgICAgICApLnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4gdGhpcy5wYXNzd29yZENoYW5nZS5lbWl0KHZhbHVlKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybVN0YXR1c1N1YiA9IHRoaXMuZm9ybS5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShmb3JtU3RhdHVzID0+IHtcclxuICAgICAgICAgICAgaWYgKGZvcm1TdGF0dXMgPT09IFwiSU5WQUxJRFwiIHx8IGZvcm1TdGF0dXMgPT09IFwiUEVORElOR1wiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtSXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1Jc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckVtcGxveWVlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlclN1YiA9IHRoaXMuYXV0aC5yZWdpc3Rlcih0aGlzLmZvcm0udmFsdWUpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8ocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0LnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWW91IGhhdmUgY29tcGxldGVkIHJlZ2lzdHJhdGlvbi4gUGxlYXNlIGxvZ2luLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnTG9naW4nLCByb3V0ZTogW3RoaXMuYXBwQ29uZmlnLm5hdmlnYXRpb25QYXRocy5Mb2dpbl0gfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25QYXNzd29yZENoYW5nZShlOiBFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xyXG4gICAgICAgIHRoaXMuZGVib3VuY2VyJC5uZXh0KCh0YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW52YWxpZChjb250cm9sOiBGb3JtQ29udHJvbCwgdmFsaWRhdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuICghdmFsaWRhdGlvbiAmJiBjb250cm9sLnRvdWNoZWQgJiYgY29udHJvbC5pbnZhbGlkKSB8fFxyXG4gICAgICAgICAgICAodmFsaWRhdGlvbiAmJiBjb250cm9sLnRvdWNoZWQgJiYgY29udHJvbC5oYXNFcnJvcih2YWxpZGF0aW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVtYWlsQ29udHJvbCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ2VtYWlsJykgYXMgRm9ybUNvbnRyb2w7IH1cclxuICAgIGdldCBwYXNzd29yZENvbnRyb2woKSB7IHJldHVybiB0aGlzLmZvcm0uZ2V0KCdwYXNzd29yZCcpIGFzIEZvcm1Db250cm9sOyB9XHJcbiAgICBnZXQgY29uZmlybVBhc3N3b3JkQ29udHJvbCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ2NvbmZpcm1QYXNzd29yZCcpIGFzIEZvcm1Db250cm9sOyB9XHJcbiAgICBnZXQgZmlyc3ROYW1lQ29udHJvbCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ2ZpcnN0TmFtZScpIGFzIEZvcm1Db250cm9sOyB9XHJcbiAgICBnZXQgbGFzdE5hbWVDb250cm9sKCkgeyByZXR1cm4gdGhpcy5mb3JtLmdldCgnbGFzdE5hbWUnKSBhcyBGb3JtQ29udHJvbDsgfVxyXG4gICAgZ2V0IGNvdW50cnlDb250cm9sKCkgeyByZXR1cm4gdGhpcy5mb3JtLmdldCgnY291bnRyeScpIGFzIEZvcm1Db250cm9sOyB9XHJcbiAgICBnZXQgdGltZXpvbmVDb250cm9sKCkgeyByZXR1cm4gdGhpcy5mb3JtLmdldCgndGltZXpvbmUnKSBhcyBGb3JtQ29udHJvbDsgfVxyXG4gICAgZ2V0IHdvcmtIb3Vyc0NvbnRyb2woKSB7IHJldHVybiB0aGlzLmZvcm0uZ2V0KCd3b3JrSG91cnMnKSBhcyBGb3JtQ29udHJvbDsgfVxyXG4gICAgZ2V0IGNvcmVIb3Vyc0NvbnRyb2woKSB7IHJldHVybiB0aGlzLmZvcm0uZ2V0KCdjb3JlSG91cnMnKSBhcyBGb3JtQ29udHJvbDsgfVxyXG5cclxuICAgIGNyZWF0ZUZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXSwgW3RoaXMudmFsaWRhdG9ycy5lbWFpbEF2YWlsYWJsZVZhbGlkYXRvcigpXV0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCB0aGlzLnZhbGlkYXRvcnMucGFzc3dvcmRQYXR0ZXJuVmFsaWRhdG9yKCldXSxcclxuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBjb3VudHJ5OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICB0aW1lem9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgd29ya0hvdXJzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBjb3JlSG91cnM6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcjogdGhpcy52YWxpZGF0b3JzLnBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IoJ3Bhc3N3b3JkJywgJ2NvbmZpcm1QYXNzd29yZCcpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ290b0xvZ2luKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmFwcENvbmZpZy5uYXZpZ2F0aW9uUGF0aHMuTG9naW5dKTtcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLmZvcm1TdGF0dXNTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInNtOm14LWF1dG8gc206dy1mdWxsIHNtOm1heC13LW1kXCI+XHJcbiAgICA8aDIgY2xhc3M9XCJwc3ItZm9ybV9faGVhZGVyXCI+UmVnaXN0ZXJcclxuICAgIDwvaDI+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwicHNyLWZvcm1fX2NvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBzci1mb3JtX19ncm91cFwiPlxyXG4gICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJyZWdpc3RlckVtcGxveWVlKClcIiBjbGFzcz1cInBzci1mb3JtX19mb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwc3ItZm9ybV9fbGFiZWxcIiBmb3I9XCJlbWFpbC1hZGRyZXNzXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIiBbY2xhc3MucHNyLWZvcm1fX2ZpZWxkLS1lcnJvcl09XCJpc0ludmFsaWQoZW1haWxDb250cm9sKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1hZGRyZXNzXCIgbmFtZT1cImVtYWlsLWFkZHJlc3NcIiB0eXBlPVwiZW1haWxcIiBjbGFzcz1cInBzci1mb3JtX19maWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJleGFtcGxlQGVtYWlsLmNvbVwiIGF1dG9jb21wbGV0ZT1cImVtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHNyLWZvcm1fX2ZpZWxkLWVycm9yLW1zZ1wiICpuZ0lmPVwiaXNJbnZhbGlkKGVtYWlsQ29udHJvbCwgJ3JlcXVpcmVkJylcIj5XaGF0IGlzIHlvdXIgZW1haWxcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzPzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHNyLWZvcm1fX2ZpZWxkLWVycm9yLW1zZ1wiICpuZ0lmPVwiaXNJbnZhbGlkKGVtYWlsQ29udHJvbCwgJ2VtYWlsTm90QXZhaWxhYmxlJylcIj5cclxuICAgICAgICAgICAgICAgICAgICBFbWFpbCBub3QgYXZhaWxhYmxlXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgLW14LTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvMiBweC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicHNyLWZvcm1fX2xhYmVsXCIgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCIgW2NsYXNzLnBzci1mb3JtX19maWVsZC0tZXJyb3JdPVwiaXNJbnZhbGlkKHBhc3N3b3JkQ29udHJvbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoaW5wdXQpPVwib25QYXNzd29yZENoYW5nZSgkZXZlbnQpXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHNyLWZvcm1fX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCJcIiBhdXRvY29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFwcC1wYXNzd29yZC1zdHJlbmd0aCBbcGFzc3dvcmQtY29udHJvbF09XCJwYXNzd29yZENvbnRyb2xcIj48L2FwcC1wYXNzd29yZC1zdHJlbmd0aD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBzci1mb3JtX19maWVsZC1lcnJvci1tc2dcIiAqbmdJZj1cImlzSW52YWxpZChwYXNzd29yZENvbnRyb2wpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudGVyIGEgY29tYmluYXRpb24gb2YgYXQgbGVhc3QgZWlnaHQgY2hhcmFjdGVyczsgbnVtYmVycywgdXBwZXJjYXNlLCBsb3dlcmNhc2UsIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdW5jdHVhdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvMiBweC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicHNyLWZvcm1fX2xhYmVsXCIgZm9yPVwiY29uZmlybS1wYXNzd29yZFwiPkNvbmZpcm0gcGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MucHNyLWZvcm1fX2ZpZWxkLS1lcnJvcl09XCJpc0ludmFsaWQoY29uZmlybVBhc3N3b3JkQ29udHJvbClcIiBpZD1cImNvbmZpcm0tcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybS1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwicHNyLWZvcm1fX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJuZXctcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBzci1mb3JtX19maWVsZC1lcnJvci1tc2dcIiAqbmdJZj1cImNvbmZpcm1QYXNzd29yZENvbnRyb2wuaGFzRXJyb3IoJ3Bhc3N3b3JkTWlzbWF0Y2gnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZHMgZG8gbm90IG1hdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHNyLWZvcm1fX2ZpZWxkLWVycm9yLW1zZ1wiICpuZ0lmPVwiaXNJbnZhbGlkKGNvbmZpcm1QYXNzd29yZENvbnRyb2wsICdyZXF1aXJlZCcpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm0geW91ciBwYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIC1teC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzIgcHgtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBzci1mb3JtX19sYWJlbFwiIGZvcj1cImZpcnN0LW5hbWVcIj5GaXJzdCBuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3ROYW1lXCIgW2NsYXNzLnBzci1mb3JtX19maWVsZC0tZXJyb3JdPVwiaXNJbnZhbGlkKGZpcnN0TmFtZUNvbnRyb2wpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXJzdC1uYW1lXCIgbmFtZT1cImZpcnN0LW5hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwicHNyLWZvcm1fX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBzci1mb3JtX19maWVsZC1lcnJvci1tc2dcIiAqbmdJZj1cImlzSW52YWxpZChmaXJzdE5hbWVDb250cm9sKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT9cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvMiBweC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicHNyLWZvcm1fX2xhYmVsXCIgZm9yPVwibGFzdC1uYW1lXCI+TGFzdCBuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwibGFzdE5hbWVcIiBbY2xhc3MucHNyLWZvcm1fX2ZpZWxkLS1lcnJvcl09XCJpc0ludmFsaWQobGFzdE5hbWVDb250cm9sKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdC1uYW1lXCIgbmFtZT1cImxhc3QtbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJwc3ItZm9ybV9fZmllbGRcIiBwbGFjZWhvbGRlcj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHNyLWZvcm1fX2ZpZWxkLWVycm9yLW1zZ1wiICpuZ0lmPVwiaXNJbnZhbGlkKGxhc3ROYW1lQ29udHJvbClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCBpcyB5b3VyIGxhc3QgbmFtZT9cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCAtbXgtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS8yIHB4LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY291bnRyeVwiIGNsYXNzPVwicHNyLWZvcm1fX2xhYmVsXCI+Q291bnRyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJjb3VudHJ5XCIgW2NsYXNzLnBzci1mb3JtX19maWVsZC0tZXJyb3JdPVwiaXNJbnZhbGlkKGNvdW50cnlDb250cm9sKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvdW50cnlcIiBuYW1lPVwiY291bnRyeVwiIGNsYXNzPVwicHNyLWZvcm1fX3NlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ+IC0tIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIFt2YWx1ZV09XCJjb3VudHJ5LmlkXCIgKm5nRm9yPVwibGV0IGNvdW50cnkgb2YgY291bnRyaWVzXCI+e3sgY291bnRyeS52YWx1ZSB9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHNyLWZvcm1fX2ZpZWxkLWVycm9yLW1zZ1wiICpuZ0lmPVwiaXNJbnZhbGlkKGNvdW50cnlDb250cm9sKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXaGF0IGNvdW50cnkgZG8geW91IHJlc2lkZSBpbj9cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvMiBweC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicHNyLWZvcm1fX2xhYmVsXCIgZm9yPVwidGltZXpvbmVcIj5UaW1lem9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInRpbWV6b25lXCIgW2NsYXNzLnBzci1mb3JtX19maWVsZC0tZXJyb3JdPVwiaXNJbnZhbGlkKHRpbWV6b25lQ29udHJvbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRpbWV6b25lXCIgbmFtZT1cInRpbWV6b25lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cInBzci1mb3JtX19maWVsZFwiIHBsYWNlaG9sZGVyPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwc3ItZm9ybV9fZmllbGQtZXJyb3ItbXNnXCIgKm5nSWY9XCJpc0ludmFsaWQodGltZXpvbmVDb250cm9sKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXaGF0IGlzIHlvdXIgdGltZSB6b25lP1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIC1teC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzIgcHgtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBzci1mb3JtX19sYWJlbFwiIGZvcj1cImNvcmUtaG91cnNcIj5Db3JlIGhvdXJzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiY29yZUhvdXJzXCIgW2NsYXNzLnBzci1mb3JtX19maWVsZC0tZXJyb3JdPVwiaXNJbnZhbGlkKGNvcmVIb3Vyc0NvbnRyb2wpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb3JlLWhvdXJzXCIgbmFtZT1cImNvcmUtaG91cnNcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwicHNyLWZvcm1fX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBzci1mb3JtX19maWVsZC1lcnJvci1tc2dcIiAqbmdJZj1cImlzSW52YWxpZChjb3JlSG91cnNDb250cm9sKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXaGF0IGlzIHlvdXIgY29yZSB3b3JrIHBlcmlvZD8gKDhhbSAtIDRwbSlcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvMiBweC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicHNyLWZvcm1fX2xhYmVsXCIgZm9yPVwid29yay1ob3Vyc1wiPldvcmsgaG91cnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ3b3JrSG91cnNcIiBbY2xhc3MucHNyLWZvcm1fX2ZpZWxkLS1lcnJvcl09XCJpc0ludmFsaWQod29ya0hvdXJzQ29udHJvbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIndvcmstaG91cnNcIiBuYW1lPVwid29yay1ob3Vyc1wiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJwc3ItZm9ybV9fZmllbGRcIiBwbGFjZWhvbGRlcj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHNyLWZvcm1fX2ZpZWxkLWVycm9yLW1zZ1wiICpuZ0lmPVwiaXNJbnZhbGlkKHdvcmtIb3Vyc0NvbnRyb2wpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdoYXQgaXMgeW91ciBwcm9iYWJseSB3b3JrIHBlcmlvZD8gKDZhbSAtIDlwbSlcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhZm9ybUlzVmFsaWRcIiBjbGFzcz1cInBzci1mb3JtX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwIGNsYXNzPVwicHNyLWZvcm1fX2Zvb3RlclwiPkFscmVhZHkgaGF2ZSBhbiBBY2NvdW50PyA8YSBjbGFzcz1cInBzci1mb3JtX19hbHQtYWN0aW9uXCIgKGNsaWNrKT1cImdvdG9Mb2dpbigpXCI+TG9nXHJcbiAgICAgICAgICAgIGluLjwvYT48L3A+XHJcbjwvZGl2PlxyXG4iXX0=