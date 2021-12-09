import { Component, Inject, NgZone, OnDestroy, OnInit, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, MenuItem } from '@psr/shared/ui';
import {
    AddSkillCardComponent,
    ISkill,
    ISkillCard,
    SkillCardComponent,
    SkillCardContextMenuitemService,
} from '@psr/skill/shared';
import { Observable, Subscription } from 'rxjs';

import { SkillMgtService } from '../../services';
import { PageTitleService } from '../../services/page-title.service';
import { SkillMgtRoutes } from '../../skill-mgt-constants';
import { SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN } from '../../tokens';

@Component({
    selector: 'app-skill-list',
    templateUrl: './skill-list.component.html',
    styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit, OnDestroy {

    private _selectedCategoryId: string = '';
    private _selectedSubcategoryId: string = '';

    public skills: ISkill[] = [];
    public isAddSkillCardVisible: boolean = true;
    public emptyStateTitle: string;
    public emptyStateDescription: string;
    public emptyStateButtonLabel: string;
    public selectedCategoryName: string | undefined;
    public selectedSubcategoryName: string | undefined;
    public skillAddCardType: Type<ISkillCard> = AddSkillCardComponent;
    public skillCardType: Type<ISkillCard> = SkillCardComponent;

    private _skillSave$: Observable<ISkill>;
    private _skillUpdate$: Observable<ISkill>;
    private _eventStart$: Observable<{ skillId: string, menuName: string }>;

    private _eventStartSub: Subscription | undefined;

    get isSkillsVisible() {
        return this.skills.length > 0;
    }

    get isCategoryDetailsVisible() {
        return this.selectedCategoryName !== undefined
            && this.selectedSubcategoryName !== undefined;
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pageTitle: PageTitleService,
        private skillService: SkillMgtService,
        private alert: AlertService,
        private zone: NgZone,
        @Inject(SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN) public menuItems: MenuItem<any>[],
        private ctxMenuItem: SkillCardContextMenuitemService
    ) {
        this._skillSave$ = this.skillService.onSkillSave$;
        this._skillUpdate$ = this.skillService.onSkillUpdate$;
        this._eventStart$ = this.ctxMenuItem.onEventStart$;

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

        this.route.data.subscribe(({ skills, selectedCategory, selectedSubcategory }) => {
            this.skills = skills; //.slice(0, 1);
            this.selectedCategoryName = selectedCategory?.name;
            this.selectedSubcategoryName = selectedSubcategory?.name;
        });

        this._skillSave$.subscribe((skill: ISkill) => {
            this.skills.push(skill);
        });

        this._skillUpdate$.subscribe((skill: ISkill) => {
            this.skills = this.skills.map((item: ISkill) => {
                return (item.id === skill.id) ? { ...skill } : item;
            });
        });

        this._eventStartSub = this._eventStart$.subscribe(({ skillId, menuName }) => {
            this.deleteSkill(skillId, menuName);
        });
    }

    addSkillCardClickHandler(): void {
        this.router.navigate(SkillMgtRoutes.AddSkill(this._selectedCategoryId, this._selectedSubcategoryId));
    }

    onCardItemEvent(e: { skillId: string, menuName: string, card: ISkillCard }): void {
        // this.skills = [];
        // console.log('before => e.card.blockCard', e.card.blockCard);
        // e.card.blockCard = true;
        // console.log('after => e.card.blockCard', e.card.blockCard);
        if (this.menuItemIsDelete(e.menuName)) {
            e.card.blockCard = true;
            if (confirm('Are you sure you want to delete this skill?')) {
                // console.log('delete skill');
                setTimeout(() => {
                    this.skills.splice(this.skills.findIndex(x => x.id === e.skillId), 1);
                    // let temp = this.skills;
                    // this.skills = [];
                    // this.skills = [...this.skills];
                    // this.skills = temp;
                    e.card.blockCard = false;
                    /* this.skillService.deleteSkill(e.skillId).subscribe({
                        next: (response) => {
                            e.card.blockCard = false;
                            // remove card from dom (destroy);
                            this.skills.splice(this.skills.findIndex(x => x.id === e.skillId), 1);
                            this.alert.success(
                                'Successful',
                                'Skill has been deleted successfully'
                            );
                        },
                        error: (error: any) => {
                            e.card.blockCard = false;
                            this.alert.error(
                                'Delete Failed',
                                'Unable to delete the specified skill'
                            );
                        }
                    }); */
                }, 3000);



            } else {
                e.card.blockCard = false;
            }
        }
    }

    private deleteSkill(skillId: string, menuName: string): void {
        if (this.menuItemIsDelete(menuName)) {
            // e.card.blockCard = true;
            if (confirm('Are you sure you want to delete this skill?')) {
                this.skillService.deleteSkill(skillId).subscribe({
                    next: (response) => {
                        // remove card from dom (destroy);
                        this.skills.splice(this.skills.findIndex(x => x.id === skillId), 1);
                        this.ctxMenuItem.complete(skillId, menuName);
                        this.alert.success(
                            'Successful',
                            'Skill has been deleted successfully'
                        );
                    },
                    error: (error: any) => {
                        this.ctxMenuItem.complete(skillId, menuName);
                        this.alert.error(
                            'Delete Failed',
                            'Unable to delete the specified skill'
                        );
                    }
                });
            } else {
                // e.card.blockCard = false;
                this.ctxMenuItem.complete(skillId, menuName);
            }
        }
    }

    private menuItemIsDelete(menuName: string): boolean {
        return menuName === 'skill-delete';
    }

    ngOnDestroy(): void {
        this._eventStartSub?.unsubscribe();
    }


    /* skillCardClickHandler(skill: ISkill): void {
        this.router.navigate(SkillMgtRoutes.ReadSkill(skill.id));
    } */

}
