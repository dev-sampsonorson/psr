import * as i0 from '@angular/core';
import { Injectable, Inject, Component, NgModule, Input, InjectionToken } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
import * as i1$1 from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import * as i1$2 from '@angular/router';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { APP_CONFIG_TOKEN } from '@corelib';
import * as i1 from '@angular/common/http';
import * as i2 from '@skilllib';
import { SkillFormModule, SkillCategoryCardModule, AddSkillCardComponent, SkillCardComponent, SkillListDisplayModule, AddSkillCardModule, SkillCardModule, SkillSubcategoryCardModule, SkillCategoryResolver, SkillSubcategoryResolver, SkillListResolver, SelectedCategoryResolver, SelectedSubcategoryResolver, SkillReadComponent, SkillResolver, SkillAddResolver } from '@skilllib';
import * as i3 from '@sharedlib';
import { DisableControlModule, SecondaryHeaderModule, EmptyStateModule, BlockUiModule, MenuItem, IconEyeComponent, IconPencilComponent, IconTrashComponent, BREADCRUMB_CONFIG_TOKEN, TwoColumnLayoutModule, PageHeadingModule, BreadcrumbModule, SharedlibModule } from '@sharedlib';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';

class PageTitleService {
    constructor() {
        this._pageTitle$ = new BehaviorSubject('Skill Management');
        this._pageSubTitle$ = new BehaviorSubject('Manage skill categories, subcategories, and skills');
    }
    get pageTitle$() {
        return this._pageTitle$.asObservable();
    }
    get pageSubTitle$() {
        return this._pageSubTitle$.asObservable();
    }
    updatePageTitle(title) {
        this._pageTitle$.next(title);
    }
    updatePageSubTitle(title) {
        this._pageSubTitle$.next(title);
    }
}
PageTitleService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PageTitleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PageTitleService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PageTitleService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PageTitleService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

let endpoints = {
    AddSkill: (config) => config.getUrl(`skills`),
    UpdateSkill: (config) => config.getUrl(`skills`),
    DeleteSkill: (config, id) => config.getUrl(`skills/${id}`),
};
const SkillMgtEndpoints = endpoints;

class SkillMgtService {
    constructor(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this._saveSkillSubject = new Subject();
        this._updateSkillSubject = new Subject();
        this._deleteSkillSubject = new Subject();
    }
    get onSkillSave$() {
        return this._saveSkillSubject.asObservable();
    }
    get onSkillUpdate$() {
        return this._updateSkillSubject.asObservable();
    }
    // know what skill was delete
    get onSkillDelete$() {
        return this._deleteSkillSubject.asObservable();
    }
    notifySkillSave(skill) {
        this._saveSkillSubject.next(skill);
    }
    notifySkillUpdate(skill) {
        this._updateSkillSubject.next(skill);
    }
    // tell subscribers what skill was deleted
    notifySkillDelete(skill) {
        this._deleteSkillSubject.next(skill);
    }
    addSkill(skill) {
        return this.http.post(SkillMgtEndpoints.AddSkill(this.appConfig), skill).pipe(
        // shareReplay()
        );
    }
    updateSkill(skill) {
        return this.http.put(SkillMgtEndpoints.UpdateSkill(this.appConfig), skill).pipe(
        // shareReplay()
        );
    }
    deleteSkill(skillId) {
        return this.http.delete(SkillMgtEndpoints.DeleteSkill(this.appConfig, skillId));
    }
}
SkillMgtService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillMgtService, deps: [{ token: i1.HttpClient }, { token: APP_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
SkillMgtService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillMgtService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillMgtService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }]; } });

