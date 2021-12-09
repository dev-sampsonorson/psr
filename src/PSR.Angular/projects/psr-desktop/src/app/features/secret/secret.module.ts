import { NgModule } from '@angular/core';
import { SharedlibModule } from '@sharedlib';

import { SecretRoutingModule } from './secret-routing.module';
import { SecretComponent } from './secret.component';
import { TestAlertModule } from './test-alert/test-alert.module';



@NgModule({
    declarations: [SecretComponent],
    imports: [
        SharedlibModule,
        // CommonModule,
        SecretRoutingModule,
        TestAlertModule
        // AlertModule
    ],
    // exports: [SecretComponent]
})
export class SecretModule { }
