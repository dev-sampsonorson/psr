import { AsyncValidatorFn, FormGroup, ValidatorFn } from '@angular/forms';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
export declare class AuthValidatorsService {
    private auth;
    constructor(auth: AuthService);
    passwordMatchValidator(password: string, confirmPassword: string): (formGroup: FormGroup) => true | null;
    passwordPatternValidator(): ValidatorFn;
    emailAvailableValidator(): AsyncValidatorFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthValidatorsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthValidatorsService>;
}
