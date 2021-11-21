import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SecondaryHeaderModule } from '@shared/secondary-header/secondary-header.component';

import { SkillFormModule } from '../skill-form/skill-form.module';
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
