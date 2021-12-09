import * as i0 from '@angular/core';
import { Directive, Input, NgModule, InjectionToken, Injectable, Inject, EventEmitter, TemplateRef, Component, Output, ViewChild, ViewContainerRef, ContentChild } from '@angular/core';
import * as i1 from '@angular/forms';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { filter, map, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import * as i2 from '@angular/router';
import { NavigationEnd, RouterModule } from '@angular/router';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';

class MenuItem {
    constructor(init) {
        this.name = '';
        this.label = '';
        this.command = () => { };
        // routerLink: any[] | string = [];
        this.routerLink = () => [];
        this.navigatable = true;
        this.isIconVisible = false;
        Object.assign(this, init);
    }
}
;

class DisableControlDirective {
    constructor(ngControl) {
        this.ngControl = ngControl;
    }
    set disableControl(condition) {
        if (this.disabled !== undefined) {
            this.toggleControl(condition);
        }
        this.disabled = condition;
    }
    ngOnInit() {
        var _a;
        this.toggleControl((_a = this.disabled) !== null && _a !== void 0 ? _a : false);
    }
    toggleControl(condition) {
        const action = condition ? 'disable' : 'enable';
        if (this.ngControl.control) {
            this.ngControl.control[action]();
        }
    }
}
DisableControlDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DisableControlDirective, deps: [{ token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive });
DisableControlDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.14", type: DisableControlDirective, selector: "[disableControl]", inputs: { disableControl: "disableControl" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DisableControlDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[disableControl]'
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl }]; }, propDecorators: { disableControl: [{
                type: Input
            }] } });
class DisableControlModule {
}
DisableControlModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DisableControlModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DisableControlModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DisableControlModule, declarations: [DisableControlDirective], exports: [DisableControlDirective] });
DisableControlModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DisableControlModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DisableControlModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DisableControlDirective],
                    exports: [DisableControlDirective]
                }]
        }] });

class ElementHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ElementHostDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ElementHostDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ElementHostDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.14", type: ElementHostDirective, selector: "[appElementHost]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ElementHostDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appElementHost]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
class ElementHostModule {
}
ElementHostModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ElementHostModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ElementHostModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ElementHostModule, declarations: [ElementHostDirective], exports: [ElementHostDirective] });
ElementHostModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ElementHostModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ElementHostModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ElementHostDirective],
                    exports: [ElementHostDirective]
                }]
        }] });

class TemplateHandleDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TemplateHandleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TemplateHandleDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
TemplateHandleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.14", type: TemplateHandleDirective, selector: "[appTemplateHandle]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TemplateHandleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appTemplateHandle]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });
class TemplateHandleModule {
}
TemplateHandleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TemplateHandleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TemplateHandleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TemplateHandleModule, declarations: [TemplateHandleDirective], exports: [TemplateHandleDirective] });
TemplateHandleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TemplateHandleModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TemplateHandleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TemplateHandleDirective],
                    exports: [TemplateHandleDirective]
                }]
        }] });

class Alert {
    constructor(init) {
        this.id = Symbol('alert');
        this.type = AlertType.Info;
        this.title = '';
        this.message = '';
        this.messages = [];
        this.actions = [];
        this.autoClose = true;
        this.timeToClose = 5;
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));

const ALERT_CONFIG_TOKEN = new InjectionToken('ALERT_CONFIG');

class UtilService {
    constructor() { }
    isString(value) {
        return typeof value === 'string';
    }
}
UtilService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: UtilService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
UtilService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: UtilService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: UtilService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

// import { Alert, AlertType, IAlertAction, IAlertOptions, IMessageItem } from '@shared/alert';
class AlertService {
    constructor(
    // private env: EnvironmentService,
    util, alertConfig) {
        this.util = util;
        this.alertConfig = alertConfig;
        this._subject = new Subject();
        this._onCloseSubject = new Subject();
        this._defaultId = 'default-alert';
    }
    success(title, messages, actions = [], options = this.alertConfig) {
        return this.sendAlert(new Alert(Object.assign(Object.assign({}, options), { type: AlertType.Success, title, messages: this.util.isString(messages) ? [{ message: messages }] : messages, actions })));
    }
    error(title, messages, actions = [], options = this.alertConfig) {
        return this.sendAlert(new Alert(Object.assign(Object.assign({}, options), { type: AlertType.Error, title, messages: this.util.isString(messages) ? [{ message: messages }] : messages, actions })));
    }
    info(title, messages, actions = [], options = this.alertConfig) {
        return this.sendAlert(new Alert(Object.assign(Object.assign({}, options), { type: AlertType.Info, title, messages: this.util.isString(messages) ? [{ message: messages }] : messages, actions })));
    }
    warn(title, messages, actions = [], options = this.alertConfig) {
        return this.sendAlert(new Alert(Object.assign(Object.assign({}, options), { type: AlertType.Warning, title, messages: this.util.isString(messages) ? [{ message: messages }] : messages, actions })));
    }
    sendAlert(alert) {
        alert.id = alert.id || Symbol('alert');
        //TODO: ExpressionChangedAfterItHasBeenCheckedError
        this._subject.next(alert);
        return alert.id;
    }
    closeAlert(alertSymbol) {
        this._onCloseSubject.next(alertSymbol);
    }
    onAlert() {
        return this._subject.asObservable();
    }
    onCloseAlert(alertSymbol) {
        return this._onCloseSubject.asObservable().pipe(filter(x => x === alertSymbol));
    }
}
AlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: AlertService, deps: [{ token: UtilService }, { token: ALERT_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
AlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: AlertService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: UtilService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ALERT_CONFIG_TOKEN]
                }] }]; } });

