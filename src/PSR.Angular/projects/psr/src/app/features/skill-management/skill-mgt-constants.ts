import { IAppConfig } from '@config/app.config';

export interface ISkillMgtEndpoints {
    readonly GetSkills: (config: IAppConfig) => string;
    readonly GetSkillsByCategoryAndSubcategory: (config: IAppConfig, categoryId: string, subcategoryId: string) => string;
    readonly GetSkill: (config: IAppConfig, id: string) => string;
    readonly GetSkillCategories: (config: IAppConfig) => string;
    readonly GetSkillSubCategories: (config: IAppConfig, categoryId: string) => string;
    readonly GetSkillCategory: (config: IAppConfig, id: string) => string;
    readonly GetSkillSubcategory: (config: IAppConfig, id: string) => string;
    readonly AddSkill: (config: IAppConfig) => string;
    readonly UpdateSkill: (config: IAppConfig) => string;
    readonly DeleteSkill: (config: IAppConfig, id: string) => string;
}

export interface ISkillMgtRoutes {
    readonly ListSkills: (categoryId: string, subcategoryId: string) => any[];
    readonly ReadSkill: (id: string) => any[];
    readonly EditSkill: (id: string) => any[];
    readonly AddSkill: (categoryId: string, subcategoryId: string) => any[];
    readonly ListSubcategories: (id: string) => any[];
}

let appPaths: ISkillMgtEndpoints = {
    GetSkills: (config: IAppConfig) => config.getUrl(`skills`),
    GetSkillsByCategoryAndSubcategory: (config: IAppConfig, categoryId: string, subcategoryId: string) => {
        return config.getUrl(`skills/categories/${categoryId}/subcategories/${subcategoryId}/list`);
    },
    GetSkill: (config: IAppConfig, id: string) => config.getUrl(`skills/${id}`),
    GetSkillCategories: (config: IAppConfig) => config.getUrl(`skills/categories`),
    GetSkillSubCategories: (config: IAppConfig, categoryId: string) => config.getUrl(`skills/categories/${categoryId}/subcategories`),
    GetSkillCategory: (config: IAppConfig, id: string) => config.getUrl(`skills/categories/${id}`),
    GetSkillSubcategory: (config: IAppConfig, id: string) => config.getUrl(`skills/subcategories/${id}`),
    AddSkill: (config: IAppConfig) => config.getUrl(`skills`),
    UpdateSkill: (config: IAppConfig) => config.getUrl(`skills`),
    DeleteSkill: (config: IAppConfig, id: string) => config.getUrl(`skills/${id}`),
};

let appRoutes: ISkillMgtRoutes = {
    ListSkills: (categoryId: string, subcategoryId: string) => [`/skills`, `categories`, `${categoryId}`, `subcategories`, `${subcategoryId}`, `list`],
    // ReadSkill: (id: string) => [`/skills`, { outlets: { details: ['read', id] } }],
    ReadSkill: (id: string) => [`/skills`, { outlets: { details: ['read', id] } }],
    EditSkill: (id: string) => [`/skills`, { outlets: { details: ['edit', id] } }],
    AddSkill: (categoryId: string, subcategoryId: string) => [`/skills`, { outlets: { details: ['add', categoryId, subcategoryId] } }],
    ListSubcategories: (id: string) => [`/skills`, `categories`, `${id}`, `subcategories`],
};




export const SkillMgtEndpoints: ISkillMgtEndpoints = appPaths;
export const SkillMgtRoutes: ISkillMgtRoutes = appRoutes;