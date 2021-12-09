import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkillSubcategoryCardComponent } from './skill-subcategory-card.component';



@NgModule({
    declarations: [SkillSubcategoryCardComponent],
    imports: [
        CommonModule
    ],
    exports: [SkillSubcategoryCardComponent]
})
export class SkillSubcategoryCardModule { }
