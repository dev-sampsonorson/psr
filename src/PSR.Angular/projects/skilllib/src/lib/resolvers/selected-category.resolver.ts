import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

import { ISkillCategory } from '../models/skill.model';
import { SkillsService } from '../services/skills.service';

@Injectable({
    providedIn: 'root'
})
export class SelectedCategoryResolver implements Resolve<ISkillCategory> {
    constructor(private skillService: SkillsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISkillCategory> {
        return of(route.params).pipe(
            pluck('categoryId'),
            switchMap((categoryId) => this.skillService.getCategory(categoryId))
        );
    }
}
