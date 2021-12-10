import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { SkillsService } from '@psr/skill/data-access';
import { ISkillResolverResult } from '@psr/skill/shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class IndexResolver implements Resolve<ISkillResolverResult> {
    constructor(private skillService: SkillsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISkillResolverResult> {
        return this.skillService.getCategories().pipe(
            map(response => ({
                "categories": response
            }))
        );
    }
}
