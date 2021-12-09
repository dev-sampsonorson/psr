import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DisableControlModule, SecondaryHeaderModule } from '@psr/shared/ui';
import { SkillFormModule } from '@psr/skill/shared';

import { SkillAddComponent } from './skill-add.component';



@NgModule({
    declarations: [SkillAddComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DisableControlModule,
        SecondaryHeaderModule,
        SkillFormModule
    ],
    exports: [SkillAddComponent]
})
export class SkillAddModule { }
