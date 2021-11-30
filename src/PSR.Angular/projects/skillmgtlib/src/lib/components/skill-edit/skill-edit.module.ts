import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SecondaryHeaderModule } from '@sharedlib';
import { SkillFormModule } from '@skilllib';

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
