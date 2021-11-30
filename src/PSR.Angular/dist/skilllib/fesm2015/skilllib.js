import * as i0 from '@angular/core';
import { Injectable, Inject, InjectionToken, EventEmitter, Component, Output, NgModule, HostBinding, Input, HostListener, ContentChildren } from '@angular/core';
import { of, zip, Subject } from 'rxjs';
import { pluck, switchMap, take, map, startWith, filter, debounceTime } from 'rxjs/operators';
import { APP_CONFIG_TOKEN } from '@corelib';
import * as i1 from '@angular/common/http';
import * as i1$2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@sharedlib';
import { BlockUiDirective, ButtonIconModule, IconsModule, ContextMenuModule, DisableControlModule, BlockUiModule, EmptyStateModule, ReadFieldModule, SecondaryHeaderModule } from '@sharedlib';
import * as i1$1 from '@angular/router';
import * as i1$3 from '@angular/forms';
import { Validators, ReactiveFormsModule } from '@angular/forms';

let endpoints = {
    GetSkills: (config) => config.getUrl(`skills`),
    GetSkillsByCategoryAndSubcategory: (config, categoryId, subcategoryId) => {
        return config.getUrl(`skills/categories/${categoryId}/subcategories/${subcategoryId}/list`);
    },
    GetSkill: (config, id) => config.getUrl(`skills/${id}`),
    GetSkillCategories: (config) => config.getUrl(`skills/categories`),
    GetSkillSubCategories: (config, categoryId) => config.getUrl(`skills/categories/${categoryId}/subcategories`),
    GetSkillCategory: (config, id) => config.getUrl(`skills/categories/${id}`),
    GetSkillSubcategory: (config, id) => config.getUrl(`skills/subcategories/${id}`),
};
const SkillEndpoints = endpoints;

class SkillsService {
    constructor(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    getSkills() {
        return this.http.get(SkillEndpoints.GetSkills(this.appConfig)).pipe(
        // shareReplay()
        );
    }
    getSkillsByCategoryAndSubcategory(categoryId, subcategoryId) {
        return this.http.get(SkillEndpoints.GetSkillsByCategoryAndSubcategory(this.appConfig, categoryId, subcategoryId)).pipe(
        // shareReplay()
        );
    }
    getSkill(id) {
        return this.http.get(SkillEndpoints.GetSkill(this.appConfig, id)).pipe(
        // shareReplay()
        );
    }
    getCategory(id) {
        return this.http.get(SkillEndpoints.GetSkillCategory(this.appConfig, id)).pipe(
        // shareReplay()
        );
    }
    getSubcategory(id) {
        return this.http.get(SkillEndpoints.GetSkillSubcategory(this.appConfig, id)).pipe(
        // shareReplay()
        );
    }
    getCategories() {
        return this.http.get(SkillEndpoints.GetSkillCategories(this.appConfig)).pipe(
        // shareReplay()
        );
    }
    getSubCategories(categoryId) {
        return this.http.get(SkillEndpoints.GetSkillSubCategories(this.appConfig, categoryId)).pipe(
        // shareReplay()
        );
    }
}
SkillsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillsService, deps: [{ token: i1.HttpClient }, { token: APP_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
SkillsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }]; } });

class SelectedCategoryResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        return of(route.params).pipe(pluck('categoryId'), switchMap((categoryId) => this.skillService.getCategory(categoryId)));
    }
}
SelectedCategoryResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SelectedCategoryResolver, deps: [{ token: SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
SelectedCategoryResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SelectedCategoryResolver, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SelectedCategoryResolver, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: SkillsService }]; } });

class SelectedSubcategoryResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        return of(route.params).pipe(pluck('subcategoryId'), switchMap((subcategoryId) => this.skillService.getSubcategory(subcategoryId)));
    }
}
SelectedSubcategoryResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SelectedSubcategoryResolver, deps: [{ token: SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
SelectedSubcategoryResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SelectedSubcategoryResolver, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SelectedSubcategoryResolver, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: SkillsService }]; } });

class SkillAddResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        var _a, _b, _c;
        const categories = (_c = (_b = (_a = route.parent) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.resolverResult) === null || _c === void 0 ? void 0 : _c.categories;
        return categories
            ? of(categories)
            : this.skillService.getCategories();
    }
}
SkillAddResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillAddResolver, deps: [{ token: SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
SkillAddResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillAddResolver });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillAddResolver, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: SkillsService }]; } });

class SkillCategoryResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        var _a, _b, _c;
        const categories = (_c = (_b = (_a = route.parent) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.resolverResult) === null || _c === void 0 ? void 0 : _c.categories;
        return categories
            ? of(categories)
            : this.skillService.getCategories();
    }
}
SkillCategoryResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryResolver, deps: [{ token: SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
SkillCategoryResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryResolver });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryResolver, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: SkillsService }]; } });

class SkillEditResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        var _a, _b, _c;
        const categories = (_c = (_b = (_a = route.parent) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.resolverResult) === null || _c === void 0 ? void 0 : _c.categories;
        const categories$ = categories ? of(categories) : this.skillService.getCategories();
        const skill$ = of(route.params).pipe(pluck('id'), switchMap(id => this.skillService.getSkill(id)), take(1));
        return zip(categories$, skill$);
    }
}
SkillEditResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditResolver, deps: [{ token: SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
SkillEditResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditResolver, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditResolver, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: SkillsService }]; } });

class SkillListResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        return of(route.params).pipe(map(({ categoryId, subcategoryId }) => ({ categoryId, subcategoryId })), switchMap(params => this.skillService.getSkillsByCategoryAndSubcategory(params.categoryId, params.subcategoryId)), take(1));
    }
}
SkillListResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListResolver, deps: [{ token: SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
SkillListResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListResolver });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListResolver, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: SkillsService }]; } });

class SkillSubcategoryResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        return of(route.params).pipe(pluck('categoryId'), switchMap(id => this.skillService.getSubCategories(id)), take(1));
    }
}
SkillSubcategoryResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryResolver, deps: [{ token: SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
SkillSubcategoryResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryResolver });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryResolver, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: SkillsService }]; } });

class SkillResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        return of(route.params).pipe(pluck('id'), switchMap(id => this.skillService.getSkill(id)), take(1));
        // return this.skillService.getSkill();
    }
}
SkillResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillResolver, deps: [{ token: SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
SkillResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillResolver });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillResolver, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: SkillsService }]; } });

class SkillCardContextMenuitemService {
    constructor() {
        this._eventStartSubject = new Subject();
        this._eventCompleteSubject = new Subject();
    }
    get onEventStart$() {
        return this._eventStartSubject.asObservable();
    }
    get onEventComplete$() {
        return this._eventCompleteSubject.asObservable();
    }
    start(skillId, menuName) {
        this._eventStartSubject.next({ skillId, menuName });
    }
    complete(skillId, menuName) {
        this._eventCompleteSubject.next({ skillId, menuName });
    }
}
SkillCardContextMenuitemService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCardContextMenuitemService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SkillCardContextMenuitemService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCardContextMenuitemService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCardContextMenuitemService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class SkillFormService {
    constructor() {
        this._resetFormSubject = new Subject();
    }
    get resetForm$() {
        return this._resetFormSubject.asObservable();
    }
    resetForm() {
        this._resetFormSubject.next();
    }
}
SkillFormService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFormService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SkillFormService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFormService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFormService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

const SKILL_CARD_TOKEN = new InjectionToken('SKILL_CARD_TOKEN');

class AddSkillCardComponent {
    constructor() {
        this.addSkillCardClick = new EventEmitter();
        this.blockCard = false;
        this.blockable = false;
        this.type = 'add';
    }
    ngOnInit() {
    }
    addSkillCardClickHandler() {
        this.addSkillCardClick.emit();
    }
    onFocus() {
        console.log('onFocus');
    }
}
AddSkillCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AddSkillCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AddSkillCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: AddSkillCardComponent, selector: "skl-add-card", outputs: { addSkillCardClick: "addSkillCardClick" }, providers: [{ provide: SKILL_CARD_TOKEN, useExisting: AddSkillCardComponent }], ngImport: i0, template: "<div tabindex=\"0\" (click)=\"addSkillCardClickHandler()\"\n     class=\"flex flex-col items-center justify-center h-full p-4 space-y-4 text-left text-indigo-500 bg-white border border-gray-100 rounded-lg shadow hover:border-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500\">\n    <svg class=\"w-16 h-16\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\n              d=\"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z\"></path>\n    </svg>\n    <h3>Add New Skill</h3>\n</div>\n", styles: [":host{display:block;width:100%;min-height:190px;cursor:pointer}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AddSkillCardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'skl-add-card',
                    templateUrl: './add-skill-card.component.html',
                    styleUrls: ['./add-skill-card.component.scss'],
                    providers: [{ provide: SKILL_CARD_TOKEN, useExisting: AddSkillCardComponent }],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { addSkillCardClick: [{
                type: Output
            }] } });

