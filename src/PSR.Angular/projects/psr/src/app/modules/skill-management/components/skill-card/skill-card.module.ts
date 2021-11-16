import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonIconModule } from '@shared/button-icon/button-icon.component';
import { ContextMenuModule } from '@shared/context-menu/context-menu.module';
import { IconsModule } from '@shared/icons/icons.module';

import { SkillCardComponent } from './skill-card.component';



@NgModule({
    declarations: [SkillCardComponent],
    imports: [
        CommonModule,

        ButtonIconModule,
        IconsModule,
        ContextMenuModule
    ],
    exports: [SkillCardComponent]
})
export class SkillCardModule { }
