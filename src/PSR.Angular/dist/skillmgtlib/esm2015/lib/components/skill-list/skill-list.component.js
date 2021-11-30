import { Component, Inject } from '@angular/core';
import { AddSkillCardComponent, SkillCardComponent } from '@skilllib';
import { SkillMgtRoutes } from '../../skill-mgt-constants';
import { SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN } from '../../tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/page-title.service";
import * as i3 from "../../services";
import * as i4 from "@sharedlib";
import * as i5 from "@skilllib";
import * as i6 from "@angular/common";
export class SkillListComponent {
    constructor(route, router, pageTitle, skillService, alert, zone, menuItems, ctxMenuItem) {
        this.route = route;
        this.router = router;
        this.pageTitle = pageTitle;
        this.skillService = skillService;
        this.alert = alert;
        this.zone = zone;
        this.menuItems = menuItems;
        this.ctxMenuItem = ctxMenuItem;
        this._selectedCategoryId = '';
        this._selectedSubcategoryId = '';
        this.skills = [];
        this.isAddSkillCardVisible = true;
        this.skillAddCardType = AddSkillCardComponent;
        this.skillCardType = SkillCardComponent;
        this._skillSave$ = this.skillService.onSkillSave$;
        this._skillUpdate$ = this.skillService.onSkillUpdate$;
        this._eventStart$ = this.ctxMenuItem.onEventStart$;
        this.pageTitle.updatePageTitle("Skills");
        this.pageTitle.updatePageSubTitle("View list of skill, see skill details, and add new skill.");
        this.emptyStateTitle = 'No skills';
        this.emptyStateDescription = 'Get started by adding skills to this sub category';
        this.emptyStateButtonLabel = 'Add New Skill';
    }
    get isSkillsVisible() {
        return this.skills.length > 0;
    }
    get isCategoryDetailsVisible() {
        return this.selectedCategoryName !== undefined
            && this.selectedSubcategoryName !== undefined;
    }
    ngOnInit() {
        this.route.params.subscribe(({ categoryId, subcategoryId }) => {
            this._selectedCategoryId = categoryId;
            this._selectedSubcategoryId = subcategoryId;
        });
        this.route.data.subscribe(({ skills, selectedCategory, selectedSubcategory }) => {
            this.skills = skills; //.slice(0, 1);
            this.selectedCategoryName = selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.name;
            this.selectedSubcategoryName = selectedSubcategory === null || selectedSubcategory === void 0 ? void 0 : selectedSubcategory.name;
        });
        this._skillSave$.subscribe((skill) => {
            this.skills.push(skill);
        });
        this._skillUpdate$.subscribe((skill) => {
            this.skills = this.skills.map((item) => {
                return (item.id === skill.id) ? Object.assign({}, skill) : item;
            });
        });
        this._eventStartSub = this._eventStart$.subscribe(({ skillId, menuName }) => {
            this.deleteSkill(skillId, menuName);
        });
    }
    addSkillCardClickHandler() {
        this.router.navigate(SkillMgtRoutes.AddSkill(this._selectedCategoryId, this._selectedSubcategoryId));
    }
    onCardItemEvent(e) {
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
            }
            else {
                e.card.blockCard = false;
            }
        }
    }
    deleteSkill(skillId, menuName) {
        if (this.menuItemIsDelete(menuName)) {
            // e.card.blockCard = true;
            if (confirm('Are you sure you want to delete this skill?')) {
                this.skillService.deleteSkill(skillId).subscribe({
                    next: (response) => {
                        // remove card from dom (destroy);
                        this.skills.splice(this.skills.findIndex(x => x.id === skillId), 1);
                        this.ctxMenuItem.complete(skillId, menuName);
                        this.alert.success('Successful', 'Skill has been deleted successfully');
                    },
                    error: (error) => {
                        this.ctxMenuItem.complete(skillId, menuName);
                        this.alert.error('Delete Failed', 'Unable to delete the specified skill');
                    }
                });
            }
            else {
                // e.card.blockCard = false;
                this.ctxMenuItem.complete(skillId, menuName);
            }
        }
    }
    menuItemIsDelete(menuName) {
        return menuName === 'skill-delete';
    }
    ngOnDestroy() {
        var _a;
        (_a = this._eventStartSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
SkillListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListComponent, deps: [{ token: i1.ActivatedRoute }, { token: i1.Router }, { token: i2.PageTitleService }, { token: i3.SkillMgtService }, { token: i4.AlertService }, { token: i0.NgZone }, { token: SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN }, { token: i5.SkillCardContextMenuitemService }], target: i0.ɵɵFactoryTarget.Component });
SkillListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillListComponent, selector: "app-skill-list", ngImport: i0, template: "<div class=\"pb-5\" *ngIf=\"isCategoryDetailsVisible\">\n    <div class=\"flex flex-wrap items-baseline -mt-2 -ml-2\">\n        <h3 class=\"mt-2 ml-2 text-lg font-medium leading-6 text-gray-700\">\n            Skills\n        </h3>\n        <p class=\"mt-1 ml-2 text-sm text-gray-500 truncate\">in\n            {{selectedCategoryName}}\n            <svg class=\"flex-shrink-0 inline-block w-5 h-5 text-gray-300\" xmlns=\"http://www.w3.org/2000/svg\"\n                 fill=\"currentColor\" viewBox=\"0 0 20 20\" aria-hidden=\"true\">\n                <path d=\"M5.555 17.776l8-16 .894.448-8 16-.894-.448z\" />\n            </svg>\n            {{selectedSubcategoryName}}\n        </p>\n    </div>\n</div>\n<skl-list-display [isAddSkillCardVisible]=\"isAddSkillCardVisible\" [isSkillsVisible]=\"isSkillsVisible\">\n    <skl-add-card (addSkillCardClick)=\"addSkillCardClickHandler()\"></skl-add-card>\n    <ng-container *ngFor=\"let skill of skills\">\n        <skl-card #skillCard [x-blockui]=\"skillCard.blockCard\" [x-overlay-tpl]=\"mask\" [skill]=\"skill\"\n                  [menuItems]=\"menuItems\"></skl-card>\n        <!-- (contextMenuItemEvent)=\"onCardItemEvent($event)\" -->\n    </ng-container>\n</skl-list-display>\n<ng-template #mask>\n    <div class=\"ui-blockui ui-widget-overlay\">\n        <svg class=\"w-12 h-12 text-gray-500\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"\n             xmlns=\"http://www.w3.org/2000/svg\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\n                  d=\"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\"></path>\n        </svg>\n    </div>\n</ng-template>\n<app-empty-state (addNewItem)=\"addSkillCardClickHandler()\" *ngIf=\"!isSkillsVisible\" [title]=\"emptyStateTitle\"\n                 [description]=\"emptyStateDescription\" [buttonLabel]=\"emptyStateButtonLabel\">\n</app-empty-state>\n", styles: [":host{display:block}\n"], components: [{ type: i5.SkillListDisplayComponent, selector: "skl-list-display", inputs: ["isAddSkillCardVisible", "isSkillsVisible"] }, { type: i5.AddSkillCardComponent, selector: "skl-add-card", outputs: ["addSkillCardClick"] }, { type: i5.SkillCardComponent, selector: "skl-card", inputs: ["skill", "menuItems"] }, { type: i4.EmptyStateComponent, selector: "app-empty-state", inputs: ["title", "description", "buttonLabel"], outputs: ["addNewItem"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.BlockUiDirective, selector: "[x-blockui]", inputs: ["x-target-el", "x-auto-zindex", "x-base-zindex", "x-blockui", "x-overlay-tpl"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-skill-list',
                    templateUrl: './skill-list.component.html',
                    styleUrls: ['./skill-list.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.PageTitleService }, { type: i3.SkillMgtService }, { type: i4.AlertService }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN]
                }] }, { type: i5.SkillCardContextMenuitemService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbG1ndGxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2tpbGwtbGlzdC9za2lsbC1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NraWxsbWd0bGliL3NyYy9saWIvY29tcG9uZW50cy9za2lsbC1saXN0L3NraWxsLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBR25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBc0Isa0JBQWtCLEVBQW1DLE1BQU0sV0FBVyxDQUFDO0FBSzNILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7O0FBT3BFLE1BQU0sT0FBTyxrQkFBa0I7SUE4QjNCLFlBQ1ksS0FBcUIsRUFDckIsTUFBYyxFQUNkLFNBQTJCLEVBQzNCLFlBQTZCLEVBQzdCLEtBQW1CLEVBQ25CLElBQVksRUFDaUMsU0FBMEIsRUFDdkUsV0FBNEM7UUFQNUMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUM3QixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVE7UUFDaUMsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDdkUsZ0JBQVcsR0FBWCxXQUFXLENBQWlDO1FBcENoRCx3QkFBbUIsR0FBVyxFQUFFLENBQUM7UUFDakMsMkJBQXNCLEdBQVcsRUFBRSxDQUFDO1FBRXJDLFdBQU0sR0FBYSxF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QUUsZ0JBQWdCO29CQUMxQixXQUFXLEVBQUUsNkJBQTZCO29CQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDN0M7OzBCQXNDUSxNQUFNOzJCQUFDLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFsZXJ0U2VydmljZSwgTWVudUl0ZW0gfSBmcm9tICdAc2hhcmVkbGliJztcbmltcG9ydCB7IEFkZFNraWxsQ2FyZENvbXBvbmVudCwgSVNraWxsLCBJU2tpbGxDYXJkLCBTa2lsbENhcmRDb21wb25lbnQsIFNraWxsQ2FyZENvbnRleHRNZW51aXRlbVNlcnZpY2UgfSBmcm9tICdAc2tpbGxsaWInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNraWxsTWd0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IFBhZ2VUaXRsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wYWdlLXRpdGxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2tpbGxNZ3RSb3V0ZXMgfSBmcm9tICcuLi8uLi9za2lsbC1tZ3QtY29uc3RhbnRzJztcbmltcG9ydCB7IFNLSUxMX0NBUkRfQ09OVEVYVF9NRU5VX0NPTkZJR19UT0tFTiB9IGZyb20gJy4uLy4uL3Rva2Vucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXNraWxsLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9za2lsbC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9za2lsbC1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2tpbGxMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRDYXRlZ29yeUlkOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIF9zZWxlY3RlZFN1YmNhdGVnb3J5SWQ6IHN0cmluZyA9ICcnO1xuXG4gICAgcHVibGljIHNraWxsczogSVNraWxsW10gPSBbXTtcbiAgICBwdWJsaWMgaXNBZGRTa2lsbENhcmRWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgZW1wdHlTdGF0ZVRpdGxlOiBzdHJpbmc7XG4gICAgcHVibGljIGVtcHR5U3RhdGVEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBlbXB0eVN0YXRlQnV0dG9uTGFiZWw6IHN0cmluZztcbiAgICBwdWJsaWMgc2VsZWN0ZWRDYXRlZ29yeU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgc2VsZWN0ZWRTdWJjYXRlZ29yeU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgc2tpbGxBZGRDYXJkVHlwZTogVHlwZTxJU2tpbGxDYXJkPiA9IEFkZFNraWxsQ2FyZENvbXBvbmVudDtcbiAgICBwdWJsaWMgc2tpbGxDYXJkVHlwZTogVHlwZTxJU2tpbGxDYXJkPiA9IFNraWxsQ2FyZENvbXBvbmVudDtcblxuICAgIHByaXZhdGUgX3NraWxsU2F2ZSQ6IE9ic2VydmFibGU8SVNraWxsPjtcbiAgICBwcml2YXRlIF9za2lsbFVwZGF0ZSQ6IE9ic2VydmFibGU8SVNraWxsPjtcbiAgICBwcml2YXRlIF9ldmVudFN0YXJ0JDogT2JzZXJ2YWJsZTx7IHNraWxsSWQ6IHN0cmluZywgbWVudU5hbWU6IHN0cmluZyB9PjtcblxuICAgIHByaXZhdGUgX2V2ZW50U3RhcnRTdWI6IFN1YnNjcmlwdGlvbiB8IHVuZGVmaW5lZDtcblxuICAgIGdldCBpc1NraWxsc1Zpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNraWxscy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGdldCBpc0NhdGVnb3J5RGV0YWlsc1Zpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnlOYW1lICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICYmIHRoaXMuc2VsZWN0ZWRTdWJjYXRlZ29yeU5hbWUgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcGFnZVRpdGxlOiBQYWdlVGl0bGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNraWxsU2VydmljZTogU2tpbGxNZ3RTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGFsZXJ0OiBBbGVydFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgICAgICBASW5qZWN0KFNLSUxMX0NBUkRfQ09OVEVYVF9NRU5VX0NPTkZJR19UT0tFTikgcHVibGljIG1lbnVJdGVtczogTWVudUl0ZW08YW55PltdLFxuICAgICAgICBwcml2YXRlIGN0eE1lbnVJdGVtOiBTa2lsbENhcmRDb250ZXh0TWVudWl0ZW1TZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX3NraWxsU2F2ZSQgPSB0aGlzLnNraWxsU2VydmljZS5vblNraWxsU2F2ZSQ7XG4gICAgICAgIHRoaXMuX3NraWxsVXBkYXRlJCA9IHRoaXMuc2tpbGxTZXJ2aWNlLm9uU2tpbGxVcGRhdGUkO1xuICAgICAgICB0aGlzLl9ldmVudFN0YXJ0JCA9IHRoaXMuY3R4TWVudUl0ZW0ub25FdmVudFN0YXJ0JDtcblxuICAgICAgICB0aGlzLnBhZ2VUaXRsZS51cGRhdGVQYWdlVGl0bGUoXCJTa2lsbHNcIik7XG4gICAgICAgIHRoaXMucGFnZVRpdGxlLnVwZGF0ZVBhZ2VTdWJUaXRsZShcIlZpZXcgbGlzdCBvZiBza2lsbCwgc2VlIHNraWxsIGRldGFpbHMsIGFuZCBhZGQgbmV3IHNraWxsLlwiKTtcblxuICAgICAgICB0aGlzLmVtcHR5U3RhdGVUaXRsZSA9ICdObyBza2lsbHMnO1xuICAgICAgICB0aGlzLmVtcHR5U3RhdGVEZXNjcmlwdGlvbiA9ICdHZXQgc3RhcnRlZCBieSBhZGRpbmcgc2tpbGxzIHRvIHRoaXMgc3ViIGNhdGVnb3J5JztcbiAgICAgICAgdGhpcy5lbXB0eVN0YXRlQnV0dG9uTGFiZWwgPSAnQWRkIE5ldyBTa2lsbCc7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgoeyBjYXRlZ29yeUlkLCBzdWJjYXRlZ29yeUlkIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJZCA9IGNhdGVnb3J5SWQ7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZFN1YmNhdGVnb3J5SWQgPSBzdWJjYXRlZ29yeUlkO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJvdXRlLmRhdGEuc3Vic2NyaWJlKCh7IHNraWxscywgc2VsZWN0ZWRDYXRlZ29yeSwgc2VsZWN0ZWRTdWJjYXRlZ29yeSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNraWxscyA9IHNraWxsczsgLy8uc2xpY2UoMCwgMSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnlOYW1lID0gc2VsZWN0ZWRDYXRlZ29yeT8ubmFtZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdWJjYXRlZ29yeU5hbWUgPSBzZWxlY3RlZFN1YmNhdGVnb3J5Py5uYW1lO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9za2lsbFNhdmUkLnN1YnNjcmliZSgoc2tpbGw6IElTa2lsbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5za2lsbHMucHVzaChza2lsbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3NraWxsVXBkYXRlJC5zdWJzY3JpYmUoKHNraWxsOiBJU2tpbGwpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2tpbGxzID0gdGhpcy5za2lsbHMubWFwKChpdGVtOiBJU2tpbGwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGl0ZW0uaWQgPT09IHNraWxsLmlkKSA/IHsgLi4uc2tpbGwgfSA6IGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fZXZlbnRTdGFydFN1YiA9IHRoaXMuX2V2ZW50U3RhcnQkLnN1YnNjcmliZSgoeyBza2lsbElkLCBtZW51TmFtZSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVNraWxsKHNraWxsSWQsIG1lbnVOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkU2tpbGxDYXJkQ2xpY2tIYW5kbGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShTa2lsbE1ndFJvdXRlcy5BZGRTa2lsbCh0aGlzLl9zZWxlY3RlZENhdGVnb3J5SWQsIHRoaXMuX3NlbGVjdGVkU3ViY2F0ZWdvcnlJZCkpO1xuICAgIH1cblxuICAgIG9uQ2FyZEl0ZW1FdmVudChlOiB7IHNraWxsSWQ6IHN0cmluZywgbWVudU5hbWU6IHN0cmluZywgY2FyZDogSVNraWxsQ2FyZCB9KTogdm9pZCB7XG4gICAgICAgIC8vIHRoaXMuc2tpbGxzID0gW107XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdiZWZvcmUgPT4gZS5jYXJkLmJsb2NrQ2FyZCcsIGUuY2FyZC5ibG9ja0NhcmQpO1xuICAgICAgICAvLyBlLmNhcmQuYmxvY2tDYXJkID0gdHJ1ZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FmdGVyID0+IGUuY2FyZC5ibG9ja0NhcmQnLCBlLmNhcmQuYmxvY2tDYXJkKTtcbiAgICAgICAgaWYgKHRoaXMubWVudUl0ZW1Jc0RlbGV0ZShlLm1lbnVOYW1lKSkge1xuICAgICAgICAgICAgZS5jYXJkLmJsb2NrQ2FyZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHNraWxsPycpKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RlbGV0ZSBza2lsbCcpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNraWxscy5zcGxpY2UodGhpcy5za2lsbHMuZmluZEluZGV4KHggPT4geC5pZCA9PT0gZS5za2lsbElkKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB0ZW1wID0gdGhpcy5za2lsbHM7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2tpbGxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2tpbGxzID0gWy4uLnRoaXMuc2tpbGxzXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5za2lsbHMgPSB0ZW1wO1xuICAgICAgICAgICAgICAgICAgICBlLmNhcmQuYmxvY2tDYXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8qIHRoaXMuc2tpbGxTZXJ2aWNlLmRlbGV0ZVNraWxsKGUuc2tpbGxJZCkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY2FyZC5ibG9ja0NhcmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgY2FyZCBmcm9tIGRvbSAoZGVzdHJveSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5za2lsbHMuc3BsaWNlKHRoaXMuc2tpbGxzLmZpbmRJbmRleCh4ID0+IHguaWQgPT09IGUuc2tpbGxJZCksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQuc3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N1Y2Nlc3NmdWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2tpbGwgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmNhcmQuYmxvY2tDYXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydC5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0RlbGV0ZSBGYWlsZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVW5hYmxlIHRvIGRlbGV0ZSB0aGUgc3BlY2lmaWVkIHNraWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pOyAqL1xuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuXG5cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlLmNhcmQuYmxvY2tDYXJkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZVNraWxsKHNraWxsSWQ6IHN0cmluZywgbWVudU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5tZW51SXRlbUlzRGVsZXRlKG1lbnVOYW1lKSkge1xuICAgICAgICAgICAgLy8gZS5jYXJkLmJsb2NrQ2FyZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHNraWxsPycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbFNlcnZpY2UuZGVsZXRlU2tpbGwoc2tpbGxJZCkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgY2FyZCBmcm9tIGRvbSAoZGVzdHJveSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNraWxscy5zcGxpY2UodGhpcy5za2lsbHMuZmluZEluZGV4KHggPT4geC5pZCA9PT0gc2tpbGxJZCksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHhNZW51SXRlbS5jb21wbGV0ZShza2lsbElkLCBtZW51TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0LnN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N1Y2Nlc3NmdWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTa2lsbCBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc3NmdWxseSdcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHhNZW51SXRlbS5jb21wbGV0ZShza2lsbElkLCBtZW51TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0LmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZWxldGUgRmFpbGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVW5hYmxlIHRvIGRlbGV0ZSB0aGUgc3BlY2lmaWVkIHNraWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBlLmNhcmQuYmxvY2tDYXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHhNZW51SXRlbS5jb21wbGV0ZShza2lsbElkLCBtZW51TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG1lbnVJdGVtSXNEZWxldGUobWVudU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gbWVudU5hbWUgPT09ICdza2lsbC1kZWxldGUnO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ldmVudFN0YXJ0U3ViPy51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuXG4gICAgLyogc2tpbGxDYXJkQ2xpY2tIYW5kbGVyKHNraWxsOiBJU2tpbGwpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoU2tpbGxNZ3RSb3V0ZXMuUmVhZFNraWxsKHNraWxsLmlkKSk7XG4gICAgfSAqL1xuXG59XG4iLCI8ZGl2IGNsYXNzPVwicGItNVwiICpuZ0lmPVwiaXNDYXRlZ29yeURldGFpbHNWaXNpYmxlXCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGl0ZW1zLWJhc2VsaW5lIC1tdC0yIC1tbC0yXCI+XG4gICAgICAgIDxoMyBjbGFzcz1cIm10LTIgbWwtMiB0ZXh0LWxnIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICBTa2lsbHNcbiAgICAgICAgPC9oMz5cbiAgICAgICAgPHAgY2xhc3M9XCJtdC0xIG1sLTIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHRydW5jYXRlXCI+aW5cbiAgICAgICAgICAgIHt7c2VsZWN0ZWRDYXRlZ29yeU5hbWV9fVxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImZsZXgtc2hyaW5rLTAgaW5saW5lLWJsb2NrIHctNSBoLTUgdGV4dC1ncmF5LTMwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS41NTUgMTcuNzc2bDgtMTYgLjg5NC40NDgtOCAxNi0uODk0LS40NDh6XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAge3tzZWxlY3RlZFN1YmNhdGVnb3J5TmFtZX19XG4gICAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPHNrbC1saXN0LWRpc3BsYXkgW2lzQWRkU2tpbGxDYXJkVmlzaWJsZV09XCJpc0FkZFNraWxsQ2FyZFZpc2libGVcIiBbaXNTa2lsbHNWaXNpYmxlXT1cImlzU2tpbGxzVmlzaWJsZVwiPlxuICAgIDxza2wtYWRkLWNhcmQgKGFkZFNraWxsQ2FyZENsaWNrKT1cImFkZFNraWxsQ2FyZENsaWNrSGFuZGxlcigpXCI+PC9za2wtYWRkLWNhcmQ+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2tpbGwgb2Ygc2tpbGxzXCI+XG4gICAgICAgIDxza2wtY2FyZCAjc2tpbGxDYXJkIFt4LWJsb2NrdWldPVwic2tpbGxDYXJkLmJsb2NrQ2FyZFwiIFt4LW92ZXJsYXktdHBsXT1cIm1hc2tcIiBbc2tpbGxdPVwic2tpbGxcIlxuICAgICAgICAgICAgICAgICAgW21lbnVJdGVtc109XCJtZW51SXRlbXNcIj48L3NrbC1jYXJkPlxuICAgICAgICA8IS0tIChjb250ZXh0TWVudUl0ZW1FdmVudCk9XCJvbkNhcmRJdGVtRXZlbnQoJGV2ZW50KVwiIC0tPlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9za2wtbGlzdC1kaXNwbGF5PlxuPG5nLXRlbXBsYXRlICNtYXNrPlxuICAgIDxkaXYgY2xhc3M9XCJ1aS1ibG9ja3VpIHVpLXdpZGdldC1vdmVybGF5XCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJ3LTEyIGgtMTIgdGV4dC1ncmF5LTUwMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTEyIDh2NGwzIDNtNi0zYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiPjwvcGF0aD5cbiAgICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuPGFwcC1lbXB0eS1zdGF0ZSAoYWRkTmV3SXRlbSk9XCJhZGRTa2lsbENhcmRDbGlja0hhbmRsZXIoKVwiICpuZ0lmPVwiIWlzU2tpbGxzVmlzaWJsZVwiIFt0aXRsZV09XCJlbXB0eVN0YXRlVGl0bGVcIlxuICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dPVwiZW1wdHlTdGF0ZURlc2NyaXB0aW9uXCIgW2J1dHRvbkxhYmVsXT1cImVtcHR5U3RhdGVCdXR0b25MYWJlbFwiPlxuPC9hcHAtZW1wdHktc3RhdGU+XG4iXX0=