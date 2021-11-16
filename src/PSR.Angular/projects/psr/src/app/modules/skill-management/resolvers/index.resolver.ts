import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SkillsService } from '../services/skills.service';
import { IResolverResult } from '../skill.model';

@Injectable()
export class IndexResolver implements Resolve<IResolverResult> {
    constructor(private skillService: SkillsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IResolverResult> {
        return this.skillService.getCategories().pipe(
            map(response => ({
                "categories": response
            }))
        );
    }
}