class SkillAddComponent {
    constructor(fb, route, router, skillService, skillFormService, alert) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.skillService = skillService;
        this.skillFormService = skillFormService;
        this.alert = alert;
        this.title = 'Add New Skill';
        this.description = 'Provide details about the skill.';
        this.buttonLabel = 'Add skill';
        this.categories = [];
        this.subCategories = [];
        this.formIsValid = false;
        this.isSubcategoryDisabled = true;
    }
    ngOnInit() {
        // get the categories ids
        // get the skill
        // update the skill with category and subcategory
        // emit new object with categories and skill using map
        this.route.params.pipe(switchMap(({ categoryId, subcategoryId }) => {
            return this.route.data.pipe(map(({ categories, skill }) => {
                // skill.categoryId = categoryId;
                // skill.subcategoryId = subcategoryId;
                return {
                    categories,
                    skill: Object.assign(Object.assign({}, skill), { categoryId, subcategoryId })
                };
            }));
        })).subscribe(({ categories, skill }) => {
            this.categories = categories;
            this.skill = skill;
        });
    }
    onSaveSkill(skill) {
        this.skillService.addSkill(skill).subscribe({
            next: (response) => {
                // tell the list component that skill has been added
                this.skillService.notifySkillSave(response);
                this.skillFormService.resetForm();
                this.alert.success('Successful', 'Skill has been added successfully');
            },
            error: (error) => {
                this.alert.error('Save Failed', 'Unable to add new skill');
            }
        });
    }
    onCloseClick() {
        this.router.navigate(['/skills', { outlets: { details: null } }]);
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this._categoryValueChangeSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this._formStatusChangeSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
SkillAddComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillAddComponent, deps: [{ token: i1$1.FormBuilder }, { token: i1$2.ActivatedRoute }, { token: i1$2.Router }, { token: SkillMgtService }, { token: i2.SkillFormService }, { token: i3.AlertService }], target: i0.ɵɵFactoryTarget.Component });
SkillAddComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillAddComponent, selector: "app-skill-add", ngImport: i0, template: "<app-secondary-header [title]=\"title\" [description]=\"description\" (closeClick)=\"onCloseClick()\"></app-secondary-header>\n\n<skl-form [skill]=\"skill\" [categories]=\"categories\" (commitSkill)=\"onSaveSkill($event)\" [buttonLabel]=\"buttonLabel\">\n</skl-form>\n\n\n<!-- <div class=\"flex flex-col py-5 space-y-6 border-t border-gray-200\">\n    <ng-container *ngIf=\"form\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"addSkill()\" class=\"psr-form__form\">\n            <div>\n                <label class=\"psr-form__label\" for=\"name\">Skill name</label>\n                <input formControlName=\"name\" id=\"name\" name=\"name\" type=\"text\"\n                       class=\"psr-form__field psr-form__field--alt\" placeholder=\"\" />\n            </div>\n            <div>\n                <label class=\"psr-form__label\" for=\"category\">Category</label>\n                <select formControlName=\"category\" (change)=\"onCategoryChange()\" id=\"category\" name=\"category\"\n                        class=\"psr-form__select psr-form__select--alt\">\n                    <option value=\"\" selected> -- </option>\n                    <option [value]=\"category.id\" *ngFor=\"let category of categories\">{{ category.name }}</option>\n                </select>\n            </div>\n            <div>\n                <label class=\"psr-form__label\" for=\"sub-category\">Sub category</label>\n                <select formControlName=\"subCategory\" [disableControl]=\"isSubcategoryDisabled\" id=\"sub-category\"\n                        name=\"sub-category\" class=\"psr-form__select psr-form__select--alt\">\n                    <option value=\"\" selected> -- </option>\n                    <option [value]=\"subCategory.id\" *ngFor=\"let subCategory of subCategories\">{{ subCategory.name }}\n                    </option>\n                </select>\n            </div>\n            <div>\n                <button [disabled]=\"!formIsValid\" class=\"psr-form__button\" type=\"submit\">\n                    Add skill\n                </button>\n            </div>\n        </form>\n    </ng-container>\n</div> -->\n", styles: [":host{display:block}\n"], components: [{ type: i3.SecondaryHeaderComponent, selector: "app-secondary-header", inputs: ["title", "description"], outputs: ["closeClick"] }, { type: i2.SkillFormComponent, selector: "skl-form", inputs: ["categories", "subcategories", "buttonLabel", "skill"], outputs: ["commitSkill"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillAddComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-skill-add',
                    templateUrl: './skill-add.component.html',
                    styleUrls: ['./skill-add.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.FormBuilder }, { type: i1$2.ActivatedRoute }, { type: i1$2.Router }, { type: SkillMgtService }, { type: i2.SkillFormService }, { type: i3.AlertService }]; } });

class SkillAddModule {
}
SkillAddModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillAddModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillAddModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillAddModule, declarations: [SkillAddComponent], imports: [CommonModule,
        ReactiveFormsModule,
        DisableControlModule,
        SecondaryHeaderModule,
        SkillFormModule], exports: [SkillAddComponent] });
SkillAddModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillAddModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            DisableControlModule,
            SecondaryHeaderModule,
            SkillFormModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillAddModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SkillAddComponent],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        DisableControlModule,
                        SecondaryHeaderModule,
                        SkillFormModule
                    ],
                    exports: [SkillAddComponent]
                }]
        }] });

let appRoutes = {
    ListSkills: (categoryId, subcategoryId) => [`/skills`, `categories`, `${categoryId}`, `subcategories`, `${subcategoryId}`, `list`],
    // ReadSkill: (id: string) => [`/skills`, { outlets: { details: ['read', id] } }],
    ReadSkill: (id) => [`/skills`, { outlets: { details: ['read', id] } }],
    EditSkill: (id) => [`/skills`, { outlets: { details: ['edit', id] } }],
    AddSkill: (categoryId, subcategoryId) => [`/skills`, { outlets: { details: ['add', categoryId, subcategoryId] } }],
    ListSubcategories: (id) => [`/skills`, `categories`, `${id}`, `subcategories`],
};
const SkillMgtRoutes = appRoutes;

