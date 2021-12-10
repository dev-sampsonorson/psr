import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISkill, ISkillCategory, ISkillSubCategory, SkillsService } from '@psr/skill/data-access';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, filter, startWith, switchMap } from 'rxjs/operators';

import { SkillFormService } from '../../services/skill-form.service';

@Component({
    selector: 'psr-skl-form',
    templateUrl: './skill-form.component.html',
    styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent implements OnInit, OnDestroy {

    public form: FormGroup | undefined;
    public formIsValid: boolean = false;
    public isSubcategoryDisabled: boolean = true;

    private _categoryValueChangeSub: Subscription | undefined;
    private _formStatusChangeSub: Subscription | undefined;
    private _resetForm$: Observable<void>;

    private _routeDataSub: Subscription | undefined;
    private _skill: ISkill | undefined;

    @Input() categories: ISkillCategory[] = [];
    @Input() subcategories?: ISkillSubCategory[] = [];
    @Input() buttonLabel: string = 'Save';

    // ngOnInit is called before set skill
    @Input() set skill(skill: ISkill | undefined) {
        this._skill = skill;
        this.initForm(this._skill);
    }

    @Output() commitSkill = new EventEmitter<ISkill>();

    get nameControl() { return this.form?.get('name') as FormControl; }
    get categoryControl() { return this.form?.get('categoryId') as FormControl; }
    get subcategoryControl() { return this.form?.get('subcategoryId') as FormControl; }

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private skillService: SkillsService,
        private skillFormService: SkillFormService
    ) {
        this._resetForm$ = this.skillFormService.resetForm$;
    }

    ngOnInit(): void {
        this.initForm(this._skill);
        // this.listenCategoryValueChange();
        this.listenFormStatusChange();
        this.listenFormReset();
    }

    initForm(skill: ISkill | undefined): void {
        if (!this.form) {
            this.form = this.fb.group({
                name: [skill?.name || '', [Validators.required, Validators.minLength(3)]],
                // categoryId: [skill?.categoryId || '', [Validators.required]],
                // subcategoryId: [skill?.subcategoryId || '', [Validators.required]],
            });
            return;
        }

        // console.log('initForm', skill);
        this.form.setValue({
            name: skill?.name || '',
            // categoryId: skill?.categoryId || '',
            // subcategoryId: skill?.subcategoryId || '',
        });

        // this.categoryControl.disable();
        // this.subcategoryControl.disable();
    }

    onCommitSkill(): void {
        if (this.formIsValid && this.form?.valid) {
            this.commitSkill.emit(
                this._skill?.id
                    ? { ...this.form.value, categoryId: this._skill?.categoryId, subcategoryId: this._skill?.subcategoryId, id: this._skill.id }
                    : { ...this.form.value, categoryId: this._skill?.categoryId, subcategoryId: this._skill?.subcategoryId }
            );

            // this.commitSkill.emit(this.form.value);
        } else {
            this.form?.markAllAsTouched();
        }
    }

    listenCategoryValueChange(): void {
        this._categoryValueChangeSub = this.categoryControl.valueChanges
            .pipe(
                startWith(this._skill?.categoryId),
                filter(categoryId => !!categoryId),
                switchMap(categoryId => this.skillService.getSubCategories(categoryId))
            )
            .subscribe(subCategories => {
                this.subcategories = subCategories;
                this.subcategoryControl.patchValue(this._skill?.subcategoryId || '');
                // this.isSubcategoryDisabled = false;
                // this.subcategoryControl.enable();
            });
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
    }

    listenFormReset(): void {
        this._resetForm$.subscribe(() => {
            this.form?.reset();
        });
    }

    onCategoryChange(e: any): void {
        // this.isSubcategoryDisabled = true;
        this.subcategoryControl.disable();
    }

    onCloseClick() {
        this.router.navigate(['/skills', { outlets: { details: null } }]);
    }

    ngOnDestroy(): void {
        this._categoryValueChangeSub?.unsubscribe();
        this._formStatusChangeSub?.unsubscribe();
        this._routeDataSub?.unsubscribe();
    }

}
