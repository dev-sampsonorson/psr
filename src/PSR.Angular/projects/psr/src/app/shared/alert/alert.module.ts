import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ElementHostModule } from '@shared/directives/element-host.directive';

import { AlertContainerComponent } from './components/alert-container.component';
import { AlertComponent } from './components/alert.component';
import { AlertService } from './services/alert.service';



@NgModule({
    declarations: [AlertContainerComponent, AlertComponent],
    imports: [CommonModule, ElementHostModule],
    exports: [AlertContainerComponent],
    providers: [AlertService]
})
export class AlertModule { }
