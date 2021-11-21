import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DisableControlModule } from '@shared/directives/disable-control.directive';

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
