export interface IAuthPaths {
    readonly Register: string;
    readonly Login: string;
    readonly RefreshToken: string;
    readonly RevokeToken: string;
    readonly CheckEmailExists: string;
}

export interface IAuthConstants {
    readonly UserKey: string;
}

let authPaths: IAuthPaths = {
    Register: `auth/register`,
    Login: `auth/authenticate`,
    RefreshToken: `auth/refresh`,
    RevokeToken: `auth/revoke`,
    CheckEmailExists: `users/exists`,
};

let authConsts: IAuthConstants = {
    UserKey: "psr-userkey-tlxstgmzna"
}

export const AuthPaths: IAuthPaths = authPaths;
export const AuthConstants: IAuthConstants = authConsts;