import { IAppConfig } from '@psr/core';


export interface ISkillEndpoints {
    readonly GetSkills: (config: IAppConfig) => string;
    readonly GetSkillsByCategoryAndSubcategory: (config: IAppConfig, categoryId: string, subcategoryId: string) => string;
    readonly GetSkill: (config: IAppConfig, id: string) => string;
    readonly GetSkillCategories: (config: IAppConfig) => string;
    readonly GetSkillSubCategories: (config: IAppConfig, categoryId: string) => string;
    readonly GetSkillCategory: (config: IAppConfig, id: string) => string;
    readonly GetSkillSubcategory: (config: IAppConfig, id: string) => string;
}

let endpoints: ISkillEndpoints = {
    GetSkills: (config: IAppConfig) => config.getUrl(`skills`),
    GetSkillsByCategoryAndSubcategory: (config: IAppConfig, categoryId: string, subcategoryId: string) => {
        return config.getUrl(`skills/categories/${categoryId}/subcategories/${subcategoryId}/list`);
    },
    GetSkill: (config: IAppConfig, id: string) => config.getUrl(`skills/${id}`),
    GetSkillCategories: (config: IAppConfig) => config.getUrl(`skills/categories`),
    GetSkillSubCategories: (config: IAppConfig, categoryId: string) => config.getUrl(`skills/categories/${categoryId}/subcategories`),
    GetSkillCategory: (config: IAppConfig, id: string) => config.getUrl(`skills/categories/${id}`),
    GetSkillSubcategory: (config: IAppConfig, id: string) => config.getUrl(`skills/subcategories/${id}`),
};




export const SkillEndpoints: ISkillEndpoints = endpoints;