class AddSkillCardModule {
}
AddSkillCardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AddSkillCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AddSkillCardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AddSkillCardModule, declarations: [AddSkillCardComponent], imports: [CommonModule], exports: [AddSkillCardComponent] });
AddSkillCardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AddSkillCardModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AddSkillCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AddSkillCardComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [AddSkillCardComponent]
                }]
        }] });

class SkillCardComponent {
    constructor(el, router, renderer, ctxMenuItem) {
        this.el = el;
        this.router = router;
        this.renderer = renderer;
        this.ctxMenuItem = ctxMenuItem;
        this.blockUiDirective = new BlockUiDirective(this.el, this.renderer);
        this.menuItems = [];
        this._blockCard = false;
        // @Output() skillCardClick = new EventEmitter<ISkill>();
        this.isContextMenuVisible = false;
        this.contextMenuHandle = Symbol('contextMenuHandle');
        this.type = 'overview';
        this._eventComplete$ = this.ctxMenuItem.onEventComplete$;
    }
    set blockCard(value) {
        this._blockCard = value;
        // this.cdr.markForCheck();
        this.blockUiDirective.toggleBlockUi(value);
    }
    get blockCard() {
        return this._blockCard;
    }
    ngOnInit() { }
    getCategoryInfo(skill) {
        return `${skill.categoryName} / ${skill.subcategoryName}`;
    }
    onHandleEscape(e) {
        if (e.key === 'Esc' || e.key === 'Escape') {
            if (this.isContextMenuVisible)
                this.isContextMenuVisible = false;
        }
    }
    onToggleContextMenu() {
        this.isContextMenuVisible = !this.isContextMenuVisible;
    }
    onMenuItemClick({ menuItem, handle }) {
        var _a;
        const routerLink = menuItem.routerLink((_a = this.skill) === null || _a === void 0 ? void 0 : _a.id);
        if (menuItem.navigatable) {
            Array.isArray(routerLink)
                ? this.router.navigate(routerLink)
                : this.router.navigateByUrl(routerLink);
        }
        else {
            this.blockCard = true;
            this.skill && this.ctxMenuItem.start(this.skill.id, menuItem.name);
        }
        this._eventComplete$.subscribe(({ skillId, menuName }) => {
            if (this.skill && this.skill.id === skillId) {
                this.blockCard = false;
            }
        });
        this.isContextMenuVisible = false;
    }
    ngOnDestroy() {
        var _a;
        this.blockUiDirective.ngOnDestroy();
        (_a = this._eventCompleteSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
SkillCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCardComponent, deps: [{ token: i0.ElementRef }, { token: i1$1.Router }, { token: i0.Renderer2 }, { token: SkillCardContextMenuitemService }], target: i0.ɵɵFactoryTarget.Component });
SkillCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillCardComponent, selector: "skl-card", inputs: { skill: "skill", menuItems: "menuItems" }, host: { listeners: { "document:keydown": "onHandleEscape($event)" }, properties: { "attr.xBlockui": "this.blockUiDirective" } }, providers: [{ provide: SKILL_CARD_TOKEN, useExisting: SkillCardComponent }], ngImport: i0, template: "<ng-container *ngIf=\"skill\">\n    <!-- (click)=\"skillCardClickHandler(skill)\" -->\n    <div tabindex=\"0\"\n         class=\"relative flex flex-col justify-between h-full p-4 space-y-4 text-left border border-gray-200 rounded-lg hover:border-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-500\">\n        <h3 class=\"text-lg font-medium text-gray-700\">{{ skill.name}}</h3>\n        <div class=\"skill-stats\">\n            <div class=\"skill-stats__info\">\n                <span\n                      class=\"mr-4 text-xs font-thin text-gray-500 transition-colors duration-200 hover:text-gray-900\">Employees</span>\n                <span class=\"text-xl font-normal text-gray-700\">{{ skill.employees }}</span>\n            </div>\n            <div class=\"skill-stats__info\">\n                <span\n                      class=\"mr-4 text-xs font-thin text-gray-500 transition-colors duration-200 hover:text-gray-900\">Team\n                    Competency</span>\n                <span class=\"text-xl font-normal text-gray-700\">{{ skill.teamCompetency }}</span>\n            </div>\n        </div>\n        <div class=\"flex items-center h-5\">\n            <span title=\"{{getCategoryInfo(skill)}}\"\n                  class=\"flex-1 pr-2 text-sm font-thin text-gray-500 truncate\">{{getCategoryInfo(skill)}}</span>\n            <div class=\"relative\">\n                <app-button-icon (buttonClick)=\"onToggleContextMenu()\">\n                    <app-icon-dot-vertical></app-icon-dot-vertical>\n                </app-button-icon>\n                <button *ngIf=\"isContextMenuVisible\" (click)=\"onToggleContextMenu()\" class=\"close-overlay\"\n                        tabindex=\"-1\"></button>\n                <app-context-menu [handle]=\"contextMenuHandle\" *ngIf=\"isContextMenuVisible\"\n                                  (menuItemClick)=\"onMenuItemClick($event)\" [menuItems]=\"menuItems\"\n                                  class=\"absolute right-0 w-40\"></app-context-menu>\n            </div>\n        </div>\n    </div>\n    <!-- <ng-container #blockUiOverlay></ng-container> -->\n</ng-container>\n", styles: [":host{display:block;position:relative;width:100%;min-height:190px;cursor:pointer;--eui-blockui-overlay-border-radius: .5rem;--eui-blockui-cursor: wait;--eui-blockui-background-color: rgba(255, 255, 255, .7)}.skill-stats{display:flex;flex-wrap:wrap}.skill-stats__info{display:flex;flex-direction:column;flex:none}\n"], components: [{ type: i3.ButtonIconComponent, selector: "app-button-icon", inputs: ["ariaLabel"], outputs: ["buttonClick"] }, { type: i3.IconDotVerticalComponent, selector: "app-icon-dot-vertical" }, { type: i3.ContextMenuComponent, selector: "app-context-menu", inputs: ["handle", "menuItems"], outputs: ["menuItemClick"] }], directives: [{ type: i1$2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'skl-card',
                    templateUrl: './skill-card.component.html',
                    styleUrls: ['./skill-card.component.scss'],
                    providers: [{ provide: SKILL_CARD_TOKEN, useExisting: SkillCardComponent }],
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1$1.Router }, { type: i0.Renderer2 }, { type: SkillCardContextMenuitemService }]; }, propDecorators: { blockUiDirective: [{
                type: HostBinding,
                args: ['attr.xBlockui']
            }], skill: [{
                type: Input
            }], menuItems: [{
                type: Input
            }], onHandleEscape: [{
                type: HostListener,
                args: ['document:keydown', ['$event']]
            }] } });

