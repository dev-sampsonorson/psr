import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ISkill } from '../skill.mode';
import { SkillsService } from './skills.service';

@Injectable()
export class SkillListResolver implements Resolve<ISkill[]> {
    constructor(private skillService: SkillsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISkill[]> {
        return this.skillService.getSkills();
    }
}
