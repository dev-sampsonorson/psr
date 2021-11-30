import { InjectionToken } from '@angular/core';
import { MenuItem } from '@sharedlib';

import { ISkillMgtConfig } from '../models/skill-mgt.model';

export const SKILL_MGT_CONFIG_TOKEN = new InjectionToken<ISkillMgtConfig>("SKILL_MGT_CONFIG", {
    factory: () => ({})
});

export const SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN = new InjectionToken<MenuItem<any>[]>("SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN");