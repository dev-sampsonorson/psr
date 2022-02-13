import { Component, Inject, NgZone, OnDestroy, OnInit, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, MenuItem } from '@psr/shared/ui';
import { PageTitleService } from '@psr/shared/util';
import { ISkill, ISkillRating } from '@psr/skill/data-access';
import { AddSkillCardComponent, SkillCardComponent } from '@psr/skill/ui';
import { ISkillCard, SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN, SkillCardContextMenuitemService } from '@psr/skill/util';
import { Observable, Subscription } from 'rxjs';

import { SkillRatingService } from '../../services';

// import { SkillMgtService } from '../../services';

@Component({
    selector: 'psr-skl-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

    private _selectedCategoryId = '';
    private _selectedSubcategoryId = '';

    public skillRatings: ISkillRating[] = [];
    public isAddSkillCardVisible = true;
    public emptyStateTitle: string;
    public emptyStateDescription: string;
    public emptyStateButtonLabel: string;
    public selectedCategoryName: string | undefined;
    public selectedSubcategoryName: string | undefined;
    public skillAddCardType: Type<ISkillCard> = AddSkillCardComponent;
    public skillCardType: Type<ISkillCard> = SkillCardComponent;

    private _rateSkill$: Observable<ISkill>;
    // private _skillSave$: Observable<ISkill>;
    // private _skillUpdate$: Observable<ISkill>;
    private _eventStart$: Observable<{ skillId: string, menuName: string }>;

    private _eventStartSub: Subscription | undefined;

    get isSkillsVisible() {
        return this.skillRatings.length > 0;
    }

    get isCategoryDetailsVisible() {
        return this.selectedCategoryName !== undefined
            && this.selectedSubcategoryName !== undefined;
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pageTitle: PageTitleService,
        // private skillService: SkillsService,
        private skillRatingService: SkillRatingService,
        private alert: AlertService,
        private zone: NgZone,
        @Inject(SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN) public menuItems: MenuItem<any>[],
        private ctxMenuItem: SkillCardContextMenuitemService
    ) {
        this._rateSkill$ = this.skillRatingService.onSkillRating$;
        // this._skillUpdate$ = this.skillService.onSkillUpdate$;
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

        this.route.data.subscribe(({ skillRatings, selectedCategory, selectedSubcategory }) => {
            this.skillRatings = skillRatings; //.slice(0, 1);
            this.selectedCategoryName = selectedCategory?.name;
            this.selectedSubcategoryName = selectedSubcategory?.name;
        });

        /* this._skillSave$.subscribe((skill: ISkill) => {
            this.skills.push(skill);
        });

        this._skillUpdate$.subscribe((skill: ISkill) => {
            this.skills = this.skills.map((item: ISkill) => {
                return (item.id === skill.id) ? { ...skill } : item;
            });
        }); */

        this._eventStartSub = this._eventStart$.subscribe(({ skillId, menuName }) => {
            this.deleteSkill(skillId, menuName);
        });
    }

    addSkillCardClickHandler(): void {
        // this.router.navigate(MySkillRoutes.AddSkill(this._selectedCategoryId, this._selectedSubcategoryId));
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
                    this.skillRatings.splice(this.skillRatings.findIndex(x => x.skillId === e.skillId), 1);
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
                /* this.skillService.deleteSkill(skillId).subscribe({
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
                }); */
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
