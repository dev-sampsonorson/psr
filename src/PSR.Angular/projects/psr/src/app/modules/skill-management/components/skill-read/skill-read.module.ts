import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReadFieldModule } from '@shared/read-field/read-field.component';
import { SecondaryHeaderModule } from '@shared/secondary-header/secondary-header.component';

import { SkillReadComponent } from './skill-read.component';



@NgModule({
    declarations: [SkillReadComponent],
    imports: [
        CommonModule,

        ReadFieldModule,
        SecondaryHeaderModule
    ],
    exports: [SkillReadComponent]
})
export class SkillReadModule { }
