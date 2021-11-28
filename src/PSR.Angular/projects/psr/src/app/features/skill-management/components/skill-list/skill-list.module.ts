import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN } from '@features/skill-management/tokens/skill-mgt-config.token';
import { EmptyStateModule } from '@shared/empty-state/empty-state.component';
import { MenuItem } from '@shared/menu.model';

import { SkillListDisplayModule } from '../skill-list-display/skill-list-display.module';
import { SkillListComponent } from './skill-list.component';



@NgModule({
    declarations: [SkillListComponent],
    imports: [
        CommonModule,

        EmptyStateModule,
        SkillListDisplayModule
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
