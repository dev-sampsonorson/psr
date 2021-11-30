import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../services/skills.service";
export class SkillAddResolver {
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
SkillAddResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillAddResolver, deps: [{ token: i1.SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
SkillAddResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillAddResolver });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillAddResolver, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.SkillsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtYWRkLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2tpbGxsaWIvc3JjL2xpYi9yZXNvbHZlcnMvc2tpbGwtYWRkLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBTXRDLE1BQU0sT0FBTyxnQkFBZ0I7SUFDekIsWUFBb0IsWUFBMkI7UUFBM0IsaUJBQVksR0FBWixZQUFZLENBQWU7SUFBSSxDQUFDO0lBQ3BELE9BQU8sQ0FBQyxLQUE2QixFQUFFLEtBQTBCOztRQUM3RCxNQUFNLFVBQVUsR0FBRyxNQUFBLE1BQUEsTUFBQSxLQUFLLENBQUMsTUFBTSwwQ0FBRSxJQUFJLDBDQUFFLGNBQWMsMENBQUUsVUFBVSxDQUFDO1FBQ2xFLE9BQU8sVUFBVTtZQUNiLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzVDLENBQUM7OzhHQVBRLGdCQUFnQjtrSEFBaEIsZ0JBQWdCOzRGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSZXNvbHZlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElTa2lsbENhdGVnb3J5IH0gZnJvbSAnLi4vbW9kZWxzL3NraWxsLm1vZGVsJztcbmltcG9ydCB7IFNraWxsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9za2lsbHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTa2lsbEFkZFJlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxJU2tpbGxDYXRlZ29yeVtdPiB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBza2lsbFNlcnZpY2U6IFNraWxsc1NlcnZpY2UpIHsgfVxuICAgIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxJU2tpbGxDYXRlZ29yeVtdPiB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSByb3V0ZS5wYXJlbnQ/LmRhdGE/LnJlc29sdmVyUmVzdWx0Py5jYXRlZ29yaWVzO1xuICAgICAgICByZXR1cm4gY2F0ZWdvcmllc1xuICAgICAgICAgICAgPyBvZihjYXRlZ29yaWVzKVxuICAgICAgICAgICAgOiB0aGlzLnNraWxsU2VydmljZS5nZXRDYXRlZ29yaWVzKCk7XG4gICAgfVxufVxuIl19