import { EventEmitter } from "@angular/core";

export interface IAlertComponent {
    alert: Alert | undefined;
    closeAlert: EventEmitter<boolean>;
}

export class Alert {
    id: Symbol = Symbol('alert');
    type: AlertType = AlertType.Info;
    title: string = '';
    message: string = '';
    actions: IAlertAction[] = [];
    autoClose: boolean = true;
    timeToClose: number = 5;

    constructor(init: Partial<Alert>) {
        Object.assign(this, init);
    }
}

export interface IAlertAction {
    name: string;
    route: string;
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