import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockUiModule } from '@shared/block-ui/block-ui.module';
import { EmptyStateModule } from '@shared/empty-state/empty-state.component';

import { AddSkillCardModule } from '../add-skill-card/add-skill-card.module';
import { SkillCardModule } from '../skill-card/skill-card.module';
import { SkillListComponent } from './skill-list.component';



@NgModule({
    declarations: [SkillListComponent],
    imports: [
        CommonModule,

        AddSkillCardModule,
        SkillCardModule,
        EmptyStateModule,
        BlockUiModule
    ],
    exports: [SkillListComponent]
})
export class SkillListModule { }
