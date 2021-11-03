import { InjectionToken, Provider } from "@angular/core";
import { environment } from '@env/environment';
import { AuthRoutes } from "./auth/auth.constants";
import { AppRoutes } from "./shared/app.constants";
import { MenuItem } from "./shared/menu.model";


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
                { label: 'Home', route: AppRoutes.Home },
                { label: 'Secret', route: AppRoutes.Secret }
            ],
            profileMenu: [
                { label: 'Sign out', route: AuthRoutes.RevokeToken }
            ]
        };
    }
});