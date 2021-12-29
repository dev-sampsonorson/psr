import { InjectionToken } from '@angular/core';
import { MenuItem } from '@psr/shared/ui';

export const SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN = new InjectionToken<MenuItem<any>[]>("SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN");
