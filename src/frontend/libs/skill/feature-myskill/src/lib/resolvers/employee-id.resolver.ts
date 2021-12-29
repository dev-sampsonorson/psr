/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { UserStorageService } from '@psr/core';
import { map, Observable, take } from 'rxjs';

@Injectable()
export class EmployeeIdResolver implements Resolve<string> {
    constructor(
        private userStorage: UserStorageService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
        return this.userStorage.getAuthenticatedUser().pipe(
            take(1),
            map(user => user.employeeId)
        );
    }
}
