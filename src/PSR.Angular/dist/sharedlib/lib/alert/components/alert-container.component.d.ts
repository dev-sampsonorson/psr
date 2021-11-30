import { ComponentFactoryResolver, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ElementHostDirective } from '../../directives';
import { AlertService } from '../services/alert.service';
import * as i0 from "@angular/core";
export declare class AlertContainerComponent implements OnInit, OnDestroy {
    private resolver;
    private alertService;
    appElementHost: ElementHostDirective;
    alertSubscription: Subscription;
    constructor(resolver: ComponentFactoryResolver, alertService: AlertService);
    ngOnInit(): void;
    private addAlert;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertContainerComponent, "app-alert-container", never, {}, {}, never, never>;
}
