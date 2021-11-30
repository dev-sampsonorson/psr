import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkillCategoryCardComponent } from './skill-category-card.component';



@NgModule({
    declarations: [SkillCategoryCardComponent],
    imports: [
        CommonModule
    ],
    exports: [SkillCategoryCardComponent]
})
export class SkillCategoryCardModule { }
