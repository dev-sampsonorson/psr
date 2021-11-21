import { Inject, Injectable } from '@angular/core';
import { UtilService } from '@core/services/util.service';
import { Alert, AlertType, IAlertAction, IAlertOptions, IMessageItem } from '@shared/alert';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ALERT_CONFIG_TOKEN } from '../tokens/alert-config.token';

@Injectable()
export class AlertService {

    private _subject = new Subject<Alert>();
    private _onCloseSubject = new Subject<Symbol>();
    private _defaultId = 'default-alert';

    constructor(
        // private env: EnvironmentService,
        private util: UtilService,
        @Inject(ALERT_CONFIG_TOKEN) private alertConfig: IAlertOptions
    ) { }

    success(title: string, messages: IMessageItem[] | string, actions: IAlertAction[] = [], options: IAlertOptions = this.alertConfig): Symbol {
        return this.sendAlert(new Alert({
            ...options,
            type: AlertType.Success,
            title,
            messages: this.util.isString(messages) ? [{ message: messages as string }] : (messages as IMessageItem[]),
            actions
        }));
    }

    error(title: string, messages: IMessageItem[] | string, actions: IAlertAction[] = [], options: IAlertOptions = this.alertConfig): Symbol {
        return this.sendAlert(new Alert({
            ...options,
            type: AlertType.Error,
            title,
            messages: this.util.isString(messages) ? [{ message: messages as string }] : (messages as IMessageItem[]),
            actions
        }));
    }

    info(title: string, messages: IMessageItem[] | string, actions: IAlertAction[] = [], options: IAlertOptions = this.alertConfig): Symbol {
        return this.sendAlert(new Alert({
            ...options,
            type: AlertType.Info,
            title,
            messages: this.util.isString(messages) ? [{ message: messages as string }] : (messages as IMessageItem[]),
            actions
        }));
    }

    warn(title: string, messages: IMessageItem[] | string, actions: IAlertAction[] = [], options: IAlertOptions = this.alertConfig): Symbol {
        return this.sendAlert(new Alert({
            ...options,
            type: AlertType.Warning,
            title,
            messages: this.util.isString(messages) ? [{ message: messages as string }] : (messages as IMessageItem[]),
            actions
        }));
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