class AlertComponent {
    constructor(alertService, router) {
        this.alertService = alertService;
        this.router = router;
        this.alert = undefined;
        this.closeAlert = new EventEmitter();
    }
    get isErrorMessagesVisible() {
        var _a;
        return (((_a = this.alert) === null || _a === void 0 ? void 0 : _a.messages.length) || 0) > 0;
    }
    get hasSingleMessage() {
        var _a;
        return (((_a = this.alert) === null || _a === void 0 ? void 0 : _a.messages.length) || 0) === 1;
    }
    ngOnInit() {
        var _a, _b;
        ((_a = this.alert) === null || _a === void 0 ? void 0 : _a.autoClose) && this.startAutoClose();
        switch ((_b = this.alert) === null || _b === void 0 ? void 0 : _b.type) {
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
    onAction(action) {
        this.router.navigate([action.route]);
        this.startAutoClose();
    }
    onCloseAlert() {
        var _a;
        this.closeAlert.emit(true);
        this.alertService.closeAlert((_a = this.alert) === null || _a === void 0 ? void 0 : _a.id);
    }
    startAutoClose() {
        var _a;
        this._timeout = setTimeout(() => {
            this.onCloseAlert();
        }, (((_a = this.alert) === null || _a === void 0 ? void 0 : _a.timeToClose) || 0) * 1000);
    }
    cssClass() {
        const alertType = this.alert ? this.alert.type : AlertType.Info;
        const classes = ['flex items-end flex-1 max-w-sm pointer-events-none sm:items-start'];
        const alertTypeClass = {
            [AlertType.Success]: 'alert--success',
            [AlertType.Error]: 'alert--error',
            [AlertType.Info]: 'alert--info',
            [AlertType.Warning]: 'alert--warning',
        };
        classes.push(alertTypeClass[alertType]);
        return classes.join(' ');
    }
    hasActions() {
        var _a;
        return !!((_a = this.alert) === null || _a === void 0 ? void 0 : _a.actions) && this.alert.actions.length > 0;
    }
    ngOnDestroy() {
        clearTimeout(this._timeout);
    }
}
AlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: AlertComponent, deps: [{ token: AlertService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: AlertComponent, selector: "app-alert", inputs: { alert: "alert" }, outputs: { closeAlert: "closeAlert" }, viewQueries: [{ propertyName: "successIconRef", first: true, predicate: ["successIcon"], descendants: true, read: TemplateRef }, { propertyName: "errorIconRef", first: true, predicate: ["errorIcon"], descendants: true, read: TemplateRef }, { propertyName: "infoIconRef", first: true, predicate: ["infoIcon"], descendants: true, read: TemplateRef }, { propertyName: "warningIconRef", first: true, predicate: ["warningIcon"], descendants: true, read: TemplateRef }], ngImport: i0, template: "<div *ngIf=\"alert\" aria-live=\"assertive\" class=\"{{ cssClass() }}\">\r\n    <!-- <div class=\"flex flex-col items-center w-full space-y-4 sm:items-end\"> -->\r\n    <div class=\"flex flex-col items-center w-full max-w-sm space-y-4 sm:items-end\">\r\n        <!-- w-full max-w-sm overflow-hidden bg-red-900 rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-10 -->\r\n        <div class=\"alert__wrapper\">\r\n            <div class=\"p-4\">\r\n                <div class=\"flex items-start\">\r\n                    <div class=\"flex-shrink-0\">\r\n                        <ng-container *ngIf=\"alertIconRef\">\r\n                            <ng-container *ngTemplateOutlet=\"alertIconRef\"></ng-container>\r\n                        </ng-container>\r\n                        <!-- <ng-container *ngIf=\"alert?.type\" [ngSwitch]=\"alert?.type\">\r\n                            <ng-container *ngSwitchCase=\"0\" [ngTemplateOutlet]=\"successIcon\"></ng-container>\r\n                            <ng-container *ngSwitchCase=\"1\" [ngTemplateOutlet]=\"errorIcon\"></ng-container>\r\n                            <ng-container *ngSwitchCase=\"2\" [ngTemplateOutlet]=\"infoIcon\"></ng-container>\r\n                            <ng-container *ngSwitchCase=\"3\" [ngTemplateOutlet]=\"warningIcon\"></ng-container>\r\n                        </ng-container> -->\r\n                    </div>\r\n                    <div class=\"ml-3 w-0 flex-1 pt-0.5\">\r\n                        <p class=\"alert__title\">\r\n                            <!-- text-sm font-medium text-white -->\r\n                            {{alert?.title}}\r\n                        </p>\r\n\r\n                        <ul *ngIf=\"isErrorMessagesVisible\" role=\"list\" class=\"alert__messages\">\r\n                            <ng-container *ngIf=\"hasSingleMessage; then singleMessage else multiMessage\"></ng-container>\r\n                        </ul>\r\n                        <ng-template #singleMessage>\r\n                            <p class=\"alert__message\">{{alert?.messages![0].message}}</p>\r\n                        </ng-template>\r\n                        <ng-template #multiMessage>\r\n                            <li *ngFor=\"let item of alert?.messages\" class=\"alert__message-item\">\r\n                                <p class=\"alert__message\">{{item?.message}}</p>\r\n                            </li>\r\n                        </ng-template>\r\n                        <div *ngIf=\"hasActions()\" class=\"flex mt-3 space-x-7\">\r\n                            <!-- text-sm font-medium text-white bg-transparent rounded-md hover:text-red-200 focus:outline-none -->\r\n                            <button *ngFor=\"let action of alert?.actions\" (click)=\"onAction(action)\" type=\"button\"\r\n                                    class=\"alert__btn-action\">\r\n                                {{action.name}}\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"flex flex-shrink-0 ml-4\">\r\n                        <button (click)=\"onCloseAlert()\" class=\"alert__btn-close\">\r\n                            <span class=\"sr-only\">Close</span>\r\n                            <!-- Heroicon name: solid/x -->\r\n                            <svg class=\"w-5 h-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"\r\n                                 fill=\"currentColor\" aria-hidden=\"true\">\r\n                                <path fill-rule=\"evenodd\"\r\n                                      d=\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\"\r\n                                      clip-rule=\"evenodd\" />\r\n                            </svg>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #successIcon>\r\n    <svg class=\"w-6 h-6 text-white\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\r\n         stroke=\"currentColor\" aria-hidden=\"true\">\r\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 13l4 4L19 7\"></path>\r\n    </svg>\r\n</ng-template>\r\n<ng-template #errorIcon>\r\n    <svg class=\"w-6 h-6 text-white\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\r\n         stroke=\"currentColor\" aria-hidden=\"true\">\r\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\r\n              d=\"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z\"></path>\r\n    </svg>\r\n</ng-template>\r\n<ng-template #infoIcon>\r\n    <svg class=\"w-6 h-6 text-white\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\r\n         stroke=\"currentColor\" aria-hidden=\"true\">\r\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\r\n              d=\"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"></path>\r\n    </svg>\r\n</ng-template>\r\n<ng-template #warningIcon>\r\n    <svg class=\"w-6 h-6 text-white\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\r\n         stroke=\"currentColor\" aria-hidden=\"true\">\r\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\r\n              d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\">\r\n        </path>\r\n    </svg>\r\n</ng-template>\r\n", styles: [":host{margin-bottom:1rem;width:100%;flex:1 1 auto}.alert__wrapper{width:100%;max-width:24rem;overflow:hidden;border-radius:.5rem;pointer-events:auto;--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgba(0, 0, 0, var(--tw-ring-opacity));--tw-ring-opacity: .1}.alert__title{font-size:.875rem;line-height:1.25rem;font-weight:500}.alert__message{margin-top:.25rem;font-size:.875rem;line-height:1.25rem}.alert__btn-action{border-radius:.375rem;font-size:.875rem;line-height:1.25rem;font-weight:500}.alert__btn-action:focus{outline:2px solid transparent;outline-offset:2px}.alert__btn-close{display:inline-flex;border-radius:.375rem}.alert__btn-close:focus{outline:2px solid transparent;outline-offset:2px}.alert--error .alert__wrapper{--tw-bg-opacity: 1;background-color:rgba(127,29,29,var(--tw-bg-opacity))}.alert--error .alert__title{--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.alert--error .alert__message{--tw-text-opacity: 1;color:rgba(254,202,202,var(--tw-text-opacity))}.alert--error .alert__message-item{padding-top:.5rem;padding-bottom:.5rem}.alert--error .alert__messages{margin-top:.5rem}.alert--error .alert__messages>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgba(0,0,0,var(--tw-divide-opacity));--tw-divide-opacity: .1}.alert--error .alert__btn-action{background-color:transparent;--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.alert--error .alert__btn-action:hover{--tw-text-opacity: 1;color:rgba(254,202,202,var(--tw-text-opacity))}.alert--error .alert__btn-close{--tw-bg-opacity: 1;background-color:rgba(127,29,29,var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgba(254,226,226,var(--tw-text-opacity))}.alert--error .alert__btn-close:hover{--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.alert--info .alert__wrapper{--tw-bg-opacity: 1;background-color:rgba(37,99,235,var(--tw-bg-opacity))}.alert--info .alert__title{--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.alert--info .alert__message{--tw-text-opacity: 1;color:rgba(191,219,254,var(--tw-text-opacity))}.alert--info .alert__message-item{padding-top:.5rem;padding-bottom:.5rem}.alert--info .alert__messages{margin-top:.5rem}.alert--info .alert__messages>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgba(0,0,0,var(--tw-divide-opacity));--tw-divide-opacity: .1}.alert--info .alert__btn-action{background-color:transparent;--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.alert--info .alert__btn-action:hover{--tw-text-opacity: 1;color:rgba(191,219,254,var(--tw-text-opacity))}.alert--info .alert__btn-close{--tw-bg-opacity: 1;background-color:rgba(37,99,235,var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgba(219,234,254,var(--tw-text-opacity))}.alert--info .alert__btn-close:hover{--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.alert--success .alert__wrapper{--tw-bg-opacity: 1;background-color:rgba(5,150,105,var(--tw-bg-opacity))}.alert--success .alert__title{--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.alert--success .alert__message{--tw-text-opacity: 1;color:rgba(167,243,208,var(--tw-text-opacity))}.alert--success .alert__message-item{padding-top:.5rem;padding-bottom:.5rem}.alert--success .alert__messages{margin-top:.5rem}.alert--success .alert__messages>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgba(0,0,0,var(--tw-divide-opacity));--tw-divide-opacity: .1}.alert--success .alert__btn-action{background-color:transparent;--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.alert--success .alert__btn-action:hover{--tw-text-opacity: 1;color:rgba(167,243,208,var(--tw-text-opacity))}.alert--success .alert__btn-close{--tw-bg-opacity: 1;background-color:rgba(5,150,105,var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgba(209,250,229,var(--tw-text-opacity))}.alert--success .alert__btn-close:hover{--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.alert--warning .alert__wrapper{--tw-bg-opacity: 1;background-color:rgba(217,119,6,var(--tw-bg-opacity))}.alert--warning .alert__title{--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.alert--warning .alert__message{--tw-text-opacity: 1;color:rgba(253,230,138,var(--tw-text-opacity))}.alert--warning .alert__message-item{padding-top:.5rem;padding-bottom:.5rem}.alert--warning .alert__messages{margin-top:.5rem}.alert--warning .alert__messages>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgba(0,0,0,var(--tw-divide-opacity));--tw-divide-opacity: .1}.alert--warning .alert__btn-action{background-color:transparent;--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.alert--warning .alert__btn-action:hover{--tw-text-opacity: 1;color:rgba(253,230,138,var(--tw-text-opacity))}.alert--warning .alert__btn-close{--tw-bg-opacity: 1;background-color:rgba(217,119,6,var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgba(254,243,199,var(--tw-text-opacity))}.alert--warning .alert__btn-close:hover{--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}\n"], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-alert',
                    templateUrl: './alert.component.html',
                    styleUrls: ['./alert.component.css']
                }]
        }], ctorParameters: function () { return [{ type: AlertService }, { type: i2.Router }]; }, propDecorators: { alert: [{
                type: Input
            }], closeAlert: [{
                type: Output
            }], successIconRef: [{
                type: ViewChild,
                args: ['successIcon', { read: TemplateRef }]
            }], errorIconRef: [{
                type: ViewChild,
                args: ['errorIcon', { read: TemplateRef }]
            }], infoIconRef: [{
                type: ViewChild,
                args: ['infoIcon', { read: TemplateRef }]
            }], warningIconRef: [{
                type: ViewChild,
                args: ['warningIcon', { read: TemplateRef }]
            }] } });

