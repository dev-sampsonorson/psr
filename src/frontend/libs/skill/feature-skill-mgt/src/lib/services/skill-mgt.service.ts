import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_TOKEN, IAppConfig } from '@psr/core';
import { ISkill } from '@psr/skill/shared';
import { Observable, Subject } from 'rxjs';

import { SkillMgtEndpoints } from '../skill-mgt.endpoints';

@Injectable()
export class SkillMgtService {

    private _saveSkillSubject = new Subject<ISkill>();
    private _updateSkillSubject = new Subject<ISkill>();
    private _deleteSkillSubject = new Subject<ISkill>();

    get onSkillSave$(): Observable<ISkill> {
        return this._saveSkillSubject.asObservable();
    }

    get onSkillUpdate$(): Observable<ISkill> {
        return this._updateSkillSubject.asObservable();
    }

    // know what skill was delete
    get onSkillDelete$(): Observable<ISkill> {
        return this._deleteSkillSubject.asObservable();
    }

    constructor(
        private http: HttpClient,
        @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig
    ) { }

    public notifySkillSave(skill: ISkill): void {
        this._saveSkillSubject.next(skill);
    }

    public notifySkillUpdate(skill: ISkill): void {
        this._updateSkillSubject.next(skill);
    }

    // tell subscribers what skill was deleted
    public notifySkillDelete(skill: ISkill): void {
        this._deleteSkillSubject.next(skill);
    }

    public addSkill(skill: ISkill): Observable<ISkill> {
        return this.http.post<ISkill>(SkillMgtEndpoints.AddSkill(this.appConfig), skill).pipe(
            // shareReplay()
        );
    }

    public updateSkill(skill: ISkill): Observable<ISkill> {
        return this.http.put<ISkill>(SkillMgtEndpoints.UpdateSkill(this.appConfig), skill).pipe(
            // shareReplay()
        );
    }

    public deleteSkill(skillId: string): Observable<any> {
        return this.http.delete<any>(SkillMgtEndpoints.DeleteSkill(this.appConfig, skillId));
    }
}
