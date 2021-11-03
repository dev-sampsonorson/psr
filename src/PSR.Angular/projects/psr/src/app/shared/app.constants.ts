
export interface IAppRoutes {
    readonly Home: string;
    readonly Secret: string;
}

let appRoutes: IAppRoutes = {
    Home: `/home`,
    Secret: `/secret`
};


export const AppRoutes: IAppRoutes = appRoutes;