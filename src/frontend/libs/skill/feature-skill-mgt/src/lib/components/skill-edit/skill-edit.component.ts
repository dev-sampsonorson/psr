import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@psr/shared/ui';
import { ISkill, ISkillCategory, ISkillSubCategory, SkillsService } from '@psr/skill/data-access';
import { SkillFormService } from '@psr/skill/shared';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { SkillMgtService } from '../../services';

@Component({
    selector: 'psr-skl-edit',
    templateUrl: './skill-edit.component.html',
    styleUrls: ['./skill-edit.component.scss']
})
export class SkillEditComponent implements OnInit, OnDestroy {

    public title: string = 'Edit Skill';
    public description: string = 'Update details about the skill.';
    public buttonLabel: string = 'Update skill';
    public skill: ISkill | undefined;
    public categories: ISkillCategory[] = [];
    public subcategories: ISkillSubCategory[] = [];

    private _routeDataSub: Subscription | undefined;

    get isFormVisible() {
        return this.skill?.id !== undefined;
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private skillService: SkillsService,
        private skillMgtService: SkillMgtService,
        private skillFormService: SkillFormService,
        private alert: AlertService
    ) { }

    ngOnInit(): void {

        /* this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            tap(x => console.log('router.event => ', x))
        ).subscribe(); */

        this._routeDataSub = this.route.data.pipe(
            // tap(x => console.log('route.data => ', x)),
            switchMap(({ categories, skill }) => {
                return this.skillService.getSubCategories(skill.categoryId).pipe(
                    map(subcategories => {
                        return {
                            categories,
                            subcategories,
                            skill
                        }
                    })
                );
            })
        ).subscribe(({ categories, skill, subcategories }) => {
            this.categories = categories;
            this.subcategories = subcategories;
            this.skill = skill;
            // console.log('this.skill', this.skill);
        });
    }

    onUpdateSkill(skill: ISkill) {
        this.skillMgtService.updateSkill(skill).subscribe({
            next: (response: ISkill) => {
                // tell the list component that skill has been added
                this.skillMgtService.notifySkillUpdate(response);
                this.skillFormService.resetForm();
                this.alert.success(
                    'Successful',
                    'Skill has been updated successfully'
                );
            },
            error: (error: any) => {
                this.alert.error(
                    'Update Failed',
                    'Unable to update new skill'
                );
            }
        });
    }

    onCloseClick(): void {
        this.router.navigate(['/skills', { outlets: { details: null } }]);
    }

    ngOnDestroy(): void {
        this._routeDataSub?.unsubscribe();
    }

}
