import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SecretRoutingModule } from './secret-routing.module';
import { SecretComponent } from './secret/secret.component';

@NgModule({
    imports: [CommonModule, SecretRoutingModule],
    declarations: [
        SecretComponent
    ],
    exports: [
        SecretComponent
    ],
})
export class SecretFeatureShellModule { }
