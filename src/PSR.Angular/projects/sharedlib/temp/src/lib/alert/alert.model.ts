import { EventEmitter } from '@angular/core';

export interface IMessageItem {
    message: string;
}

export interface IAlertComponent {
    alert: Alert | undefined;
    closeAlert: EventEmitter<boolean>;
}

export class Alert {
    id: Symbol = Symbol('alert');
    type: AlertType = AlertType.Info;
    title: string = '';
    message: string = '';
    messages: { message: string }[] = [];
    actions: IAlertAction[] = [];
    autoClose: boolean = true;
    timeToClose: number = 5;

    constructor(init: Partial<Alert>) {
        Object.assign(this, init);
    }
}

export interface IAlertAction {
    name: string;
    route: any[] | string;
}

export interface IAlertOptions {
    autoClose: boolean;
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}