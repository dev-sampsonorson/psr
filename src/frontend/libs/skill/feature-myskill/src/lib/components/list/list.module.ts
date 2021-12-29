import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BlockUiModule, EmptyStateModule, MenuItem } from '@psr/shared/ui';
import { AddSkillCardModule, SkillCardModule, SkillListDisplayModule } from '@psr/skill/ui';
import { SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN } from '@psr/skill/util';

import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,

    EmptyStateModule,
    SkillListDisplayModule,
    AddSkillCardModule,
    SkillCardModule,
    BlockUiModule
  ],
  exports: [ListComponent]
})
export class ListModule {
    static withConfig(config: MenuItem<any>[]): ModuleWithProviders<ListModule> {
        return {
            ngModule: ListModule,
            providers: [
                {
                    provide: SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN,
                    useValue: config
                }
            ]
        }
    }
}
