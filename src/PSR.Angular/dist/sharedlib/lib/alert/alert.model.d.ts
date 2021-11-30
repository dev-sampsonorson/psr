import { EventEmitter } from '@angular/core';
export interface IMessageItem {
    message: string;
}
export interface IAlertComponent {
    alert: Alert | undefined;
    closeAlert: EventEmitter<boolean>;
}
export declare class Alert {
    id: Symbol;
    type: AlertType;
    title: string;
    message: string;
    messages: {
        message: string;
    }[];
    actions: IAlertAction[];
    autoClose: boolean;
    timeToClose: number;
    constructor(init: Partial<Alert>);
}
export interface IAlertAction {
    name: string;
    route: any[] | string;
}
export interface IAlertOptions {
    autoClose: boolean;
}
export declare enum AlertType {
    Success = 0,
    Error = 1,
    Info = 2,
    Warning = 3
}
