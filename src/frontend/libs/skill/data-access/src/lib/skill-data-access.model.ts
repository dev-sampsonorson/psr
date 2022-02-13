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

export interface ISkillRating {
    skillId: string;
    name: string;
    slug: string;
    categoryId: string;
    categoryName: string;
    subcategoryId: string;
    subcategoryName: string;
    rating: number;
    employeeId: string;
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
