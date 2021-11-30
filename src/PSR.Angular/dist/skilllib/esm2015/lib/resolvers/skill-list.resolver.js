import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../services/skills.service";
export class SkillListResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        return of(route.params).pipe(map(({ categoryId, subcategoryId }) => ({ categoryId, subcategoryId })), switchMap(params => this.skillService.getSkillsByCategoryAndSubcategory(params.categoryId, params.subcategoryId)), take(1));
    }
}
SkillListResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListResolver, deps: [{ token: i1.SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
SkillListResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListResolver });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListResolver, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.SkillsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtbGlzdC5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NraWxsbGliL3NyYy9saWIvcmVzb2x2ZXJzL3NraWxsLWxpc3QucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFNdEQsTUFBTSxPQUFPLGlCQUFpQjtJQUMxQixZQUFvQixZQUEyQjtRQUEzQixpQkFBWSxHQUFaLFlBQVksQ0FBZTtJQUFJLENBQUM7SUFDcEQsT0FBTyxDQUFDLEtBQTZCLEVBQUUsS0FBMEI7UUFDN0QsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDeEIsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUN2RSxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlDQUFpQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQ2pILElBQUksQ0FBQyxDQUFDLENBQUMsQ0FFVixDQUFDO0lBQ04sQ0FBQzs7K0dBVFEsaUJBQWlCO21IQUFqQixpQkFBaUI7NEZBQWpCLGlCQUFpQjtrQkFEN0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJlc29sdmUsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJU2tpbGwgfSBmcm9tICcuLi9tb2RlbHMvc2tpbGwubW9kZWwnO1xuaW1wb3J0IHsgU2tpbGxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NraWxscy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNraWxsTGlzdFJlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxJU2tpbGxbXT4ge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2tpbGxTZXJ2aWNlOiBTa2lsbHNTZXJ2aWNlKSB7IH1cbiAgICByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8SVNraWxsW10+IHtcbiAgICAgICAgcmV0dXJuIG9mKHJvdXRlLnBhcmFtcykucGlwZShcbiAgICAgICAgICAgIG1hcCgoeyBjYXRlZ29yeUlkLCBzdWJjYXRlZ29yeUlkIH0pID0+ICh7IGNhdGVnb3J5SWQsIHN1YmNhdGVnb3J5SWQgfSkpLFxuICAgICAgICAgICAgc3dpdGNoTWFwKHBhcmFtcyA9PiB0aGlzLnNraWxsU2VydmljZS5nZXRTa2lsbHNCeUNhdGVnb3J5QW5kU3ViY2F0ZWdvcnkocGFyYW1zLmNhdGVnb3J5SWQsIHBhcmFtcy5zdWJjYXRlZ29yeUlkKSksXG4gICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgLy8gc2hhcmVSZXBsYXkoMSlcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=