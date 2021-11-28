import { InjectionToken } from '@angular/core';
import { ISkillCard } from '@features/skill-management/models/skill.model';

export const SKILL_CARD_TOKEN = new InjectionToken<ISkillCard>('SKILL_CARD_TOKEN');