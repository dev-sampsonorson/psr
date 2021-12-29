import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { UserStorageService } from '@psr/core';
import { ISkillSubCategory, SkillsService } from '@psr/skill/data-access';
import { Observable, of } from 'rxjs';
import { pluck, switchMap, take, zipWith } from 'rxjs/operators';

@Injectable()
export class MyskillSubcategoryResolver implements Resolve<ISkillSubCategory[]> {
    constructor(
        private skillService: SkillsService,
        private userStorage: UserStorageService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ISkillSubCategory[]> {
        return of(route.params).pipe(
            pluck('categoryId'),
            zipWith(this.userStorage.getAuthenticatedUser()),
            switchMap(([categoryId, user]) => this.skillService.getSubCategoriesByEmployee(categoryId, user.employeeId)),
            take(1),
        );
    }
}
