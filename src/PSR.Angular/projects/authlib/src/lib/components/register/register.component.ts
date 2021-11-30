import { Component, EventEmitter, Inject, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APP_CONFIG_TOKEN, IAppConfig, ILookupItem, LookupService } from '@corelib';
import { AlertService } from '@sharedlib';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { AuthValidatorsService } from '../../services/auth-validators.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

    @Output() passwordChange: EventEmitter<string> = new EventEmitter<string>();

    public form!: FormGroup;
    public countries: ILookupItem[] = [];
    public formIsValid: boolean = false;

    private debouncer$: Subject<string> = new Subject();
    private registerSub!: Subscription;
    private formStatusSub!: Subscription;

    constructor(
        private auth: AuthService,
        private fb: FormBuilder,
        private validators: AuthValidatorsService,
        private lookupService: LookupService,
        private alert: AlertService,
        private router: Router,
        @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig
    ) { }

    ngOnInit(): void {
        this.createForm();

        this.lookupService.getCountries().subscribe(result => this.countries = result);

        this.debouncer$.pipe(
            debounceTime(500),
            distinctUntilChanged()
        ).subscribe((value: string) => this.passwordChange.emit(value));

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
                this.alert.success(
                    "Registration successful",
                    "You have completed registration. Please login.",
                    [
                        { name: 'Login', route: [this.appConfig.navigationPaths.Login] }
                    ]
                )
            });
        } else {
            this.form.markAllAsTouched();
        }
    }

    onPasswordChange(e: Event) {
        const { target } = e;
        this.debouncer$.next((target as HTMLInputElement).value);
    }

    isInvalid(control: FormControl, validation: string | undefined = undefined) {
        return (!validation && control.touched && control.invalid) ||
            (validation && control.touched && control.hasError(validation));
    }

    get emailControl() { return this.form.get('email') as FormControl; }
    get passwordControl() { return this.form.get('password') as FormControl; }
    get confirmPasswordControl() { return this.form.get('confirmPassword') as FormControl; }
    get firstNameControl() { return this.form.get('firstName') as FormControl; }
    get lastNameControl() { return this.form.get('lastName') as FormControl; }
    get countryControl() { return this.form.get('country') as FormControl; }
    get timezoneControl() { return this.form.get('timezone') as FormControl; }
    get workHoursControl() { return this.form.get('workHours') as FormControl; }
    get coreHoursControl() { return this.form.get('coreHours') as FormControl; }

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
    ngOnDestroy(): void {
        this.registerSub.unsubscribe();
        this.formStatusSub.unsubscribe();
    }

}