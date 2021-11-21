import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

import { ISkillSubCategory } from '../models/skill.model';
import { SkillsService } from '../services/skills.service';

@Injectable({
    providedIn: 'root'
})
export class SelectedSubcategoryResolver implements Resolve<ISkillSubCategory> {
    constructor(private skillService: SkillsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISkillSubCategory> {
        return of(route.params).pipe(
            pluck('subcategoryId'),
            switchMap((subcategoryId) => this.skillService.getSubcategory(subcategoryId))
        );
    }
}
