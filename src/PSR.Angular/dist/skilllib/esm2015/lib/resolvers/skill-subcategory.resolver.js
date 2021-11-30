import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { pluck, switchMap, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../services/skills.service";
export class SkillSubcategoryResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        return of(route.params).pipe(pluck('categoryId'), switchMap(id => this.skillService.getSubCategories(id)), take(1));
    }
}
SkillSubcategoryResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryResolver, deps: [{ token: i1.SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
SkillSubcategoryResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryResolver });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryResolver, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.SkillsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtc3ViY2F0ZWdvcnkucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbGxpYi9zcmMvbGliL3Jlc29sdmVycy9za2lsbC1zdWJjYXRlZ29yeS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUt4RCxNQUFNLE9BQU8sd0JBQXdCO0lBQ2pDLFlBQW9CLFlBQTJCO1FBQTNCLGlCQUFZLEdBQVosWUFBWSxDQUFlO0lBQUksQ0FBQztJQUNwRCxPQUFPLENBQUMsS0FBNkIsRUFBRSxLQUEwQjtRQUM3RCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUN4QixLQUFLLENBQUMsWUFBWSxDQUFDLEVBQ25CLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDdkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUVWLENBQUM7SUFDTixDQUFDOztzSEFUUSx3QkFBd0I7MEhBQXhCLHdCQUF3Qjs0RkFBeEIsd0JBQXdCO2tCQURwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUmVzb2x2ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgcGx1Y2ssIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU2tpbGxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NraWxscy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNraWxsU3ViY2F0ZWdvcnlSZXNvbHZlciBpbXBsZW1lbnRzIFJlc29sdmU8YW55PiB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBza2lsbFNlcnZpY2U6IFNraWxsc1NlcnZpY2UpIHsgfVxuICAgIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG9mKHJvdXRlLnBhcmFtcykucGlwZShcbiAgICAgICAgICAgIHBsdWNrKCdjYXRlZ29yeUlkJyksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoaWQgPT4gdGhpcy5za2lsbFNlcnZpY2UuZ2V0U3ViQ2F0ZWdvcmllcyhpZCkpLFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIC8vIHNoYXJlUmVwbGF5KDEpXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19