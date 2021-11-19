import { ModuleWithProviders, NgModule } from '@angular/core';
import { BreadcrumbModule } from '@shared/breadcrumb/breadcrumb.module';
import { SharedModule } from '@shared/shared.module';

import { AddSkillCardModule } from './components/add-skill-card/add-skill-card.module';
import { SkillAddModule } from './components/skill-add/skill-add.module';
import { SkillCardModule } from './components/skill-card/skill-card.module';
import { SkillCategoryCardModule } from './components/skill-category-card/skill-category-card.module';
import { SkillCategoryListModule } from './components/skill-category-list/skill-category-list.module';
import { SkillEditModule } from './components/skill-edit/skill-edit.module';
import { SkillFilterModule } from './components/skill-filter/skill-filter.module';
import { SkillFormModule } from './components/skill-form/skill-form.module';
import { SkillListModule } from './components/skill-list/skill-list.module';
import { SkillReadModule } from './components/skill-read/skill-read.module';
import { SkillSubcategoryCardModule } from './components/skill-subcategory-card/skill-subcategory-card.module';
import { SkillSubcategoryListModule } from './components/skill-subcategory-list/skill-subcategory-list.module';
import { breadcrumbConfig } from './config/breadcrumb.config';
import { ISkillMgtConfig } from './models/skill-mgt.model';
import { IndexModule } from './pages/index.module';
import { IndexResolver } from './resolvers/index.resolver';
import { SkillAddResolver } from './resolvers/skill-add.resolver';
import { SkillCategoryResolver } from './resolvers/skill-category.resolver';
import { SkillListResolver } from './resolvers/skill-list.resolver';
import { SkillSubcategoryResolver } from './resolvers/skill-subcategory.resolver';
import { SkillResolver } from './resolvers/skill.resolver';
import { PageTitleService } from './services/page-title.service';
import { SkillFormService } from './services/skill-form.service';
import { SkillsService } from './services/skills.service';
import { SkillMgtRoutingModule } from './skill-mgt-routing.module';
import { SKILL_MGT_CONFIG_TOKEN } from './tokens/skill-mgt-config.token';



@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        BreadcrumbModule.withConfig(breadcrumbConfig || []),
        SkillMgtRoutingModule,

        IndexModule,
        AddSkillCardModule,
        SkillAddModule,
        SkillCardModule,
        SkillCategoryCardModule,
        SkillCategoryListModule,
        SkillEditModule,
        SkillFilterModule,
        SkillFormModule,
        SkillListModule,
        SkillReadModule,
        SkillSubcategoryCardModule,
        SkillSubcategoryListModule

    ],
    providers: [
        PageTitleService,
        SkillFormService,

        SkillsService,
        SkillListResolver,
        SkillResolver,
        SkillAddResolver,
        IndexResolver,
        SkillCategoryResolver,
        SkillSubcategoryResolver
    ]
})
export class SkillManagementModule {
    static withConfig(
        config: ISkillMgtConfig
    ): ModuleWithProviders<SkillManagementModule> {
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
