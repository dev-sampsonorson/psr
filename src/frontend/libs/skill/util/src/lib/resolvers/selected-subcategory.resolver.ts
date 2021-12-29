import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ISkillSubCategory, SkillsService } from '@psr/skill/data-access';
import { Observable, of } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

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
