import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonIconModule, ContextMenuModule, IconsModule } from '@psr/shared/ui';

import { SkillRatingCardComponent } from './skill-rating-card.component';



@NgModule({
    declarations: [SkillRatingCardComponent],
    imports: [
        CommonModule,

        ButtonIconModule,
        IconsModule,
        ContextMenuModule
    ],
    exports: [SkillRatingCardComponent]
})
export class SkillRatingCardModule { }
