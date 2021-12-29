import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SecondaryHeaderModule } from '@psr/shared/ui';
import { SkillFormModule } from '@psr/skill/ui';

import { SkillEditComponent } from './skill-edit.component';



@NgModule({
    declarations: [
        SkillEditComponent
    ],
    imports: [
        CommonModule,

        SkillFormModule,
        SecondaryHeaderModule
    ],
    exports: [SkillEditComponent]
})
export class SkillEditModule { }
