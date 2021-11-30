import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IAppConfig } from '@corelib';
import { AlertService } from '@sharedlib';
import { AuthService, AuthValidatorsService } from '../../services';
import * as i0 from "@angular/core";
export declare class LoginComponent implements OnInit, OnDestroy {
    private auth;
    private fb;
    private validators;
    private alert;
    private router;
    private appConfig;
    form: FormGroup;
    formIsValid: boolean;
    private loginSub;
    private formStatusSub;
    constructor(auth: AuthService, fb: FormBuilder, validators: AuthValidatorsService, alert: AlertService, router: Router, appConfig: IAppConfig);
    ngOnInit(): void;
    loginEmployee(): void;
    isInvalid(control: FormControl, validation?: string | undefined): boolean | "" | undefined;
    get emailControl(): FormControl;
    get passwordControl(): FormControl;
    createForm(): void;
    gotoRegister(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "app-login", never, {}, {}, never, never>;
}