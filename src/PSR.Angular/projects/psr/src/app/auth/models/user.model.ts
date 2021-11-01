export interface IUser {
    id: string;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    token: string;
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

export interface IUserLoginReq {
    email: string;
    password: string;
}

export const EMPTY_USER: IUser = {
    id: '00000000-0000-0000-0000-000000000000',
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    token: ''
};