(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/operators'), require('@angular/forms'), require('@angular/router'), require('rxjs'), require('@corelib'), require('@angular/common/http'), require('@skilllib'), require('@sharedlib'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('skillmgtlib', ['exports', '@angular/core', 'rxjs/operators', '@angular/forms', '@angular/router', 'rxjs', '@corelib', '@angular/common/http', '@skilllib', '@sharedlib', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.skillmgtlib = {}, global.ng.core, global.rxjs.operators, global.ng.forms, global.ng.router, global.rxjs, global.corelib, global.ng.common.http, global.skilllib, global.sharedlib, global.ng.common));
})(this, (function (exports, i0, operators, i1$1, i1$2, rxjs, _corelib, i1, i2, i3, i4) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);

    var PageTitleService = /** @class */ (function () {
        function PageTitleService() {
            this._pageTitle$ = new rxjs.BehaviorSubject('Skill Management');
            this._pageSubTitle$ = new rxjs.BehaviorSubject('Manage skill categories, subcategories, and skills');
        }
        Object.defineProperty(PageTitleService.prototype, "pageTitle$", {
            get: function () {
                return this._pageTitle$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PageTitleService.prototype, "pageSubTitle$", {
            get: function () {
                return this._pageSubTitle$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        PageTitleService.prototype.updatePageTitle = function (title) {
            this._pageTitle$.next(title);
        };
        PageTitleService.prototype.updatePageSubTitle = function (title) {
            this._pageSubTitle$.next(title);
        };
        return PageTitleService;
    }());
    PageTitleService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: PageTitleService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PageTitleService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: PageTitleService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: PageTitleService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var endpoints = {
        AddSkill: function (config) { return config.getUrl("skills"); },
        UpdateSkill: function (config) { return config.getUrl("skills"); },
        DeleteSkill: function (config, id) { return config.getUrl("skills/" + id); },
    };
    var SkillMgtEndpoints = endpoints;

    var SkillMgtService = /** @class */ (function () {
        function SkillMgtService(http, appConfig) {
            this.http = http;
            this.appConfig = appConfig;
            this._saveSkillSubject = new rxjs.Subject();
            this._updateSkillSubject = new rxjs.Subject();
            this._deleteSkillSubject = new rxjs.Subject();
        }
        Object.defineProperty(SkillMgtService.prototype, "onSkillSave$", {
            get: function () {
                return this._saveSkillSubject.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SkillMgtService.prototype, "onSkillUpdate$", {
            get: function () {
                return this._updateSkillSubject.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SkillMgtService.prototype, "onSkillDelete$", {
            // know what skill was delete
            get: function () {
                return this._deleteSkillSubject.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        SkillMgtService.prototype.notifySkillSave = function (skill) {
            this._saveSkillSubject.next(skill);
        };
        SkillMgtService.prototype.notifySkillUpdate = function (skill) {
            this._updateSkillSubject.next(skill);
        };
        // tell subscribers what skill was deleted
        SkillMgtService.prototype.notifySkillDelete = function (skill) {
            this._deleteSkillSubject.next(skill);
        };
        SkillMgtService.prototype.addSkill = function (skill) {
            return this.http.post(SkillMgtEndpoints.AddSkill(this.appConfig), skill).pipe(
            // shareReplay()
            );
        };
        SkillMgtService.prototype.updateSkill = function (skill) {
            return this.http.put(SkillMgtEndpoints.UpdateSkill(this.appConfig), skill).pipe(
            // shareReplay()
            );
        };
        SkillMgtService.prototype.deleteSkill = function (skillId) {
            return this.http.delete(SkillMgtEndpoints.DeleteSkill(this.appConfig, skillId));
        };
        return SkillMgtService;
    }());
    SkillMgtService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillMgtService, deps: [{ token: i1__namespace.HttpClient }, { token: _corelib.APP_CONFIG_TOKEN }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SkillMgtService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillMgtService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillMgtService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: i1__namespace.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [_corelib.APP_CONFIG_TOKEN]
                        }] }];
        } });

    var SkillAddComponent = /** @class */ (function () {
        function SkillAddComponent(fb, route, router, skillService, skillFormService, alert) {
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
        SkillAddComponent.prototype.ngOnInit = function () {
            var _this = this;
            // get the categories ids
            // get the skill
            // update the skill with category and subcategory
            // emit new object with categories and skill using map
            this.route.params.pipe(operators.switchMap(function (_c) {
                var categoryId = _c.categoryId, subcategoryId = _c.subcategoryId;
                return _this.route.data.pipe(operators.map(function (_c) {
                    var categories = _c.categories, skill = _c.skill;
                    // skill.categoryId = categoryId;
                    // skill.subcategoryId = subcategoryId;
                    return {
                        categories: categories,
                        skill: Object.assign(Object.assign({}, skill), { categoryId: categoryId, subcategoryId: subcategoryId })
                    };
                }));
            })).subscribe(function (_c) {
                var categories = _c.categories, skill = _c.skill;
                _this.categories = categories;
                _this.skill = skill;
            });
        };
        SkillAddComponent.prototype.onSaveSkill = function (skill) {
            var _this = this;
            this.skillService.addSkill(skill).subscribe({
                next: function (response) {
                    // tell the list component that skill has been added
                    _this.skillService.notifySkillSave(response);
                    _this.skillFormService.resetForm();
                    _this.alert.success('Successful', 'Skill has been added successfully');
                },
                error: function (error) {
                    _this.alert.error('Save Failed', 'Unable to add new skill');
                }
            });
        };
        SkillAddComponent.prototype.onCloseClick = function () {
            this.router.navigate(['/skills', { outlets: { details: null } }]);
        };
        SkillAddComponent.prototype.ngOnDestroy = function () {
            var _a, _b;
            (_a = this._categoryValueChangeSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            (_b = this._formStatusChangeSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        };
        return SkillAddComponent;
    }());
    SkillAddComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillAddComponent, deps: [{ token: i1__namespace$1.FormBuilder }, { token: i1__namespace$2.ActivatedRoute }, { token: i1__namespace$2.Router }, { token: SkillMgtService }, { token: i2__namespace.SkillFormService }, { token: i3__namespace.AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    SkillAddComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillAddComponent, selector: "app-skill-add", ngImport: i0__namespace, template: "<app-secondary-header [title]=\"title\" [description]=\"description\" (closeClick)=\"onCloseClick()\"></app-secondary-header>\n\n<skl-form [skill]=\"skill\" [categories]=\"categories\" (commitSkill)=\"onSaveSkill($event)\" [buttonLabel]=\"buttonLabel\">\n</skl-form>\n\n\n<!-- <div class=\"flex flex-col py-5 space-y-6 border-t border-gray-200\">\n    <ng-container *ngIf=\"form\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"addSkill()\" class=\"psr-form__form\">\n            <div>\n                <label class=\"psr-form__label\" for=\"name\">Skill name</label>\n                <input formControlName=\"name\" id=\"name\" name=\"name\" type=\"text\"\n                       class=\"psr-form__field psr-form__field--alt\" placeholder=\"\" />\n            </div>\n            <div>\n                <label class=\"psr-form__label\" for=\"category\">Category</label>\n                <select formControlName=\"category\" (change)=\"onCategoryChange()\" id=\"category\" name=\"category\"\n                        class=\"psr-form__select psr-form__select--alt\">\n                    <option value=\"\" selected> -- </option>\n                    <option [value]=\"category.id\" *ngFor=\"let category of categories\">{{ category.name }}</option>\n                </select>\n            </div>\n            <div>\n                <label class=\"psr-form__label\" for=\"sub-category\">Sub category</label>\n                <select formControlName=\"subCategory\" [disableControl]=\"isSubcategoryDisabled\" id=\"sub-category\"\n                        name=\"sub-category\" class=\"psr-form__select psr-form__select--alt\">\n                    <option value=\"\" selected> -- </option>\n                    <option [value]=\"subCategory.id\" *ngFor=\"let subCategory of subCategories\">{{ subCategory.name }}\n                    </option>\n                </select>\n            </div>\n            <div>\n                <button [disabled]=\"!formIsValid\" class=\"psr-form__button\" type=\"submit\">\n                    Add skill\n                </button>\n            </div>\n        </form>\n    </ng-container>\n</div> -->\n", styles: [":host{display:block}\n"], components: [{ type: i3__namespace.SecondaryHeaderComponent, selector: "app-secondary-header", inputs: ["title", "description"], outputs: ["closeClick"] }, { type: i2__namespace.SkillFormComponent, selector: "skl-form", inputs: ["categories", "subcategories", "buttonLabel", "skill"], outputs: ["commitSkill"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillAddComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-skill-add',
                        templateUrl: './skill-add.component.html',
                        styleUrls: ['./skill-add.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.FormBuilder }, { type: i1__namespace$2.ActivatedRoute }, { type: i1__namespace$2.Router }, { type: SkillMgtService }, { type: i2__namespace.SkillFormService }, { type: i3__namespace.AlertService }]; } });

    var SkillAddModule = /** @class */ (function () {
        function SkillAddModule() {
        }
        return SkillAddModule;
    }());
    SkillAddModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillAddModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SkillAddModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillAddModule, declarations: [SkillAddComponent], imports: [i4.CommonModule,
            i1$1.ReactiveFormsModule,
            i3.DisableControlModule,
            i3.SecondaryHeaderModule,
            i2.SkillFormModule], exports: [SkillAddComponent] });
    SkillAddModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillAddModule, imports: [[
                i4.CommonModule,
                i1$1.ReactiveFormsModule,
                i3.DisableControlModule,
                i3.SecondaryHeaderModule,
                i2.SkillFormModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillAddModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [SkillAddComponent],
                        imports: [
                            i4.CommonModule,
                            i1$1.ReactiveFormsModule,
                            i3.DisableControlModule,
                            i3.SecondaryHeaderModule,
                            i2.SkillFormModule
                        ],
                        exports: [SkillAddComponent]
                    }]
            }] });

    var appRoutes = {
        ListSkills: function (categoryId, subcategoryId) { return ["/skills", "categories", "" + categoryId, "subcategories", "" + subcategoryId, "list"]; },
        // ReadSkill: (id: string) => [`/skills`, { outlets: { details: ['read', id] } }],
        ReadSkill: function (id) { return ["/skills", { outlets: { details: ['read', id] } }]; },
        EditSkill: function (id) { return ["/skills", { outlets: { details: ['edit', id] } }]; },
        AddSkill: function (categoryId, subcategoryId) { return ["/skills", { outlets: { details: ['add', categoryId, subcategoryId] } }]; },
        ListSubcategories: function (id) { return ["/skills", "categories", "" + id, "subcategories"]; },
    };
    var SkillMgtRoutes = appRoutes;

    var SkillCategoryListComponent = /** @class */ (function () {
        function SkillCategoryListComponent(route, router, pageTitle) {
            this.route = route;
            this.router = router;
            this.pageTitle = pageTitle;
            this.categories = [];
            this.pageTitle.updatePageTitle("Skill Categories");
            this.pageTitle.updatePageSubTitle("Choose a skill category from the list below to see sub categories");
        }
        SkillCategoryListComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.route.data.subscribe(function (_a) {
                var categories = _a.categories;
                _this.categories = categories;
            });
        };
        SkillCategoryListComponent.prototype.onCardClick = function (category) {
            this.router.navigate(SkillMgtRoutes.ListSubcategories(category.id));
        };
        return SkillCategoryListComponent;
    }());
    SkillCategoryListComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillCategoryListComponent, deps: [{ token: i1__namespace$2.ActivatedRoute }, { token: i1__namespace$2.Router }, { token: PageTitleService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    SkillCategoryListComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillCategoryListComponent, selector: "sklmgt-category-list", ngImport: i0__namespace, template: "<ng-container *ngFor=\"let category of categories\">\n    <skl-category-card (onCardClick)=\"onCardClick(category)\" [category]=\"category\"></skl-category-card>\n</ng-container>\n", styles: [":host{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-auto-rows:minmax(150px,auto);grid-gap:2rem}\n"], components: [{ type: i2__namespace.SkillCategoryCardComponent, selector: "skl-category-card", inputs: ["category"], outputs: ["onCardClick"] }], directives: [{ type: i4__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillCategoryListComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'sklmgt-category-list',
                        templateUrl: './skill-category-list.component.html',
                        styleUrls: ['./skill-category-list.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$2.ActivatedRoute }, { type: i1__namespace$2.Router }, { type: PageTitleService }]; } });

    var SkillCategoryListModule = /** @class */ (function () {
        function SkillCategoryListModule() {
        }
        return SkillCategoryListModule;
    }());
    SkillCategoryListModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillCategoryListModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SkillCategoryListModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillCategoryListModule, declarations: [SkillCategoryListComponent], imports: [i4.CommonModule,
            i2.SkillCategoryCardModule], exports: [SkillCategoryListComponent] });
    SkillCategoryListModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillCategoryListModule, imports: [[
                i4.CommonModule,
                i2.SkillCategoryCardModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillCategoryListModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [SkillCategoryListComponent],
                        imports: [
                            i4.CommonModule,
                            i2.SkillCategoryCardModule
                        ],
                        exports: [SkillCategoryListComponent]
                    }]
            }] });

    var SkillEditComponent = /** @class */ (function () {
        function SkillEditComponent(route, router, skillService, skillMgtService, skillFormService, alert) {
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
        Object.defineProperty(SkillEditComponent.prototype, "isFormVisible", {
            get: function () {
                var _a;
                return ((_a = this.skill) === null || _a === void 0 ? void 0 : _a.id) !== undefined;
            },
            enumerable: false,
            configurable: true
        });
        SkillEditComponent.prototype.ngOnInit = function () {
            var _this = this;
            /* this.router.events.pipe(
                filter((event) => event instanceof NavigationEnd),
                tap(x => console.log('router.event => ', x))
            ).subscribe(); */
            this._routeDataSub = this.route.data.pipe(
            // tap(x => console.log('route.data => ', x)),
            operators.switchMap(function (_b) {
                var categories = _b.categories, skill = _b.skill;
                return _this.skillService.getSubCategories(skill.categoryId).pipe(operators.map(function (subcategories) {
                    return {
                        categories: categories,
                        subcategories: subcategories,
                        skill: skill
                    };
                }));
            })).subscribe(function (_b) {
                var categories = _b.categories, skill = _b.skill, subcategories = _b.subcategories;
                _this.categories = categories;
                _this.subcategories = subcategories;
                _this.skill = skill;
                // console.log('this.skill', this.skill);
            });
        };
        SkillEditComponent.prototype.onUpdateSkill = function (skill) {
            var _this = this;
            this.skillMgtService.updateSkill(skill).subscribe({
                next: function (response) {
                    // tell the list component that skill has been added
                    _this.skillMgtService.notifySkillUpdate(response);
                    _this.skillFormService.resetForm();
                    _this.alert.success('Successful', 'Skill has been updated successfully');
                },
                error: function (error) {
                    _this.alert.error('Update Failed', 'Unable to update new skill');
                }
            });
        };
        SkillEditComponent.prototype.onCloseClick = function () {
            this.router.navigate(['/skills', { outlets: { details: null } }]);
        };
        SkillEditComponent.prototype.ngOnDestroy = function () {
            var _a;
            (_a = this._routeDataSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        };
        return SkillEditComponent;
    }());
    SkillEditComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillEditComponent, deps: [{ token: i1__namespace$2.ActivatedRoute }, { token: i1__namespace$2.Router }, { token: i2__namespace.SkillsService }, { token: SkillMgtService }, { token: i2__namespace.SkillFormService }, { token: i3__namespace.AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    SkillEditComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillEditComponent, selector: "app-skill-edit", ngImport: i0__namespace, template: "<app-secondary-header [title]=\"title\" [description]=\"description\" (closeClick)=\"onCloseClick()\"></app-secondary-header>\n\n<ng-container *ngIf=\"isFormVisible\">\n    <skl-form [skill]=\"skill\" [categories]=\"categories\" [subcategories]=\"subcategories\"\n              (commitSkill)=\"onUpdateSkill($event)\" [buttonLabel]=\"buttonLabel\">\n    </skl-form>\n</ng-container>\n", styles: [":host{display:block}\n"], components: [{ type: i3__namespace.SecondaryHeaderComponent, selector: "app-secondary-header", inputs: ["title", "description"], outputs: ["closeClick"] }, { type: i2__namespace.SkillFormComponent, selector: "skl-form", inputs: ["categories", "subcategories", "buttonLabel", "skill"], outputs: ["commitSkill"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillEditComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-skill-edit',
                        templateUrl: './skill-edit.component.html',
                        styleUrls: ['./skill-edit.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$2.ActivatedRoute }, { type: i1__namespace$2.Router }, { type: i2__namespace.SkillsService }, { type: SkillMgtService }, { type: i2__namespace.SkillFormService }, { type: i3__namespace.AlertService }]; } });

    var SkillEditModule = /** @class */ (function () {
        function SkillEditModule() {
        }
        return SkillEditModule;
    }());
    SkillEditModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillEditModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SkillEditModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillEditModule, declarations: [SkillEditComponent], imports: [i4.CommonModule,
            i2.SkillFormModule,
            i3.SecondaryHeaderModule], exports: [SkillEditComponent] });
    SkillEditModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillEditModule, imports: [[
                i4.CommonModule,
                i2.SkillFormModule,
                i3.SecondaryHeaderModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillEditModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SkillEditComponent
                        ],
                        imports: [
                            i4.CommonModule,
                            i2.SkillFormModule,
                            i3.SecondaryHeaderModule
                        ],
                        exports: [SkillEditComponent]
                    }]
            }] });

    var SkillFilterComponent = /** @class */ (function () {
        function SkillFilterComponent(fb) {
            this.fb = fb;
            this.categories = [];
            this.subCategories = [];
            this.isSubcategoryDisabled = true;
        }
        SkillFilterComponent.prototype.ngOnInit = function () {
            this.form = this.fb.group({
                category: ['', [i1$1.Validators.required]],
                subCategory: ['', [i1$1.Validators.required]]
            });
        };
        SkillFilterComponent.prototype.filterSkillsHandler = function () {
        };
        return SkillFilterComponent;
    }());
    SkillFilterComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillFilterComponent, deps: [{ token: i1__namespace$1.FormBuilder }], target: i0__namespace.ɵɵFactoryTarget.Component });
    SkillFilterComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillFilterComponent, selector: "app-skill-filter", inputs: { categories: "categories" }, ngImport: i0__namespace, template: "<ng-container *ngIf=\"form\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"filterSkillsHandler()\">\n        <div class=\"flex justify-end space-x-4\">\n            <div>\n                <!-- <label class=\"psr-form__label\" for=\"category\">Category</label> -->\n                <select formControlName=\"category\" id=\"category\" name=\"category\"\n                        class=\"psr-form__select psr-form__select--alt\">\n                    <option value=\"\" selected> Pick a category </option>\n                    <option [value]=\"category.id\" *ngFor=\"let category of categories\">{{ category.name }}</option>\n                </select>\n            </div>\n            <div>\n                <!-- <label class=\"psr-form__label\" for=\"sub-category\">Sub category</label> -->\n                <select formControlName=\"subCategory\" [disableControl]=\"isSubcategoryDisabled\" id=\"sub-category\"\n                        name=\"sub-category\" class=\"psr-form__select psr-form__select--alt\">\n                    <option value=\"\" selected> Pick a subcategory </option>\n                    <option [value]=\"subCategory.id\" *ngFor=\"let subCategory of subCategories\">{{ subCategory.name }}\n                    </option>\n                </select>\n            </div>\n        </div>\n    </form>\n</ng-container>\n", styles: [":host{@apply flex justify-end space-x-4;}\n"], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1__namespace$1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { type: i1__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i1__namespace$1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i1__namespace$1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i4__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace.DisableControlDirective, selector: "[disableControl]", inputs: ["disableControl"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillFilterComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-skill-filter',
                        templateUrl: './skill-filter.component.html',
                        styleUrls: ['./skill-filter.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.FormBuilder }]; }, propDecorators: { categories: [{
                    type: i0.Input
                }] } });

    var SkillFilterModule = /** @class */ (function () {
        function SkillFilterModule() {
        }
        return SkillFilterModule;
    }());
    SkillFilterModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillFilterModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SkillFilterModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillFilterModule, declarations: [SkillFilterComponent], imports: [i4.CommonModule,
            i1$1.ReactiveFormsModule,
            i3.DisableControlModule], exports: [SkillFilterComponent] });
    SkillFilterModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillFilterModule, imports: [[
                i4.CommonModule,
                i1$1.ReactiveFormsModule,
                i3.DisableControlModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillFilterModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [SkillFilterComponent],
                        imports: [
                            i4.CommonModule,
                            i1$1.ReactiveFormsModule,
                            i3.DisableControlModule
                        ],
                        exports: [SkillFilterComponent]
                    }]
            }] });

    var SKILL_MGT_CONFIG_TOKEN = new i0.InjectionToken("SKILL_MGT_CONFIG", {
        factory: function () { return ({}); }
    });
    var SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN = new i0.InjectionToken("SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN");

    var SkillListComponent = /** @class */ (function () {
        function SkillListComponent(route, router, pageTitle, skillService, alert, zone, menuItems, ctxMenuItem) {
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
            this.skillAddCardType = i2.AddSkillCardComponent;
            this.skillCardType = i2.SkillCardComponent;
            this._skillSave$ = this.skillService.onSkillSave$;
            this._skillUpdate$ = this.skillService.onSkillUpdate$;
            this._eventStart$ = this.ctxMenuItem.onEventStart$;
            this.pageTitle.updatePageTitle("Skills");
            this.pageTitle.updatePageSubTitle("View list of skill, see skill details, and add new skill.");
            this.emptyStateTitle = 'No skills';
            this.emptyStateDescription = 'Get started by adding skills to this sub category';
            this.emptyStateButtonLabel = 'Add New Skill';
        }
        Object.defineProperty(SkillListComponent.prototype, "isSkillsVisible", {
            get: function () {
                return this.skills.length > 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SkillListComponent.prototype, "isCategoryDetailsVisible", {
            get: function () {
                return this.selectedCategoryName !== undefined
                    && this.selectedSubcategoryName !== undefined;
            },
            enumerable: false,
            configurable: true
        });
        SkillListComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.route.params.subscribe(function (_b) {
                var categoryId = _b.categoryId, subcategoryId = _b.subcategoryId;
                _this._selectedCategoryId = categoryId;
                _this._selectedSubcategoryId = subcategoryId;
            });
            this.route.data.subscribe(function (_b) {
                var skills = _b.skills, selectedCategory = _b.selectedCategory, selectedSubcategory = _b.selectedSubcategory;
                _this.skills = skills; //.slice(0, 1);
                _this.selectedCategoryName = selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.name;
                _this.selectedSubcategoryName = selectedSubcategory === null || selectedSubcategory === void 0 ? void 0 : selectedSubcategory.name;
            });
            this._skillSave$.subscribe(function (skill) {
                _this.skills.push(skill);
            });
            this._skillUpdate$.subscribe(function (skill) {
                _this.skills = _this.skills.map(function (item) {
                    return (item.id === skill.id) ? Object.assign({}, skill) : item;
                });
            });
            this._eventStartSub = this._eventStart$.subscribe(function (_b) {
                var skillId = _b.skillId, menuName = _b.menuName;
                _this.deleteSkill(skillId, menuName);
            });
        };
        SkillListComponent.prototype.addSkillCardClickHandler = function () {
            this.router.navigate(SkillMgtRoutes.AddSkill(this._selectedCategoryId, this._selectedSubcategoryId));
        };
        SkillListComponent.prototype.onCardItemEvent = function (e) {
            var _this = this;
            // this.skills = [];
            // console.log('before => e.card.blockCard', e.card.blockCard);
            // e.card.blockCard = true;
            // console.log('after => e.card.blockCard', e.card.blockCard);
            if (this.menuItemIsDelete(e.menuName)) {
                e.card.blockCard = true;
                if (confirm('Are you sure you want to delete this skill?')) {
                    // console.log('delete skill');
                    setTimeout(function () {
                        _this.skills.splice(_this.skills.findIndex(function (x) { return x.id === e.skillId; }), 1);
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
        };
        SkillListComponent.prototype.deleteSkill = function (skillId, menuName) {
            var _this = this;
            if (this.menuItemIsDelete(menuName)) {
                // e.card.blockCard = true;
                if (confirm('Are you sure you want to delete this skill?')) {
                    this.skillService.deleteSkill(skillId).subscribe({
                        next: function (response) {
                            // remove card from dom (destroy);
                            _this.skills.splice(_this.skills.findIndex(function (x) { return x.id === skillId; }), 1);
                            _this.ctxMenuItem.complete(skillId, menuName);
                            _this.alert.success('Successful', 'Skill has been deleted successfully');
                        },
                        error: function (error) {
                            _this.ctxMenuItem.complete(skillId, menuName);
                            _this.alert.error('Delete Failed', 'Unable to delete the specified skill');
                        }
                    });
                }
                else {
                    // e.card.blockCard = false;
                    this.ctxMenuItem.complete(skillId, menuName);
                }
            }
        };
        SkillListComponent.prototype.menuItemIsDelete = function (menuName) {
            return menuName === 'skill-delete';
        };
        SkillListComponent.prototype.ngOnDestroy = function () {
            var _a;
            (_a = this._eventStartSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        };
        return SkillListComponent;
    }());
    SkillListComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillListComponent, deps: [{ token: i1__namespace$2.ActivatedRoute }, { token: i1__namespace$2.Router }, { token: PageTitleService }, { token: SkillMgtService }, { token: i3__namespace.AlertService }, { token: i0__namespace.NgZone }, { token: SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN }, { token: i2__namespace.SkillCardContextMenuitemService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    SkillListComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillListComponent, selector: "app-skill-list", ngImport: i0__namespace, template: "<div class=\"pb-5\" *ngIf=\"isCategoryDetailsVisible\">\n    <div class=\"flex flex-wrap items-baseline -mt-2 -ml-2\">\n        <h3 class=\"mt-2 ml-2 text-lg font-medium leading-6 text-gray-700\">\n            Skills\n        </h3>\n        <p class=\"mt-1 ml-2 text-sm text-gray-500 truncate\">in\n            {{selectedCategoryName}}\n            <svg class=\"flex-shrink-0 inline-block w-5 h-5 text-gray-300\" xmlns=\"http://www.w3.org/2000/svg\"\n                 fill=\"currentColor\" viewBox=\"0 0 20 20\" aria-hidden=\"true\">\n                <path d=\"M5.555 17.776l8-16 .894.448-8 16-.894-.448z\" />\n            </svg>\n            {{selectedSubcategoryName}}\n        </p>\n    </div>\n</div>\n<skl-list-display [isAddSkillCardVisible]=\"isAddSkillCardVisible\" [isSkillsVisible]=\"isSkillsVisible\">\n    <skl-add-card (addSkillCardClick)=\"addSkillCardClickHandler()\"></skl-add-card>\n    <ng-container *ngFor=\"let skill of skills\">\n        <skl-card #skillCard [x-blockui]=\"skillCard.blockCard\" [x-overlay-tpl]=\"mask\" [skill]=\"skill\"\n                  [menuItems]=\"menuItems\"></skl-card>\n        <!-- (contextMenuItemEvent)=\"onCardItemEvent($event)\" -->\n    </ng-container>\n</skl-list-display>\n<ng-template #mask>\n    <div class=\"ui-blockui ui-widget-overlay\">\n        <svg class=\"w-12 h-12 text-gray-500\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"\n             xmlns=\"http://www.w3.org/2000/svg\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\n                  d=\"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\"></path>\n        </svg>\n    </div>\n</ng-template>\n<app-empty-state (addNewItem)=\"addSkillCardClickHandler()\" *ngIf=\"!isSkillsVisible\" [title]=\"emptyStateTitle\"\n                 [description]=\"emptyStateDescription\" [buttonLabel]=\"emptyStateButtonLabel\">\n</app-empty-state>\n", styles: [":host{display:block}\n"], components: [{ type: i2__namespace.SkillListDisplayComponent, selector: "skl-list-display", inputs: ["isAddSkillCardVisible", "isSkillsVisible"] }, { type: i2__namespace.AddSkillCardComponent, selector: "skl-add-card", outputs: ["addSkillCardClick"] }, { type: i2__namespace.SkillCardComponent, selector: "skl-card", inputs: ["skill", "menuItems"] }, { type: i3__namespace.EmptyStateComponent, selector: "app-empty-state", inputs: ["title", "description", "buttonLabel"], outputs: ["addNewItem"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3__namespace.BlockUiDirective, selector: "[x-blockui]", inputs: ["x-target-el", "x-auto-zindex", "x-base-zindex", "x-blockui", "x-overlay-tpl"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillListComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-skill-list',
                        templateUrl: './skill-list.component.html',
                        styleUrls: ['./skill-list.component.scss']
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$2.ActivatedRoute }, { type: i1__namespace$2.Router }, { type: PageTitleService }, { type: SkillMgtService }, { type: i3__namespace.AlertService }, { type: i0__namespace.NgZone }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN]
                        }] }, { type: i2__namespace.SkillCardContextMenuitemService }];
        } });

    var SkillListModule = /** @class */ (function () {
        function SkillListModule() {
        }
        SkillListModule.withConfig = function (config) {
            return {
                ngModule: SkillListModule,
                providers: [
                    {
                        provide: SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN,
                        useValue: config
                    }
                ]
            };
        };
        return SkillListModule;
    }());
    SkillListModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillListModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SkillListModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillListModule, declarations: [SkillListComponent], imports: [i4.CommonModule,
            i3.EmptyStateModule,
            i2.SkillListDisplayModule,
            i2.AddSkillCardModule,
            i2.SkillCardModule,
            i3.BlockUiModule], exports: [SkillListComponent] });
    SkillListModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillListModule, imports: [[
                i4.CommonModule,
                i3.EmptyStateModule,
                i2.SkillListDisplayModule,
                i2.AddSkillCardModule,
                i2.SkillCardModule,
                i3.BlockUiModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillListModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [SkillListComponent],
                        imports: [
                            i4.CommonModule,
                            i3.EmptyStateModule,
                            i2.SkillListDisplayModule,
                            i2.AddSkillCardModule,
                            i2.SkillCardModule,
                            i3.BlockUiModule
                        ],
                        exports: [SkillListComponent]
                    }]
            }] });

    var SkillSubcategoryListComponent = /** @class */ (function () {
        function SkillSubcategoryListComponent(route, router, pageTitle) {
            this.route = route;
            this.router = router;
            this.pageTitle = pageTitle;
            this.subcategories = [];
            this.pageTitle.updatePageTitle("Skill Subcategories");
            this.pageTitle.updatePageSubTitle("Choose a skill subcategory from the list below to see skills");
        }
        SkillSubcategoryListComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.route.data.subscribe(function (_a) {
                var subcategories = _a.subcategories;
                _this.subcategories = subcategories;
            });
        };
        SkillSubcategoryListComponent.prototype.onCardClick = function (subcategory) {
            // console.log(SkillMgtRoutes.ListSubcategories(category.id));
            // console.log(SkillMgtRoutes.ListSkills(category.categoryId, category.id));
            this.router.navigate(SkillMgtRoutes.ListSkills(subcategory.categoryId, subcategory.id));
        };
        return SkillSubcategoryListComponent;
    }());
    SkillSubcategoryListComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillSubcategoryListComponent, deps: [{ token: i1__namespace$2.ActivatedRoute }, { token: i1__namespace$2.Router }, { token: PageTitleService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    SkillSubcategoryListComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillSubcategoryListComponent, selector: "sklmgt-subcategory-list", ngImport: i0__namespace, template: "<!-- <p>skill-subcategory-list works!</p> -->\n<!-- { outlets: { primary: 'list', details: null } } -->\n<!-- <a [routerLink]=\"['/skills', 'list']\">List</a><br /> -->\n<!-- { outlets: { primary: 'categories', details: null } } -->\n<!-- <a [routerLink]=\"['/skills', 'categories']\">Categories</a> -->\n<ng-container *ngFor=\"let subcategory of subcategories\">\n    <skl-subcategory-card (onCardClick)=\"onCardClick(subcategory)\" [subcategory]=\"subcategory\">\n    </skl-subcategory-card>\n</ng-container>\n", styles: [":host{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));grid-auto-rows:minmax(150px,auto);grid-gap:2rem}\n"], components: [{ type: i2__namespace.SkillSubcategoryCardComponent, selector: "skl-subcategory-card", inputs: ["subcategory"], outputs: ["onCardClick"] }], directives: [{ type: i4__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillSubcategoryListComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'sklmgt-subcategory-list',
                        templateUrl: './skill-subcategory-list.component.html',
                        styleUrls: ['./skill-subcategory-list.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$2.ActivatedRoute }, { type: i1__namespace$2.Router }, { type: PageTitleService }]; } });

    var SkillSubcategoryListModule = /** @class */ (function () {
        function SkillSubcategoryListModule() {
        }
        return SkillSubcategoryListModule;
    }());
    SkillSubcategoryListModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillSubcategoryListModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SkillSubcategoryListModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillSubcategoryListModule, declarations: [SkillSubcategoryListComponent], imports: [i4.CommonModule,
            i2.SkillSubcategoryCardModule], exports: [SkillSubcategoryListComponent] });
    SkillSubcategoryListModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillSubcategoryListModule, imports: [[
                i4.CommonModule,
                i2.SkillSubcategoryCardModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillSubcategoryListModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [SkillSubcategoryListComponent],
                        imports: [
                            i4.CommonModule,
                            i2.SkillSubcategoryCardModule
                        ],
                        exports: [SkillSubcategoryListComponent]
                    }]
            }] });

    var breadcrumbConfig = [
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

    var skillCardContextMenuConfig = [
        new i3.MenuItem({
            name: 'skill-details',
            label: 'Skill detail',
            routerLink: function (skillId) { return (skillId && SkillMgtRoutes.ReadSkill(skillId)) || []; },
            isIconVisible: true,
            iconComponent: i3.IconEyeComponent
        }),
        new i3.MenuItem({
            name: 'skill-edit',
            label: 'Edit skill',
            routerLink: function (skillId) { return (skillId && SkillMgtRoutes.EditSkill(skillId)) || []; },
            isIconVisible: true,
            iconComponent: i3.IconPencilComponent
        }),
        new i3.MenuItem({
            name: 'skill-delete',
            label: 'Delete skill',
            routerLink: function () { return []; },
            navigatable: false,
            isIconVisible: true,
            iconComponent: i3.IconTrashComponent
        })
    ];

    var IndexComponent = /** @class */ (function () {
        function IndexComponent(pageTitle, route, router, breadcrumbService, secondaryHeaderService, breadcrumbConfig) {
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
        Object.defineProperty(IndexComponent.prototype, "isBreadcrumbVisible", {
            get: function () {
                return this.breadcrumbConfig.length > 0;
            },
            enumerable: false,
            configurable: true
        });
        IndexComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.route.data.subscribe(function (_c) {
                var categories = _c.resolverResult.categories;
                _this.categories = categories;
            });
            this.secondaryHeaderService.isCloseClicked$.subscribe(function (isCloseClicked) {
                if (isCloseClicked) {
                    _this.router.navigate(['/skills', { outlets: { details: null } }]);
                }
            });
        };
        IndexComponent.prototype.onDetailsRouterOutletActivate = function () {
            this.isSecondaryContentVisible = true;
            // console.log('activate');
        };
        IndexComponent.prototype.onDetailsRouterOutletDeactivate = function () {
            this.isSecondaryContentVisible = false;
        };
        IndexComponent.prototype.onPrimaryRouterOutletActivate = function () {
            // console.log('activate');
        };
        IndexComponent.prototype.onPrimaryRouterOutletDeactivate = function () {
            // console.log('deactivate');
        };
        IndexComponent.prototype.hamburgerMenuClickHandler = function () {
            // console.log('hamburgerMenuClickHandler');
        };
        IndexComponent.prototype.ngOnDestroy = function () {
            var _a, _b;
            (_a = this._routerEventSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            (_b = this._routeDataSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        };
        return IndexComponent;
    }());
    IndexComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: IndexComponent, deps: [{ token: PageTitleService }, { token: i1__namespace$2.ActivatedRoute }, { token: i1__namespace$2.Router }, { token: i3__namespace.BreadcrumbService }, { token: i3__namespace.SecondaryHeaderService }, { token: i3.BREADCRUMB_CONFIG_TOKEN }], target: i0__namespace.ɵɵFactoryTarget.Component });
    IndexComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: IndexComponent, selector: "app-index", providers: [PageTitleService], ngImport: i0__namespace, template: "\n    <!-- <app-page-heading-layout>\n        <h1 class=\"text-3xl font-bold text-gray-900\">\n          {{ pageTitle$ | async}}\n        </h1>\n    </app-page-heading-layout> -->\n    <app-two-column-layout [isSecondaryContentVisible]=\"isSecondaryContentVisible\" (hamburgerMenuClick)=\"hamburgerMenuClickHandler()\">\n    <!-- border-2 border-gray-200 border-dashed rounded-lg -->\n    <!-- flex justify-between items-center -->\n        <app-page-heading x-size=\"large\" x-color=\"black\" [title]=\"pageTitle$ | async\" [description]=\"pageSubTitle$ | async\"></app-page-heading>\n        <div header-content class=\"\">\n            <h1 class=\"text-3xl font-bold text-gray-900\">\n              {{ pageTitle$ | async}}\n            </h1>\n            <p id=\"message-heading\" class=\"text-lg font-normal text-gray-900\">\n              {{ pageSubTitle$ | async}}\n            </p>\n            <!-- <app-skill-filter [categories]=\"categories\"></app-skill-filter> -->\n        </div>\n        <nav breadcrumb-content *ngIf=\"isBreadcrumbVisible\" class=\"flex px-4 py-4 mx-auto border-b-2 border-gray-200 border-dashed max-w-7xl sm:px-6 lg:px-8\" aria-label=\"Breadcrumb\">\n            <app-breadcrumb></app-breadcrumb>\n        </nav>\n        <router-outlet main-content\n                (activate)=\"onPrimaryRouterOutletActivate()\"\n                (deactivate)=\"onPrimaryRouterOutletDeactivate()\"></router-outlet>\n        <router-outlet secondary-content\n                (activate)=\"onDetailsRouterOutletActivate()\"\n                (deactivate)=\"onDetailsRouterOutletDeactivate()\"\n                name=\"details\"></router-outlet>\n    </app-two-column-layout>\n  ", isInline: true, styles: ["\n      :host {\n        display: flex;\n        flex-direction: column;\n        flex: 1 1 0%;\n        height: 0px;\n        @apply border-l-2 border-r-2 border-gray-200 border-dashed;\n      }\n    "], components: [{ type: i3__namespace.TwoColumnLayoutComponent, selector: "app-two-column-layout", inputs: ["isSecondaryContentVisible"], outputs: ["hamburgerMenuClick"] }, { type: i3__namespace.PageHeadingComponent, selector: "app-page-heading", inputs: ["title", "description", "x-size", "x-color"] }, { type: i3__namespace.BreadcrumbComponent, selector: "app-breadcrumb" }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace$2.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }], pipes: { "async": i4__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: IndexComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-index',
                        template: "\n    <!-- <app-page-heading-layout>\n        <h1 class=\"text-3xl font-bold text-gray-900\">\n          {{ pageTitle$ | async}}\n        </h1>\n    </app-page-heading-layout> -->\n    <app-two-column-layout [isSecondaryContentVisible]=\"isSecondaryContentVisible\" (hamburgerMenuClick)=\"hamburgerMenuClickHandler()\">\n    <!-- border-2 border-gray-200 border-dashed rounded-lg -->\n    <!-- flex justify-between items-center -->\n        <app-page-heading x-size=\"large\" x-color=\"black\" [title]=\"pageTitle$ | async\" [description]=\"pageSubTitle$ | async\"></app-page-heading>\n        <div header-content class=\"\">\n            <h1 class=\"text-3xl font-bold text-gray-900\">\n              {{ pageTitle$ | async}}\n            </h1>\n            <p id=\"message-heading\" class=\"text-lg font-normal text-gray-900\">\n              {{ pageSubTitle$ | async}}\n            </p>\n            <!-- <app-skill-filter [categories]=\"categories\"></app-skill-filter> -->\n        </div>\n        <nav breadcrumb-content *ngIf=\"isBreadcrumbVisible\" class=\"flex px-4 py-4 mx-auto border-b-2 border-gray-200 border-dashed max-w-7xl sm:px-6 lg:px-8\" aria-label=\"Breadcrumb\">\n            <app-breadcrumb></app-breadcrumb>\n        </nav>\n        <router-outlet main-content\n                (activate)=\"onPrimaryRouterOutletActivate()\"\n                (deactivate)=\"onPrimaryRouterOutletDeactivate()\"></router-outlet>\n        <router-outlet secondary-content\n                (activate)=\"onDetailsRouterOutletActivate()\"\n                (deactivate)=\"onDetailsRouterOutletDeactivate()\"\n                name=\"details\"></router-outlet>\n    </app-two-column-layout>\n  ",
                        styles: [
                            "\n      :host {\n        display: flex;\n        flex-direction: column;\n        flex: 1 1 0%;\n        height: 0px;\n        @apply border-l-2 border-r-2 border-gray-200 border-dashed;\n      }\n    "
                        ],
                        providers: [PageTitleService]
                    }]
            }], ctorParameters: function () {
            return [{ type: PageTitleService }, { type: i1__namespace$2.ActivatedRoute }, { type: i1__namespace$2.Router }, { type: i3__namespace.BreadcrumbService }, { type: i3__namespace.SecondaryHeaderService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i3.BREADCRUMB_CONFIG_TOKEN]
                        }] }];
        } });

    var IndexModule = /** @class */ (function () {
        function IndexModule() {
        }
        return IndexModule;
    }());
    IndexModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: IndexModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    IndexModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: IndexModule, declarations: [IndexComponent], imports: [i4.CommonModule,
            i1$2.RouterModule,
            i3.TwoColumnLayoutModule,
            i3.PageHeadingModule,
            i3.BreadcrumbModule], exports: [IndexComponent] });
    IndexModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: IndexModule, imports: [[
                i4.CommonModule,
                i1$2.RouterModule,
                i3.TwoColumnLayoutModule,
                i3.PageHeadingModule,
                i3.BreadcrumbModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: IndexModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [IndexComponent],
                        imports: [
                            i4.CommonModule,
                            i1$2.RouterModule,
                            i3.TwoColumnLayoutModule,
                            i3.PageHeadingModule,
                            i3.BreadcrumbModule
                        ],
                        exports: [IndexComponent]
                    }]
            }] });

    var IndexResolver = /** @class */ (function () {
        function IndexResolver(skillService) {
            this.skillService = skillService;
        }
        IndexResolver.prototype.resolve = function (route, state) {
            return this.skillService.getCategories().pipe(operators.map(function (response) { return ({
                "categories": response
            }); }));
        };
        return IndexResolver;
    }());
    IndexResolver.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: IndexResolver, deps: [{ token: i2__namespace.SkillsService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    IndexResolver.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: IndexResolver });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: IndexResolver, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i2__namespace.SkillsService }]; } });

    var routes = [
        {
            path: '',
            component: IndexComponent,
            children: [
                { path: 'categories', component: SkillCategoryListComponent, resolve: { categories: i2.SkillCategoryResolver }, data: { breadcrumb: 'categories' } },
                { path: 'categories/:categoryId/subcategories', component: SkillSubcategoryListComponent, resolve: { subcategories: i2.SkillSubcategoryResolver }, data: { breadcrumb: 'subcategories' } },
                { path: 'categories/:categoryId/subcategories/:subcategoryId/list', component: SkillListComponent, resolve: { skills: i2.SkillListResolver, selectedCategory: i2.SelectedCategoryResolver, selectedSubcategory: i2.SelectedSubcategoryResolver }, data: { breadcrumb: 'list' } },
                { path: 'read/:id', component: i2.SkillReadComponent, outlet: 'details', resolve: { skill: i2.SkillResolver } },
                { path: 'edit/:id', component: SkillEditComponent, outlet: 'details', resolve: { skill: i2.SkillResolver, categories: i2.SkillCategoryResolver } },
                { path: 'add/:categoryId/:subcategoryId', component: SkillAddComponent, outlet: 'details', resolve: { categories: i2.SkillAddResolver } },
                { path: '**', redirectTo: 'categories', pathMatch: 'full' }
            ],
            resolve: { resolverResult: IndexResolver }
        }
    ];
    var SkillMgtRoutingModule = /** @class */ (function () {
        function SkillMgtRoutingModule() {
        }
        return SkillMgtRoutingModule;
    }());
    SkillMgtRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillMgtRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SkillMgtRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillMgtRoutingModule, imports: [i1__namespace$2.RouterModule], exports: [i1$2.RouterModule] });
    SkillMgtRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillMgtRoutingModule, imports: [[i1$2.RouterModule.forChild(routes)], i1$2.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillMgtRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$2.RouterModule.forChild(routes)],
                        exports: [i1$2.RouterModule]
                    }]
            }] });

    var SkillmgtlibModule = /** @class */ (function () {
        function SkillmgtlibModule() {
        }
        SkillmgtlibModule.withConfig = function (config) {
            return {
                ngModule: i3.BreadcrumbModule,
                providers: [
                    {
                        provide: SKILL_MGT_CONFIG_TOKEN,
                        useValue: config || {}
                    }
                ]
            };
        };
        return SkillmgtlibModule;
    }());
    SkillmgtlibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillmgtlibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SkillmgtlibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillmgtlibModule, imports: [i3.SharedlibModule, i3__namespace.BreadcrumbModule, SkillMgtRoutingModule,
            IndexModule,
            SkillAddModule,
            SkillEditModule,
            SkillFilterModule, SkillListModule] });
    SkillmgtlibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillmgtlibModule, providers: [
            PageTitleService,
            IndexResolver,
        ], imports: [[
                i3.SharedlibModule,
                i3.BreadcrumbModule.withConfig(breadcrumbConfig || []),
                SkillMgtRoutingModule,
                IndexModule,
                SkillAddModule,
                SkillEditModule,
                SkillFilterModule,
                SkillListModule.withConfig(skillCardContextMenuConfig)
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: SkillmgtlibModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [
                            i3.SharedlibModule,
                            i3.BreadcrumbModule.withConfig(breadcrumbConfig || []),
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

    exports.IndexComponent = IndexComponent;
    exports.IndexModule = IndexModule;
    exports.IndexResolver = IndexResolver;
    exports.PageTitleService = PageTitleService;
    exports.SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN = SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN;
    exports.SKILL_MGT_CONFIG_TOKEN = SKILL_MGT_CONFIG_TOKEN;
    exports.SkillAddComponent = SkillAddComponent;
    exports.SkillAddModule = SkillAddModule;
    exports.SkillCategoryListComponent = SkillCategoryListComponent;
    exports.SkillCategoryListModule = SkillCategoryListModule;
    exports.SkillEditComponent = SkillEditComponent;
    exports.SkillEditModule = SkillEditModule;
    exports.SkillFilterComponent = SkillFilterComponent;
    exports.SkillFilterModule = SkillFilterModule;
    exports.SkillListComponent = SkillListComponent;
    exports.SkillListModule = SkillListModule;
    exports.SkillMgtEndpoints = SkillMgtEndpoints;
    exports.SkillMgtRoutes = SkillMgtRoutes;
    exports.SkillMgtRoutingModule = SkillMgtRoutingModule;
    exports.SkillMgtService = SkillMgtService;
    exports.SkillSubcategoryListComponent = SkillSubcategoryListComponent;
    exports.SkillSubcategoryListModule = SkillSubcategoryListModule;
    exports.SkillmgtlibModule = SkillmgtlibModule;
    exports.breadcrumbConfig = breadcrumbConfig;
    exports.skillCardContextMenuConfig = skillCardContextMenuConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=skillmgtlib.umd.js.map
