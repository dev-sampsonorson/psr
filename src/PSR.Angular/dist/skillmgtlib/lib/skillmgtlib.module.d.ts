import { ModuleWithProviders } from '@angular/core';
import { ISkillMgtConfig } from './models';
import * as i0 from "@angular/core";
import * as i1 from "@sharedlib";
import * as i2 from "./skill-mgt-routing.module";
import * as i3 from "./pages/index.module";
import * as i4 from "./components/skill-add/skill-add.module";
import * as i5 from "./components/skill-edit/skill-edit.module";
import * as i6 from "./components/skill-filter/skill-filter.module";
import * as i7 from "./components/skill-list/skill-list.module";
export declare class SkillmgtlibModule {
    static withConfig(config: ISkillMgtConfig): ModuleWithProviders<SkillmgtlibModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillmgtlibModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SkillmgtlibModule, never, [typeof i1.SharedlibModule, typeof i1.BreadcrumbModule, typeof i2.SkillMgtRoutingModule, typeof i3.IndexModule, typeof i4.SkillAddModule, typeof i5.SkillEditModule, typeof i6.SkillFilterModule, typeof i7.SkillListModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SkillmgtlibModule>;
}
