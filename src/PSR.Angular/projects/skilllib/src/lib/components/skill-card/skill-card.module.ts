import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonIconModule, ContextMenuModule, IconsModule } from '@sharedlib';

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
