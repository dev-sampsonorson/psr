import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DisableControlModule } from '@sharedlib';

import { SkillFormComponent } from './skill-form.component';



@NgModule({
    declarations: [
        SkillFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DisableControlModule
    ],
    exports: [SkillFormComponent]
})
export class SkillFormModule { }
