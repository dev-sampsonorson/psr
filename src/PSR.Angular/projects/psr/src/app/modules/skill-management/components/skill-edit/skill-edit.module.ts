import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkillFormModule } from '../skill-form/skill-form.module';
import { SkillEditComponent } from './skill-edit.component';



@NgModule({
    declarations: [
        SkillEditComponent
    ],
    imports: [
        CommonModule,

        SkillFormModule
    ],
    exports: [SkillEditComponent]
})
export class SkillEditModule { }
