import { InjectionToken } from '@angular/core';

import { ISkillMgtConfig } from '../models/skill-mgt.model';

export const SKILL_MGT_CONFIG_TOKEN = new InjectionToken<ISkillMgtConfig>("SKILL_MGT_CONFIG", {
    factory: () => ({})
});