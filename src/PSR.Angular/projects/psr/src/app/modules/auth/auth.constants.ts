export interface IAuthEndpoints {
    readonly Register: string;
    readonly Login: string;
    readonly RefreshToken: string;
    readonly RevokeToken: string;
    readonly CheckEmailExists: string;
    readonly GetTestDescription: string;
}

export interface IAuthRoutes {
    readonly Register: string;
    readonly Login: string;
    readonly RefreshToken: string;
    readonly RevokeToken: string;
}

export interface IAuthConstants {
    readonly UserKey: string;
}

let authPaths: IAuthEndpoints = {
    Register: `auth/register`,
    Login: `auth/authenticate`,
    RefreshToken: `auth/refresh`,
    RevokeToken: `auth/revoke`,
    CheckEmailExists: `users/exists`,
    GetTestDescription: `test`,
};

let authRoutes: IAuthRoutes = {
    Register: `/auth/register`,
    Login: `/auth/authenticate`,
    RefreshToken: `/auth/refresh`,
    RevokeToken: `/auth/revoke`
};

let authConsts: IAuthConstants = {
    UserKey: "psr-userkey-tlxstgmzna"
}

export const AuthEndpoints: IAuthEndpoints = authPaths;
export const AuthRoutes: IAuthRoutes = authRoutes;
export const AuthConstants: IAuthConstants = authConsts;