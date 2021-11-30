import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SkillsService } from '../services/skills.service';
import * as i0 from "@angular/core";
export declare class SkillSubcategoryResolver implements Resolve<any> {
    private skillService;
    constructor(skillService: SkillsService);
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillSubcategoryResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SkillSubcategoryResolver>;
}
