import { Injectable } from '@angular/core';
import { of, zip } from 'rxjs';
import { pluck, switchMap, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../services/skills.service";
export class SkillEditResolver {
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
SkillEditResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditResolver, deps: [{ token: i1.SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
SkillEditResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditResolver, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditResolver, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.SkillsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtZWRpdC5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NraWxsbGliL3NyYy9saWIvcmVzb2x2ZXJzL3NraWxsLWVkaXQucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBUXhELE1BQU0sT0FBTyxpQkFBaUI7SUFDMUIsWUFBb0IsWUFBMkI7UUFBM0IsaUJBQVksR0FBWixZQUFZLENBQWU7SUFBSSxDQUFDO0lBQ3BELE9BQU8sQ0FBQyxLQUE2QixFQUFFLEtBQTBCOztRQUU3RCxNQUFNLFVBQVUsR0FBRyxNQUFBLE1BQUEsTUFBQSxLQUFLLENBQUMsTUFBTSwwQ0FBRSxJQUFJLDBDQUFFLGNBQWMsMENBQUUsVUFBVSxDQUFDO1FBQ2xFLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFtQixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0RyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUNYLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQy9DLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDVixDQUFDO1FBRUYsT0FBTyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OytHQWJRLGlCQUFpQjttSEFBakIsaUJBQWlCLGNBRmQsTUFBTTs0RkFFVCxpQkFBaUI7a0JBSDdCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUmVzb2x2ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgemlwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBwbHVjaywgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJU2tpbGwsIElTa2lsbENhdGVnb3J5IH0gZnJvbSAnLi4vbW9kZWxzL3NraWxsLm1vZGVsJztcbmltcG9ydCB7IFNraWxsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9za2lsbHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2tpbGxFZGl0UmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPFtJU2tpbGxDYXRlZ29yeVtdLCBJU2tpbGxdPiB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBza2lsbFNlcnZpY2U6IFNraWxsc1NlcnZpY2UpIHsgfVxuICAgIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxbSVNraWxsQ2F0ZWdvcnlbXSwgSVNraWxsXT4ge1xuXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSByb3V0ZS5wYXJlbnQ/LmRhdGE/LnJlc29sdmVyUmVzdWx0Py5jYXRlZ29yaWVzO1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzJCA9IGNhdGVnb3JpZXMgPyBvZjxJU2tpbGxDYXRlZ29yeVtdPihjYXRlZ29yaWVzKSA6IHRoaXMuc2tpbGxTZXJ2aWNlLmdldENhdGVnb3JpZXMoKTtcbiAgICAgICAgY29uc3Qgc2tpbGwkID0gb2Yocm91dGUucGFyYW1zKS5waXBlKFxuICAgICAgICAgICAgcGx1Y2soJ2lkJyksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoaWQgPT4gdGhpcy5za2lsbFNlcnZpY2UuZ2V0U2tpbGwoaWQpKSxcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHppcChjYXRlZ29yaWVzJCwgc2tpbGwkKTtcbiAgICB9XG59XG4iXX0=