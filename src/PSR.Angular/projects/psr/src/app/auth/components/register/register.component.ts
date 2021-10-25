import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ILookupItem } from '../../../core/app.interfaces';
import { LookupService } from '../../../services/lookup.service';
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

    private debouncer$: Subject<string> = new Subject();

    formIsValid: boolean = false;

    constructor(
        private auth: AuthService,
        private fb: FormBuilder,
        private validators: AuthValidatorsService,
        private lookupService: LookupService
    ) { }

    ngOnInit(): void {
        this.createForm();

        this.lookupService.getCountries().subscribe(result => this.countries = result);

        this.debouncer$.pipe(
            debounceTime(500),
            distinctUntilChanged()
        ).subscribe((value: string) => this.passwordChange.emit(value));

        this.form.statusChanges.subscribe(formStatus => {
            if (formStatus === "INVALID" || formStatus === "PENDING")
                this.formIsValid = false;
            else
                this.formIsValid = true;
        });
    }

    registerEmployee(f: any) {
        console.log(f);
        if (this.form.valid) {

        } else {
            this.form.markAllAsTouched();
        }

        /* var payload = {
            email: "john@email.com",
            password: "J0h1n.Pass",
            firstName: "John",
            lastName: "Doe",
            timeZone: "+2",
            workHours: "8am-4pm",
            coreHours: "",
            country: "xxcc"
        }; */

        this.auth.register(this.form.value).subscribe(response => {
            console.info(response);
        });


        /* if (this.form.valid) {
            this.userService.create({
                email: this.email.value,
                password: this.password.value,
                username: this.username.value
            }).pipe(
                tap(() => this.router.navigate(['../login']))
            ).subscribe();
        } */

        // console.log('formValues', this.form.value);
    }

    onPasswordChange(e: Event) {
        const { target } = e;
        // (target as HTMLInputElement).value
        this.debouncer$.next('kdkfdk');
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

    ngOnDestroy() {

    }

}