class SkillCategoryListComponent {
    constructor(route, router, pageTitle) {
        this.route = route;
        this.router = router;
        this.pageTitle = pageTitle;
        this.categories = [];
        this.pageTitle.updatePageTitle("Skill Categories");
        this.pageTitle.updatePageSubTitle("Choose a skill category from the list below to see sub categories");
    }
    ngOnInit() {
        this.route.data.subscribe(({ categories }) => {
            this.categories = categories;
        });
    }
    onCardClick(category) {
        this.router.navigate(SkillMgtRoutes.ListSubcategories(category.id));
    }
}
SkillCategoryListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryListComponent, deps: [{ token: i1$2.ActivatedRoute }, { token: i1$2.Router }, { token: PageTitleService }], target: i0.ɵɵFactoryTarget.Component });
SkillCategoryListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillCategoryListComponent, selector: "sklmgt-category-list", ngImport: i0, template: "<ng-container *ngFor=\"let category of categories\">\n    <skl-category-card (onCardClick)=\"onCardClick(category)\" [category]=\"category\"></skl-category-card>\n</ng-container>\n", styles: [":host{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-auto-rows:minmax(150px,auto);grid-gap:2rem}\n"], components: [{ type: i2.SkillCategoryCardComponent, selector: "skl-category-card", inputs: ["category"], outputs: ["onCardClick"] }], directives: [{ type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sklmgt-category-list',
                    templateUrl: './skill-category-list.component.html',
                    styleUrls: ['./skill-category-list.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$2.ActivatedRoute }, { type: i1$2.Router }, { type: PageTitleService }]; } });

class SkillCategoryListModule {
}
SkillCategoryListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillCategoryListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryListModule, declarations: [SkillCategoryListComponent], imports: [CommonModule,
        SkillCategoryCardModule], exports: [SkillCategoryListComponent] });
SkillCategoryListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryListModule, imports: [[
            CommonModule,
            SkillCategoryCardModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SkillCategoryListComponent],
                    imports: [
                        CommonModule,
                        SkillCategoryCardModule
                    ],
                    exports: [SkillCategoryListComponent]
                }]
        }] });

class SkillEditComponent {
    constructor(route, router, skillService, skillMgtService, skillFormService, alert) {
        this.route = route;
        this.router = router;
        this.skillService = skillService;
        this.skillMgtService = skillMgtService;
        this.skillFormService = skillFormService;
        this.alert = alert;
        this.title = 'Edit Skill';
        this.description = 'Update details about the skill.';
        this.buttonLabel = 'Update skill';
        this.categories = [];
        this.subcategories = [];
    }
    get isFormVisible() {
        var _a;
        return ((_a = this.skill) === null || _a === void 0 ? void 0 : _a.id) !== undefined;
    }
    ngOnInit() {
        /* this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            tap(x => console.log('router.event => ', x))
        ).subscribe(); */
        this._routeDataSub = this.route.data.pipe(
        // tap(x => console.log('route.data => ', x)),
        switchMap(({ categories, skill }) => {
            return this.skillService.getSubCategories(skill.categoryId).pipe(map(subcategories => {
                return {
                    categories,
                    subcategories,
                    skill
                };
            }));
        })).subscribe(({ categories, skill, subcategories }) => {
            this.categories = categories;
            this.subcategories = subcategories;
            this.skill = skill;
            // console.log('this.skill', this.skill);
        });
    }
    onUpdateSkill(skill) {
        this.skillMgtService.updateSkill(skill).subscribe({
            next: (response) => {
                // tell the list component that skill has been added
                this.skillMgtService.notifySkillUpdate(response);
                this.skillFormService.resetForm();
                this.alert.success('Successful', 'Skill has been updated successfully');
            },
            error: (error) => {
                this.alert.error('Update Failed', 'Unable to update new skill');
            }
        });
    }
    onCloseClick() {
        this.router.navigate(['/skills', { outlets: { details: null } }]);
    }
    ngOnDestroy() {
        var _a;
        (_a = this._routeDataSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
SkillEditComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditComponent, deps: [{ token: i1$2.ActivatedRoute }, { token: i1$2.Router }, { token: i2.SkillsService }, { token: SkillMgtService }, { token: i2.SkillFormService }, { token: i3.AlertService }], target: i0.ɵɵFactoryTarget.Component });
SkillEditComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillEditComponent, selector: "app-skill-edit", ngImport: i0, template: "<app-secondary-header [title]=\"title\" [description]=\"description\" (closeClick)=\"onCloseClick()\"></app-secondary-header>\n\n<ng-container *ngIf=\"isFormVisible\">\n    <skl-form [skill]=\"skill\" [categories]=\"categories\" [subcategories]=\"subcategories\"\n              (commitSkill)=\"onUpdateSkill($event)\" [buttonLabel]=\"buttonLabel\">\n    </skl-form>\n</ng-container>\n", styles: [":host{display:block}\n"], components: [{ type: i3.SecondaryHeaderComponent, selector: "app-secondary-header", inputs: ["title", "description"], outputs: ["closeClick"] }, { type: i2.SkillFormComponent, selector: "skl-form", inputs: ["categories", "subcategories", "buttonLabel", "skill"], outputs: ["commitSkill"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-skill-edit',
                    templateUrl: './skill-edit.component.html',
                    styleUrls: ['./skill-edit.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$2.ActivatedRoute }, { type: i1$2.Router }, { type: i2.SkillsService }, { type: SkillMgtService }, { type: i2.SkillFormService }, { type: i3.AlertService }]; } });

class SkillEditModule {
}
SkillEditModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillEditModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditModule, declarations: [SkillEditComponent], imports: [CommonModule,
        SkillFormModule,
        SecondaryHeaderModule], exports: [SkillEditComponent] });
SkillEditModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditModule, imports: [[
            CommonModule,
            SkillFormModule,
            SecondaryHeaderModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SkillEditComponent
                    ],
                    imports: [
                        CommonModule,
                        SkillFormModule,
                        SecondaryHeaderModule
                    ],
                    exports: [SkillEditComponent]
                }]
        }] });

