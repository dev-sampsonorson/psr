import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsService } from '@modules/skill-management/services/skills.service';
import { Observable } from 'rxjs';

import { ISkill } from '../../models/skill.model';
import { PageTitleService } from '../../services/page-title.service';
import { SkillMgtRoutes } from '../../skill-mgt-constants';
import { ISkillCard } from '../skill-card/skill-card.model';

@Component({
    selector: 'app-skill-list',
    templateUrl: './skill-list.component.html',
    styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

    private _selectedCategoryId: string = '';
    private _selectedSubcategoryId: string = '';

    public skills: ISkill[] = [];

    public emptyStateTitle: string;
    public emptyStateDescription: string;
    public emptyStateButtonLabel: string;

    private _skillSave$: Observable<ISkill>;
    private _skillUpdate$: Observable<ISkill>;

    get isSkillsVisible() {
        return this.skills.length > 0;
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pageTitle: PageTitleService,
        private skillService: SkillsService
    ) {
        this._skillSave$ = this.skillService.onSkillSave$;
        this._skillUpdate$ = this.skillService.onSkillUpdate$;

        this.pageTitle.updatePageTitle("Skills");
        this.pageTitle.updatePageSubTitle("View list of skill, see skill details, and add new skill.");

        this.emptyStateTitle = 'No skills';
        this.emptyStateDescription = 'Get started by adding skills to this sub category';
        this.emptyStateButtonLabel = 'Add New Skill';
    }

    ngOnInit(): void {
        this.route.params.subscribe(({ categoryId, subcategoryId }) => {
            this._selectedCategoryId = categoryId;
            this._selectedSubcategoryId = subcategoryId;
        });

        this.route.data.subscribe(({ skills }) => {
            this.skills = skills; //.slice(0, 1);
        });

        this._skillSave$.subscribe((skill: ISkill) => {
            this.skills.push(skill);
        });

        this._skillUpdate$.subscribe((skill: ISkill) => {
            this.skills = this.skills.map((item: ISkill) => {
                return (item.id === skill.id) ? { ...skill } : item;
            });
        });
    }

    addSkillCardClickHandler(): void {
        this.router.navigate(SkillMgtRoutes.AddSkill(this._selectedCategoryId, this._selectedSubcategoryId));
    }

    onCardItemEvent(e: { skillId: string, menuName: string, card: ISkillCard }): void {
        if (this.menuItemIsDelete(e.menuName)) {
            e.card.blockCard = true;
            if (confirm('Are you sure you want to delete this skill?')) {
                // console.log('delete skill');
                /* setTimeout(() => {
                }, 2000); */

                this.skillService.deleteSkill(e.skillId).subscribe((response) => {
                    e.card.blockCard = false;
                    // remove card from dom (destroy);
                });
            }
        }
    }

    private menuItemIsDelete(menuName: string): boolean {
        return menuName === 'skill-delete';
    }


    /* skillCardClickHandler(skill: ISkill): void {
        this.router.navigate(SkillMgtRoutes.ReadSkill(skill.id));
    } */

}
