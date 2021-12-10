import { ISkillCategory } from '@psr/skill/data-access';

export interface ISkillResolverResult {
    [key: string]: ISkillCategory[]
}

export interface ISkillCard {
    blockCard: boolean;
    type: 'add' | 'overview' | 'personal';
}
