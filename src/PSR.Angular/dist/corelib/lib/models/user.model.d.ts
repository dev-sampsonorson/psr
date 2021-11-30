export interface IUser {
    id: string;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    token: string;
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
export declare const EMPTY_USER: IEmptyUser;
