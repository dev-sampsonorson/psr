import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { ElementHostDirective } from '../../../directives';
import { Alert, IAlertComponent } from '../../alert.model';
import { AlertService } from '../../services/alert.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
    selector: 'psr-ui-alert-container',
    template: `
      <ng-template appElementHost></ng-template>
  `,
    styleUrls: ['./alert-container.component.scss'],
    // providers: [AlertService]
})
export class AlertContainerComponent implements OnInit, OnDestroy {

    @ViewChild(ElementHostDirective, { static: true }) appElementHost!: ElementHostDirective;
    alertSubscription!: Subscription;

    constructor(
        private resolver: ComponentFactoryResolver,
        private alertService: AlertService,
        // public viewContainerRef: ViewContainerRef
    ) { }

    ngOnInit(): void {
        this.alertSubscription = this.alertService.onAlert().subscribe(alert => {
            this.addAlert(alert);
        })
    }

    private addAlert(alert: Alert) {
        const container = this.appElementHost.viewContainerRef;
        const componentFactory = this.resolver.resolveComponentFactory(AlertComponent);
        // container.clear();

        const componentRef = container.createComponent<IAlertComponent>(componentFactory);
        componentRef.instance.alert = alert;

        componentRef.instance.closeAlert.subscribe((status: boolean) => {
            status && componentRef.destroy();
            // status && container.clear();
        });
    }

    ngOnDestroy() {
        this.alertSubscription.unsubscribe();
    }

}
