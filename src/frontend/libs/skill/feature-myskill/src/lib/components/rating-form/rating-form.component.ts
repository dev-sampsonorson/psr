import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'psr-skl-rating-form',
    templateUrl: './rating-form.component.html',
    styleUrls: ['./rating-form.component.scss']
})
export class RatingFormComponent implements OnInit, OnDestroy {

    public form: FormGroup | undefined;
    public formIsValid = false;

    private _formStatusChangeSub: Subscription | undefined;

    @Input() minRating = 0;
    @Input() maxRating = 5;

    @Output() saveRating = new EventEmitter<number>();

    get ratingControl() { return this.form?.get('rating') as FormControl; }

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.listenFormStatusChange();
    }

    initForm(): void {
        if (!this.form) {
            this.form = this.fb.group({
                rating: [this.minRating, [Validators.required, Validators.min(this.minRating), Validators.max(this.maxRating)]],
            });
            return;
        }
    }

    listenFormStatusChange(): void {
        this._formStatusChangeSub = this.form?.statusChanges
            .pipe(
                /**
                 * The Debouncetime emits the last received value
                 * from the source observable after a specified amount
                 * of time has elapsed without any other value appearing
                 * on the source Observable
                 */
                debounceTime(100)
            )
            .subscribe(formStatus => {
                if (formStatus === "INVALID" || formStatus === "PENDING")
                    this.formIsValid = false;
                else
                    this.formIsValid = true;
            });
        this.form?.updateValueAndValidity();
    }

    onSaveRating(): void {
        if (this.formIsValid && this.form?.valid) {
            this.saveRating.emit(this.form.value?.rating || 0);
        } else {
            this.form?.markAllAsTouched();
        }
    }

    ngOnDestroy(): void {
        this._formStatusChangeSub?.unsubscribe();
    }

}
