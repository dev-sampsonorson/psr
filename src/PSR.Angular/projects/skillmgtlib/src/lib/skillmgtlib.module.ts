import { ModuleWithProviders, NgModule } from '@angular/core';
import { BreadcrumbModule, SharedlibModule } from '@sharedlib';

import { SkillAddModule, SkillEditModule, SkillFilterModule, SkillListModule } from './components';
import { breadcrumbConfig, skillCardContextMenuConfig } from './config';
import { ISkillMgtConfig } from './models';
import { IndexModule } from './pages';
import { IndexResolver } from './resolvers';
import { PageTitleService } from './services';
import { SkillMgtRoutingModule } from './skill-mgt-routing.module';
import { SKILL_MGT_CONFIG_TOKEN } from './tokens';



@NgModule({
    declarations: [
    ],
    imports: [
        SharedlibModule,
        BreadcrumbModule.withConfig(breadcrumbConfig || []),
        SkillMgtRoutingModule,

        IndexModule,
        SkillAddModule,
        SkillEditModule,
        SkillFilterModule,
        SkillListModule.withConfig(skillCardContextMenuConfig)
    ],
    providers: [
        PageTitleService,
        IndexResolver,
    ]
})
export class SkillmgtlibModule {
    static withConfig(
        config: ISkillMgtConfig
    ): ModuleWithProviders<SkillmgtlibModule> {
        return {
            ngModule: BreadcrumbModule,
            providers: [
                {
                    provide: SKILL_MGT_CONFIG_TOKEN,
                    useValue: config || {}
                }
            ]
        };
    }
}