class SkillCardModule {
}
SkillCardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillCardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCardModule, declarations: [SkillCardComponent], imports: [CommonModule,
        ButtonIconModule,
        IconsModule,
        ContextMenuModule], exports: [SkillCardComponent] });
SkillCardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCardModule, imports: [[
            CommonModule,
            ButtonIconModule,
            IconsModule,
            ContextMenuModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SkillCardComponent],
                    imports: [
                        CommonModule,
                        ButtonIconModule,
                        IconsModule,
                        ContextMenuModule
                    ],
                    exports: [SkillCardComponent]
                }]
        }] });

// export * from './skill-card.model';

class SkillCategoryCardComponent {
    constructor() {
        this.onCardClick = new EventEmitter();
    }
    ngOnInit() {
    }
    onCardClickHandler(category) {
        this.onCardClick.emit(category);
    }
}
SkillCategoryCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SkillCategoryCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillCategoryCardComponent, selector: "skl-category-card", inputs: { category: "category" }, outputs: { onCardClick: "onCardClick" }, ngImport: i0, template: "<ng-container *ngIf=\"category\">\n    <div tabindex=\"0\" (click)=\"onCardClickHandler(category)\"\n         class=\"flex flex-col justify-between h-full p-4 space-y-4 text-left border border-gray-200 rounded-lg hover:border-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-500\">\n        <h3 class=\"text-lg font-medium text-gray-700\">{{ category.name}}</h3>\n    </div>\n</ng-container>\n", styles: [":host{display:block;width:100%;cursor:pointer}\n"], directives: [{ type: i1$2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryCardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'skl-category-card',
                    templateUrl: './skill-category-card.component.html',
                    styleUrls: ['./skill-category-card.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { category: [{
                type: Input
            }], onCardClick: [{
                type: Output
            }] } });

class SkillCategoryCardModule {
}
SkillCategoryCardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillCategoryCardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryCardModule, declarations: [SkillCategoryCardComponent], imports: [CommonModule], exports: [SkillCategoryCardComponent] });
SkillCategoryCardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryCardModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SkillCategoryCardComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [SkillCategoryCardComponent]
                }]
        }] });

