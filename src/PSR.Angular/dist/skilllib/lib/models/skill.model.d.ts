export interface ISkill {
    id: string;
    name: string;
    slug: string;
    categoryId: string;
    categoryName: string;
    subcategoryId: string;
    subcategoryName: string;
    employees: number;
    teamCompetency: number;
    deleting?: boolean;
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
export interface ISkillResolverResult {
    [key: string]: ISkillCategory[];
}
export interface ISkillCard {
    blockCard: boolean;
    type: 'add' | 'overview' | 'personal';
}
