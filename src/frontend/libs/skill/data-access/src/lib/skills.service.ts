import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_TOKEN, IAppConfig } from '@psr/core';
import { Observable } from 'rxjs';

import { ISkill, ISkillCategory, ISkillSubCategory } from './skill-data-access.model';
import { SkillEndpoints } from './skill.endpoints';

@Injectable()
export class SkillsService {

    constructor(
        private http: HttpClient,
        @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig
    ) { }

    public getSkills(): Observable<ISkill[]> {
        return this.http.get<ISkill[]>(SkillEndpoints.GetSkills(this.appConfig)).pipe(
            // shareReplay()
        );
    }

    public getSkillsByCategoryAndSubcategoryAndEmployee(categoryId: string, subcategoryId: string, employeeId: string): Observable<ISkill[]> {
        return this.http.get<ISkill[]>(SkillEndpoints.GetSkillsByCategoryAndSubcategoryAndEmployee(this.appConfig, categoryId, subcategoryId, employeeId)).pipe(
            // shareReplay()
        );
    }

    public getSkillsByCategoryAndSubcategory(categoryId: string, subcategoryId: string): Observable<ISkill[]> {
        return this.http.get<ISkill[]>(SkillEndpoints.GetSkillsByCategoryAndSubcategory(this.appConfig, categoryId, subcategoryId)).pipe(
            // shareReplay()
        );
    }

    public getSkill(id: string): Observable<ISkill> {
        return this.http.get<ISkill>(SkillEndpoints.GetSkill(this.appConfig, id)).pipe(
            // shareReplay()
        );
    }

    public getCategory(id: string): Observable<ISkill> {
        return this.http.get<ISkill>(SkillEndpoints.GetSkillCategory(this.appConfig, id)).pipe(
            // shareReplay()
        );
    }

    public getSubcategory(id: string): Observable<ISkill> {
        return this.http.get<ISkill>(SkillEndpoints.GetSkillSubcategory(this.appConfig, id)).pipe(
            // shareReplay()
        );
    }

    public getCategories(): Observable<ISkillCategory[]> {
        return this.http.get<ISkillCategory[]>(SkillEndpoints.GetSkillCategories(this.appConfig)).pipe(
            // shareReplay()
        );
    }

    public getCategoriesByEmployee(employeeId: string): Observable<ISkillCategory[]> {
        return this.http.get<ISkillCategory[]>(SkillEndpoints.GetSkillCategoriesByEmployee(this.appConfig, employeeId)).pipe(
            // shareReplay()
        );
    }

    public getSubCategories(categoryId: string): Observable<ISkillSubCategory[]> {
        return this.http.get<ISkillSubCategory[]>(SkillEndpoints.GetSkillSubCategories(this.appConfig, categoryId)).pipe(
            // shareReplay()
        );
    }

    public getSubCategoriesByEmployee(categoryId: string, employeeId: string): Observable<ISkillSubCategory[]> {
        return this.http.get<ISkillSubCategory[]>(SkillEndpoints.GetSkillSubCategoriesByEmployee(this.appConfig, categoryId, employeeId)).pipe(
            // shareReplay()
        );
    }
}
