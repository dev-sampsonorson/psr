import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { SecretRoutingModule } from './secret-routing.module';
import { SecretComponent } from './secret.component';
import { TestAlertModule } from './test-alert/test-alert.module';



@NgModule({
    declarations: [SecretComponent],
    imports: [
        SharedModule,
        // CommonModule,
        SecretRoutingModule,
        TestAlertModule
        // AlertModule
    ],
    // exports: [SecretComponent]
})
export class SecretModule { }
