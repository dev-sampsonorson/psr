import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { UserStorageService } from '@psr/core';
import { ISkillCategory, SkillsService } from '@psr/skill/data-access';
import { Observable, of, switchMap, take } from 'rxjs';

@Injectable()
export class MyskillCategoryResolver implements Resolve<ISkillCategory[]> {
    constructor(
        private skillService: SkillsService,
        private userStorage: UserStorageService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISkillCategory[]> { //
        const categories = route.parent?.data?.resolverResult?.categories;
        return categories !== undefined && categories.length > 0
            ? of(categories)
            : of(this.userStorage.getAuthenticatedUser()).pipe(
                switchMap(x => x),
                take(1),
                switchMap((user) => this.skillService.getCategoriesByEmployee(user.employeeId))
            );
    }
}
