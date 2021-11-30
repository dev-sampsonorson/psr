import { ModuleWithProviders } from '@angular/core';
import { IAlertOptions } from './alert.model';
import * as i0 from "@angular/core";
import * as i1 from "./components/alert-container.component";
import * as i2 from "./components/alert.component";
import * as i3 from "@angular/common";
import * as i4 from "../directives/element-host.directive";
export declare class AlertModule {
    static forRoot(config: IAlertOptions): ModuleWithProviders<AlertModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AlertModule, [typeof i1.AlertContainerComponent, typeof i2.AlertComponent], [typeof i3.CommonModule, typeof i4.ElementHostModule], [typeof i1.AlertContainerComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AlertModule>;
}
