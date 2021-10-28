import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IAlertAction } from '.';
import { Alert, AlertType, IAlertOptions } from './alert.model';



@Injectable({
    providedIn: 'root'
})
export class AlertService {

    private _subject = new Subject<Alert>();
    private _onCloseSubject = new Subject<Symbol>();
    private _defaultId = 'default-alert';

    constructor() { }

    success(options: IAlertOptions, title: string, message: string, actions: IAlertAction[] = []): Symbol {
        return this.sendAlert(new Alert({ ...options, type: AlertType.Success, title, message, actions }));
    }

    error(options: IAlertOptions, title: string, message: string, actions: IAlertAction[] = []): Symbol {
        return this.sendAlert(new Alert({ ...options, type: AlertType.Error, title, message, actions }));
    }

    info(options: IAlertOptions, title: string, message: string, actions: IAlertAction[] = []): Symbol {
        return this.sendAlert(new Alert({ ...options, type: AlertType.Info, title, message, actions }));
    }

    warn(options: IAlertOptions, title: string, message: string, actions: IAlertAction[] = []): Symbol {
        return this.sendAlert(new Alert({ ...options, type: AlertType.Warning, title, message, actions }));
    }

    sendAlert(alert: Alert): Symbol {
        alert.id = alert.id || Symbol('alert');

        //TODO: ExpressionChangedAfterItHasBeenCheckedError
        this._subject.next(alert);
        return alert.id;
    }

    closeAlert(alertSymbol: Symbol) {
        this._onCloseSubject.next(alertSymbol);
    }

    onAlert(): Observable<Alert> {
        return this._subject.asObservable();
    }

    onCloseAlert(alertSymbol: Symbol): Observable<Symbol> {
        return this._onCloseSubject.asObservable().pipe(filter(x => x === alertSymbol));
    }
}
