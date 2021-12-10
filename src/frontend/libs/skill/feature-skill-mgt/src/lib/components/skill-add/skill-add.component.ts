import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@psr/shared/ui';
import { ISkill, ISkillCategory, ISkillSubCategory } from '@psr/skill/data-access';
import { SkillFormService } from '@psr/skill/shared';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { SkillMgtService } from '../../services';

@Component({
    selector: 'psr-skl-add',
    templateUrl: './skill-add.component.html',
    styleUrls: ['./skill-add.component.scss']
})
export class SkillAddComponent implements OnInit, OnDestroy {

    public title: string = 'Add New Skill';
    public description: string = 'Provide details about the skill.';
    public buttonLabel: string = 'Add skill';
    public form: FormGroup | undefined;
    public skill: ISkill | undefined;
    public categories: ISkillCategory[] = [];
    public subCategories: ISkillSubCategory[] = [];
    public formIsValid: boolean = false;
    public isSubcategoryDisabled: boolean = true;

    private _categoryValueChangeSub: Subscription | undefined;
    private _formStatusChangeSub: Subscription | undefined;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private skillService: SkillMgtService,
        private skillFormService: SkillFormService,
        private alert: AlertService

    ) {
    }

    ngOnInit(): void {
        // get the categories ids
        // get the skill
        // update the skill with category and subcategory
        // emit new object with categories and skill using map

        this.route.params.pipe(
            switchMap(({ categoryId, subcategoryId }) => {
                return this.route.data.pipe(
                    map(({ categories, skill }) => {
                        // skill.categoryId = categoryId;
                        // skill.subcategoryId = subcategoryId;

                        return {
                            categories,
                            skill: { ...skill, categoryId, subcategoryId }
                        };
                    })
                )
            })
        ).subscribe(({ categories, skill }) => {
            this.categories = categories;
            this.skill = skill;
        });
    }
    onSaveSkill(skill: ISkill) {
        this.skillService.addSkill(skill).subscribe({
            next: (response: ISkill) => {
                // tell the list component that skill has been added
                this.skillService.notifySkillSave(response);
                this.skillFormService.resetForm();
                this.alert.success(
                    'Successful',
                    'Skill has been added successfully'
                );
            },
            error: (error: any) => {
                this.alert.error(
                    'Save Failed',
                    'Unable to add new skill'
                );
            }
        });
    }

    onCloseClick() {
        this.router.navigate(['/skills', { outlets: { details: null } }]);
    }

    ngOnDestroy(): void {
        this._categoryValueChangeSub?.unsubscribe();
        this._formStatusChangeSub?.unsubscribe();
    }
}
