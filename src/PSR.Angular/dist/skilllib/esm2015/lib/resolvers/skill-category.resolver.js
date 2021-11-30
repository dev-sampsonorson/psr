import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../services/skills.service";
export class SkillCategoryResolver {
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
SkillCategoryResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryResolver, deps: [{ token: i1.SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
SkillCategoryResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryResolver });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryResolver, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.SkillsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtY2F0ZWdvcnkucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbGxpYi9zcmMvbGliL3Jlc29sdmVycy9za2lsbC1jYXRlZ29yeS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQU10QyxNQUFNLE9BQU8scUJBQXFCO0lBQzlCLFlBQW9CLFlBQTJCO1FBQTNCLGlCQUFZLEdBQVosWUFBWSxDQUFlO0lBQUksQ0FBQztJQUNwRCxPQUFPLENBQUMsS0FBNkIsRUFBRSxLQUEwQjs7UUFDN0QsTUFBTSxVQUFVLEdBQUcsTUFBQSxNQUFBLE1BQUEsS0FBSyxDQUFDLE1BQU0sMENBQUUsSUFBSSwwQ0FBRSxjQUFjLDBDQUFFLFVBQVUsQ0FBQztRQUNsRSxPQUFPLFVBQVU7WUFDYixDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzttSEFQUSxxQkFBcUI7dUhBQXJCLHFCQUFxQjs0RkFBckIscUJBQXFCO2tCQURqQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSZXNvbHZlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IElTa2lsbENhdGVnb3J5IH0gZnJvbSAnLi4vbW9kZWxzL3NraWxsLm1vZGVsJztcclxuaW1wb3J0IHsgU2tpbGxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NraWxscy5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNraWxsQ2F0ZWdvcnlSZXNvbHZlciBpbXBsZW1lbnRzIFJlc29sdmU8SVNraWxsQ2F0ZWdvcnlbXT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBza2lsbFNlcnZpY2U6IFNraWxsc1NlcnZpY2UpIHsgfVxyXG4gICAgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPElTa2lsbENhdGVnb3J5W10+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gcm91dGUucGFyZW50Py5kYXRhPy5yZXNvbHZlclJlc3VsdD8uY2F0ZWdvcmllcztcclxuICAgICAgICByZXR1cm4gY2F0ZWdvcmllc1xyXG4gICAgICAgICAgICA/IG9mKGNhdGVnb3JpZXMpXHJcbiAgICAgICAgICAgIDogdGhpcy5za2lsbFNlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==