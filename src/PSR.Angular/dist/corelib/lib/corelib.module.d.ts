import { ModuleWithProviders } from '@angular/core';
import { IAppConfig } from './tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/common/http";
import * as i3 from "./error/error.module";
export declare class CorelibModule {
    static withConfig(config: IAppConfig): ModuleWithProviders<CorelibModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CorelibModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CorelibModule, never, [typeof i1.CommonModule, typeof i2.HttpClientModule, typeof i3.ErrorModule], [typeof i2.HttpClientModule, typeof i3.ErrorModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CorelibModule>;
}
