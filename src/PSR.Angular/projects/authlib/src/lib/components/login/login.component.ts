import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APP_CONFIG_TOKEN, IAppConfig } from '@corelib';
import { AlertService } from '@sharedlib';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { AuthService, AuthValidatorsService } from '../../services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    public form!: FormGroup;
    public formIsValid: boolean = false;

    private loginSub!: Subscription;
    private formStatusSub!: Subscription;

    constructor(
        private auth: AuthService,
        private fb: FormBuilder,
        private validators: AuthValidatorsService,
        private alert: AlertService,
        private router: Router,
        @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig
    ) { }

    ngOnInit(): void {
        this.createForm();

        this.formStatusSub = this.form.statusChanges
            .pipe(
                /**
                 * The Debouncetime emits the last received value
                 * from the source observable after a specified amount
                 * of time has elapsed without any other value appearing
                 * on the source Observable
                 */
                debounceTime(100)
            ).subscribe(formStatus => {
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
                this.alert.success(
                    "Login successful",
                    "Welcome to the Personal Skill Rating app. Please rate yourself."
                );
                this.router.navigate([this.appConfig.navigationPaths.Home]);
            });
        } else {
            this.form.markAllAsTouched();
        }
    }

    isInvalid(control: FormControl, validation: string | undefined = undefined) {
        return (!validation && control.touched && control.invalid) ||
            (validation && control.touched && control.hasError(validation));
    }

    get emailControl() { return this.form.get('email') as FormControl; }
    get passwordControl() { return this.form.get('password') as FormControl; }

    createForm() {
        this.form = this.fb.group({
            email: ['john@email.com', [Validators.required, Validators.email]],
            password: ['J0h1n.Pass', [Validators.required, this.validators.passwordPatternValidator()]]
        });
    }

    gotoRegister(): void {
        this.router.navigate([this.appConfig.navigationPaths.Register]);
    }

    ngOnDestroy(): void {
        this.loginSub.unsubscribe();
        this.formStatusSub.unsubscribe();
    }
}
