import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { UserStorageService } from '@psr/core';
import { ISkillRating } from '@psr/skill/data-access';
import { Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { MyskillService } from '../services/myskill.service';

@Injectable()
export class MyskillListResolver implements Resolve<ISkillRating[]> {
    constructor(
        private myskillService: MyskillService,
        private userStorage: UserStorageService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ISkillRating[]> {
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
                return this.myskillService.getSkillRatingsByCategoryAndSubcategoryAndEmployee(categoryId, subcategoryId, employeeId).pipe(

                )
            }),
            take(1),
            // shareReplay(1)
        );
    }
}
