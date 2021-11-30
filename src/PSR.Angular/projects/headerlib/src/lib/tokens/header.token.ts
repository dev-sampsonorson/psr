import { InjectionToken } from '@angular/core';
import { MenuItem } from '@sharedlib';

export const PRIMARY_MENU_TOKEN = new InjectionToken<MenuItem[]>('PRIMARY_MENU_TOKEN', {
    providedIn: 'root',
    factory: (): MenuItem[] => []
});
export const PROFILE_MENU_TOKEN = new InjectionToken<MenuItem[]>('PROFILE_MENU_TOKEN', {
    providedIn: 'root',
    factory: (): MenuItem[] => []
});