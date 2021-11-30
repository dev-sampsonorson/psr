import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../services/skills.service";
export class SelectedCategoryResolver {
    constructor(skillService) {
        this.skillService = skillService;
    }
    resolve(route, state) {
        return of(route.params).pipe(pluck('categoryId'), switchMap((categoryId) => this.skillService.getCategory(categoryId)));
    }
}
SelectedCategoryResolver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SelectedCategoryResolver, deps: [{ token: i1.SkillsService }], target: i0.ɵɵFactoryTarget.Injectable });
SelectedCategoryResolver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SelectedCategoryResolver, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SelectedCategoryResolver, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.SkillsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtY2F0ZWdvcnkucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbGxpYi9zcmMvbGliL3Jlc29sdmVycy9zZWxlY3RlZC1jYXRlZ29yeS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBUWxELE1BQU0sT0FBTyx3QkFBd0I7SUFDakMsWUFBb0IsWUFBMkI7UUFBM0IsaUJBQVksR0FBWixZQUFZLENBQWU7SUFBSSxDQUFDO0lBQ3BELE9BQU8sQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBQzdELE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3hCLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFDbkIsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUN2RSxDQUFDO0lBQ04sQ0FBQzs7c0hBUFEsd0JBQXdCOzBIQUF4Qix3QkFBd0IsY0FGckIsTUFBTTs0RkFFVCx3QkFBd0I7a0JBSHBDLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUmVzb2x2ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgcGx1Y2ssIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSVNraWxsQ2F0ZWdvcnkgfSBmcm9tICcuLi9tb2RlbHMvc2tpbGwubW9kZWwnO1xuaW1wb3J0IHsgU2tpbGxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NraWxscy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RlZENhdGVnb3J5UmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPElTa2lsbENhdGVnb3J5PiB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBza2lsbFNlcnZpY2U6IFNraWxsc1NlcnZpY2UpIHsgfVxuICAgIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxJU2tpbGxDYXRlZ29yeT4ge1xuICAgICAgICByZXR1cm4gb2Yocm91dGUucGFyYW1zKS5waXBlKFxuICAgICAgICAgICAgcGx1Y2soJ2NhdGVnb3J5SWQnKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoY2F0ZWdvcnlJZCkgPT4gdGhpcy5za2lsbFNlcnZpY2UuZ2V0Q2F0ZWdvcnkoY2F0ZWdvcnlJZCkpXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19