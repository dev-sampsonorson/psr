import { ModuleWithProviders } from '@angular/core';
import { MenuItem } from '@sharedlib';
import * as i0 from "@angular/core";
import * as i1 from "./skill-list.component";
import * as i2 from "@angular/common";
import * as i3 from "@sharedlib";
import * as i4 from "@skilllib";
export declare class SkillListModule {
    static withConfig(config: MenuItem<any>[]): ModuleWithProviders<SkillListModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillListModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SkillListModule, [typeof i1.SkillListComponent], [typeof i2.CommonModule, typeof i3.EmptyStateModule, typeof i4.SkillListDisplayModule, typeof i4.AddSkillCardModule, typeof i4.SkillCardModule, typeof i3.BlockUiModule], [typeof i1.SkillListComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SkillListModule>;
}
