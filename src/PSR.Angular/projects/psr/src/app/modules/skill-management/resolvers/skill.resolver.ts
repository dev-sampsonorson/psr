import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { pluck, switchMap, take } from 'rxjs/operators';

import { ISkill } from '../models/skill.model';
import { SkillsService } from '../services/skills.service';

@Injectable()
export class SkillResolver implements Resolve<ISkill> {
    constructor(private skillService: SkillsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISkill> {
        return of(route.params).pipe(
            pluck('id'),
            switchMap(id => this.skillService.getSkill(id)),
            take(1),
            // shareReplay(1)
        );
        // return this.skillService.getSkill();
    }
}