class AlertContainerComponent {
    constructor(resolver, alertService) {
        this.resolver = resolver;
        this.alertService = alertService;
    }
    ngOnInit() {
        this.alertSubscription = this.alertService.onAlert().subscribe(alert => {
            this.addAlert(alert);
        });
    }
    addAlert(alert) {
        const container = this.appElementHost.viewContainerRef;
        const componentFactory = this.resolver.resolveComponentFactory(AlertComponent);
        // container.clear();
        const componentRef = container.createComponent(componentFactory);
        componentRef.instance.alert = alert;
        componentRef.instance.closeAlert.subscribe((status) => {
            status && componentRef.destroy();
            // status && container.clear();
        });
    }
    ngOnDestroy() {
        this.alertSubscription.unsubscribe();
    }
}
AlertContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: AlertContainerComponent, deps: [{ token: i0.ComponentFactoryResolver }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
AlertContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: AlertContainerComponent, selector: "app-alert-container", viewQueries: [{ propertyName: "appElementHost", first: true, predicate: ElementHostDirective, descendants: true, static: true }], ngImport: i0, template: `
      <ng-template appElementHost></ng-template>
  `, isInline: true, styles: [":host{pointer-events:none;position:fixed;top:0px;right:0px;display:flex;max-width:24rem;flex-direction:row;flex-wrap:wrap;align-items:flex-end;padding:1.5rem 1rem}@media (min-width: 640px){:host{align-items:flex-end;padding:1.5rem}}:host{z-index:20;width:100%;max-width:24rem}\n"], directives: [{ type: ElementHostDirective, selector: "[appElementHost]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: AlertContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-alert-container',
                    template: `
      <ng-template appElementHost></ng-template>
  `,
                    styleUrls: ['./alert-container.component.css'],
                    // providers: [AlertService]
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: AlertService }]; }, propDecorators: { appElementHost: [{
                type: ViewChild,
                args: [ElementHostDirective, { static: true }]
            }] } });

class AlertModule {
    static forRoot(config) {
        return {
            ngModule: AlertModule,
            providers: [
                AlertService,
                { provide: ALERT_CONFIG_TOKEN, useValue: config }
            ]
        };
    }
}
AlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: AlertModule, declarations: [AlertContainerComponent, AlertComponent], imports: [CommonModule, ElementHostModule], exports: [AlertContainerComponent] });
AlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: AlertModule, imports: [[CommonModule, ElementHostModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AlertContainerComponent, AlertComponent],
                    imports: [CommonModule, ElementHostModule],
                    exports: [AlertContainerComponent]
                }]
        }] });

class BlockUiDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.targetElement = true;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.appBlockUi = false;
        this._overlayRemoved = true;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        /* if (this.target && !this.target.getBlockableElement) {
            throw 'Target of BlockUI must implement IBlockableUi interface';
        } */
        if (!this.maskTpl) {
            throw 'Mask element must be provided to BlockUI directive';
        }
        this.setupOverlay();
        // console.log('this.target.getBlockableElement()', this.target!.getBlockableElement());
        // console.log('this.el', this.el.nativeElement);
    }
    ngOnChanges(changes) {
        if (changes.appBlockUi.currentValue) {
            // console.log('Block UI');
            this.block();
        }
        else {
            // console.log('Unblock UI');
            this.unblock();
        }
    }
    toggleBlockUi(state) {
        // console.log('toggleBlockUi');
        if (state) {
            console.log('Block UI');
            this.block();
        }
        else {
            // console.log('Unblock UI');
            this.unblock();
        }
    }
    setupOverlay() {
        this._overlayEl = this.maskTpl.createEmbeddedView(null).rootNodes[0];
        this.renderer.setStyle(this._overlayEl, 'display', 'none');
        this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
        this.renderer.setStyle(this._overlayEl, 'display', 'flex');
        this.renderer.setStyle(this._overlayEl, 'justify-content', 'center');
        this.renderer.setStyle(this._overlayEl, 'align-items', 'center');
        this.renderer.setStyle(this._overlayEl, 'position', 'absolute');
        this.renderer.setStyle(this._overlayEl, 'top', '0px');
        this.renderer.setStyle(this._overlayEl, 'right', '0px');
        this.renderer.setStyle(this._overlayEl, 'bottom', '0px');
        this.renderer.setStyle(this._overlayEl, 'left', '0px');
        this.renderer.setStyle(this._overlayEl, 'background-color', 'var(--eui-blockui-background-color)');
        this.renderer.setStyle(this._overlayEl, 'cursor', 'var(--eui-blockui-cursor)');
        this.renderer.setStyle(this._overlayEl, 'border-radius', 'var(--eui-blockui-overlay-border-radius)');
    }
    block() {
        console.log('block', this._overlayEl);
        if (!this._overlayEl)
            return;
        // if (this.target) {
        if (this.targetElement) {
            this.renderer.appendChild(this.el.nativeElement, this._overlayEl);
        }
        else {
            this.renderer.appendChild(document.body, this._overlayEl);
        }
        if (this.autoZIndex && this._overlayEl) {
            this.renderer.setStyle(this._overlayEl, 'z-index', String(this.baseZIndex + 1000));
            // this._overlayEl.style.zIndex = String(this.baseZIndex + 1000); //(++DomHandler.zindex)
        }
        this._overlayRemoved = false;
    }
    unblock() {
        // this.mask?.nativeElement && this.el.nativeElement.appendChild(this.mask?.nativeElement);
        // this._overlayEl && this.renderer.removeChild(this.target?.getBlockableElement() || document.body, this._overlayEl);
        !this._overlayRemoved && this._overlayEl && this.renderer.removeChild(this.targetElement ? this.el.nativeElement : document.body, this._overlayEl);
        this._overlayRemoved = true;
    }
    ngOnDestroy() {
        this.unblock();
    }
}
BlockUiDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BlockUiDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
BlockUiDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.14", type: BlockUiDirective, selector: "[x-blockui]", inputs: { targetElement: ["x-target-el", "targetElement"], autoZIndex: ["x-auto-zindex", "autoZIndex"], baseZIndex: ["x-base-zindex", "baseZIndex"], appBlockUi: ["x-blockui", "appBlockUi"], maskTpl: ["x-overlay-tpl", "maskTpl"] }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BlockUiDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[x-blockui]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { targetElement: [{
                type: Input,
                args: ['x-target-el']
            }], autoZIndex: [{
                type: Input,
                args: ['x-auto-zindex']
            }], baseZIndex: [{
                type: Input,
                args: ['x-base-zindex']
            }], appBlockUi: [{
                type: Input,
                args: ['x-blockui']
            }], maskTpl: [{
                type: Input,
                args: ['x-overlay-tpl']
            }] } });

class BlockUiModule {
}
BlockUiModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BlockUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BlockUiModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BlockUiModule, declarations: [BlockUiDirective], imports: [CommonModule], exports: [BlockUiDirective] });
BlockUiModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BlockUiModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BlockUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BlockUiDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [BlockUiDirective]
                }]
        }] });

const BREADCRUMB_CONFIG_TOKEN = new InjectionToken("BREADCRUMB_CONFIG_TOKEN");

