import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN } from '@features/skill-management/tokens/skill-mgt-config.token';
import { BlockUiModule } from '@shared/block-ui/block-ui.module';
import { EmptyStateModule } from '@shared/empty-state/empty-state.component';
import { MenuItem } from '@shared/menu.model';

import { AddSkillCardModule } from '../add-skill-card/add-skill-card.module';
import { SkillCardModule } from '../skill-card/skill-card.module';
import { SkillListDisplayModule } from '../skill-list-display/skill-list-display.module';
import { SkillListComponent } from './skill-list.component';



@NgModule({
    declarations: [SkillListComponent],
    imports: [
        CommonModule,

        EmptyStateModule,
        SkillListDisplayModule,
        AddSkillCardModule,
        SkillCardModule,
        BlockUiModule
    ],
    exports: [SkillListComponent]
})
export class SkillListModule {
    static withConfig(config: MenuItem<any>[]): ModuleWithProviders<SkillListModule> {
        return {
            ngModule: SkillListModule,
            providers: [
                {
                    provide: SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN,
                    useValue: config
                }
            ]
        }
    }
}
