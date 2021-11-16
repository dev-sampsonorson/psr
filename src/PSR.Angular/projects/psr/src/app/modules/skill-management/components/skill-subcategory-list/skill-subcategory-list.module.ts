import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkillSubcategoryCardModule } from '../skill-subcategory-card/skill-subcategory-card.module';
import { SkillSubcategoryListComponent } from './skill-subcategory-list.component';



@NgModule({
    declarations: [SkillSubcategoryListComponent],
    imports: [
        CommonModule,

        SkillSubcategoryCardModule
    ],
    exports: [SkillSubcategoryListComponent]
})
export class SkillSubcategoryListModule { }
