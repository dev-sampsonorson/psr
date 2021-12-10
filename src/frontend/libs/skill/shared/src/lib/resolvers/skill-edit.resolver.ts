import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ISkill, ISkillCategory, SkillsService } from '@psr/skill/data-access';
import { Observable, of, zip } from 'rxjs';
import { pluck, switchMap, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SkillEditResolver implements Resolve<[ISkillCategory[], ISkill]> {
    constructor(private skillService: SkillsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[ISkillCategory[], ISkill]> {

        const categories = route.parent?.data?.resolverResult?.categories;
        const categories$ = categories ? of(categories as ISkillCategory[]) : this.skillService.getCategories();
        const skill$ = of(route.params).pipe(
            pluck('id'),
            switchMap(id => this.skillService.getSkill(id)),
            take(1),
        );

        return zip(categories$, skill$);
    }
}
