import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockUiModule, EmptyStateModule } from '@psr/shared/ui';

import { AddSkillCardModule } from '../add-skill-card/add-skill-card.module';
import { SkillCardModule } from '../skill-card/skill-card.module';
import { SkillListDisplayComponent } from './skill-list-display.component';



@NgModule({
    declarations: [SkillListDisplayComponent],
    imports: [
        CommonModule,

        BlockUiModule,
        EmptyStateModule,
        AddSkillCardModule,
        SkillCardModule,
    ],
    exports: [SkillListDisplayComponent]
})
export class SkillListDisplayModule { }
