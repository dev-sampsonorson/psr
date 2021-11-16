import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { SkillsService } from '../services/skills.service';
import { ISkill } from '../skill.model';

@Injectable()
export class SkillListResolver implements Resolve<ISkill[]> {
    constructor(private skillService: SkillsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISkill[]> {
        return of(route.params).pipe(
            map(({ categoryId, subcategoryId }) => ({ categoryId, subcategoryId })),
            switchMap(params => this.skillService.getSkillsByCategoryAndSubcategory(params.categoryId, params.subcategoryId)),
            take(1),
            // shareReplay(1)
        );
    }
}