class SkillFilterComponent {
    constructor(fb) {
        this.fb = fb;
        this.categories = [];
        this.subCategories = [];
        this.isSubcategoryDisabled = true;
    }
    ngOnInit() {
        this.form = this.fb.group({
            category: ['', [Validators.required]],
            subCategory: ['', [Validators.required]]
        });
    }
    filterSkillsHandler() {
    }
}
SkillFilterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFilterComponent, deps: [{ token: i1$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
SkillFilterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillFilterComponent, selector: "app-skill-filter", inputs: { categories: "categories" }, ngImport: i0, template: "<ng-container *ngIf=\"form\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"filterSkillsHandler()\">\n        <div class=\"flex justify-end space-x-4\">\n            <div>\n                <!-- <label class=\"psr-form__label\" for=\"category\">Category</label> -->\n                <select formControlName=\"category\" id=\"category\" name=\"category\"\n                        class=\"psr-form__select psr-form__select--alt\">\n                    <option value=\"\" selected> Pick a category </option>\n                    <option [value]=\"category.id\" *ngFor=\"let category of categories\">{{ category.name }}</option>\n                </select>\n            </div>\n            <div>\n                <!-- <label class=\"psr-form__label\" for=\"sub-category\">Sub category</label> -->\n                <select formControlName=\"subCategory\" [disableControl]=\"isSubcategoryDisabled\" id=\"sub-category\"\n                        name=\"sub-category\" class=\"psr-form__select psr-form__select--alt\">\n                    <option value=\"\" selected> Pick a subcategory </option>\n                    <option [value]=\"subCategory.id\" *ngFor=\"let subCategory of subCategories\">{{ subCategory.name }}\n                    </option>\n                </select>\n            </div>\n        </div>\n    </form>\n</ng-container>\n", styles: [":host{@apply flex justify-end space-x-4;}\n"], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1$1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i1$1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i1$1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.DisableControlDirective, selector: "[disableControl]", inputs: ["disableControl"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFilterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-skill-filter',
                    templateUrl: './skill-filter.component.html',
                    styleUrls: ['./skill-filter.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.FormBuilder }]; }, propDecorators: { categories: [{
                type: Input
            }] } });

class SkillFilterModule {
}
SkillFilterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFilterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillFilterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFilterModule, declarations: [SkillFilterComponent], imports: [CommonModule,
        ReactiveFormsModule,
        DisableControlModule], exports: [SkillFilterComponent] });
SkillFilterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFilterModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            DisableControlModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFilterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SkillFilterComponent],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        DisableControlModule
                    ],
                    exports: [SkillFilterComponent]
                }]
        }] });

const SKILL_MGT_CONFIG_TOKEN = new InjectionToken("SKILL_MGT_CONFIG", {
    factory: () => ({})
});
const SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN = new InjectionToken("SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN");

