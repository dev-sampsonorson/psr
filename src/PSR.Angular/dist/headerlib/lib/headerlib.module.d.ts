import { ModuleWithProviders } from '@angular/core';
import { MenuItem } from '@sharedlib';
import * as i0 from "@angular/core";
import * as i1 from "./header.component";
import * as i2 from "@angular/common";
import * as i3 from "@sharedlib";
import * as i4 from "./hamburger/hamburger.module";
import * as i5 from "./navigation/navigation.module";
import * as i6 from "./profile-menu/profile-menu.module";
import * as i7 from "./profile-display/profile-display.module";
export declare class HeaderlibModule {
    static withConfig(primaryMenu: MenuItem[], profileMenu: MenuItem[]): ModuleWithProviders<HeaderlibModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderlibModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<HeaderlibModule, [typeof i1.HeaderComponent], [typeof i2.CommonModule, typeof i3.LogoModule, typeof i4.HamburgerModule, typeof i5.NavigationModule, typeof i6.ProfileMenuModule, typeof i7.ProfileDisplayModule], [typeof i1.HeaderComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<HeaderlibModule>;
}
