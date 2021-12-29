import { ModuleWithProviders, NgModule } from '@angular/core';
import { BreadcrumbModule, SharedModule } from '@psr/shared/ui';
import { IPageTitle, PAGE_TITLE_TOKEN, SharedUtilModule } from '@psr/shared/util';
import { SkillDataAccessModule } from '@psr/skill/data-access';
import { SkillUiModule } from '@psr/skill/ui';
import { IndexPageResolver, SkillUtilModule } from '@psr/skill/util';

import { SkillAddModule, SkillEditModule, SkillFilterModule, SkillListModule } from './components';
import { breadcrumbConfig, skillCardContextMenuConfig } from './config';
import { ISkillMgtConfig } from './models';
import { IndexModule } from './pages';
import { SkillMgtService } from './services';
import { SkillMgtRoutingModule } from './skill-mgt-routing.module';
import { SKILL_MGT_CONFIG_TOKEN } from './tokens';

const _defaultPageTitle: IPageTitle = { title: 'Skill Management', description: 'Manage skill categories, subcategories, and skills' };

@NgModule({
    declarations: [
    ],
    imports: [
        SharedModule,
        SharedUtilModule,
        BreadcrumbModule.withConfig(breadcrumbConfig || []),
        SkillMgtRoutingModule,
        SkillDataAccessModule,
        SkillUiModule,
        SkillUtilModule,

        IndexModule,
        SkillAddModule,
        SkillEditModule,
        SkillFilterModule,
        SkillListModule.withConfig(skillCardContextMenuConfig)
    ],
    providers: [
        IndexPageResolver,
        SkillMgtService,
        { provide: PAGE_TITLE_TOKEN, useValue: _defaultPageTitle }
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
