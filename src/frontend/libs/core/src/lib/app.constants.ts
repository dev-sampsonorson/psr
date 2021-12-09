export const QueryParameterNames = {
    ReturnUrl: 'returnUrl'
};

let appPaths: IAppEndpoints = {
    GetCountries: `lookup/countries`,
    GetTestDescription: `test`,
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

let appRoutes: IAppRoutes = {
    Home: () => [`/home`],
    Skills: () => [`/skills`],
    Secret: () => [`/secret`],
};


export const AppEndpoints: IAppEndpoints = appPaths;
export const AppRoutes: IAppRoutes = appRoutes;

/* type Initializer<T> = T extends any ? (string | (() => any[])) : never
// type AppRouteType =

function correct<T>(arg: Initializer<T>) : any[] | Initializer<T> {
    return typeof arg === 'function' ? arg() : arg;
}

let ans1 = correct("true");
let ans2 = correct(() => []);
let ans3 = correct(authRoutes.Login); */