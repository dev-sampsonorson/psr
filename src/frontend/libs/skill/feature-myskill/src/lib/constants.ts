export interface IMySkillRoutes {
    /*
    readonly EditSkill: (id: string) => any[];
    readonly AddSkill: (categoryId: string, subcategoryId: string) => any[]; */
    readonly ReadSkill: (id: string) => any[];
    readonly RateMyskill: (id: string) => any[];
    readonly ListSubcategories: (id: string) => any[];
    readonly ListSkills: (categoryId: string, subcategoryId: string) => any[];
}

const appRoutes: IMySkillRoutes = {
    /*
    EditSkill: (id: string) => [`/skills`, { outlets: { details: ['edit', id] } }],
    AddSkill: (categoryId: string, subcategoryId: string) => [`/skills`, { outlets: { details: ['add', categoryId, subcategoryId] } }], */
    ReadSkill: (id: string) => [`/my-skills`, { outlets: { details: ['read', id] } }],
    RateMyskill: (id: string) => [`/my-skills`, { outlets: { details: ['rating', id] } }],
    ListSubcategories: (id: string) => [`/my-skills`, `categories`, `${id}`, `subcategories`],
    ListSkills: (categoryId: string, subcategoryId: string) => [`/my-skills`, `categories`, `${categoryId}`, `subcategories`, `${subcategoryId}`, `list`],
};

export const MySkillRoutes: IMySkillRoutes = appRoutes;
