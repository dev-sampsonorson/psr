import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillFormService } from '@modules/skill-management/services/skill-form.service';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ISkill, ISkillCategory, ISkillSubCategory } from '../../models/skill.model';
import { SkillsService } from '../../services/skills.service';

@Component({
    selector: 'app-skill-add',
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
        private skillService: SkillsService,
        private skillFormService: SkillFormService
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
        this.skillService.addSkill(skill).subscribe((response: ISkill) => {
            // tell the list component that skill has been added
            this.skillService.notifySkillSave(response);
            this.skillFormService.resetForm();
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
