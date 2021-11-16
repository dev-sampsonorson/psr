import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_TOKEN, IAppConfig } from '@core/app.config';
import { Observable } from 'rxjs';

import { SkillMgtEndpoints } from '../skill-mgt-constants';
import { ISkill, ISkillCategory, ISkillSubCategory } from '../skill.model';

@Injectable()
export class SkillsService {

    constructor(
        private http: HttpClient,
        @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig
    ) { }

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
}
