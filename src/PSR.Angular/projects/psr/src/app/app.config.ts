import { InjectionToken, Provider } from "@angular/core";
import { environment } from '@env/environment';


export interface IAppConfig {
    baseUrl: string;
    getUrl: (url: string) => string;
}

export const APP_CONFIG_TOKEN = new InjectionToken<IAppConfig>("Application configuration", {
    providedIn: 'root',
    factory: (): IAppConfig => {
        /* const _version: string = 'v1';
        const _port: string = '4455';
        const _baseUrl: string = `http://localhost:${_port}/api/${_version}/`; */
        const _baseUrl = environment.apiUrl;

        return {
            baseUrl: `${_baseUrl}`,
            getUrl: (url) => {
                if (['/', '\\'].includes(url && url.slice(0, 1))) {
                    return `${_baseUrl}${url.slice(1)}`;
                }

                return `${_baseUrl}${url}`;
            },
        };
    }
});