class BreadcrumbService extends Observable {
    constructor(route, router, breadcrumbConfig) {
        super(subscriber => {
            // console.log('subscriber');
            // this._routerEvent$.subscribe(subscriber);
            this._breadcrumbsSub = this._breadcrumbs$.asObservable().subscribe(subscriber);
            this._routeEventSub = this._routerEvent$(this.breadcrumbConfig).subscribe();
            return () => {
                var _a, _b;
                (_a = this._routeEventSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
                (_b = this._breadcrumbsSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
            };
        });
        this.route = route;
        this.router = router;
        this.breadcrumbConfig = breadcrumbConfig;
        this._breadcrumbs$ = new BehaviorSubject([]);
        this._paramPattern = /\:([a-zA-Z]+)/g;
        // console.log('constructor');
        this._routeEventSub = this._routerEvent$(this.breadcrumbConfig).subscribe();
    }
    _routerEvent$(config) {
        return this.router.events.pipe(
        // Filter the NavigationEnd events as the breadcrumb is
        // updated only when the route reaches its end
        filter((event) => event instanceof NavigationEnd), map(() => this.route), map(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), distinctUntilChanged(), switchMap(route => {
            return route.data.pipe(map(data => {
                let index = config.findIndex(x => x.name === data.breadcrumb);
                return this.updateWithParams(config.slice(0, index + 1), route.snapshot.params);
            }));
        }), tap(breadcrumb => {
            this._breadcrumbs$.next(breadcrumb);
        }));
    }
    updateWithParams(breadcrumb, params) {
        let result;
        let breadcrumbCopy = JSON.parse(JSON.stringify(breadcrumb));
        // let first = breadcrumbCopy[0];
        breadcrumbCopy.forEach((b) => {
            var _a;
            let routeToUpdate = b.newRoute;
            while ((result = this._paramPattern.exec(routeToUpdate)) != null) {
                routeToUpdate = routeToUpdate.replace(result[0], (_a = params[result[1]]) !== null && _a !== void 0 ? _a : result[0]);
            }
            if (routeToUpdate.indexOf(':') > -1)
                console.error(`Unable to update parameters of route: ${b.newRoute}`);
            b.newRoute = routeToUpdate;
        });
        return breadcrumbCopy;
    }
}
BreadcrumbService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbService, deps: [{ token: i2.ActivatedRoute }, { token: i2.Router }, { token: BREADCRUMB_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
BreadcrumbService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.ActivatedRoute }, { type: i2.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [BREADCRUMB_CONFIG_TOKEN]
                }] }]; } });

class BreadcrumbComponent {
    constructor(breadcrumbService, router) {
        this.breadcrumbService = breadcrumbService;
        this.router = router;
        this.breadcrumbs = [];
        this.breadcrumbs$ = this.breadcrumbService;
    }
    get isBreadcrumbVisible() {
        return this.breadcrumbs.length > 0;
    }
    ngOnInit() {
        // console.log('ngOnInit');
        this._breadcrumbSub = this.breadcrumbs$.subscribe(breadcrumbs => {
            this.breadcrumbs = breadcrumbs;
        });
    }
    onBreadcrumbMenuItemClick(item) {
        this.router.navigateByUrl(item.newRoute);
    }
    ngOnDestroy() {
        var _a;
        // console.log('ngOnDestroy');
        (_a = this._breadcrumbSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
BreadcrumbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbComponent, deps: [{ token: BreadcrumbService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: BreadcrumbComponent, selector: "app-breadcrumb", ngImport: i0, template: "<ol *ngIf=\"isBreadcrumbVisible\" role=\"list\" class=\"flex items-center space-x-4\">\n    <li>\n        <div>\n            <a [routerLink]=\"['/']\" class=\"text-gray-400 hover:text-gray-500\">\n                <!-- Heroicon name: solid/home -->\n                <svg class=\"flex-shrink-0 w-5 h-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"\n                     fill=\"currentColor\" aria-hidden=\"true\">\n                    <path\n                          d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\" />\n                </svg>\n                <span class=\"sr-only\">Home</span>\n            </a>\n        </div>\n    </li>\n\n    <ng-container *ngFor=\"let item of breadcrumbs\">\n        <li>\n            <div class=\"flex items-center\">\n                <svg class=\"flex-shrink-0 w-5 h-5 text-gray-300\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"\n                     viewBox=\"0 0 20 20\" aria-hidden=\"true\">\n                    <path d=\"M5.555 17.776l8-16 .894.448-8 16-.894-.448z\" />\n                </svg>\n                <!-- <a [routerLink]=\"item.route\" class=\"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700\">{{\n                    item.label }}</a> -->\n                <!-- [item.newRoute, { outlets: { details: null } }] -->\n                <a routerLink=\"{{item.newRoute}}\"\n                   class=\"ml-4 text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-700\">{{\n                    item.label }}</a>\n                <!-- <a (click)=\"onBreadcrumbMenuItemClick(item)\"\n                   class=\"ml-4 text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-700\">{{\n                    item.label }}</a> -->\n            </div>\n        </li>\n    </ng-container>\n</ol>\n", styles: [":host{display:block}\n"], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-breadcrumb',
                    templateUrl: './breadcrumb.component.html',
                    styleUrls: ['./breadcrumb.component.css']
                }]
        }], ctorParameters: function () { return [{ type: BreadcrumbService }, { type: i2.Router }]; } });

class BreadcrumbModule {
    static withConfig(config) {
        return {
            ngModule: BreadcrumbModule,
            providers: [
                {
                    provide: BREADCRUMB_CONFIG_TOKEN,
                    useValue: config || []
                }
            ]
        };
    }
}
BreadcrumbModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BreadcrumbModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbModule, declarations: [BreadcrumbComponent], imports: [CommonModule,
        RouterModule], exports: [BreadcrumbComponent] });
BreadcrumbModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbModule, providers: [BreadcrumbService], imports: [[
            CommonModule,
            RouterModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BreadcrumbComponent],
                    imports: [
                        CommonModule,
                        RouterModule
                    ],
                    providers: [BreadcrumbService],
                    exports: [BreadcrumbComponent]
                }]
        }] });

class ButtonIconComponent {
    constructor() {
        this.ariaLabel = '';
        this.buttonClick = new EventEmitter();
    }
    // @ContentChild(IconCloseComponent) icon!: IconCloseComponent;
    ngOnInit() { }
    ngAfterContentInit() {
        /* if (!(this.icon instanceof IconCloseComponent))
            console.error('Invalid component projected in ButtonIcon component'); */
    }
    onClick(e) {
        this.buttonClick.emit();
    }
}
ButtonIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ButtonIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: ButtonIconComponent, selector: "app-button-icon", inputs: { ariaLabel: "ariaLabel" }, outputs: { buttonClick: "buttonClick" }, ngImport: i0, template: "<!-- text-indigo-800  rounded-md hover:text-indigo-900 focus:text-indigo-900 -->\r\n<button (click)=\"onClick($event)\" type=\"button\" class=\"bg-transparent\">\r\n    <span class=\"sr-only\">{{ ariaLabel }}</span>\r\n    <ng-content></ng-content>\r\n    <!-- <ng-template [ngTemplateOutlet]=\"outlet\"></ng-template> -->\r\n</button>\r\n", styles: [":host{display:flex;height:1.75rem;align-items:center;outline:2px solid transparent;outline-offset:2px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ButtonIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-button-icon',
                    templateUrl: './button-icon.component.html',
                    styleUrls: ['./button-icon.component.css']
                }]
        }], propDecorators: { ariaLabel: [{
                type: Input
            }], buttonClick: [{
                type: Output
            }] } });
class ButtonIconModule {
}
ButtonIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ButtonIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ButtonIconModule, declarations: [ButtonIconComponent], exports: [ButtonIconComponent] });
ButtonIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ButtonIconModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ButtonIconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ButtonIconComponent],
                    exports: [ButtonIconComponent]
                }]
        }] });

class BaseIconComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.iconClass = '';
    }
    ngOnChanges() {
        // console.log('ngOnChanges');
    }
    ngOnInit() {
        var _a;
        // console.log('ngOnInit');
        try {
            (_a = this.iconClass.match(/[^ ]+/g)) === null || _a === void 0 ? void 0 : _a.forEach((match) => {
                if (match && match.trim())
                    this.renderer.addClass(this.el.nativeElement, match);
            });
            // if (this.iconClass.trim())
        }
        catch (_b) { }
    }
}
BaseIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BaseIconComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
BaseIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: BaseIconComponent, selector: "ng-component", usesOnChanges: true, ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BaseIconComponent, decorators: [{
            type: Component,
            args: [{
                    template: ``
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class IconCloseComponent extends BaseIconComponent {
    constructor(el, renderer) {
        super(el, renderer);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
IconCloseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconCloseComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
IconCloseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: IconCloseComponent, selector: "app-icon-close", usesInheritance: true, ngImport: i0, template: "<svg x-description=\"Heroicon name: outline/x\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\r\n     stroke=\"currentColor\" aria-hidden=\"true\">\r\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"></path>\r\n</svg>\r\n", styles: [":host{display:block;height:1.5rem;width:1.5rem}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconCloseComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-icon-close',
                    templateUrl: './icon-close.component.html',
                    styleUrls: ['./icon-close.component.css'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class IconDotVerticalComponent extends BaseIconComponent {
    constructor(el, renderer) {
        super(el, renderer);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
IconDotVerticalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconDotVerticalComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
IconDotVerticalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: IconDotVerticalComponent, selector: "app-icon-dot-vertical", usesInheritance: true, ngImport: i0, template: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\r\n    <path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\" />\r\n</svg>\r\n", styles: [":host{display:block;height:1.25rem;width:1.25rem;--tw-text-opacity: 1;color:rgba(107,114,128,var(--tw-text-opacity))}:host:hover{--tw-text-opacity: 1;color:rgba(17,24,39,var(--tw-text-opacity))}:host{transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;transition-duration:.2s}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconDotVerticalComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-icon-dot-vertical',
                    templateUrl: './icon-dot-vertical.component.html',
                    styleUrls: ['./icon-dot-vertical.component.css'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class IconEyeComponent extends BaseIconComponent {
    constructor(el, renderer) {
        super(el, renderer);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
IconEyeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconEyeComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
IconEyeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: IconEyeComponent, selector: "app-icon-eye", usesInheritance: true, ngImport: i0, template: "<svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path d=\"M10 12a2 2 0 100-4 2 2 0 000 4z\"></path>\r\n    <path fill-rule=\"evenodd\"\r\n          d=\"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z\"\r\n          clip-rule=\"evenodd\"></path>\r\n</svg>\r\n", styles: [":host{display:block;height:1.25rem;width:1.25rem}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconEyeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-icon-eye',
                    templateUrl: './icon-eye.component.html',
                    styleUrls: ['./icon-eye.component.css'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class IconLoginComponent extends BaseIconComponent {
    constructor(el, renderer) {
        super(el, renderer);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
IconLoginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconLoginComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
IconLoginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: IconLoginComponent, selector: "app-icon-login", usesInheritance: true, ngImport: i0, template: "<svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path fill-rule=\"evenodd\"\r\n          d=\"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z\"\r\n          clip-rule=\"evenodd\"></path>\r\n</svg>\r\n", styles: [":host{display:block;height:1.25rem;width:1.25rem}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconLoginComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-icon-login',
                    templateUrl: './icon-login.component.html',
                    styleUrls: ['./icon-login.component.css'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class IconLogoutComponent extends BaseIconComponent {
    constructor(el, renderer) {
        super(el, renderer);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
IconLogoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconLogoutComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
IconLogoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: IconLogoutComponent, selector: "app-icon-logout", usesInheritance: true, ngImport: i0, template: "<svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path fill-rule=\"evenodd\"\r\n          d=\"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z\"\r\n          clip-rule=\"evenodd\"></path>\r\n</svg>\r\n", styles: [":host{display:block;height:1.25rem;width:1.25rem}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconLogoutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-icon-logout',
                    templateUrl: './icon-logout.component.html',
                    styleUrls: ['./icon-logout.component.css'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class IconPencilComponent extends BaseIconComponent {
    constructor(el, renderer) {
        super(el, renderer);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
IconPencilComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconPencilComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
IconPencilComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: IconPencilComponent, selector: "app-icon-pencil", usesInheritance: true, ngImport: i0, template: "<svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path\r\n          d=\"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z\">\r\n    </path>\r\n</svg>\r\n", styles: [":host{display:block;height:1.25rem;width:1.25rem}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconPencilComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-icon-pencil',
                    templateUrl: './icon-pencil.component.html',
                    styleUrls: ['./icon-pencil.component.css'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class IconTrashComponent extends BaseIconComponent {
    constructor(el, renderer) {
        super(el, renderer);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
IconTrashComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconTrashComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
IconTrashComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: IconTrashComponent, selector: "app-icon-trash", usesInheritance: true, ngImport: i0, template: "<svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path fill-rule=\"evenodd\"\r\n          d=\"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z\"\r\n          clip-rule=\"evenodd\"></path>\r\n</svg>\r\n", styles: [":host{display:block;height:1.25rem;width:1.25rem}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconTrashComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-icon-trash',
                    templateUrl: './icon-trash.component.html',
                    styleUrls: ['./icon-trash.component.css'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class IconsModule {
}
IconsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IconsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconsModule, declarations: [IconCloseComponent,
        IconDotVerticalComponent,
        IconEyeComponent,
        IconPencilComponent,
        IconTrashComponent,
        IconLoginComponent,
        IconLogoutComponent,
        BaseIconComponent], exports: [IconCloseComponent,
        IconDotVerticalComponent,
        IconEyeComponent,
        IconPencilComponent,
        IconTrashComponent,
        IconLoginComponent,
        IconLogoutComponent,
        BaseIconComponent] });
IconsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconsModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: IconsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        IconCloseComponent,
                        IconDotVerticalComponent,
                        IconEyeComponent,
                        IconPencilComponent,
                        IconTrashComponent,
                        IconLoginComponent,
                        IconLogoutComponent,
                        BaseIconComponent
                    ],
                    exports: [
                        IconCloseComponent,
                        IconDotVerticalComponent,
                        IconEyeComponent,
                        IconPencilComponent,
                        IconTrashComponent,
                        IconLoginComponent,
                        IconLogoutComponent,
                        BaseIconComponent
                    ],
                    imports: []
                }]
        }] });

class LinkIconComponent {
    constructor(resolver) {
        this.resolver = resolver;
        this.iconClass = '';
        this.linkClick = new EventEmitter();
        // console.log('viewContainerRef', viewContainer);
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        // console.log('icon', this.icon);
    }
    ngAfterViewInit() {
        var _a, _b;
        // console.log('this.iconHost', this.iconViewContainerRef);
        if (!this.menuItem || !this.menuItem.iconComponent)
            return;
        const componentFactory = this.resolver.resolveComponentFactory(this.menuItem.iconComponent);
        this._iconComponentRef = (_a = this.iconViewContainerRef) === null || _a === void 0 ? void 0 : _a.createComponent(componentFactory);
        if (this._iconComponentRef) {
            this._iconComponentRef.instance.iconClass = this.iconClass;
            (_b = this._iconComponentRef) === null || _b === void 0 ? void 0 : _b.changeDetectorRef.detectChanges();
        }
    }
    onLinkClick() {
        // this.menuItem?.command();
        this.linkClick.emit(this.menuItem);
    }
    ngOnDestroy() {
        var _a;
        (_a = this._iconComponentRef) === null || _a === void 0 ? void 0 : _a.destroy();
    }
}
LinkIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LinkIconComponent, deps: [{ token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.Component });
LinkIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: LinkIconComponent, selector: "app-link-icon", inputs: { menuItem: "menuItem", iconClass: "iconClass" }, outputs: { linkClick: "linkClick" }, queries: [{ propertyName: "icon", first: true, predicate: IconTrashComponent, descendants: true }], viewQueries: [{ propertyName: "iconViewContainerRef", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef }, { propertyName: "tpl", first: true, predicate: ["tpl"], descendants: true }], ngImport: i0, template: "<a (click)=\"onLinkClick()\" class=\"flex items-center px-4 py-2 text-sm cursor-pointer\" role=\"menuitem\" tabindex=\"-1\">\r\n    <ng-container #container *ngIf=\"menuItem?.isIconVisible\"></ng-container>\r\n    <span class=\"truncate\">{{menuItem?.label}}</span>\r\n</a>\r\n", styles: [":host{display:block}\n"], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LinkIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-link-icon',
                    templateUrl: './link-icon.component.html',
                    styleUrls: ['./link-icon.component.css'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }]; }, propDecorators: { iconViewContainerRef: [{
                type: ViewChild,
                args: ['container', { read: ViewContainerRef }]
            }], tpl: [{
                type: ViewChild,
                args: ['tpl']
            }], icon: [{
                type: ContentChild,
                args: [IconTrashComponent]
            }], menuItem: [{
                type: Input
            }], iconClass: [{
                type: Input
            }], linkClick: [{
                type: Output
            }] } });
class LinkIconModule {
}
LinkIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LinkIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LinkIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LinkIconModule, declarations: [LinkIconComponent], imports: [CommonModule], exports: [LinkIconComponent] });
LinkIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LinkIconModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LinkIconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LinkIconComponent],
                    imports: [CommonModule],
                    exports: [LinkIconComponent]
                }]
        }] });

class ContextMenuComponent {
    constructor() {
        this.menuItems = [];
        this.menuItemClick = new EventEmitter();
    }
    ngOnInit() {
        if (!this.handle) {
            throw 'A handle is required for the context menu';
        }
    }
    onLinkClick(menuItem) {
        if (this.handle)
            this.menuItemClick.emit({ menuItem, handle: this.handle });
    }
}
ContextMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ContextMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ContextMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: ContextMenuComponent, selector: "app-context-menu", inputs: { handle: "handle", menuItems: "menuItems" }, outputs: { menuItemClick: "menuItemClick" }, ngImport: i0, template: "<div class=\"mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none\"\r\n     role=\"menu\" aria-orientation=\"vertical\" aria-labelledby=\"menu-0-button\" tabindex=\"-1\">\r\n    <div class=\"py-1\" role=\"none\">\r\n        <!-- Active: \"bg-gray-100 text-gray-900\", Not Active: \"text-gray-700\" -->\r\n        <!-- -->\r\n        <ng-container *ngFor=\"let item of menuItems\">\r\n            <app-link-icon (linkClick)=\"onLinkClick(item)\" [menuItem]=\"item\" [iconClass]=\"'mr-3 opacity-70'\"\r\n                           class=\"text-gray-700 hover:text-indigo-700\">\r\n            </app-link-icon>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n", styles: [":host{z-index:20;display:block}\n"], components: [{ type: LinkIconComponent, selector: "app-link-icon", inputs: ["menuItem", "iconClass"], outputs: ["linkClick"] }], directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ContextMenuComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-context-menu',
                    templateUrl: './context-menu.component.html',
                    styleUrls: ['./context-menu.component.css'],
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { handle: [{
                type: Input
            }], menuItems: [{
                type: Input
            }], menuItemClick: [{
                type: Output
            }] } });

class ContextMenuModule {
}
ContextMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ContextMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ContextMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ContextMenuModule, declarations: [ContextMenuComponent], imports: [CommonModule, LinkIconModule], exports: [ContextMenuComponent] });
ContextMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ContextMenuModule, imports: [[CommonModule, LinkIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ContextMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ContextMenuComponent
                    ],
                    imports: [CommonModule, LinkIconModule],
                    exports: [ContextMenuComponent]
                }]
        }] });

