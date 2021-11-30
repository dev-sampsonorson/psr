import { HttpClient } from '@angular/common/http';
import { IAppConfig } from '@corelib';
import { Observable } from 'rxjs';
import { ISkill, ISkillCategory, ISkillSubCategory } from '../models/skill.model';
import * as i0 from "@angular/core";
export declare class SkillsService {
    private http;
    private appConfig;
    constructor(http: HttpClient, appConfig: IAppConfig);
    getSkills(): Observable<ISkill[]>;
    getSkillsByCategoryAndSubcategory(categoryId: string, subcategoryId: string): Observable<ISkill[]>;
    getSkill(id: string): Observable<ISkill>;
    getCategory(id: string): Observable<ISkill>;
    getSubcategory(id: string): Observable<ISkill>;
    getCategories(): Observable<ISkillCategory[]>;
    getSubCategories(categoryId: string): Observable<ISkillSubCategory[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SkillsService>;
}
