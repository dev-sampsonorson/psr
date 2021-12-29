import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReadFieldModule, SecondaryHeaderModule } from '@psr/shared/ui';

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
