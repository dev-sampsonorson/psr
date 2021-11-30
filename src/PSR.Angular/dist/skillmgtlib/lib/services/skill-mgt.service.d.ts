import { HttpClient } from '@angular/common/http';
import { IAppConfig } from '@corelib';
import { ISkill } from '@skilllib';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SkillMgtService {
    private http;
    private appConfig;
    private _saveSkillSubject;
    private _updateSkillSubject;
    private _deleteSkillSubject;
    get onSkillSave$(): Observable<ISkill>;
    get onSkillUpdate$(): Observable<ISkill>;
    get onSkillDelete$(): Observable<ISkill>;
    constructor(http: HttpClient, appConfig: IAppConfig);
    notifySkillSave(skill: ISkill): void;
    notifySkillUpdate(skill: ISkill): void;
    notifySkillDelete(skill: ISkill): void;
    addSkill(skill: ISkill): Observable<ISkill>;
    updateSkill(skill: ISkill): Observable<ISkill>;
    deleteSkill(skillId: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillMgtService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SkillMgtService>;
}
