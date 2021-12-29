import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IUser, UserStorageService } from '@psr/core';
import { ISkillCategory, SkillsService } from '@psr/skill/data-access';
import { map, Observable, of, switchMap, take } from 'rxjs';

/* eslint-disable @typescript-eslint/no-unused-vars */
@Injectable()
export class MyskillIndexPageResolver implements Resolve<{ user: IUser | null, categories: ISkillCategory[] }> {
    constructor(
        private skillService: SkillsService,
        private userStorage: UserStorageService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ user: IUser | null, categories: ISkillCategory[] }> {
        // return of({ user: null, categories: [] })
        return of(this.userStorage.getAuthenticatedUser()).pipe(
            switchMap(x => x),
            take(1),
            switchMap((user) => {
                return this.skillService.getCategoriesByEmployee(user.employeeId).pipe(
                    map((categories) => ({
                        "user": user,
                        "categories": categories
                    }))
                );
            })
        );

        /* const kkk = zip([this.userStorage.getAuthenticatedUser(), this.skillService.getCategoriesByEmployee('61D43E6F-1D2C-4EBC-76DF-08D9951FFFAC')]).pipe(
            switchMap(([user, categories]) => of({
                "user": user,
                "categories": categories
            })),
            tap(user => {
                console.log('user.employeeId', user);
            })
        );
        console.log('kkk', kkk);
        return kkk; */
    }
}
