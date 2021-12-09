export interface ISkillMgtRoutes {
    readonly ListSkills: (categoryId: string, subcategoryId: string) => any[];
    readonly ReadSkill: (id: string) => any[];
    readonly EditSkill: (id: string) => any[];
    readonly AddSkill: (categoryId: string, subcategoryId: string) => any[];
    readonly ListSubcategories: (id: string) => any[];
}

let appRoutes: ISkillMgtRoutes = {
    ListSkills: (categoryId: string, subcategoryId: string) => [`/skills`, `categories`, `${categoryId}`, `subcategories`, `${subcategoryId}`, `list`],
    // ReadSkill: (id: string) => [`/skills`, { outlets: { details: ['read', id] } }],
    ReadSkill: (id: string) => [`/skills`, { outlets: { details: ['read', id] } }],
    EditSkill: (id: string) => [`/skills`, { outlets: { details: ['edit', id] } }],
    AddSkill: (categoryId: string, subcategoryId: string) => [`/skills`, { outlets: { details: ['add', categoryId, subcategoryId] } }],
    ListSubcategories: (id: string) => [`/skills`, `categories`, `${id}`, `subcategories`],
};

export const SkillMgtRoutes: ISkillMgtRoutes = appRoutes;