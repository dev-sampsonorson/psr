import { IAppConfig } from '@corelib';
export interface ISkillMgtEndpoints {
    readonly AddSkill: (config: IAppConfig) => string;
    readonly UpdateSkill: (config: IAppConfig) => string;
    readonly DeleteSkill: (config: IAppConfig, id: string) => string;
}
export declare const SkillMgtEndpoints: ISkillMgtEndpoints;