class DropdownMenuComponent {
    constructor() {
        this.menus = [];
        this.menuItemClicked = new EventEmitter();
    }
    ngOnInit() {
    }
    onMenuItemClick(menuItem) {
        this.menuItemClicked.emit(menuItem);
    }
}
DropdownMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DropdownMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DropdownMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: DropdownMenuComponent, selector: "app-dropdown-menu", inputs: { menus: "menus" }, outputs: { menuItemClicked: "menuItemClicked" }, ngImport: i0, template: "<!--\r\n              Dropdown menu, show/hide based on menu state.\r\n\r\n              Entering: \"transition ease-out duration-100\"\r\n                From: \"transform opacity-0 scale-95\"\r\n                To: \"transform opacity-100 scale-100\"\r\n              Leaving: \"transition ease-in duration-75\"\r\n                From: \"transform opacity-100 scale-100\"\r\n                To: \"transform opacity-0 scale-95\"\r\n            -->\r\n<div class=\"absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none\"\r\n     role=\"menu\" aria-orientation=\"vertical\" aria-labelledby=\"user-menu-button\" tabindex=\"-1\">\r\n\r\n    <ng-container *ngFor=\"let menuItem of menus\">\r\n        <a [routerLink]=\"menuItem.routerLink()\" routerLinkActive=\"router-link-active\"\r\n           (click)=\"onMenuItemClick(menuItem)\" class=\"block px-4 py-2 text-sm text-gray-700\" tabindex=\"-1\">\r\n            {{menuItem.label}}\r\n        </a>\r\n    </ng-container>\r\n\r\n\r\n    <!-- Active: \"bg-gray-100\", Not Active: \"\" -->\r\n    <!-- <a href=\"#\" class=\"block px-4 py-2 text-sm text-gray-700\" role=\"menuitem\" tabindex=\"-1\" id=\"user-menu-item-0\">Your\r\n        Profile</a>\r\n    <a href=\"#\" class=\"block px-4 py-2 text-sm text-gray-700\" role=\"menuitem\" tabindex=\"-1\"\r\n       id=\"user-menu-item-1\">Settings</a>\r\n    <a href=\"#\" class=\"block px-4 py-2 text-sm text-gray-700\" role=\"menuitem\" tabindex=\"-1\" id=\"user-menu-item-2\">Sign\r\n        out</a> -->\r\n</div>\r\n", styles: [""], directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i2.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "routerLinkActive"], exportAs: ["routerLinkActive"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DropdownMenuComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-dropdown-menu',
                    templateUrl: './dropdown-menu.component.html',
                    styleUrls: ['./dropdown-menu.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { menus: [{
                type: Input
            }], menuItemClicked: [{
                type: Output
            }] } });

class DropdownMenuModule {
}
DropdownMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DropdownMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DropdownMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DropdownMenuModule, declarations: [DropdownMenuComponent], imports: [CommonModule, RouterModule], exports: [DropdownMenuComponent] });
DropdownMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DropdownMenuModule, imports: [[CommonModule, RouterModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DropdownMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DropdownMenuComponent],
                    imports: [CommonModule, RouterModule],
                    exports: [DropdownMenuComponent]
                }]
        }] });

class EmptyStateComponent {
    constructor() {
        this.title = 'No item found';
        this.description = 'Get started by adding a new item';
        this.buttonLabel = 'Add New';
        this.addNewItem = new EventEmitter();
    }
    ngOnInit() {
    }
    onAddNewItem() {
        this.addNewItem.emit();
    }
}
EmptyStateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: EmptyStateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmptyStateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: EmptyStateComponent, selector: "app-empty-state", inputs: { title: "title", description: "description", buttonLabel: "buttonLabel" }, outputs: { addNewItem: "addNewItem" }, ngImport: i0, template: "<svg class=\"w-12 h-12 mx-auto text-gray-400\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" aria-hidden=\"true\">\r\n    <path vector-effect=\"non-scaling-stroke\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\r\n          d=\"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z\" />\r\n</svg>\r\n<h3 class=\"mt-2 text-sm font-medium text-gray-900\">{{ title }}</h3>\r\n<p class=\"mt-1 text-sm text-gray-500\">\r\n    {{ description }}\r\n</p>\r\n<div class=\"mt-6\">\r\n    <button (click)=\"onAddNewItem()\" type=\"button\"\r\n            class=\"inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\">\r\n        <!-- Heroicon name: solid/plus -->\r\n        <svg class=\"w-5 h-5 mr-2 -ml-1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\"\r\n             aria-hidden=\"true\">\r\n            <path fill-rule=\"evenodd\"\r\n                  d=\"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z\"\r\n                  clip-rule=\"evenodd\" />\r\n        </svg>\r\n        {{ buttonLabel }}\r\n    </button>\r\n</div>\r\n", styles: [":host{display:block;border-width:2px;--tw-border-opacity: 1;border-color:rgba(209,213,219,var(--tw-border-opacity));padding:3rem;text-align:center;border-radius:.5rem;border-style:dashed}:host:hover{--tw-border-opacity: 1;border-color:rgba(156,163,175,var(--tw-border-opacity))}:host:focus{outline:2px solid transparent;outline-offset:2px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: EmptyStateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-empty-state',
                    templateUrl: './empty-state.component.html',
                    styleUrls: ['./empty-state.component.css'],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], description: [{
                type: Input
            }], buttonLabel: [{
                type: Input
            }], addNewItem: [{
                type: Output
            }] } });
class EmptyStateModule {
}
EmptyStateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: EmptyStateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EmptyStateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: EmptyStateModule, declarations: [EmptyStateComponent], exports: [EmptyStateComponent] });
EmptyStateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: EmptyStateModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: EmptyStateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [EmptyStateComponent],
                    exports: [EmptyStateComponent]
                }]
        }] });

class PageHeadingLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageHeadingLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PageHeadingLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: PageHeadingLayoutComponent, selector: "app-page-heading-layout", ngImport: i0, template: "<header class=\"bg-white border-b-2 border-gray-200 border-dashed\">\r\n    <div class=\"px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8\">\r\n        dfaf\r\n        <ng-content></ng-content>\r\n    </div>\r\n</header>\r\n", styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingLayoutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-page-heading-layout',
                    templateUrl: './page-heading-layout.component.html',
                    styleUrls: ['./page-heading-layout.component.css'],
                }]
        }], ctorParameters: function () { return []; } });

class PageHeadingLayoutModule {
}
PageHeadingLayoutModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingLayoutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PageHeadingLayoutModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingLayoutModule, declarations: [PageHeadingLayoutComponent], imports: [CommonModule], exports: [PageHeadingLayoutComponent] });
PageHeadingLayoutModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingLayoutModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingLayoutModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PageHeadingLayoutComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [PageHeadingLayoutComponent]
                }]
        }] });

class TwoColumnLayoutComponent {
    constructor() {
        this.isSecondaryContentVisible = false;
        this.hamburgerMenuClick = new EventEmitter();
    }
    ngOnInit() {
    }
    hamburgerMenuClickHandler() {
        this.hamburgerMenuClick.emit();
    }
}
TwoColumnLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TwoColumnLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TwoColumnLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: TwoColumnLayoutComponent, selector: "app-two-column-layout", inputs: { isSecondaryContentVisible: "isSecondaryContentVisible" }, outputs: { hamburgerMenuClick: "hamburgerMenuClick" }, ngImport: i0, template: "<header class=\"bg-white border-b-2 border-gray-200 border-dashed\">\n    <div class=\"px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8\">\n        <ng-content select=\"[header-content]\"></ng-content>\n    </div>\n</header>\n\n<ng-content select=\"[breadcrumb-content]\"></ng-content>\n<!-- overflow-hidden -->\n<div class=\"flex flex-col flex-1 min-w-0 min-h-full\">\n    <div class=\"lg:hidden\">\n        <div class=\"flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5\">\n            <button (click)=\"hamburgerMenuClickHandler()\" type=\"button\"\n                    class=\"inline-flex items-center justify-center w-12 h-12 -mr-3 text-gray-500 rounded-md hover:text-gray-900\">\n                <span class=\"sr-only\">Open sidebar</span>\n                <!-- Heroicon name: outline/menu -->\n                <svg class=\"w-6 h-6\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\n                     stroke=\"currentColor\" aria-hidden=\"true\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\" />\n                </svg>\n            </button>\n        </div>\n    </div>\n    <!-- overflow-hidden -->\n    <div class=\"relative z-0 flex flex-1 \">\n        <!-- overflow-y-auto -->\n        <main class=\"relative z-0 flex-1 bg-white focus:outline-none\">\n            <!-- Start main area-->\n            <!-- absolute inset-0  -->\n            <div class=\"min-h-full px-4 py-6 sm:px-6 lg:px-8\">\n                <div class=\"h-full\">\n                    <ng-content select=\"[main-content]\"></ng-content>\n                </div>\n            </div>\n            <!-- End main area -->\n        </main>\n        <!-- overflow-y-auto -->\n        <!-- absolute inset-0  -->\n        <aside *ngIf=\"isSecondaryContentVisible\"\n               class=\"relative flex-shrink-0 hidden border-l border-gray-200 bg-purple-50 lg:flex lg:flex-col w-80\">\n            <!-- Start secondary column (hidden on smaller screens) -->\n            <div class=\"min-h-full px-4 py-6 sm:px-6 lg:px-8\">\n                <div class=\"h-full\">\n                    <ng-content select=\"[secondary-content]\"></ng-content>\n                </div>\n            </div>\n            <!-- End secondary column -->\n        </aside>\n    </div>\n</div>\n", styles: [":host{display:block;flex:1 1 0%}\n"], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TwoColumnLayoutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-two-column-layout',
                    templateUrl: './two-column-layout.component.html',
                    styleUrls: ['./two-column-layout.component.css'],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { isSecondaryContentVisible: [{
                type: Input
            }], hamburgerMenuClick: [{
                type: Output
            }] } });

class TwoColumnLayoutModule {
}
TwoColumnLayoutModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TwoColumnLayoutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TwoColumnLayoutModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TwoColumnLayoutModule, declarations: [TwoColumnLayoutComponent], imports: [CommonModule], exports: [TwoColumnLayoutComponent] });
TwoColumnLayoutModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TwoColumnLayoutModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TwoColumnLayoutModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TwoColumnLayoutComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [TwoColumnLayoutComponent]
                }]
        }] });

class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LogoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LogoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: LogoComponent, selector: "app-logo", ngImport: i0, template: "<img class=\"block w-10 h-8 lg:block\" src=\"assets/psr-abbrv-logo.svg\" alt=\"Personal Skill Rating\">\r\n", styles: [":host{display:flex;flex-shrink:0;align-items:center}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LogoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-logo',
                    templateUrl: './logo.component.html',
                    styleUrls: ['./logo.component.css'],
                }]
        }], ctorParameters: function () { return []; } });

class LogoModule {
}
LogoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LogoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LogoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LogoModule, declarations: [LogoComponent], exports: [LogoComponent] });
LogoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LogoModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LogoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LogoComponent],
                    imports: [],
                    exports: [LogoComponent]
                }]
        }] });

class PageHeadingComponent {
    constructor() {
        this.title = '';
        this.description = '';
        this.xSize = "large";
        this.xColor = "black";
        // this.title = this.title ?? '';
        // this.description = this.description ?? '';
    }
    ngOnInit() {
    }
}
PageHeadingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PageHeadingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: PageHeadingComponent, selector: "app-page-heading", inputs: { title: "title", description: "description", xSize: ["x-size", "xSize"], xColor: ["x-color", "xColor"] }, ngImport: i0, template: "<h1>{{title}}</h1>\r\n<p>{{description}}</p>\r\n", styles: [":host{display:block}:host([x-size=large]) h1{font-size:1.875rem;line-height:2.25rem;font-weight:700}:host([x-size=large]) p{font-size:1.125rem;line-height:1.75rem;font-weight:400}:host([x-size=medium]) h1{font-size:1.125rem;line-height:1.75rem;font-weight:500;line-height:1.5rem}:host([x-size=medium]) p{margin-top:.25rem;max-width:42rem;font-size:.875rem;line-height:1.25rem}:host([x-color=black]) h1,:host([x-color=black]) p{--tw-text-opacity: 1;color:rgba(17,24,39,var(--tw-text-opacity))}:host([x-color=indigo]) h1,:host([x-color=indigo]) p{--tw-text-opacity: 1;color:rgba(49,46,129,var(--tw-text-opacity))}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-page-heading',
                    templateUrl: './page-heading.component.html',
                    styleUrls: ['./page-heading.component.css'],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], description: [{
                type: Input
            }], xSize: [{
                type: Input,
                args: ['x-size']
            }], xColor: [{
                type: Input,
                args: ['x-color']
            }] } });
class PageHeadingModule {
}
PageHeadingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PageHeadingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingModule, declarations: [PageHeadingComponent], exports: [PageHeadingComponent] });
PageHeadingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PageHeadingComponent],
                    exports: [PageHeadingComponent]
                }]
        }] });

class ReadFieldComponent {
    constructor() { }
    get isFieldVisible() {
        return this.fieldLabel && this.fieldValue;
    }
}
ReadFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ReadFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ReadFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: ReadFieldComponent, selector: "app-read-field", inputs: { fieldLabel: "fieldLabel", fieldValue: "fieldValue" }, ngImport: i0, template: "<ng-container *ngIf=\"isFieldVisible\">\r\n    <div class=\"text-sm font-medium text-indigo-900\">{{ fieldLabel }}</div>\r\n    <div class=\"mt-1 text-sm text-indigo-900\">{{ fieldValue }}</div>\r\n</ng-container>\r\n", styles: [":host{display:block}\n"], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ReadFieldComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-read-field',
                    templateUrl: './read-field.component.html',
                    styleUrls: ['./read-field.component.css'],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { fieldLabel: [{
                type: Input
            }], fieldValue: [{
                type: Input
            }] } });
class ReadFieldModule {
}
ReadFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ReadFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ReadFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ReadFieldModule, declarations: [ReadFieldComponent], imports: [CommonModule], exports: [ReadFieldComponent] });
ReadFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ReadFieldModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ReadFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ReadFieldComponent],
                    imports: [CommonModule],
                    exports: [ReadFieldComponent]
                }]
        }] });

