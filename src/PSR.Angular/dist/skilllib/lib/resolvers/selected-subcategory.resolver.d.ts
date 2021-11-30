import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ISkillSubCategory } from '../models/skill.model';
import { SkillsService } from '../services/skills.service';
import * as i0 from "@angular/core";
export declare class SelectedSubcategoryResolver implements Resolve<ISkillSubCategory> {
    private skillService;
    constructor(skillService: SkillsService);
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISkillSubCategory>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectedSubcategoryResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SelectedSubcategoryResolver>;
}