class SkillListComponent {
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
SkillListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListComponent, deps: [{ token: i1$2.ActivatedRoute }, { token: i1$2.Router }, { token: PageTitleService }, { token: SkillMgtService }, { token: i3.AlertService }, { token: i0.NgZone }, { token: SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN }, { token: i2.SkillCardContextMenuitemService }], target: i0.ɵɵFactoryTarget.Component });
SkillListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillListComponent, selector: "app-skill-list", ngImport: i0, template: "<div class=\"pb-5\" *ngIf=\"isCategoryDetailsVisible\">\n    <div class=\"flex flex-wrap items-baseline -mt-2 -ml-2\">\n        <h3 class=\"mt-2 ml-2 text-lg font-medium leading-6 text-gray-700\">\n            Skills\n        </h3>\n        <p class=\"mt-1 ml-2 text-sm text-gray-500 truncate\">in\n            {{selectedCategoryName}}\n            <svg class=\"flex-shrink-0 inline-block w-5 h-5 text-gray-300\" xmlns=\"http://www.w3.org/2000/svg\"\n                 fill=\"currentColor\" viewBox=\"0 0 20 20\" aria-hidden=\"true\">\n                <path d=\"M5.555 17.776l8-16 .894.448-8 16-.894-.448z\" />\n            </svg>\n            {{selectedSubcategoryName}}\n        </p>\n    </div>\n</div>\n<skl-list-display [isAddSkillCardVisible]=\"isAddSkillCardVisible\" [isSkillsVisible]=\"isSkillsVisible\">\n    <skl-add-card (addSkillCardClick)=\"addSkillCardClickHandler()\"></skl-add-card>\n    <ng-container *ngFor=\"let skill of skills\">\n        <skl-card #skillCard [x-blockui]=\"skillCard.blockCard\" [x-overlay-tpl]=\"mask\" [skill]=\"skill\"\n                  [menuItems]=\"menuItems\"></skl-card>\n        <!-- (contextMenuItemEvent)=\"onCardItemEvent($event)\" -->\n    </ng-container>\n</skl-list-display>\n<ng-template #mask>\n    <div class=\"ui-blockui ui-widget-overlay\">\n        <svg class=\"w-12 h-12 text-gray-500\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"\n             xmlns=\"http://www.w3.org/2000/svg\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\n                  d=\"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\"></path>\n        </svg>\n    </div>\n</ng-template>\n<app-empty-state (addNewItem)=\"addSkillCardClickHandler()\" *ngIf=\"!isSkillsVisible\" [title]=\"emptyStateTitle\"\n                 [description]=\"emptyStateDescription\" [buttonLabel]=\"emptyStateButtonLabel\">\n</app-empty-state>\n", styles: [":host{display:block}\n"], components: [{ type: i2.SkillListDisplayComponent, selector: "skl-list-display", inputs: ["isAddSkillCardVisible", "isSkillsVisible"] }, { type: i2.AddSkillCardComponent, selector: "skl-add-card", outputs: ["addSkillCardClick"] }, { type: i2.SkillCardComponent, selector: "skl-card", inputs: ["skill", "menuItems"] }, { type: i3.EmptyStateComponent, selector: "app-empty-state", inputs: ["title", "description", "buttonLabel"], outputs: ["addNewItem"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.BlockUiDirective, selector: "[x-blockui]", inputs: ["x-target-el", "x-auto-zindex", "x-base-zindex", "x-blockui", "x-overlay-tpl"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-skill-list',
                    templateUrl: './skill-list.component.html',
                    styleUrls: ['./skill-list.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$2.ActivatedRoute }, { type: i1$2.Router }, { type: PageTitleService }, { type: SkillMgtService }, { type: i3.AlertService }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN]
                }] }, { type: i2.SkillCardContextMenuitemService }]; } });

class SkillListModule {
    static withConfig(config) {
        return {
            ngModule: SkillListModule,
            providers: [
                {
                    provide: SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN,
                    useValue: config
                }
            ]
        };
    }
}
SkillListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListModule, declarations: [SkillListComponent], imports: [CommonModule,
        EmptyStateModule,
        SkillListDisplayModule,
        AddSkillCardModule,
        SkillCardModule,
        BlockUiModule], exports: [SkillListComponent] });
SkillListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListModule, imports: [[
            CommonModule,
            EmptyStateModule,
            SkillListDisplayModule,
            AddSkillCardModule,
            SkillCardModule,
            BlockUiModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SkillListComponent],
                    imports: [
                        CommonModule,
                        EmptyStateModule,
                        SkillListDisplayModule,
                        AddSkillCardModule,
                        SkillCardModule,
                        BlockUiModule
                    ],
                    exports: [SkillListComponent]
                }]
        }] });

