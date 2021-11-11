export const QueryParameterNames = {
    ReturnUrl: 'returnUrl'
};

let appPaths: IAppEndpoints = {
    GetCountries: `lookup/countries`
};

export interface IAppEndpoints {
    readonly GetCountries: string;
}

export interface IAppRoutes {
    readonly Home: string;
    readonly Skills: string;
    readonly Secret: string;
}

let appRoutes: IAppRoutes = {
    Home: `/home`,
    Skills: `/skills`,
    Secret: `/secret`
};


export const AppEndpoints: IAppEndpoints = appPaths;
export const AppRoutes: IAppRoutes = appRoutes;