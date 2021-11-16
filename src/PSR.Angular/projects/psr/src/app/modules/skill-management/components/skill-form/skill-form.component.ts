import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, filter, startWith, switchMap } from 'rxjs/operators';

import { SkillsService } from '../../services/skills.service';
import { ISkill, ISkillCategory, ISkillSubCategory } from '../../skill.model';

@Component({
    selector: 'app-skill-form',
    templateUrl: './skill-form.component.html',
    styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent implements OnInit, OnDestroy {

    public form: FormGroup | undefined;
    public formIsValid: boolean = false;
    public isSubcategoryDisabled: boolean = true;

    private _categoryValueChangeSub: Subscription | undefined;
    private _formStatusChangeSub: Subscription | undefined;

    @Input() skill: ISkill | undefined;
    @Input() categories: ISkillCategory[] = [];
    @Input() subcategories: ISkillSubCategory[] = [];

    get nameControl() { return this.form?.get('name') as FormControl; }
    get categoryControl() { return this.form?.get('category') as FormControl; }
    get subCategoryContorl() { return this.form?.get('subCategory') as FormControl; }

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private skillService: SkillsService
    ) { }

    ngOnInit(): void {
        this.createForm(this.skill);
        this.listenCategoryValueChange();
        this.listenFormStatusChange();
    }

    createForm(skill: ISkill | undefined): void {
        this.form = this.fb.group({
            name: [skill?.name || '', [Validators.required, Validators.minLength(3)]],
            category: [skill?.categoryId || '', [Validators.required]],
            subCategory: [skill?.subCategoryId || '', [Validators.required]],
        });
        // this.listenCategoryValueChange();
        /* console.log('updateValueAndValidity');
        this.categoryControl.updateValueAndValidity({
            onlySelf: true,
            emitEvent: true
        }); */
    }

    updateSkill(): void {
        if (this.formIsValid && this.form?.valid) {

        } else {
            this.form?.markAllAsTouched();
        }
    }

    listenCategoryValueChange(): void {
        this._categoryValueChangeSub = this.categoryControl.valueChanges
            .pipe(
                startWith(this.skill?.categoryId),
                filter(categoryId => !!categoryId),
                switchMap(categoryId => this.skillService.getSubCategories(categoryId))
            )
            .subscribe(subCategories => {
                this.subcategories = subCategories;
                this.subCategoryContorl.patchValue(this.skill?.subCategoryId || '');
                this.isSubcategoryDisabled = false;
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

    onCategoryChange(e: any): void {
        console.log('onCategoryChange', e);
        this.isSubcategoryDisabled = true;
    }

    onCloseClick() {
        this.router.navigate(['/skills', { outlets: { details: null } }]);
    }

    ngOnDestroy(): void {
        this._categoryValueChangeSub?.unsubscribe();
        this._formStatusChangeSub?.unsubscribe();
    }

}
