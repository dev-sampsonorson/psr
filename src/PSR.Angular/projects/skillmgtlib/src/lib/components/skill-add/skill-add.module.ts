import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DisableControlModule, SecondaryHeaderModule } from '@sharedlib';
import { SkillFormModule } from '@skilllib';

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
