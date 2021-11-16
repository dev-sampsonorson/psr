import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';

import { SkillsService } from '../../services/skills.service';
import { ISkillCategory, ISkillSubCategory } from '../../skill.model';

@Component({
    selector: 'app-skill-add',
    templateUrl: './skill-add.component.html',
    styleUrls: ['./skill-add.component.scss']
})
export class SkillAddComponent implements OnInit, OnDestroy {

    title: string = 'Add New Skill';
    description: string = 'Provide details about the skill.';

    public form: FormGroup | undefined;
    public categories: ISkillCategory[] = [];
    public subCategories: ISkillSubCategory[] = [];
    public formIsValid: boolean = false;
    public isSubcategoryDisabled: boolean = true;

    private _categoryValueChangeSub: Subscription | undefined;
    private _formStatusChangeSub: Subscription | undefined;

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
        this.route.data.subscribe(({ categories }) => {
            this.categories = categories;
        });

        this.createForm();
        this.listenCategoryValueChange();
        this.listenFormStatusChange();
    }

    addSkill(): void {
        if (this.formIsValid && this.form?.valid) {

        } else {
            this.form?.markAllAsTouched();
        }

    }

    createForm(): void {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            category: ['', [Validators.required]],
            subCategory: ['', [Validators.required]],
        });
    }

    listenCategoryValueChange(): void {
        this._categoryValueChangeSub = this.categoryControl.valueChanges
            .pipe(
                filter(categoryId => !!categoryId),
                switchMap(categoryId => this.skillService.getSubCategories(categoryId))
            )
            .subscribe(subCategories => {
                this.subCategories = subCategories;
                this.subCategoryContorl.patchValue('');
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

    onCategoryChange(): void {
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
