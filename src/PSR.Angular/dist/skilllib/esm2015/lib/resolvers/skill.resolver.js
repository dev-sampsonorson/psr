import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { pluck, switchMap, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../services/skills.service";
export class SkillResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        return of(route.params).pipe(pluck('id'), switchMap(id => this.skillService.getSkill(id)), take(1));
        // return this.skillService.getSkill();
    }
}
SkillResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillResolver, deps: [{ token: i1.SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
SkillResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillResolver });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillResolver, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.SkillsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbGxpYi9zcmMvbGliL3Jlc29sdmVycy9za2lsbC5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU14RCxNQUFNLE9BQU8sYUFBYTtJQUN0QixZQUFvQixZQUEyQjtRQUEzQixpQkFBWSxHQUFaLFlBQVksQ0FBZTtJQUFJLENBQUM7SUFDcEQsT0FBTyxDQUFDLEtBQTZCLEVBQUUsS0FBMEI7UUFDN0QsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUNYLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQy9DLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FFVixDQUFDO1FBQ0YsdUNBQXVDO0lBQzNDLENBQUM7OzJHQVZRLGFBQWE7K0dBQWIsYUFBYTs0RkFBYixhQUFhO2tCQUR6QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUmVzb2x2ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgcGx1Y2ssIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSVNraWxsIH0gZnJvbSAnLi4vbW9kZWxzL3NraWxsLm1vZGVsJztcbmltcG9ydCB7IFNraWxsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9za2lsbHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTa2lsbFJlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxJU2tpbGw+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNraWxsU2VydmljZTogU2tpbGxzU2VydmljZSkgeyB9XG4gICAgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPElTa2lsbD4ge1xuICAgICAgICByZXR1cm4gb2Yocm91dGUucGFyYW1zKS5waXBlKFxuICAgICAgICAgICAgcGx1Y2soJ2lkJyksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoaWQgPT4gdGhpcy5za2lsbFNlcnZpY2UuZ2V0U2tpbGwoaWQpKSxcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICAvLyBzaGFyZVJlcGxheSgxKVxuICAgICAgICApO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5za2lsbFNlcnZpY2UuZ2V0U2tpbGwoKTtcbiAgICB9XG59XG4iXX0=