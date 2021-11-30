import { InjectionToken } from '@angular/core';
export interface IAppNavigationPaths {
    readonly Home: string;
    readonly Register: string;
    readonly Login: string;
}
export interface IAppConfig {
    baseUrl: string;
    getUrl: (url: string) => string;
    navigationPaths: IAppNavigationPaths;
}
export declare const APP_CONFIG_TOKEN: InjectionToken<IAppConfig>;
