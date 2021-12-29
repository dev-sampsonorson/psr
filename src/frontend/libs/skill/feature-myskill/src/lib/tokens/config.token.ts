import { InjectionToken } from '@angular/core';

import { IMySkillConfig } from '../models';

export const MY_SKILL_CONFIG_TOKEN = new InjectionToken<IMySkillConfig>("MY_SKILL_CONFIG_TOKEN", {
    providedIn: undefined,
    factory: () => {
        return {};
    }
});