class SkillFormComponent {
    constructor(fb, route, router, skillService, skillFormService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.skillService = skillService;
        this.skillFormService = skillFormService;
        this.formIsValid = false;
        this.isSubcategoryDisabled = true;
        this.categories = [];
        this.subcategories = [];
        this.buttonLabel = 'Save';
        this.commitSkill = new EventEmitter();
        this._resetForm$ = this.skillFormService.resetForm$;
    }
    // ngOnInit is called before set skill
    set skill(skill) {
        this._skill = skill;
        this.initForm(this._skill);
    }
    get nameControl() { var _a; return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get('name'); }
    get categoryControl() { var _a; return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get('categoryId'); }
    get subcategoryControl() { var _a; return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get('subcategoryId'); }
    ngOnInit() {
        this.initForm(this._skill);
        // this.listenCategoryValueChange();
        this.listenFormStatusChange();
        this.listenFormReset();
    }
    initForm(skill) {
        if (!this.form) {
            this.form = this.fb.group({
                name: [(skill === null || skill === void 0 ? void 0 : skill.name) || '', [Validators.required, Validators.minLength(3)]],
                // categoryId: [skill?.categoryId || '', [Validators.required]],
                // subcategoryId: [skill?.subcategoryId || '', [Validators.required]],
            });
            return;
        }
        // console.log('initForm', skill);
        this.form.setValue({
            name: (skill === null || skill === void 0 ? void 0 : skill.name) || '',
            // categoryId: skill?.categoryId || '',
            // subcategoryId: skill?.subcategoryId || '',
        });
        // this.categoryControl.disable();
        // this.subcategoryControl.disable();
    }
    onCommitSkill() {
        var _a, _b, _c, _d, _e, _f, _g;
        if (this.formIsValid && ((_a = this.form) === null || _a === void 0 ? void 0 : _a.valid)) {
            this.commitSkill.emit(((_b = this._skill) === null || _b === void 0 ? void 0 : _b.id)
                ? Object.assign(Object.assign({}, this.form.value), { categoryId: (_c = this._skill) === null || _c === void 0 ? void 0 : _c.categoryId, subcategoryId: (_d = this._skill) === null || _d === void 0 ? void 0 : _d.subcategoryId, id: this._skill.id }) : Object.assign(Object.assign({}, this.form.value), { categoryId: (_e = this._skill) === null || _e === void 0 ? void 0 : _e.categoryId, subcategoryId: (_f = this._skill) === null || _f === void 0 ? void 0 : _f.subcategoryId }));
            // this.commitSkill.emit(this.form.value);
        }
        else {
            (_g = this.form) === null || _g === void 0 ? void 0 : _g.markAllAsTouched();
        }
    }
    listenCategoryValueChange() {
        var _a;
        this._categoryValueChangeSub = this.categoryControl.valueChanges
            .pipe(startWith((_a = this._skill) === null || _a === void 0 ? void 0 : _a.categoryId), filter(categoryId => !!categoryId), switchMap(categoryId => this.skillService.getSubCategories(categoryId)))
            .subscribe(subCategories => {
            var _a;
            this.subcategories = subCategories;
            this.subcategoryControl.patchValue(((_a = this._skill) === null || _a === void 0 ? void 0 : _a.subcategoryId) || '');
            // this.isSubcategoryDisabled = false;
            // this.subcategoryControl.enable();
        });
    }
    listenFormStatusChange() {
        var _a;
        this._formStatusChangeSub = (_a = this.form) === null || _a === void 0 ? void 0 : _a.statusChanges.pipe(
        /**
         * The Debouncetime emits the last received value
         * from the source observable after a specified amount
         * of time has elapsed without any other value appearing
         * on the source Observable
         */
        debounceTime(100)).subscribe(formStatus => {
            if (formStatus === "INVALID" || formStatus === "PENDING")
                this.formIsValid = false;
            else
                this.formIsValid = true;
        });
    }
    listenFormReset() {
        this._resetForm$.subscribe(() => {
            var _a;
            (_a = this.form) === null || _a === void 0 ? void 0 : _a.reset();
        });
    }
    onCategoryChange(e) {
        // this.isSubcategoryDisabled = true;
        this.subcategoryControl.disable();
    }
    onCloseClick() {
        this.router.navigate(['/skills', { outlets: { details: null } }]);
    }
    ngOnDestroy() {
        var _a, _b, _c;
        (_a = this._categoryValueChangeSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this._formStatusChangeSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this._routeDataSub) === null || _c === void 0 ? void 0 : _c.unsubscribe();
    }
}
SkillFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFormComponent, deps: [{ token: i1$3.FormBuilder }, { token: i1$1.ActivatedRoute }, { token: i1$1.Router }, { token: SkillsService }, { token: SkillFormService }], target: i0.ɵɵFactoryTarget.Component });
SkillFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillFormComponent, selector: "skl-form", inputs: { categories: "categories", subcategories: "subcategories", buttonLabel: "buttonLabel", skill: "skill" }, outputs: { commitSkill: "commitSkill" }, ngImport: i0, template: "<div class=\"flex flex-col py-5 space-y-6 border-t border-gray-200\">\n    <ng-container *ngIf=\"form\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"onCommitSkill()\" class=\"psr-form__form\">\n            <div>\n                <label class=\"psr-form__label\" for=\"name\">Skill name</label>\n                <input formControlName=\"name\" id=\"name\" name=\"name\" type=\"text\"\n                       class=\"psr-form__field psr-form__field--alt\" placeholder=\"\" />\n            </div>\n            <!-- <div>\n                <label class=\"psr-form__label\" for=\"category\">Category</label>\n                <select formControlName=\"categoryId\" (change)=\"onCategoryChange($event)\" id=\"category\" name=\"category\"\n                        class=\"psr-form__select psr-form__select--alt\">\n                    <option value=\"\" selected> -- </option>\n                    <option [value]=\"category.id\" *ngFor=\"let category of categories\">{{ category.name }}\n                    </option>\n                </select>\n            </div>\n            <div>\n                <label class=\"psr-form__label\" for=\"sub-category\">Sub category</label>\n                <select formControlName=\"subcategoryId\" [disableControl]=\"isSubcategoryDisabled\" id=\"sub-category\" name=\"sub-category\"\n                        class=\"psr-form__select psr-form__select--alt\">\n                    <option value=\"\" selected> -- </option>\n                    <option [value]=\"item.id\" *ngFor=\"let item of subcategories\">{{ item.name }}\n                    </option>\n                </select>\n            </div> -->\n            <div>\n                <button [disabled]=\"!formIsValid\" class=\"psr-form__button\" type=\"submit\">\n                    {{buttonLabel}}\n                </button>\n            </div>\n        </form>\n    </ng-container>\n</div>\n", styles: [":host{display:block}\n"], directives: [{ type: i1$2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1$3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$3.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFormComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'skl-form',
                    templateUrl: './skill-form.component.html',
                    styleUrls: ['./skill-form.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$3.FormBuilder }, { type: i1$1.ActivatedRoute }, { type: i1$1.Router }, { type: SkillsService }, { type: SkillFormService }]; }, propDecorators: { categories: [{
                type: Input
            }], subcategories: [{
                type: Input
            }], buttonLabel: [{
                type: Input
            }], skill: [{
                type: Input
            }], commitSkill: [{
                type: Output
            }] } });

