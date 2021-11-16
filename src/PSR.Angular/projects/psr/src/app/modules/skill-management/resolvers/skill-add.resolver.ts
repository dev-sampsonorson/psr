import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { SkillsService } from '../services/skills.service';
import { ISkillCategory } from '../skill.model';

@Injectable()
export class SkillAddResolver implements Resolve<ISkillCategory[]> {
    constructor(private skillService: SkillsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISkillCategory[]> {
        const categories = route.parent?.data?.resolverResult?.categories;
        return categories
            ? of(categories)
            : this.skillService.getCategories();
    }
}
