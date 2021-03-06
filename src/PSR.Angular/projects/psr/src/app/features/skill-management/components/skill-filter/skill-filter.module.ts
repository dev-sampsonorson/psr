import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DisableControlModule } from '@shared/directives/disable-control.directive';

import { SkillFilterComponent } from './skill-filter.component';



@NgModule({
    declarations: [SkillFilterComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DisableControlModule
    ],
    exports: [SkillFilterComponent]
})
export class SkillFilterModule { }
