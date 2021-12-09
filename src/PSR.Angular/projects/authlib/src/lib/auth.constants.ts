export interface IAuthEndpoints {
    readonly Register: string;
    readonly Login: string;
    readonly RefreshToken: string;
    readonly RevokeToken: string;
    readonly CheckEmailExists: string;
}

export interface IAuthRoutePaths {
    readonly Register: string;
    readonly Login: string;
    readonly RevokeToken: string;
}

export interface IAuthNavRoutes {
    readonly Register: () => any[] | string;
    readonly Login: () => any[] | string;
    // readonly RefreshToken: () => any[] | string;
    // readonly RevokeToken: () => any[] | string;
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
};

let authRoutePaths: IAuthRoutePaths = {
    Register: 'register',
    Login: 'login',
    RevokeToken: 'revoke',
};

let authNavRoutes: IAuthNavRoutes = {
    Register: () => [`/auth/${authRoutePaths.Register}`],
    Login: () => [`/auth/${authRoutePaths.Login}`],
    // RefreshToken: () => [`/auth/refresh`],
    // RevokeToken: () => [`/auth/revoke`],
};

let authConsts: IAuthConstants = {
    UserKey: "psr-userkey-tlxstgmzna"
}

export const AuthEndpoints: IAuthEndpoints = authPaths; // contained in authlib
export const AuthRoutePaths: IAuthRoutePaths = authRoutePaths;
// export const AuthNavRoutes: IAuthNavRoutes = authNavRoutes;
export const AuthConstants: IAuthConstants = authConsts;