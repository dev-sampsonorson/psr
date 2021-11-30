import { ModuleWithProviders } from '@angular/core';
import { IBreadcrumb } from './breadcrumb.model';
import * as i0 from "@angular/core";
import * as i1 from "./breadcrumb.component";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
export declare class BreadcrumbModule {
    static withConfig(config: IBreadcrumb[]): ModuleWithProviders<BreadcrumbModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BreadcrumbModule, [typeof i1.BreadcrumbComponent], [typeof i2.CommonModule, typeof i3.RouterModule], [typeof i1.BreadcrumbComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BreadcrumbModule>;
}
