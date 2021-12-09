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
}
export interface IAuthConstants {
    readonly UserKey: string;
}
export declare const AuthEndpoints: IAuthEndpoints;
export declare const AuthRoutePaths: IAuthRoutePaths;
export declare const AuthConstants: IAuthConstants;