class SkillSubcategoryListComponent {
    constructor(route, router, pageTitle) {
        this.route = route;
        this.router = router;
        this.pageTitle = pageTitle;
        this.subcategories = [];
        this.pageTitle.updatePageTitle("Skill Subcategories");
        this.pageTitle.updatePageSubTitle("Choose a skill subcategory from the list below to see skills");
    }
    ngOnInit() {
        this.route.data.subscribe(({ subcategories }) => {
            this.subcategories = subcategories;
        });
    }
    onCardClick(subcategory) {
        // console.log(SkillMgtRoutes.ListSubcategories(category.id));
        // console.log(SkillMgtRoutes.ListSkills(category.categoryId, category.id));
        this.router.navigate(SkillMgtRoutes.ListSkills(subcategory.categoryId, subcategory.id));
    }
}
SkillSubcategoryListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryListComponent, deps: [{ token: i1$2.ActivatedRoute }, { token: i1$2.Router }, { token: PageTitleService }], target: i0.ɵɵFactoryTarget.Component });
SkillSubcategoryListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillSubcategoryListComponent, selector: "sklmgt-subcategory-list", ngImport: i0, template: "<!-- <p>skill-subcategory-list works!</p> -->\n<!-- { outlets: { primary: 'list', details: null } } -->\n<!-- <a [routerLink]=\"['/skills', 'list']\">List</a><br /> -->\n<!-- { outlets: { primary: 'categories', details: null } } -->\n<!-- <a [routerLink]=\"['/skills', 'categories']\">Categories</a> -->\n<ng-container *ngFor=\"let subcategory of subcategories\">\n    <skl-subcategory-card (onCardClick)=\"onCardClick(subcategory)\" [subcategory]=\"subcategory\">\n    </skl-subcategory-card>\n</ng-container>\n", styles: [":host{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));grid-auto-rows:minmax(150px,auto);grid-gap:2rem}\n"], components: [{ type: i2.SkillSubcategoryCardComponent, selector: "skl-subcategory-card", inputs: ["subcategory"], outputs: ["onCardClick"] }], directives: [{ type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sklmgt-subcategory-list',
                    templateUrl: './skill-subcategory-list.component.html',
                    styleUrls: ['./skill-subcategory-list.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$2.ActivatedRoute }, { type: i1$2.Router }, { type: PageTitleService }]; } });

class SkillSubcategoryListModule {
}
SkillSubcategoryListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillSubcategoryListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryListModule, declarations: [SkillSubcategoryListComponent], imports: [CommonModule,
        SkillSubcategoryCardModule], exports: [SkillSubcategoryListComponent] });
SkillSubcategoryListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryListModule, imports: [[
            CommonModule,
            SkillSubcategoryCardModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SkillSubcategoryListComponent],
                    imports: [
                        CommonModule,
                        SkillSubcategoryCardModule
                    ],
                    exports: [SkillSubcategoryListComponent]
                }]
        }] });

const breadcrumbConfig = [
    {
        name: "categories",
        label: "Categories",
        path: '/skills/categories',
        newRoute: '/skills/categories'
    },
    {
        name: "subcategories",
        label: "Sub categories",
        path: '/skills/subcategories',
        newRoute: '/skills/categories/:categoryId/subcategories'
    },
    {
        name: "list",
        label: "Skills",
        path: '/skills/list',
        newRoute: '/skills/categories/:categoryId/subcategories/:subcategoryId/list'
    },
];

const skillCardContextMenuConfig = [
    new MenuItem({
        name: 'skill-details',
        label: 'Skill detail',
        routerLink: (skillId) => (skillId && SkillMgtRoutes.ReadSkill(skillId)) || [],
        isIconVisible: true,
        iconComponent: IconEyeComponent
    }),
    new MenuItem({
        name: 'skill-edit',
        label: 'Edit skill',
        routerLink: (skillId) => (skillId && SkillMgtRoutes.EditSkill(skillId)) || [],
        isIconVisible: true,
        iconComponent: IconPencilComponent
    }),
    new MenuItem({
        name: 'skill-delete',
        label: 'Delete skill',
        routerLink: () => [],
        navigatable: false,
        isIconVisible: true,
        iconComponent: IconTrashComponent
    })
];

