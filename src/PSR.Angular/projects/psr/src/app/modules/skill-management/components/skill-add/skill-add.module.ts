import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DisableControlModule } from '@shared/directives/disable-control.directive';
import { SecondaryHeaderModule } from '@shared/secondary-header/secondary-header.component';

import { SkillAddComponent } from './skill-add.component';



@NgModule({
    declarations: [SkillAddComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DisableControlModule,
        SecondaryHeaderModule
    ],
    exports: [SkillAddComponent]
})
export class SkillAddModule { }
