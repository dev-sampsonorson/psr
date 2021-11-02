import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, first, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthValidatorsService {

    constructor(private auth: AuthService) { }

    passwordMatchValidator(password: string, confirmPassword: string) {
        return (formGroup: FormGroup) => {
            const passwordControl = formGroup.controls[password];
            const confirmPasswordControl = formGroup.controls[confirmPassword];

            if (!passwordControl || !confirmPasswordControl) {
                return null;
            }

            if (
                confirmPasswordControl.errors &&
                !confirmPasswordControl.errors.passwordMismatch
            ) {
                return null;
            }

            if (passwordControl.value !== confirmPasswordControl.value) {
                confirmPasswordControl.setErrors({ passwordMismatch: true });
                return true;
            } else {
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
    passwordPatternValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.value)
                return null;

            const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])(?=.{8,})');
            const valid = regex.test(control.value);
            return valid ? null : { passwordInvalid: true };
        };
    }

    emailAvailableValidator(): AsyncValidatorFn {
        const subject = new BehaviorSubject<string>('');
        const debouncedInput$ = subject.asObservable().pipe(
            distinctUntilChanged(),
            debounceTime(1000),
            switchMap(value => this.auth.checkEmailExists(value)),
            map((result: any, index: number) => {
                return result.value === 'invalid' ? { emailNotAvailable: true } : null;
            })
        ).pipe(first());

        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            if (!control.value)
                return of(null);

            subject.next(control.value);
            return debouncedInput$;
        };
    }
}
