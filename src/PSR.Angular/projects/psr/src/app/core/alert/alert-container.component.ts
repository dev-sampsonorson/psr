import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AlertComponent } from './alert.component';
import { Alert, IAlertComponent } from './alert.model';
import { AlertService } from './alert.service';
import { Subscription } from 'rxjs';
import { AlertHostDirective } from './alert-host.directive';

@Component({
    selector: 'app-alert-container',
    template: `
      <ng-template appAlertHost></ng-template>
  `,
    styles: [`
        :host {
            @apply flex flex-row flex-wrap fixed top-0 right-0 px-4 py-6 sm:p-6 max-w-sm items-end sm:items-end pointer-events-none;
            @apply max-w-sm w-full z-20;
        }
    `
    ]
})
export class AlertContainerComponent implements OnInit, OnDestroy {

    @ViewChild(AlertHostDirective, { static: true }) alertHost!: AlertHostDirective;
    alertSubscription!: Subscription;

    constructor(
        private resolver: ComponentFactoryResolver,
        private alertService: AlertService
    ) { }

    ngOnInit(): void {
        this.alertSubscription = this.alertService.onAlert().subscribe(alert => {
            this.addAlert(alert);
        })
    }

    private addAlert(alert: Alert) {
        const container = this.alertHost.viewContainerRef;
        const componentFactory = this.resolver.resolveComponentFactory(AlertComponent);
        // container.clear();

        const componentRef = container.createComponent<IAlertComponent>(componentFactory);
        componentRef.instance.alert = alert;

        componentRef.instance.closeAlert.subscribe(status => {
            status && componentRef.destroy();
            // status && container.clear();
        });
    }

    ngOnDestroy() {
        this.alertSubscription.unsubscribe();
    }

}
