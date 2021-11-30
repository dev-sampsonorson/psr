import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ElementHostModule } from '../directives';
import { IAlertOptions } from './alert.model';
import { AlertContainerComponent } from './components/alert-container.component';
import { AlertComponent } from './components/alert.component';
import { AlertService } from './services/alert.service';
import { ALERT_CONFIG_TOKEN } from './tokens/alert-config.token';



@NgModule({
    declarations: [AlertContainerComponent, AlertComponent],
    imports: [CommonModule, ElementHostModule],
    exports: [AlertContainerComponent]
})
export class AlertModule {
    static forRoot(config: IAlertOptions): ModuleWithProviders<AlertModule> {
        return {
            ngModule: AlertModule,
            providers: [
                AlertService,
                { provide: ALERT_CONFIG_TOKEN, useValue: config }
            ]
        };
    }
}
