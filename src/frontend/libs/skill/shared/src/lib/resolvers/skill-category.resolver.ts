import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ISkillCategory } from '../models/skill.model';
import { SkillsService } from '../services/skills.service';

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
