import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ISkill } from '../models/skill.model';
import { SkillsService } from '../services/skills.service';
import * as i0 from "@angular/core";
export declare class SkillListResolver implements Resolve<ISkill[]> {
    private skillService;
    constructor(skillService: SkillsService);
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISkill[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillListResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SkillListResolver>;
}
