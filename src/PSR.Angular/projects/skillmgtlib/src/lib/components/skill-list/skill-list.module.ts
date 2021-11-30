import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BlockUiModule, EmptyStateModule, MenuItem } from '@sharedlib';
import { AddSkillCardModule, SkillCardModule, SkillListDisplayModule } from '@skilllib';

import { SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN } from '../../tokens';
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
