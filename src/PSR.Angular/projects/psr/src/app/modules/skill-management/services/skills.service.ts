import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_TOKEN, IAppConfig } from '@config/app.config';
import { Observable, Subject } from 'rxjs';

import { ISkill, ISkillCategory, ISkillSubCategory } from '../models/skill.model';
import { SkillMgtEndpoints } from '../skill-mgt-constants';

@Injectable()
export class SkillsService {

    private _saveSkillSubject = new Subject<ISkill>();
    private _updateSkillSubject = new Subject<ISkill>();
    private _deleteSkillSubject = new Subject<ISkill>();

    get onSkillSave$(): Observable<ISkill> {
        return this._saveSkillSubject.asObservable();
    }

    get onSkillUpdate$(): Observable<ISkill> {
        return this._saveSkillSubject.asObservable();
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

    public getSkills(): Observable<ISkill[]> {
        return this.http.get<ISkill[]>(SkillMgtEndpoints.GetSkills(this.appConfig)).pipe(
            // shareReplay()
        );
    }

    public getSkillsByCategoryAndSubcategory(categoryId: string, subcategoryId: string): Observable<ISkill[]> {
        return this.http.get<ISkill[]>(SkillMgtEndpoints.GetSkillsByCategoryAndSubcategory(this.appConfig, categoryId, subcategoryId)).pipe(
            // shareReplay()
        );
    }

    public getSkill(id: string): Observable<ISkill> {
        return this.http.get<ISkill>(SkillMgtEndpoints.GetSkill(this.appConfig, id)).pipe(
            // shareReplay()
        );
    }

    public getCategories(): Observable<ISkillCategory[]> {
        return this.http.get<ISkillCategory[]>(SkillMgtEndpoints.GetSkillCategories(this.appConfig)).pipe(
            // shareReplay()
        );
    }

    public getSubCategories(categoryId: string): Observable<ISkillSubCategory[]> {
        return this.http.get<ISkillSubCategory[]>(SkillMgtEndpoints.GetSkillSubCategories(this.appConfig, categoryId)).pipe(
            // shareReplay()
        );
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

    public deleteSkill(skillId: string): Observable<boolean> {
        return this.http.delete<boolean>(SkillMgtEndpoints.DeleteSkill(this.appConfig, skillId));
    }
}
