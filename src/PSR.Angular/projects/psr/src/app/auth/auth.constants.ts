let authPaths: IAuthPaths = {
    Register: `auth/register`,
    CheckEmailExists: `users/exists`,
};

interface IAuthPaths {
    readonly Register: string;
    readonly CheckEmailExists: string;
}

export const AuthPaths: IAuthPaths = authPaths;