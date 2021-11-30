import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { debounceTime, filter, startWith, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/router";
import * as i3 from "../../services/skills.service";
import * as i4 from "../../services/skill-form.service";
import * as i5 from "@angular/common";
export class SkillFormComponent {
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
SkillFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFormComponent, deps: [{ token: i1.FormBuilder }, { token: i2.ActivatedRoute }, { token: i2.Router }, { token: i3.SkillsService }, { token: i4.SkillFormService }], target: i0.ɵɵFactoryTarget.Component });
SkillFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillFormComponent, selector: "skl-form", inputs: { categories: "categories", subcategories: "subcategories", buttonLabel: "buttonLabel", skill: "skill" }, outputs: { commitSkill: "commitSkill" }, ngImport: i0, template: "<div class=\"flex flex-col py-5 space-y-6 border-t border-gray-200\">\n    <ng-container *ngIf=\"form\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"onCommitSkill()\" class=\"psr-form__form\">\n            <div>\n                <label class=\"psr-form__label\" for=\"name\">Skill name</label>\n                <input formControlName=\"name\" id=\"name\" name=\"name\" type=\"text\"\n                       class=\"psr-form__field psr-form__field--alt\" placeholder=\"\" />\n            </div>\n            <!-- <div>\n                <label class=\"psr-form__label\" for=\"category\">Category</label>\n                <select formControlName=\"categoryId\" (change)=\"onCategoryChange($event)\" id=\"category\" name=\"category\"\n                        class=\"psr-form__select psr-form__select--alt\">\n                    <option value=\"\" selected> -- </option>\n                    <option [value]=\"category.id\" *ngFor=\"let category of categories\">{{ category.name }}\n                    </option>\n                </select>\n            </div>\n            <div>\n                <label class=\"psr-form__label\" for=\"sub-category\">Sub category</label>\n                <select formControlName=\"subcategoryId\" [disableControl]=\"isSubcategoryDisabled\" id=\"sub-category\" name=\"sub-category\"\n                        class=\"psr-form__select psr-form__select--alt\">\n                    <option value=\"\" selected> -- </option>\n                    <option [value]=\"item.id\" *ngFor=\"let item of subcategories\">{{ item.name }}\n                    </option>\n                </select>\n            </div> -->\n            <div>\n                <button [disabled]=\"!formIsValid\" class=\"psr-form__button\" type=\"submit\">\n                    {{buttonLabel}}\n                </button>\n            </div>\n        </form>\n    </ng-container>\n</div>\n", styles: [":host{display:block}\n"], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFormComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'skl-form',
                    templateUrl: './skill-form.component.html',
                    styleUrls: ['./skill-form.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: i3.SkillsService }, { type: i4.SkillFormService }]; }, propDecorators: { categories: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbGxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2tpbGwtZm9ybS9za2lsbC1mb3JtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NraWxsbGliL3NyYy9saWIvY29tcG9uZW50cy9za2lsbC1mb3JtL3NraWxsLWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUF1QyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFXNUUsTUFBTSxPQUFPLGtCQUFrQjtJQTZCM0IsWUFDWSxFQUFlLEVBQ2YsS0FBcUIsRUFDckIsTUFBYyxFQUNkLFlBQTJCLEVBQzNCLGdCQUFrQztRQUpsQyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFlO1FBQzNCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUEvQnZDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLDBCQUFxQixHQUFZLElBQUksQ0FBQztRQVNwQyxlQUFVLEdBQXFCLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUF5QixFQUFFLENBQUM7UUFDekMsZ0JBQVcsR0FBVyxNQUFNLENBQUM7UUFRNUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBYS9DLElBQUksQ0FBQyxXQUFXLEdBQUcs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LElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxXQUFXOztRQUNQLE1BQUEsSUFBSSxDQUFDLHVCQUF1QiwwQ0FBRSxXQUFXLEVBQUUsQ0FBQztRQUM1QyxNQUFBLElBQUksQ0FBQyxvQkFBb0IsMENBQUUsV0FBVyxFQUFFLENBQUM7UUFDekMsTUFBQSxJQUFJLENBQUMsYUFBYSwwQ0FBRSxXQUFXLEVBQUUsQ0FBQztJQUN0QyxDQUFDOztnSEF0SVEsa0JBQWtCO29HQUFsQixrQkFBa0IsMk1DZi9CLGcyREFrQ0E7NEZEbkJhLGtCQUFrQjtrQkFMOUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsV0FBVyxFQUFFLDZCQUE2QjtvQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7aUJBQzdDOytNQWNZLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUdPLEtBQUs7c0JBQWpCLEtBQUs7Z0JBS0ksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJU2tpbGwsIElTa2lsbENhdGVnb3J5LCBJU2tpbGxTdWJDYXRlZ29yeSB9IGZyb20gJy4uLy4uL21vZGVscy9za2lsbC5tb2RlbCc7XG5pbXBvcnQgeyBTa2lsbEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2tpbGwtZm9ybS5zZXJ2aWNlJztcbmltcG9ydCB7IFNraWxsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9za2lsbHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2tsLWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9za2lsbC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9za2lsbC1mb3JtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2tpbGxGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHVibGljIGZvcm06IEZvcm1Hcm91cCB8IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgZm9ybUlzVmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgaXNTdWJjYXRlZ29yeURpc2FibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHByaXZhdGUgX2NhdGVnb3J5VmFsdWVDaGFuZ2VTdWI6IFN1YnNjcmlwdGlvbiB8IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9mb3JtU3RhdHVzQ2hhbmdlU3ViOiBTdWJzY3JpcHRpb24gfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfcmVzZXRGb3JtJDogT2JzZXJ2YWJsZTx2b2lkPjtcblxuICAgIHByaXZhdGUgX3JvdXRlRGF0YVN1YjogU3Vic2NyaXB0aW9uIHwgdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX3NraWxsOiBJU2tpbGwgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBjYXRlZ29yaWVzOiBJU2tpbGxDYXRlZ29yeVtdID0gW107XG4gICAgQElucHV0KCkgc3ViY2F0ZWdvcmllcz86IElTa2lsbFN1YkNhdGVnb3J5W10gPSBbXTtcbiAgICBASW5wdXQoKSBidXR0b25MYWJlbDogc3RyaW5nID0gJ1NhdmUnO1xuXG4gICAgLy8gbmdPbkluaXQgaXMgY2FsbGVkIGJlZm9yZSBzZXQgc2tpbGxcbiAgICBASW5wdXQoKSBzZXQgc2tpbGwoc2tpbGw6IElTa2lsbCB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9za2lsbCA9IHNraWxsO1xuICAgICAgICB0aGlzLmluaXRGb3JtKHRoaXMuX3NraWxsKTtcbiAgICB9XG5cbiAgICBAT3V0cHV0KCkgY29tbWl0U2tpbGwgPSBuZXcgRXZlbnRFbWl0dGVyPElTa2lsbD4oKTtcblxuICAgIGdldCBuYW1lQ29udHJvbCgpIHsgcmV0dXJuIHRoaXMuZm9ybT8uZ2V0KCduYW1lJykgYXMgRm9ybUNvbnRyb2w7IH1cbiAgICBnZXQgY2F0ZWdvcnlDb250cm9sKCkgeyByZXR1cm4gdGhpcy5mb3JtPy5nZXQoJ2NhdGVnb3J5SWQnKSBhcyBGb3JtQ29udHJvbDsgfVxuICAgIGdldCBzdWJjYXRlZ29yeUNvbnRyb2woKSB7IHJldHVybiB0aGlzLmZvcm0/LmdldCgnc3ViY2F0ZWdvcnlJZCcpIGFzIEZvcm1Db250cm9sOyB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHNraWxsU2VydmljZTogU2tpbGxzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBza2lsbEZvcm1TZXJ2aWNlOiBTa2lsbEZvcm1TZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0Rm9ybSQgPSB0aGlzLnNraWxsRm9ybVNlcnZpY2UucmVzZXRGb3JtJDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0Rm9ybSh0aGlzLl9za2lsbCk7XG4gICAgICAgIC8vIHRoaXMubGlzdGVuQ2F0ZWdvcnlWYWx1ZUNoYW5nZSgpO1xuICAgICAgICB0aGlzLmxpc3RlbkZvcm1TdGF0dXNDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Gb3JtUmVzZXQoKTtcbiAgICB9XG5cbiAgICBpbml0Rm9ybShza2lsbDogSVNraWxsIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBbc2tpbGw/Lm5hbWUgfHwgJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV1dLFxuICAgICAgICAgICAgICAgIC8vIGNhdGVnb3J5SWQ6IFtza2lsbD8uY2F0ZWdvcnlJZCB8fCAnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgICAgICAgICAvLyBzdWJjYXRlZ29yeUlkOiBbc2tpbGw/LnN1YmNhdGVnb3J5SWQgfHwgJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbml0Rm9ybScsIHNraWxsKTtcbiAgICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKHtcbiAgICAgICAgICAgIG5hbWU6IHNraWxsPy5uYW1lIHx8ICcnLFxuICAgICAgICAgICAgLy8gY2F0ZWdvcnlJZDogc2tpbGw/LmNhdGVnb3J5SWQgfHwgJycsXG4gICAgICAgICAgICAvLyBzdWJjYXRlZ29yeUlkOiBza2lsbD8uc3ViY2F0ZWdvcnlJZCB8fCAnJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGhpcy5jYXRlZ29yeUNvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgICAvLyB0aGlzLnN1YmNhdGVnb3J5Q29udHJvbC5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgb25Db21taXRTa2lsbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybUlzVmFsaWQgJiYgdGhpcy5mb3JtPy52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5jb21taXRTa2lsbC5lbWl0KFxuICAgICAgICAgICAgICAgIHRoaXMuX3NraWxsPy5pZFxuICAgICAgICAgICAgICAgICAgICA/IHsgLi4udGhpcy5mb3JtLnZhbHVlLCBjYXRlZ29yeUlkOiB0aGlzLl9za2lsbD8uY2F0ZWdvcnlJZCwgc3ViY2F0ZWdvcnlJZDogdGhpcy5fc2tpbGw/LnN1YmNhdGVnb3J5SWQsIGlkOiB0aGlzLl9za2lsbC5pZCB9XG4gICAgICAgICAgICAgICAgICAgIDogeyAuLi50aGlzLmZvcm0udmFsdWUsIGNhdGVnb3J5SWQ6IHRoaXMuX3NraWxsPy5jYXRlZ29yeUlkLCBzdWJjYXRlZ29yeUlkOiB0aGlzLl9za2lsbD8uc3ViY2F0ZWdvcnlJZCB9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyB0aGlzLmNvbW1pdFNraWxsLmVtaXQodGhpcy5mb3JtLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybT8ubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlzdGVuQ2F0ZWdvcnlWYWx1ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcnlWYWx1ZUNoYW5nZVN1YiA9IHRoaXMuY2F0ZWdvcnlDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgc3RhcnRXaXRoKHRoaXMuX3NraWxsPy5jYXRlZ29yeUlkKSxcbiAgICAgICAgICAgICAgICBmaWx0ZXIoY2F0ZWdvcnlJZCA9PiAhIWNhdGVnb3J5SWQpLFxuICAgICAgICAgICAgICAgIHN3aXRjaE1hcChjYXRlZ29yeUlkID0+IHRoaXMuc2tpbGxTZXJ2aWNlLmdldFN1YkNhdGVnb3JpZXMoY2F0ZWdvcnlJZCkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHN1YkNhdGVnb3JpZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ViY2F0ZWdvcmllcyA9IHN1YkNhdGVnb3JpZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJjYXRlZ29yeUNvbnRyb2wucGF0Y2hWYWx1ZSh0aGlzLl9za2lsbD8uc3ViY2F0ZWdvcnlJZCB8fCAnJyk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pc1N1YmNhdGVnb3J5RGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN1YmNhdGVnb3J5Q29udHJvbC5lbmFibGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxpc3RlbkZvcm1TdGF0dXNDaGFuZ2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2Zvcm1TdGF0dXNDaGFuZ2VTdWIgPSB0aGlzLmZvcm0/LnN0YXR1c0NoYW5nZXNcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFRoZSBEZWJvdW5jZXRpbWUgZW1pdHMgdGhlIGxhc3QgcmVjZWl2ZWQgdmFsdWVcbiAgICAgICAgICAgICAgICAgKiBmcm9tIHRoZSBzb3VyY2Ugb2JzZXJ2YWJsZSBhZnRlciBhIHNwZWNpZmllZCBhbW91bnRcbiAgICAgICAgICAgICAgICAgKiBvZiB0aW1lIGhhcyBlbGFwc2VkIHdpdGhvdXQgYW55IG90aGVyIHZhbHVlIGFwcGVhcmluZ1xuICAgICAgICAgICAgICAgICAqIG9uIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGRlYm91bmNlVGltZSgxMDApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZvcm1TdGF0dXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmb3JtU3RhdHVzID09PSBcIklOVkFMSURcIiB8fCBmb3JtU3RhdHVzID09PSBcIlBFTkRJTkdcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtSXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtSXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsaXN0ZW5Gb3JtUmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3Jlc2V0Rm9ybSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9ybT8ucmVzZXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DYXRlZ29yeUNoYW5nZShlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5pc1N1YmNhdGVnb3J5RGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnN1YmNhdGVnb3J5Q29udHJvbC5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgb25DbG9zZUNsaWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9za2lsbHMnLCB7IG91dGxldHM6IHsgZGV0YWlsczogbnVsbCB9IH1dKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcnlWYWx1ZUNoYW5nZVN1Yj8udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5fZm9ybVN0YXR1c0NoYW5nZVN1Yj8udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5fcm91dGVEYXRhU3ViPy51bnN1YnNjcmliZSgpO1xuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgcHktNSBzcGFjZS15LTYgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1cIj5cbiAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgKG5nU3VibWl0KT1cIm9uQ29tbWl0U2tpbGwoKVwiIGNsYXNzPVwicHNyLWZvcm1fX2Zvcm1cIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicHNyLWZvcm1fX2xhYmVsXCIgZm9yPVwibmFtZVwiPlNraWxsIG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHNyLWZvcm1fX2ZpZWxkIHBzci1mb3JtX19maWVsZC0tYWx0XCIgcGxhY2Vob2xkZXI9XCJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicHNyLWZvcm1fX2xhYmVsXCIgZm9yPVwiY2F0ZWdvcnlcIj5DYXRlZ29yeTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJjYXRlZ29yeUlkXCIgKGNoYW5nZSk9XCJvbkNhdGVnb3J5Q2hhbmdlKCRldmVudClcIiBpZD1cImNhdGVnb3J5XCIgbmFtZT1cImNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHNyLWZvcm1fX3NlbGVjdCBwc3ItZm9ybV9fc2VsZWN0LS1hbHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPiAtLSA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBbdmFsdWVdPVwiY2F0ZWdvcnkuaWRcIiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllc1wiPnt7IGNhdGVnb3J5Lm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicHNyLWZvcm1fX2xhYmVsXCIgZm9yPVwic3ViLWNhdGVnb3J5XCI+U3ViIGNhdGVnb3J5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGZvcm1Db250cm9sTmFtZT1cInN1YmNhdGVnb3J5SWRcIiBbZGlzYWJsZUNvbnRyb2xdPVwiaXNTdWJjYXRlZ29yeURpc2FibGVkXCIgaWQ9XCJzdWItY2F0ZWdvcnlcIiBuYW1lPVwic3ViLWNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHNyLWZvcm1fX3NlbGVjdCBwc3ItZm9ybV9fc2VsZWN0LS1hbHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPiAtLSA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBbdmFsdWVdPVwiaXRlbS5pZFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHN1YmNhdGVnb3JpZXNcIj57eyBpdGVtLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFmb3JtSXNWYWxpZFwiIGNsYXNzPVwicHNyLWZvcm1fX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAge3tidXR0b25MYWJlbH19XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=