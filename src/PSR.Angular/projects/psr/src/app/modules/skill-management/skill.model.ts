export interface ISkill {
    id: string;
    name: string;
    slug: string;
    categoryId: string;
    categoryName: string;
    subCategoryId: string;
    subCategoryName: string;
    employees: number;
    teamCompetency: number;
}

export interface ISkillCategory {
    id: string;
    name: string;
}

export interface ISkillSubCategory {
    id: string;
    name: string;
    categoryId: string;
    categoryName: string;
}

export interface IResolverResult {
    [key: string]: ISkillCategory[]
}