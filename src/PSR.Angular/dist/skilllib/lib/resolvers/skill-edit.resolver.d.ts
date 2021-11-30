import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ISkill, ISkillCategory } from '../models/skill.model';
import { SkillsService } from '../services/skills.service';
import * as i0 from "@angular/core";
export declare class SkillEditResolver implements Resolve<[ISkillCategory[], ISkill]> {
    private skillService;
    constructor(skillService: SkillsService);
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[ISkillCategory[], ISkill]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillEditResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SkillEditResolver>;
}
