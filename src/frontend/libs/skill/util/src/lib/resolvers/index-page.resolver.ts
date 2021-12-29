import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { SkillsService } from '@psr/skill/data-access';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ISkillResolverResult } from '../models';

@Injectable()
export class IndexPageResolver implements Resolve<ISkillResolverResult> {
    constructor(
        private skillService: SkillsService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISkillResolverResult> {
        return this.skillService.getCategories().pipe(
            switchMap(response => of({
                "categories": response
            }))
        );
    }
}
