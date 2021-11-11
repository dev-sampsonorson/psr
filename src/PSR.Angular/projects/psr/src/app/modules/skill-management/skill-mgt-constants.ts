export interface ISkillMgtEndpoints {
    readonly GetSkills: string;
}

export interface ISkillMgtRoutes {
    readonly Skills: string;
}

let appPaths: ISkillMgtEndpoints = {
    GetSkills: `skills`
};

let appRoutes: ISkillMgtRoutes = {
    Skills: `/skills`
};


export const SkillMgtEndpoints: ISkillMgtEndpoints = appPaths;
export const killMgtRoutes: ISkillMgtRoutes = appRoutes;