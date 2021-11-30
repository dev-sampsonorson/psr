import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ISkillResolverResult, SkillsService } from '@skilllib';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class IndexResolver implements Resolve<ISkillResolverResult> {
    private skillService;
    constructor(skillService: SkillsService);
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISkillResolverResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IndexResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IndexResolver>;
}
