export declare const QueryParameterNames: {
    ReturnUrl: string;
};
export interface IAppEndpoints {
    readonly GetCountries: string;
    readonly GetTestDescription: string;
}
export interface IAppRoutes {
    readonly Home: () => any[] | string;
    readonly Skills: () => any[] | string;
    readonly Secret: () => any[] | string;
}
export declare const AppEndpoints: IAppEndpoints;
export declare const AppRoutes: IAppRoutes;
