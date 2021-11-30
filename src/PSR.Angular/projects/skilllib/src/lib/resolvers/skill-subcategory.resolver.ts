import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { pluck, switchMap, take } from 'rxjs/operators';

import { SkillsService } from '../services/skills.service';

@Injectable()
export class SkillSubcategoryResolver implements Resolve<any> {
    constructor(private skillService: SkillsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return of(route.params).pipe(
            pluck('categoryId'),
            switchMap(id => this.skillService.getSubCategories(id)),
            take(1),
            // shareReplay(1)
        );
    }
}
