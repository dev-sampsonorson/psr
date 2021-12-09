import { InjectionToken } from '@angular/core';

// readonly Register: () => any[] | string;
export interface IAppNavigationPaths {
    readonly Home: string;
    readonly Register: string;
    readonly Login: string;
}

export interface IAppConfig {
    baseUrl: string;
    getUrl: (url: string) => string;
    navigationPaths: IAppNavigationPaths;
    // primaryMenu: MenuItem[];
    // profileMenu: MenuItem[];
}

export const APP_CONFIG_TOKEN = new InjectionToken<IAppConfig>("APP_CONFIG_TOKEN");

