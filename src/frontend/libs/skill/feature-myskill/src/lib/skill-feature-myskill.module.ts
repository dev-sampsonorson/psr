import { ModuleWithProviders, NgModule } from '@angular/core';
import { BreadcrumbModule } from '@psr/shared/ui';
import { IPageTitle, PAGE_TITLE_TOKEN } from '@psr/shared/util';
import { SkillDataAccessModule } from '@psr/skill/data-access';
import { SkillUtilModule } from '@psr/skill/util';

import { ListModule } from './components';
import { breadcrumbConfig, skillCardContextMenuConfig } from './config';
import { IMySkillConfig } from './models';
import { MyskillRoutingModule } from './myskill-routing.module';
import { EmployeeIdResolver } from './resolvers/employee-id.resolver';
import { MyskillCategoryResolver } from './resolvers/myskill-category.resolver';
import { MyskillIndexPageResolver } from './resolvers/myskill-index-page.resolver';
import { MyskillListResolver } from './resolvers/myskill-list.resolver';
import { MyskillSubcategoryResolver } from './resolvers/myskill-subcategory.resolver';
import { SkillRatingService } from './services';
import { MY_SKILL_CONFIG_TOKEN } from './tokens';

const _defaultPageTitle: IPageTitle = { title: 'My Skills', description: 'View your skills and rate them' };

@NgModule({
    imports: [
        /* SharedModule,
        SharedUtilModule,
        SkillUiModule,


         */
        SkillUtilModule,
        BreadcrumbModule.withConfig(breadcrumbConfig || []),
        MyskillRoutingModule,
        SkillDataAccessModule,
        ListModule.withConfig(skillCardContextMenuConfig)
        // IndexModule,
    ],
    providers: [
        MyskillIndexPageResolver,
        MyskillCategoryResolver,
        MyskillSubcategoryResolver,
        MyskillListResolver,
        EmployeeIdResolver,
        SkillRatingService,
        { provide: PAGE_TITLE_TOKEN, useValue: _defaultPageTitle }
    ]
})
export class SkillFeatureMyskillModule {
    static withConfig(
        config: IMySkillConfig
    ): ModuleWithProviders<SkillFeatureMyskillModule> {
        return {
            ngModule: SkillFeatureMyskillModule,
            providers: [
                {
                    provide: MY_SKILL_CONFIG_TOKEN,
                    useValue: config || {}
                }
            ]
        };
    }
}