class SecondaryHeaderService {
    constructor() {
        this._subjectCloseClicked$ = new Subject();
    }
    get isCloseClicked$() {
        return this._subjectCloseClicked$.asObservable();
    }
    closeClicked() {
        this._subjectCloseClicked$.next(true);
    }
}
SecondaryHeaderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: SecondaryHeaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SecondaryHeaderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: SecondaryHeaderService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: SecondaryHeaderService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class SecondaryHeaderComponent {
    constructor() {
        this.title = '';
        this.description = '';
        this.closeClick = new EventEmitter();
    }
    ngOnInit() {
    }
    onButtonClick() {
        this.closeClick.emit();
    }
}
SecondaryHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: SecondaryHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SecondaryHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: SecondaryHeaderComponent, selector: "app-secondary-header", inputs: { title: "title", description: "description" }, outputs: { closeClick: "closeClick" }, ngImport: i0, template: "<!-- <div>\r\n            <h1 class=\"text-lg font-medium leading-6 text-indigo-900\">\r\n                Skill Information\r\n            </h1>\r\n            <p class=\"max-w-2xl mt-1 text-sm text-indigo-900\">\r\n                Detils of the skill.\r\n            </p>\r\n        </div> -->\r\n<app-page-heading x-size=\"medium\" x-color=\"indigo\" [title]=\"title\" [description]=\"description\"></app-page-heading>\r\n<app-button-icon (buttonClick)=\"onButtonClick()\" class=\"text-indigo-900\">\r\n    <app-icon-close></app-icon-close>\r\n</app-button-icon>\r\n<!-- <app-page-heading x-size=\"medium\" x-color=\"indigo\"></app-page-heading> -->\r\n<!-- <div class=\"flex items-center ml-3 h-7\">\r\n            <button (click)=\"onCloseClick()\" type=\"button\"\r\n                    class=\"text-indigo-800 bg-transparent rounded-md hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:text-indigo-900\">\r\n                <span class=\"sr-only\">Close panel</span>\r\n                <svg class=\"w-6 h-6\" x-description=\"Heroicon name: outline/x\"\r\n                     xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\r\n                     stroke=\"currentColor\" aria-hidden=\"true\">\r\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\r\n                          d=\"M6 18L18 6M6 6l12 12\"></path>\r\n                </svg>\r\n            </button>\r\n        </div> -->\r\n", styles: [":host{display:flex;justify-content:space-between;border-bottom-width:1px;--tw-border-opacity: 1;border-color:rgba(229,231,235,var(--tw-border-opacity));padding-top:1.25rem;padding-bottom:1.25rem}\n"], components: [{ type: PageHeadingComponent, selector: "app-page-heading", inputs: ["title", "description", "x-size", "x-color"] }, { type: ButtonIconComponent, selector: "app-button-icon", inputs: ["ariaLabel"], outputs: ["buttonClick"] }, { type: IconCloseComponent, selector: "app-icon-close" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: SecondaryHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-secondary-header',
                    templateUrl: './secondary-header.component.html',
                    styleUrls: ['./secondary-header.component.css'],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], description: [{
                type: Input
            }], closeClick: [{
                type: Output
            }] } });
class SecondaryHeaderModule {
}
SecondaryHeaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: SecondaryHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SecondaryHeaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: SecondaryHeaderModule, declarations: [SecondaryHeaderComponent], imports: [ButtonIconModule, IconsModule, PageHeadingModule], exports: [SecondaryHeaderComponent] });
SecondaryHeaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: SecondaryHeaderModule, providers: [SecondaryHeaderService], imports: [[ButtonIconModule, IconsModule, PageHeadingModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: SecondaryHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SecondaryHeaderComponent],
                    imports: [ButtonIconModule, IconsModule, PageHeadingModule],
                    providers: [SecondaryHeaderService],
                    exports: [SecondaryHeaderComponent]
                }]
        }] });

class SharedlibModule {
}
SharedlibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: SharedlibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedlibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: SharedlibModule, imports: [CommonModule,
        RouterModule,
        AlertModule,
        BreadcrumbModule,
        ButtonIconModule,
        ContextMenuModule,
        DropdownMenuModule,
        EmptyStateModule,
        IconsModule,
        PageHeadingLayoutModule,
        TwoColumnLayoutModule,
        LinkIconModule,
        LogoModule,
        PageHeadingModule,
        ReadFieldModule,
        SecondaryHeaderModule,
        DisableControlModule,
        ElementHostModule,
        TemplateHandleModule], exports: [CommonModule,
        AlertModule,
        BreadcrumbModule,
        ButtonIconModule,
        ContextMenuModule,
        DropdownMenuModule,
        EmptyStateModule,
        IconsModule,
        PageHeadingLayoutModule,
        TwoColumnLayoutModule,
        LinkIconModule,
        LogoModule,
        PageHeadingModule,
        ReadFieldModule,
        SecondaryHeaderModule,
        DisableControlModule,
        ElementHostModule,
        TemplateHandleModule] });
SharedlibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: SharedlibModule, providers: [
        UtilService
    ], imports: [[
            CommonModule,
            RouterModule,
            AlertModule,
            BreadcrumbModule,
            ButtonIconModule,
            ContextMenuModule,
            DropdownMenuModule,
            EmptyStateModule,
            IconsModule,
            PageHeadingLayoutModule,
            TwoColumnLayoutModule,
            LinkIconModule,
            LogoModule,
            PageHeadingModule,
            ReadFieldModule,
            SecondaryHeaderModule,
            DisableControlModule,
            ElementHostModule,
            TemplateHandleModule
        ], CommonModule,
        AlertModule,
        BreadcrumbModule,
        ButtonIconModule,
        ContextMenuModule,
        DropdownMenuModule,
        EmptyStateModule,
        IconsModule,
        PageHeadingLayoutModule,
        TwoColumnLayoutModule,
        LinkIconModule,
        LogoModule,
        PageHeadingModule,
        ReadFieldModule,
        SecondaryHeaderModule,
        DisableControlModule,
        ElementHostModule,
        TemplateHandleModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: SharedlibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        RouterModule,
                        AlertModule,
                        BreadcrumbModule,
                        ButtonIconModule,
                        ContextMenuModule,
                        DropdownMenuModule,
                        EmptyStateModule,
                        IconsModule,
                        PageHeadingLayoutModule,
                        TwoColumnLayoutModule,
                        LinkIconModule,
                        LogoModule,
                        PageHeadingModule,
                        ReadFieldModule,
                        SecondaryHeaderModule,
                        DisableControlModule,
                        ElementHostModule,
                        TemplateHandleModule
                    ],
                    exports: [
                        CommonModule,
                        AlertModule,
                        BreadcrumbModule,
                        ButtonIconModule,
                        ContextMenuModule,
                        DropdownMenuModule,
                        EmptyStateModule,
                        IconsModule,
                        PageHeadingLayoutModule,
                        TwoColumnLayoutModule,
                        LinkIconModule,
                        LogoModule,
                        PageHeadingModule,
                        ReadFieldModule,
                        SecondaryHeaderModule,
                        DisableControlModule,
                        ElementHostModule,
                        TemplateHandleModule
                    ],
                    providers: [
                        UtilService
                    ]
                }]
        }] });

// export * from './lib/user.model';

/**
 * Generated bundle index. Do not edit.
 */

export { ALERT_CONFIG_TOKEN, Alert, AlertComponent, AlertContainerComponent, AlertModule, AlertService, AlertType, BREADCRUMB_CONFIG_TOKEN, BaseIconComponent, BlockUiDirective, BlockUiModule, BreadcrumbComponent, BreadcrumbModule, BreadcrumbService, ButtonIconComponent, ButtonIconModule, ContextMenuComponent, ContextMenuModule, DisableControlDirective, DisableControlModule, DropdownMenuComponent, DropdownMenuModule, ElementHostDirective, ElementHostModule, EmptyStateComponent, EmptyStateModule, IconCloseComponent, IconDotVerticalComponent, IconEyeComponent, IconLoginComponent, IconLogoutComponent, IconPencilComponent, IconTrashComponent, IconsModule, LinkIconComponent, LinkIconModule, LogoComponent, LogoModule, MenuItem, PageHeadingComponent, PageHeadingLayoutComponent, PageHeadingLayoutModule, PageHeadingModule, ReadFieldComponent, ReadFieldModule, SecondaryHeaderComponent, SecondaryHeaderModule, SecondaryHeaderService, SharedlibModule, TemplateHandleDirective, TemplateHandleModule, TwoColumnLayoutComponent, TwoColumnLayoutModule };
//# sourceMappingURL=sharedlib.js.map
