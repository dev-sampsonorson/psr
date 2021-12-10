import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ISkillCategory, SkillsService } from '@psr/skill/data-access';
import { Observable, of } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

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
