import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Alert, AlertService, AlertType, IAlertAction, IAlertComponent } from '@shared/alert';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, IAlertComponent, OnDestroy, AfterViewInit {

    @Input() alert: Alert | undefined = undefined;
    @Output() closeAlert = new EventEmitter<boolean>();

    @ViewChild('successIcon', { read: TemplateRef }) successIconRef!: TemplateRef<any>;
    @ViewChild('errorIcon', { read: TemplateRef }) errorIconRef!: TemplateRef<any>;
    @ViewChild('infoIcon', { read: TemplateRef }) infoIconRef!: TemplateRef<any>;
    @ViewChild('warningIcon', { read: TemplateRef }) warningIconRef!: TemplateRef<any>;

    alertIconRef!: TemplateRef<any>;


    private _timeout: any;

    constructor(private alertService: AlertService, private router: Router) { }

    ngOnInit(): void {
        this.alert?.autoClose && this.startAutoClose();
        switch (this.alert?.type) {
            case AlertType.Success:
                this.alertIconRef = this.successIconRef;
                break;
            case AlertType.Error:
                this.alertIconRef = this.errorIconRef;
                break;
            case AlertType.Info:
                this.alertIconRef = this.infoIconRef;
                break;
            case AlertType.Warning:
                this.alertIconRef = this.warningIconRef;
                break;
            default:
                throw new Error('Invalid alert type');
        }
    }

    ngAfterViewInit() {
    }

    onAction(action: IAlertAction) {
        this.router.navigate([action.route]);
        this.startAutoClose();
    }

    onCloseAlert() {
        this.closeAlert.emit(true);
        this.alertService.closeAlert(this.alert?.id!);
    }

    startAutoClose() {
        this._timeout = setTimeout(() => {
            this.onCloseAlert();
        }, (this.alert?.timeToClose || 0) * 1000);
    }

    cssClass() {
        const alertType = this.alert ? this.alert.type : AlertType.Info;

        const classes = ['flex items-end flex-1 max-w-sm pointer-events-none sm:items-start'];
        const alertTypeClass = {
            [AlertType.Success]: 'alert--success',
            [AlertType.Error]: 'alert--error',
            [AlertType.Info]: 'alert--info',
            [AlertType.Warning]: 'alert--warning',
        }

        classes.push(alertTypeClass[alertType]);

        return classes.join(' ');
    }

    hasActions() {
        return !!this.alert?.actions && this.alert.actions.length > 0;
    }

    ngOnDestroy(): void {
        clearTimeout(this._timeout);
    }

}