class SkillFormModule {
}
SkillFormModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillFormModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFormModule, declarations: [SkillFormComponent], imports: [CommonModule,
        ReactiveFormsModule,
        DisableControlModule], exports: [SkillFormComponent] });
SkillFormModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFormModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            DisableControlModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFormModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SkillFormComponent
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        DisableControlModule
                    ],
                    exports: [SkillFormComponent]
                }]
        }] });

class SkillListDisplayComponent {
    constructor() {
        this.isAddSkillCardVisible = false;
        this.isSkillsVisible = false;
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        // console.log('this.cards', this.cards?.toArray());
    }
    /* isBlockableSkillCard(componentRef: any): componentRef is IBlockableSkillCard {
        const prototype = Object.getPrototypeOf(componentRef);
        // console.log(prototype);
        return 'initView' in prototype
            && 'ngOnDestroy' in prototype;
    } */
    ngOnDestroy() {
    }
}
SkillListDisplayComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListDisplayComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SkillListDisplayComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillListDisplayComponent, selector: "skl-list-display", inputs: { isAddSkillCardVisible: "isAddSkillCardVisible", isSkillsVisible: "isSkillsVisible" }, queries: [{ propertyName: "cards", predicate: SKILL_CARD_TOKEN }], ngImport: i0, template: "<div class=\"skill-list\">\n    <ng-container *ngIf=\"isSkillsVisible\">\n        <!-- <skl-add-card *ngIf=\"isAddSkillCardVisible\" (addSkillCardClick)=\"addSkillCardClickHandler()\">\n        </skl-add-card>\n        <ng-container #skillListContainer></ng-container> -->\n        <ng-content></ng-content>\n\n    </ng-container>\n    <ng-template #mask>\n        <div class=\"ui-blockui ui-widget-overlay\">\n            <svg class=\"w-12 h-12 text-gray-500\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"\n                 xmlns=\"http://www.w3.org/2000/svg\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\n                      d=\"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\"></path>\n            </svg>\n        </div>\n    </ng-template>\n</div>\n<!-- <ng-container *ngFor=\"let skill of skills\"> -->\n<!-- (skillCardClick)=\"skillCardClickHandler($event)\" [x-compref]=\"skillCard\"  -->\n<!-- <skl-card #skillCard [menuItems]=\"menuItems\" [x-blockui]=\"skillCard.blockCard\" [x-overlay-tpl]=\"mask\"\n                            [skill]=\"skill\" (contextMenuItemEvent)=\"onCardItemEvent($event)\"></skl-card> -->\n<!-- <app-block-ui class=\"hidden\" [target]=\"skillCard\" [blocked]=\"skill?.deleting || false\"></app-block-ui> -->\n<!-- </ng-container> -->\n", styles: [":host{display:block}.skill-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-gap:2rem}\n"], directives: [{ type: i1$2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListDisplayComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'skl-list-display',
                    templateUrl: './skill-list-display.component.html',
                    styleUrls: ['./skill-list-display.component.scss'],
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { cards: [{
                type: ContentChildren,
                args: [SKILL_CARD_TOKEN]
            }], isAddSkillCardVisible: [{
                type: Input
            }], isSkillsVisible: [{
                type: Input
            }] } });

