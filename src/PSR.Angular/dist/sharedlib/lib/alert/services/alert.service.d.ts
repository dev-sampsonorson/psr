import { Observable } from 'rxjs';
import { UtilService } from '../../services';
import { Alert, IAlertAction, IAlertOptions, IMessageItem } from '../alert.model';
import * as i0 from "@angular/core";
export declare class AlertService {
    private util;
    private alertConfig;
    private _subject;
    private _onCloseSubject;
    private _defaultId;
    constructor(util: UtilService, alertConfig: IAlertOptions);
    success(title: string, messages: IMessageItem[] | string, actions?: IAlertAction[], options?: IAlertOptions): Symbol;
    error(title: string, messages: IMessageItem[] | string, actions?: IAlertAction[], options?: IAlertOptions): Symbol;
    info(title: string, messages: IMessageItem[] | string, actions?: IAlertAction[], options?: IAlertOptions): Symbol;
    warn(title: string, messages: IMessageItem[] | string, actions?: IAlertAction[], options?: IAlertOptions): Symbol;
    sendAlert(alert: Alert): Symbol;
    closeAlert(alertSymbol: Symbol): void;
    onAlert(): Observable<Alert>;
    onCloseAlert(alertSymbol: Symbol): Observable<Symbol>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlertService>;
}
