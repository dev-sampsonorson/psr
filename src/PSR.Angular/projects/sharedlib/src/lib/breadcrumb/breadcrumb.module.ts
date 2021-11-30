import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BREADCRUMB_CONFIG_TOKEN } from './breadcrumb-config.token';
import { BreadcrumbComponent } from './breadcrumb.component';
import { IBreadcrumb } from './breadcrumb.model';
import { BreadcrumbService } from './breadcrumb.service';



@NgModule({
    declarations: [BreadcrumbComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [BreadcrumbService],
    exports: [BreadcrumbComponent]
})
export class BreadcrumbModule {
    static withConfig(
        config: IBreadcrumb[]
    ): ModuleWithProviders<BreadcrumbModule> {
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