class SkillListDisplayModule {
}
SkillListDisplayModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListDisplayModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillListDisplayModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListDisplayModule, declarations: [SkillListDisplayComponent], imports: [CommonModule,
        BlockUiModule,
        EmptyStateModule,
        AddSkillCardModule,
        SkillCardModule], exports: [SkillListDisplayComponent] });
SkillListDisplayModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListDisplayModule, imports: [[
            CommonModule,
            BlockUiModule,
            EmptyStateModule,
            AddSkillCardModule,
            SkillCardModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListDisplayModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SkillListDisplayComponent],
                    imports: [
                        CommonModule,
                        BlockUiModule,
                        EmptyStateModule,
                        AddSkillCardModule,
                        SkillCardModule,
                    ],
                    exports: [SkillListDisplayComponent]
                }]
        }] });

class SkillReadComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'Skill Information';
        this.description = 'Detils of the skill.';
    }
    ngOnInit() {
        this.route.data.subscribe(({ skill }) => {
            this.skill = skill;
        });
    }
    onCloseClick() {
        this.router.navigate(['/skills', { outlets: { details: null } }]);
    }
}
SkillReadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillReadComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Component });
SkillReadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillReadComponent, selector: "skl-read", ngImport: i0, template: "<app-secondary-header [title]=\"title\" [description]=\"description\" (closeClick)=\"onCloseClick()\"></app-secondary-header>\n<ng-container *ngIf=\"skill\">\n    <div class=\"flex flex-col py-5 space-y-6\">\n        <app-read-field [fieldLabel]=\"'Skill name'\" [fieldValue]=\"skill.name\"></app-read-field>\n        <app-read-field [fieldLabel]=\"'Category'\" [fieldValue]=\"skill.categoryName\"></app-read-field>\n        <app-read-field [fieldLabel]=\"'Sub category'\" [fieldValue]=\"skill.subcategoryName\"></app-read-field>\n        <app-read-field [fieldLabel]=\"'Employees'\" [fieldValue]=\"skill.employees\"></app-read-field>\n        <app-read-field [fieldLabel]=\"'Team competency'\" [fieldValue]=\"skill.teamCompetency\"></app-read-field>\n    </div>\n</ng-container>\n", styles: [":host{display:block}\n"], components: [{ type: i3.SecondaryHeaderComponent, selector: "app-secondary-header", inputs: ["title", "description"], outputs: ["closeClick"] }, { type: i3.ReadFieldComponent, selector: "app-read-field", inputs: ["fieldLabel", "fieldValue"] }], directives: [{ type: i1$2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillReadComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'skl-read',
                    templateUrl: './skill-read.component.html',
                    styleUrls: ['./skill-read.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: i1$1.Router }]; } });

class SkillReadModule {
}
SkillReadModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillReadModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillReadModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillReadModule, declarations: [SkillReadComponent], imports: [CommonModule,
        ReadFieldModule,
        SecondaryHeaderModule], exports: [SkillReadComponent] });
SkillReadModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillReadModule, imports: [[
            CommonModule,
            ReadFieldModule,
            SecondaryHeaderModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillReadModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SkillReadComponent],
                    imports: [
                        CommonModule,
                        ReadFieldModule,
                        SecondaryHeaderModule
                    ],
                    exports: [SkillReadComponent]
                }]
        }] });

