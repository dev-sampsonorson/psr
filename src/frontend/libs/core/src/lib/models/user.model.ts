export interface IUser {
    id: string;
    employeeId: string;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    token: string;
    refreshToken: string;
}

export interface IEmptyUser {
    id: string;
}

export interface IUserRegistrationReq {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    timeZone: string;
    workHours: string;
    coreHours: string;
}

export const EMPTY_USER: IEmptyUser = {
    id: '00000000-0000-0000-0000-000000000000'
};
