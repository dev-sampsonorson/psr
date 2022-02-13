import { IAppConfig } from '@psr/core';

export interface ISkillMgtEndpoints {
    readonly AddSkill: (config: IAppConfig) => string;
    readonly UpdateSkill: (config: IAppConfig) => string;
    readonly DeleteSkill: (config: IAppConfig, id: string) => string;
}

const endpoints: ISkillMgtEndpoints = {
    AddSkill: (config: IAppConfig) => config.getUrl(`skills`),
    UpdateSkill: (config: IAppConfig) => config.getUrl(`skills`),
    DeleteSkill: (config: IAppConfig, id: string) => config.getUrl(`skills/${id}`),
};

export const SkillMgtEndpoints: ISkillMgtEndpoints = endpoints;
