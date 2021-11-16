import { InjectionToken } from '@angular/core';
import { AuthRoutes } from '@auth/auth.constants';
import { environment } from '@env/environment';
import { IconLogoutComponent } from '@shared/icons/icon-logout.component';

import { MenuItem } from '../shared/menu.model';
import { AppRoutes } from './app.constants';


export interface IAppConfig {
    baseUrl: string;
    getUrl: (url: string) => string;
    primaryMenu: MenuItem[];
    profileMenu: MenuItem[];
}

export const APP_CONFIG_TOKEN = new InjectionToken<IAppConfig>("Application configuration", {
    providedIn: 'root',
    factory: (): IAppConfig => {
        const _baseUrl = environment.apiUrl;

        return {
            baseUrl: `${_baseUrl}`,
            getUrl: (url) => {
                if (['/', '\\'].includes(url && url.slice(0, 1))) {
                    return `${_baseUrl}${url.slice(1)}`;
                }

                return `${_baseUrl}${url}`;
            },

            primaryMenu: [
                { name: 'primary-home', label: 'Home', routerLink: () => AppRoutes.Home() },
                { name: 'primary-skills', label: 'Skills', routerLink: () => AppRoutes.Skills() },
                { name: 'primary-secret', label: 'Secret', routerLink: () => AppRoutes.Secret() }
            ],
            profileMenu: [
                {
                    name: 'primary-signout',
                    label: 'Sign out',
                    iconComponent: IconLogoutComponent,
                    isIconVisible: true,
                    routerLink: () => AuthRoutes.RevokeToken()
                }
            ]
        };
    }
});