import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@skilllib";
export class IndexResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        return this.skillService.getCategories().pipe(map(response => ({
            "categories": response
        })));
    }
}
IndexResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexResolver, deps: [{ token: i1.SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
IndexResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexResolver });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexResolver, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.SkillsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbG1ndGxpYi9zcmMvbGliL3Jlc29sdmVycy9pbmRleC5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR3JDLE1BQU0sT0FBTyxhQUFhO0lBQ3RCLFlBQW9CLFlBQTJCO1FBQTNCLGlCQUFZLEdBQVosWUFBWSxDQUFlO0lBQUksQ0FBQztJQUNwRCxPQUFPLENBQUMsS0FBNkIsRUFBRSxLQUEwQjtRQUM3RCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUN6QyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2IsWUFBWSxFQUFFLFFBQVE7U0FDekIsQ0FBQyxDQUFDLENBQ04sQ0FBQztJQUNOLENBQUM7OzJHQVJRLGFBQWE7K0dBQWIsYUFBYTs0RkFBYixhQUFhO2tCQUR6QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUmVzb2x2ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJU2tpbGxSZXNvbHZlclJlc3VsdCwgU2tpbGxzU2VydmljZSB9IGZyb20gJ0Bza2lsbGxpYic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbmRleFJlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxJU2tpbGxSZXNvbHZlclJlc3VsdD4ge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2tpbGxTZXJ2aWNlOiBTa2lsbHNTZXJ2aWNlKSB7IH1cbiAgICByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8SVNraWxsUmVzb2x2ZXJSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2tpbGxTZXJ2aWNlLmdldENhdGVnb3JpZXMoKS5waXBlKFxuICAgICAgICAgICAgbWFwKHJlc3BvbnNlID0+ICh7XG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yaWVzXCI6IHJlc3BvbnNlXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=