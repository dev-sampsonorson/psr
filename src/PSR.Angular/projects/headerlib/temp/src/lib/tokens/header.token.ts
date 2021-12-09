import { InjectionToken } from '@angular/core';

// import { MenuItem } from '@sharedlib';

export const PRIMARY_MENU_TOKEN = new InjectionToken<any>('PRIMARY_MENU_TOKEN', {
    providedIn: 'root',
    factory: (): any => []
});
export const PROFILE_MENU_TOKEN = new InjectionToken<any>('PROFILE_MENU_TOKEN', {
    providedIn: 'root',
    factory: (): any => []
});