class IndexComponent {
    constructor(pageTitle, route, router, breadcrumbService, secondaryHeaderService, breadcrumbConfig) {
        this.pageTitle = pageTitle;
        this.route = route;
        this.router = router;
        this.breadcrumbService = breadcrumbService;
        this.secondaryHeaderService = secondaryHeaderService;
        this.breadcrumbConfig = breadcrumbConfig;
        this.categories = [];
        this.isSecondaryContentVisible = false;
        this.pageTitle$ = this.pageTitle.pageTitle$;
        this.pageSubTitle$ = this.pageTitle.pageSubTitle$;
        this._breadcrumbs$ = this.breadcrumbService;
    }
    get isBreadcrumbVisible() {
        return this.breadcrumbConfig.length > 0;
    }
    ngOnInit() {
        this.route.data.subscribe(({ resolverResult: { categories } }) => {
            this.categories = categories;
        });
        this.secondaryHeaderService.isCloseClicked$.subscribe((isCloseClicked) => {
            if (isCloseClicked) {
                this.router.navigate(['/skills', { outlets: { details: null } }]);
            }
        });
    }
    onDetailsRouterOutletActivate() {
        this.isSecondaryContentVisible = true;
        // console.log('activate');
    }
    onDetailsRouterOutletDeactivate() {
        this.isSecondaryContentVisible = false;
    }
    onPrimaryRouterOutletActivate() {
        // console.log('activate');
    }
    onPrimaryRouterOutletDeactivate() {
        // console.log('deactivate');
    }
    hamburgerMenuClickHandler() {
        // console.log('hamburgerMenuClickHandler');
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this._routerEventSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this._routeDataSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
IndexComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexComponent, deps: [{ token: PageTitleService }, { token: i1$2.ActivatedRoute }, { token: i1$2.Router }, { token: i3.BreadcrumbService }, { token: i3.SecondaryHeaderService }, { token: BREADCRUMB_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Component });
IndexComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: IndexComponent, selector: "app-index", providers: [PageTitleService], ngImport: i0, template: `
    <!-- <app-page-heading-layout>
        <h1 class="text-3xl font-bold text-gray-900">
          {{ pageTitle$ | async}}
        </h1>
    </app-page-heading-layout> -->
    <app-two-column-layout [isSecondaryContentVisible]="isSecondaryContentVisible" (hamburgerMenuClick)="hamburgerMenuClickHandler()">
    <!-- border-2 border-gray-200 border-dashed rounded-lg -->
    <!-- flex justify-between items-center -->
        <app-page-heading x-size="large" x-color="black" [title]="pageTitle$ | async" [description]="pageSubTitle$ | async"></app-page-heading>
        <div header-content class="">
            <h1 class="text-3xl font-bold text-gray-900">
              {{ pageTitle$ | async}}
            </h1>
            <p id="message-heading" class="text-lg font-normal text-gray-900">
              {{ pageSubTitle$ | async}}
            </p>
            <!-- <app-skill-filter [categories]="categories"></app-skill-filter> -->
        </div>
        <nav breadcrumb-content *ngIf="isBreadcrumbVisible" class="flex px-4 py-4 mx-auto border-b-2 border-gray-200 border-dashed max-w-7xl sm:px-6 lg:px-8" aria-label="Breadcrumb">
            <app-breadcrumb></app-breadcrumb>
        </nav>
        <router-outlet main-content
                (activate)="onPrimaryRouterOutletActivate()"
                (deactivate)="onPrimaryRouterOutletDeactivate()"></router-outlet>
        <router-outlet secondary-content
                (activate)="onDetailsRouterOutletActivate()"
                (deactivate)="onDetailsRouterOutletDeactivate()"
                name="details"></router-outlet>
    </app-two-column-layout>
  `, isInline: true, styles: ["\n      :host {\n        display: flex;\n        flex-direction: column;\n        flex: 1 1 0%;\n        height: 0px;\n        @apply border-l-2 border-r-2 border-gray-200 border-dashed;\n      }\n    "], components: [{ type: i3.TwoColumnLayoutComponent, selector: "app-two-column-layout", inputs: ["isSecondaryContentVisible"], outputs: ["hamburgerMenuClick"] }, { type: i3.PageHeadingComponent, selector: "app-page-heading", inputs: ["title", "description", "x-size", "x-color"] }, { type: i3.BreadcrumbComponent, selector: "app-breadcrumb" }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$2.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }], pipes: { "async": i4.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-index',
                    template: `
    <!-- <app-page-heading-layout>
        <h1 class="text-3xl font-bold text-gray-900">
          {{ pageTitle$ | async}}
        </h1>
    </app-page-heading-layout> -->
    <app-two-column-layout [isSecondaryContentVisible]="isSecondaryContentVisible" (hamburgerMenuClick)="hamburgerMenuClickHandler()">
    <!-- border-2 border-gray-200 border-dashed rounded-lg -->
    <!-- flex justify-between items-center -->
        <app-page-heading x-size="large" x-color="black" [title]="pageTitle$ | async" [description]="pageSubTitle$ | async"></app-page-heading>
        <div header-content class="">
            <h1 class="text-3xl font-bold text-gray-900">
              {{ pageTitle$ | async}}
            </h1>
            <p id="message-heading" class="text-lg font-normal text-gray-900">
              {{ pageSubTitle$ | async}}
            </p>
            <!-- <app-skill-filter [categories]="categories"></app-skill-filter> -->
        </div>
        <nav breadcrumb-content *ngIf="isBreadcrumbVisible" class="flex px-4 py-4 mx-auto border-b-2 border-gray-200 border-dashed max-w-7xl sm:px-6 lg:px-8" aria-label="Breadcrumb">
            <app-breadcrumb></app-breadcrumb>
        </nav>
        <router-outlet main-content
                (activate)="onPrimaryRouterOutletActivate()"
                (deactivate)="onPrimaryRouterOutletDeactivate()"></router-outlet>
        <router-outlet secondary-content
                (activate)="onDetailsRouterOutletActivate()"
                (deactivate)="onDetailsRouterOutletDeactivate()"
                name="details"></router-outlet>
    </app-two-column-layout>
  `,
                    styles: [
                        `
      :host {
        display: flex;
        flex-direction: column;
        flex: 1 1 0%;
        height: 0px;
        @apply border-l-2 border-r-2 border-gray-200 border-dashed;
      }
    `
                    ],
                    providers: [PageTitleService]
                }]
        }], ctorParameters: function () { return [{ type: PageTitleService }, { type: i1$2.ActivatedRoute }, { type: i1$2.Router }, { type: i3.BreadcrumbService }, { type: i3.SecondaryHeaderService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [BREADCRUMB_CONFIG_TOKEN]
                }] }]; } });

