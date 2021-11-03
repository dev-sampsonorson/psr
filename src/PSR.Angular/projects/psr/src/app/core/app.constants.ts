export const QueryParameterNames = {
    ReturnUrl: 'returnUrl'
};

let appPaths: IAppPaths = {
    GetCountries: `lookup/countries`
};

interface IAppPaths {
    readonly GetCountries: string;
}

export const AppPaths: IAppPaths = appPaths;