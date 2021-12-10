import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ISkillCategory, SkillsService } from '@psr/skill/data-access';
import { Observable, of } from 'rxjs';

@Injectable()
export class SkillCategoryResolver implements Resolve<ISkillCategory[]> {
    constructor(private skillService: SkillsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISkillCategory[]> {
        const categories = route.parent?.data?.resolverResult?.categories;
        return categories
            ? of(categories)
            : this.skillService.getCategories();
    }
}