class IndexModule {
}
IndexModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IndexModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexModule, declarations: [IndexComponent], imports: [CommonModule,
        RouterModule,
        TwoColumnLayoutModule,
        PageHeadingModule,
        BreadcrumbModule], exports: [IndexComponent] });
IndexModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexModule, imports: [[
            CommonModule,
            RouterModule,
            TwoColumnLayoutModule,
            PageHeadingModule,
            BreadcrumbModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [IndexComponent],
                    imports: [
                        CommonModule,
                        RouterModule,
                        TwoColumnLayoutModule,
                        PageHeadingModule,
                        BreadcrumbModule
                    ],
                    exports: [IndexComponent]
                }]
        }] });

class IndexResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        return this.skillService.getCategories().pipe(map(response => ({
            "categories": response
        })));
    }
}
IndexResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexResolver, deps: [{ token: i2.SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
IndexResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexResolver });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexResolver, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.SkillsService }]; } });

const routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            { path: 'categories', component: SkillCategoryListComponent, resolve: { categories: SkillCategoryResolver }, data: { breadcrumb: 'categories' } },
            { path: 'categories/:categoryId/subcategories', component: SkillSubcategoryListComponent, resolve: { subcategories: SkillSubcategoryResolver }, data: { breadcrumb: 'subcategories' } },
            { path: 'categories/:categoryId/subcategories/:subcategoryId/list', component: SkillListComponent, resolve: { skills: SkillListResolver, selectedCategory: SelectedCategoryResolver, selectedSubcategory: SelectedSubcategoryResolver }, data: { breadcrumb: 'list' } },
            { path: 'read/:id', component: SkillReadComponent, outlet: 'details', resolve: { skill: SkillResolver } },
            { path: 'edit/:id', component: SkillEditComponent, outlet: 'details', resolve: { skill: SkillResolver, categories: SkillCategoryResolver } },
            { path: 'add/:categoryId/:subcategoryId', component: SkillAddComponent, outlet: 'details', resolve: { categories: SkillAddResolver } },
            { path: '**', redirectTo: 'categories', pathMatch: 'full' }
        ],
        resolve: { resolverResult: IndexResolver }
    }
];
class SkillMgtRoutingModule {
}
SkillMgtRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillMgtRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillMgtRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillMgtRoutingModule, imports: [i1$2.RouterModule], exports: [RouterModule] });
SkillMgtRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillMgtRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillMgtRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });

class SkillmgtlibModule {
    static withConfig(config) {
        return {
            ngModule: BreadcrumbModule,
            providers: [
                {
                    provide: SKILL_MGT_CONFIG_TOKEN,
                    useValue: config || {}
                }
            ]
        };
    }
}
SkillmgtlibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillmgtlibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillmgtlibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillmgtlibModule, imports: [SharedlibModule, i3.BreadcrumbModule, SkillMgtRoutingModule,
        IndexModule,
        SkillAddModule,
        SkillEditModule,
        SkillFilterModule, SkillListModule] });
SkillmgtlibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillmgtlibModule, providers: [
        PageTitleService,
        IndexResolver,
    ], imports: [[
            SharedlibModule,
            BreadcrumbModule.withConfig(breadcrumbConfig || []),
            SkillMgtRoutingModule,
            IndexModule,
            SkillAddModule,
            SkillEditModule,
            SkillFilterModule,
            SkillListModule.withConfig(skillCardContextMenuConfig)
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillmgtlibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        SharedlibModule,
                        BreadcrumbModule.withConfig(breadcrumbConfig || []),
                        SkillMgtRoutingModule,
                        IndexModule,
                        SkillAddModule,
                        SkillEditModule,
                        SkillFilterModule,
                        SkillListModule.withConfig(skillCardContextMenuConfig)
                    ],
                    providers: [
                        PageTitleService,
                        IndexResolver,
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { IndexComponent, IndexModule, IndexResolver, PageTitleService, SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN, SKILL_MGT_CONFIG_TOKEN, SkillAddComponent, SkillAddModule, SkillCategoryListComponent, SkillCategoryListModule, SkillEditComponent, SkillEditModule, SkillFilterComponent, SkillFilterModule, SkillListComponent, SkillListModule, SkillMgtEndpoints, SkillMgtRoutes, SkillMgtRoutingModule, SkillMgtService, SkillSubcategoryListComponent, SkillSubcategoryListModule, SkillmgtlibModule, breadcrumbConfig, skillCardContextMenuConfig };
//# sourceMappingURL=skillmgtlib.js.map
