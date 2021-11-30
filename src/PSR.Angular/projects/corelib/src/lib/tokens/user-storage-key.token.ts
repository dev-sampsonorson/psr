import { InjectionToken } from '@angular/core';

export const USER_STORAGE_KEY_TOKEN = new InjectionToken<string>('USER_STORAGE_KEY_TOKEN', {
    providedIn: 'root',
    factory: () => ''
});