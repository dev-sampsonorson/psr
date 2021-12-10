import { ModuleWithProviders, NgModule } from '@angular/core';
import { BreadcrumbModule, SharedModule } from '@psr/shared/ui';
import { SkillSharedModule } from '@psr/skill/shared';

import { SkillAddModule, SkillEditModule, SkillFilterModule, SkillListModule } from './components';
import { breadcrumbConfig, skillCardContextMenuConfig } from './config';
import { ISkillMgtConfig } from './models';
import { IndexModule } from './pages';
import { IndexResolver } from './resolvers';
import { PageTitleService, SkillMgtService } from './services';
import { SkillMgtRoutingModule } from './skill-mgt-routing.module';
import { SKILL_MGT_CONFIG_TOKEN } from './tokens';



@NgModule({
    declarations: [
    ],
    imports: [
        SharedModule,
        BreadcrumbModule.withConfig(breadcrumbConfig || []),
        SkillMgtRoutingModule,

        SkillSharedModule,

        IndexModule,
        SkillAddModule,
        SkillEditModule,
        SkillFilterModule,
        SkillListModule.withConfig(skillCardContextMenuConfig)
    ],
    providers: [
        PageTitleService,
        IndexResolver,
        SkillMgtService,
    ]
})
export class SkillFeatureSkillMgtModule {
    static withConfig(
        config: ISkillMgtConfig
    ): ModuleWithProviders<SkillFeatureSkillMgtModule> {
        return {
            ngModule: SkillFeatureSkillMgtModule,
            providers: [
                {
                    provide: SKILL_MGT_CONFIG_TOKEN,
                    useValue: config || {}
                }
            ]
        };
    }
}
