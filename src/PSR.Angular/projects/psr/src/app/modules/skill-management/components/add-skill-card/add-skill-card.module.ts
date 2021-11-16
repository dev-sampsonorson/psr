import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddSkillCardComponent } from './add-skill-card.component';



@NgModule({
    declarations: [AddSkillCardComponent],
    imports: [
        CommonModule
    ],
    exports: [AddSkillCardComponent]
})
export class AddSkillCardModule { }
