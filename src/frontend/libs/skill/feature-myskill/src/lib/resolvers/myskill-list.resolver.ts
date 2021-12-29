import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { UserStorageService } from '@psr/core';
import { ISkill, SkillsService } from '@psr/skill/data-access';
import { Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

@Injectable()
export class MyskillListResolver implements Resolve<ISkill[]> {
    constructor(
        private skillService: SkillsService,
        private userStorage: UserStorageService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ISkill[]> {
        return of(route.params).pipe(
            switchMap(({ categoryId, subcategoryId }) => {
                return this.userStorage.getAuthenticatedUser().pipe(
                    map(user => ({
                        categoryId,
                        subcategoryId,
                        employeeId: user.employeeId
                    }))
                )
            }),
            switchMap(({ categoryId, subcategoryId, employeeId }) => {
                return this.skillService.getSkillsByCategoryAndSubcategoryAndEmployee(categoryId, subcategoryId, employeeId).pipe(

                )
            }),
            take(1),
            // shareReplay(1)
        );
    }
}
