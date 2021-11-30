import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ISkillCategory } from '../models/skill.model';
import { SkillsService } from '../services/skills.service';
import * as i0 from "@angular/core";
export declare class SkillAddResolver implements Resolve<ISkillCategory[]> {
    private skillService;
    constructor(skillService: SkillsService);
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISkillCategory[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillAddResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SkillAddResolver>;
}