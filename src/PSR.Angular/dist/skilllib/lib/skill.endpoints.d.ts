import { IAppConfig } from '@corelib';
export interface ISkillEndpoints {
    readonly GetSkills: (config: IAppConfig) => string;
    readonly GetSkillsByCategoryAndSubcategory: (config: IAppConfig, categoryId: string, subcategoryId: string) => string;
    readonly GetSkill: (config: IAppConfig, id: string) => string;
    readonly GetSkillCategories: (config: IAppConfig) => string;
    readonly GetSkillSubCategories: (config: IAppConfig, categoryId: string) => string;
    readonly GetSkillCategory: (config: IAppConfig, id: string) => string;
    readonly GetSkillSubcategory: (config: IAppConfig, id: string) => string;
}
export declare const SkillEndpoints: ISkillEndpoints;
