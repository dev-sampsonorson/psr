export interface ISkillMgtRoutes {
    readonly ListSkills: (categoryId: string, subcategoryId: string) => any[];
    readonly ReadSkill: (id: string) => any[];
    readonly EditSkill: (id: string) => any[];
    readonly AddSkill: (categoryId: string, subcategoryId: string) => any[];
    readonly ListSubcategories: (id: string) => any[];
}
export declare const SkillMgtRoutes: ISkillMgtRoutes;
