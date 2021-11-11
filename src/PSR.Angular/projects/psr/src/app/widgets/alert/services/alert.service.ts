import { Injectable } from '@angular/core';
import { EnvironmentService } from '@env/environment.service';
import { Alert, AlertType, IAlertAction, IAlertOptions } from '@widgets/alert';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    private _subject = new Subject<Alert>();
    private _onCloseSubject = new Subject<Symbol>();
    private _defaultId = 'default-alert';

    constructor(private env: EnvironmentService) { }

    success(title: string, message: string, actions: IAlertAction[] = [], options: IAlertOptions = this.env.alertOptions): Symbol {
        return this.sendAlert(new Alert({ ...options, type: AlertType.Success, title, message, actions }));
    }

    error(title: string, message: string, actions: IAlertAction[] = [], options: IAlertOptions = this.env.alertOptions): Symbol {
        return this.sendAlert(new Alert({ ...options, type: AlertType.Error, title, message, actions }));
    }

    info(title: string, message: string, actions: IAlertAction[] = [], options: IAlertOptions = this.env.alertOptions): Symbol {
        return this.sendAlert(new Alert({ ...options, type: AlertType.Info, title, message, actions }));
    }

    warn(title: string, message: string, actions: IAlertAction[] = [], options: IAlertOptions = this.env.alertOptions): Symbol {
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
