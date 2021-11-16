import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkillsService } from '@modules/skill-management/services/skills.service';
import { ISkill, ISkillCategory, ISkillSubCategory } from '@modules/skill-management/skill.model';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-skill-edit',
    templateUrl: './skill-edit.component.html',
    styleUrls: ['./skill-edit.component.scss']
})
export class SkillEditComponent implements OnInit, OnDestroy {

    skill: ISkill | undefined;
    categories: ISkillCategory[] = [];
    subcategories: ISkillSubCategory[] = [];

    private _routeDataSub: Subscription | undefined;

    constructor(
        private route: ActivatedRoute,
        private skillService: SkillsService
    ) { }

    ngOnInit(): void {
        this.route.data.pipe(
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
            console.log('skill', skill);
            console.log('categories', categories);
            console.log('subcategories', subcategories);
            this.categories = categories;
            this.subcategories = [];
            this.skill = skill;
        });
    }

    ngOnDestroy(): void {
        this._routeDataSub?.unsubscribe();
    }

}