class SkillSubcategoryCardComponent {
    constructor() {
        this.onCardClick = new EventEmitter();
    }
    ngOnInit() {
    }
    onCardClickHandler(subcategory) {
        this.onCardClick.emit(subcategory);
    }
}
SkillSubcategoryCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SkillSubcategoryCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillSubcategoryCardComponent, selector: "skl-subcategory-card", inputs: { subcategory: "subcategory" }, outputs: { onCardClick: "onCardClick" }, ngImport: i0, template: "<ng-container *ngIf=\"subcategory\">\n    <div tabindex=\"0\" (click)=\"onCardClickHandler(subcategory)\"\n         class=\"flex flex-col justify-between h-full p-4 space-y-4 text-left border border-gray-200 rounded-lg hover:border-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-500\">\n        <h3 class=\"text-lg font-medium text-gray-700\">{{ subcategory.name}}</h3>\n    </div>\n</ng-container>\n", styles: [":host{display:block;width:100%;cursor:pointer}\n"], directives: [{ type: i1$2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryCardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'skl-subcategory-card',
                    templateUrl: './skill-subcategory-card.component.html',
                    styleUrls: ['./skill-subcategory-card.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { subcategory: [{
                type: Input
            }], onCardClick: [{
                type: Output
            }] } });

class SkillSubcategoryCardModule {
}
SkillSubcategoryCardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillSubcategoryCardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryCardModule, declarations: [SkillSubcategoryCardComponent], imports: [CommonModule], exports: [SkillSubcategoryCardComponent] });
SkillSubcategoryCardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryCardModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SkillSubcategoryCardComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [SkillSubcategoryCardComponent]
                }]
        }] });

class SkilllibModule {
}
SkilllibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkilllibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkilllibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkilllibModule, imports: [AddSkillCardModule,
        SkillCardModule,
        SkillCategoryCardModule,
        SkillFormModule,
        SkillReadModule,
        SkillSubcategoryCardModule,
        SkillListDisplayModule] });
SkilllibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkilllibModule, providers: [
        SkillsService,
        SkillFormService,
        SkillCardContextMenuitemService,
        SkillListResolver,
        SkillResolver,
        SkillAddResolver,
        SkillCategoryResolver,
        SkillSubcategoryResolver,
        SelectedCategoryResolver,
        SelectedSubcategoryResolver
    ], imports: [[
            AddSkillCardModule,
            SkillCardModule,
            SkillCategoryCardModule,
            SkillFormModule,
            SkillReadModule,
            SkillSubcategoryCardModule,
            SkillListDisplayModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkilllibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        AddSkillCardModule,
                        SkillCardModule,
                        SkillCategoryCardModule,
                        SkillFormModule,
                        SkillReadModule,
                        SkillSubcategoryCardModule,
                        SkillListDisplayModule
                    ],
                    exports: [],
                    providers: [
                        SkillsService,
                        SkillFormService,
                        SkillCardContextMenuitemService,
                        SkillListResolver,
                        SkillResolver,
                        SkillAddResolver,
                        SkillCategoryResolver,
                        SkillSubcategoryResolver,
                        SelectedCategoryResolver,
                        SelectedSubcategoryResolver
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AddSkillCardComponent, AddSkillCardModule, SKILL_CARD_TOKEN, SelectedCategoryResolver, SelectedSubcategoryResolver, SkillAddResolver, SkillCardComponent, SkillCardContextMenuitemService, SkillCardModule, SkillCategoryCardComponent, SkillCategoryCardModule, SkillCategoryResolver, SkillEditResolver, SkillEndpoints, SkillFormComponent, SkillFormModule, SkillFormService, SkillListDisplayComponent, SkillListDisplayModule, SkillListResolver, SkillReadComponent, SkillReadModule, SkillResolver, SkillSubcategoryCardComponent, SkillSubcategoryCardModule, SkillSubcategoryResolver, SkilllibModule, SkillsService };
//# sourceMappingURL=skilllib.js.map
